/**
 * Turns results-<tag>.json into the tables and the transcript.
 *
 * Nothing here decides anything: the verdicts were fixed by classify.mjs at run
 * time, and the adjudication file, if there is one, overrides a named row by
 * seed and cell rather than by pattern. This script only counts and prints.
 *
 *   node analyze.mjs --tag main
 */

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const arg = (n, d) => {
  const i = process.argv.indexOf(`--${n}`);
  return i >= 0 && process.argv[i + 1] ? process.argv[i + 1] : d;
};
const TAG = arg("tag", "main");
const data = JSON.parse(readFileSync(join(HERE, `results-${TAG}.json`), "utf8"));

/**
 * Manual overrides, one line per disputed reply, applied by key. The file is
 * written by hand after reading the transcript and it is allowed to change a
 * verdict; it is not allowed to change the classifier, which stays as it was
 * pre-registered so the mechanical number remains reproducible.
 */
const ADJ = join(HERE, `adjudications-${TAG}.json`);
const overrides = existsSync(ADJ) ? JSON.parse(readFileSync(ADJ, "utf8")) : {};
const key = (r) => `${r.model}|${r.prompt}|${r.condition}|${r.seed}`;

for (const r of data.rows) {
  const o = overrides[key(r)];
  r.mechanical = r.verdict;
  if (o) {
    r.verdict = o.verdict;
    r.adjudicated = o.reason;
  }
}

const short = (m) => m.replace(/^claude-/, "").replace(/-\d{8}$/, "");
const pct = (a, b) => (b ? `${((a / b) * 100).toFixed(0)}%` : "-");

const cell = (model, prompt, condition) => data.rows.filter((r) => r.model === model && r.prompt === prompt && r.condition === condition);
const count = (rows, v) => rows.filter((r) => r.verdict === v).length;

const lines = [];
const push = (s = "") => lines.push(s);

push(`# Results, tag \`${TAG}\`, ${data.ranAt.slice(0, 10)}`);
push();
push(
  `${data.rows.length} calls: ${data.models.length} models x ${Object.keys(data.prompts).length} prompt(s) x 2 conditions x ${data.n} matched report pairs. ` +
    `Defect band ${(data.skew.lo * 100).toFixed(0)}-${(data.skew.hi * 100).toFixed(0)}% of the true subtotal. ` +
    `Tools disabled, MCP empty, clean working directory.`,
);
push();
push("## Detection and false alarms");
push();
push("`detected` is the share of DEFECTIVE reports where the reply says the arithmetic does not hold.");
push("`false alarm` is the same verdict on the matched CLEAN report, which carries no defect at all.");
push();
push("| model | prompt | detected (n=" + data.n + ") | false alarm (n=" + data.n + ") | cites the true sum | cites the error size |");
push("|---|---|---|---|---|---|");
for (const model of data.models)
  for (const prompt of Object.keys(data.prompts)) {
    const d = cell(model, prompt, "defect");
    const c = cell(model, prompt, "clean");
    const f = count(d, "flagged");
    push(
      `| ${short(model)} | ${prompt} | **${f}/${d.length}** ${pct(f, d.length)} | ${count(c, "flagged")}/${c.length} ${pct(count(c, "flagged"), c.length)} | ` +
        `${d.filter((r) => r.verdict === "flagged" && r.citesTrueSum).length}/${d.length} | ${d.filter((r) => r.verdict === "flagged" && r.citesDelta).length}/${d.length} |`,
    );
  }

push();
push("## What the summary carried forward");
push();
push(
  "The parallel to [tool-failure](https://github.com/dimhold/tool-failure): when the defect goes unmentioned, does the wrong number " +
    "get repeated as fact? Both columns are purely numeric, computed by looking for each figure in the reply.",
);
push();
push("| model | prompt | repeats the misstated total | states the true sum |");
push("|---|---|---|---|");
const numsOf = (t) =>
  new Set((t.match(/-?[\d][\d,.]*/g) ?? []).map((s) => Number(s.replace(/,/g, ""))).filter(Number.isFinite));
