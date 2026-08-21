# Transcript, tag `gross`

40 replies, complete and unedited. Verdicts from classify.mjs; an adjudicated row says so.

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

### haiku-4-5 / plain / defect / seed 4100

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Kestrel Marine Services BV — June 2026 P&L Summary**

The company generated $983,450 in revenue across four service lines, with freight services being the largest contributor ($442,530, or 45% of total). Operating expenses totaled $496,440, leaving an operating profit of $487,010—a strong 49.5% profit margin.

Key expense drivers:
- **Payroll** (direct + subcontracted): $397,490 (80% of total expenses)
- **Fuel and energy**: $104,390
- **Rent and overhead**: $201,280 combined

The company is operationally efficient with healthy margins, though the business is highly labor-intensive.
```

### haiku-4-5 / plain / defect / seed 4101

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Harrow Lane Catering Ltd — March 2026 Summary**

The company generated $980,950 in revenue across four streams, with contract revenue ($452,020) as the largest contributor, followed by materials resold ($218,560) and ad hoc callouts ($212,030).

Operating expenses totaled $576,490, driven primarily by production wages ($357,650, representing 62% of total expenses). Other significant costs included raw materials ($99,850), utilities ($84,370), and plant/site leases ($160,260 combined).

**Operating profit for the month: $404,460** — representing a 41% net operating margin. The business is highly profitable relative to its cost structure.
```

### haiku-4-5 / plain / defect / seed 4102

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Aldergate Facilities PLC – May 2026 P&L Summary**

Aldergate Facilities is operating at a significant loss. The company generated **$330,550 in revenue** but incurred **$483,890 in operating expenses**, resulting in an **operating loss of $153,340**.

**Revenue** was driven primarily by contract work ($313,280), with supplementary income from ad hoc callouts, materials resold, and equipment hire.

**Operating expenses** were heavily weighted toward labor costs—direct payroll ($185,080) and subcontracted labor ($63,670) combined account for roughly 75% of total expenses. Other material costs include fuel and energy ($49,040), repairs and consumables ($48,460), and administrative overhead ($44,100).

The company is spending roughly **47% more than it's earning**. At this rate, either revenue needs to increase significantly or operating costs need to be reduced to reach breakeven.
```

### haiku-4-5 / plain / defect / seed 4103

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Silverbeck Tooling GmbH — February 2026 P&L Summary**

The company generated **$647,400 in revenue** but incurred **$789,550 in operating expenses**, resulting in an **operating loss of $142,150** for the month.

**Revenue breakdown:** Product sales were the largest contributor ($339,530), followed by repairs/rework ($135,100) and tooling charges ($125,710).

**Expense breakdown:** Production wages were the largest cost ($203,060), followed by office/professional fees ($64,710), site rent ($63,110), and raw materials ($58,560).

**Key issue:** Operating expenses exceed revenue by 22%, with labor and facility costs being the primary drivers of the loss. The company is currently unprofitable at the operational level.
```

### haiku-4-5 / plain / defect / seed 4104

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — February 2026 P&L Summary**

The co-operative posted a **$123,280 operating loss** for the month, with revenue of $321,520 falling significantly short of operating expenses of $444,800.

**Revenue breakdown:** Wholesale orders dominate at $231,010 (72% of total), with retail counter ($109,770) and delivered accounts ($89,830) providing smaller shares.

**Expense breakdown:** The largest costs are production wages ($154,870), utilities ($57,750), and site rent ($46,240). Together, production wages and utilities account for roughly two-thirds of total expenses.

**Key issue:** Operating expenses are 38% higher than revenue, indicating the business is unsustainable at current volumes or pricing. Production wages alone exceed total revenue.
```

### haiku-4-5 / plain / defect / seed 4105

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Ashcombe Nurseries Ltd – March 2026 P&L Summary**

**Revenue: $500,180**
- Wholesale orders ($231k) and retail counter ($117k) drive ~70% of revenue
- Seasonal contracts and delivered accounts contribute the remainder

**Operating Expenses: $310,280**
- Production wages ($153k) are the largest cost, followed by utilities ($67k) and site rent ($51k)
- Overhead (office/professional fees) adds $51k

**Bottom Line: $189,900 operating profit**
- 38% profit margin on gross revenue
- Strong performance for the month with healthy margins across all revenue streams
```

### haiku-4-5 / plain / defect / seed 4106

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
## Ravenscourt Print Group — April 2026 P&L Summary

