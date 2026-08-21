# Results, 2026-08-22 (runs of 21-22 August 2026)

220 calls. A one-month P&L, 15 numeric rows, handed to a model with the words
"Summarize this report." In half the runs one subtotal is 3-7% away from the sum
of the lines printed directly above it, and nothing else on the page is wrong.

160 of those calls are the first sitting, three models. The remaining 60 add a
fourth model, `claude-fable-5`, on the same protocol with nothing changed: same
seeds, same documents, same prompts, same isolation, same classifier. Why it was
added late and what that does and does not license is in the amendments to
[CRITERIA.md](CRITERIA.md).

Method and judging rules, fixed before the run: [CRITERIA.md](CRITERIA.md).
Every reply, whole: [transcript-main.md](transcript-main.md),
[transcript-gross.md](transcript-gross.md),
[transcript-fable.md](transcript-fable.md),
[transcript-fable-gross.md](transcript-fable-gross.md). Proof the working
directory carried no instructions: [context-check.json](context-check.json).

## The headline

**Asked only to summarise, haiku-4-5 and sonnet-5 missed the misstated subtotal
in 20 of 20 runs and repeated the wrong figure as fact. Adding "and check
whether it adds up" took both to 10 of 10. opus-5 and fable-5 caught it 10 of 10
each with no prompting at all.**

So the reflex is not a property of "an LLM". It is a property of the model, and
the split is 2 models to 2.

| model | prompt | detected (n=10) | false alarm on clean (n=10) | cites the true sum |
|---|---|---|---|---|
| haiku-4-5 | summarize | **0/10** | 0/10 | 0/10 |
| haiku-4-5 | summarize + check | **10/10** | 0/10 | 10/10 |
| sonnet-5 | summarize | **0/10** | 0/10 | 0/10 |
| sonnet-5 | summarize + check | **10/10** | 0/10 | 10/10 |
| opus-5 | summarize | **10/10** | 0/10 | 10/10 |
| opus-5 | summarize + check | **10/10** | 0/10 | 10/10 |
| fable-5 | summarize | **10/10** | 0/10 | 10/10 |
| fable-5 | summarize + check | **10/10** | 0/10 | 10/10 |

fable-5 is the addition, tag `fable`, [stats-fable.md](stats-fable.md). Before
adjudication its `summarize` detection cell read 8/10 and its `summarize + check`
false-alarm cell read 2/10. Four replies in total are involved, each listed with
its reason in [adjudications-fable.json](adjudications-fable.json) and discussed
below, and in each of the four the reply itself is unambiguous.

The false-alarm column is the reason the detection column can be read at all.
The clean report in each row is the same document with the same 12 line items,
differing only in the one subtotal. Nothing was flagged in any of the 80 clean
runs after adjudication, so nobody here is achieving detection by hedging.

Every detection was specific. All 60 of them named the misstated subtotal, gave
the correct sum of its lines, and gave the size of the error. Not one was a vague
"the numbers look off".

## What the summary carried forward

When the defect went unmentioned, the wrong number did not stay put. It became
the basis for the analysis.

| model | prompt | repeats the misstated total | states the true sum |
|---|---|---|---|
| haiku-4-5 | summarize | 8/10 | 0/10 |
| sonnet-5 | summarize | 10/10 | 0/10 |
| opus-5 | summarize | 10/10 | 10/10 |
| fable-5 | summarize | 10/10 | 10/10 |

The two haiku runs that do not repeat the figure rounded it instead (`$1.22M`).
The true sum appears in zero of the 20 missed runs, which is the point: nothing
in those replies is derived from the actual lines.

## The second series: 30-50%

Since the two smaller models returned flat zeros, the same ten documents were
regenerated with the defect at 30 to 50%, and re-run under "Summarize this
report." only. fable-5 was added to this series too, even though a model already
at 10/10 has nothing a bigger defect can raise, so that the ceiling is on the
record instead of assumed.

| model | prompt | detected (n=10) | false alarm on clean (n=10) |
|---|---|---|---|
| haiku-4-5 | summarize | **0/10** | 0/10 |
| sonnet-5 | summarize | **6/10** | 0/10 |
| fable-5 | summarize | **10/10** | 0/10 |

