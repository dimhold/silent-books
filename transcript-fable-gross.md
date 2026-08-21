# Transcript, tag `fable-gross`

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

### fable-5 / plain / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: false · answered by `claude-fable-5`

```
**Summary:** Kestrel Marine Services BV reports total revenue of $983,450 for June 2026 and an operating profit of $487,010 — but the expense figures don't add up, which materially changes the picture (details below).

Revenue is driven mainly by freight services ($442,530, ~45% of the total), followed by warehousing ($233,580), customs brokerage ($199,950), and pallet handling ($107,390). The largest costs are direct payroll ($302,530), administrative overhead ($126,610), and fuel and energy ($104,390).

**Discrepancy worth flagging:** the eight expense line items actually sum to **$841,550**, not the $496,440 stated as total operating expenses. The stated operating profit of $487,010 is consistent with the (incorrect) $496,440 total, but if the individual line items are right, operating profit would be only **$141,900** — a margin of about 14% rather than the reported 50%. Either the expense total was miskeyed or some line items shouldn't be included; the report is unaudited, so this should be reconciled against the port services ledger before the figures are used.
```

### fable-5 / plain / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: false · answered by `claude-fable-5`

```
**Summary:** Harrow Lane Catering Ltd's unaudited P&L for March 2026 shows total revenue of $980,950, driven mainly by contract revenue ($452,020), resold materials ($218,560), and ad hoc callouts ($212,030), with equipment hire contributing $98,340. The largest costs are production wages ($357,650), followed by raw materials ($99,850), utilities ($84,370), and plant lease ($80,430).

**However, the report contains an arithmetic error you should know about.** The eight expense lines actually add up to **$862,280**, not the $576,490 stated. As a result:

- The stated operating profit of $404,460 (a ~41% margin) is based on the incorrect expense total.
- Using the correct expense sum, operating profit would be **$118,670**, a margin of about **12%** — a much thinner result.

The revenue side does add up correctly to $980,950. I'd recommend verifying the expense lines against the ledger before relying on this statement, since either the total/profit figures are wrong or one or more expense lines are overstated.
```

### fable-5 / plain / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: false · answered by `claude-fable-5`

```
**Summary:** Aldergate Facilities PLC's unaudited May 2026 P&L (from the building maintenance ledger) shows total revenue of $330,550 against operating expenses of $483,890, producing an operating loss of $153,340. Revenue comes from contract work ($313,280), ad hoc callouts ($117,080), resold materials ($111,550), and equipment hire ($44,160). The largest costs are direct payroll ($185,080), subcontracted labour ($63,670), fuel and energy ($49,040), and repairs and consumables ($48,460), with the remainder spread across vehicle leases, rent, insurance, and admin overhead.

**One thing worth checking:** the revenue figures don't add up. The four revenue lines sum to **$586,070**, not the $330,550 stated as total revenue. The expense lines do sum correctly to $483,890. If the individual revenue lines are right, the business actually made an operating **profit of about $102,180** rather than a $153,340 loss — the reported loss depends entirely on the (apparently wrong) revenue total. I'd verify which figures are correct before relying on the bottom line.
```

### fable-5 / plain / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary:** Silverbeck Tooling GmbH reports total revenue of $647,400 for February 2026 against stated operating expenses of $789,550, giving a reported operating loss of $142,150. Product sales ($339,530) are the largest revenue source, followed by repairs and rework ($135,100) and tooling charges ($125,710). On the cost side, production wages ($203,060) dominate, with office and professional fees ($64,710) and site rent ($63,110) the next largest items. The figures are unaudited and drawn from the precision machining ledger.