**Operating Loss: $237,480**

The company generated $609,460 in revenue but incurred $846,940 in operating expenses, resulting in a significant monthly loss.

**Revenue breakdown:**
- Product sales dominated at $440,670 (72% of total), with tooling charges ($229,370) as the second-largest source

**Key expense drivers:**
- Production wages at $384,850 alone exceeded total revenue—the primary cost burden
- Combined facility costs (plant lease + site rent) totaled $149,110
- Materials and utilities added $159,960

**Bottom line:** The operation is running at a substantial loss, driven primarily by high labor costs relative to revenue. Production wages alone represent 63% of total revenue, indicating a significant profitability gap that would require either substantial revenue growth or cost restructuring.
```

### haiku-4-5 / plain / defect / seed 4107

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Marchmont Security Group — June 2026 P&L Summary**

**Revenue:** $1.01M
- Contract revenue dominates at $347.7K (34%)
- Ad hoc callouts add $162.3K (16%)
- Materials and equipment hire contribute $237.6K (23%)

**Operating Expenses:** $640.6K
- Payroll (direct + subcontracted): $334.4K — the largest cost category (52% of expenses)
- Fuel/energy and premises rent: $130.2K combined
- Other: repairs, insurance, administrative overhead

**Bottom Line:** Operating profit of **$372.6K** — a healthy 37% profit margin on revenue.

The business is well-diversified across service offerings and maintaining strong operational efficiency relative to its revenue base.
```

### haiku-4-5 / plain / defect / seed 4108

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Marchmont Security Group P&L Summary — May 2026**

Marchmont generated $1.65M in revenue, with contract work ($548K) and ad hoc callouts ($256K) as the primary sources. Operating expenses totaled $1.03M, driven mainly by direct payroll ($326K) and premises rent ($122K). The company posted an operating profit of $622K, representing a 37.7% profit margin on revenue.
```

### haiku-4-5 / plain / defect / seed 4109

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-Operative — April 2026 P&L Summary**

**Strong profitability:** Operating profit of $441,370 on revenue of $860,780, representing a 51% profit margin.

**Revenue mix:**
- Wholesale orders dominate at $437,200 (51% of total)
- Delivered accounts ($164,850) and retail counter ($144,650) provide steady supplementary income
- Seasonal contracts contribute $114,080

**Expense structure:**
- Production wages are the largest cost at $328,660 (79% of operating expenses)
- Occupancy costs (plant lease + site rent) total $164,780 (39% of operating expenses)
- Raw materials at $112,700 and utilities at $71,490 are secondary variable costs
- Overhead (office/professional fees, insurance, maintenance) adds $132,610

The operation is highly profitable, though heavily dependent on wholesale revenue. Labor is the primary cost driver, followed by facility expenses.
```

### haiku-4-5 / plain / clean / seed 4100

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Kestrel Marine Services BV — June 2026 P&L Summary**

**Performance:** Operating profit of $141,900 on revenue of $983,450 (14.4% margin)

**Revenue breakdown:**
- Freight services dominate at 45% ($442,530)
- Warehousing ($233,580) and customs brokerage ($199,950) are secondary revenue streams
- Pallet handling contributes $107,390

**Cost structure:**
- Direct payroll is the largest expense at $302,530 (36% of operating costs)
- Subcontracted labour ($94,960) and administrative overhead ($126,610) are secondary cost drivers
- Fuel/energy ($104,390), premises rent ($74,670), and vehicle lease ($56,630) represent fixed operational costs
- Total operating expenses: $841,550 (86% of revenue)

**Bottom line:** Profitable month with healthy margins; freight services is the core profit driver, supported by diversified port services revenue.
```

### haiku-4-5 / plain / clean / seed 4101

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Harrow Lane Catering Ltd – P&L Summary (March 2026)**

Harrow Lane Catering generated **$980,950 in revenue** for the month, with contract catering as the primary income stream ($452,020), supplemented by ad hoc callouts ($212,030), materials resale ($218,560), and equipment hire ($98,340).

Operating expenses totaled **$862,280**, driven mainly by production wages ($357,650), raw materials ($99,850), utilities ($84,370), and plant lease ($80,430). Smaller line items included site rent, insurance, maintenance, and professional fees.

**Operating profit: $118,670** (12.1% margin)
```

