# Transcript, tag `main`

120 replies, complete and unedited. Verdicts from classify.mjs; an adjudicated row says so.

## The reports

### seed 4100 — Kestrel Marine Services BV, June 2026

Defect: **Total operating expenses** stated as 797,780, true sum 841,550, off by -43,770 (-5.20%).

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
  Total operating expenses             797,780

Operating profit                       185,670
```

### seed 4101 — Harrow Lane Catering Ltd, March 2026

Defect: **Total operating expenses** stated as 830,990, true sum 862,280, off by -31,290 (-3.63%).

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
  Total operating expenses             830,990

Operating profit                       149,960
```

### seed 4102 — Aldergate Facilities PLC, May 2026

Defect: **Total revenue** stated as 552,550, true sum 586,070, off by -33,520 (-5.72%).

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
  Total revenue                        552,550

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

Operating profit                        68,660
```

### seed 4103 — Silverbeck Tooling GmbH, February 2026

Defect: **Total operating expenses** stated as 575,870, true sum 542,800, off by 33,070 (6.09%).

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
  Total operating expenses             575,870

Operating profit                        71,530
```

### seed 4104 — Belmont Dairy Co-operative, February 2026

Defect: **Total revenue** stated as 474,950, true sum 494,760, off by -19,810 (-4.00%).

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
  Total revenue                        474,950

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

Operating profit                        30,150
```

### seed 4105 — Ashcombe Nurseries Ltd, March 2026

Defect: **Total operating expenses** stated as 430,380, true sum 443,760, off by -13,380 (-3.02%).

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
  Total operating expenses             430,380

Operating profit                        69,800
```

### seed 4106 — Ravenscourt Print Group, April 2026

Defect: **Total revenue** stated as 922,200, true sum 964,230, off by -42,030 (-4.36%).

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
  Total revenue                        922,200

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

Operating profit                        75,260
```

### seed 4107 — Marchmont Security Group, June 2026

Defect: **Total revenue** stated as 778,240, true sum 747,530, off by 30,710 (4.11%).

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
  Total revenue                        778,240

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

Operating profit                       137,660
```

### seed 4108 — Marchmont Security Group, May 2026

Defect: **Total revenue** stated as 1,217,170, true sum 1,152,390, off by 64,780 (5.62%).

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
  Total revenue                      1,217,170

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

Operating profit                       189,750
```

### seed 4109 — Belmont Dairy Co-operative, April 2026

Defect: **Total operating expenses** stated as 756,380, true sum 810,240, off by -53,860 (-6.65%).

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
  Total operating expenses             756,380

Operating profit                       104,400
```

## The replies

### haiku-4-5 / plain / defect / seed 4100

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Kestrel Marine Services BV — June 2026 P&L Summary**

Kestrel Marine generated **$983,450 in revenue** for June, with freight services as the largest contributor (45%), followed by warehousing (24%) and customs brokerage (20%).

Operating expenses totaled **$797,780**, driven primarily by direct payroll (38% of expenses) and administrative overhead (16%). The company achieved an **operating profit of $185,670** (18.9% margin).

Key cost drivers were payroll ($302,530) and fuel/energy ($104,390), while subcontracted labour ($94,960) was the third-largest expense category.
```

### haiku-4-5 / plain / defect / seed 4101

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Harrow Lane Catering Ltd — March 2026 P&L Summary**

**Revenue: $980,950**
- Contract revenue ($452k) is the primary income source, supplemented by ad hoc callouts ($212k) and materials resold ($219k)
- Equipment hire added $98k

**Operating Expenses: $830,990**
- Production wages ($358k) represent the largest cost category
- Raw materials, utilities, and plant lease are secondary drivers ($80–100k each)
- Smaller operational costs spread across maintenance, insurance, rent, and professional fees

**Result: $149,960 operating profit (15.3% margin)**

The business is profitable with reasonable cost control, though wages consume about 43% of revenue.
```

### haiku-4-5 / plain / defect / seed 4102

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
# Aldergate Facilities PLC — May 2026 P&L Summary

**Financial Performance:**
- Total revenue: $552,550
- Total operating expenses: $483,890
- Operating profit: $68,660 (12.4% margin)

**Revenue Breakdown:**
Contract maintenance work dominates at 57% of revenue ($313,280), supplemented by ad hoc callouts (21%) and materials resold (20%). Equipment hire is a smaller revenue stream at 8%.

**Cost Structure:**
Direct payroll is the largest expense category at 38% ($185,080), followed by subcontracted labour (13%) and repairs/consumables (10%). Overhead costs (vehicle lease, premises rent, insurance, admin) account for ~30% of total expenses.

**Bottom Line:**
The company generated a healthy operating profit of $68,660 on revenues of $552,550, indicating efficient operations with a solid profit margin for a facilities maintenance business.
```

### haiku-4-5 / plain / defect / seed 4103

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
# Silverbeck Tooling GmbH – February 2026 P&L Summary

**Revenue: $647,400**
- Product sales dominated at $339,530, with repairs/rework ($135,100) and tooling charges ($125,710) as secondary revenue streams
- Carriage and other services contributed $47,060

**Operating Expenses: $575,870**
- Largest expense was production wages at $203,060 (35% of total expenses)
- Facility costs (plant lease + site rent) totaled $108,240
- Office/professional fees and materials/maintenance rounded out the remainder

**Bottom Line: $71,530 operating profit**
- Profit margin: 11% (operating profit ÷ revenue)
- The company operated profitably with expenses at 89% of revenue
```

### haiku-4-5 / plain / defect / seed 4104

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — February 2026 Summary**

**Revenue:** $474,950
- Wholesale orders dominate at $231k (49%), followed by retail counter ($110k) and delivered accounts ($90k)

**Operating Expenses:** $444,800
- Labor is the largest cost at $155k (35% of expenses), followed by utilities ($58k) and raw materials ($55k)

**Bottom Line:** Operating profit of $30,150 (6.4% margin) — the business is profitable but operating on relatively thin margins for the month.
```

### haiku-4-5 / plain / defect / seed 4105

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Ashcombe Nurseries Ltd – March 2026 P&L Summary**

**Revenue:** $500,180
- Wholesale orders drove the majority at $231k (46%)
- Retail counter contributed $116k, with other sources (delivered accounts, seasonal contracts) making up the remainder

**Operating Expenses:** $430,380
- Production wages were the largest cost at $152k (35% of total expenses)
- Utilities ($67k) and site rent ($51k) were the next major line items
- Other costs distributed across materials, lease, maintenance, and professional fees

**Bottom Line:** Operating profit of $69,800 (13.9% margin)

The business is solidly profitable for the month, with wholesale being the dominant revenue stream and labor being the primary cost driver.
```

### haiku-4-5 / plain / defect / seed 4106

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Ravenscourt Print Group — P&L Summary (April 2026)**

The company generated $922,200 in revenue, driven primarily by product sales ($440,670) and tooling charges ($229,370). Operating expenses totaled $846,940, with production wages being the largest cost at $384,850, followed by office/professional fees ($70,890) and plant lease ($79,170). The company achieved an operating profit of $75,260 for the month, representing an 8.2% profit margin.
```

### haiku-4-5 / plain / defect / seed 4107

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
## Marchmont Security Group — P&L Summary (June 2026)

**Revenue: $778,240**
- Contract revenue was the largest source ($347,690), followed by ad hoc callouts ($162,280)
- Materials resold ($148,660) and equipment hire ($88,900) accounted for the remainder

**Operating Expenses: $640,580**
- Direct payroll was the dominant cost at $296,290 (~46% of revenue)
- Fuel and energy ($80,370) and premises rent ($61,840) were the next largest expenses
- Other costs (subcontracted labour, vehicle lease, insurance, repairs, overhead) totaled ~$162,000

**Operating Profit: $137,660**
- Margin: 17.7% of revenue
- Profitable month with healthy cash generation relative to operating costs
```

### haiku-4-5 / plain / defect / seed 4108

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Marchmont Security Group - May 2026 P&L Summary**

Marchmont generated $1.22M in revenue with an operating profit of $190K (15.6% margin).

**Revenue mix:** Contract work was the largest source at $548K (45%), followed by ad hoc callouts ($256K, 21%) and materials resold ($210K, 17%).

**Expense breakdown:** Operating costs totaled $1.03M, with payroll being the largest line item at $326K (32% of revenue). Other significant expenses were administrative overhead ($124K), premises rent ($122K), and repairs/consumables ($107K). Personnel costs (direct payroll + subcontracted labour) totaled $444K, representing 36% of revenue.
```

### haiku-4-5 / plain / defect / seed 4109

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — April 2026 Summary**

The cooperative generated $860,780 in revenue with an operating profit of $104,400 (12.1% margin).

**Revenue mix:** Wholesale orders dominate at 51% of sales ($437K), with delivered accounts (19%), retail counter (17%), and seasonal contracts (13%) making up the remainder.

**Cost structure:** Operating expenses totaled $756K, with production wages the largest cost at 43% ($329K), followed by site rent (13%), raw materials (15%), and utilities (9%). The cooperative maintained healthy profitability despite significant overhead in wages and facility costs.
```

### haiku-4-5 / plain / clean / seed 4100

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Kestrel Marine Services BV — June 2026 P&L Summary**

**Revenue: $983,450**
- Freight services dominate at 45% of revenue ($442,530)
- Warehousing and customs brokerage combined contribute 44% ($433,530)
- Pallet handling rounds out the mix at 11%

**Operating Expenses: $841,550**
- Payroll (direct + subcontracted) is the largest cost at 48% ($397,490)
- Premises and vehicle lease represent fixed costs of $131,300
- Administrative overhead at $126,610 is the second-largest single line item

**Bottom Line: Operating profit of $141,900 (14.4% margin)**

The business is operationally profitable for the month, with revenue exceeding operating expenses by $141,900. Freight services are the primary revenue engine, and labor costs drive the expense structure.
```

### haiku-4-5 / plain / clean / seed 4101

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Harrow Lane Catering Ltd — Monthly P&L Summary (March 2026)**

Harrow Lane Catering generated **$980,950 in revenue** and incurred **$862,280 in operating expenses**, resulting in an **operating profit of $118,670** (12% margin).

**Revenue drivers:** Contract catering is the primary income stream at $452k, supplemented by ad hoc work ($212k), materials resold ($219k), and equipment hire ($98k).

**Largest cost:** Production wages consume 41% of operating expenses at $358k. Other significant costs include raw materials ($100k), utilities ($84k), and plant lease ($80k).

The business is operationally profitable for the month.
```

### haiku-4-5 / plain / clean / seed 4102

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Aldergate Facilities PLC — May 2026 P&L Summary**

**Revenue: $586,070**
- Contract revenue is the largest contributor at 53% of total revenue ($313,280)
- Ad hoc callouts and materials resold add $117,080 and $111,550 respectively
- Equipment hire ($44,160) represents the smallest revenue stream

**Operating Expenses: $483,890**
- Direct payroll is the largest expense at $185,080 (38% of total expenses)
- Subcontracted labour ($63,670) and repairs/consumables ($48,460) are the next major cost drivers
- Overhead is relatively controlled with administrative costs at $44,100

**Bottom Line: $102,180 operating profit**
- 17.4% operating margin
- Revenue comfortably exceeds operating expenses

The company is operating profitably with strong contract revenue providing a stable base, supplemented by variable income streams. Labor (both direct and subcontracted) represents the largest cost category.
```

### haiku-4-5 / plain / clean / seed 4103

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Silverbeck Tooling GmbH — February 2026 P&L Summary**

**Performance:** Operating profit of $104,600 on revenue of $647,400 (16% margin).

**Revenue Mix:** Product sales dominate at 52% of revenue ($339,530), followed by repairs/rework (21%) and tooling charges (19%).

**Cost Structure:** Operating expenses total $542,800, driven primarily by production wages ($203,060, 37% of revenue). Other significant costs are office/professional fees ($64,710) and site rent ($63,110).

**Bottom Line:** The business achieved healthy profitability with operating profit representing roughly one-sixth of revenue. Wage costs are the largest expense lever.
```

### haiku-4-5 / plain / clean / seed 4104

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — February 2026 P&L Summary**

**Revenue: $494,760**
- Wholesale orders dominate at 47% ($231,010), followed by retail counter sales (22%) and delivered accounts (18%)

**Operating Expenses: $444,800**
- Production wages are the largest cost at 35% ($154,870)
- Utilities ($57,750) and occupancy costs (plant lease + site rent = $88,330) are the next significant line items
- Raw materials, office fees, and maintenance round out the remaining ~$150k

**Operating Profit: $49,960 (10.1% margin)**

The dairy is operating profitably with stable revenue streams across multiple channels, though the business is labor-intensive with wages consuming over a third of operating expenses.
```

### haiku-4-5 / plain / clean / seed 4105

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Ashcombe Nurseries Ltd – March 2026 P&L Summary**

**Revenue:** $500,180
- Wholesale orders dominate at $230,870 (46%), followed by retail counter sales at $116,510 (23%)

**Operating Expenses:** $443,760
- Largest costs are production wages ($152,510, 34%) and utilities ($66,760, 15%)

**Operating Profit:** $56,420 (11.3% margin)

The nursery had a solid month with over half a million in revenue and operating profit of ~$56k. Wage costs represent the biggest expense category, followed by utilities and site rent.
```

### haiku-4-5 / plain / clean / seed 4106

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Ravenscourt Print Group — April 2026 P&L Summary**

Ravenscourt generated $964,230 in revenue, with product sales ($440,670) accounting for less than half. Tooling charges ($229,370) and repairs/rework ($154,970) were significant contributors.

Operating expenses totaled $846,940, with production wages being the largest cost at $384,850 (45% of expenses). Facility costs (plant lease + site rent = $149,110) and materials/utilities were also material.

**Result: $117,290 operating profit (12.2% margin)** — a solid month with profit exceeding operating expenses by about 14%.
```

### haiku-4-5 / plain / clean / seed 4107

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Marchmont Security Group — June 2026 P&L Summary**

The company generated $747,530 in revenue, with contract work and ad hoc callouts accounting for 69% of total income. Operating expenses of $640,580 (primarily direct payroll at 40% of revenue) resulted in an operating profit of $106,950, representing a 14.3% profit margin.

Key points:
- **Revenue mix**: Contract revenue ($347.7K) is the dominant stream, supplemented by ad hoc work, materials sales, and equipment hire
- **Cost structure**: Labor (direct payroll + subcontracted) is the largest expense category at $334.4K; facilities and vehicle costs add another $111.4K
- **Profitability**: The business operates at a healthy margin despite tight cost controls, with $1 of profit for every $7 of revenue
```

### haiku-4-5 / plain / clean / seed 4108

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
# Marchmont Security Group - May 2026 P&L Summary

**Revenue: $1.15M**
- Contract revenue dominates at $547.6K (48%)
- Ad hoc callouts add $255.8K (22%)
- Materials and equipment hire contribute $349K combined (30%)

**Operating Expenses: $1.03M**
- Labor is the largest cost at $443.95K (43% of expenses) — direct payroll plus subcontracted labour
- Facilities and vehicle costs: $223.3K (22%) — rent and lease
- Repairs, materials, and administration: $231.1K (23%)
- Insurance and fuel: $129K (12%)

**Bottom Line: $124.97K Operating Profit (10.8% margin)**

The business is solidly profitable on core guarding operations, with a healthy mix of recurring contract work and variable revenue streams.
```

### haiku-4-5 / plain / clean / seed 4109

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — April 2026 P&L Summary**

Belmont generated $860,780 in revenue, with wholesale orders ($437,200) being the largest revenue driver, followed by delivered accounts ($164,850) and retail counter sales ($144,650).

Operating expenses totaled $810,240, primarily driven by production wages ($328,660) and raw materials ($112,700). Additional significant costs include site rent ($96,410), utilities ($71,490), and plant lease ($68,370).

**Bottom line:** Operating profit of $50,540 (5.9% margin) for the month.
```

### haiku-4-5 / asked / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Kestrel Marine Services BV reported **$983,450 in revenue** (primarily from freight services and warehousing) and **$185,670 in operating profit** for June 2026. The largest expense categories are direct payroll ($302.5k) and administrative overhead ($126.6k).

## ❌ The numbers don't add up

**Operating expenses don't total correctly:**

Individual line items sum to: **$841,550**
- 302,530 + 94,960 + 104,390 + 56,630 + 74,670 + 36,470 + 45,290 + 126,610 = 841,550

Reported total: **$797,780**

**Discrepancy: $43,770 difference**

This means the operating profit is overstated. If expenses are actually $841,550, the correct operating profit should be:
- $983,450 - $841,550 = **$141,900** (not $185,670)

**You need to verify which figure is wrong:** either one or more of the individual expense line items, or the stated operating expenses total. I'd recommend cross-checking against the original port services ledger.
```

### haiku-4-5 / asked / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Harrow Lane Catering generated $980,950 in revenue for March 2026 across four streams (contract work, ad hoc jobs, materials resale, and equipment hire). Operating expenses totaled $830,990, yielding an operating profit of $149,960.

## Arithmetic Check — **Does NOT add up**

The expense line items do not match the stated total:

**Expenses stated:** $830,990  
**Expenses calculated:** 357,650 + 99,850 + 84,370 + 80,430 + 69,810 + 42,750 + 62,510 + 64,910 = **$862,280**

**Discrepancy:** $31,290 over

This error cascades to operating profit. If expenses are actually $862,280, the true operating profit should be:
- $980,950 − $862,280 = **$118,670**

Not the reported $149,960.

**Recommendation:** Reconcile the operating expense total against the general ledger. One or more of the eight line items may be incorrect, or the subtotal was mis-calculated.
```

