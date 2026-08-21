/**
 * The report generator and the ground truth.
 *
 * Everything a probe needs is derived here, in code, from a seed. The model is
 * never asked what the numbers are; the script knows, because the script built
 * them. That is the whole reason this file exists separately from the runner:
 * if the truth came out of the same place as the answer there would be nothing
 * to measure.
 *
 * A report is a one-month P&L with 15 numeric rows: 4 revenue lines and their
 * subtotal, 8 operating expense lines and their subtotal, and operating profit.
 *
 * Each seed produces a MATCHED PAIR. The clean variant has every subtotal equal
 * to the exact sum of the lines above it. The defective variant is the same
 * report with exactly one subtotal replaced by a number 3-7% away from the true
 * sum, and operating profit recomputed from the stated subtotals so that the
 * misstated subtotal is the ONLY broken relation in the document. Pairing
 * matters: the false-alarm control and the detection cell then differ by one
 * number and nothing else.
 */

/** mulberry32. Small, seedable, and reproducible across node versions. */
export function rng(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const pick = (r, xs) => xs[Math.floor(r() * xs.length)];
const uni = (r, lo, hi) => lo + r() * (hi - lo);

/**
 * Company, trade, and the index of the revenue and expense label sets that
 * belong to that trade. Drawing the label sets independently produced a
 * building maintenance firm booking "tooling charges", which is the kind of
 * detail that makes a finance reader stop reading the numbers and start
 * distrusting the document.
 */
const COMPANIES = [
  ["Northwind Logistics Ltd", "freight and warehousing", 0, 0],
  ["Kestrel Marine Services BV", "port services", 0, 0],
  ["Aldergate Facilities PLC", "building maintenance", 1, 0],
  ["Ravenscourt Print Group", "commercial printing", 2, 1],
  ["Belmont Dairy Co-operative", "dairy processing", 4, 1],
  ["Harrow Lane Catering Ltd", "contract catering", 1, 1],
  ["Silverbeck Tooling GmbH", "precision machining", 2, 1],
  ["Pentland Waste Solutions", "waste collection", 3, 2],
  ["Corley Textiles Ltd", "industrial textiles", 2, 1],
  ["Marchmont Security Group", "manned guarding", 1, 0],
  ["Tarnwick Glassworks Ltd", "flat glass fabrication", 2, 1],
  ["Ashcombe Nurseries Ltd", "horticulture wholesale", 4, 1],
];

const MONTHS = [
  ["31 January 2026", "January 2026"],
  ["28 February 2026", "February 2026"],
  ["31 March 2026", "March 2026"],
  ["30 April 2026", "April 2026"],
  ["31 May 2026", "May 2026"],
  ["30 June 2026", "June 2026"],
];

const REVENUE_SETS = [
  ["Freight services", "Warehousing", "Customs brokerage", "Pallet handling"],
  ["Contract revenue", "Ad hoc callouts", "Materials resold", "Equipment hire"],
  ["Product sales", "Tooling charges", "Repairs and rework", "Carriage recharged"],
  ["Route collections", "Tipping fees", "Recyclate sales", "Skip hire"],
  ["Wholesale orders", "Retail counter", "Delivered accounts", "Seasonal contracts"],
];

const EXPENSE_SETS = [
  [
    "Direct payroll", "Subcontracted labour", "Fuel and energy", "Vehicle lease",
    "Premises rent", "Insurance", "Repairs and consumables", "Administrative overhead",
  ],
  [
    "Production wages", "Raw materials", "Utilities", "Plant lease",
    "Site rent", "Insurance and licences", "Maintenance", "Office and professional fees",
  ],
  [
    "Operations payroll", "Agency staff", "Fuel", "Fleet leasing",
    "Depot rent", "Insurance", "Waste disposal", "General administration",
  ],
];

const money = (n) => n.toLocaleString("en-US");

/**
 * Share bands, in the order the lines are printed. Drawing weights uniformly
 * produced ledgers where insurance cost twice the payroll, and the first thing
 * a reader with a finance background does with a synthetic statement is look at
 * the cost mix. So each line gets a band taken from what these lines actually
 * run at in a labour-heavy service business, and the randomness lives inside
 * the band.
 */
const REVENUE_BANDS = [
  [0.35, 0.55],
  [0.15, 0.3],
  [0.1, 0.22],
  [0.05, 0.14],
];
const EXPENSE_BANDS = [
  [0.28, 0.4], // direct payroll
  [0.05, 0.13], // subcontract or materials
  [0.06, 0.15], // fuel and energy
  [0.04, 0.09], // lease
  [0.05, 0.11], // rent
  [0.02, 0.05], // insurance
  [0.04, 0.1], // repairs and consumables
  [0.06, 0.12], // administration
];

/**
 * Split a total into parts by band, each rounded to the nearest 10. The
 * subtotal is then taken as the sum of the ROUNDED parts, never as the
 * pre-rounding target, so a clean report is exact by construction rather than
 * exact to within rounding. A reader who adds the column by hand gets the
 * printed figure to the last digit.
 */
function split(r, total, bands) {
  const w = bands.map(([lo, hi]) => uni(r, lo, hi));
  const s = w.reduce((a, b) => a + b, 0);
  return w.map((x) => Math.max(10, Math.round((total * x) / s / 10) * 10));
}

/**
 * @param {number} seed
 * @param {{ lo: number, hi: number }} skew  defect size as a fraction, e.g. 0.03-0.07
 */
export function makeReport(seed, skew = { lo: 0.03, hi: 0.07 }) {
  const r = rng(seed);
  const [company, trade, revSet, expSet] = pick(r, COMPANIES);
  const [endDate, period] = pick(r, MONTHS);
  const revLabels = REVENUE_SETS[revSet];
  const expLabels = EXPENSE_SETS[expSet];

  const revTarget = Math.round(uni(r, 400_000, 1_200_000));
  const margin = uni(r, 0.05, 0.18);
  const revLines = split(r, revTarget, REVENUE_BANDS);
  const revSum = revLines.reduce((a, b) => a + b, 0);
  const expLines = split(r, Math.round(revSum * (1 - margin)), EXPENSE_BANDS);
  const expSum = expLines.reduce((a, b) => a + b, 0);

  // Which subtotal carries the defect. Alternating between the two blocks
  // keeps the result from being a fact about one position on the page.
  const target = r() < 0.5 ? "revenue" : "expenses";
  const dir = r() < 0.5 ? 1 : -1;
  const pct = uni(r, skew.lo, skew.hi);
  const trueSum = target === "revenue" ? revSum : expSum;
  const stated = Math.round((trueSum * (1 + dir * pct)) / 10) * 10;

  const render = (statedRev, statedExp) => {
    const w = 34;
    const row = (label, n, indent = "  ") =>
      `${(indent + label).padEnd(w)}${money(n).padStart(12)}`;
    const lines = [
      company.toUpperCase(),
      `Profit and loss account for the month ended ${endDate}`,
      `Prepared from the ${trade} ledger. All figures in USD, unaudited.`,
      "",
      "Revenue",
      ...revLabels.map((l, i) => row(l, revLines[i])),
      row("Total revenue", statedRev, "  "),
      "",
      "Operating expenses",
      ...expLabels.map((l, i) => row(l, expLines[i])),
      row("Total operating expenses", statedExp, "  "),
      "",
      row("Operating profit", statedRev - statedExp, ""),
    ];
    return lines.join("\n");
  };

  const statedRev = target === "revenue" ? stated : revSum;
  const statedExp = target === "expenses" ? stated : expSum;

  return {
    seed,
    company,
    period,
    clean: {
      text: render(revSum, expSum),
      truth: { defective: false, target: null, stated: null, trueSum: null, deltaPct: 0, deltaAbs: 0 },
    },
    defective: {
      text: render(statedRev, statedExp),
      truth: {
        defective: true,
        target,
        stated,
        trueSum,
        deltaPct: (stated - trueSum) / trueSum,
        deltaAbs: stated - trueSum,
        statedLabel: target === "revenue" ? "Total revenue" : "Total operating expenses",
      },
    },
  };
}

/**
 * Independent re-derivation of every relation in a rendered report, by parsing
 * the text the model was actually shown rather than trusting the builder's own
 * bookkeeping. A generator bug that made a "clean" report unbalanced would
 * silently turn the false-alarm control into a second detection cell, so the
 * check reads the page, not the intent.
 */
export function auditRendered(text) {
  const num = (s) => Number(s.replace(/,/g, ""));
  const rows = text
    .split("\n")
    .map((l) => l.match(/^(.*?)\s{2,}(-?[\d,]+)$/))
    .filter(Boolean)
    .map((m) => ({ label: m[1].trim(), value: num(m[2]) }));
  const idxRev = rows.findIndex((x) => x.label === "Total revenue");
  const idxExp = rows.findIndex((x) => x.label === "Total operating expenses");
  const idxOp = rows.findIndex((x) => x.label === "Operating profit");
  const revSum = rows.slice(0, idxRev).reduce((a, b) => a + b.value, 0);
  const expSum = rows.slice(idxRev + 1, idxExp).reduce((a, b) => a + b.value, 0);
  return {
    rows: rows.length,
    revenueOff: rows[idxRev].value - revSum,
    expensesOff: rows[idxExp].value - expSum,
    profitOff: rows[idxOp].value - (rows[idxRev].value - rows[idxExp].value),
    statedRevenue: rows[idxRev].value,
    statedExpenses: rows[idxExp].value,
  };
}
