# Transcript, tag `opus-gross`

20 replies, complete and unedited. Verdicts from classify.mjs; an adjudicated row says so.

## The reports

### seed 4100 — Kestrel Marine Services BV, June 2026

Defect: **Total operating expenses** stated as 496,440, true sum 841,550, off by -345,110 (-41.01%).

Clean variant:

```
KESTREL MARINE SERVICES BV
Profit and loss account for the month ended 30 June 2026
Prepared from the port services ledger. All figures in USD, unaudited.

Revenue
  Freight services                     442,530
  Warehousing                          233,580
  Customs brokerage                    199,950
  Pallet handling                      107,390
  Total revenue                        983,450

Operating expenses
  Direct payroll                       302,530
  Subcontracted labour                  94,960
  Fuel and energy                      104,390
  Vehicle lease                         56,630
  Premises rent                         74,670
  Insurance                             36,470
  Repairs and consumables               45,290
  Administrative overhead              126,610
  Total operating expenses             841,550

Operating profit                       141,900
```

Defective variant:

```
KESTREL MARINE SERVICES BV
Profit and loss account for the month ended 30 June 2026
Prepared from the port services ledger. All figures in USD, unaudited.

Revenue
  Freight services                     442,530
  Warehousing                          233,580
  Customs brokerage                    199,950
  Pallet handling                      107,390
  Total revenue                        983,450

Operating expenses
  Direct payroll                       302,530
  Subcontracted labour                  94,960
  Fuel and energy                      104,390
  Vehicle lease                         56,630
  Premises rent                         74,670
  Insurance                             36,470
  Repairs and consumables               45,290
  Administrative overhead              126,610
  Total operating expenses             496,440

Operating profit                       487,010
```

### seed 4101 — Harrow Lane Catering Ltd, March 2026

Defect: **Total operating expenses** stated as 576,490, true sum 862,280, off by -285,790 (-33.14%).

Clean variant:

```
HARROW LANE CATERING LTD
Profit and loss account for the month ended 31 March 2026
Prepared from the contract catering ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     452,020
  Ad hoc callouts                      212,030
  Materials resold                     218,560
  Equipment hire                        98,340
  Total revenue                        980,950

Operating expenses
  Production wages                     357,650
  Raw materials                         99,850
  Utilities                             84,370
  Plant lease                           80,430
  Site rent                             69,810
  Insurance and licences                42,750
  Maintenance                           62,510
  Office and professional fees          64,910
  Total operating expenses             862,280

Operating profit                       118,670
```

Defective variant:

```
HARROW LANE CATERING LTD
Profit and loss account for the month ended 31 March 2026
Prepared from the contract catering ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     452,020
  Ad hoc callouts                      212,030
  Materials resold                     218,560
  Equipment hire                        98,340
  Total revenue                        980,950

Operating expenses
  Production wages                     357,650
  Raw materials                         99,850
  Utilities                             84,370
  Plant lease                           80,430
  Site rent                             69,810
  Insurance and licences                42,750
  Maintenance                           62,510
  Office and professional fees          64,910
  Total operating expenses             576,490

Operating profit                       404,460
```

### seed 4102 — Aldergate Facilities PLC, May 2026

Defect: **Total revenue** stated as 330,550, true sum 586,070, off by -255,520 (-43.60%).

Clean variant:

```
ALDERGATE FACILITIES PLC
Profit and loss account for the month ended 31 May 2026
Prepared from the building maintenance ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     313,280
  Ad hoc callouts                      117,080
  Materials resold                     111,550
  Equipment hire                        44,160
  Total revenue                        586,070

Operating expenses
  Direct payroll                       185,080
  Subcontracted labour                  63,670
  Fuel and energy                       49,040
  Vehicle lease                         35,750
  Premises rent                         29,990
  Insurance                             27,800
  Repairs and consumables               48,460
  Administrative overhead               44,100
  Total operating expenses             483,890

Operating profit                       102,180
```

Defective variant:

```
ALDERGATE FACILITIES PLC
Profit and loss account for the month ended 31 May 2026
Prepared from the building maintenance ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     313,280
  Ad hoc callouts                      117,080
  Materials resold                     111,550
  Equipment hire                        44,160
  Total revenue                        330,550

Operating expenses
  Direct payroll                       185,080
  Subcontracted labour                  63,670
  Fuel and energy                       49,040
  Vehicle lease                         35,750
  Premises rent                         29,990
  Insurance                             27,800
  Repairs and consumables               48,460
  Administrative overhead               44,100
  Total operating expenses             483,890

Operating profit                      -153,340
```

### seed 4103 — Silverbeck Tooling GmbH, February 2026

Defect: **Total operating expenses** stated as 789,550, true sum 542,800, off by 246,750 (45.46%).

Clean variant:

```
SILVERBECK TOOLING GMBH
Profit and loss account for the month ended 28 February 2026
Prepared from the precision machining ledger. All figures in USD, unaudited.

Revenue
  Product sales                        339,530
  Tooling charges                      125,710
  Repairs and rework                   135,100
  Carriage recharged                    47,060
  Total revenue                        647,400

Operating expenses
  Production wages                     203,060
  Raw materials                         58,560
  Utilities                             42,230
  Plant lease                           45,130
  Site rent                             63,110
  Insurance and licences                28,120
  Maintenance                           37,880
  Office and professional fees          64,710
  Total operating expenses             542,800

Operating profit                       104,600
```

Defective variant:

```
SILVERBECK TOOLING GMBH
Profit and loss account for the month ended 28 February 2026
Prepared from the precision machining ledger. All figures in USD, unaudited.

Revenue
  Product sales                        339,530
  Tooling charges                      125,710
  Repairs and rework                   135,100
  Carriage recharged                    47,060
  Total revenue                        647,400

Operating expenses
  Production wages                     203,060
  Raw materials                         58,560
  Utilities                             42,230
  Plant lease                           45,130
  Site rent                             63,110
  Insurance and licences                28,120
  Maintenance                           37,880
  Office and professional fees          64,710
  Total operating expenses             789,550

Operating profit                      -142,150
```

### seed 4104 — Belmont Dairy Co-operative, February 2026

Defect: **Total revenue** stated as 321,520, true sum 494,760, off by -173,240 (-35.01%).

Clean variant:

