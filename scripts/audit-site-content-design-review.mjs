#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const REPORT_DATE = new Date().toISOString().slice(0, 10);

const REQUIRED_REPORTS = [
  "performance-config-audit-latest.json",
  "sitemap-coverage-audit-latest.json",
  "search-automation-audit-latest.json",
  "analytics-audit-latest.json",
  "ads-analytics-source-audit-latest.json",
  "active-content-encoding-audit-latest.json",
  "internal-links-audit-latest.json",
  "article-experience-audit-latest.json",
  "blog-index-experience-audit-latest.json",
  "player-search-seo-audit-latest.json",
  "blog-schedule-audit-latest.json",
  "content-link-coverage-audit-latest.json",
  "generated-content-quality-audit-latest.json",
  "content-opportunities-latest.json",
  "utility-experience-audit-latest.json",
  "quiz-experience-source-audit-latest.json",
  "visual-layout-risk-audit-latest.json",
];

const INACTIVE_CONTENT_RISKS = [
  "src/data/blog-content/part15-optimized.ts",
  "src/data/blog-posts-part15-overrides.js",
];

function readJsonReport(name) {
  const filePath = path.join(REPORTS_DIR, name);
  if (!fs.existsSync(filePath)) {
    return { name, status: "missing", findings: [{ issue: "missing_report" }] };
  }

  return {
    name,
    ...JSON.parse(fs.readFileSync(filePath, "utf8")),
  };
}

function relativeExists(relativePath) {
  return fs.existsSync(path.join(ROOT, relativePath));
}

function scanInactiveRisk(relativePath) {
  const filePath = path.join(ROOT, relativePath);
  if (!fs.existsSync(filePath)) {
    return { path: relativePath, exists: false, risk: "absent" };
  }

  const content = fs.readFileSync(filePath, "utf8");
  const suspicious = [
    /\uFFFD/,
    /\?\?\?/,
    /[\u4E00-\u9FFF]{2,}[\uAC00-\uD7AF]{1,}/,
  ].some((pattern) => pattern.test(content));

  return {
    path: relativePath,
    exists: true,
    importedByActiveIndex: false,
    risk: suspicious ? "quarantine_candidate" : "watch",
  };
}

function reportStatus(report) {
  if (report.status === "ok") return "ok";
  if (Array.isArray(report.findings) && report.findings.length === 0) return "ok";
  return report.status ?? "unknown";
}

function numberValue(value, fallback = 0) {
  return Number.isFinite(value) ? value : fallback;
}

function analyticsSummary(report) {
  return {
    status: report.status,
    gsc: report.gsc,
    ga4: report.ga4,
    warnings: Array.isArray(report.warnings) ? report.warnings.length : 0,
    mitigations: Array.isArray(report.mitigations)
      ? report.mitigations.map((item) => ({
          issue: item.issue,
          status: item.status,
          source: item.source,
        }))
      : [],
    findings: report.findings ?? [],
  };
}

function reportSummary(report, fields) {
  return Object.fromEntries(
    ["status", "generatedAt", ...fields]
      .filter((field) => Object.hasOwn(report, field))
      .map((field) => [field, report[field]]),
  );
}