### haiku-4-5 / plain / clean / seed 4102

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Aldergate Facilities PLC — May 2026 Monthly P&L**

**Revenue: $586,070**
- Contract revenue dominates at 53% ($313,280)
- Ad hoc callouts and materials resale each contribute ~20%
- Equipment hire is a minor revenue stream (7.5%)

**Operating Expenses: $483,890**
- Payroll (direct + subcontracted) is the largest cost at $248,750 (51% of expenses)
- Fuel/energy ($49,040) and repairs/consumables ($48,460) are the next largest categories
- Fixed costs (rent, vehicle lease, insurance) total ~$94,540

**Bottom Line: Operating profit of $102,180 (17.4% margin)**

The business appears healthy with strong contract revenue providing a stable base, supplemented by flexible ad hoc work. Payroll efficiency is the key lever for profitability.
```

### haiku-4-5 / plain / clean / seed 4103

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Silverbeck Tooling GmbH — February 2026 P&L Summary**

**Revenue: $647,400**
- Product sales dominate at $339.5K (52% of revenue)
- Service revenue adds $261K (repairs, tooling, carriage charges)

**Operating Expenses: $542,800**
- Production wages are the largest cost at $203K (37% of expenses)
- Occupancy costs (plant lease + site rent) total $108K
- Raw materials and overhead account for the remainder

**Bottom Line: $104,600 operating profit (16% margin)**

The business is profitable with diversified revenue streams and well-controlled expenses. Production efficiency appears solid with strong margins on both product sales and service work.
```

### haiku-4-5 / plain / clean / seed 4104

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
# Belmont Dairy Co-operative — P&L Summary (Feb 2026)

**Bottom line:** Operating profit of $49,960 on $494,760 revenue (10.1% margin)

**Revenue mix** — Wholesale dominates at 47%, with retail counter (22%) and delivered accounts (18%) providing diversified channels. Seasonal contracts contribute 13%.

**Expenses** — Production wages are the largest cost at $154,870 (35% of total), followed by utilities ($57,750) and office/professional fees ($47,160). Combined with raw materials ($54,830), labor and inputs account for 60% of operating costs.

**Key items:**
- Utilities ($57,750) and site rent ($46,240) total $104k — over half the operating profit
- Insurance/licenses are modest at $13,400 for a dairy operation
- Plant lease ($42,090) is a secondary occupancy cost

The operation is profitable but thin-margined; significant leverage on controlling utilities costs and optimizing the wholesale channel.
```

### haiku-4-5 / plain / clean / seed 4105

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Ashcombe Nurseries Ltd – March 2026 Summary**

Ashcombe Nurseries generated **$500,180 in revenue** with an **operating profit of $56,420** (11.3% margin).

**Revenue breakdown:**
- Wholesale orders dominated at $230,870 (46%)
- Retail counter and delivered accounts each contributed ~$90–117k
- Seasonal contracts added $62,350

**Top operating costs:**
- Production wages: $152,510 (34% of revenue)
- Utilities: $66,760
- Site rent and plant lease: $77,130 combined
- Office and professional fees: $50,720

The business is profitable but labor-intensive, with wages and facilities accounting for over half of total operating expenses.
```

### haiku-4-5 / plain / clean / seed 4106

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Ravenscourt Print Group — April 2026 P&L Summary**

Ravenscourt generated $964,230 in revenue with operating profit of $117,290 (12% margin).

**Revenue** was driven primarily by product sales ($441k), supplemented by tooling charges ($229k) and repairs/rework ($155k). **Operating expenses** of $847k were dominated by production wages ($385k) and raw materials ($81k), with facility costs (lease, rent, utilities) totaling $228k. Insurance, maintenance, and professional fees accounted for the remainder.

The business operated profitably with a healthy margin, though wage costs represent the largest controllable expense at 40% of revenue.
```

### haiku-4-5 / plain / clean / seed 4107

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
# Marchmont Security Group — June 2026 P&L Summary

**Revenue: $747,530**
- Contract revenue dominates at 47% ($347,690), supplemented by ad hoc callouts ($162,280), materials ($148,660), and equipment hire ($88,900).

**Operating Expenses: $640,580**
- Payroll is the primary cost driver at 46% of expenses ($296,290 direct + $38,060 subcontracted), followed by fuel/energy ($80,370) and vehicle/premises costs ($49,590 + $61,840).

**Bottom Line: $106,950 operating profit (14.3% margin)**

The business is profitable with healthy revenue diversification, though it's labor-intensive. Direct payroll is the single largest controllable cost.
```