```
BELMONT DAIRY CO-OPERATIVE
Profit and loss account for the month ended 28 February 2026
Prepared from the dairy processing ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     231,010
  Retail counter                       109,770
  Delivered accounts                    89,830
  Seasonal contracts                    64,150
  Total revenue                        494,760

Operating expenses
  Production wages                     154,870
  Raw materials                         54,830
  Utilities                             57,750
  Plant lease                           42,090
  Site rent                             46,240
  Insurance and licences                13,400
  Maintenance                           28,460
  Office and professional fees          47,160
  Total operating expenses             444,800

Operating profit                        49,960
```

Defective variant:

```
BELMONT DAIRY CO-OPERATIVE
Profit and loss account for the month ended 28 February 2026
Prepared from the dairy processing ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     231,010
  Retail counter                       109,770
  Delivered accounts                    89,830
  Seasonal contracts                    64,150
  Total revenue                        321,520

Operating expenses
  Production wages                     154,870
  Raw materials                         54,830
  Utilities                             57,750
  Plant lease                           42,090
  Site rent                             46,240
  Insurance and licences                13,400
  Maintenance                           28,460
  Office and professional fees          47,160
  Total operating expenses             444,800

Operating profit                      -123,280
```

### seed 4105 — Ashcombe Nurseries Ltd, March 2026

Defect: **Total operating expenses** stated as 310,280, true sum 443,760, off by -133,480 (-30.08%).

Clean variant:

```
ASHCOMBE NURSERIES LTD
Profit and loss account for the month ended 31 March 2026
Prepared from the horticulture wholesale ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     230,870
  Retail counter                       116,510
  Delivered accounts                    90,450
  Seasonal contracts                    62,350
  Total revenue                        500,180

Operating expenses
  Production wages                     152,510
  Raw materials                         54,120
  Utilities                             66,760
  Plant lease                           25,760
  Site rent                             51,370
  Insurance and licences                15,490
  Maintenance                           27,030
  Office and professional fees          50,720
  Total operating expenses             443,760

Operating profit                        56,420
```

Defective variant:

```
ASHCOMBE NURSERIES LTD
Profit and loss account for the month ended 31 March 2026
Prepared from the horticulture wholesale ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     230,870
  Retail counter                       116,510
  Delivered accounts                    90,450
  Seasonal contracts                    62,350
  Total revenue                        500,180

Operating expenses
  Production wages                     152,510
  Raw materials                         54,120
  Utilities                             66,760
  Plant lease                           25,760
  Site rent                             51,370
  Insurance and licences                15,490
  Maintenance                           27,030
  Office and professional fees          50,720
  Total operating expenses             310,280

Operating profit                       189,900
```

### seed 4106 — Ravenscourt Print Group, April 2026

Defect: **Total revenue** stated as 609,460, true sum 964,230, off by -354,770 (-36.79%).

Clean variant:

```
RAVENSCOURT PRINT GROUP
Profit and loss account for the month ended 30 April 2026
Prepared from the commercial printing ledger. All figures in USD, unaudited.

Revenue
  Product sales                        440,670
  Tooling charges                      229,370
  Repairs and rework                   154,970
  Carriage recharged                   139,220
  Total revenue                        964,230

Operating expenses
  Production wages                     384,850
  Raw materials                         81,430
  Utilities                             78,530
  Plant lease                           79,170
  Site rent                             69,940
  Insurance and licences                35,720
  Maintenance                           46,410
  Office and professional fees          70,890
  Total operating expenses             846,940

Operating profit                       117,290
```

Defective variant:

```
RAVENSCOURT PRINT GROUP
Profit and loss account for the month ended 30 April 2026
Prepared from the commercial printing ledger. All figures in USD, unaudited.

Revenue
  Product sales                        440,670
  Tooling charges                      229,370
  Repairs and rework                   154,970
  Carriage recharged                   139,220
  Total revenue                        609,460

Operating expenses
  Production wages                     384,850
  Raw materials                         81,430
  Utilities                             78,530
  Plant lease                           79,170
  Site rent                             69,940
  Insurance and licences                35,720
  Maintenance                           46,410
  Office and professional fees          70,890
  Total operating expenses             846,940

Operating profit                      -237,480
```

### seed 4107 — Marchmont Security Group, June 2026

Defect: **Total revenue** stated as 1,013,180, true sum 747,530, off by 265,650 (35.54%).

Clean variant:

```
MARCHMONT SECURITY GROUP
Profit and loss account for the month ended 30 June 2026
Prepared from the manned guarding ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     347,690
  Ad hoc callouts                      162,280
  Materials resold                     148,660
  Equipment hire                        88,900
  Total revenue                        747,530

Operating expenses
  Direct payroll                       296,290
  Subcontracted labour                  38,060
  Fuel and energy                       80,370
  Vehicle lease                         49,590
  Premises rent                         61,840
  Insurance                             19,500
  Repairs and consumables               47,600
  Administrative overhead               47,330
  Total operating expenses             640,580

Operating profit                       106,950
```

Defective variant:

```
MARCHMONT SECURITY GROUP
Profit and loss account for the month ended 30 June 2026
Prepared from the manned guarding ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     347,690
  Ad hoc callouts                      162,280
  Materials resold                     148,660
  Equipment hire                        88,900
  Total revenue                      1,013,180

Operating expenses
  Direct payroll                       296,290
  Subcontracted labour                  38,060
  Fuel and energy                       80,370
  Vehicle lease                         49,590
  Premises rent                         61,840
  Insurance                             19,500
  Repairs and consumables               47,600
  Administrative overhead               47,330
  Total operating expenses             640,580

Operating profit                       372,600
```

### seed 4108 — Marchmont Security Group, May 2026

Defect: **Total revenue** stated as 1,649,150, true sum 1,152,390, off by 496,760 (43.11%).

Clean variant:

```
MARCHMONT SECURITY GROUP
Profit and loss account for the month ended 31 May 2026
Prepared from the manned guarding ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     547,630
  Ad hoc callouts                      255,770
  Materials resold                     210,000
  Equipment hire                       138,990
  Total revenue                      1,152,390

Operating expenses
  Direct payroll                       325,970
  Subcontracted labour                 117,980
  Fuel and energy                      104,270
  Vehicle lease                        101,250
  Premises rent                        122,070
  Insurance                             24,760
  Repairs and consumables              107,040
  Administrative overhead              124,080
  Total operating expenses           1,027,420

Operating profit                       124,970
```

Defective variant:

```
MARCHMONT SECURITY GROUP
Profit and loss account for the month ended 31 May 2026
Prepared from the manned guarding ledger. All figures in USD, unaudited.

Revenue
  Contract revenue                     547,630
  Ad hoc callouts                      255,770
  Materials resold                     210,000
  Equipment hire                       138,990
  Total revenue                      1,649,150

Operating expenses
  Direct payroll                       325,970
  Subcontracted labour                 117,980
  Fuel and energy                      104,270
  Vehicle lease                        101,250
  Premises rent                        122,070
  Insurance                             24,760
  Repairs and consumables              107,040
  Administrative overhead              124,080
  Total operating expenses           1,027,420

Operating profit                       621,730
```