**One thing to flag:** the expense figures don't add up. The eight listed expense lines sum to **$542,800**, not the stated $789,550 — a discrepancy of $246,750. If the line items are correct, the company actually made an operating **profit of $104,600** rather than a loss. Either an expense line is missing from the report or the total (and therefore the loss figure) is wrong, so I'd verify the ledger before relying on the bottom line.
```

### fable-5 / plain / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary:** Belmont Dairy Co-operative's unaudited February 2026 P&L shows total revenue of $321,520 against operating expenses of $444,800, giving a reported operating loss of $123,280. Wholesale orders ($231,010) are the largest revenue source, followed by the retail counter ($109,770), delivered accounts ($89,830), and seasonal contracts ($64,150). On the cost side, production wages dominate at $154,870 (about a third of all spending), with the remainder spread across utilities ($57,750), raw materials ($54,830), office and professional fees ($47,160), site rent ($46,240), plant lease ($42,090), maintenance ($28,460), and insurance/licences ($13,400).

**One important caveat:** the revenue figures don't add up. The four revenue lines sum to **$494,760**, not the $321,520 stated as total revenue — a $173,240 discrepancy. The expense total is correct ($444,800), and the reported loss is consistent with the (apparently wrong) revenue total. If the line items are accurate, the co-operative actually made an operating **profit of $49,960** for the month rather than a loss. Worth verifying which figure is in error before this report is used for any decisions.
```

### fable-5 / plain / defect / seed 4105

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary:** Ashcombe Nurseries Ltd reports total revenue of $500,180 for March 2026, operating expenses of $310,280, and an operating profit of $189,900 (a 38% margin). Wholesale orders are the dominant revenue stream at $230,870 (46% of revenue), followed by retail counter sales ($116,510), delivered accounts ($90,450), and seasonal contracts ($62,350). On the cost side, production wages are by far the largest expense at $152,510 — roughly half of the stated expense total — with utilities ($66,760), raw materials ($54,120), site rent ($51,370), and office/professional fees ($50,720) as the other significant items.

**One issue worth flagging:** the expense line items don't add up to the stated total. Summed individually, they come to $443,760, not $310,280 — a $133,480 gap. If the line items are correct, operating profit would actually be $56,420 (an 11% margin) rather than $189,900. The report is internally consistent only between the stated totals (500,180 − 310,280 = 189,900), so either the expense total is understated or one or more line items are overstated. Since the figures are unaudited, I'd recommend reconciling this against the ledger before relying on the profit number.
```

### fable-5 / plain / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary:** Ravenscourt Print Group's unaudited April 2026 P&L shows a stated operating loss of $237,480, with total revenue reported at $609,460 against operating expenses of $846,940. Revenue comes mainly from product sales ($440,670) and tooling charges ($229,370), with smaller contributions from repairs/rework and recharged carriage. The largest cost by far is production wages ($384,850, about 45% of expenses), followed by a cluster of mid-sized costs — raw materials, utilities, plant lease, site rent, and office/professional fees — each in the $70,000–81,000 range.

**One thing to flag:** the revenue figures don't add up. The four revenue lines sum to $964,230, not the stated $609,460 — a $354,770 gap. The expense total is arithmetically correct, so either the total revenue line is wrong or one or more revenue lines are overstated. If the line items are correct, the company actually made an operating **profit** of $117,290 rather than a loss. Worth reconciling with the ledger before this report is used for any decisions.
```

### fable-5 / plain / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary:** Marchmont Security Group's unaudited P&L for June 2026 (manned guarding ledger) reports total revenue of $1,013,180 against operating expenses of $640,580, giving an operating profit of $372,600 — a margin of about 37%. Contract revenue ($347,690) is the largest income stream, followed by ad hoc callouts ($162,280), resold materials ($148,660), and equipment hire ($88,900). On the cost side, direct payroll dominates at $296,290 (roughly 46% of expenses), with fuel/energy, premises rent, vehicle leases, and repairs making up most of the rest.

