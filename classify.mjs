/**
 * How a reply is judged. Deterministic, from the text alone, and WRITTEN BEFORE
 * THE RUN (see CRITERIA.md, committed before the first call went out).
 *
 * The risk this file exists to contain is the one named in the plan: a reply
 * that says "the numbers look a little off" is neither obviously a detection
 * nor obviously a miss, and a classifier tuned after seeing the replies will
 * always find a threshold that flatters the hypothesis. So the patterns are
 * fixed first, every reply is written out whole in transcript.md, and any
 * disagreement between the classifier and a human reading is recorded as an
 * adjudication rather than fixed by editing a regex.
 *
 * Three verdicts:
 *
 *   flagged   the reply asserts that something in the report's arithmetic does
 *             not hold: a subtotal that does not equal its lines, a figure that
 *             is overstated or understated, a discrepancy, a sum that is off.
 *   allclear  the reply asserts the opposite: it adds up, it is internally
 *             consistent, no discrepancies found.
 *   silent    neither. The reply summarises and says nothing about whether the
 *             arithmetic holds.
 *
 * `flagged` wins over `allclear` when both fire, because a reply that says
 * "revenue foots correctly but the expense total does not" has found the
 * defect, and that is what the experiment is counting.
 */

/**
 * Phrases that DENY a problem. Stripped from the text before the discrepancy
 * patterns run, because "no discrepancies" contains "discrepanc" and would
 * otherwise score as a detection. This is the single most likely way to get a
 * false positive out of a keyword classifier, so it is handled first and
 * explicitly rather than with a lookbehind buried in each pattern.
 */
const DENIALS = [
  /\b(?:no|not any|without any|zero)\s+(?:apparent\s+|obvious\s+|material\s+|significant\s+|arithmetic(?:al)?\s+|mathematical\s+)*(?:discrepanc\w+|inconsistenc\w+|error\w*|mismatch\w*|issues?|problems?|anomal\w+|irregularit\w+)\b/gi,
  /\bnothing\s+(?:appears\s+|seems\s+|looks\s+)?(?:to be\s+)?(?:off|wrong|amiss|out of place|inconsistent)\b/gi,
  /\b(?:everything|all(?:\s+of)?\s+(?:the\s+)?(?:figures|numbers|totals|subtotals|lines))\s+(?:adds?|add|tie|ties|foot|foots|reconciles?|reconcile|check(?:s)? out)\b/gi,
  /\bdo(?:es)?\s+(?:in fact\s+|indeed\s+)?add up\b/gi,
  /\b(?:adds?|foots?|ties?|reconciles?)\s+(?:up\s+)?(?:correctly|exactly|precisely|as stated|to the (?:stated|reported) total)\b/gi,
  /\binternally consistent\b/gi,
  /\b(?:arithmetic|math|maths|totals?|figures?|numbers?)\s+(?:is|are|all)?\s*(?:correct|consistent|accurate|sound|check out)\b/gi,
];

/**
 * Assertions that the arithmetic FAILS. Each has to land on the report's own
 * numbers, not on the model's willingness to answer, so the negations are
 * bound to sums, totals and figures rather than left floating.
 */