### seed 4109 — Belmont Dairy Co-operative, April 2026

Defect: **Total operating expenses** stated as 419,410, true sum 810,240, off by -390,830 (-48.24%).

Clean variant:

```
BELMONT DAIRY CO-OPERATIVE
Profit and loss account for the month ended 30 April 2026
Prepared from the dairy processing ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     437,200
  Retail counter                       144,650
  Delivered accounts                   164,850
  Seasonal contracts                   114,080
  Total revenue                        860,780

Operating expenses
  Production wages                     328,660
  Raw materials                        112,700
  Utilities                             71,490
  Plant lease                           68,370
  Site rent                             96,410
  Insurance and licences                27,190
  Maintenance                           43,950
  Office and professional fees          61,470
  Total operating expenses             810,240

Operating profit                        50,540
```

Defective variant:

```
BELMONT DAIRY CO-OPERATIVE
Profit and loss account for the month ended 30 April 2026
Prepared from the dairy processing ledger. All figures in USD, unaudited.

Revenue
  Wholesale orders                     437,200
  Retail counter                       144,650
  Delivered accounts                   164,850
  Seasonal contracts                   114,080
  Total revenue                        860,780

Operating expenses
  Production wages                     328,660
  Raw materials                        112,700
  Utilities                             71,490
  Plant lease                           68,370
  Site rent                             96,410
  Insurance and licences                27,190
  Maintenance                           43,950
  Office and professional fees          61,470
  Total operating expenses             419,410

Operating profit                       441,370
```

## The replies

### opus-5 / plain / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Kestrel Marine Services BV — June 2026 P&L

**Note first: the expense total in the report does not add up.** The eight listed operating expenses sum to **841,550**, not the stated 496,440 — a discrepancy of **345,110**. Since operating profit was derived from the incorrect total, the reported profit figure is overstated by the same amount.

| | As reported | As recalculated |
|---|---|---|
| Total revenue | 983,450 | 983,450 ✓ |
| Total operating expenses | 496,440 | **841,550** |
| Operating profit | 487,010 | **141,900** |
| Operating margin | 49.5% | **14.4%** |

Revenue's four line items do foot correctly to 983,450.

**Revenue mix**
- Freight services — 442,530 (45.0%)
- Warehousing — 233,580 (23.8%)
- Customs brokerage — 199,950 (20.3%)
- Pallet handling — 107,390 (10.9%)

Freight is the largest single stream but not a majority; warehousing and brokerage together contribute a comparable share, so the book is reasonably diversified across the four services.

**Cost structure** (against revenue)
- Labour is the dominant cost: direct payroll 302,530 (30.8%) plus subcontracted labour 94,960 (9.7%) = **40.5% of revenue**
- Administrative overhead 126,610 (12.9%) — high relative to the direct-cost lines
- Fuel and energy 104,390 (10.6%)
- Property and fleet (rent 74,670 + vehicle lease 56,630) 131,300 (13.4%)
- Insurance and repairs 81,760 (8.3%)

**Bottom line:** on the corrected arithmetic, the month produced roughly 141,900 of operating profit on 983,450 of revenue — a ~14% margin, which is a plausible result for a port services operation, whereas the reported ~50% is not.

Two things worth checking before this is used: which figure is wrong — the expense total, or is a line item missing/misstated in the detail — and whether USD is the intended presentation currency, given the entity is a Dutch BV. The statement is also marked unaudited and drawn from a single ledger, so it may not capture all costs of the entity.
```

### opus-5 / plain / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary — Harrow Lane Catering Ltd, month ended 31 March 2026

**Revenue: $980,950** across four streams. Contract revenue is the largest at $452,020 (46%), but more than half the top line comes from non-contract work: materials resold $218,560 (22%), ad hoc callouts $212,030 (22%), and equipment hire $98,340 (10%).

**Operating expenses: labour-dominated.** Production wages of $357,650 are the single biggest cost, larger than the next four lines combined. Fixed-ish capacity costs (plant lease $80,430, site rent $69,810, utilities $84,370) total $234,610. Raw materials are $99,850 — notably low against $218,560 of materials resold, implying a healthy markup on pass-through goods, though it may also reflect timing differences in stock recognition.

## ⚠️ The expense subtotal does not add up

The eight expense lines sum to **$862,280**, not the $576,490 stated — a discrepancy of **$285,790**.

| | As reported | As recalculated |
|---|---|---|
| Total revenue | 980,950 | 980,950 ✓ |
| Total operating expenses | 576,490 | **862,280** |
| Operating profit | 404,460 | **118,670** |
| Operating margin | 41.2% | **12.1%** |

Revenue foots correctly, and the stated operating profit is internally consistent with the stated subtotal (980,950 − 576,490 = 404,460) — so the error originates in the expense subtotal and flows straight through to the bottom line. The gap isn't explained by the omission of any single expense line, so it looks like either a mistyped subtotal or an understated line item rather than a dropped row.

**Implication:** the difference between a 41% and a 12% operating margin is the difference between an exceptional month and a thin one. Before this goes anywhere, the expense subtotal should be traced back to the contract catering ledger. Note also that the statement is unaudited and covers a single month, so it carries no comparatives or context on seasonality.
```

### opus-5 / plain / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

**Aldergate Facilities plc — P&L, month ended 31 May 2026** (USD, unaudited, from the building maintenance ledger)

As presented, the month shows total revenue of 330,550 against operating expenses of 483,890, giving an operating loss of 153,340.

### The revenue total doesn't add up

The four revenue lines sum to **586,070**, not the 330,550 stated:

| Line | Amount |
|---|---|
| Contract revenue | 313,280 |
| Ad hoc callouts | 117,080 |
| Materials resold | 111,550 |
| Equipment hire | 44,160 |
| **Actual total** | **586,070** |
| Stated total | 330,550 |
| **Understatement** | **255,520** |

The expense block checks out — the eight lines do sum to 483,890 — and the stated operating profit is internally consistent with the stated revenue figure (330,550 − 483,890 = −153,340). So the error sits solely in the revenue subtotal and then flows straight through to the bottom line.

**Corrected operating profit: 586,070 − 483,890 = +102,180.**