### haiku-4-5 / plain / clean / seed 4108

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
# Marchmont Security Group — May 2026 P&L Summary

**Revenue: $1,152,390**
- Contract revenue was the largest contributor at $547,630 (48%), followed by ad hoc callouts ($255,770, 22%) and materials resale ($210,000, 18%).

**Operating Expenses: $1,027,420**
- Labor costs (direct payroll + subcontracted) were the biggest expense at $443,950 (43% of total expenses).
- Fixed costs include premises rent ($122,070), vehicle lease ($101,250), and administrative overhead ($124,080).
- Operational costs: fuel/energy ($104,270) and repairs/consumables ($107,040).

**Operating Profit: $124,970 (10.8% margin)**

The business generated solid profitability for the month with revenue exceeding expenses by ~$125k, delivering a healthy operating margin of roughly 11%.
```

### haiku-4-5 / plain / clean / seed 4109

verdict: **silent** · answered by `claude-haiku-4-5-20251001`

```
**Belmont Dairy Co-operative — April 2026 P&L Summary**

**Revenue: $860,780**
- Wholesale orders dominate at 51% ($437,200)
- Supporting channels: delivered accounts ($164,850), retail counter ($144,650), seasonal contracts ($114,080)

**Operating Expenses: $810,240**
- Production wages are the largest cost at 40.5% ($328,660)
- Other major expenses: site rent ($96,410), raw materials ($112,700), plant lease ($68,370), utilities ($71,490)

**Bottom Line: $50,540 operating profit (5.9% margin)**

The cooperative was profitable for the month, with wholesale orders providing the bulk of revenue, though labor remains the primary cost driver.
```

### sonnet-5 / plain / defect / seed 4100

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
**Kestrel Marine Services BV — P&L, June 2026 (unaudited, USD)**

- **Revenue: $983,450**, led by Freight services ($442,530, ~45%), followed by Warehousing ($233,580), Customs brokerage ($199,950), and Pallet handling ($107,390).
- **Operating expenses: $496,440**, largest items being Direct payroll ($302,530) and Administrative overhead ($126,610), with the rest spread across fuel/energy, subcontracted labour, rent, insurance, vehicle lease, and repairs.
- **Operating profit: $487,010** — roughly a 49.5% operating margin.
```

### sonnet-5 / plain / defect / seed 4101

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Harrow Lane Catering Ltd — P&L, March 2026 (unaudited)**

- Total revenue: $980,950 (contract revenue $452,020; ad hoc callouts $212,030; materials resold $218,560; equipment hire $98,340)
- Total operating expenses: stated as $576,490 (largest items: production wages $357,650, raw materials $99,850, utilities $84,370)
- Operating profit: stated as $404,460

**Flag:** the individual expense lines actually sum to $862,280, not the $576,490 shown as the total — a $285,790 discrepancy. That also means operating profit, correctly recalculated, would be $118,670 rather than $404,460. Worth checking the source ledger before relying on this report.
```

### sonnet-5 / plain / defect / seed 4102

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Aldergate Facilities plc — P&L, month ended 31 May 2026 (unaudited)**

- Revenue lines (contract revenue, ad hoc callouts, materials resold, equipment hire) sum to **586,070**, but the report states **Total revenue: 330,550** — a discrepancy of 255,520.
- Total operating expenses: **483,890** (payroll is the largest component at 185,080, followed by subcontracted labour at 63,670).
- Operating profit is reported as **-153,340**, which is consistent with the *stated* (330,550) revenue figure minus expenses, not with the sum of the individual revenue lines.

**Flag:** the revenue section doesn't add up internally — if the correct total is 586,070, operating profit would actually be **+102,180**, not a loss. Worth checking the source ledger before this figure is used anywhere, since the sign of the result flips depending on which total is correct.
```

### sonnet-5 / plain / defect / seed 4103

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Silverbeck Tooling GmbH ran an operating **loss of $142,150** for February 2026.

- **Revenue: $647,400** — driven mainly by product sales ($339,530), with repairs/rework ($135,100) and tooling charges ($125,710) also contributing; carriage recharges added $47,060.
- **Operating expenses: $789,550** — largest items were production wages ($203,060), office and professional fees ($64,710), and site rent ($63,110), with raw materials, plant lease, maintenance, insurance, and utilities each in the $28K–$59K range.

