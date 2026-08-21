# Results, tag `fable`, 2026-08-21

40 calls: 1 models x 2 prompt(s) x 2 conditions x 10 matched report pairs. Defect band 3-7% of the true subtotal. Tools disabled, MCP empty, clean working directory.

## Detection and false alarms

`detected` is the share of DEFECTIVE reports where the reply says the arithmetic does not hold.
`false alarm` is the same verdict on the matched CLEAN report, which carries no defect at all.

| model | prompt | detected (n=10) | false alarm (n=10) | cites the true sum | cites the error size |
|---|---|---|---|---|---|
| fable-5 | plain | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |
| fable-5 | asked | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |

## What the summary carried forward

The parallel to [tool-failure](https://github.com/dimhold/tool-failure): when the defect goes unmentioned, does the wrong number get repeated as fact? Both columns are purely numeric, computed by looking for each figure in the reply.

| model | prompt | repeats the misstated total | states the true sum |
|---|---|---|---|
| fable-5 | plain | 10/10 | 10/10 |
| fable-5 | asked | 10/10 | 10/10 |

## Full verdict breakdown

| model | prompt | condition | flagged | allclear | silent | error |
|---|---|---|---|---|---|---|
| fable-5 | plain | defect | 10 | 0 | 0 | 0 |
| fable-5 | plain | clean | 0 | 10 | 0 | 0 |
| fable-5 | asked | defect | 10 | 0 | 0 | 0 |
| fable-5 | asked | clean | 0 | 10 | 0 | 0 |

## Totals across models

| prompt | condition | flagged | allclear | silent | n |
|---|---|---|---|---|---|
| plain | defect | **10** | 0 | 0 | 10 |
| plain | clean | **0** | 10 | 0 | 10 |
| asked | defect | **10** | 0 | 0 | 10 |
| asked | clean | **0** | 10 | 0 | 10 |

Adjudications applied: 4. See adjudications-fable.json.
Cost: $1.92.