sonnet-5 has a threshold: invisible at 3-7%, caught six times out of ten at
30-50%. haiku-4-5 has none that this experiment can find. A 48% misstatement
went past it as readily as a 3% one. fable-5 holds at 10/10, with zero false
alarms on the matched clean set, so the ceiling it reached at 3-7% is not an
artefact of the defect size.

Worse, it went past it while being used. Seed 4109, expense subtotal stated at
419,410 against a true 810,240:

> Production wages are the largest cost at $328,660 (**79% of operating
> expenses**) […] Occupancy costs (plant lease + site rent) total $164,780
> (**39% of operating expenses**) […] The operation is highly profitable

Those percentages are computed against the fabricated subtotal. The shares the
reply lists add to roughly 190% of the total it is dividing by, in the same
paragraph, and the conclusion drawn is "highly profitable" from a 51% net margin
on a dairy. Seed 4100 does the same thing: payroll at "80% of total expenses"
against a subtotal that is 41% too small.

Seed 4103 is the other direction. The expense subtotal was inflated by 45%, and
the reply reports the fictional loss as the finding:

> **Key issue:** Operating expenses exceed revenue by 22% […] The company is
> currently unprofitable at the operational level.

At this size the failure is no longer "did not check". It is a model narrating
an error it introduced nothing to and could have removed by adding eight
numbers.

## Answering the hypothesis directly

The pre-registered hypothesis was: models asked to summarise mostly miss the
misstated subtotal, and asking directly raises detection sharply.

- **First half: half right, and that is the interesting part.** True for
  haiku-4-5 and sonnet-5, 0 of 20. False for opus-5 and for fable-5, 10 of 10
  unprompted each. A blanket claim that "LLMs do not notice the books not
  footing" is wrong as stated, and the correct statement names the model. With
  four models it is a 2-2 split, not one exception.
- **Second half: confirmed where there was room for it.** 0/10 to 10/10 for both
  smaller models, from six added words. For opus-5 and fable-5 there was nothing
  to raise.
- **The hedging alternative is ruled out.** Zero false alarms in 80 clean runs.

## What the classifier got wrong, and why it is reported anyway

The pre-registered keyword rules produced 9 disagreements with a human reading,
all of them on **clean** reports, all of them in one direction, and all of them
on the larger two models:

| | mechanical false alarms | after adjudication |
|---|---|---|
| haiku-4-5 (both prompts, clean) | 0/20 | 0/20 |
| sonnet-5 (both prompts, clean) | 1/20 | 0/20 |
| opus-5 (both prompts, clean) | 7/20 | 0/20 |
| fable-5 (both prompts, clean) | 2/20 | 0/20 |

Every one is the same shape. The model foots the statement, says so
unambiguously, and then raises a completeness point in which the words
"overstated" or "understated" appear:

> No footing or cross-footing errors. […] $210,000 of materials revenue has no
> matching purchase cost line. […] If the cost was genuinely omitted, the
> $124,970 profit is overstated, possibly to the point of a loss.

That is not a false alarm, it is the most useful paragraph in the reply, and a
keyword classifier cannot tell it from a detection. The regexes were **not**
edited afterwards; each disagreement is listed with its reason in
[adjudications-main.json](adjudications-main.json) so the mechanical number stays
reproducible and the correction stays visible.

This is worth stating on its own: **the better the model, the worse a keyword
judge performs on it**, because the good answer contains the vocabulary of the
bad one. Any automated eval of this shape has the same problem.

### The fourth model broke it the other way

fable-5 produced the first two disagreements in this experiment that run the
opposite direction: two **defective** reports where the classifier said
`allclear` and the reply had found the defect completely.

> One issue worth flagging: the expense lines **don't add up to the stated
> total**. Summing the eight expense items gives $841,550, not $797,780, a
> $43,770 difference.

The cause is inside the classifier's own safety step. Denial phrases are
stripped before the discrepancy patterns run, so that "no discrepancies" cannot
score as a detection. One of those denial patterns is
`(?:adds?|foots?|ties?) ... to the (?:stated|reported) total`, and it matches
`add up to the stated total` sitting inside `don't add up to the stated total`.
The words are removed, the negation is left behind with nothing attached, and
the discrepancy patterns find no target. The step that exists to prevent false
positives produced a false negative.