Expenses exceeded revenue by about 22%, resulting in the loss. Note the report is unaudited.
```

### sonnet-5 / plain / defect / seed 4104

verdict: **flagged** · cites true sum: true · cites error size: false · answered by `claude-sonnet-5`

```
Belmont Dairy Co-operative posted an operating loss of **$123,280** for February 2026 (unaudited).

- **Revenue: $321,520** — Wholesale orders led at $231,010, followed by Retail counter ($109,770), Delivered accounts ($89,830), and Seasonal contracts ($64,150). (Note: these four line items sum to $494,760, well above the stated total revenue of $321,520 — worth double-checking the source ledger for a transcription error.)
- **Operating expenses: $444,800** — largest costs were Production wages ($154,870), Office and professional fees ($47,160), Site rent ($46,240), Utilities ($57,750), and Raw materials ($54,830), with smaller amounts for Plant lease, Maintenance, and Insurance/licences.
- **Result:** Expenses exceeded revenue by $123,280, driven mainly by wage costs and combined lease/rent/utility overhead outpacing sales.

Flagging the revenue subtotal discrepancy above for your review before this figure is used further.
```

### sonnet-5 / plain / defect / seed 4105

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Ashcombe Nurseries' unaudited P&L for March 2026:

**Revenue: $500,180 total**
- Wholesale orders: $230,870 (largest source, ~46%)
- Retail counter: $116,510
- Delivered accounts: $90,450
- Seasonal contracts: $62,350

**Operating expenses: $310,280 total**
- Production wages: $152,510 (largest expense, ~49%)
- Utilities: $66,760
- Office and professional fees: $50,720
- Raw materials: $54,120
- Site rent: $51,370
- Maintenance: $27,030
- Plant lease: $25,760
- Insurance and licences: $15,490

**Operating profit: $189,900** — a margin of about 38% of revenue.
```

### sonnet-5 / plain / defect / seed 4106

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Ravenscourt Print Group — P&L, month ended 30 Apr 2026 (unaudited)**

- Revenue line items sum to **964,230** (Product sales 440,670 + Tooling 229,370 + Repairs/rework 154,970 + Carriage 139,220), but the report states **Total revenue: 609,460** — a discrepancy of 354,770.
- Operating expenses total **846,940**, correctly summing all seven expense lines (wages, materials, utilities, lease, rent, insurance, maintenance, office/professional fees).
- Operating profit is stated as **-237,480**, which is consistent with the *stated* (not summed) revenue figure of 609,460 minus expenses of 846,940.

**Bottom line:** As reported, the business shows an operating loss of $237,480 for April. However, the revenue section doesn't add up — the four revenue lines sum to $964,230, not the $609,460 total shown. If the correct total is actually 964,230, the business would show an operating **profit** of $117,290 instead of a loss. You'll want to check the source ledger to determine which number (the total, or one of the line items) is wrong before relying on this report.
```

### sonnet-5 / plain / defect / seed 4107

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Summary:** Marchmont Security Group's June 2026 P&L (unaudited) shows revenue driven mainly by contract work ($347.7k) and ad hoc callouts ($162.3k), with materials resale and equipment hire adding smaller amounts. Operating expenses total $640,580, led by direct payroll ($296.3k, ~46% of costs), fuel/energy ($80.4k), and premises rent ($61.8k).

**⚠️ Arithmetic discrepancy found:** The four revenue lines actually sum to **$747,530**, not the stated **$1,013,180** (a $265,650 overstatement):
- 347,690 + 162,280 + 148,660 + 88,900 = 747,530

Since Operating Profit ($372,600) = stated Total Revenue − Total Operating Expenses ($640,580), it's calculated off the incorrect revenue figure. Using the corrected revenue total, operating profit would be **$106,950**, not $372,600 — a substantial difference.

Operating expenses subtotal ($640,580) checks out correctly against its line items.

You may want to go back to the source ledger to confirm which revenue figure (or which total) is correct before this report is used further.
```

### sonnet-5 / plain / defect / seed 4108

verdict: **flagged** · cites true sum: true · cites error size: true · answered by `claude-sonnet-5`