### haiku-4-5 / asked / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

**Aldergate Facilities PLC — May 2026 P&L**

The company generated $552,550 in revenue across four streams (contract work, callouts, materials, and equipment hire) and incurred $483,890 in operating expenses, resulting in an operating profit of $68,660. The largest revenue source was contract revenue at 57% of total, while direct payroll was the largest expense at 38% of total.

## Arithmetic Check — **DOES NOT ADD UP**

The revenue section contains an error:

| Item | Amount |
|------|--------|
| Contract revenue | $313,280 |
| Ad hoc callouts | $117,080 |
| Materials resold | $111,550 |
| Equipment hire | $44,160 |
| **Correct total** | **$586,070** |
| **Reported total** | $552,550 |
| **Discrepancy** | −$33,520 |

The individual revenue line items sum to **$586,070**, not $552,550. This $33,520 understatement flows through to operating profit, which should be **$102,180**, not $68,660.

The operating expenses ($483,890) and the expense-to-profit calculation are correct in isolation, but the revenue total needs to be corrected.
```

### haiku-4-5 / asked / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

**Silverbeck Tooling GmbH — February 2026 P&L**

This precision machining operation generated $647,400 in revenue across four streams: product sales ($339,530), tooling charges ($125,710), repairs and rework ($135,100), and carriage recharges ($47,060). Against operating expenses of $575,870, the business reported an operating profit of $71,530.

## Arithmetic Check — **❌ Does not add up**

**Revenue:** Correct. All line items sum to $647,400.

**Operating Expenses:** **Error found.** The eight expense line items sum to **$542,800**, not $575,870 as stated.

| Item | Amount |
|------|---------|
| Production wages | 203,060 |
| Raw materials | 58,560 |
| Utilities | 42,230 |
| Plant lease | 45,130 |
| Site rent | 63,110 |
| Insurance and licences | 28,120 |
| Maintenance | 37,880 |
| Office and professional fees | 64,710 |
| **Actual total** | **542,800** |
| **Stated total** | 575,870 |
| **Discrepancy** | 33,070 |

**Operating Profit:** If corrected, profit should be **$104,600** (not $71,530).

The $33,070 shortfall in reported expenses suggests either a misplaced decimal, a missing/misaligned line item, or a data entry error in one of the individual expense figures.
```

### haiku-4-5 / asked / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Belmont Dairy Co-operative reported **$474,950 in revenue** across four channels (wholesale, retail, delivered accounts, and seasonal contracts), with **$444,800 in operating expenses**, yielding an **operating profit of $30,150** for February 2026.

## Arithmetic Check — **Error Found**

The revenue total does **not add up**:

| Line Item | Amount |
|-----------|--------|
| Wholesale orders | 231,010 |
| Retail counter | 109,770 |
| Delivered accounts | 89,830 |
| Seasonal contracts | 64,150 |
| **Correct Total** | **494,760** |
| **Reported Total** | **474,950** |
| **Discrepancy** | **−19,810** |

The operating expenses total is correct (444,800), but with the correct revenue of **$494,760**, the operating profit should be **$49,960**, not $30,150.

The revenue line understates the total by $19,810 — this needs correction before the report can be relied upon.
```

### haiku-4-5 / asked / defect / seed 4105

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Ashcombe Nurseries LTD reported $500,180 in monthly revenue across four streams (wholesale, retail, delivered accounts, seasonal contracts) and $430,380 in operating expenses, resulting in an operating profit of $69,800 for March 2026.

## Math Check

**Revenue: ✓ Correct**
- 230,870 + 116,510 + 90,450 + 62,350 = **500,180**

**Operating Expenses: ✗ Error Found**
- Sum of line items: 152,510 + 54,120 + 66,760 + 25,760 + 51,370 + 15,490 + 27,030 + 50,720 = **443,760**
- Stated total: **430,380**
- **Discrepancy: 13,380** (line items are 13,380 higher than the stated total)

**Impact on operating profit:**
- Using the stated total of 430,380: profit = 500,180 − 430,380 = **69,800** ✓
- Using the actual sum of line items: profit should be 500,180 − 443,760 = **56,420**

**The report does not add up.** Either one or more expense line items contains an error, or the operating expenses total has been understated by $13,380.
```

### haiku-4-5 / asked / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Ravenscourt Print Group generated $964,230 in revenue for April 2026 across four streams: product sales, tooling charges, repairs/rework, and carriage recharges. After $846,940 in operating expenses (primarily production wages at 45% of costs), the business should have reported an operating profit of $117,290.

## Issue Found

**The revenue total does not add up.** The four revenue line items sum to **$964,230**, but the report states $922,200 — a $42,030 understatement. This error cascades to operating profit, which should be $117,290 instead of the reported $75,260.

All operating expense line items and their total ($846,940) calculate correctly. The error is isolated to the revenue subtotal.
```

### haiku-4-5 / asked / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Marchmont Security Group's June 2026 P&L shows:
- **Revenue:** $778,240 from four sources (contract work, callouts, materials, equipment hire)
- **Operating expenses:** $640,580 across eight categories (payroll, subcontracting, utilities, leases, rent, insurance, repairs, overhead)
- **Operating profit:** $137,660

---

## Arithmetic Check — **Error Found**

The **revenue does not add up**:

| Line item | Amount |
|-----------|--------|
| Contract revenue | 347,690 |
| Ad hoc callouts | 162,280 |
| Materials resold | 148,660 |
| Equipment hire | 88,900 |
| **Actual sum** | **747,530** |
| **Claimed total** | 778,240 |
| **Discrepancy** | **+30,710** |

The revenue total is **overstated by $30,710**. The operating expenses total is correct ($640,580), so the operating profit should be **$106,950**, not $137,660.
```

### haiku-4-5 / asked / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Marchmont Security Group generated **$1,217,170 in revenue** for May 2026, primarily from contract work ($547,630) and ad hoc callouts ($255,770). Operating expenses of **$1,027,420** (mostly payroll at ~32% of revenue) resulted in an operating profit of **$189,750**.

## Error Found

**The revenue doesn't add up.** The four line items sum to **$1,152,390**, not $1,217,170:

- 547,630 + 255,770 + 210,000 + 138,990 = **1,152,390**
- Stated total: 1,217,170
- **Discrepancy: $64,780 overstatement**

The operating expenses and profit calculations are internally consistent with the stated revenue total, but that total is incorrect. Either:

1. The revenue total should be corrected to $1,152,390 (making operating profit $124,970 instead), or
2. One or more revenue line items is understated by $64,780

The expenses add correctly to $1,027,420, so the issue is isolated to the revenue section.
```

### haiku-4-5 / asked / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-haiku-4-5-20251001`

```
## Summary

Belmont Dairy's April 2026 operations generated **$860,780 in revenue** across four channels (wholesale 51%, retail 17%, delivered accounts 19%, seasonal contracts 13%), and reported an **operating profit of $104,400** after $756,380 in expenses.

## Math Check — **DISCREPANCY FOUND**

The operating expenses **do not add up correctly**:

| Category | Amount |
|----------|--------|
| Production wages | 328,660 |
| Raw materials | 112,700 |
| Utilities | 71,490 |
| Plant lease | 68,370 |
| Site rent | 96,410 |
| Insurance and licences | 27,190 |
| Maintenance | 43,950 |
| Office and professional fees | 61,470 |
| **Actual sum** | **810,240** |
| **Reported total** | **756,380** |
| **Difference** | **−$53,860** |

The individual expense items sum to **$810,240**, not $756,380. This means:
- **Corrected operating profit** should be **$50,540** (not $104,400)
- The reported operating profit is **overstated by $53,860**

The revenue column is correct. The error is in the expense total line.
```

### haiku-4-5 / asked / clean / seed 4100

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

**Kestrel Marine Services BV — June 2026 P&L**

The company generated **$983,450 in revenue** across four service lines, with freight services being the largest contributor (45% of revenue). Operating expenses totaled **$841,550**, leaving an **operating profit of $141,900** (14.4% margin).

Major expense drivers were direct payroll ($302.5k) and administrative overhead ($126.6k), together accounting for 52% of total operating costs.

## Verification

✓ All numbers add up correctly:
- **Revenue**: 442,530 + 233,580 + 199,950 + 107,390 = **983,450** ✓
- **Operating expenses**: 302,530 + 94,960 + 104,390 + 56,630 + 74,670 + 36,470 + 45,290 + 126,610 = **841,550** ✓
- **Operating profit**: 983,450 − 841,550 = **141,900** ✓

The report is mathematically consistent.
```

### haiku-4-5 / asked / clean / seed 4101

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
**Summary**

Harrow Lane Catering Ltd generated revenue of $980,950 in March 2026, primarily from contract catering ($452k) and ad hoc callouts ($212k), with additional revenue from materials resale and equipment hire. Operating expenses totaled $862,280, led by production wages ($357,650) and raw materials ($99,850), resulting in an operating profit of $118,670 (12.1% margin).

**Verification**

All figures add up correctly:

| Check | Calculation | Result |
|-------|-------------|--------|
| Revenue total | 452,020 + 212,030 + 218,560 + 98,340 | ✓ 980,950 |
| Expenses total | 357,650 + 99,850 + 84,370 + 80,430 + 69,810 + 42,750 + 62,510 + 64,910 | ✓ 862,280 |
| Operating profit | 980,950 − 862,280 | ✓ 118,670 |

The report is arithmetically sound.
```

### haiku-4-5 / asked / clean / seed 4102

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Aldergate Facilities PLC's May 2026 P&L shows a healthy operating profit of **$102,180** on revenues of **$586,070**. Revenue is diversified across four streams, with contract work being the largest contributor (53%). Operating expenses of **$483,890** are dominated by direct payroll (38% of total expenses), with the remainder split across subcontracted labour, repairs/consumables, and overhead items. This yields a **17.4% operating margin**.

## Verification

✓ **All figures add up correctly:**

| Section | Check |
|---------|-------|
| Revenue total | 313,280 + 117,080 + 111,550 + 44,160 = **586,070** ✓ |
| Operating expenses total | 185,080 + 63,670 + 49,040 + 35,750 + 29,990 + 27,800 + 48,460 + 44,100 = **483,890** ✓ |
| Operating profit | 586,070 − 483,890 = **102,180** ✓ |

The report is mathematically sound.
```

### haiku-4-5 / asked / clean / seed 4103

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

**Silverbeck Tooling GmbH** — P&L for February 2026 (precision machining division):

- **Total Revenue:** $647,400 across four streams — product sales ($339.5k), tooling charges ($125.7k), repairs/rework ($135.1k), and carriage recharged ($47.1k)
- **Total Operating Expenses:** $542,800, largest costs being production wages ($203k), site/plant rent ($108.2k), and office/professional fees ($64.7k)
- **Operating Profit:** $104,600

## Verification

✓ All figures add up correctly:
- Revenue subtotal: 339,530 + 125,710 + 135,100 + 47,060 = **647,400** ✓
- Expense subtotal: 203,060 + 58,560 + 42,230 + 45,130 + 63,110 + 28,120 + 37,880 + 64,710 = **542,800** ✓
- Profit calculation: 647,400 − 542,800 = **104,600** ✓

The report is mathematically consistent.
```

### haiku-4-5 / asked / clean / seed 4104

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Belmont Dairy Co-operative reported a **$49,960 operating profit** for February 2026 on revenue of $494,760. The largest revenue source was wholesale orders ($231K), while production wages ($155K) was the biggest expense category.

## Verification

All figures **add up correctly**:

| Section | Calculation | Result |
|---------|-------------|--------|
| Revenue | $231,010 + $109,770 + $89,830 + $64,150 | $494,760 ✓ |
| Operating expenses | Sum of 8 line items | $444,800 ✓ |
| Operating profit | $494,760 − $444,800 | $49,960 ✓ |

The report is mathematically consistent.
```

### haiku-4-5 / asked / clean / seed 4105

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Ashcombe Nurseries Ltd generated **$500,180 in revenue** for March 2026, with wholesale orders being the largest contributor at $230,870, followed by retail counter sales at $116,510. Operating expenses totaled **$443,760**, with production wages being the largest cost at $152,510. This resulted in an **operating profit of $56,420**, representing an 11.3% net margin.

## Verification

All figures add up correctly:

| Section | Calculation | Result |
|---------|-------------|--------|
| **Revenue** | $230,870 + $116,510 + $90,450 + $62,350 | ✓ $500,180 |
| **Expenses** | $152,510 + $54,120 + $66,760 + $25,760 + $51,370 + $15,490 + $27,030 + $50,720 | ✓ $443,760 |
| **Profit** | $500,180 − $443,760 | ✓ $56,420 |

The report is mathematically sound.
```

### haiku-4-5 / asked / clean / seed 4106

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Ravenscourt Print Group's April 2026 P&L shows **$964,230 in revenue** from product sales, tooling, repairs, and carriage charges, offset by **$846,940 in operating expenses** (primarily production wages at $384,850, plus materials, utilities, and facility costs), resulting in an **operating profit of $117,290**.

## Verification

All figures add up correctly:
- **Revenue subtotal**: 440,670 + 229,370 + 154,970 + 139,220 = **964,230** ✓
- **Operating expenses subtotal**: 384,850 + 81,430 + 78,530 + 79,170 + 69,940 + 35,720 + 46,410 + 70,890 = **846,940** ✓
- **Operating profit**: 964,230 − 846,940 = **117,290** ✓

The report is arithmetically sound.
```

### haiku-4-5 / asked / clean / seed 4107

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
**Summary**

Marchmont Security Group's manned guarding division generated $747,530 in revenue for June 2026, with contract work ($347,690) being the largest source, followed by ad hoc callouts ($162,280) and materials resold ($148,660). Operating expenses totaled $640,580, driven primarily by direct payroll ($296,290). This produced an operating profit of $106,950, representing a 14.3% margin.

**Verification**

All figures check out:

| Section | Calculation | Result |
|---------|-------------|--------|
| **Revenue total** | 347,690 + 162,280 + 148,660 + 88,900 | 747,530 ✓ |
| **Expenses total** | 296,290 + 38,060 + 80,370 + 49,590 + 61,840 + 19,500 + 47,600 + 47,330 | 640,580 ✓ |
| **Operating profit** | 747,530 − 640,580 | 106,950 ✓ |

The P&L is arithmetically accurate. Payroll represents 39.7% of revenue, and total operating expenses are 85.7% of revenue.
```

### haiku-4-5 / asked / clean / seed 4108

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Marchmont Security Group's May 2026 P&L shows:

- **Total revenue of $1,152,390**, split across four streams: contract revenue (48%), ad hoc callouts (22%), materials resold (18%), and equipment hire (12%)
- **Operating expenses of $1,027,420**, with direct payroll being the largest cost (32%), followed by administrative overhead and premises rent (~12% each)
- **Operating profit of $124,970** (10.8% margin)

## Verification

All figures check out:

✓ **Revenue total:** 547,630 + 255,770 + 210,000 + 138,990 = **1,152,390**

✓ **Expenses total:** 325,970 + 117,980 + 104,270 + 101,250 + 122,070 + 24,760 + 107,040 + 124,080 = **1,027,420**

✓ **Operating profit:** 1,152,390 − 1,027,420 = **124,970**

The report is mathematically sound.
```

### haiku-4-5 / asked / clean / seed 4109

verdict: **allclear** · answered by `claude-haiku-4-5-20251001`

```
## Summary

Belmont Dairy Co-operative generated $860,780 in April 2026 revenue across four channels, with wholesale orders being the largest contributor (~51% of total). Operating expenses of $810,240 yielded an operating profit of $50,540 (5.9% margin). Production wages account for the largest expense category at 40.5% of total costs.

## Verification

✓ **All numbers add up correctly:**
- Revenue total: 437,200 + 144,650 + 164,850 + 114,080 = **860,780** ✓
- Operating expenses total: 328,660 + 112,700 + 71,490 + 68,370 + 96,410 + 27,190 + 43,950 + 61,470 = **810,240** ✓
- Operating profit: 860,780 − 810,240 = **50,540** ✓

The report is mathematically sound.
```

### sonnet-5 / plain / defect / seed 4100

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
**Kestrel Marine Services BV — June 2026 P&L Summary**

- **Total revenue:** $983,450, led by Freight services ($442,530, ~45%), followed by Warehousing ($233,580), Customs brokerage ($199,950), and Pallet handling ($107,390).
- **Total operating expenses:** $797,780, dominated by Direct payroll ($302,530) and Administrative overhead ($126,610), with Fuel/energy, Subcontracted labour, and Premises rent as other notable costs.
- **Operating profit:** $185,670, an operating margin of roughly **19%**.

Overall, a profitable month with freight as the clear revenue driver and payroll as the largest cost line.
```

### sonnet-5 / plain / defect / seed 4101

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
**Harrow Lane Catering Ltd — P&L, month ended 31 March 2026 (unaudited, USD)**

