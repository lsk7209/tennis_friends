import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const CANONICAL_HOST = "https://www.tennisfrens.com";
const NON_WWW_HOST = `https://${"tennisfrens.com"}`;
const MAX_REPORT_AGE_DAYS = 7;

const requiredGscCsv = [
  "gsc-pages",
  "gsc-queries",
  "gsc-page-query",
  "gsc-device",
];
const requiredGa4Csv = [
  "ga4-pages",
  "ga4-source",
  "ga4-device",
  "ga4-country",
];

const findings = [];
const warnings = [];
const mitigations = [];

function readJson(file) {
  const fullPath = path.join(REPORTS_DIR, file);
  if (!fs.existsSync(fullPath)) {
    findings.push({ file, issue: "required report missing" });
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  } catch (error) {
    findings.push({
      file,
      issue: "invalid JSON",
      message: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}

function readProjectFile(file) {
  return fs.readFileSync(path.join(ROOT, file), "utf8");
}

function parsePeriodEnd(period) {
  const match = String(period || "").match(/~\s*(\d{4}-\d{2}-\d{2})$/);
  if (!match) return null;
  return new Date(`${match[1]}T00:00:00Z`);
}

function ageDays(date) {
  return (Date.now() - date.getTime()) / 86_400_000;
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function warn(condition, warning) {
  if (condition) warnings.push(warning);
}

function assertRedirectMitigations() {
  const nextConfig = readProjectFile("next.config.ts");

  const hasNonWwwRedirect =
    nextConfig.includes('has: [{ type: "host", value: "tennisfrens.com" }]') &&
    nextConfig.includes('destination: "https://www.tennisfrens.com/:path*"') &&
    nextConfig.includes("permanent: true");
  assert(hasNonWwwRedirect, {
    report: "gsc",
    issue: "non-www canonical redirect mitigation missing",
    expectedHost: CANONICAL_HOST,
  });

  const hasArthurTypoRedirect =
    nextConfig.includes('source: "/players/arthur-landercknech"') &&
    nextConfig.includes('destination: "/players/arthur-rinderknech"') &&
    nextConfig.includes("permanent: true");
  assert(hasArthurTypoRedirect, {
    report: "gsc",
    issue: "historical typo slug redirect mitigation missing",
    expectedPage: `${CANONICAL_HOST}/players/arthur-rinderknech`,
  });

  mitigations.push(
    {
      issue: "historical non-www URLs still appear in GSC samples",
      status: hasNonWwwRedirect ? "covered" : "missing",
      source: "next.config.ts redirects",
    },
    {
      issue: "historical typo URL still appears in GSC samples",
      status: hasArthurTypoRedirect ? "covered" : "missing",
      source: "next.config.ts redirects",
    },
  );
}

function latestDatedCsv(prefix) {
  if (!fs.existsSync(REPORTS_DIR)) return null;
  const pattern = new RegExp(`^${prefix}-(\\d{4}-\\d{2}-\\d{2})\\.csv$`);
  return fs
    .readdirSync(REPORTS_DIR)
    .map((name) => ({ name, match: name.match(pattern) }))
    .filter((item) => item.match)
    .sort((a, b) => b.match[1].localeCompare(a.match[1]))[0]?.name;
}

function assertFreshSummary(name, summary, maxLagDays) {
  const endDate = parsePeriodEnd(summary?.period);
  assert(Boolean(endDate), {
    report: name,
    issue: "period end date missing or invalid",
    period: summary?.period,
  });

  if (!endDate) return null;

  const lag = ageDays(endDate);
  assert(lag <= maxLagDays, {
    report: name,
    issue: "report period is stale",
    period: summary.period,
    lagDays: Number(lag.toFixed(1)),
    maxLagDays,
  });

  return endDate;
}

function assertCsvSet(prefixes) {
  for (const prefix of prefixes) {
    const csv = latestDatedCsv(prefix);
    assert(Boolean(csv), { report: prefix, issue: "dated CSV report missing" });
    if (!csv) continue;

    const fullPath = path.join(REPORTS_DIR, csv);
    const content = fs.readFileSync(fullPath, "utf8");
    assert(content.includes("\n"), {
      report: prefix,
      file: csv,
      issue: "CSV has no data rows",
    });
    assert(fs.statSync(fullPath).size > 50, {
      report: prefix,
      file: csv,
      issue: "CSV file too small",
    });
  }
}

function hasMojibake(value) {
  return /[\uFFFD]|\?\?\?|\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]|[\uF900-\uFAFF]|[\u4E00-\u9FFF]{2,}/.test(
    String(value || ""),
  );
}

function auditGsc(summary) {
  if (!summary) return;

  assertFreshSummary("gsc-summary-latest.json", summary, MAX_REPORT_AGE_DAYS);
  assert(summary.totalPages > 0, {
    report: "gsc",
    issue: "totalPages must be positive",
    actual: summary.totalPages,
  });
  assert(summary.totalQueries > 0, {
    report: "gsc",
    issue: "totalQueries must be positive",
    actual: summary.totalQueries,
  });
  assert(summary.totalImpressions > 0, {
    report: "gsc",
    issue: "totalImpressions must be positive",
    actual: summary.totalImpressions,
  });
  assert(Array.isArray(summary.deviceBreakdown) && summary.deviceBreakdown.length >= 2, {
    report: "gsc",
    issue: "device breakdown missing",
  });
  assert(Array.isArray(summary.top10ByClicks) && summary.top10ByClicks.length > 0, {
    report: "gsc",
    issue: "top10ByClicks missing",
  });

  const gscPages = [
    ...(summary.top10ByClicks || []).map((item) => item.page),
    ...(summary.top10ByImpressionsLowCtr || []).map((item) => item.page),
  ].filter(Boolean);
  const nonCanonicalPages = [...new Set(gscPages.filter((url) => url.startsWith(NON_WWW_HOST)))];
  const typoPages = [...new Set(gscPages.filter((url) => url.includes("arthur-landercknech")))];

  warn(nonCanonicalPages.length > 0, {
    report: "gsc",
    issue: "historical non-www URLs still appear in GSC samples",
    pages: nonCanonicalPages,
    expectedHost: CANONICAL_HOST,
  });
  warn(typoPages.length > 0, {
    report: "gsc",
    issue: "historical typo URL still appears in GSC samples",
    pages: typoPages,
    expectedPage: `${CANONICAL_HOST}/players/arthur-rinderknech`,
  });
}

function auditGa4(summary) {
  if (!summary) return;

  assertFreshSummary("ga4-summary-latest.json", summary, MAX_REPORT_AGE_DAYS);
  assert(summary.propertyId, {
    report: "ga4",
    issue: "propertyId missing",
  });
  assert(summary.totalSessions > 0, {
    report: "ga4",
    issue: "totalSessions must be positive",
    actual: summary.totalSessions,
  });
  assert(summary.totalUsers > 0, {
    report: "ga4",
    issue: "totalUsers must be positive",
    actual: summary.totalUsers,
  });
  assert(Array.isArray(summary.deviceBreakdown) && summary.deviceBreakdown.length >= 2, {
    report: "ga4",
    issue: "device breakdown missing",
  });
  assert(Array.isArray(summary.topSources) && summary.topSources.length > 0, {
    report: "ga4",
    issue: "topSources missing",
  });
  assert(Array.isArray(summary.top10ByViews) && summary.top10ByViews.length > 0, {
    report: "ga4",
    issue: "top10ByViews missing",
  });

  const mojibakeTitles = (summary.top10ByViews || [])
    .filter((item) => hasMojibake(item.title))
    .map((item) => ({ path: item.path, title: item.title }));

  warn(mojibakeTitles.length > 0, {
    report: "ga4",
    issue: "GA4 collected page titles include historical mojibake",
    pages: mojibakeTitles,
  });
}

const gscSummary = readJson("gsc-summary-latest.json");
const ga4Summary = readJson("ga4-summary-latest.json");

auditGsc(gscSummary);
auditGa4(ga4Summary);
assertCsvSet(requiredGscCsv);
assertCsvSet(requiredGa4Csv);
assertRedirectMitigations();

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  reportsDir: path.relative(ROOT, REPORTS_DIR),
  maxReportAgeDays: MAX_REPORT_AGE_DAYS,
  gsc: gscSummary
    ? {
        period: gscSummary.period,
        totalPages: gscSummary.totalPages,
        totalQueries: gscSummary.totalQueries,
        totalClicks: gscSummary.totalClicks,
        totalImpressions: gscSummary.totalImpressions,
        avgCtrPct: gscSummary.avgCtrPct,
        avgPosition: gscSummary.avgPosition,
      }
    : null,
  ga4: ga4Summary
    ? {
        propertyId: ga4Summary.propertyId,
        period: ga4Summary.period,
        totalSessions: ga4Summary.totalSessions,
        totalUsers: ga4Summary.totalUsers,
        totalPages: ga4Summary.totalPages,
      }
    : null,
  mitigations,
  warnings,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "analytics-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