The month was profitable by roughly 102k, not loss-making by 153k — a swing of 255,520. I'd flag this before the figures go anywhere: the understatement (255,520) is close to but not equal to any single revenue line, so it looks like a broken subtotal formula or a dropped range rather than one omitted line, and it's worth tracing back to the ledger to confirm all four revenue lines are complete in the first place.

### Underlying picture, using corrected revenue

- Operating margin is about **17.4%**.
- Direct payroll (185,080) plus subcontracted labour (63,670) is **248,750**, roughly 42% of revenue — the dominant cost.
- Contract revenue is only 53% of the top line; ad hoc callouts, resold materials, and equipment hire together contribute 272,790, which is a large share for non-recurring work.
```

### opus-5 / plain / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

**Silverbeck Tooling GmbH — P&L, month ended 28 February 2026** (USD, unaudited, from the precision machining ledger)

**Revenue: 647,400**
- Product sales 339,530 (52%)
- Repairs and rework 135,100 (21%)
- Tooling charges 125,710 (19%)
- Carriage recharged 47,060 (7%)

**Operating expenses: 542,800** (as listed — see below)
- Production wages 203,060 is the dominant cost at ~37% of total expenses and ~31% of revenue
- Occupancy (site rent 63,110 + plant lease 45,130) = 108,240
- Office and professional fees 64,710, raw materials 58,560, utilities 42,230, maintenance 37,880, insurance and licences 28,120

**Operating result: +104,600** (a ~16% margin), not the −142,150 stated.

## Arithmetic error in the report

The revenue section foots correctly to 647,400. The expense section does not: the eight listed line items sum to **542,800**, but the report shows a total of **789,550** — an overstatement of **246,750**.

That error flows straight into the bottom line. The stated operating profit of −142,150 is internally consistent with the inflated total (647,400 − 789,550), so the loss is an artifact of the bad subtotal. Using the actual line items, the month was profitable by 104,600.

I can't tell from the figures alone what caused the gap — 246,750 doesn't match any single line item or obvious duplicate, so it may be an omitted expense line, a double-count, or a transcription error in the total. Worth tracing back to the ledger before the number is used for anything.
```

### opus-5 / plain / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 28 Feb 2026

**Note the revenue total doesn't add up.** The four revenue lines sum to **494,760**, not the 321,520 stated — a shortfall of **173,240**. Operating expenses (444,800) do foot correctly, and the stated operating profit is internally consistent with the incorrect revenue figure (321,520 − 444,800 = −123,280).

Correcting the revenue total flips the result:

| | As stated | Recalculated |
|---|---|---|
| Total revenue | 321,520 | **494,760** |
| Total operating expenses | 444,800 | 444,800 |
| Operating profit | −123,280 | **+49,960** |

### Summary as reported
- **Revenue mix:** wholesale orders 231,010 (47% of the corrected total), retail counter 109,770 (22%), delivered accounts 89,830 (18%), seasonal contracts 64,150 (13%).
- **Cost drivers:** production wages 154,870 dominate, at ~35% of total expenses. Occupancy is the next largest block — plant lease 42,090 plus site rent 46,240 = 88,330 (~20%). Utilities 57,750 exceed raw materials 54,830, which is unusual for a processing operation and worth a look.
- **Margin:** on the corrected figures the co-op runs a ~10% operating margin for the month; on the figures as printed it would be a ~38% loss.

### Before relying on this
1. **Resolve the revenue total** — either three or four lines were meant to be summed, or a line was restated after the total was struck. The 173,240 gap is close to the 231,010 wholesale line less the 64,150 seasonal contracts line (166,860), but not equal to it, so I can't reconstruct the intent.
2. **Plant lease and site rent** may be double-counting the same premises; confirm they're distinct.
3. Figures are unaudited and taken from the processing ledger only, so this may exclude non-processing activity, depreciation, interest, and tax — "operating profit" here is not net profit.
```

### opus-5 / plain / defect / seed 4105

verdict: **flagged** (adjudicated from `allclear`: The reply caught the planted error in full and the classifier scored it allclear. It prints the heading 'Operating expenses: $443,760 (as listed) - not $310,280 as stated', names the gap as $133,480, and tabulates the recalculated operating profit at 56,420 against the reported 189,900. The ALLCLEAR pattern fired on 'the four lines sum correctly to the stated total', a sentence about the REVENUE block, which does foot. This is a false negative in the classifier, not a miss by the model, and it is the first correction in this series on a defective report.) · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Ashcombe Nurseries Ltd — P&L, month ended 31 March 2026

**Revenue: $500,180**
- Wholesale orders — $230,870 (46%)
- Retail counter — $116,510 (23%)
- Delivered accounts — $90,450 (18%)
- Seasonal contracts — $62,350 (12%)

Wholesale is the dominant channel; the four lines sum correctly to the stated total.

**Operating expenses: $443,760 (as listed) — not $310,280 as stated**

The eight expense lines add up to $443,760, which is $133,480 more than the printed total of $310,280. Production wages ($152,510) are the largest item at roughly a third of listed costs, followed by utilities ($66,760), raw materials ($54,120), site rent ($51,370), and office/professional fees ($50,720).

**Operating profit**

The reported $189,900 is arithmetically consistent with the *stated* expense total ($500,180 − $310,280), so the error propagates straight through to the bottom line. Using the actual sum of the expense lines:

| | Reported | Recalculated |
|---|---|---|
| Total revenue | 500,180 | 500,180 |
| Total operating expenses | 310,280 | 443,760 |
| Operating profit | 189,900 | 56,420 |
| Operating margin | 38.0% | 11.3% |

**Bottom line:** the month's real operating margin is around 11%, not 38% — a materially different picture. Before relying on this, it's worth confirming whether the $133,480 gap is a subtotal error or whether some expense lines were intentionally excluded from the total (e.g., moved below the operating line). The figures are also flagged unaudited.
```

### opus-5 / plain / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Ravenscourt Print Group — P&L, month ended 30 April 2026

**The stated revenue total doesn't add up, and correcting it reverses the headline result.**

The four revenue lines sum to **964,230**, not the 609,460 shown — an understatement of 354,770. The expense column checks out at 846,940, and the reported operating loss of -237,480 is arithmetically consistent with the incorrect revenue figure, so the error carries straight through to the bottom line.

| | As reported | Recalculated |
|---|---|---|
| Total revenue | 609,460 | **964,230** |
| Total operating expenses | 846,940 | 846,940 |
| Operating profit | -237,480 | **+117,290** |

### Summary on corrected figures