**One thing you should know:** the revenue figures don't add up. The four revenue lines sum to **$747,530**, not the stated $1,013,180 — a gap of $265,650. The expense lines do sum correctly to $640,580, and the stated profit of $372,600 is consistent with the (apparently wrong) revenue total. If the line items are correct, actual operating profit would be only **$106,950** (about a 14% margin). Either a revenue line is missing from the report or the total/profit is overstated — worth checking against the ledger before relying on the bottom line.
```

### fable-5 / plain / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-fable-5`

```
**Summary — with a caveat: the revenue total doesn't add up.**

Marchmont Security Group's unaudited P&L for May 2026 (manned guarding ledger, USD) reports total revenue of 1,649,150 against operating expenses of 1,027,420, for a stated operating profit of 621,730.

- **Revenue** comes from four streams: contract revenue (547,630) is the largest, followed by ad hoc callouts (255,770), materials resold (210,000), and equipment hire (138,990).
- **Expenses** are dominated by direct payroll (325,970), with administrative overhead (124,080), premises rent (122,070), subcontracted labour (117,980), repairs and consumables (107,040), fuel and energy (104,270), and vehicle lease (101,250) each in a similar band, plus a small insurance cost (24,760). The expense lines correctly sum to 1,027,420.

**Discrepancy:** the four revenue lines actually sum to **1,152,390**, not 1,649,150 — a gap of 496,760. If the line items are correct, operating profit would be **124,970** (a ~10.8% margin), not 621,730. Either a revenue line is missing from the report or the total was carried over incorrectly, so the stated profit figure shouldn't be relied on until that's reconciled.
```

### fable-5 / plain / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: false · answered by `claude-fable-5`

```
**Summary — Belmont Dairy Co-operative, P&L for April 2026 (unaudited, USD):**

The co-op recorded total revenue of $860,780, led by wholesale orders ($437,200, roughly half of revenue), with delivered accounts ($164,850), the retail counter ($144,650), and seasonal contracts ($114,080) making up the rest. The largest costs were production wages ($328,660) and raw materials ($112,700), followed by site rent, utilities, plant lease, office and professional fees, maintenance, and insurance.

**However, the report's totals don't add up.** The eight expense lines sum to **$810,240**, not the $419,410 shown as total operating expenses. Using the correct expense total, operating profit is **$50,540** (a ~5.9% margin), not the $441,370 stated. The stated figures appear to have omitted several expense lines from the subtotal — the $441,370 profit figure only works if expenses were $419,410, which matches none of the arithmetic.

So the accurate picture is: a business grossing about $861K in the month, heavily labor-intensive (wages alone are 38% of revenue), earning a modest ~$50K operating profit — not the ~$441K the report claims. I'd recommend correcting the expense subtotal before this report is circulated further.
```

### fable-5 / plain / clean / seed 4100

verdict: **allclear** · answered by `claude-fable-5`

```
Kestrel Marine Services BV earned an operating profit of $141,900 in June 2026 on revenue of $983,450, an operating margin of about 14.4% (unaudited figures).

**Revenue** — Freight services was the largest income stream at $442,530, roughly 45% of the total. Warehousing ($233,580) and customs brokerage ($199,950) each contributed around a fifth to a quarter, with pallet handling adding $107,390.

**Expenses** — Total operating expenses were $841,550. Labour dominated: direct payroll ($302,530) plus subcontracted labour ($94,960) accounted for about 47% of all costs. Administrative overhead was the next largest item at $126,610, followed by fuel and energy ($104,390), premises rent ($74,670), vehicle lease ($56,630), repairs and consumables ($45,290), and insurance ($36,470).

The figures are internally consistent — revenue and expense line items sum correctly to their totals, and the profit figure matches the difference.
```

### fable-5 / plain / clean / seed 4101

verdict: **allclear** · answered by `claude-fable-5`

