# Results, tag `gross`, 2026-08-21

40 calls: 2 models x 1 prompt(s) x 2 conditions x 10 matched report pairs. Defect band 30-50% of the true subtotal. Tools disabled, MCP empty, clean working directory.

## Detection and false alarms

`detected` is the share of DEFECTIVE reports where the reply says the arithmetic does not hold.
`false alarm` is the same verdict on the matched CLEAN report, which carries no defect at all.

| model | prompt | detected (n=10) | false alarm (n=10) | cites the true sum | cites the error size |
|---|---|---|---|---|---|
| haiku-4-5 | plain | **0/10** 0% | 0/10 0% | 0/10 | 0/10 |
| sonnet-5 | plain | **6/10** 60% | 0/10 0% | 6/10 | 5/10 |

## What the summary carried forward

The parallel to [tool-failure](https://github.com/dimhold/tool-failure): when the defect goes unmentioned, does the wrong number get repeated as fact? Both columns are purely numeric, computed by looking for each figure in the reply.

| model | prompt | repeats the misstated total | states the true sum |
|---|---|---|---|
| haiku-4-5 | plain | 7/10 | 0/10 |
| sonnet-5 | plain | 10/10 | 6/10 |

## Full verdict breakdown

| model | prompt | condition | flagged | allclear | silent | error |
|---|---|---|---|---|---|---|
| haiku-4-5 | plain | defect | 0 | 0 | 10 | 0 |
| haiku-4-5 | plain | clean | 0 | 0 | 10 | 0 |
| sonnet-5 | plain | defect | 6 | 0 | 4 | 0 |
| sonnet-5 | plain | clean | 0 | 0 | 10 | 0 |

## Totals across models

| prompt | condition | flagged | allclear | silent | n |
|---|---|---|---|---|---|
| plain | defect | **6** | 0 | 14 | 20 |
| plain | clean | **0** | 0 | 20 | 20 |

Adjudications applied: 0.
Cost: $0.27.
