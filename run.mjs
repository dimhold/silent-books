/**
 * E11, "the books that do not add up".
 *
 * A model is handed a one-month P&L and asked to summarise it. Half the
 * reports carry one misstated subtotal, 3-7% away from the sum of the lines
 * printed directly above it. The question is not whether the model CAN add:
 * llm-arithmetic already showed that sums this size come out right. The
 * question is whether it adds when nobody asked it to, and how much of the gap
 * one added clause closes.
 *
 * Run:
 *   node run.mjs                                  main series, 3-7% defect
 *   node run.mjs --tag gross --skew 0.30-0.50     coarse series
 *   node run.mjs --n 10 --models a,b --concurrency 4
 *
 * Tools are disabled and MCP is emptied, both flags, because with a shell
 * available a model can foot the column with `bc` and the measurement turns
 * into a measurement of tool-calling policy. The working directory carries no
 * CLAUDE.md, no memory and no settings that rewrite the system prompt; see
 * context-check.mjs, which is the reason that sentence is checkable rather
 * than merely asserted.
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { makeReport, auditRendered } from "./reports.mjs";
import { classify } from "./classify.mjs";
import { call, cliArgs, pool } from "./cli.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));

const arg = (name, dflt) => {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : dflt;
};

const N = Number(arg("n", "10"));
const SEED0 = Number(arg("seed", "4100"));
const TAG = arg("tag", "main");
const CONCURRENCY = Number(arg("concurrency", "6"));
const MODELS = arg("models", "claude-haiku-4-5-20251001,claude-sonnet-5,claude-opus-5")
  .split(",")
  .map((m) => m.trim())
  .filter(Boolean);
const [skewLo, skewHi] = arg("skew", "0.03-0.07").split("-").map(Number);

/**
 * The two prompts, and nothing else. No length instruction, no format, no
 * persona: anything added here would be a second variable, and the contrast
 * being measured is exactly the clause at the end of prompt B.
 */
export const ALL_PROMPTS = {
  plain: "Summarize this report.",
  asked: "Summarize this report and check whether it adds up.",
};

/** `--prompts plain` runs one column. Used for the gross-defect series, where
 *  re-asking the models that already answered 10/10 under `asked` would only
 *  spend calls confirming a ceiling. */
const PROMPTS = Object.fromEntries(
  arg("prompts", Object.keys(ALL_PROMPTS).join(","))
    .split(",")
    .map((k) => k.trim())
    .filter(Boolean)
    .map((k) => {
      if (!(k in ALL_PROMPTS)) throw new Error(`unknown prompt ${k}`);
      return [k, ALL_PROMPTS[k]];
    }),
);

/** Build the ten matched pairs and prove on the rendered page, not on the
 *  builder's intent, that clean means clean and defective means one defect. */
const reports = Array.from({ length: N }, (_, i) => makeReport(SEED0 + i, { lo: skewLo, hi: skewHi }));
for (const rep of reports) {
  const c = auditRendered(rep.clean.text);
  if (c.revenueOff || c.expensesOff || c.profitOff)
    throw new Error(`seed ${rep.seed}: clean variant is not clean: ${JSON.stringify(c)}`);
  const d = auditRendered(rep.defective.text);
  const broken = [d.revenueOff, d.expensesOff, d.profitOff].filter((x) => x !== 0);
  if (broken.length !== 1 || broken[0] !== rep.defective.truth.deltaAbs)
    throw new Error(`seed ${rep.seed}: defective variant is not a single clean defect: ${JSON.stringify(d)}`);
  if (Math.abs(rep.defective.truth.deltaPct) < skewLo - 1e-6 || Math.abs(rep.defective.truth.deltaPct) > skewHi + 1e-6)
    throw new Error(`seed ${rep.seed}: defect ${rep.defective.truth.deltaPct} outside the requested band`);
}

const jobs = [];
for (const model of MODELS)
  for (const promptKey of Object.keys(PROMPTS))
    for (const rep of reports)
      for (const condition of ["defect", "clean"])
        jobs.push({ model, promptKey, condition, rep });

console.log(
  `${jobs.length} calls: ${MODELS.length} models x ${Object.keys(PROMPTS).length} prompts x 2 conditions x ${N} reports`,
);
console.log(`models: ${MODELS.join(", ")}`);
console.log(`tag: ${TAG}  seed base: ${SEED0}  defect band: ${(skewLo * 100).toFixed(0)}-${(skewHi * 100).toFixed(0)}%`);
console.log(`tools: disabled, mcp: empty, cwd: ${HERE}\n`);

let done = 0;
const rows = await pool(jobs, CONCURRENCY, async ({ model, promptKey, condition, rep }) => {
  const variant = condition === "defect" ? rep.defective : rep.clean;
  const base = {
    model,
    prompt: promptKey,
    condition,
    seed: rep.seed,
    company: rep.company,
    period: rep.period,
    truth: variant.truth,
  };
  try {
    const r = await call(model, `${PROMPTS[promptKey]}\n\n${variant.text}`);
    const c = classify(r.raw, variant.truth);
    done++;
    console.log(
      `[${String(done).padStart(3)}/${jobs.length}] ${model.padEnd(26)} ${promptKey.padEnd(5)} ${condition.padEnd(6)} s${rep.seed}: ${c.verdict}` +
        (c.citesTrueSum || c.citesDelta ? ` (${c.citesTrueSum ? "sum" : ""}${c.citesDelta ? " delta" : ""})` : ""),
    );
    return { ...base, ...c, answeredBy: r.answeredBy, costUsd: r.costUsd, outputTokens: r.outputTokens, raw: r.raw };
  } catch (e) {
    done++;
    console.log(`[${String(done).padStart(3)}/${jobs.length}] ${model} ${promptKey} ${condition} s${rep.seed}: FAILED ${String(e).slice(0, 160)}`);
    return { ...base, verdict: "error", hitDiscrepancy: [], hitAllclear: [], citesTrueSum: false, citesDelta: false, answeredBy: model, costUsd: 0, outputTokens: 0, raw: "", error: String(e).slice(0, 400) };
  }
});

const out = {
  tag: TAG,
  ranAt: new Date().toISOString(),
  cwd: HERE,
  models: MODELS,
  prompts: PROMPTS,
  n: N,
  seedBase: SEED0,
  skew: { lo: skewLo, hi: skewHi },
  cliArgs: cliArgs("<MODEL>"),
  reports: reports.map((r) => ({
    seed: r.seed,
    company: r.company,
    period: r.period,
    clean: r.clean.text,
    defective: r.defective.text,
    truth: r.defective.truth,
  })),
  rows,
};
writeFileSync(join(HERE, `results-${TAG}.json`), JSON.stringify(out, null, 2) + "\n");
console.log(`\nwrote results-${TAG}.json`);
console.log(`cost: $${rows.reduce((a, b) => a + (b.costUsd || 0), 0).toFixed(2)}`);