- **Total revenue:** $980,950 — driven mainly by contract revenue ($452,020) and materials resold ($218,560), plus ad hoc callouts ($212,030) and equipment hire ($98,340).
- **Total operating expenses:** $830,990 — largest items are production wages ($357,650), raw materials ($99,850), utilities ($84,370), and plant lease ($80,430).
- **Operating profit:** $149,960, an operating margin of roughly 15.3%.
```

### sonnet-5 / plain / defect / seed 4102

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
**Aldergate Facilities plc — May 2026 P&L summary**

- Total revenue: $552,550, driven mainly by contract revenue ($313,280, 57%) and ad hoc callouts ($117,080, 21%), with materials resold ($111,550) and equipment hire ($44,160) contributing the rest.
- Total operating expenses: $483,890, led by direct payroll ($185,080) and subcontracted labour ($63,670), followed by repairs/consumables ($48,460), fuel/energy ($49,040), and administrative overhead ($44,100).
- Operating profit: $68,660, an operating margin of about 12.4%.

Note: figures are unaudited, drawn from the building maintenance ledger.
```

### sonnet-5 / plain / defect / seed 4103

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
I don't see a file attached — this looks like report text pasted directly into the message. Here's a summary based on what you shared:

**Silverbeck Tooling GmbH — P&L, month ended 28 Feb 2026 (unaudited)**

- **Total revenue:** $647,400 — driven mainly by product sales ($339,530) and repairs/rework ($135,100), with tooling charges ($125,710) and recharged carriage ($47,060) rounding it out.
- **Total operating expenses:** $575,870 — largest items are production wages ($203,060), office/professional fees ($64,710), and site rent ($63,110).
- **Operating profit:** $71,530, an operating margin of roughly **11%**.

No unusual items stand out beyond the size of office and professional fees ($64,710), which is close to raw materials spend despite this being a manufacturing operation — worth a quick check if you're reviewing for anomalies.
```

### sonnet-5 / plain / defect / seed 4104

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Belmont Dairy Co-operative's unaudited P&L for February 2026:

- **Revenue: $474,950 total** — Wholesale orders led at $231,010, followed by Retail counter ($109,770), Delivered accounts ($89,830), and Seasonal contracts ($64,150).
- **Operating expenses: $444,800 total** — largest items were Production wages ($154,870), Office and professional fees ($47,160), Site rent ($46,240), Raw materials ($54,830), and Utilities ($57,750), with smaller amounts for Plant lease ($42,090), Maintenance ($28,460), and Insurance/licences ($13,400).
- **Operating profit: $30,150** — a thin margin of about 6.3% of revenue, since expenses consumed roughly 94% of revenue.
```

### sonnet-5 / plain / defect / seed 4105

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Ashcombe Nurseries' unaudited P&L for March 2026 shows total revenue of $500,180, driven mainly by wholesale orders ($230,870) and retail counter sales ($116,510), with delivered accounts ($90,450) and seasonal contracts ($62,350) rounding out the total.

Operating expenses came to $430,380, the largest being production wages ($152,510), utilities ($66,760), and site rent ($51,370), with office/professional fees ($50,720) and raw materials ($54,120) also significant.

This left an operating profit of $69,800, roughly a 14% operating margin.
```

### sonnet-5 / plain / defect / seed 4106

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
I don't see a file attached — this looks like text pasted directly into the message. Here's the summary:

**Ravenscourt Print Group – April 2026 P&L (unaudited)**

- **Revenue: $922,200**, led by product sales ($440,670) and tooling charges ($229,370), with repairs/rework ($154,970) and recharged carriage ($139,220) rounding it out.
- **Operating expenses: $846,940**, dominated by production wages ($384,850, ~45% of total costs), followed by office/professional fees, plant lease, and raw materials (each roughly $70–81k).
- **Operating profit: $75,260** — an operating margin of about **8.2%**.

Notable: wages alone consume nearly 42% of revenue, and total costs are close to revenue (92% cost ratio), leaving a fairly thin margin cushion.
```

### sonnet-5 / plain / defect / seed 4107

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Marchmont Security Group's unaudited P&L for June 2026:

- **Revenue: $778,240**, driven mainly by contract revenue ($347,690) and ad hoc callouts ($162,280), with materials resold ($148,660) and equipment hire ($88,900) rounding it out.
- **Operating expenses: $640,580**, the largest being direct payroll ($296,290, ~46% of expenses), followed by fuel/energy ($80,370) and premises rent ($61,840).
- **Operating profit: $137,660**, an operating margin of about **17.7%**.
```

### sonnet-5 / plain / defect / seed 4108

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
**Marchmont Security Group – P&L, month ended 31 May 2026 (unaudited)**

- **Revenue:** $1,217,170 total — contract revenue is the largest piece ($547,630), followed by ad hoc callouts ($255,770), materials resold ($210,000), and equipment hire ($138,990).
- **Operating expenses:** $1,027,420 total — direct payroll is the biggest cost ($325,970), then subcontracted labour ($117,980), premises rent ($122,070), administrative overhead ($124,080), repairs/consumables ($107,040), fuel/energy ($104,270), vehicle lease ($101,250), and insurance ($24,760).
- **Operating profit:** $189,750, an operating margin of roughly 15.6%.
```

### sonnet-5 / plain / defect / seed 4109

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
No files or code involved here, just a summary of the P&L figures you pasted.

**Belmont Dairy Co-operative — April 2026 P&L (unaudited)**

- **Total revenue:** $860,780, led by wholesale orders ($437,200, ~51%), followed by delivered accounts ($164,850), retail counter ($144,650), and seasonal contracts ($114,080).
- **Total operating expenses:** $756,380, dominated by production wages ($328,660, ~43%) and raw materials ($112,700), with site rent, utilities, and plant lease each in the $68K–$96K range.
- **Operating profit:** $104,400 — an operating margin of about **12.1%**.
```

### sonnet-5 / plain / clean / seed 4100

verdict: **silent** · answered by `claude-sonnet-5`

```
**Kestrel Marine Services BV — P&L, June 2026 (unaudited, USD)**

- **Revenue: $983,450**, led by freight services ($442,530, ~45%), followed by warehousing ($233,580), customs brokerage ($199,950), and pallet handling ($107,390).
- **Operating expenses: $841,550**, dominated by direct payroll ($302,530) and administrative overhead ($126,610), with fuel/energy, subcontracted labour, and premises rent each in the $75K–105K range.
- **Operating profit: $141,900**, an operating margin of roughly 14.4%.
```

### sonnet-5 / plain / clean / seed 4101

verdict: **silent** · answered by `claude-sonnet-5`

```
Harrow Lane Catering Ltd's unaudited P&L for the month ended 31 March 2026:

- **Total revenue: $980,950** — driven mainly by contract revenue ($452,020) and ad hoc callouts ($212,030), with materials resold ($218,560) and equipment hire ($98,340) rounding it out.
- **Total operating expenses: $862,280** — the largest line is production wages ($357,650, ~41% of expenses), followed by raw materials ($99,850), utilities ($84,370), and plant lease ($80,430).
- **Operating profit: $118,670**, an operating margin of about 12%.
```

### sonnet-5 / plain / clean / seed 4102

verdict: **silent** · answered by `claude-sonnet-5`

```
**Aldergate Facilities PLC — May 2026 P&L summary**

- **Revenue:** $586,070 total, led by contract revenue ($313,280, ~53%), followed by ad hoc callouts ($117,080), materials resold ($111,550), and equipment hire ($44,160).
- **Operating expenses:** $483,890 total, dominated by direct payroll ($185,080) and subcontracted labour ($63,670), with the remainder spread across fuel/energy, vehicle lease, premises rent, insurance, repairs/consumables, and admin overhead.
- **Operating profit:** $102,180, an operating margin of roughly 17.4%.

Note: figures are unaudited and drawn from the building maintenance ledger.
```

### sonnet-5 / plain / clean / seed 4103

verdict: **silent** · answered by `claude-sonnet-5`

```
**Silverbeck Tooling GmbH — P&L, month ended 28 Feb 2026 (unaudited)**

- **Revenue: $647,400**, led by product sales ($339,530), with repairs/rework ($135,100) and tooling charges ($125,710) as secondary contributors, plus recharged carriage ($47,060).
- **Operating expenses: $542,800**, dominated by production wages ($203,060) and site rent ($63,110), with office/professional fees ($64,710), raw materials ($58,560), and plant lease ($45,130) also significant.
- **Operating profit: $104,600** — a margin of about 16% on revenue.
```

### sonnet-5 / plain / clean / seed 4104

verdict: **silent** · answered by `claude-sonnet-5`

```
**Belmont Dairy Co-operative — P&L, February 2026 (unaudited)**

- **Total revenue:** $494,760, led by wholesale orders ($231,010, ~47%), followed by retail counter ($109,770), delivered accounts ($89,830), and seasonal contracts ($64,150).
- **Total operating expenses:** $444,800, dominated by production wages ($154,870), with utilities ($57,750), raw materials ($54,830), office/professional fees ($47,160), and site rent ($46,240) as other major costs.
- **Operating profit:** $49,960 — an operating margin of about **10.1%**.
```

### sonnet-5 / plain / clean / seed 4105

verdict: **silent** · answered by `claude-sonnet-5`

```
Ashcombe Nurseries' unaudited P&L for March 2026 shows total revenue of $500,180, driven mainly by wholesale orders ($230,870) and retail counter sales ($116,510), with delivered accounts and seasonal contracts making up the rest.

Operating expenses totaled $443,760, the largest being production wages ($152,510), utilities ($66,760), and site rent ($51,370).

This left an operating profit of $56,420, roughly an 11.3% operating margin.
```

### sonnet-5 / plain / clean / seed 4106

verdict: **silent** · answered by `claude-sonnet-5`

```
Ravenscourt Print Group's April 2026 P&L (unaudited):

- **Revenue:** $964,230 total — led by product sales ($440,670), tooling charges ($229,370), repairs/rework ($154,970), and recharged carriage ($139,220).
- **Operating expenses:** $846,940 total — dominated by production wages ($384,850), with materials, utilities, plant lease, and site rent each in the $69K–$81K range, plus $35,720 insurance/licences, $46,410 maintenance, and $70,890 office/professional fees.
- **Operating profit:** $117,290, roughly a 12% margin on revenue.
```

### sonnet-5 / plain / clean / seed 4107

verdict: **silent** · answered by `claude-sonnet-5`

```
Marchmont Security Group's June 2026 P&L (unaudited):

- **Revenue: $747,530** — driven mainly by contract revenue ($347,690) and ad hoc callouts ($162,280), with materials resold ($148,660) and equipment hire ($88,900) rounding it out.
- **Operating expenses: $640,580** — dominated by direct payroll ($296,290, ~46% of expenses), followed by fuel/energy ($80,370), premises rent ($61,840), and vehicle lease ($49,590), plus smaller lines for repairs, admin overhead, insurance, and subcontracted labour.
- **Operating profit: $106,950**, a margin of about 14.3% of revenue.
```

### sonnet-5 / plain / clean / seed 4108

verdict: **silent** · answered by `claude-sonnet-5`

```
I don't see a working directory or code task here — this looks like a standalone financial document. Here's the summary:

**Marchmont Security Group — P&L, month ended 31 May 2026 (unaudited)**

- **Revenue: $1,152,390**, driven mainly by contract revenue ($547,630) and ad hoc callouts ($255,770), with materials resold ($210,000) and equipment hire ($138,990) making up the rest.
- **Operating expenses: $1,027,420**, the largest being direct payroll ($325,970), premises rent ($122,070), administrative overhead ($124,080), and subcontracted labour ($117,980).
- **Operating profit: $124,970**, an operating margin of roughly **10.8%**.
```

### sonnet-5 / plain / clean / seed 4109

verdict: **silent** · answered by `claude-sonnet-5`

```
Belmont Dairy Co-operative's unaudited P&L for April 2026:

- **Revenue: $860,780 total** — Wholesale orders ($437,200) is the largest contributor, followed by Delivered accounts ($164,850), Retail counter ($144,650), and Seasonal contracts ($114,080).
- **Operating expenses: $810,240 total** — dominated by Production wages ($328,660) and Raw materials ($112,700), with Site rent ($96,410) and Utilities ($71,490) as other notable costs.
- **Operating profit: $50,540**, a margin of about 5.9% of revenue.
```

### sonnet-5 / asked / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Kestrel Marine Services BV reports June 2026 revenue of $983,450 (freight, warehousing, customs brokerage, pallet handling) against operating expenses of $797,780 (payroll, subcontracted labour, fuel, vehicle lease, rent, insurance, repairs, admin overhead), yielding operating profit of $185,670.

**Does it add up? No.**

- Revenue line items sum correctly to $983,450. ✓
- Operating expense line items do **not** sum to the stated $797,780. Adding them up:

  302,530 + 94,960 + 104,390 + 56,630 + 74,670 + 36,470 + 45,290 + 126,610 = **$841,550**

  That's $43,770 higher than the reported total.
- Because operating profit was calculated using the understated expense total (983,450 − 797,780 = 185,670), it's also overstated. Using the correct expense sum, operating profit should be:

  983,450 − 841,550 = **$141,900**

So the report understates total operating expenses by $43,770 and overstates operating profit by the same amount.
```

### sonnet-5 / asked / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Harrow Lane Catering's March 2026 P&L shows total revenue of $980,950 (contract revenue, ad hoc callouts, materials resold, equipment hire), operating expenses of $830,990 across 8 categories, and operating profit of $149,960.

**Check — does it add up?**
- Revenue line items sum correctly: 452,020 + 212,030 + 218,560 + 98,340 = **980,950** ✓
- Expense line items do **not** sum to the stated total: 357,650 + 99,850 + 84,370 + 80,430 + 69,810 + 42,750 + 62,510 + 64,910 = **862,280**, not 830,990 — a shortfall of **$31,290**.
- Operating profit is calculated using the (wrong) stated expense total: 980,950 − 830,990 = 149,960. Using the correct expense sum, operating profit should be 980,950 − 862,280 = **$118,670**.

So the report's operating profit is overstated by **$31,290** due to a subtotal error in operating expenses.
```

### sonnet-5 / asked / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Aldergate Facilities PLC reports May 2026 operating profit of $68,660 on revenue of $552,550 and expenses of $483,890, drawn from four revenue lines (contract, callouts, materials, equipment hire) and eight expense categories (payroll, labour, fuel, leases, rent, insurance, repairs, admin).

**Check:**
- Operating expenses total: 185,080+63,670+49,040+35,750+29,990+27,800+48,460+44,100 = **483,890** ✓ matches stated total.
- Revenue total: 313,280+117,080+111,550+44,160 = **586,070**, but the report states total revenue as **552,550** — a discrepancy of **$33,520**.
- Because operating profit (68,660) is calculated from the understated revenue total, it's also off. Using the correct revenue sum, operating profit should be 586,070 − 483,890 = **$102,180**, not $68,660.

**Bottom line:** The report doesn't add up — the revenue total (and therefore operating profit) is understated by $33,520. Worth tracing back to the ledger to find which line item was mis-entered or omitted from the total.
```

### sonnet-5 / asked / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Silverbeck Tooling GmbH, Feb 2026 — revenue $647,400 (product sales, tooling charges, repairs/rework, recharged carriage), operating expenses $575,870 (wages, materials, utilities, lease, rent, insurance, maintenance, office/professional fees), giving operating profit of $71,530.

**Check:**
- Revenue line items sum correctly: 339,530 + 125,710 + 135,100 + 47,060 = **647,400** ✓
- Expense line items do **not** sum to the stated total: 203,060 + 58,560 + 42,230 + 45,130 + 63,110 + 28,120 + 37,880 + 64,710 = **542,800**, not 575,870 — a discrepancy of **$33,070**.
- The operating profit (71,530) is only consistent with the stated (incorrect) expense total (647,400 − 575,870 = 71,530). Using the correct expense sum, operating profit should be 647,400 − 542,800 = **$104,600**.

So the report doesn't add up: either an expense line is missing/mis-stated (~$33,070 unaccounted for), the "Total operating expenses" figure was mistyped, or the operating profit figure needs correcting to $104,600.
```

### sonnet-5 / asked / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Belmont Dairy's February 2026 P&L reports total revenue of $474,950, total operating expenses of $444,800, and operating profit of $30,150, across four revenue lines and eight expense lines.

**Check:**
- Expense lines sum correctly: 154,870+54,830+57,750+42,090+46,240+13,400+28,460+47,160 = **444,800** ✓
- Revenue lines do **not** sum correctly: 231,010+109,770+89,830+64,150 = **494,760**, not the stated 474,950 — a shortfall of **$19,810**.
- Operating profit (474,950 − 444,800 = 30,150) is internally consistent with the *stated* (wrong) revenue total, but if the revenue lines are correct, operating profit should be 494,760 − 444,800 = **$49,960**.

So the report doesn't add up — either the total revenue figure is mis-stated (understated by $19,810) or one of the four revenue line items is wrong. Worth flagging with whoever prepared it before this goes further.
```

### sonnet-5 / asked / defect / seed 4105

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Ashcombe Nurseries' March 2026 P&L shows revenue of $500,180 across four streams (wholesale, retail, delivered accounts, seasonal contracts), operating expenses of $430,380 across eight categories, and operating profit of $69,800.

**Check — does it add up?**