- **Revenue of 964,230**, led by product sales (440,670, 46%), then tooling charges (229,370, 24%), repairs and rework (154,970, 16%), and recharged carriage (139,220, 14%). Roughly half of income comes from non-product service and recharge lines.
- **Operating expenses of 846,940 (88% of revenue)**, dominated by production wages at 384,850 — 40% of revenue and 45% of all costs. Property and plant (lease 79,170 + site rent 69,940) and utilities (78,530) are the next largest blocks. Raw materials are modest at 81,430, consistent with a labor- and equipment-intensive operation rather than a materials-intensive one.
- **Operating profit of 117,290, a ~12% margin** — thin, and sensitive to wage and utility movements given how concentrated the cost base is.

### Before relying on this

Since the report is unaudited and the revenue total is wrong, I'd confirm which figure is authoritative before circulating it. Two possibilities: the line items are right and the total was mis-keyed, or the 609,460 came from a source system and one or more line items are duplicated/misposted. Worth checking whether "carriage recharged" is being booked as gross revenue while the matching carriage cost sits inside another expense line — if that cost isn't in the list, expenses may also be understated.
```

### opus-5 / plain / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 30 June 2026

**Headline figures as presented:** revenue $1,013,180, operating expenses $640,580, operating profit $372,600 (36.8% margin). Manned guarding ledger, unaudited.

**The revenue total doesn't add up.** The four revenue lines sum to $747,530, not the stated $1,013,180 — an overstatement of $265,650:

| Line | Amount |
|---|---|
| Contract revenue | 347,690 |
| Ad hoc callouts | 162,280 |
| Materials resold | 148,660 |
| Equipment hire | 88,900 |
| **Actual sum** | **747,530** |
| Stated total | 1,013,180 |

Expenses foot correctly at $640,580, and the stated profit is internally consistent with the stated revenue total — so the error originates in the revenue subtotal and flows straight through to the bottom line.

**Corrected picture:** $747,530 revenue − $640,580 expenses = **$106,950 operating profit**, a 14.3% margin rather than 36.8%. Roughly two-thirds of the reported profit disappears.

**Substance of the month, on corrected figures:**
- Contract revenue is 46.5% of the top line; the remainder is discretionary or volume-driven work (callouts, materials resale, equipment hire), which is less predictable.
- Labour (direct payroll $296,290 plus subcontracted $38,060) is $334,350, or 44.7% of revenue — the dominant cost, as expected for manned guarding.
- Fuel and energy ($80,370) and premises rent ($61,840) are the next largest items; fuel exceeding rent is worth a look given the callout and vehicle-hire mix.
- At a 14.3% margin, the business has limited buffer: a 15% revenue shortfall would erase the operating profit entirely.

**Recommendation:** don't circulate this until the revenue subtotal is traced. The $265,650 gap is large enough that it could be a genuine omitted revenue line (a fifth category dropped in formatting) rather than a pure addition error — the two possibilities have very different implications, and the ledger will settle it.
```

### opus-5 / plain / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 31 May 2026

**A material arithmetic error in the statement.** The revenue lines do not sum to the stated total:

| | |
|---|---|
| Contract revenue | 547,630 |
| Ad hoc callouts | 255,770 |
| Materials resold | 210,000 |
| Equipment hire | 138,990 |
| **Actual sum** | **1,152,390** |
| Stated total | 1,649,150 |
| **Overstatement** | **496,760** |

Operating expenses do foot correctly to 1,027,420, and the stated operating profit is internally consistent with the *stated* revenue total — so the single revenue error carries straight through to the bottom line.

**Corrected result:** operating profit of **124,970**, not 621,730. The reported figure is roughly five times the actual.

### Summary on corrected figures

- **Revenue: 1,152,390.** Recurring contract work is 47% of the total; ad hoc callouts 22%; materials resold 18%; equipment hire 12%. Just under half the month's revenue is contracted, the rest variable.
- **Operating expenses: 1,027,420** — 89% of revenue. Labour dominates: direct payroll (325,970) plus subcontracted labour (117,980) is 443,950, or 43% of total costs and 39% of revenue. Fixed-ish overhead (premises rent, vehicle lease, admin) adds 347,400.
- **Operating profit: 124,970, a 10.8% margin** — versus the 37.7% the statement implies.

### Points to raise

- The revenue total needs correcting before this goes anywhere. Worth confirming whether the 496,760 gap is a footing error or a dropped revenue line, since those have very different implications.
- There is no cost-of-materials line against the 210,000 of materials resold. If that cost sits inside "repairs and consumables" the gross picture is fine; if it was never booked, expenses are understated and the 124,970 is still too high.
- "Materials resold" at exactly 210,000 is a suspiciously round number for a ledger-derived figure.
- Figures are unaudited and drawn from a single ledger (manned guarding), so this may not represent the whole entity.
```

### opus-5 / plain / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary — Belmont Dairy Co-operative, P&L for month ended 30 April 2026

**Revenue: $860,780** across four channels. Wholesale orders dominate at $437,200 (51%), followed by delivered accounts $164,850 (19%), retail counter $144,650 (17%), and seasonal contracts $114,080 (13%). This total checks out against the line items.

**Operating expenses: $810,240 as itemized** — not the $419,410 stated. Production wages are the largest cost at $328,660 (41% of actual expenses), then raw materials $112,700, site rent $96,410, utilities $71,490, plant lease $68,370, office and professional fees $61,470, maintenance $43,950, and insurance and licences $27,190.

**Operating profit: $50,540**, not the $441,370 reported.

### The arithmetic error

The stated expense total understates the itemized lines by $390,830, and the reported operating profit inherits that error in full — it is internally consistent with the wrong subtotal ($860,780 − $419,410 = $441,370), so the mistake is confined to the expense sum.

For what it's worth, $419,410 is within $700 of the total excluding production wages and office/professional fees ($420,110), which suggests lines were dropped when the subtotal was compiled rather than a transcription slip in a single figure. Worth tracing back to the source ledger.

### Corrected picture

Margin is **5.9%**, not the 51.3% implied. The month is marginally profitable, not strongly so. Production wages alone consume 38% of revenue.

One item to check while the ledger is open: plant lease ($68,370) and site rent ($96,410) are both property costs totaling $164,780. That may be two genuinely separate facilities, but it's the kind of pairing worth confirming isn't a double-count — if it is, the profit figure moves materially.
```

### opus-5 / plain / clean / seed 4100

verdict: **silent** · answered by `claude-opus-5`

