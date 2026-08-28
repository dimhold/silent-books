# Does a model notice that the books do not add up?

A model is handed a one-month profit and loss account and asked to summarise it.
Half the accounts carry one misstated subtotal, 3 to 7% away from the sum of the
lines printed directly above it. Nothing else on the page is wrong.

The question is not whether a model **can** add. A previous run in this series
([llm-arithmetic](https://github.com/dimhold/llm-arithmetic)) showed that sums of this size come out
right. The question is whether it adds **when nobody asked it to**, and how much
of the gap a single clause closes.

This is the finance-domain half of a pair. The other half,
[tool-failure](https://github.com/dimhold/tool-failure), corrupted the value a tool returned and found
that the corruption was passed on 40 times out of 40. That result had a defence:
there is no schema for a token, so from inside the reply a bad value and a good
one look identical. Here the defence is gone. The check is 12 additions over
numbers that are on the page.

## What came out

Four models, 220 calls. Asked only to summarise, haiku-4-5 and sonnet-5 missed
the misstated subtotal in 20 of 20 runs and repeated the wrong figure as fact.
Adding "and check whether it adds up" took both to 10 of 10. opus-5 and fable-5
caught it 10 of 10 unprompted, at 3-7% and again at 30-50%. Zero false alarms
across 80 clean reports. Numbers and argument: [RESULTS.md](RESULTS.md).

Four papers already occupy the neighbourhood, one of them closely, and the
result reads differently once you know that: [PRIOR-WORK.md](PRIOR-WORK.md).

## Method

- **Documents.** 15 numeric rows: four revenue lines and their subtotal, eight
  operating expense lines and their subtotal, operating profit. Generated from a
  seed by [`reports.mjs`](reports.mjs). Line-item mix drawn from share bands, so
  the payroll line is the largest cost and insurance is not larger than wages.
- **Matched pairs.** One seed produces two reports with the same 12 line items.
  The clean one foots exactly, to the last digit, because every line is a whole
  ten and every subtotal is the sum of the rounded lines. The defective one has
  exactly one subtotal replaced, and operating profit recomputed from the stated
  subtotals so the misstated subtotal is the only broken relation on the page.
  The false-alarm control and the detection cell then differ by one number.
- **Ground truth in code**, then re-derived by parsing the rendered page. The run
  aborts if a clean report is unbalanced or a defective one is broken twice.
- **Two prompts**, and nothing attached to either:
  `Summarize this report.` and `Summarize this report and check whether it adds up.`
- **Isolation.** `--tools "" --strict-mcp-config --mcp-config no-mcp.json`. With
  a shell available the model foots the column with a tool call and the
  measurement becomes a measurement of tool-calling policy.
- **Clean room.** The run directory holds no CLAUDE.md, no AGENTS.md, no memory
  file and no settings that rewrite the system prompt. [`context-check.mjs`](context-check.mjs)
  proves it by filesystem scan and stores the result, together with a
  deliberately dirty control directory, in `context-check.json`. This step
  exists because an earlier experiment in this series produced a headline number
  that turned out to be a project instruction the CLI had loaded silently.
- **Verdicts** are deterministic, from the reply text, by rules fixed before the
  first call: [`CRITERIA.md`](CRITERIA.md), [`classify.mjs`](classify.mjs).
  Every reply is in the transcript whole. Disagreements between the classifier
  and a human reading are recorded as adjudications, not fixed by editing a
  regex afterwards.

## Files

| file | what it is |
|---|---|
| `CRITERIA.md` | the rules, written before the run |
| `reports.mjs` | report generator and ground truth |
| `classify.mjs` | the deterministic verdict rules |
| `cli.mjs` | one isolated call to the CLI, shared by the harness and the retry |
| `run.mjs` | the harness |
| `retry.mjs` | refills rows lost to a dropped connection, identical arguments |
| `analyze.mjs` | counts and transcript |
| `adjudications-*.json` | every place a human disagreed with the classifier |
| `context-check.mjs` / `context-check.json` | proof the room was empty |
| `RESULTS.md` | what came out |
| `PRIOR-WORK.md` | who has already done this, and what is left |
| `stats-*.md` | the tables |
| `transcript-*.md` | every reply, unedited |

## Reproduce

```
node context-check.mjs          # must print clean: true
node run.mjs --tag main
node analyze.mjs --tag main

# second series: same ten documents, defect at 30-50%, summarize only
node run.mjs --tag gross --skew 0.30-0.50 --prompts plain --models claude-haiku-4-5-20251001,claude-sonnet-5
node analyze.mjs --tag gross

# the fourth model, added a day later on the same protocol and the same seeds
node context-check.mjs --label fable
node run.mjs --tag fable --models claude-fable-5
node analyze.mjs --tag fable
node run.mjs --tag fable-gross --skew 0.30-0.50 --prompts plain --models claude-fable-5
node analyze.mjs --tag fable-gross
```

`--label` keeps a later context check next to the earlier ones in
`context-check.json` instead of replacing the entry for the same directory.

Results and the argument: [RESULTS.md](RESULTS.md).

## What this does not measure

- Synthetic accounts, one format, one defect type. Misclassification, a wrong
  accrual, a smuggled assumption, a period that does not tie to the prior month:
  none of it is here. Those are the failures that actually cost money, and a
  subtotal that does not foot is the easiest thing on that list.
- Not a measurement of whether a model can do a finance job. One reflex, one
  document type.
- One CLI at default decoding, ten pairs per cell. Three models in one sitting,
  fable-5 in a second one on the same seeds and the same flags. Cell rates are
  indicative; only large gaps mean anything.
- The CLI ships its own system prompt in every call. This measures how a model
  behaves through that CLI, not how a bare API call behaves.