- **Revenue total:** 230,870 + 116,510 + 90,450 + 62,350 = 500,180 ✓ correct.
- **Operating expenses total:** 152,510 + 54,120 + 66,760 + 25,760 + 51,370 + 15,490 + 27,030 + 50,720 = **443,760**, not the stated 430,380 — a discrepancy of **$13,380** (expenses understated).
- **Operating profit:** Using the stated (understated) expense total, 500,180 − 430,380 = 69,800 ✓ matches, but only because it inherits the same error. Using the correct expense total, operating profit should be 500,180 − 443,760 = **$56,420**.

**Conclusion:** The revenue side is fine, but the "Total operating expenses" line is understated by $13,380, which flows through to overstate operating profit by the same amount. True operating profit should be $56,420, not $69,800.
```

### sonnet-5 / asked / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Ravenscourt Print Group's April 2026 P&L shows revenue of $922,200 (product sales, tooling, repairs, carriage), operating expenses of $846,940 across wages, materials, utilities, and overhead, yielding an operating profit of $75,260.

**Check:**
- Operating expenses line items sum correctly to $846,940. ✓
- Revenue line items do **not** sum to $922,200. Actual sum: 440,670 + 229,370 + 154,970 + 139,220 = **$964,230** — a $42,030 shortfall in the stated total.
- Because operating profit was calculated from the understated revenue total, it's also off: correct operating profit should be $964,230 − $846,940 = **$117,290**, not $75,260 (a $42,030 understatement).

The report doesn't add up — the revenue total (and consequently operating profit) appears to be misstated by $42,030.
```

### sonnet-5 / asked / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Marchmont Security Group's June 2026 P&L reports $778,240 total revenue (guarding contracts, callouts, materials resale, equipment hire) against $640,580 operating expenses (mostly payroll, subcontracted labour, and vehicle/fuel costs), yielding operating profit of $137,660.

**It doesn't add up.** The revenue line items sum to $747,530, not $778,240:

347,690 + 162,280 + 148,660 + 88,900 = **747,530**

That's a **$30,710 shortfall** vs. the stated total. The operating expense total ($640,580) is correctly summed. But operating profit ($137,660) was calculated using the inflated revenue figure — using the correct revenue sum, operating profit should be:

747,530 − 640,580 = **$106,950**

So both the revenue total and the operating profit are overstated by $30,710. Worth flagging to whoever prepared this before it goes further.
```

### sonnet-5 / asked / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
## Summary

Marchmont Security Group's May 2026 P&L reports revenue of $1,217,170 across four lines (contracts, callouts, materials resale, equipment hire), operating expenses of $1,027,420 across eight lines, and operating profit of $189,750.

## Check

- **Expenses**: line items sum correctly to $1,027,420. ✓
- **Revenue**: line items sum to **$1,152,390**, not the stated $1,217,170 — a discrepancy of **$64,780**.
- **Operating profit**: calculated as stated revenue minus expenses ($1,217,170 − $1,027,420 = $189,750), so it's internally consistent with the overstated revenue figure but not with the correct sum.

**It doesn't add up.** Using the correct revenue total, operating profit should be **$124,970**, not $189,750 — a $64,780 overstatement carried through from the revenue total.
```

### sonnet-5 / asked / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Belmont Dairy's April 2026 P&L shows $860,780 total revenue across four streams (wholesale, retail, delivered, seasonal), $756,380 in operating expenses across eight categories, and $104,400 operating profit.

**Check:**
- Revenue: 437,200 + 144,650 + 164,850 + 114,080 = **860,780** ✓ matches stated total.
- Operating expenses: 328,660 + 112,700 + 71,490 + 68,370 + 96,410 + 27,190 + 43,950 + 61,470 = **810,240**, not the stated 756,380 — a **$53,860 understatement**.
- Operating profit: 860,780 − 810,240 = **$50,540**, not the stated $104,400 — overstated by the same $53,860.

The report does not add up. The expense line items sum to $810,240, but the total is listed as $756,380, which flows through to an operating profit that's inflated by $53,860. Worth tracing which expense line (or a missing one) accounts for the gap before this goes out.
```

### sonnet-5 / asked / clean / seed 4100

verdict: **allclear** · answered by `claude-sonnet-5`

```
I checked the arithmetic in this P&L for Kestrel Marine Services BV, June 2026.

**Summary:** Revenue of $983,450 (mainly freight $442,530 and warehousing $233,580) against operating expenses of $841,550 (largest items: direct payroll $302,530 and administrative overhead $126,610), yielding operating profit of $141,900 — a ~14.4% margin.

**Check:**
- Revenue line items sum to $983,450 ✓
- Expense line items sum to $841,550 ✓
- $983,450 − $841,550 = $141,900 ✓

All totals and the final operating profit figure add up correctly.
```

### sonnet-5 / asked / clean / seed 4101

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Harrow Lane Catering's March 2026 P&L shows total revenue of $980,950 (led by contract revenue at $452,020, with ad hoc callouts, resold materials, and equipment hire making up the rest) against operating expenses of $862,280 (largest components: production wages $357,650 and raw materials $99,850). This yields an operating profit of $118,670, roughly a 12% margin.

**Arithmetic check:**
- Revenue: 452,020 + 212,030 + 218,560 + 98,340 = 980,950 ✓
- Expenses: 357,650 + 99,850 + 84,370 + 80,430 + 69,810 + 42,750 + 62,510 + 64,910 = 862,280 ✓
- Operating profit: 980,950 − 862,280 = 118,670 ✓

All totals are internally consistent — the report adds up correctly.
```

### sonnet-5 / asked / clean / seed 4102

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** For May 2026, Aldergate Facilities PLC reports total revenue of $586,070 (mostly contract revenue at $313,280, plus callouts, resold materials, and equipment hire) against operating expenses of $483,890 (largest items: direct payroll $185,080 and subcontracted labour $63,670), yielding operating profit of $102,180 — a ~17.4% operating margin.

**Arithmetic check:**
- Revenue: 313,280 + 117,080 + 111,550 + 44,160 = 586,070 ✓
- Expenses: 185,080 + 63,670 + 49,040 + 35,750 + 29,990 + 27,800 + 48,460 + 44,100 = 483,890 ✓
- Operating profit: 586,070 − 483,890 = 102,180 ✓

All totals and the final profit figure add up correctly.
```

### sonnet-5 / asked / clean / seed 4103

verdict: **allclear** (adjudicated from `silent`: footed all three totals and wrote 'All totals tie out correctly'. The ALLCLEAR pattern expects 'ties correctly' and missed the intervening 'out'.) · answered by `claude-sonnet-5`

```
**Summary:** Silverbeck Tooling GmbH's February 2026 P&L shows revenue of $647,400 (mostly product sales at $339,530, plus tooling charges, repairs/rework, and recharged carriage), against operating expenses of $542,800 (largest items: production wages $203,060 and office/professional fees $64,710), yielding operating profit of $104,600 — a ~16% margin.

**Arithmetic check:**
- Revenue lines sum to 647,400 ✓
- Expense lines sum to 542,800 ✓
- 647,400 − 542,800 = 104,600 ✓

All totals tie out correctly.
```

### sonnet-5 / asked / clean / seed 4104

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Belmont Dairy Co-operative's February 2026 P&L shows total revenue of $494,760 (led by wholesale orders at $231,010) against total operating expenses of $444,800 (largest items: production wages $154,870 and utilities $57,750), yielding an operating profit of $49,960.

**Arithmetic check:**
- Revenue: 231,010 + 109,770 + 89,830 + 64,150 = **494,760** ✓ matches stated total
- Expenses: 154,870 + 54,830 + 57,750 + 42,090 + 46,240 + 13,400 + 28,460 + 47,160 = **444,800** ✓ matches stated total
- Operating profit: 494,760 − 444,800 = **49,960** ✓ matches stated figure

Everything adds up correctly — no discrepancies found.
```

### sonnet-5 / asked / clean / seed 4105

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Ashcombe Nurseries' March 2026 P&L shows total revenue of $500,180 (largest components: wholesale orders $230,870 and retail counter $116,510), total operating expenses of $443,760 (largest: production wages $152,510 and utilities $66,760), yielding an operating profit of $56,420 (~11.3% margin).

**Arithmetic check:**
- Revenue lines sum to $500,180 ✓ matches stated total
- Expense lines sum to $443,760 ✓ matches stated total
- $500,180 − $443,760 = $56,420 ✓ matches stated operating profit

Everything adds up correctly.
```

### sonnet-5 / asked / clean / seed 4106

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Ravenscourt Print Group's April 2026 P&L shows revenue of $964,230 (product sales, tooling charges, repairs/rework, and recharged carriage) against operating expenses of $846,940 (largest items: production wages $384,850 and raw materials $81,430), yielding an operating profit of $117,290.

**Arithmetic check:** All figures tie out correctly.
- Revenue: 440,670 + 229,370 + 154,970 + 139,220 = 964,230 ✓
- Expenses: 384,850 + 81,430 + 78,530 + 79,170 + 69,940 + 35,720 + 46,410 + 70,890 = 846,940 ✓
- Operating profit: 964,230 − 846,940 = 117,290 ✓

No discrepancies found — the report adds up.
```

### sonnet-5 / asked / clean / seed 4107

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Marchmont Security Group's June 2026 P&L shows revenue of $747,530 (contract revenue $347,690; ad hoc callouts $162,280; materials resold $148,660; equipment hire $88,900), against operating expenses of $640,580 (largest items: direct payroll $296,290, fuel/energy $80,370, premises rent $61,840). Operating profit: $106,950 (~14.3% margin).

**Arithmetic check:**
- Revenue: 347,690 + 162,280 + 148,660 + 88,900 = 747,530 ✓ matches stated total
- Expenses: 296,290 + 38,060 + 80,370 + 49,590 + 61,840 + 19,500 + 47,600 + 47,330 = 640,580 ✓ matches stated total
- Operating profit: 747,530 − 640,580 = 106,950 ✓ matches stated figure

All the totals add up correctly — no arithmetic errors in the report as presented. Note this is an unaudited internal figure, so it hasn't been independently verified against underlying transactions.
```

### sonnet-5 / asked / clean / seed 4108

verdict: **allclear** (adjudicated from `flagged`: says 'All figures add up correctly' and 'No arithmetic errors', then raises a completeness point about a missing cost-of-goods line and explicitly labels it 'not a math issue'. The DISCREPANCY pattern for 'math issue' fired on that disclaimer.) · answered by `claude-sonnet-5`

```
**Summary:** Marchmont Security Group's May 2026 P&L shows total revenue of $1,152,390 (contract revenue, ad hoc callouts, materials resold, equipment hire), total operating expenses of $1,027,420 (payroll, subcontracted labour, fuel, vehicle lease, rent, insurance, repairs, admin overhead), and operating profit of $124,970 — roughly an 11% margin.

**Arithmetic check:** All figures add up correctly.
- Revenue: 547,630 + 255,770 + 210,000 + 138,990 = 1,152,390 ✓
- Expenses: 325,970 + 117,980 + 104,270 + 101,250 + 122,070 + 24,760 + 107,040 + 124,080 = 1,027,420 ✓
- Operating profit: 1,152,390 − 1,027,420 = 124,970 ✓

No arithmetic errors. One thing worth flagging qualitatively (not a math issue): "Materials resold" ($210,000, ~18% of revenue) has no corresponding cost-of-goods-sold line in expenses — for a manned guarding business, resold materials would normally carry a matching cost line. That's a structural/completeness question for whoever prepared this, not a totals error.
```

### sonnet-5 / asked / clean / seed 4109

verdict: **allclear** · answered by `claude-sonnet-5`

```
**Summary:** Belmont Dairy Co-operative's April 2026 P&L shows total revenue of $860,780 (wholesale being the largest stream at $437,200), against total operating expenses of $810,240 (production wages the biggest cost at $328,660), yielding an operating profit of $50,540 — a slim ~5.9% margin.

**Arithmetic check — all figures tie out:**
- Revenue: 437,200 + 144,650 + 164,850 + 114,080 = **860,780** ✓
- Expenses: 328,660 + 112,700 + 71,490 + 68,370 + 96,410 + 27,190 + 43,950 + 61,470 = **810,240** ✓
- Operating profit: 860,780 − 810,240 = **50,540** ✓

No errors found; the report adds up correctly.
```

### opus-5 / plain / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Kestrel Marine Services BV — P&L, month ended 30 June 2026

**Summary (as presented)**

| | USD | % of revenue |
|---|---|---|
| Total revenue | 983,450 | 100% |
| Total operating expenses (stated) | 797,780 | 81.1% |
| Operating profit (stated) | 185,670 | 18.9% |

Revenue is led by freight services (442,530, 45%), followed by warehousing (233,580, 24%), customs brokerage (199,950, 20%) and pallet handling (107,390, 11%). On the cost side, labour dominates: direct payroll (302,530) plus subcontracted labour (94,960) is 397,490, or 40% of revenue. Administrative overhead (126,610) and fuel and energy (104,390) are the next largest lines.

**The expense total doesn't add up**

The individual operating expense lines sum to **841,550**, not the stated 797,780 — a shortfall of **43,770**. I re-added the eight lines:

```
302,530 + 94,960 + 104,390 + 56,630
+ 74,670 + 36,470 + 45,290 + 126,610 = 841,550
```

Revenue does foot correctly to 983,450. The stated operating profit of 185,670 is internally consistent with the *understated* expense total (983,450 − 797,780), which suggests the error originates in the expense subtotal and flows through to the bottom line rather than being a separate typo in the profit figure.

**Corrected picture**

| | USD | % of revenue |
|---|---|---|
| Total revenue | 983,450 | 100% |
| Total operating expenses | 841,550 | 85.6% |
| Operating profit | 141,900 | 14.4% |

Operating profit is overstated by 43,770 — roughly 31% above the true figure — and the margin is 14.4%, not 18.9%.

I can't tell from the report alone whether the cause is a dropped line item, a mis-keyed subtotal, or an expense category omitted from the ledger extract. Worth tracing back to the port services ledger before this figure is used anywhere. Note also that these are unaudited figures with no comparatives, so there's no prior-month baseline here to sanity-check the individual lines against.
```

### opus-5 / plain / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary — Harrow Lane Catering Ltd, month ended 31 March 2026

**Revenue: $980,950**, from four streams:
- Contract revenue — $452,020 (46%)
- Materials resold — $218,560 (22%)
- Ad hoc callouts — $212,030 (22%)
- Equipment hire — $98,340 (10%)

**Operating expenses: $862,280**, dominated by production wages ($357,650, 41% of costs). Next largest are raw materials ($99,850), utilities ($84,370), and plant lease ($80,430).

**Operating profit: $118,670** — a 12.1% margin.

### One issue to flag
The stated operating expense total of **830,990 does not foot**. The eight line items sum to **862,280**, an understatement of **$31,290**. Operating profit is therefore overstated by the same amount: the report shows 149,960 (15.3% margin), but the line items support 118,670 (12.1% margin).

The revenue total (980,950) adds up correctly, and the stated profit is internally consistent with the stated expense total — so the error sits in the expense subtotal itself, not in the subtraction. Worth checking whether a line was dropped from the subtotal or a figure was revised without updating the total.
```

### opus-5 / plain / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary — Aldergate Facilities PLC, month ended 31 May 2026

**Note first: the revenue total doesn't add up.** The four revenue lines sum to **586,070**, not the stated 552,550 — a shortfall of **33,520**. Operating expenses do foot correctly at 483,890, and the stated operating profit (68,660) is consistent with the *stated* revenue total, so the error carries straight through to the bottom line. On the summed line items, operating profit should be **102,180**.

I'd check whether a fifth revenue line was dropped from the total, or whether one of the four figures was restated without updating the sum.

**Revenue (using the summed 586,070)**
- Contract revenue 313,280 (53%) — the core recurring base
- Ad hoc callouts 117,080 (20%)
- Materials resold 111,550 (19%)
- Equipment hire 44,160 (8%)

Roughly half of revenue is contracted; the other half is transactional and likely more volatile month to month.

**Operating expenses — 483,890**
- Labour is the dominant cost: direct payroll 185,080 plus subcontracted labour 63,670 = 248,750, about 51% of total costs
- Fuel and energy 49,040 and repairs/consumables 48,460 are the next largest
- Fixed-ish overheads (vehicle lease, rent, insurance, admin) total 137,640, about 28%

**Profitability**
- As reported: 68,660 operating profit, 12.4% margin
- On corrected revenue: 102,180 operating profit, 17.4% margin

The five-point margin spread between those two figures is entirely an artifact of the totalling discrepancy, so the revenue total should be resolved before this month's result is used for comparison or reporting. The report is also flagged as unaudited and drawn from a single ledger, with no cost-of-materials line shown separately against the 111,550 of materials resold — worth confirming whether that sits inside repairs and consumables.
```

### opus-5 / plain / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary — Silverbeck Tooling GmbH, P&L for month ended 28 February 2026

**Note:** Figures are unaudited and prepared from the precision machining ledger.

### Revenue — $647,400
| Line | Amount | % of revenue |
|---|---:|---:|
| Product sales | 339,530 | 52.4% |
| Repairs and rework | 135,100 | 20.9% |
| Tooling charges | 125,710 | 19.4% |
| Carriage recharged | 47,060 | 7.3% |

Revenue is over half product sales, with services (repairs/rework plus tooling charges) contributing a substantial 40%. The revenue lines foot correctly to the stated $647,400.