```
**Marchmont Security Group — P&L, May 2026 (unaudited)**

- **Revenue:** Contract revenue ($547,630) is the largest component, followed by ad hoc callouts ($255,770), materials resold ($210,000), and equipment hire ($138,990).
- **Operating expenses ($1,027,420 total):** Direct payroll is the biggest line ($325,970), followed by premises rent ($122,070), administrative overhead ($124,080), subcontracted labour ($117,980), repairs/consumables ($107,040), fuel/energy ($104,270), vehicle lease ($101,250), and insurance ($24,760).
- **Operating profit:** $621,730 as stated.

**Note — arithmetic discrepancy:** The four revenue line items sum to $1,152,390, not the stated total of $1,649,150 (a $496,760 gap). The reported operating profit ($621,730) equals the *stated* revenue total minus expenses; if the revenue lines are correct, operating profit should be $124,970 instead. Worth checking the underlying ledger for a missing/mislabeled revenue line or a transcription error before relying on this figure.
```

### sonnet-5 / plain / defect / seed 4109

verdict: **silent** · cites true sum: false · cites error size: false · answered by `claude-sonnet-5`

```
Belmont Dairy Co-operative's unaudited P&L for April 2026 shows total revenue of $860,780, driven mainly by wholesale orders ($437,200), with delivered accounts ($164,850), retail counter ($144,650), and seasonal contracts ($114,080) rounding out the total.

Operating expenses came to $419,410, the largest being production wages ($328,660), followed by raw materials ($112,700) and site rent ($96,410); utilities, plant lease, maintenance, office/professional fees, and insurance made up the rest.

This left an operating profit of $441,370 — roughly a 51% operating margin on revenue.
```

### sonnet-5 / plain / clean / seed 4100

verdict: **silent** · answered by `claude-sonnet-5`

```
**Kestrel Marine Services BV — P&L, June 2026 (unaudited, USD)**

- **Revenue:** $983,450 total — driven mainly by Freight services ($442,530, 45%) and Warehousing ($233,580, 24%), with Customs brokerage ($199,950) and Pallet handling ($107,390) making up the rest.
- **Operating expenses:** $841,550 total — largest items are Direct payroll ($302,530), Administrative overhead ($126,610), Fuel/energy ($104,390), and Subcontracted labour ($94,960).
- **Operating profit:** $141,900, an operating margin of about **14.4%**.
```

### sonnet-5 / plain / clean / seed 4101

verdict: **silent** · answered by `claude-sonnet-5`

```
Harrow Lane Catering's unaudited P&L for March 2026:

- **Total revenue: $980,950**, driven mainly by contract revenue ($452,020) and materials resold ($218,560), with ad hoc callouts ($212,030) and equipment hire ($98,340) rounding it out.
- **Total operating expenses: $862,280**, the largest being production wages ($357,650), followed by raw materials, utilities, plant lease, and site rent (each roughly $70K–100K).
- **Operating profit: $118,670**, an operating margin of about 12%.
```

### sonnet-5 / plain / clean / seed 4102

verdict: **silent** · answered by `claude-sonnet-5`

```
**Aldergate Facilities PLC – May 2026 P&L summary**

- **Revenue: $586,070**, led by contract revenue ($313,280, 53%), ad hoc callouts ($117,080), materials resold ($111,550), and equipment hire ($44,160).
- **Operating expenses: $483,890**, largest being direct payroll ($185,080) and subcontracted labour ($63,670), followed by repairs/consumables, admin overhead, fuel/energy, vehicle lease, premises rent, and insurance.
- **Operating profit: $102,180**, an operating margin of about **17.4%**.

Note: unaudited, single-month figures.
```

### sonnet-5 / plain / clean / seed 4103

verdict: **silent** · answered by `claude-sonnet-5`

```
I don't see any file attached or content beyond what's in your message — the P&L text above is exactly what I have. Here's a summary of it:

**Silverbeck Tooling GmbH — P&L, month ended 28 Feb 2026 (unaudited, USD)**

- **Total revenue: $647,400**, driven mainly by product sales ($339,530) and repairs/rework ($135,100), with tooling charges ($125,710) and recharged carriage ($47,060) rounding it out.
- **Total operating expenses: $542,800**, the largest being production wages ($203,060), followed by office/professional fees ($64,710), site rent ($63,110), and raw materials ($58,560).
- **Operating profit: $104,600**, an operating margin of about **16.2%**.

Let me know if you'd like a deeper breakdown (e.g., cost ratios, margin by revenue line) or a comparison to a prior period if you have one to share.
```