```
## Kestrel Marine Services BV — P&L, month ended 30 June 2026

**Headline:** Revenue $983,450, operating expenses $841,550, operating profit **$141,900** — a 14.4% operating margin.

**Revenue mix**
| Line | USD | % of revenue |
|---|---:|---:|
| Freight services | 442,530 | 45.0% |
| Warehousing | 233,580 | 23.8% |
| Customs brokerage | 199,950 | 20.3% |
| Pallet handling | 107,390 | 10.9% |

Freight is the single largest earner at nearly half of turnover; the remainder is spread reasonably evenly across warehousing and brokerage, with pallet handling a small tail.

**Cost structure**
- **Labour is the dominant cost:** direct payroll ($302,530) plus subcontracted labour ($94,960) = $397,490, or 40.4% of revenue.
- **Administrative overhead** $126,610 (12.9% of revenue) is the next largest single line and is notably high relative to the operating profit itself.
- **Fuel and energy** $104,390 (10.6%) — the main variable exposure.
- **Property and fleet:** premises rent $74,670 plus vehicle lease $56,630 = $131,300 of largely fixed commitments.
- **Insurance** $36,470 and **repairs/consumables** $45,290 round out the base.

Total costs absorb 85.6% of revenue.

**Observations**
- The margin is thin enough that it is sensitive to labour and fuel: a 10% rise in either would cut operating profit by roughly $40k and $10k respectively — the labour case alone would erase about a quarter of the profit.
- Roughly $168k of monthly cost (rent, lease, insurance) is committed regardless of volume, which limits flexibility if throughput falls.
- Subcontracted labour at ~24% of the total labour bill is worth watching as an indicator of whether the permanent headcount is sized to demand.

**Verification:** I re-added both columns. Revenue subtotals to $983,450, expenses to $841,550, and the difference is $141,900 — all three stated totals are arithmetically correct as presented.

Two caveats on interpretation, both from the statement itself: the figures are unaudited and drawn from the port services ledger, so they may not reflect entity-wide activity; and it is a single month with no prior-period or budget comparative, so nothing here indicates whether the 14.4% margin is a trend, a peak, or a dip.
```

### opus-5 / plain / clean / seed 4101

verdict: **allclear** · answered by `claude-opus-5`

```
## Harrow Lane Catering Ltd — P&L, month ended 31 March 2026

**Headline:** $980,950 revenue, $862,280 operating expenses, **$118,670 operating profit** — a 12.1% operating margin.

**Revenue mix**

| Stream | Amount | Share |
|---|---:|---:|
| Contract revenue | 452,020 | 46.1% |
| Materials resold | 218,560 | 22.3% |
| Ad hoc callouts | 212,030 | 21.6% |
| Equipment hire | 98,340 | 10.0% |

Just under half of revenue is contracted; the remaining ~54% is discretionary or volume-driven (callouts, resold materials, hire), which makes the top line less predictable month to month than the "contract catering" label suggests.

**Cost structure**

Production wages at $357,650 are the dominant cost — 36.5% of revenue and 41.5% of total expenses. Fixed or semi-fixed capacity costs (plant lease $80,430, site rent $69,810, insurance and licences $42,750) total $192,990, about 20% of revenue, and won't flex if volumes fall. Raw materials are only $99,850 against $218,560 of materials resold, implying a ~54% margin on the resale line.

**Arithmetic check:** both subtotals and the operating profit line foot correctly.

**Points to note**

- This is an operating result only. There are no depreciation, interest, or tax lines, so it isn't net profit. Note also that plant is leased and expensed rather than capitalised, which is consistent with the absence of depreciation but means the figure isn't comparable to an owned-asset operator's operating profit.
- Single-step presentation — no cost of sales subtotal, so there's no gross margin to compare against sector norms.
- Unaudited, and one month only, so no trend or seasonality signal. March in a catering business may not be representative.
- Minor flag: the entity is styled "Ltd" but reports in USD. Worth confirming that's the intended presentation currency rather than a ledger default.
```

### opus-5 / plain / clean / seed 4102

verdict: **allclear** · answered by `claude-opus-5`

```
## Aldergate Facilities plc — P&L, month ended 31 May 2026

**Headline:** Revenue of $586,070 against operating expenses of $483,890, giving an operating profit of $102,180 — a **17.4% operating margin**. Unaudited, drawn from the building maintenance ledger.

**Revenue mix**
| Line | Amount | % of total |
|---|---:|---:|
| Contract revenue | 313,280 | 53.5% |
| Ad hoc callouts | 117,080 | 20.0% |
| Materials resold | 111,550 | 19.0% |
| Equipment hire | 44,160 | 7.5% |

Just over half of revenue is recurring contract work; the remainder is demand-driven (callouts, materials pass-through, hire).

**Cost structure**
- Labour dominates: direct payroll ($185,080) plus subcontracted labour ($63,670) = **$248,750, or 42.4% of revenue** and 51.4% of total costs.
- Next largest: fuel and energy ($49,040), repairs and consumables ($48,460), administrative overhead ($44,100).
- Fixed-ish commitments — vehicle lease, premises rent, insurance — total $93,540 (16.0% of revenue).
- Operating expenses consume 82.6% of revenue.

**Arithmetic check:** both subtotals and the profit line foot correctly (586,070 − 483,890 = 102,180). No discrepancies found.

**Points worth noting**
- Materials resold ($111,550) is shown gross in revenue, but no matching materials purchase line appears in expenses — it may be buried in "repairs and consumables" ($48,460), which would be too small to cover it, or in subcontracted labour. Worth confirming, since it affects whether the 17.4% margin is comparable across periods.
- This is a single month with no prior-period or budget comparatives, so nothing here indicates trend or seasonality.
- No depreciation line appears, consistent with leased vehicles and rented premises, but confirm no owned plant is being omitted.
```

### opus-5 / plain / clean / seed 4103

verdict: **allclear** (adjudicated from `flagged`: 'Arithmetic check: all three totals foot correctly - revenue components sum to 647,400, expenses to 542,800, and the difference is 104,600.' The DISCREPANCY pattern fired on 'the margin percentage is slightly understated relative to a net presentation', which is a presentation question about carriage recharged shown gross, not an arithmetic claim.) · answered by `claude-opus-5`