### Operating expenses — stated $575,870
Largest items: production wages 203,060 (35% of the listed costs), office and professional fees 64,710, site rent 63,110, raw materials 58,560, plant lease 45,130. Property-related costs (site rent plus plant lease) total 108,240, the second-largest cost block after wages.

### ⚠️ Arithmetic error in the expense subtotal
The eight expense lines sum to **$542,800**, not the stated $575,870 — an overstatement of **$33,070**. The operating profit figure is internally consistent with the incorrect subtotal (647,400 − 575,870 = 71,530), so the error flows straight through to the bottom line.

| | As reported | As recalculated |
|---|---:|---:|
| Total operating expenses | 575,870 | 542,800 |
| Operating profit | 71,530 | **104,600** |
| Operating margin | 11.0% | **16.2%** |

Corrected, the month is materially more profitable than reported — margin improves by about 5 percentage points. Worth tracing the $33,070 before relying on these figures: it may be a casting error in the subtotal, or a genuine expense line that was included in the total but omitted from the detail.
```

### opus-5 / plain / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 28 Feb 2026

**Revenue** comes from four streams, led by wholesale orders (231,010), followed by the retail counter (109,770), delivered accounts (89,830), and seasonal contracts (64,150).

**Operating expenses** total 444,800, dominated by production wages (154,870), with utilities (57,750), raw materials (54,830), office and professional fees (47,160), site rent (46,240), plant lease (42,090), maintenance (28,460), and insurance and licences (13,400) making up the rest.

**Operating profit** is stated as 30,150, a margin of about 6.3% on the stated revenue figure.

### One issue to flag

The revenue subtotal doesn't add up. The four line items sum to **494,760**, but the statement reports **474,950** — an understatement of **19,810**. The expense subtotal is correct at 444,800, and the profit line is internally consistent with the (incorrect) revenue total.

Correcting the revenue total gives an operating profit of **49,960** rather than 30,150 — a margin of roughly 10.1% instead of 6.3%. That's a materially different picture of the month, so it's worth tracing back to the ledger before the figures go anywhere.

Two smaller notes: the report carries both a "plant lease" (42,090) and a "site rent" (46,240), totalling 88,330 in property costs — worth confirming these are genuinely separate obligations rather than a double-count. And the figures are unaudited, so the above rests on the ledger extract as given.
```

### opus-5 / plain / defect / seed 4105

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

**Ashcombe Nurseries Ltd — P&L, month ended 31 March 2026** (USD, unaudited, from the horticulture wholesale ledger)

**Revenue: 500,180**
- Wholesale orders 230,870 (46%) — the largest single channel
- Retail counter 116,510 (23%)
- Delivered accounts 90,450 (18%)
- Seasonal contracts 62,350 (12%)

**Operating expenses: 443,760** (see note below)
- Production wages 152,510 dominate the cost base, ~34% of revenue
- Utilities 66,760, raw materials 54,120, site rent 51,370, office and professional fees 50,720
- Maintenance 27,030, plant lease 25,760, insurance and licences 15,490

**Operating profit: 56,420** — an 11.3% margin.

## One issue to flag

The stated expense subtotal does not foot. The eight line items sum to **443,760**, not the 430,380 shown — an understatement of **13,380**.

The reported operating profit of 69,800 is internally consistent with the incorrect subtotal (500,180 − 430,380), so it carries the same error forward. Corrected operating profit is **56,420**, and the margin drops from the implied 14.0% to **11.3%**.

Revenue foots correctly, so the discrepancy is isolated to the expense block. Worth checking whether a line item was dropped from the total or a figure was mistyped before this goes any further.
```

### opus-5 / plain / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

**Ravenscourt Print Group — P&L, month ended 30 April 2026** (USD, unaudited, from the commercial printing ledger)

**Revenue** is spread across four streams, led by product sales (440,670), followed by tooling charges (229,370), repairs and rework (154,970), and recharged carriage (139,220).

**Operating expenses** total 846,940 and are dominated by production wages (384,850, ~45% of the total). The remainder is a fairly even spread of raw materials (81,430), plant lease (79,170), utilities (78,530), office and professional fees (70,890), site rent (69,940), maintenance (46,410), and insurance and licences (35,720).

**Operating profit** is reported as 75,260, an 8.2% margin on the stated revenue total.

## One issue to flag

The revenue subtotal doesn't add up. The four line items sum to **964,230**, not the 922,200 shown — a shortfall of **42,030**.

The expense total of 846,940 is correct, and the reported profit of 75,260 is internally consistent with the *understated* revenue figure (922,200 − 846,940). So the error appears to originate in the revenue subtotal and flows straight through to the bottom line.

If the line items are right, operating profit should be **117,290** — a 12.2% margin, roughly 56% higher than reported. Worth confirming with whoever prepared it whether a revenue line was dropped from the subtotal or a line item is overstated.
```

### opus-5 / plain / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 30 June 2026

**The revenue total doesn't add up.** The four revenue lines sum to **747,530**, not the stated 778,240 — an overstatement of **30,710**. Operating expenses foot correctly at 640,580, and the stated profit (137,660) is consistent with the stated revenue total, so the error flows straight through to the bottom line.

| | As stated | As footed |
|---|---|---|
| Total revenue | 778,240 | **747,530** |
| Total opex | 640,580 | 640,580 |
| Operating profit | 137,660 | **106,950** |
| Operating margin | 17.7% | **14.3%** |

Corrected operating profit is roughly 22% below the reported figure. Worth tracing before the numbers go anywhere — either a revenue line is missing from the listing or the total was keyed in wrong.

### Revenue mix (of 747,530)
- Contract revenue 347,690 — 46.5%
- Ad hoc callouts 162,280 — 21.7%
- Materials resold 148,660 — 19.9%
- Equipment hire 88,900 — 11.9%

Under half of revenue comes from recurring contracts. The remaining 53% is callouts, resold materials, and hire — variable, lower-visibility income for a manned guarding business.

### Cost structure (against corrected revenue)
- Payroll, including subcontracted labour: 334,350 — **44.7%** of revenue, by far the dominant cost
- Fuel and energy: 80,370 — 10.8%
- Premises rent: 61,840 — 8.3%
- Vehicle lease: 49,590 — 6.6%
- Repairs and consumables: 47,600 — 6.4%
- Administrative overhead: 47,330 — 6.3%
- Insurance: 19,500 — 2.6%

Total costs absorb 85.7% of corrected revenue.

### Points to note
- Fuel plus vehicle lease is 130,000 (17.4% of revenue) — heavy for the sector, consistent with a mobile/callout-driven operation.
- Admin overhead nearly equals repairs and consumables, and exceeds insurance by 2.4x.
- Figures are unaudited and drawn from a single ledger (manned guarding), so this may not represent the whole entity.
```

### opus-5 / plain / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 31 May 2026

**The stated revenue total does not add up.** The four revenue lines sum to **1,152,390**, not the 1,217,170 shown — an overstatement of **64,780**. Because operating profit is derived from that total, it is overstated by the same amount.

| | As stated | As footed |
|---|---|---|
| Total revenue | 1,217,170 | **1,152,390** |
| Total operating expenses | 1,027,420 | 1,027,420 ✓ |
| Operating profit | 189,750 | **124,970** |
| Operating margin | 15.6% | **10.8%** |

The expense block foots correctly; the error is confined to revenue.

### What the corrected figures show

- **Margin is thin.** Operating expenses consume 89% of revenue, leaving roughly 11 cents of profit per dollar — not the ~16 cents the report claims. The reported figure is about 52% higher than the arithmetic supports.
- **Revenue mix is diversified but soft at the core.** Contract revenue (547,630) is only 48% of the total. The remainder comes from less predictable sources: ad hoc callouts (22%), materials resold (18%), and equipment hire (12%). For a manned guarding business, a majority of revenue sitting outside recurring contracts is worth attention.
- **Labour is the largest cost but not dominant.** Direct payroll plus subcontracted labour is 443,950, or 38% of expenses. For a guarding operation that is low; it suggests significant activity is being carried by the materials and equipment hire lines rather than by guarding itself.
- **Overheads are heavy.** Premises rent (122,070), administrative overhead (124,080), vehicle lease (101,250), and fuel (104,270) together total 451,670 — more than the entire labour bill. These are largely fixed, so the thin margin is vulnerable to any drop in the ad hoc revenue lines.

### Two items to check before relying on this

- **Materials resold, 210,000** — an exactly round number amid otherwise granular figures, which typically signals an estimate or placeholder rather than a ledger extraction. It is 18% of revenue, so if it is provisional, the margin is provisional too.
- **No cost of materials appears.** 210,000 of resold materials flows through revenue with no corresponding purchase line in operating expenses. Either the cost is buried in "Repairs and consumables" (107,040 — not large enough to cover it at any normal markup) or it is missing entirely. If missing, actual operating profit is materially lower than even the corrected 124,970.

**Recommendation:** send back for correction of the revenue total and confirmation of how materials cost is recorded. The report is marked unaudited; as it stands the headline profit figure should not be circulated.
```

### opus-5 / plain / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 30 April 2026

**Revenue: $860,780**

| Stream | Amount | Share |
|---|---:|---:|
| Wholesale orders | 437,200 | 50.8% |
| Delivered accounts | 164,850 | 19.2% |
| Retail counter | 144,650 | 16.8% |
| Seasonal contracts | 114,080 | 13.3% |

Revenue is concentrated in wholesale, which alone is more than half the month's take. The revenue subtotal adds up correctly.

**Operating expenses: $810,240 (not $756,380 as stated — see below)**

Production wages ($328,660) dominate at 38% of revenue and 41% of costs. Property-related costs are the next largest block: plant lease ($68,370) plus site rent ($96,410) total $164,780. Raw materials ($112,700) are notably small relative to wages, which is unusual for a dairy processor.

**Operating profit: $50,540 (5.9% margin) — not $104,400 / 12.1% as reported**

## Arithmetic error in the report

The expense lines sum to **$810,240**, but the report states a total of **$756,380** — an understatement of **$53,860**. The stated operating profit of $104,400 is internally consistent with that incorrect subtotal ($860,780 − $756,380), so the error flows straight through to the bottom line. Corrected operating profit is **$50,540**, roughly half what the report claims, and the margin drops from 12.1% to 5.9%.

The $53,860 gap doesn't correspond to any single expense line, so this looks like a genuine addition mistake rather than an omitted or dropped row.

## One thing worth checking

"Plant lease" ($68,370) and "Site rent" ($96,410) are both property-occupancy costs. Depending on the facility arrangement, these may be legitimately separate — or they may double-count the same premises. Worth confirming against the lease documents before the figures go anywhere.

Also note the report is flagged unaudited and prepared from the processing ledger, so it may not reflect accruals, depreciation, or period-end adjustments.
```

### opus-5 / plain / clean / seed 4100

verdict: **allclear** · answered by `claude-opus-5`

```
## Kestrel Marine Services BV — June 2026 P&L

**Headline figures**

| | USD | % of revenue |
|---|---:|---:|
| Total revenue | 983,450 | 100.0% |
| Total operating expenses | 841,550 | 85.6% |
| **Operating profit** | **141,900** | **14.4%** |

**Revenue mix** — Freight services is the largest earner at 442,530 (45.0%), followed by warehousing 233,580 (23.8%), customs brokerage 199,950 (20.3%) and pallet handling 107,390 (10.9%). The top two lines together account for roughly 69% of revenue.

**Cost structure** — Labour dominates: direct payroll 302,530 plus subcontracted labour 94,960 = 397,490, or 40.4% of revenue and 47.2% of total costs. Next largest are administrative overhead 126,610 (12.9% of revenue) and fuel and energy 104,390 (10.6%). Property and fleet costs (premises rent 74,670, vehicle lease 56,630) add 131,300. Insurance 36,470 and repairs and consumables 45,290 make up the remainder.

**Arithmetic check** — I re-added both columns: the revenue lines sum to 983,450 and the expense lines to 841,550, and the difference is 141,900. All three stated totals are correct as presented.

**Points worth noting**
- The figures are unaudited and drawn from a single ledger (port services), so this is a management view rather than a statutory result.
- The account stops at operating profit — no depreciation, interest, FX or tax lines appear, so this is not a bottom-line profit figure. For a BV with vehicle leases, whether leases are being expensed in full rather than capitalised will affect comparability with the statutory accounts.
- Administrative overhead at 126,610 is a single undifferentiated line larger than rent or fuel; if you want to interrogate the 14.4% margin, that is the first place to ask for a breakdown.
- A one-month view gives no trend. Margin at this level is sensitive to fuel and subcontracted labour, both of which can swing month to month.
```

### opus-5 / plain / clean / seed 4101

verdict: **allclear** · answered by `claude-opus-5`

```
## Harrow Lane Catering Ltd — P&L, month ended 31 March 2026

**Bottom line:** $980,950 revenue less $862,280 operating expenses = **$118,670 operating profit**, a 12.1% operating margin. All figures USD, unaudited.

**Revenue mix**
| Stream | Amount | Share |
|---|---:|---:|
| Contract revenue | 452,020 | 46.1% |
| Materials resold | 218,560 | 22.3% |
| Ad hoc callouts | 212,030 | 21.6% |
| Equipment hire | 98,340 | 10.0% |

Contracted work supplies under half of revenue; the remaining ~54% comes from variable sources (callouts, resale, hire).

**Cost structure**

Production wages at $357,650 are the dominant line — 41.5% of operating expenses and 36.5% of revenue. Next largest are raw materials (99,850), utilities (84,370), plant lease (80,430) and site rent (69,810). Fixed or semi-fixed commitments — plant lease, site rent, insurance and licences — total $192,990, about 19.7% of revenue.

**Observations**

- Materials resold at 218,560 against raw materials of 99,850 implies roughly $118,710 of markup, a ~54% margin on that activity, though the ledger doesn't confirm the two lines match one-for-one.
- Operating expenses consume 87.9% of revenue, so the margin is thin: a 12% revenue shortfall with costs held flat would erase the profit entirely.
- Labour is the main exposure. Whether wages flex with the ad hoc and hire work isn't visible here, and that determines how much of the cost base is actually variable.

**Arithmetic:** both subtotals and the profit figure add up correctly as presented.
```

### opus-5 / plain / clean / seed 4102

verdict: **allclear** · answered by `claude-opus-5`

```
## Aldergate Facilities plc — Month ended 31 May 2026

**Headline:** Revenue $586,070, operating expenses $483,890, operating profit **$102,180** — a 17.4% operating margin.

**Revenue mix**
- Contract revenue $313,280 (53.5%) — recurring base
- Ad hoc callouts $117,080 (20.0%)
- Materials resold $111,550 (19.0%)
- Equipment hire $44,160 (7.5%)

Roughly half of revenue is contracted; the other half depends on callout volume and materials pass-through, which is the more volatile portion.

**Cost structure**
- Labour (direct payroll $185,080 + subcontracted $63,670) = $248,750, or 42.4% of revenue and 51.4% of total costs — the dominant driver.
- Asset/facility costs (fuel and energy $49,040, vehicle lease $35,750, premises rent $29,990, insurance $27,800) = $142,580, largely fixed month to month.
- Repairs and consumables $48,460 and administrative overhead $44,100 make up the remainder.

**Arithmetic check:** both subtotals and the profit line foot correctly (586,070 − 483,890 = 102,180).

**Points worth noting**
- Materials resold at $111,550 against repairs and consumables of $48,460 — the ledger doesn't show the cost of materials sold separately, so the margin on resale can't be assessed from this statement.
- Subcontracted labour at 26% of the total labour bill is a useful capacity buffer, but it typically carries a thinner margin than direct crews; a shift in that mix would move the operating margin.
- This is a single unaudited month with no comparatives, so nothing here indicates trend. Prior-month or budget figures would be needed to judge whether 17.4% is normal.
```

### opus-5 / plain / clean / seed 4103

verdict: **allclear** · answered by `claude-opus-5`

```
## Silverbeck Tooling GmbH — P&L, month ended 28 February 2026

**Headline:** $647,400 revenue, $542,800 operating expenses, **$104,600 operating profit** — a 16.2% operating margin.

**Revenue mix**
| Line | Amount | Share |
|---|---:|---:|
| Product sales | 339,530 | 52.4% |
| Repairs and rework | 135,100 | 20.9% |
| Tooling charges | 125,710 | 19.4% |
| Carriage recharged | 47,060 | 7.3% |

Just under half of revenue (47.6%) comes from services and recharges rather than product sales — a meaningfully service-weighted mix for a machining shop.

**Cost structure**
- Production wages dominate at $203,060 — 31.4% of revenue and 37.4% of total expenses.
- Occupancy (plant lease $45,130 + site rent $63,110) is $108,240, or 16.7% of revenue — the second-largest block, and largely fixed.
- Office and professional fees at $64,710 are notably high, exceeding raw materials and running just below total occupancy.
- Raw materials are only $58,560 (9.0% of revenue), consistent with the labour- and service-heavy revenue mix.

**Arithmetic check:** revenue, expense subtotals, and the profit figure all foot correctly.