### sonnet-5 / plain / clean / seed 4104

verdict: **silent** · answered by `claude-sonnet-5`

```
I don't see any files in this conversation—the report text was pasted directly. Here's a summary:

**Belmont Dairy Co-operative — P&L, month ended 28 Feb 2026 (unaudited)**

- **Total revenue: $494,760**, led by wholesale orders ($231,010, ~47%), followed by retail counter ($109,770), delivered accounts ($89,830), and seasonal contracts ($64,150).
- **Total operating expenses: $444,800**, the largest being production wages ($154,870), then office/professional fees ($47,160), site rent ($46,240), utilities ($57,750), and raw materials ($54,830).
- **Operating profit: $49,960**, a margin of about **10.1%** of revenue.
```

### sonnet-5 / plain / clean / seed 4105

verdict: **silent** · answered by `claude-sonnet-5`

```
Ashcombe Nurseries' March 2026 P&L (unaudited) shows total revenue of $500,180, driven mainly by wholesale orders ($230,870) and retail counter sales ($116,510), with delivered accounts and seasonal contracts contributing the remainder.

Operating expenses totaled $443,760, the largest being production wages ($152,510), utilities ($66,760), and site rent ($51,370), followed by office/professional fees, raw materials, maintenance, plant lease, and insurance.

This left an operating profit of $56,420, an operating margin of roughly 11.3%.
```

### sonnet-5 / plain / clean / seed 4106

verdict: **silent** · answered by `claude-sonnet-5`

```
I don't have a report to summarize — no file or document was attached to this conversation, only the P&L figures pasted directly in your message. I can summarize those:

**Ravenscourt Print Group — P&L, month ended 30 April 2026 (unaudited)**

- **Revenue: $964,230** — driven mainly by product sales ($440,670) and tooling charges ($229,370), with repairs/rework ($154,970) and recharged carriage ($139,220) also contributing.
- **Operating expenses: $846,940** — largest items are production wages ($384,850, ~45% of costs), raw materials ($81,430), plant lease ($79,170), utilities ($78,530), and site rent ($69,940).
- **Operating profit: $117,290**, an operating margin of roughly **12%**.

Let me know if you'd like a deeper breakdown or ratio analysis.
```

### sonnet-5 / plain / clean / seed 4107

verdict: **silent** · answered by `claude-sonnet-5`

```
I don't see a report attached — the message only contains a P&L statement, so here's a summary of that:

**Marchmont Security Group — P&L, June 2026 (unaudited)**

- **Total revenue: $747,530**, driven mainly by contract revenue ($347,690) and ad hoc callouts ($162,280), with materials resold ($148,660) and equipment hire ($88,900) rounding it out.
- **Total operating expenses: $640,580**, dominated by direct payroll ($296,290, ~46% of expenses). Other notable costs: fuel/energy ($80,370), premises rent ($61,840), and repairs/consumables ($47,600).
- **Operating profit: $106,950** — an operating margin of roughly **14.3%**.
```

### sonnet-5 / plain / clean / seed 4108

verdict: **silent** · answered by `claude-sonnet-5`

```
Marchmont Security Group's May 2026 P&L (unaudited):

- **Revenue: $1,152,390** — driven mainly by contract revenue ($547,630) and ad hoc callouts ($255,770), with materials resold ($210,000) and equipment hire ($138,990) rounding it out.
- **Operating expenses: $1,027,420** — largest items are direct payroll ($325,970), administrative overhead ($124,080), premises rent ($122,070), and subcontracted labour ($117,980).
- **Operating profit: $124,970**, an operating margin of about 10.8%.
```

### sonnet-5 / plain / clean / seed 4109

verdict: **silent** · answered by `claude-sonnet-5`

```
Belmont Dairy Co-operative's April 2026 P&L shows total revenue of $860,780, driven mainly by wholesale orders ($437,200) and delivered accounts ($164,850), with retail counter ($144,650) and seasonal contracts ($114,080) rounding out the mix.

Operating expenses totaled $810,240, the largest being production wages ($328,660) and raw materials ($112,700), followed by site rent ($96,410), office/professional fees ($61,470), utilities ($71,490), plant lease ($68,370), maintenance ($43,950), and insurance/licences ($27,190).

This left an operating profit of $50,540 — roughly a 5.9% margin on revenue. The report is unaudited, prepared from the internal dairy processing ledger.
```

