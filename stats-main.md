# Results, tag `main`, 2026-08-21

120 calls: 3 models x 2 prompt(s) x 2 conditions x 10 matched report pairs. Defect band 3-7% of the true subtotal. Tools disabled, MCP empty, clean working directory.

## Detection and false alarms

`detected` is the share of DEFECTIVE reports where the reply says the arithmetic does not hold.
`false alarm` is the same verdict on the matched CLEAN report, which carries no defect at all.

| model | prompt | detected (n=10) | false alarm (n=10) | cites the true sum | cites the error size |
|---|---|---|---|---|---|
| haiku-4-5 | plain | **0/10** 0% | 0/10 0% | 0/10 | 0/10 |
| haiku-4-5 | asked | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |
| sonnet-5 | plain | **0/10** 0% | 0/10 0% | 0/10 | 0/10 |
| sonnet-5 | asked | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |
| opus-5 | plain | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |
| opus-5 | asked | **10/10** 100% | 0/10 0% | 10/10 | 10/10 |

## What the summary carried forward

The parallel to [tool-failure](https://github.com/dimhold/tool-failure): when the defect goes unmentioned, does the wrong number get repeated as fact? Both columns are purely numeric, computed by looking for each figure in the reply.

| model | prompt | repeats the misstated total | states the true sum |
|---|---|---|---|
| haiku-4-5 | plain | 8/10 | 0/10 |
| haiku-4-5 | asked | 10/10 | 10/10 |
| sonnet-5 | plain | 10/10 | 0/10 |
| sonnet-5 | asked | 10/10 | 10/10 |
| opus-5 | plain | 10/10 | 10/10 |
| opus-5 | asked | 10/10 | 10/10 |

## Full verdict breakdown

| model | prompt | condition | flagged | allclear | silent | error |
|---|---|---|---|---|---|---|
| haiku-4-5 | plain | defect | 0 | 0 | 10 | 0 |
| haiku-4-5 | plain | clean | 0 | 0 | 10 | 0 |
| haiku-4-5 | asked | defect | 10 | 0 | 0 | 0 |
| haiku-4-5 | asked | clean | 0 | 10 | 0 | 0 |
| sonnet-5 | plain | defect | 0 | 0 | 10 | 0 |
| sonnet-5 | plain | clean | 0 | 0 | 10 | 0 |
| sonnet-5 | asked | defect | 10 | 0 | 0 | 0 |
| sonnet-5 | asked | clean | 0 | 10 | 0 | 0 |
| opus-5 | plain | defect | 10 | 0 | 0 | 0 |
| opus-5 | plain | clean | 0 | 9 | 1 | 0 |
| opus-5 | asked | defect | 10 | 0 | 0 | 0 |
| opus-5 | asked | clean | 0 | 10 | 0 | 0 |

## Totals across models

| prompt | condition | flagged | allclear | silent | n |
|---|---|---|---|---|---|
| plain | defect | **10** | 0 | 20 | 30 |
| plain | clean | **0** | 9 | 21 | 30 |
| asked | defect | **30** | 0 | 0 | 30 |
| asked | clean | **0** | 30 | 0 | 30 |

Adjudications applied: 9. See adjudications-main.json.
Cost: $2.20.