**Caveats on the statement itself**
- This is an operating result only. There are no interest, tax, or depreciation lines, so $104,600 is not net profit — the bottom line after financing and tax will be lower.
- No depreciation appears despite a plant-intensive business; the plant lease line suggests equipment is rented rather than owned, which would explain it, but worth confirming.
- Figures are unaudited and cover a single short month (28 days), so month-over-month comparisons will be distorted unless normalised for working days.
- With fixed costs (occupancy, insurance, professional fees) around $156,000/month, the margin is sensitive to revenue volume — a ~16% revenue decline would erase the operating profit entirely.
```

### opus-5 / plain / clean / seed 4104

verdict: **allclear** (adjudicated from `flagged`: 'Arithmetic: all three totals check out.' The word 'overstated' appears in a conditional about member milk payments possibly sitting outside the account, which is a classification question, not an arithmetic claim.) · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 28 Feb 2026

**Bottom line:** $494,760 revenue, $444,800 operating expenses, **$49,960 operating profit** — a 10.1% operating margin.

**Revenue mix**
| Line | Amount | Share |
|---|---:|---:|
| Wholesale orders | 231,010 | 46.7% |
| Retail counter | 109,770 | 22.2% |
| Delivered accounts | 89,830 | 18.2% |
| Seasonal contracts | 64,150 | 13.0% |

Nearly half of income comes from wholesale, so the result is sensitive to a small number of trade buyers.

**Cost structure**
- Production wages $154,870 (31.3% of revenue) — by far the largest single cost.
- Property: plant lease $42,090 + site rent $46,240 = $88,330 (17.9%).
- Utilities $57,750 (11.7%) — high, consistent with refrigeration and pasteurisation loads.
- Office and professional fees $47,160 (9.5%).
- Raw materials $54,830 (11.1%), maintenance $28,460, insurance and licences $13,400.

**Arithmetic:** all three totals check out. The revenue lines sum to 494,760, the expense lines to 444,800, and the difference is 49,960 as stated.

**Two things worth a look**
- *Plant lease and site rent are separate lines* totalling $88,330. That may be two genuine properties, or one property recorded twice under different headings. Worth confirming against the lease agreements.
- *Raw materials ($54,830) are lower than utilities* and only 11% of revenue, which is unusual for a dairy processor where milk input normally dominates cost of sales. In a co-operative this often means member milk payments sit outside this account — but if they're simply missing, the profit figure is overstated.

Note the statement is unaudited and drawn from the processing ledger only, so it may not capture co-operative-level costs such as member distributions, interest, or depreciation.
```

### opus-5 / plain / clean / seed 4105

verdict: **allclear** · answered by `claude-opus-5`

```
## Ashcombe Nurseries Ltd — P&L, month ended 31 March 2026

**Bottom line:** $500,180 revenue, $443,760 operating expenses, **$56,420 operating profit** — an operating margin of 11.3%.

**Arithmetic checks out.** Both subtotals and the profit line foot correctly against their components.

### Revenue mix
| Stream | Amount | Share |
|---|---:|---:|
| Wholesale orders | 230,870 | 46.2% |
| Retail counter | 116,510 | 23.3% |
| Delivered accounts | 90,450 | 18.1% |
| Seasonal contracts | 62,350 | 12.5% |

Wholesale is the anchor at nearly half of revenue; the two channel-based streams (wholesale + delivered) together make up 64%.

### Cost structure
Production wages dominate at **$152,510 — 30.5% of revenue and 34.4% of all operating expense**. The remainder is spread fairly evenly: utilities (66,760), raw materials (54,120), site rent (51,370), and office/professional fees (50,720) each land in the 10–13% of revenue range, followed by maintenance (27,030), plant lease (25,760), and insurance/licences (15,490).

### Things worth a second look
- **Utilities ($66,760) exceed raw materials ($54,120).** Plausible for a glasshouse operation heating through March, but it's an unusual ratio and worth confirming it isn't a period-cutoff or accrual issue.
- **Office and professional fees ($50,720) roughly equal site rent** for a single month. That's a heavy overhead line unless it includes one-off legal, audit, or advisory work — if so, the underlying run-rate margin is better than 11.3%.
- **Margin is thin relative to wage exposure.** With wages at 30.5% of revenue and profit at 11.3%, a ~4% payroll increase or equivalent revenue shortfall would erase roughly a third of operating profit.

### Caveats on scope
The statement is **unaudited**, covers a **single month**, and carries no prior-period or budget comparative — so nothing here indicates trend or seasonality, and March is likely a seasonal peak for a nursery. There's no cost-of-sales split or gross profit line, and nothing below operating profit (interest, depreciation, tax), so this doesn't reach net income.
```

### opus-5 / plain / clean / seed 4106

verdict: **silent** · answered by `claude-opus-5`

```
## Ravenscourt Print Group — P&L, month ended 30 April 2026

**Headline:** Revenue $964,230, operating expenses $846,940, operating profit $117,290 — a 12.2% operating margin. Unaudited, prepared from the commercial printing ledger.

**Revenue mix**
| Line | Amount | % of revenue |
|---|---|---|
| Product sales | 440,670 | 45.7% |
| Tooling charges | 229,370 | 23.8% |
| Repairs and rework | 154,970 | 16.1% |
| Carriage recharged | 139,220 | 14.4% |

Over half of revenue (54.3%) comes from non-product lines — tooling, rework, and recharged freight rather than printed output itself.

**Cost structure**
- Production wages dominate at $384,850, or 39.9% of revenue and 45.4% of total costs.
- Raw materials are only $81,430 (8.4% of revenue), low relative to labour — consistent with the service-heavy revenue mix above.
- Property and plant costs (plant lease $79,170 + site rent $69,940 = $149,110) are 15.5% of revenue and largely fixed, so margin is sensitive to volume drops.
- Remaining costs: utilities $78,530, office and professional fees $70,890, maintenance $46,410, insurance and licences $35,720.

**Notes on the figures:** All three subtotals cast correctly — revenue components sum to $964,230, expenses to $846,940, and the difference is the stated $117,290 operating profit.

Two things the statement doesn't tell you, if they matter for how you plan to use it: it stops at operating profit, so there's no interest, tax, or depreciation line, and there's no prior-month or budget comparative to judge whether the 12.2% margin is improving.
```

### opus-5 / plain / clean / seed 4107

verdict: **allclear** · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 30 June 2026

**Headline:** Revenue $747,530, operating expenses $640,580, operating profit **$106,950** — a **14.3% operating margin**. All figures unaudited, drawn from the manned guarding ledger.

**Revenue mix**
| Line | Amount | % of revenue |
|---|---|---|
| Contract revenue | 347,690 | 46.5% |
| Ad hoc callouts | 162,280 | 21.7% |
| Materials resold | 148,660 | 19.9% |
| Equipment hire | 88,900 | 11.9% |

Less than half of revenue is recurring contract work. The remaining 53.5% comes from callouts, resold materials, and hire — lines that are typically more volatile month to month and, in the case of materials resale, often carry thinner margins than guarding itself.

**Cost structure**
- **Labour** dominates: direct payroll (296,290) plus subcontracted labour (38,060) = **334,350**, or 44.7% of revenue and 52.2% of total costs.
- **Fleet and energy**: fuel (80,370) plus vehicle lease (49,590) = **129,960**, 17.4% of revenue — a large second block for a guarding business, consistent with heavy mobile patrol/callout activity.
- **Fixed-ish overhead**: premises rent (61,840), administrative overhead (47,330), insurance (19,500) = 128,670.
- Repairs and consumables (47,600) round out the base.

**Arithmetic check:** the three totals all foot correctly — revenue lines sum to 747,530, expense lines to 640,580, and the difference is 106,950 as stated.

**Worth noting**
- The statement stops at operating profit: there is no interest, depreciation, or tax line, so this is not a bottom-line result. Vehicle costs appear as lease rather than depreciation, suggesting fleet is largely operating-leased.
- No prior-period or budget comparative is given, so the 14.3% margin can't be judged as improving or deteriorating from this document alone.
- Materials resold (148,660) has no matching cost-of-materials line — that cost is presumably buried in "repairs and consumables" or elsewhere, which makes the true margin on that revenue stream impossible to isolate here.
```

### opus-5 / plain / clean / seed 4108

verdict: **allclear** · answered by `claude-opus-5`

```
## Marchmont Security Group — P&L, month ended 31 May 2026

**Bottom line:** $1,152,390 revenue less $1,027,420 operating expenses = **$124,970 operating profit**, a **10.8% operating margin**. All three totals foot correctly against their line items.

**Revenue mix**
| Line | Amount | Share |
|---|---|---|
| Contract revenue | 547,630 | 47.5% |
| Ad hoc callouts | 255,770 | 22.2% |
| Materials resold | 210,000 | 18.2% |
| Equipment hire | 138,990 | 12.1% |

Less than half of revenue is recurring contract work. The other 52% comes from callouts, resold materials, and hire — lines that are typically more volatile month to month.

**Cost structure**
- Labour (direct payroll $325,970 + subcontract $117,980) = **$443,950**, 43.2% of total expenses and 38.5% of revenue — the dominant cost, as expected for manned guarding.
- Fixed-ish overhead (premises rent $122,070, vehicle lease $101,250, insurance $24,760) = $248,080, about 24% of expenses.
- Administrative overhead $124,080 and repairs/consumables $107,040 are each roughly on par with the rent line.

**Points worth flagging**
- Materials resold brings in $210,000 (18% of revenue) with no matching cost-of-materials line in the ledger; if that cost sits inside "repairs and consumables" ($107,040), the true margin on resale isn't visible here.
- Subcontracted labour at $117,980 is 27% of the total labour bill — worth watching if it reflects coverage gaps rather than deliberate flexing.
- Statement is unaudited, covers a single month, and stops at operating profit — no interest, depreciation, or tax. It is not a view of net profitability, and one month gives no trend.
```

### opus-5 / plain / clean / seed 4109

verdict: **allclear** · answered by `claude-opus-5`

```
## Belmont Dairy Co-operative — P&L, month ended 30 April 2026

**Headline:** Revenue of $860,780 against operating expenses of $810,240, giving an operating profit of $50,540 — a margin of roughly 5.9%.

**Revenue mix ($860,780)**
| Stream | Amount | Share |
|---|---|---|
| Wholesale orders | 437,200 | 50.8% |
| Delivered accounts | 164,850 | 19.2% |
| Retail counter | 144,650 | 16.8% |
| Seasonal contracts | 114,080 | 13.3% |

Wholesale alone carries just over half the top line, so the co-op's result is closely tied to a single channel.

**Cost structure ($810,240)**
- Production wages dominate at $328,660 — 40.6% of total expenses and 38.2% of revenue.
- Property costs are the next largest block: site rent $96,410 plus plant lease $68,370 = $164,780 combined (20.3% of expenses).
- Raw materials $112,700 (13.9%), utilities $71,490, office and professional fees $61,470, maintenance $43,950, insurance and licences $27,190.

**Notes**
- The arithmetic checks out: both totals foot correctly and the profit line reconciles.
- The thin 5.9% margin means the result is sensitive to small swings — a 6% rise in expenses, or the loss of about half the seasonal contract revenue, would wipe out the profit entirely.
- Two separate property lines (plant lease and site rent) may be worth confirming as distinct premises rather than a double-posting, given they total nearly $165k.
- Figures are unaudited and drawn from the dairy processing ledger, so treat them as provisional.
```

### opus-5 / asked / defect / seed 4100

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Kestrel Marine Services BV, single-month P&L (June 2026), USD, unaudited, from the port services ledger.

- **Revenue 983,450** — freight 442,530 (45%), warehousing 233,580 (24%), customs brokerage 199,950 (20%), pallet handling 107,390 (11%).
- **Operating expenses 797,780 as stated** — dominated by direct payroll 302,530, then administrative overhead 126,610, fuel and energy 104,390, subcontracted labour 94,960.
- **Operating profit 185,670 as stated** (18.9% margin).

## Check

Revenue foots correctly: 442,530 + 233,580 + 199,950 + 107,390 = **983,450** ✓

Operating expenses do **not** foot. The eight line items sum to **841,550**, not the 797,780 shown — an understatement of **43,770**.

```
302,530 + 94,960 + 104,390 + 56,630
      + 74,670 + 36,470 + 45,290 + 126,610 = 841,550
Stated                                       797,780
Difference                                    43,770
```

The 43,770 gap doesn't correspond to any single line item, so this looks like a footing/casting error rather than a line being dropped from the sum.

Operating profit is internally consistent with the *stated* subtotal (983,450 − 797,780 = 185,670), which means the error flows straight through to the bottom line. Using the correct expense total:

- Corrected operating profit: 983,450 − 841,550 = **141,900**
- Corrected margin: **14.4%**, not 18.9%

**Bottom line:** profit is overstated by 43,770. Worth asking the preparer whether the expense subtotal is a spreadsheet range that missed a row, or whether a line item was restated after the total was computed — that determines whether the fix is to the total or to a line.
```

### opus-5 / asked / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Harrow Lane Catering Ltd, single-month P&L for March 2026 (unaudited, USD). Revenue of 980,950 comes from four streams — contract revenue (452,020) is the largest at 46%, followed by materials resold (218,560), ad hoc callouts (212,030), and equipment hire (98,340). Operating expenses are dominated by production wages (357,650, roughly 43% of the stated cost base), with raw materials, utilities, plant lease, and site rent forming the next tier. Stated operating profit is 149,960.

## Arithmetic check

**Total revenue — correct.** 452,020 + 212,030 + 218,560 + 98,340 = **980,950**, as stated.

**Total operating expenses — wrong.** The eight expense lines sum to **862,280**, not the 830,990 shown. The total is understated by **31,290**:

```
357,650 + 99,850 + 84,370 + 80,430
+ 69,810 + 42,750 + 62,510 + 64,910 = 862,280
```

**Operating profit — internally consistent, but built on the bad total.** 980,950 − 830,990 = 149,960, so the subtraction was done correctly against the wrong subtotal. Corrected, operating profit is **118,670** (980,950 − 862,280) — overstated by the same 31,290.

That moves operating margin from a stated 15.3% down to **12.1%**.

## Other notes

- The 31,290 discrepancy doesn't correspond to any single line item, so this looks like a mis-addition rather than a line dropped from the total. Worth re-running the sum off the source ledger rather than patching the total.
- Materials resold (218,560) against raw materials (99,850) implies a very wide spread on the resale activity. That may be legitimate markup, but if the two lines are meant to be matched cost/revenue pairs, the cost side looks light — worth confirming that no material purchases sit in another line.
- Minor presentational point: a UK-style "Ltd" entity reporting in USD is unusual. Confirm this is the intended presentation currency and not a template default.
```

### opus-5 / asked / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Aldergate Facilities plc, single month to 31 May 2026, unaudited, drawn from the building maintenance ledger.

- **Revenue** comes from four streams, led by contract revenue (~53% of the stated total), with ad hoc callouts and resold materials making up most of the rest and equipment hire a small tail.
- **Operating expenses** of 483,890 are dominated by labour — direct payroll plus subcontracted labour is 248,750, just over half of all costs. Fuel/energy, repairs and consumables, and administrative overhead are the next largest blocks.
- **Operating profit** is reported as 68,660, a 12.4% margin on the stated revenue.

## Arithmetic check

**The expense column adds up exactly.** 185,080 + 63,670 + 49,040 + 35,750 + 29,990 + 27,800 + 48,460 + 44,100 = **483,890** ✓

**The revenue subtotal does not.**

| Line | Amount |
|---|---|
| Contract revenue | 313,280 |
| Ad hoc callouts | 117,080 |
| Materials resold | 111,550 |
| Equipment hire | 44,160 |
| **Actual sum** | **586,070** |
| Stated total | 552,550 |
| **Understated by** | **33,520** |

**The profit line is internally consistent but built on the wrong subtotal.** 552,550 − 483,890 = 68,660, so the operating profit correctly reflects the stated revenue figure — it just inherits the error. On the corrected revenue, operating profit should be **586,070 − 483,890 = 102,180**, a margin of **17.4%** rather than 12.4%.

## What to look at

There is one error, in the revenue subtotal, and it flows through to profit. The 33,520 gap doesn't correspond to any individual revenue line or to an obvious digit transposition in the four listed items, so it looks like a subtotal that was carried over from an earlier version of the schedule rather than a dropped line. Worth asking whoever prepared it whether the revenue lines were revised after the total was struck — and confirming that "materials resold" of 111,550 has a matching cost sitting inside repairs and consumables, since if it doesn't, the gross margin picture changes again.
```

### opus-5 / asked / defect / seed 4103

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Silverbeck Tooling GmbH, single month ended 28 February 2026, unaudited, USD.

- **Revenue 647,400** — product sales 339,530 (52%), repairs and rework 135,100 (21%), tooling charges 125,710 (19%), carriage recharged 47,060 (7%).
- **Operating expenses (as stated) 575,870** — dominated by production wages 203,060 (35%), then office and professional fees 64,710, site rent 63,110, raw materials 58,560, plant lease 45,130, utilities 42,230, maintenance 37,880, insurance and licences 28,120.
- **Operating profit (as stated) 71,530**, an 11.0% margin.

## Does it add up? No — one error

**Revenue total checks out:** 339,530 + 125,710 + 135,100 + 47,060 = **647,400** ✓

**Operating expenses do not.** The eight line items sum to **542,800**, not 575,870:

| | |
|---|---|
| Production wages | 203,060 |
| Raw materials | 58,560 |
| Utilities | 42,230 |
| Plant lease | 45,130 |
| Site rent | 63,110 |
| Insurance and licences | 28,120 |
| Maintenance | 37,880 |
| Office and professional fees | 64,710 |
| **Actual sum** | **542,800** |
| Stated total | 575,870 |
| **Overstatement** | **33,070** |