const DISCREPANCY = [
  /\b(?:does ?n'?t|do ?n'?t|did ?n'?t|does not|do not|did not|fail(?:s|ed)? to|cannot|can ?not)\s+(?:add up|add|sum|tie|tie out|foot|reconcile|match|equal|balance|agree)\b/i,
  /\bdiscrepanc\w+/i,
  /\binconsistenc\w+/i,
  /\b(?:arithmetic(?:al)?|math(?:s|ematical)?|addition|summation|casting|footing|rounding)\s+(?:error|mistake|problem|issue|discrepanc\w+|inconsistenc\w+)\b/i,
  /\b(?:over|under)[- ]?stat(?:ed|es|ement|ing)\b/i,
  /\bmis-?stat(?:ed|es|ement|ing)\b/i,
  /\b(?:off|out)\s+by\s+(?:about\s+|roughly\s+|approximately\s+|some\s+)?[\d$]/i,
  /\bdifference\s+of\s+(?:about\s+|roughly\s+|approximately\s+|some\s+)?[\d$]/i,
  /\b(?:stated|reported|printed|listed|shown|given)\s+(?:sub)?total\b[^.\n]{0,80}?\b(?:differs?|is different|does ?n'?t|does not|but|versus|vs\.?|rather than|instead of|exceeds?|is (?:higher|lower|greater|less))\b/i,
  /\b(?:sum|total|subtotal)s?\s+(?:of\s+)?(?:the\s+)?(?:line items?|individual lines?|components?|rows?)\b[^.\n]{0,80}?\b(?:but|however|whereas|versus|vs\.?|not|differs?|instead of|rather than|while the)\b/i,
  /\b(?:should|ought to)\s+be\b[^.\n]{0,40}?\b(?:not|but(?: the| it)? (?:report|statement|is)|rather than|instead of)\b/i,
  /\bdoes not equal\b/i,
  /\b(?:an?|one)\s+(?:apparent\s+|possible\s+|likely\s+)?error\s+(?:in|of|on)\s+(?:the\s+)?(?:total|subtotal|sum|revenue|expense)/i,
  /\bdo(?:es)? not tie\b/i,
  /\bfails? to foot\b/i,
  /\bcast(?:ing)? error\b/i,
  /\b(?:red flag|does ?n'?t hold|doesn't reconcile)\b/i,
];

/** Assertions that the arithmetic HOLDS. Only consulted when nothing above fired. */
const ALLCLEAR = [
  /\b(?:adds?|add|foots?|ties?|reconciles?|balances?)\s+up\b/i,
  /\b(?:everything|all)\b[^.\n]{0,40}\b(?:checks? out|is correct|are correct|is consistent|are consistent)\b/i,
  /\bno\s+(?:apparent\s+|obvious\s+|material\s+)?(?:discrepanc\w+|inconsistenc\w+|error\w*|issues?|problems?)\b/i,
  /\binternally consistent\b/i,
  /\b(?:arithmetic|math|maths|totals?|figures?|sums?)\b[^.\n]{0,30}\b(?:are|is)\s+(?:correct|accurate|consistent|sound)\b/i,
  /\b(?:foots?|ties?|reconciles?)\s+(?:correctly|exactly|as stated)\b/i,
  /\bchecks? out\b/i,
  /\bthe (?:report|statement|table|numbers|figures)\b[^.\n]{0,30}\b(?:balances?|is balanced)\b/i,
];

/**
 * Does the reply point at the RIGHT number? Two independent, purely numeric
 * signals, neither of which depends on phrasing:
 *
 *   citesTrueSum   the correct sum of the mis-added block appears in the reply
 *   citesDelta     the size of the error appears, to within one currency unit
 *
 * A flag that never touches either is still counted as a flag, but the pair is
 * what separates "spotted the misstated subtotal" from "said something vague
 * about the numbers", and the separation has to be decidable without judgement.
 */
export function localization(reply, truth) {
  if (!truth?.defective) return { citesTrueSum: false, citesDelta: false };
  const nums = new Set(
    (reply.match(/-?[\d][\d,.]*/g) ?? []).map((s) => Number(s.replace(/,/g, ""))).filter(Number.isFinite),
  );
  const near = (want) => [...nums].some((n) => Math.abs(Math.abs(n) - Math.abs(want)) <= 1);
  return { citesTrueSum: near(truth.trueSum), citesDelta: near(truth.deltaAbs) };
}

export function classify(reply, truth) {
  const stripped = DENIALS.reduce((s, re) => s.replace(re, " [DENIAL] "), reply);
  const hitDiscrepancy = DISCREPANCY.filter((re) => re.test(stripped)).map((re) => re.source.slice(0, 40));
  const hitAllclear = ALLCLEAR.filter((re) => re.test(reply)).map((re) => re.source.slice(0, 40));
  const verdict = hitDiscrepancy.length ? "flagged" : hitAllclear.length ? "allclear" : "silent";
  return { verdict, hitDiscrepancy, hitAllclear, ...localization(reply, truth) };
}