function renderMarkdown(review) {
  const analytics = review.evidence.analytics;
  const sitemap = review.evidence.sitemap;
  const generated = review.evidence.generatedContent;
  const links = review.evidence.contentLinks;
  const opportunities = review.evidence.contentOpportunities;

  const backlogRows = review.priorityBacklog
    .map(
      (item) =>
        `| ${item.tier} | ${item.area} | ${item.action} | ${item.status} |`,
    )
    .join("\n");

  const watchRows = review.watchItems
    .map((item) => `| ${item.path} | ${item.risk} | ${item.importedByActiveIndex} |`)
    .join("\n");

  return `# Site, Content, Design Optimization Review | ${REPORT_DATE}

## Executive Snapshot

- Status: ${review.status}
- Required report inputs: ${review.requiredReports.ok}/${review.requiredReports.total} ok
- Sitemap coverage: ${numberValue(sitemap.entries)} URLs, ${numberValue(sitemap.blogs)} blogs, ${numberValue(sitemap.utilities)} utilities, ${numberValue(sitemap.players)} players
- GSC: ${numberValue(analytics.gsc?.totalClicks)} clicks, ${numberValue(analytics.gsc?.totalImpressions)} impressions, ${numberValue(analytics.gsc?.avgCtrPct)}% CTR, average position ${numberValue(analytics.gsc?.avgPosition)}
- GA4: ${numberValue(analytics.ga4?.totalSessions)} sessions, ${numberValue(analytics.ga4?.totalUsers)} users
- Content: ${numberValue(links.effectivePosts)} effective posts with ${numberValue(links.strongBodyLinkCoveragePct)}% strong body-link coverage
- GSC opportunities: ${numberValue(opportunities.summary?.total)} total, ${numberValue(opportunities.summary?.players)} player pages, ${numberValue(opportunities.summary?.blogs)} blog pages
- Generated drafts: ${numberValue(generated.manifests?.length)} manifests, min quality requirement ${numberValue(generated.minRequiredScore)}+

## Optimization Backlog

| Tier | Area | Action | Status |
|---|---|---|---|
${backlogRows}

## Watch Items

These are not active publish-path failures. They are tracked to avoid future re-import or accidental reuse.

| Path | Risk | Imported by active index |
|---|---|---|
${watchRows || "| none | none | false |"}

## Stop Conditions

- Do not rewrite article titles or bodies in this review pass.
- Do not submit production GSC, IndexNow, or AdSense changes from the audit script.
- Keep local verification green before treating the review as current.
`;
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const reports = REQUIRED_REPORTS.map(readJsonReport);
const failedReports = reports.filter((report) => reportStatus(report) !== "ok");
const reportsByName = Object.fromEntries(
  reports.map((report) => [report.name, report]),
);

const review = {
  status: failedReports.length === 0 ? "ok" : "needs_attention",
  generatedAt: new Date().toISOString(),
  requiredReports: {
    total: REQUIRED_REPORTS.length,
    ok: reports.length - failedReports.length,
    failed: failedReports.map((report) => ({
      name: report.name,
      status: report.status,
      findings: report.findings ?? [],
    })),
  },
  evidence: {
    designSourceOfTruth: {
      path: "DESIGN.md",
      exists: relativeExists("DESIGN.md"),
    },
    analytics: analyticsSummary(reportsByName["analytics-audit-latest.json"]),
    sitemap: reportSummary(reportsByName["sitemap-coverage-audit-latest.json"], [
      "entries",
      "blogs",
      "utilities",
      "players",
      "findings",
    ]),
    contentLinks: reportSummary(
      reportsByName["content-link-coverage-audit-latest.json"],
      [
        "effectivePosts",
        "postsWithBodyContent",
        "strongBodyLinkCoveragePct",
        "warnings",
      ],
    ),
    generatedContent: reportSummary(
      reportsByName["generated-content-quality-audit-latest.json"],
      ["minRequiredScore", "minRequiredChars", "expectedIntervalHours", "manifests"],
    ),
    contentOpportunities: reportSummary(
      reportsByName["content-opportunities-latest.json"],
      ["summary", "criteria", "findings"],
    ),
  },
  priorityBacklog: [
    {
      tier: "T1",
      area: "Design",
      action: "Maintain DESIGN.md as the canonical UI, content, and layout decision source.",
      status: relativeExists("DESIGN.md") ? "done" : "pending",
    },
    {
      tier: "T1",
      area: "Content",
      action: "Keep inactive part15 content files quarantined from active imports and future title/body batches.",
      status: "watch",
    },
    {
      tier: "T2",
      area: "Blog UX",
      action: "Evaluate server-rendered first-page blog index with a smaller client filter island.",
      status: "candidate",
    },
    {
      tier: "T2",
      area: "Article UX",
      action: "Use future screenshot QA to tune article width, ad spacing, table overflow, and related-link density.",
      status: "candidate",
    },
    {
      tier: "T3",
      area: "Editorial SEO",
      action: "Use GSC query/page data for human-like title, subtitle, FAQ, and internal-link rewrite briefs only.",
      status: "handoff_required",
    },
  ],
  watchItems: INACTIVE_CONTENT_RISKS.map(scanInactiveRisk),
};

const jsonPath = path.join(REPORTS_DIR, "site-content-design-review-latest.json");
const datedJsonPath = path.join(
  REPORTS_DIR,
  `site-content-design-review-${REPORT_DATE}.json`,
);
const mdPath = path.join(REPORTS_DIR, "site-content-design-review-latest.md");
const datedMdPath = path.join(
  REPORTS_DIR,
  `site-content-design-review-${REPORT_DATE}.md`,
);

const json = JSON.stringify(review, null, 2);
const markdown = renderMarkdown(review);

fs.writeFileSync(jsonPath, json, "utf8");
fs.writeFileSync(datedJsonPath, json, "utf8");
fs.writeFileSync(mdPath, markdown, "utf8");
fs.writeFileSync(datedMdPath, markdown, "utf8");

if (review.status !== "ok") {
  console.error(JSON.stringify(review.requiredReports.failed, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ status: review.status, report: jsonPath }));