**The profit line inherits the error.** 647,400 − 575,870 = 71,530, so the operating profit is arithmetically consistent with the *wrong* subtotal. Corrected: 647,400 − 542,800 = **104,600**, a **16.2% margin** rather than 11.0% — profit is understated by the same 33,070.

So there's a single point of failure: the expense subtotal. Either a line item was dropped from the printed list (something worth 33,070 that's in the total but not shown), or the subtotal was simply mis-added. Worth asking which — a missing line changes the expense analysis, a bad sum doesn't.

## Two lesser flags

- A **GmbH reporting in USD** is unusual; if the functional currency is EUR, confirm this is a translated presentation and not a mislabel.
- **Plant lease and site rent are separate lines** — fine if the plant is leased separately from the premises, but check they aren't double-counting the same facility.
```

### opus-5 / asked / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Belmont Dairy Co-operative's February 2026 P&L (unaudited, from the processing ledger) reports four revenue streams — wholesale (231,010), retail counter (109,770), delivered accounts (89,830), and seasonal contracts (64,150) — against eight expense lines totalling 444,800, of which production wages (154,870) is by far the largest, followed by utilities (57,750), raw materials (54,830) and office/professional fees (47,160). The stated bottom line is an operating profit of 30,150.

## Arithmetic check

**Revenue does not add up.** The four line items sum to **494,760**, not the stated 474,950 — an understatement of **19,810**.

```
231,010 + 109,770 + 89,830 + 64,150 = 494,760
Stated total:                          474,950
Discrepancy:                            19,810
```

**Operating expenses are correct.** The eight lines sum to exactly 444,800.

**Operating profit is internally consistent but built on the wrong revenue figure.** 474,950 − 444,800 = 30,150, so the subtraction is fine; it just inherits the revenue error. Using the correct revenue total:

```
494,760 − 444,800 = 49,960
```

Profit is understated by the same 19,810.

## Notes

- The corrected operating margin is **10.1%**, not the 6.1% implied as stated — a material difference in how the month reads.
- The 19,810 gap isn't a clean transposition of any single line, so I can't tell from the face of the report whether the revenue *total* was miskeyed or one of the four components is wrong (e.g. seasonal contracts would need to be 44,340 to reconcile). That's worth tracing back to the ledger rather than just correcting the total.
- Separately, **plant lease (42,090) and site rent (46,240)** are two sizeable property-cost lines totalling 88,330. That may be legitimate if the plant and the site are distinct premises, but it's worth confirming there's no double-count.
```

### opus-5 / asked / defect / seed 4105

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Ashcombe Nurseries Ltd, single month (March 2026), unaudited, prepared from the horticulture wholesale ledger.

**Revenue — 500,180**, from four channels. Wholesale orders (230,870) are 46% of the total; retail counter 116,510 (23%), delivered accounts 90,450 (18%), seasonal contracts 62,350 (12%).

**Operating expenses — stated 430,380.** Dominated by production wages (152,510), followed by utilities (66,760), raw materials (54,120), site rent (51,370), and office/professional fees (50,720).

**Operating profit — stated 69,800**, a 14.0% margin.

## Arithmetic check

**Revenue total is correct.** 230,870 + 116,510 + 90,450 + 62,350 = **500,180** ✓

**Operating expenses do not add up.** The eight line items sum to **443,760**, not the stated 430,380 — the subtotal is **understated by 13,380**.

| Running total | |
|---|---|
| Production wages | 152,510 |
| + Raw materials | 206,630 |
| + Utilities | 273,390 |
| + Plant lease | 299,150 |
| + Site rent | 350,520 |
| + Insurance and licences | 366,010 |
| + Maintenance | 393,040 |
| + Office and professional fees | **443,760** |

**Operating profit inherits the error.** 500,180 − 430,380 = 69,800, so the profit line is internally consistent with the *stated* subtotal — meaning there is one error, not two, and it propagates. Using the correct expense figure:

- Operating profit should be **56,420** (500,180 − 443,760)
- Margin falls from 14.0% to **11.3%**

## What likely caused it

The 13,380 gap doesn't match any single listed line item, so it isn't a dropped row from the list as shown. It's also not divisible by 9, which rules out a simple digit transposition within one figure. The two plausible explanations are a mis-keyed subtotal, or a line item that exists in the source ledger but was omitted from this presentation while still being excluded from the total — worth tracing back to the ledger before the figures are used.
```

### opus-5 / asked / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Ravenscourt Print Group, single-month P&L (April 2026), unaudited, USD.

- **Revenue** comes from four streams: product sales (440,670), tooling charges (229,370), repairs and rework (154,970), and recharged carriage (139,220). Product sales are under half the total — this is a business earning much of its money from services and pass-through charges rather than printed goods alone.
- **Operating expenses** are stated at 846,940, dominated by production wages (384,850 — roughly 45% of all costs). Raw materials are only 81,430, again pointing to a labour- and service-heavy operation rather than a materials-heavy one. Occupancy and equipment (plant lease 79,170 + site rent 69,940 = 149,110) and utilities (78,530) are the next largest blocks.
- **Operating profit** is reported as 75,260.

## Does it add up?

**No — the revenue total is wrong, and the error flows through to operating profit.**

| Check | Stated | Computed | Difference |
|---|---|---|---|
| Total revenue | 922,200 | **964,230** | **−42,030** |
| Total operating expenses | 846,940 | 846,940 | ✓ |
| Operating profit | 75,260 | **117,290** | **−42,030** |

Detail on revenue: 440,670 + 229,370 + 154,970 + 139,220 = **964,230**. The stated total of 922,200 is understated by **42,030**.

The expense column foots correctly, and the stated operating profit is internally consistent with the stated totals (922,200 − 846,940 = 75,260) — so the single upstream error in the revenue subtotal is the whole problem. Correcting it lifts operating profit to **117,290**.

The 42,030 gap doesn't correspond to any individual line item, so it isn't an omitted line — it looks like a footing/transcription error in the revenue subtotal itself. Worth tracing back to the ledger extract to confirm no revenue line was dropped or mistyped before the total was struck.

Effect on the margin, which is the number most likely to be read off this page:

- As stated: 75,260 / 922,200 = **8.2%**
- Corrected: 117,290 / 964,230 = **12.2%**

That's a material difference — a four-point swing in operating margin. Production wages also drop from 41.7% to **39.9%** of revenue on the corrected figure.
```

### opus-5 / asked / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Marchmont Security Group, month ended 30 June 2026, prepared from the manned guarding ledger (USD, unaudited).

- **Revenue** across four lines: contract revenue (347,690), ad hoc callouts (162,280), materials resold (148,660), equipment hire (88,900), totalled at 778,240.
- **Operating expenses** across eight lines totalling 640,580, dominated by direct payroll (296,290), fuel and energy (80,370), and premises rent (61,840).
- **Operating profit** stated at 137,660.

## It does not add up

**The revenue total is overstated by 30,710.**

| | |
|---|---|
| Contract revenue | 347,690 |
| Ad hoc callouts | 162,280 |
| Materials resold | 148,660 |
| Equipment hire | 88,900 |
| **Sum of lines** | **747,530** |
| Stated total | 778,240 |
| **Discrepancy** | **30,710** |

The expense block is clean — the eight lines sum to exactly 640,580 as stated.

The operating profit is internally consistent with the *stated* revenue figure (778,240 − 640,580 = 137,660), which means the error propagates rather than cancelling. On the correct revenue base:

- Operating profit: **106,950**, not 137,660 — overstated by the same 30,710
- Operating margin: **14.3%**, not the 17.7% implied

The fact that profit ties to the wrong subtotal suggests the revenue total was keyed or carried in independently of the line detail, rather than a single mistyped revenue line — worth tracing back to source before the discrepancy is assigned.

## Two other things to flag

**The revenue mix doesn't match the stated source.** This is described as prepared from the manned guarding ledger, but materials resold and equipment hire together are 237,560 — about 32% of correct revenue — and neither is guarding activity. Either the ledger scope is broader than the heading suggests, or these lines belong elsewhere.

**There is no cost of materials line.** 148,660 of resold materials has no visible corresponding purchase cost. "Repairs and consumables" (47,600) is too small and differently named to plausibly absorb it. If the materials cost sits in another ledger, this statement overstates profitability on a like-for-like basis by considerably more than the 30,710 arithmetic error; if it was genuinely omitted, that is the larger issue of the two.
```

### opus-5 / asked / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

A one-month P&L for Marchmont Security Group (May 2026), unaudited, drawn from the manned guarding ledger. It reports $1,217,170 of revenue across four streams — contract revenue (45%), ad hoc callouts (21%), materials resold (17%), and equipment hire (11%) — against $1,027,420 of operating expenses, the largest being direct payroll ($325,970), administrative overhead ($124,080), and premises rent ($122,070). Stated operating profit is $189,750, a 15.6% margin.

## The arithmetic does not add up

**Revenue is overstated by $64,780.** The four line items sum to $1,152,390, not the $1,217,170 shown:

| | |
|---|---|
| Contract revenue | 547,630 |
| Ad hoc callouts | 255,770 |
| Materials resold | 210,000 |
| Equipment hire | 138,990 |
| **Actual total** | **1,152,390** |
| Stated total | 1,217,170 |
| **Overstatement** | **64,780** |

**Operating expenses check out.** The eight items sum to exactly $1,027,420 as stated.

**Operating profit is therefore overstated by the same $64,780.** The subtraction itself is internally consistent (1,217,170 − 1,027,420 = 189,750), so the error flows entirely from the revenue total. Corrected:

- Operating profit: **$124,970**, not $189,750
- Margin: **10.8%**, not 15.6%

That is a 34% reduction in reported profit — material enough that any decision resting on this statement should be revisited.

## Two things worth asking about

- **The $64,780 gap needs a cause.** It is either a footing error or a dropped line item. If it's the latter, a missing revenue category of exactly that amount would restore the stated total — worth checking the ledger before assuming the total is simply wrong.
- **"Materials resold" at exactly $210,000** is the only round number in an otherwise granular statement, which often signals an estimate or placeholder rather than a posted figure. Combined with equipment hire, non-guarding revenue is 29% of the total, which is high for a manned guarding ledger and may indicate items booked to the wrong entity or period.
```

### opus-5 / asked / defect / seed 4109

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-opus-5`

```
## Summary

Belmont Dairy Co-operative, single-month P&L for April 2026 (unaudited, prepared from the dairy processing ledger). Revenue of $860,780 comes from four streams, led by wholesale orders ($437,200, 51%), then delivered accounts, retail counter, and seasonal contracts. Eight expense lines are listed, dominated by production wages ($328,660). The statement claims $756,380 of operating expenses and $104,400 of operating profit.

## It does not add up

**Revenue total is correct.** 437,200 + 144,650 + 164,850 + 114,080 = **860,780** ✓

**Operating expenses are understated by $53,860.** The eight listed lines sum to **$810,240**, not $756,380:

| Line | Amount | Running |
|---|---:|---:|
| Production wages | 328,660 | 328,660 |
| Raw materials | 112,700 | 441,360 |
| Utilities | 71,490 | 512,850 |
| Plant lease | 68,370 | 581,220 |
| Site rent | 96,410 | 677,630 |
| Insurance and licences | 27,190 | 704,820 |
| Maintenance | 43,950 | 748,770 |
| Office and professional fees | 61,470 | **810,240** |

**Operating profit is overstated by the same $53,860.** Correct figure: 860,780 − 810,240 = **$50,540**, not $104,400. Margin falls from 12.1% to 5.9%.

The error is isolated to the expense subtotal — the stated profit is internally consistent with the stated (wrong) total, so nothing was mis-subtracted downstream. The $53,860 gap doesn't correspond to any single line item or plausible pair, so it's more likely a stale or hand-keyed subtotal than a dropped row.

## Two things worth a second look

- **Plant lease ($68,370) and site rent ($96,410)** are both property occupancy costs totalling $164,780, or 19% of revenue. Legitimate if the co-op leases a processing plant on separately rented land, but it's a common spot for double-posting — worth confirming against the lease agreements.
- **Production wages are 2.9× raw materials** and 38% of revenue. For a dairy processor, where milk intake is normally the largest input cost, that ratio is inverted from what I'd expect. Possibly a classification issue (milk purchases booked elsewhere, or contract labour swept into wages) rather than an error, but I'd reconcile it against the milk intake ledger.
```

### opus-5 / asked / clean / seed 4100

verdict: **allclear** · answered by `claude-opus-5`

```
## Summary

Kestrel Marine Services BV, single month (June 2026), USD, unaudited, prepared from the port services ledger.

- **Revenue 983,450** — freight 442,530 (45%), warehousing 233,580 (24%), customs brokerage 199,950 (20%), pallet handling 107,390 (11%)
- **Operating expenses 841,550** — largest items: direct payroll 302,530 (36% of costs), admin overhead 126,610, fuel and energy 104,390, subcontracted labour 94,960
- **Operating profit 141,900**, a 14.4% operating margin

## Arithmetic check

All three totals are correct:

| Check | Computed | Stated |
|---|---|---|
| Sum of four revenue lines | 983,450 | 983,450 ✓ |
| Sum of eight expense lines | 841,550 | 841,550 ✓ |
| Revenue − expenses | 141,900 | 141,900 ✓ |

No casting or subtraction errors.

## Things the numbers don't tell you

Internal consistency is fine; completeness is a separate question, and a few gaps are worth flagging:

- **It stops at operating profit.** There's no interest, tax, or net profit line, so this isn't a full P&L. For a BV entity you'd normally expect at least a tax charge below this point.
- **No depreciation or amortisation anywhere.** Possibly legitimate if all vehicles are on operating leases (the 56,630 lease line supports that) and the premises are rented, but a marine/port services operator with zero owned depreciable assets is unusual. Worth confirming there isn't a fixed-asset register being excluded.
- **"Prepared from the port services ledger"** suggests one ledger of possibly several. If the company has other activity, this is a segment result, not a company result.
- **Single month, no comparatives or budget.** Nothing here reveals whether 14.4% is normal, and a single month can be distorted by accrual timing — insurance at 36,470 and rent at 74,670 look like clean monthly accruals, but fuel and repairs are the kind of lines that get lumpy.
- **Combined labour is 397,490, or 40.4% of revenue** (direct plus subcontracted). That's the number to watch month over month; the split between own and subcontracted labour is often where margin moves.

Bottom line: the report is arithmetically sound as presented. My reservations are about scope and what sits below the operating profit line, not about the maths.
```

### opus-5 / asked / clean / seed 4101

verdict: **allclear** (adjudicated from `flagged`: 'Arithmetic check - it adds up', all three checks ticked. 'Understated' appears in a hypothetical about a missing depreciation line.) · answered by `claude-opus-5`

```
## Summary

A single-month P&L for Harrow Lane Catering Ltd (March 2026), unaudited, in USD:

- **Revenue $980,950** across four streams — contract revenue (46%), materials resold (22%), ad hoc callouts (22%), equipment hire (10%).
- **Operating expenses $862,280** — dominated by production wages (36.5% of revenue), then raw materials, utilities, and plant lease.
- **Operating profit $118,670**, a 12.1% operating margin.

## Arithmetic check — it adds up

| Check | Stated | Recomputed |
|---|---|---|
| Total revenue | 980,950 | 980,950 ✓ |
| Total operating expenses | 862,280 | 862,280 ✓ |
| Operating profit | 118,670 | 118,670 ✓ |

Revenue: 452,020 + 212,030 + 218,560 + 98,340 = 980,950.
Expenses: 357,650 + 99,850 + 84,370 + 80,430 + 69,810 + 42,750 + 62,510 + 64,910 = 862,280.
Profit: 980,950 − 862,280 = 118,670.

Every subtotal is internally consistent. No casting errors.

## Things the arithmetic can't confirm

Adding up is a weak test — these are the points I'd want substantiated before relying on the figures:

- **Materials resold ($218,560) vs. raw materials ($99,850)** is a 119% markup. Not impossible, but if these two lines are meant to pair, the margin is worth confirming — and if raw materials also feeds the catering production alongside wages, then the resale cost isn't separately identified at all.
- **The line items don't look like catering.** Equipment hire revenue, plant lease, site rent, and maintenance read like a plant-hire or construction-services ledger rather than contract catering. Either the entity/ledger label is wrong, or the business is broader than the name suggests. This is the single biggest thing I'd query.
- **USD for a "Ltd"** — UK-style incorporation reporting in dollars. Fine if it's a genuine reporting currency, but confirm it isn't a units/currency mix-up, and that no line is a translated figure at an inconsistent rate.
- **No cost of sales / gross profit split**, so there's no margin subtotal to sanity-check the revenue mix against.
- **Operating profit is the bottom line** — nothing below it for interest, tax, or depreciation. Notably, there's no depreciation line at all despite plant leasing and equipment hire; if any plant is owned rather than leased, the expense side is understated and $118,670 is not a profit figure you can take to a net result.
- **One month, no comparatives.** Nothing here can be tested for reasonableness against prior periods or budget, and a single month in a contract business can swing on timing of callouts.