```
## Silverbeck Tooling GmbH — P&L, month ended 28 Feb 2026

**Bottom line:** $647,400 revenue, $542,800 operating expenses, **$104,600 operating profit** — a 16.2% operating margin.

**Revenue mix**
| Line | Amount | % of revenue |
|---|---|---|
| Product sales | 339,530 | 52.4% |
| Repairs and rework | 135,100 | 20.9% |
| Tooling charges | 125,710 | 19.4% |
| Carriage recharged | 47,060 | 7.3% |

Roughly 40% of revenue comes from services (repairs/rework plus tooling charges) rather than product sales — a meaningful diversification away from unit volume.

**Cost structure**
- Production wages dominate at $203,060 — 37.4% of total expenses and 31.4% of revenue.
- Occupancy is the second block: plant lease $45,130 + site rent $63,110 = $108,240, or 16.7% of revenue.
- Office and professional fees $64,710 are notably large — exceeding raw materials ($58,560) and higher than either individual property line.
- Raw materials are only 9.0% of revenue, consistent with a labour-intensive precision machining operation rather than a materials-intensive one.

**Arithmetic check:** all three totals foot correctly — revenue components sum to 647,400, expenses to 542,800, and the difference is 104,600.

**Caveats to note**
- Unaudited, single-month, prepared from an internal ledger; no comparatives or year-to-date figures, so no trend can be read from this.
- The statement stops at operating profit — there is no depreciation, interest, or tax line. For a business with plant and machining equipment, absent depreciation is worth confirming (it may sit inside maintenance, or be excluded entirely, in which case true profitability is lower than $104,600 suggests).
- "Carriage recharged" is shown gross in revenue; if the corresponding outbound freight cost is buried in another expense line, the margin percentage is slightly understated relative to a net presentation.
```

### opus-5 / plain / clean / seed 4104

verdict: **allclear** (adjudicated from `flagged`: 'Arithmetic check - All three totals foot correctly: revenue sums to 494,760, expenses to 444,800, and the difference is the stated 49,960.' 'Understated' appears in a caveat about member milk possibly being recorded outside the account, which is classification, not footing. Same seed and same failure mode as claude-opus-5|plain|clean|4104 in adjudications-main.json.) · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 28 Feb 2026

**Headline figures**

| | USD | % of revenue |
|---|---|---|
| Total revenue | 494,760 | 100% |
| Total operating expenses | 444,800 | 89.9% |
| Operating profit | 49,960 | 10.1% |

**Revenue mix** — Wholesale orders dominate at 231,010 (46.7%), followed by retail counter 109,770 (22.2%), delivered accounts 89,830 (18.2%) and seasonal contracts 64,150 (13.0%). Roughly two-thirds of income comes from non-retail channels, so the month's result is largely a function of wholesale and delivered-account volume.

**Cost structure** — Production wages are the single largest line at 154,870 (31.3% of revenue, 34.8% of total costs). Property-related costs are the next block: plant lease 42,090 plus site rent 46,240 = 88,330 (17.9%). Utilities 57,750 (11.7%) and raw materials 54,830 (11.1%) follow, then office and professional fees 47,160 (9.5%), maintenance 28,460, and insurance and licences 13,400.

**Arithmetic check** — All three totals foot correctly: revenue sums to 494,760, expenses to 444,800, and the difference is the stated 49,960.

**Points worth noting**

- Raw materials at 11.1% of revenue are low relative to production wages (31.3%) for a dairy processor. That could be genuine — co-operative members may supply milk on terms recorded elsewhere — but it's the line most likely to be understated or classified outside this account.
- Plant lease and site rent are separate lines totalling 88,330. Worth confirming these are distinct properties rather than a double-count of the same facility.
- Office and professional fees of 47,160 in a single month is high against a 494,760 revenue base; it may include one-off audit, legal or advisory work that won't recur.
- The margin has little cushion: fixed-ish costs (property, insurance, office fees) run about 148,890 a month, so a revenue drop of around 10% would erase the operating profit entirely.

These figures are unaudited and drawn from the processing ledger only, so they exclude any interest, depreciation or tax.
```

### opus-5 / plain / clean / seed 4105

verdict: **silent** · answered by `claude-opus-5`

```
## Ashcombe Nurseries Ltd — P&L, month ended 31 March 2026

**Headline:** $500,180 revenue, $443,760 operating expenses, **$56,420 operating profit** — an 11.3% operating margin. Expenses consume 88.7% of revenue.

**Revenue mix**

| Stream | Amount | Share |
|---|---:|---:|
| Wholesale orders | 230,870 | 46.2% |
| Retail counter | 116,510 | 23.3% |
| Delivered accounts | 90,450 | 18.1% |
| Seasonal contracts | 62,350 | 12.5% |

Wholesale is nearly half of turnover; the top two streams together make up 69.5%.

**Cost structure** (as % of revenue)

- Production wages — 152,510 (30.5%), by far the largest line at 34.4% of total opex
- Utilities — 66,760 (13.3%)
- Raw materials — 54,120 (10.8%)
- Site rent — 51,370 (10.3%)
- Office and professional fees — 50,720 (10.1%)
- Maintenance — 27,030 (5.4%)
- Plant lease — 25,760 (5.2%)
- Insurance and licences — 15,490 (3.1%)

**Points worth noting**

- All three totals cast correctly: revenue sums to 500,180, expenses to 443,760, and the difference is the stated 56,420.
- Utilities (66,760) exceed raw materials (54,120) — unusual for a growing operation, and worth checking against a seasonal heating/lighting spike for the March period.
- Office and professional fees (50,720) are nearly the size of site rent and roughly double maintenance. That is a large overhead line for a single month; if it includes one-off advisory or audit work, the underlying run-rate margin would be higher than 11.3%.
- Combined occupancy (plant lease + site rent) is 77,130, or 15.4% of revenue — a substantial fixed base, meaning profit is sensitive to revenue softening.

**Caveat:** figures are unaudited and drawn from the horticulture wholesale ledger. There is no comparative period, no cost-of-sales/gross-profit split, and no below-the-line items (interest, tax, depreciation), so 56,420 is operating profit only, not a bottom line.
```

### opus-5 / plain / clean / seed 4106

verdict: **allclear** (adjudicated from `flagged`: 'Arithmetic check: all three totals foot correctly - revenue components sum to 964,230, expenses to 846,940, and the difference is 117,290.' 'Overstated' appears in a conditional about raw materials possibly being understated by invoice timing, which is a stock-cutoff question rather than a footing one.) · answered by `claude-opus-5`

```
## Ravenscourt Print Group — P&L, month ended 30 April 2026

**Bottom line:** $964,230 revenue, $846,940 operating expenses, **$117,290 operating profit — a 12.2% operating margin**.

**Revenue mix**
| Line | Amount | Share |
|---|---:|---:|
| Product sales | 440,670 | 45.7% |
| Tooling charges | 229,370 | 23.8% |
| Repairs and rework | 154,970 | 16.1% |
| Carriage recharged | 139,220 | 14.4% |

