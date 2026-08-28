# Results, tag `opus-gross`, 2026-08-28

20 calls: 1 models x 1 prompt(s) x 2 conditions x 10 matched report pairs. Defect band 30-50% of the true subtotal. Tools disabled, MCP empty, clean working directory.

## Detection and false alarms

`detected` is the share of DEFECTIVE reports where the reply says the arithmetic does not hold.
`false alarm` is the same verdict on the matched CLEAN report, which carries no defect at all.

| model | prompt | detected (n=10) | false alarm (n=10) | cites the true sum | cites the error size |
|---|---|---|---|---|---|
| opus-5 | plain | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |

## What the summary carried forward

The parallel to [tool-failure](https://github.com/dimhold/tool-failure): when the defect goes unmentioned, does the wrong number get repeated as fact? Both columns are purely numeric, computed by looking for each figure in the reply.

| model | prompt | repeats the misstated total | states the true sum |
|---|---|---|---|
| opus-5 | plain | 10/10 | 10/10 |

## Full verdict breakdown

| model | prompt | condition | flagged | allclear | silent | error |
|---|---|---|---|---|---|---|
| opus-5 | plain | defect | 10 | 0 | 0 | 0 |
| opus-5 | plain | clean | 0 | 8 | 2 | 0 |

## Totals across models

| prompt | condition | flagged | allclear | silent | n |
|---|---|---|---|---|---|
| plain | defect | **10** | 0 | 0 | 10 |
| plain | clean | **0** | 8 | 2 | 10 |

Adjudications applied: 4. See adjudications-opus-gross.json.
Cost: $0.75.