It only shows up on fable-5 because it is the only model here that phrases the
finding that way. The string appears in **zero** rows of `results-main.json` and
`results-gross.json`, checked, so nothing previously reported moves. And, as
before, the regexes were not edited: the two rows are corrected in
[adjudications-fable.json](adjudications-fable.json) with the reason written
out, so the mechanical 8/10 and the adjudicated 10/10 are both on the record.

The general lesson tightens. It is not only that a keyword judge under-counts
good answers by mistaking their vocabulary; it is that the patch for that
failure, stripping denials, buys the opposite failure. **A keyword judge has no
setting at which it is right about both.**

## Scope

- Synthetic accounts, one format, one defect type: a subtotal that does not
  foot. Misclassification, a wrong accrual, a smuggled assumption, a period that
  does not tie to the prior month, revenue recognised early: none of that is
  measured here, and all of it is harder than addition. **A subtotal that does
  not add up is the easiest error on the list.** Read the numbers as a floor,
  not a grade.
- Not a measurement of whether a model can do a finance job.
- Ten matched pairs per cell, one CLI at default decoding, one sitting. The
  0/10-versus-10/10 gaps are not marginal; a 6/10 is.
- The CLI ships its own system prompt in every call. This measures behaviour
  through that CLI, not a bare API call. The user-level settings that were in
  force are recorded in `context-check.json`, including `effortLevel: high`,
  which the run did not override.
- In the 30-50% series, 4 of the 10 documents flip to a reported loss. That is a
  cue the main series does not contain, and sonnet-5 caught 3 of those 4 and 3
  of the other 6, so the flip does not obviously explain its hit rate.
- One call was lost to a dropped connection and re-asked with identical
  arguments (`retry.mjs`); the row is marked `retried` in `results-main.json`.
  No call failed in the fable-5 sitting.
- **fable-5 was run in a second sitting, a day after the other three.** Same
  seeds, same documents, same prompts, same flags, same classifier, same clean
  directory with its own `context-check` entry. It is still one CLI at default
  decoding, and a cell measured on a different day is a slightly weaker
  comparison than one measured in the same batch. The gap it reports, 10/10
  against 0/10, is not the size that a sitting explains.
- **fable-5 is the model this workspace's agent normally runs, and the session
  that ran and hand-adjudicated this addition was an opus-5 session.** Both
  models are in the table. Neither fact touches a number: ground truth is
  computed by `reports.mjs` and re-derived by parsing the rendered page, verdicts
  come from fixed regexes in `classify.mjs`, and no model grades any reply,
  including its own. The same note was made in
  [llm-arithmetic](https://github.com/dimhold/llm-arithmetic) for the same reason. The one place
  judgement enters is the adjudication file, and that is why every entry in it
  quotes the reply and states the mechanical rule it disagrees with, so the
  reader can check the call rather than trust it.
- Cost: $2.47 for the first 160 calls, $2.69 for the 60 that added fable-5,
  $5.16 in total.

## Questions for DS

The generator is the weakest thing here, and it is the part where an actual
finance person's judgement beats ours. Specifically:

1. **Does the document read as a real management account?** One month, 15 rows,
   revenue block, opex block, operating profit, no D&A, no interest, no tax, no
   prior-month comparative, no budget column. Several replies flagged exactly
   those absences unprompted. Is that shape realistic for a small company's
   monthly pack, or does the missing comparative make it obviously synthetic?
2. **Is the cost mix believable?** Payroll 28-40% of costs, occupancy 5-11%,
   insurance 2-5%, and margins of 5-18%. Which of these bands is wrong, and for
   which trade?
3. **The recurring criticism from the models themselves**: "materials resold"
   appears as revenue with no matching cost of goods line. That was our mistake
   in the label sets and it is the single most-raised issue across the
   transcript. Worth fixing before this is published, or worth keeping as
   evidence that the models read the document rather than skimmed it?
4. **Is 3-7% the right band?** The intent was "above rounding, below obvious".
   For a real month-end pack, what size of footing error would actually slip
   past a human reviewer?
5. **Is the misstated-subtotal defect the one worth publishing on**, or is there
   a second defect type that a finance audience would consider more honest:
   a prior-period figure that does not tie, a line double-counted under two
   headings, a percentage computed off the wrong base?