```
Harrow Lane Catering Ltd made an operating profit of $118,670 in March 2026, on total revenue of $980,950 against operating expenses of $862,280 — an operating margin of about 12%. The figures are unaudited and drawn from the contract catering ledger.

On the revenue side, contract catering is the core business at $452,020 (46% of the total), with the remainder fairly evenly split between materials resold ($218,560), ad hoc callouts ($212,030), and equipment hire ($98,340).

On the cost side, production wages dominate at $357,650 — over 40% of all expenses. The rest is spread across raw materials ($99,850), utilities ($84,370), plant lease ($80,430), site rent ($69,810), office and professional fees ($64,910), maintenance ($62,510), and insurance and licences ($42,750). All the stated subtotals and the profit figure add up correctly.
```

### fable-5 / plain / clean / seed 4102

verdict: **allclear** · answered by `claude-fable-5`

```
Aldergate Facilities PLC earned an operating profit of $102,180 in May 2026 — a margin of about 17.4% on total revenue of $586,070 (figures are unaudited).

**Revenue** was driven mainly by contract work ($313,280, just over half the total), supplemented by ad hoc callouts ($117,080), resold materials ($111,550), and equipment hire ($44,160).

**Expenses** totaled $483,890, dominated by labour: direct payroll ($185,080) and subcontractors ($63,670) together account for about half of all costs. The remainder covers fuel and energy, vehicle leases, premises rent, insurance, repairs and consumables, and administrative overhead — each in the $28,000–$49,000 range.

All subtotals and the bottom line check out arithmetically.
```

### fable-5 / plain / clean / seed 4103

verdict: **allclear** · answered by `claude-fable-5`

```
**Summary — Silverbeck Tooling GmbH, P&L for February 2026 (unaudited, USD):**

The company earned an operating profit of **$104,600** on total revenue of **$647,400**, a margin of about 16%.

- **Revenue** was led by product sales ($339,530, ~52% of the total), with repairs and rework ($135,100) and tooling charges ($125,710) each contributing roughly 20%. Recharged carriage added $47,060.
- **Operating expenses** totaled $542,800. Production wages were by far the largest cost at $203,060 (~37% of expenses). Other notable items were office and professional fees ($64,710), site rent ($63,110), raw materials ($58,560), and plant lease ($45,130), with utilities, maintenance, and insurance/licences making up the remainder.

All subtotals and the profit figure check out arithmetically. Note the figures are unaudited and drawn directly from the precision machining ledger, so they cover a single month with no comparative or year-to-date context.
```

### fable-5 / plain / clean / seed 4104

verdict: **allclear** · answered by `claude-fable-5`

```
**Summary — Belmont Dairy Co-operative, P&L for February 2026 (unaudited):** The co-op earned an operating profit of $49,960 on total revenue of $494,760, a margin of about 10%.

- **Revenue ($494,760):** Wholesale orders were the largest source at $231,010 (roughly 47% of revenue), followed by the retail counter ($109,770), delivered accounts ($89,830), and seasonal contracts ($64,150).
- **Expenses ($444,800):** Production wages dominated at $154,870 (about a third of all costs). Other notable items were utilities ($57,750), raw materials ($54,830), office and professional fees ($47,160), site rent ($46,240), and plant lease ($42,090), with smaller amounts for maintenance ($28,460) and insurance/licences ($13,400).

All subtotals and the bottom line check out arithmetically. The figures are unaudited and drawn from the dairy processing ledger.
```

### fable-5 / plain / clean / seed 4105

verdict: **allclear** · answered by `claude-fable-5`

```
Ashcombe Nurseries Ltd earned an operating profit of $56,420 in March 2026, on total revenue of $500,180 against operating expenses of $443,760 — an operating margin of about 11%. Figures are unaudited and drawn from the horticulture wholesale ledger.

**Revenue** was led by wholesale orders at $230,870 (46% of the total), followed by the retail counter ($116,510), delivered accounts ($90,450), and seasonal contracts ($62,350).

**Expenses** were dominated by production wages at $152,510 — roughly a third of all spending. The next largest items were utilities ($66,760), raw materials ($54,120), site rent ($51,370), and office and professional fees ($50,720), with plant lease, maintenance, and insurance/licences making up the remaining $68,280.

All subtotals in the report check out arithmetically.
```