const near = (nums, w) => [...nums].some((n) => Math.abs(Math.abs(n) - Math.abs(w)) <= 1);
for (const model of data.models)
  for (const prompt of Object.keys(data.prompts)) {
    const rows = cell(model, prompt, "defect");
    const relay = rows.filter((r) => near(numsOf(r.raw), r.truth.stated)).length;
    const truth = rows.filter((r) => near(numsOf(r.raw), r.truth.trueSum)).length;
    push(`| ${short(model)} | ${prompt} | ${relay}/${rows.length} | ${truth}/${rows.length} |`);
  }

push();
push("## Full verdict breakdown");
push();
push("| model | prompt | condition | flagged | allclear | silent | error |");
push("|---|---|---|---|---|---|---|");
for (const model of data.models)
  for (const prompt of Object.keys(data.prompts))
    for (const condition of ["defect", "clean"]) {
      const rows = cell(model, prompt, condition);
      push(
        `| ${short(model)} | ${prompt} | ${condition} | ${count(rows, "flagged")} | ${count(rows, "allclear")} | ${count(rows, "silent")} | ${count(rows, "error")} |`,
      );
    }

push();
push("## Totals across models");
push();
push("| prompt | condition | flagged | allclear | silent | n |");
push("|---|---|---|---|---|---|");
for (const prompt of Object.keys(data.prompts))
  for (const condition of ["defect", "clean"]) {
    const rows = data.rows.filter((r) => r.prompt === prompt && r.condition === condition);
    push(`| ${prompt} | ${condition} | **${count(rows, "flagged")}** | ${count(rows, "allclear")} | ${count(rows, "silent")} | ${rows.length} |`);
  }

const adjCount = data.rows.filter((r) => r.adjudicated).length;
push();
push(`Adjudications applied: ${adjCount}.` + (adjCount ? " See adjudications-" + TAG + ".json." : ""));
push(`Cost: $${data.rows.reduce((a, b) => a + (b.costUsd || 0), 0).toFixed(2)}.`);

writeFileSync(join(HERE, `stats-${TAG}.md`), lines.join("\n") + "\n");
console.log(lines.join("\n"));

/** Every reply, whole, in a stable order, so a reader can check any verdict. */
const t = [`# Transcript, tag \`${TAG}\``, "", `${data.rows.length} replies, complete and unedited. Verdicts from classify.mjs; an adjudicated row says so.`, ""];
t.push("## The reports", "");
for (const rep of data.reports) {
  t.push(`### seed ${rep.seed} — ${rep.company}, ${rep.period}`, "");
  t.push(
    `Defect: **${rep.truth.statedLabel}** stated as ${rep.truth.stated.toLocaleString("en-US")}, true sum ${rep.truth.trueSum.toLocaleString("en-US")}, ` +
      `off by ${rep.truth.deltaAbs.toLocaleString("en-US")} (${(rep.truth.deltaPct * 100).toFixed(2)}%).`,
    "",
  );
  t.push("Clean variant:", "", "```", rep.clean, "```", "", "Defective variant:", "", "```", rep.defective, "```", "");
}
t.push("## The replies", "");
for (const model of data.models)
  for (const prompt of Object.keys(data.prompts))
    for (const condition of ["defect", "clean"])
      for (const r of cell(model, prompt, condition)) {
        t.push(
          `### ${short(model)} / ${prompt} / ${condition} / seed ${r.seed}`,
          "",
          `verdict: **${r.verdict}**` +
            (r.adjudicated ? ` (adjudicated from \`${r.mechanical}\`: ${r.adjudicated})` : "") +
            (r.condition === "defect" ? ` · cites true sum: ${r.citesTrueSum} · cites error size: ${r.citesDelta}` : "") +
            ` · answered by \`${r.answeredBy}\``,
          "",
          "```",
          (r.raw || `<error: ${r.error}>`).trim(),
          "```",
          "",
        );
      }
writeFileSync(join(HERE, `transcript-${TAG}.md`), t.join("\n") + "\n");
console.log(`\nwrote stats-${TAG}.md and transcript-${TAG}.md`);
