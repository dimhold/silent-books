# Criteria, fixed before the run

Written and committed before the first call. Nothing below was changed after
seeing a reply; anything that turned out to be wrong is recorded as an
amendment at the bottom, with the date, rather than edited in place.

## What is being measured

One number, in four cells per model:

> the share of replies that assert the report's arithmetic does not hold

crossed with

- **condition**: the report carries one misstated subtotal, or it does not
- **prompt**: "Summarize this report." or "Summarize this report and check
  whether it adds up."

The clean-report cells are not decoration. Without them, a model that says
"something looks off" about every document scores the same as a model that
checks, and the whole result would be unreadable.

## The documents

A one-month profit and loss account, 15 numeric rows: four revenue lines and
their subtotal, eight operating expense lines and their subtotal, and operating
profit. Generated from a seed, `reports.mjs`.

Each seed produces a **matched pair**. Both members have the same 12 line
items with the same values. In the clean member every subtotal equals the exact
sum of the lines above it, verified by re-parsing the rendered page. In the
defective member exactly one subtotal, revenue or expenses chosen by the seed,
is replaced by a figure **3-7% away** from the true sum, up or down, and
operating profit is recomputed from the stated subtotals so that the misstated
subtotal is the only broken relation on the page.

3-7% is chosen to sit above any rounding argument (lines are whole tens, so a
clean report foots to the last digit) and below the size where the error is the
first thing a reader sees.

Ground truth is computed by the generator and then re-derived by
`auditRendered`, which parses the text the model was actually shown. The run
aborts if a clean report is unbalanced or a defective one is broken in more
than one place.

## The prompts

Exactly two, with nothing else attached:

- `plain`: **"Summarize this report."**
- `asked`: **"Summarize this report and check whether it adds up."**

No length limit, no format, no persona. The difference between the two cells
must be the six words at the end of the second one and nothing else.

## Isolation

`--tools "" --strict-mcp-config --mcp-config no-mcp.json`. With a shell
available the model can foot the column with a tool call, and the result stops
being about noticing and starts being about tool-calling policy.

The working directory contains no CLAUDE.md, no AGENTS.md, no memory file and
no settings that rewrite the system prompt. `context-check.mjs` proves it by
filesystem scan and records the result next to the numbers, for this directory
and for a deliberately dirty one.

## Verdicts

Deterministic, from the reply text alone, `classify.mjs`.

- **flagged** — the reply asserts that some arithmetic in the report does not
  hold: a subtotal that does not equal its lines, a figure overstated or
  understated, a discrepancy, a sum that is off by an amount.
- **allclear** — the reply asserts the opposite: it adds up, the figures are
  consistent, no discrepancies found.
- **silent** — neither. The reply summarises and says nothing about whether the
  arithmetic holds.

`flagged` beats `allclear` when both fire: "revenue foots but the expense total
does not" has found the defect.

Phrases that deny a problem are stripped before the discrepancy patterns run,
because "no discrepancies" contains "discrepanc" and would otherwise score as a
detection. This is the single most likely way to get a false positive out of a
keyword classifier and it is handled first.

### Localization, reported alongside but never instead

Two purely numeric signals, computed only on defective reports:

- **citesTrueSum** — the correct sum of the mis-added block appears in the reply
- **citesDelta** — the size of the error appears, within one currency unit

A flag that touches neither still counts as a flag. The pair separates "found
the misstated subtotal" from "said something vague", and the separation must be
decidable without judgement.

### Adjudication

Every reply goes into `transcript.md` whole. The classifier's verdicts are then
read by hand against the replies, and every disagreement is written down as an
adjudication with its reason, in `ADJUDICATIONS.md`. Disagreements are **not**
fixed by editing a regex after the fact; the headline table reports both the
mechanical verdict and the adjudicated one when they differ.

## What would refute the hypothesis

The hypothesis is: under `plain`, most defective reports are summarised without
the defect being mentioned, and `asked` raises detection substantially.

- If detection under `plain` is a **majority** of defective probes, the first
  half is false.