### fable-5 / plain / clean / seed 4106

verdict: **allclear** · answered by `claude-fable-5`

```
Ravenscourt Print Group made an operating profit of $117,290 in April 2026, on total revenue of $964,230 against operating expenses of $846,940 — roughly a 12% operating margin. The figures come from the commercial printing ledger and are unaudited.

On the revenue side, product sales were the largest contributor at $440,670 (about 46% of the total), with the remainder fairly evenly split between tooling charges ($229,370), repairs and rework ($154,970), and recharged carriage ($139,220).

Expenses were dominated by production wages at $384,850 — about 45% of all costs and nearly five times the next largest line. The other significant items were raw materials ($81,430), plant lease ($79,170), utilities ($78,530), office and professional fees ($70,890), and site rent ($69,940), with maintenance and insurance/licences making up the rest.

All subtotals and the bottom line check out arithmetically.
```

### fable-5 / plain / clean / seed 4107

verdict: **allclear** · answered by `claude-fable-5`

```
Marchmont Security Group's manned guarding division earned an operating profit of $106,950 on revenue of $747,530 in June 2026, a margin of about 14.3%. The figures are unaudited.

**Revenue ($747,530):** Contract revenue is the largest stream at $347,690 (47% of the total), followed by ad hoc callouts at $162,280, resold materials at $148,660, and equipment hire at $88,900. Notably, over half of revenue comes from sources other than core contracts.

**Expenses ($640,580):** Labour dominates — direct payroll of $296,290 plus subcontracted labour of $38,060 together make up $334,350, or about 52% of all costs. Other significant items are fuel and energy ($80,370), premises rent ($61,840), vehicle lease ($49,590), repairs and consumables ($47,600), administrative overhead ($47,330), and insurance ($19,500).

All internal totals check out arithmetically.
```

### fable-5 / plain / clean / seed 4108

verdict: **allclear** · answered by `claude-fable-5`

```
Marchmont Security Group's manned guarding division earned an operating profit of $124,970 on revenue of $1,152,390 in May 2026 — a margin of about 10.8%. The figures are unaudited, and the arithmetic in the report checks out.

Revenue was fairly diversified: contract work was the largest source at $547,630 (just under half the total), supplemented by ad hoc callouts ($255,770), resold materials ($210,000), and equipment hire ($138,990).

Total operating expenses were $1,027,420. Labour was the biggest cost, with direct payroll ($325,970) and subcontracted labour ($117,980) together making up about 43% of expenses and 38% of revenue. The remaining costs were spread relatively evenly across administrative overhead ($124,080), premises rent ($122,070), subcontracted labour, repairs and consumables ($107,040), fuel and energy ($104,270), and vehicle leases ($101,250), with insurance a comparatively small $24,760.
```

### fable-5 / plain / clean / seed 4109

verdict: **allclear** · answered by `claude-fable-5`

```
**Summary:** Belmont Dairy Co-operative posted an operating profit of $50,540 on revenue of $860,780 for April 2026, a thin margin of about 5.9% (figures are unaudited; the arithmetic checks out).

**Revenue ($860,780):** Wholesale orders dominate at $437,200 (51%), followed by delivered accounts ($164,850), the retail counter ($144,650), and seasonal contracts ($114,080).

**Expenses ($810,240):** Production wages are by far the largest cost at $328,660 — about 41% of expenses and 38% of revenue. Combined occupancy costs are also substantial: site rent ($96,410) plus plant lease ($68,370) total $164,780. Other notable items include raw materials ($112,700), utilities ($71,490), office and professional fees ($61,470), maintenance ($43,950), and insurance/licences ($27,190).

**Takeaway:** The co-operative is profitable but operating close to break-even — expenses consume roughly 94 cents of every revenue dollar, so the result is sensitive to small swings in wages, rent, or wholesale volume.
```

