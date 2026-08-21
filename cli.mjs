/**
 * One call to the claude CLI, isolated.
 *
 * Split out of run.mjs so that the retry path cannot drift from the run path.
 * A row refilled after a dropped connection has to be produced by byte-identical
 * arguments to the row next to it, or the cell is a mixture of two experiments.
 */

import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));

export function cliArgs(model) {
  return [
    "-p",
    "--output-format",
    "json",
    "--model",
    model,
    "--tools",
    '""',
    "--strict-mcp-config",
    "--mcp-config",
    join(HERE, "no-mcp.json"),
  ];
}

/**
 * Which model actually answered. `modelUsage` also lists the small model the
 * CLI uses for its own housekeeping, so the requested name is matched first and
 * only then is the entry taken. Picking the largest key was measured wrong on
 * short answers: a housekeeping haiku call produced more output tokens than the
 * opus answer it was attached to.
 */
export function verifyModel(env, requested) {
  const keys = env.modelUsage && typeof env.modelUsage === "object" ? Object.keys(env.modelUsage) : [];
  const match = keys.find((k) => k.includes(requested) || requested.includes(k));
  if (match) return match;
  if (keys.length) throw new Error(`requested ${requested} but modelUsage shows only [${keys.join(", ")}]`);
  return typeof env.model === "string" && env.model ? env.model : requested;
}

export function callOnce(model, prompt) {
  return new Promise((resolve, reject) => {
    const child = spawn("claude", cliArgs(model), { shell: true, windowsHide: true, cwd: HERE });
    let out = "";
    let err = "";
    child.stdout.on("data", (d) => (out += d.toString("utf8")));
    child.stderr.on("data", (d) => (err += d.toString("utf8")));
    child.on("error", reject);
    child.on("close", () => {
      let env;
      try {
        env = JSON.parse(out);
      } catch {
        // API failures arrive with an EMPTY stderr and the reason in stdout, so
        // the empty-stderr case is reported as what it is rather than as a
        // mysterious blank.
        return reject(new Error(`non-JSON output: ${(out || err || "<both empty>").slice(0, 300)}`));
      }
      if (env.is_error) {
        const status = Number(env.api_error_status);
        const e = new Error(`${status || ""} ${String(env.result).slice(0, 200)}`.trim());
        e.retryable = status === 429 || status >= 500;
        return reject(e);
      }
      try {
        resolve({
          raw: String(env.result ?? ""),
          answeredBy: verifyModel(env, model),
          costUsd: Number(env.total_cost_usd ?? 0),
          outputTokens: env.usage?.output_tokens ?? 0,
        });
      } catch (e) {
        reject(e);
      }
    });
    child.stdin.write(prompt, "utf8");
    child.stdin.end();
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Environment failures are retried so they never get mistaken for a model
 *  declining to answer. A dropped connection is not a datum. */
export async function call(model, prompt, attempts = 5) {
  let last;
  for (let i = 0; i < attempts; i++) {
    try {
      return await callOnce(model, prompt);
    } catch (e) {
      last = e;
      if (!e.retryable) throw e;
      await sleep(5000 * 2 ** i);
    }
  }
  throw last;
}

export async function pool(items, limit, fn) {
  const results = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(limit, items.length) }, async () => {
      for (;;) {
        const i = next++;
        if (i >= items.length) return;
        results[i] = await fn(items[i], i);
      }
    }),
  );
  return results;
}