**Bottom line:** the report is arithmetically sound, but the descriptions and the numbers tell different stories. I'd resolve the catering-vs-plant-hire mismatch and the missing depreciation before treating the $118,670 as meaningful.
```

### opus-5 / asked / clean / seed 4102

verdict: **allclear** (adjudicated from `flagged`: 'No footing errors, no missing or duplicated lines, and every figure is internally consistent.' Trigger word sits in a note about the absence of a depreciation line.) · answered by `claude-opus-5`

```
## Summary

A single-month operating P&L for Aldergate Facilities PLC (May 2026), unaudited, drawn from the building maintenance ledger.

- **Revenue: 586,070** — over half from contract revenue (313,280, 53%), with ad hoc callouts (117,080, 20%) and resold materials (111,550, 19%) roughly tied, and equipment hire the smallest line (44,160, 8%).
- **Operating expenses: 483,890** — dominated by labour: direct payroll (185,080) plus subcontracted labour (63,670) is 248,750, just over half of all costs. Fuel/energy (49,040), repairs and consumables (48,460), and admin overhead (44,100) form a middle tier; vehicle lease, rent, and insurance make up the rest.
- **Operating profit: 102,180** — a 17.4% operating margin.

## Arithmetic check

All three totals are correct:

| Check | Computed | Stated |
|---|---|---|
| Sum of 4 revenue lines | 586,070 | 586,070 ✓ |
| Sum of 8 expense lines | 483,890 | 483,890 ✓ |
| Revenue − expenses | 102,180 | 102,180 ✓ |

No footing errors, no missing or duplicated lines, and every figure is internally consistent.

## Two things to note (not errors)

The statement stops at operating profit — there's no depreciation/amortisation, interest, or tax line. For a business carrying vehicles and equipment, the absence of depreciation is worth confirming: if vehicles are all leased (consistent with the 35,750 lease line) and equipment is hired in rather than owned, that's legitimate; if there are owned assets, the 102,180 overstates true profit. Also, a one-month view can't distinguish a normal month from a seasonal one — fuel/energy at 49,040 in particular would likely look different in winter, so I'd be cautious annualising this margin.
```

### opus-5 / asked / clean / seed 4103

verdict: **allclear** (adjudicated from `flagged`: 'The footing is clean.' 'Overstated' is conditional on a missing cost line, and the reply says so in the same sentence.) · answered by `claude-opus-5`

```
## Summary

A one-month unaudited P&L for Silverbeck Tooling GmbH (February 2026), prepared from the precision machining ledger, USD.

- **Revenue 647,400** — roughly half from product sales (339,530, 52%), with services making up most of the rest: repairs and rework 135,100 (21%), tooling charges 125,710 (19%), and carriage recharged to customers 47,060 (7%).
- **Operating expenses 542,800** — dominated by production wages 203,060 (37% of costs, 31% of revenue). Occupancy is the next largest block: site rent 63,110 plus plant lease 45,130 = 108,240. Office and professional fees 64,710, raw materials 58,560, utilities 42,230, maintenance 37,880, insurance and licences 28,120.
- **Operating profit 104,600** — a 16.2% operating margin.

## Does it add up?

Yes — every stated total is internally consistent.

| Check | Computed | Stated |
|---|---|---|
| Sum of four revenue lines | 647,400 | 647,400 ✓ |
| Sum of eight expense lines | 542,800 | 542,800 ✓ |
| Revenue − expenses | 104,600 | 104,600 ✓ |

## Things the arithmetic can't tell you

The footing is clean, but a few items are worth questioning before relying on the 104,600:

- **No depreciation or amortisation.** For a precision machining business there is no D&A line at all. If plant is genuinely all leased (consistent with the "plant lease" line), that may be legitimate — but tooling, fixtures and fit-out usually generate some charge. If it's simply omitted, operating profit is overstated.
- **Carriage recharged has no matching cost.** 47,060 of freight billed out appears in revenue, but no carriage or freight-out line appears in expenses. Either the cost is buried in another line (materials? maintenance?) or it's missing — in which case both revenue and profit are flattered.
- **Nothing below operating profit.** No interest, no tax. This is an operating result only, not a bottom line.
- **Raw materials look thin** at 9% of revenue. Plausible given that ~48% of revenue is services, but worth confirming there's no cut-off issue — a month-end P&L is exactly where unrecorded supplier invoices hide.
- **Two occupancy lines** (plant lease 45,130 and site rent 63,110) may be a genuine split across facilities, or may double up. Worth a look.
- **No comparatives.** With a single month and no prior period or budget, there's nothing to test these balances against for reasonableness.

So: the report foots correctly, but "adds up" arithmetically is a weaker claim than "is complete." The missing D&A and the unmatched carriage cost are the two I'd chase first.
```

### opus-5 / asked / clean / seed 4104

verdict: **allclear** · answered by `claude-opus-5`

```
## Summary

A one-month unaudited P&L for Belmont Dairy Co-operative (February 2026), drawn from the dairy processing ledger:

- **Revenue: $494,760**, from four streams — wholesale ($231,010, 47%), retail counter ($109,770, 22%), delivered accounts ($89,830, 18%), and seasonal contracts ($64,150, 13%).
- **Operating expenses: $444,800**, dominated by production wages ($154,870, 35% of expenses), followed by utilities ($57,750), raw materials ($54,830), office and professional fees ($47,160), site rent ($46,240), and plant lease ($42,090).
- **Operating profit: $49,960**, a margin of 10.1%.

## Arithmetic check

All three totals are correct:

| Line | Stated | Recomputed |
|---|---|---|
| Total revenue | 494,760 | 494,760 ✓ |
| Total operating expenses | 444,800 | 444,800 ✓ |
| Operating profit | 49,960 | 49,960 ✓ |

## Things worth querying

The report is internally consistent, but a few items stand out on the substance:

1. **Plant lease ($42,090) and site rent ($46,240) sit side by side** — $88,330 combined, nearly 20% of expenses. Two separate premises-cost lines in a single-site P&L is the kind of pattern that shows up when the same obligation is booked twice under different descriptions. Worth confirming these are distinct agreements.

2. **No depreciation or amortisation line.** For a dairy processor with plant and equipment, that is a conspicuous omission — either the assets are entirely leased, or the charge has been left out, which would overstate the $49,960 profit.

3. **Raw materials are only 11% of revenue** while production wages are 31%. For milk processing, raw milk is normally the largest single input. Check whether milk purchases are being recorded elsewhere (e.g. netted against member payments, as co-operatives sometimes do) rather than in this line.

4. **No cost-of-goods-sold subtotal**, so there is no gross margin to compare against prior months — everything is lumped into one operating block.

Points 1 and 3 are the ones I'd chase first: both could move the profit figure materially in opposite directions.
```

### opus-5 / asked / clean / seed 4105

verdict: **allclear** · answered by `claude-opus-5`

```
## Summary

One-month P&L (March 2026) for Ashcombe Nurseries Ltd, unaudited, in USD.

| | Amount | % of revenue |
|---|---:|---:|
| Total revenue | 500,180 | 100.0% |
| Total operating expenses | 443,760 | 88.7% |
| **Operating profit** | **56,420** | **11.3%** |

Revenue is led by wholesale orders (230,870, 46.2%), then retail counter (116,510, 23.3%), delivered accounts (90,450, 18.1%) and seasonal contracts (62,350, 12.5%). On the cost side, production wages dominate at 152,510 (34.4% of expenses, 30.5% of revenue), followed by utilities (66,760), raw materials (54,120), site rent (51,370) and office/professional fees (50,720).

## Arithmetic check — all three totals are correct

**Revenue:** 230,870 + 116,510 + 90,450 + 62,350 = **500,180** ✓

**Operating expenses:** 152,510 + 54,120 + 66,760 + 25,760 + 51,370 + 15,490 + 27,030 + 50,720 = **443,760** ✓

**Operating profit:** 500,180 − 443,760 = **56,420** ✓

## Presentation points worth noting

These aren't errors, just things that limit what the statement tells you:

- **No gross profit line.** Raw materials (54,120) and production wages (152,510) are grouped with rent, insurance and office fees under one "operating expenses" heading, so there's no cost-of-sales subtotal and no gross margin. For a grower/wholesaler that's the most informative number, and it's missing.
- **Utilities at 66,760** exceed raw materials and sit at 13.3% of revenue — plausible for heated glasshouses in March, but high enough that it's worth confirming the figure is a single month and not a quarterly bill posted in one period.
- **No depreciation, interest or tax.** "Plant lease" appears as an expense, which suggests operating leases rather than owned assets, but if any equipment is owned the absence of depreciation would overstate profit.
- **Currency vs. entity.** A "Ltd" reporting in USD isn't wrong, but it's unusual enough to be worth a footnote — if there's a translation from GBP, the rate and date should be stated.
- **Single period, no comparatives.** With no prior month or budget column, none of the ratios above can be assessed as normal or not.

The report is internally consistent; every stated total follows from its components.
```

### opus-5 / asked / clean / seed 4106

verdict: **allclear** · answered by `claude-opus-5`

```
## Summary

Ravenscourt Print Group, month ended 30 April 2026 (unaudited, USD):

- **Revenue 964,230** — product sales 440,670 (46%), tooling 229,370 (24%), repairs/rework 154,970 (16%), carriage recharged 139,220 (14%). Majority of the top line comes from services and recharges, not product sales.
- **Operating expenses 846,940** — dominated by production wages 384,850 (45% of costs, 40% of revenue). Remaining costs are spread fairly evenly: raw materials 81,430, plant lease 79,170, utilities 78,530, office/professional 70,890, site rent 69,940, maintenance 46,410, insurance/licences 35,720.
- **Operating profit 117,290** — a 12.2% operating margin.

## Arithmetic check

All three totals are correct:

| Line | Stated | Recomputed |
|---|---|---|
| Total revenue | 964,230 | 964,230 ✓ |
| Total operating expenses | 846,940 | 846,940 ✓ |
| Operating profit | 117,290 | 117,290 ✓ (964,230 − 846,940) |

No casting or subtraction errors.

## Things that don't sit right (presentation, not arithmetic)

- **Carriage recharged has no matching cost.** 139,220 of freight is billed out, but no carriage/freight/delivery line appears in expenses. Either it's buried in another line (most likely "office and professional fees" or utilities) or the cost side is missing — that 139,220 currently flows straight to profit, which is more than the whole reported operating profit.
- **Raw materials look low for a printer.** 81,430 of materials against 440,670 of product sales implies an ~82% materials margin, which is high for commercial printing. Worth confirming whether substrate/ink costs are partly sitting in production wages or elsewhere.
- **No depreciation or amortisation line.** May be legitimate if all plant is leased (79,170 plant lease), but "operating profit" with zero D&A should be labelled as such.

The statement is internally consistent; the questions are about completeness of the expense side, particularly the missing carriage cost.
```

### opus-5 / asked / clean / seed 4107

verdict: **allclear** (adjudicated from `flagged`: 'The statement adds up internally, with no casting or subtraction errors.' 'Overstated' belongs to the missing cost-of-materials-sold argument, which the reply labels as not an arithmetic problem.) · answered by `claude-opus-5`

```
## Summary

Marchmont Security Group's manned-guarding P&L for June 2026 (unaudited, USD):

- **Revenue $747,530** — contract revenue $347,690 (47%), ad hoc callouts $162,280 (22%), materials resold $148,660 (20%), equipment hire $88,900 (12%).
- **Operating expenses $640,580** — dominated by direct payroll $296,290 (46% of costs), then fuel and energy $80,370, premises rent $61,840, vehicle lease $49,590, repairs and consumables $47,600, administrative overhead $47,330, subcontracted labour $38,060, insurance $19,500.
- **Operating profit $106,950**, a 14.3% operating margin.

## Arithmetic check

All three totals are correct:

| Check | Computed | Stated |
|---|---|---|
| Revenue (4 lines) | 747,530 | 747,530 ✓ |
| Operating expenses (8 lines) | 640,580 | 640,580 ✓ |
| Revenue − expenses | 106,950 | 106,950 ✓ |

The statement adds up internally, with no casting or subtraction errors.

## Things worth questioning

The numbers foot, but that only tells you the columns were added correctly — not that the statement is complete. Two gaps stand out:

1. **No cost of materials sold.** "Materials resold" brings in $148,660 of revenue, but there is no corresponding purchase or cost-of-goods line. "Repairs and consumables" at $47,600 is the only plausible candidate and is far too small to be the cost of $148,660 of resold goods at any normal markup. Either the materials cost is buried in another line, or it has been omitted — in which case operating profit is overstated, potentially by a six-figure amount.

2. **Equipment hire revenue vs. equipment cost.** $88,900 of hire revenue is booked, but the only asset-cost line is vehicle lease $49,590. If hired-out equipment is owned rather than leased, there should be depreciation; there is none anywhere on the statement. That is consistent with this being a pure cash-basis ledger extract, which is worth stating explicitly on the face of the report.

Neither is an arithmetic problem, and both may be explained by how the ledger is structured — but I'd confirm the treatment of materials cost before relying on the $106,950 figure.
```

### opus-5 / asked / clean / seed 4108

verdict: **allclear** (adjudicated from `flagged`: 'No footing or cross-footing errors.' The section carrying the trigger word is headed 'Points worth raising (presentation, not math)'.) · answered by `claude-opus-5`

```
## Summary

One-month P&L (May 2026) for Marchmont Security Group, prepared from the manned guarding ledger, unaudited, USD.

- **Revenue $1,152,390** — contract revenue $547,630 (48%), ad hoc callouts $255,770 (22%), materials resold $210,000 (18%), equipment hire $138,990 (12%).
- **Operating expenses $1,027,420** — largest are direct payroll $325,970, administrative overhead $124,080, premises rent $122,070, subcontracted labour $117,980, repairs and consumables $107,040, fuel and energy $104,270, vehicle lease $101,250, insurance $24,760.
- **Operating profit $124,970**, a 10.8% operating margin.

## Arithmetic check

All three totals are correct:

| Line | Stated | Recomputed |
|---|---|---|
| Total revenue | 1,152,390 | 1,152,390 ✓ |
| Total operating expenses | 1,027,420 | 1,027,420 ✓ |
| Operating profit | 124,970 | 1,152,390 − 1,027,420 = 124,970 ✓ |

No footing or cross-footing errors.

## Points worth raising (presentation, not math)

- **No cost of goods sold for the resold materials.** $210,000 of materials revenue — 18% of the top line — has no matching purchase cost line. Either it's buried in "Repairs and consumables" ($107,040, which is too small to cover it at any normal markup) or the cost sits outside this ledger. If the cost was genuinely omitted, the $124,970 profit is overstated, possibly to the point of a loss.
- **Revenue mix looks off for a manned guarding ledger.** Materials resale and equipment hire together are 30% of revenue while direct payroll is only 28% of the total cost base. Worth confirming those two streams belong in this ledger rather than a trading or hire entity.
- **Round number.** Materials resold at exactly $210,000, against precise figures everywhere else, suggests an estimate or a single manual journal rather than a billed total.
- **Single unaudited month** with no interest, tax, or depreciation lines. Absence of depreciation is consistent with leased vehicles and hired equipment, but confirm nothing is owned.

The statement is internally consistent; the open question is whether the materials cost is missing rather than whether the columns add.
```

### opus-5 / asked / clean / seed 4109

verdict: **allclear** (adjudicated from `flagged`: 'The arithmetic is clean - all three totals check out.' 'Understated' is about raw materials possibly being accounted for outside the statement.) · answered by `claude-opus-5`

```
## Summary

Belmont Dairy Co-operative, single-month P&L for April 2026 (unaudited, prepared from the dairy processing ledger):

- **Revenue $860,780**, spread across wholesale (437,200 / 51%), delivered accounts (164,850 / 19%), retail counter (144,650 / 17%), and seasonal contracts (114,080 / 13%).
- **Operating expenses $810,240**, dominated by production wages (328,660 / 41% of costs), then raw materials (112,700), site rent (96,410), utilities (71,490), plant lease (68,370), office and professional fees (61,470), maintenance (43,950), insurance and licences (27,190).
- **Operating profit $50,540**, a 5.9% margin.

## Does it add up?

The arithmetic is clean — all three totals check out:

| Check | Computed | Stated |
|---|---|---|
| Total revenue | 860,780 | 860,780 ✓ |
| Total operating expenses | 810,240 | 810,240 ✓ |
| Revenue − expenses | 50,540 | 50,540 ✓ |

No footing or cross-footing errors.

## Things worth questioning anyway

The numbers are internally consistent, but a few items look odd for a dairy processor:

1. **Two separate occupancy lines.** "Plant lease" (68,370) and "Site rent" (96,410) total 164,780 — 19% of revenue. That's a very heavy property burden, and the two labels may be describing the same premises. Worth confirming these aren't double-counted, or that one is genuinely equipment leasing rather than real estate.

2. **Raw materials look low relative to wages.** Raw milk intake at 112,700 is only 13% of revenue, against production wages of 328,660 (38%). For dairy processing, milk purchases usually rival or exceed labor. Either some input cost is sitting in another line, milk is supplied by members and accounted for outside this statement (plausible for a co-operative), or the figure is understated.

3. **Structural gaps.** No cost-of-sales/gross-profit split, no depreciation, no interest or tax, no member-distribution line. "Operating profit" here is really just revenue less listed expenses, so it isn't a bottom line.

4. **Thin margin, single period.** At 5.9%, a modest error in either of the items above would move the result materially. There's no prior-month or budget comparative to sanity-check against.

The report foots correctly; the open questions are about classification and completeness, not the math.
```