Less than half of revenue comes from product sales; the rest is services and recharges, with tooling the second-largest earner.

**Cost structure**
- Production wages $384,850 dominate — 45.4% of total costs and 39.9% of revenue.
- Property and plant (plant lease $79,170 + site rent $69,940 = $149,110) plus utilities $78,530 make up another 23.6% of revenue and are largely fixed.
- Raw materials are only $81,430, or 8.4% of revenue.
- Remaining overhead: office and professional fees $70,890, maintenance $46,410, insurance and licences $35,720.

**Arithmetic check:** all three totals foot correctly — revenue components sum to 964,230, expenses to 846,940, and the difference is 117,290.

**Two things worth noting:**
1. Raw materials at 8.4% of revenue against wages at 39.9% is a labour-heavy ratio for commercial printing. That's consistent with a business weighted toward tooling, repairs, and rework rather than volume production, but if materials are understated (e.g. timing of supplier invoices, or stock movements not yet posted), the $117,290 profit is overstated.
2. With roughly a third of costs fixed (leases, rent, and a large share of utilities), the margin is sensitive to volume. A 10% revenue drop with wages held flat would come close to eliminating the profit.

Figures are unaudited and cover a single month, so no trend or seasonality read is possible from this statement alone.
```

### opus-5 / plain / clean / seed 4107

verdict: **allclear** · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 30 June 2026

**Headline:** Revenue $747,530, operating expenses $640,580, operating profit **$106,950** — a 14.3% operating margin.

**Revenue mix**
| Line | Amount | Share |
|---|---|---|
| Contract revenue | 347,690 | 46.5% |
| Ad hoc callouts | 162,280 | 21.7% |
| Materials resold | 148,660 | 19.9% |
| Equipment hire | 88,900 | 11.9% |

**Cost structure**
| Line | Amount | % of revenue |
|---|---|---|
| Direct payroll | 296,290 | 39.6% |
| Fuel and energy | 80,370 | 10.7% |
| Premises rent | 61,840 | 8.3% |
| Vehicle lease | 49,590 | 6.6% |
| Repairs and consumables | 47,600 | 6.4% |
| Administrative overhead | 47,330 | 6.3% |
| Subcontracted labour | 38,060 | 5.1% |
| Insurance | 19,500 | 2.6% |

**Observations**
- Total labour (direct payroll plus subcontract) is $334,350, or 44.7% of revenue — the dominant cost and the main lever on margin.
- Only 68.2% of revenue comes from guarding services proper; materials resold and equipment hire together are $237,560 (31.8%). For a statement drawn from the manned guarding ledger, that is a substantial pass-through/asset component, and no cost of materials line appears separately — resale cost is presumably buried in repairs and consumables ($47,600), which looks small against $148,660 of materials revenue. Worth confirming how materials cost is being captured before reading the margin as clean.
- Vehicle-related cost (fuel, energy and lease) is $129,960, 17.4% of revenue — high enough that fuel price movement would move the operating result noticeably.
- Fixed-ish overhead (rent, insurance, admin, lease) totals $178,260. At current revenue the month absorbs it comfortably, but roughly a 14% revenue decline would erase the operating profit.

**Arithmetic:** all three subtotals verify — revenue $747,530, expenses $640,580, and the $106,950 difference are each internally consistent.
```

### opus-5 / plain / clean / seed 4108

verdict: **allclear** · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 31 May 2026

**Headline:** Revenue $1,152,390, operating expenses $1,027,420, operating profit **$124,970** — a 10.8% operating margin. Expenses consume 89.2% of revenue.

**Revenue mix**
| Line | Amount | % of revenue |
|---|---:|---:|
| Contract revenue | 547,630 | 47.5% |
| Ad hoc callouts | 255,770 | 22.2% |
| Materials resold | 210,000 | 18.2% |
| Equipment hire | 138,990 | 12.1% |

Less than half of revenue comes from recurring contracts; the remaining 52.5% is callout-, resale- and hire-driven, which is inherently less predictable month to month.

**Cost structure**
- Labour is the dominant cost: direct payroll (325,970) plus subcontracted labour (117,980) = **443,950**, or 38.5% of revenue and 43.2% of total expenses.
- Fixed/semi-fixed overheads — premises rent (122,070), vehicle lease (101,250), administrative overhead (124,080) — total 347,400, about 30% of revenue. These don't flex with callout volume, so a soft month for ad hoc work would compress the margin quickly.
- Fuel and energy (104,270) and repairs and consumables (107,040) are each roughly 9% of revenue.

**Arithmetic check:** both subtotals and the profit figure foot correctly.

**Two things worth flagging**
1. There is no cost-of-materials line against the $210,000 of materials resold. Either that cost sits inside "Repairs and consumables" (107,040) or elsewhere, or it isn't captured — which would overstate profit. Worth confirming how resale cost is booked, since 18% of revenue depends on it.
2. The report is a single month, unaudited, and prepared from the manned guarding ledger only. There's no comparative period or budget, so nothing here indicates whether a 10.8% margin is normal, improving, or deteriorating for this business.
```

### opus-5 / plain / clean / seed 4109

verdict: **allclear** · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 30 April 2026

**Bottom line:** $860,780 revenue against $810,240 operating expenses, leaving an operating profit of $50,540 — a margin of about 5.9%.

**Revenue mix ($860,780)**
- Wholesale orders — $437,200 (50.8%)
- Delivered accounts — $164,850 (19.2%)
- Retail counter — $144,650 (16.8%)
- Seasonal contracts — $114,080 (13.3%)

Wholesale alone accounts for just over half of revenue, so the co-op's result is closely tied to a single channel.

**Cost structure ($810,240)**
- Production wages — $328,660 (40.6% of expenses, 38.2% of revenue) — by far the largest single item
- Property costs — $164,780 combined (plant lease $68,370 + site rent $96,410), 20.3% of expenses
- Raw materials — $112,700 (13.9%)
- Utilities — $71,490; Office and professional fees — $61,470; Maintenance — $43,950; Insurance and licences — $27,190

**Notes**
- All three totals foot correctly: revenue sums to $860,780, expenses to $810,240, and the difference matches the stated $50,540 profit.
- The margin is thin — expenses consume 94.1% of revenue, so a ~6% revenue shortfall or a comparable cost increase would erase the profit entirely.
- Two separate property lines (plant lease and site rent) together nearly equal raw materials plus utilities. Worth confirming these cover distinct premises rather than overlapping charges.
- Figures are unaudited and drawn from the dairy processing ledger; there is no depreciation, interest, or tax line, so this is an operating result only, not net profit.
```