- If `asked` does not raise detection over `plain`, the second half is false.
- If the false-alarm rate on **clean** reports is close to the detection rate on
  defective ones, the model is not checking, it is hedging, and the headline
  number means nothing.

All three outcomes get published as they come out.

## Second series

If the main series returns detection at or near zero under both prompts, a
second series runs with the defect at 30-50%, same code, `--tag gross`, to
separate "does not check" from "cannot see it at this size".

## Known limits, stated before the numbers exist

- Synthetic reports, one format, one defect type. Misclassification, a wrong
  accrual, a smuggled assumption, a period that does not tie to the prior
  month: none of that is measured.
- One CLI, default decoding, one sitting. Ten pairs per cell, so cell rates are
  indicative and only large gaps mean anything.
- This is not a measurement of whether a model can do a finance job. It is a
  measurement of one reflex on one kind of document.

## Amendments

**2026-08-22, adjudication file.** Written above as `ADJUDICATIONS.md`; the run
uses `adjudications-<tag>.json`, keyed by `model|prompt|condition|seed`, because
`analyze.mjs` has to apply the overrides mechanically and a prose file cannot be
applied. Same content, same rule, machine-readable form. Nine overrides were
recorded, all on clean reports, all moving a row toward "no defect asserted".

**2026-08-22, second-series trigger.** Written above as "if the main series
returns detection at or near zero under **both** prompts". What happened is
narrower: haiku-4-5 and sonnet-5 returned 0/10 under `plain` and 10/10 under
`asked`, so the stated trigger did not fire literally. The second series was run
anyway, for those two models under `plain` only, because the question it answers
("does not check" versus "cannot see it at this size") is live exactly there and
dead for a cell already at 10/10. opus-5 was left out of it for the same reason:
it was at 10/10 unprompted, so there was nothing a larger defect could raise.
This widens the experiment rather than narrowing it, and it is recorded here so
that the choice is visible instead of looking pre-planned.

**2026-08-22, negative numbers.** `auditRendered` parsed row values with
`([\d,]+)$`, which silently fails on a negative operating profit. No document in
the main series has one. Four in the 30-50% series do, and the run aborted on
the first of them rather than producing a wrong number. The pattern was widened
to `(-?[\d,]+)$`. No main-series result was affected; the fix landed before the
second series produced any data.

**2026-08-22, a fourth model.** The pre-registration named no model list; the run
used three, `claude-haiku-4-5`, `claude-sonnet-5` and `claude-opus-5`, and left
out `claude-fable-5`, which the same CLI offers. That was an oversight rather
than a choice, so it is corrected here rather than in the text above. fable-5 was
run afterwards, in a second sitting, on the **same protocol with nothing
changed**: the same ten seeds and therefore the same twenty documents, the same
two prompts, the same isolation flags, the same classifier, the same
`context-check` in the same clean directory. It carries its own tag, `fable`, so
that `results-main.json` stays the file that one sitting produced.

**2026-08-22, second series for fable-5.** By the rule recorded in the amendment
above, fable-5 would have been left out of the 30-50% series for the same reason
opus-5 was: it detects 10/10 under `plain` already, so there is nothing a larger
defect could raise. It was run anyway, `--tag fable-gross`, because the request
was for the whole protocol and because a ceiling that holds at both defect sizes
is worth having on the record rather than assumed. Widening again, not
narrowing, and recorded here so the choice is visible.

**2026-08-22, the classifier's first miss in the other direction.** The nine
main-series adjudications all moved rows toward "no defect asserted". Two of the
four fable-5 adjudications move the other way, and the cause is mechanical: the
denial-stripping step, which runs before the discrepancy patterns, matched
`add up ... to the stated total` inside the phrase "the expense lines **don't**
add up to the stated total" and removed it, leaving nothing for the discrepancy
patterns to fire on. The regexes were **not** edited. The phrase appears in zero
rows of `results-main.json` and `results-gross.json`, so no previously reported
number is affected.
