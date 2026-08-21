/**
 * Refill rows that failed for environment reasons, in place.
 *
 * A dropped connection is not a datum. Leaving it in the table as an empty cell
 * would understate whichever bucket the reply would have gone into, and quietly
 * changing the denominator instead would hide the fact that anything failed at
 * all. So the row is re-asked with identical arguments, from the same
 * directory, and results-<tag>.json records `retried` on it so the table can
 * say how many cells were refilled.
 *
 *   node retry.mjs --tag main
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { makeReport } from "./reports.mjs";
import { classify } from "./classify.mjs";
import { call } from "./cli.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const TAG = arg("tag", "main");
const FILE = join(HERE, `results-${TAG}.json`);
const data = JSON.parse(readFileSync(FILE, "utf8"));

const broken = data.rows.filter((r) => r.verdict === "error");
console.log(`${broken.length} rows to refill in ${FILE}`);

for (const r of broken) {
  // Rebuild the exact document from the seed rather than reading it back out
  // of the results file, so the retry cannot be fed a different page than the
  // original call was.
  const rep = makeReport(r.seed, { lo: data.skew.lo, hi: data.skew.hi });
  const variant = r.condition === "defect" ? rep.defective : rep.clean;
  if (JSON.stringify(variant.truth) !== JSON.stringify(r.truth))
    throw new Error(`seed ${r.seed}: regenerated document does not match the recorded truth`);
  const res = await call(r.model, `${data.prompts[r.prompt]}\n\n${variant.text}`);
  const c = classify(res.raw, variant.truth);
  Object.assign(r, c, {
    answeredBy: res.answeredBy,
    costUsd: res.costUsd,
    outputTokens: res.outputTokens,
    raw: res.raw,
    retried: r.error,
  });
  delete r.error;
  console.log(`${r.model} ${r.prompt} ${r.condition} s${r.seed}: ${c.verdict}`);
}

writeFileSync(FILE, JSON.stringify(data, null, 2) + "\n");
console.log(`wrote ${FILE}`);
