# Who has already done this

Written **2026-08-28**, after the run, not before it. That is the wrong order and
it is recorded here rather than hidden: the rule that a novelty check comes
before the first number was adopted on 2026-08-27, six days after these
documents were generated. The check is here because publishing a result without
it would leave the reader to work out on their own that the neighbourhood is
populated.

Nothing below changes a number in [RESULTS.md](RESULTS.md). It changes what the
result is allowed to claim.

## Searched

arXiv, GitHub, ACL Anthology and ordinary web search, on: LLM detection of
arithmetic inconsistency in financial statements; injected numeric perturbations
with clean controls; proactive error handling without an explicit instruction to
check; self-correction blind spots; table reading errors.

## Found

**[FinVerBench](https://arxiv.org/abs/2605.29586)** is the closest neighbour, and
it is close. Real 10-K XBRL filings from 43 S&P 500 companies, 105 observable
instances split 43 clean and 62 error-injected, fourteen models completing runs.
It has the matched clean control this run has, and it finds the same thing that
control is for: nine of fourteen models produced 95-100% false positives on
clean statements, so the hard part is calibration and not detection. Its errors
span arithmetic, cross-statement linkage and year-over-year comparison, which is
a wider set than the one broken subtotal used here.

The difference is the prompt. FinVerBench runs a **guided-checklist prompt**: the
model is told to verify, and told what relationships to walk. It reports no
comparison between a plain summarisation request and an explicit instruction to
check the arithmetic. That comparison is the entire content of this run.

**[Mis-prompt](https://arxiv.org/abs/2506.00064)** (ACL 2025) benchmarks
proactive error handling, that is, error handling when no error-handling
instruction is given. Same shape of question, and it reaches the same verdict:
current models handle errors poorly when not told to look for them. It is a
general taxonomy across error categories with a fine-tuning result attached, not
a finance-arithmetic measurement, and it does not isolate what one added clause
buys.

**[Self-Correction Bench](https://arxiv.org/abs/2507.02778)** finds that models
correct an error presented externally while missing the identical error in their
own output. Adjacent: the capability is present and simply not activated. Different
axis, since here the error is external in both cells and only the request
changes.

**[When LLMs Read Tables Carelessly](https://arxiv.org/html/2606.32029v1)** and
**[SummExecEdit](https://arxiv.org/pdf/2412.13378)** cover table data referencing
errors, and factual inconsistency detection in summaries where the best model
reaches roughly 73%. Neighbouring literature on the same failure family.

**[FinSheet-Bench](https://arxiv.org/html/2603.07316v1)**, FIND, and Kensho's
write-up on document inconsistency detection are all finance-domain error
finding in the explicit-verification setting.

## What is left that is ours

Not "nobody measures whether models catch bad subtotals". They do, at larger
scale and on real filings.

What remains is the **delta from one clause**, on identical documents, with
everything else fixed:

- Asked only to summarise, haiku-4-5 and sonnet-5 missed the misstated subtotal
  in 20 of 20 and repeated the wrong figure as fact. `and check whether it adds
  up` took both to 10 of 10. Same document, same model, same decoding.
- The split is by model tier, not by task difficulty: opus-5 and fable-5 caught
  it 10 of 10 with no prompt at all.
- Raising the defect from 3-7% to 30-50% did not help the two that missed it, so
  what is missing is the reflex and not the legibility of the error.
- 80 clean reports, zero false alarms. That is the cell FinVerBench found most
  models fail, and it is worth saying that these four did not.
- A filesystem-level proof that the run directory carried no instructions
  ([`context-check.json`](context-check.json)). Work that goes through an API
  does not need this; work that goes through a CLI does, and an earlier
  experiment in this series produced a headline number that turned out to be a
  project instruction loaded silently.

Sample size here is ten pairs per cell against FinVerBench's 105 instances. This
is the smaller, narrower run. It answers a question the larger one does not ask.
