#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const REPORT_DIR = join(ROOT, "docs", "reports");
const REPORT_DATE = new Date().toISOString().slice(0, 10);
const MIN_SCORE = 90;
const MIN_CHARS = 3500;
const EXPECTED_INTERVAL_HOURS = 5;

const MANIFESTS = [
  "out/article-writer/tennisfrens-300/manifest.json",
  "out/article-writer/tennisfrens-part12/manifest.json",
  "out/article-writer/tennisfrens-title-100-2026-06-01/manifest.json",
];

const QUALITY_REPORTS = [
  "out/article-writer/tennisfrens-part12/quality-report.json",
  "out/article-writer/tennisfrens-title-100-2026-06-01/quality-report.json",
];

function readJson(relativePath) {
  const filePath = join(ROOT, relativePath);
  if (!existsSync(filePath)) return null;
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function hoursBetween(a, b) {
  return (Date.parse(b) - Date.parse(a)) / (1000 * 60 * 60);
}

function scheduleIntervals(rows) {
  const scheduled = rows
    .map((row) => row.scheduledAt)
    .filter(Boolean)
    .sort((a, b) => Date.parse(a) - Date.parse(b));

  return scheduled.slice(1).map((value, index) =>
    Number(hoursBetween(scheduled[index], value).toFixed(4)),
  );
}

function auditManifest(relativePath) {
  const manifest = readJson(relativePath);
  const findings = [];
  if (!manifest) {
    return {
      path: relativePath,
      status: "missing",
      total: 0,
      findings: [{ issue: "manifest_missing", path: relativePath }],
    };
  }

  const rows = manifest.articles ?? manifest.rows ?? [];
  const scores = rows
    .map((row) => row.quality_score ?? row.score)
    .filter((score) => typeof score === "number");
  const charCounts = rows
    .map((row) => row.char_count)
    .filter((count) => typeof count === "number");
  const failRows = rows.filter((row) => row.verdict && row.verdict !== "PASS");
  const lowScoreRows = rows.filter((row) => {
    const score = row.quality_score ?? row.score;
    return typeof score === "number" && score < MIN_SCORE;
  });
  const thinRows = rows.filter(
    (row) => typeof row.char_count === "number" && row.char_count < MIN_CHARS,
  );
  const intervalSet = [...new Set(scheduleIntervals(rows))];

  if (rows.length === 0) {
    findings.push({ issue: "manifest_has_no_articles", path: relativePath });
  }
  if (failRows.length > 0) {
    findings.push({ issue: "non_pass_verdict", count: failRows.length });
  }
  if (lowScoreRows.length > 0) {
    findings.push({ issue: "quality_score_below_90", count: lowScoreRows.length });
  }
  if (thinRows.length > 0) {
    findings.push({ issue: "char_count_below_3500", count: thinRows.length });
  }
  if (
    rows.some((row) => row.scheduledAt) &&
    (intervalSet.length !== 1 || intervalSet[0] !== EXPECTED_INTERVAL_HOURS)
  ) {
    findings.push({
      issue: "schedule_interval_not_5_hours",
      intervalHours: intervalSet,
    });
  }

  return {
    path: relativePath,
    status: findings.length === 0 ? "ok" : "fail",
    total: rows.length,
    passCount: rows.filter((row) => row.verdict === "PASS").length,
    minScore: scores.length ? Math.min(...scores) : null,
    maxScore: scores.length ? Math.max(...scores) : null,
    minChars: charCounts.length ? Math.min(...charCounts) : null,
    maxChars: charCounts.length ? Math.max(...charCounts) : null,
    scheduledIntervals: intervalSet,
    findings,
  };
}

function auditQualityReport(relativePath) {
  const report = readJson(relativePath);
  const findings = [];
  if (!report) {
    return {
      path: relativePath,
      status: "missing",
      findings: [{ issue: "quality_report_missing", path: relativePath }],
    };
  }

  if (Array.isArray(report)) {
    const lowRows = report.filter((row) => row.score < MIN_SCORE);
    const failRows = report.filter((row) => row.verdict !== "PASS");
    const missingInternalScore = report.filter(
      (row) =>
        row.slug?.startsWith("tf-title100-") &&
        typeof row.breakdown?.internalLinkScore !== "number",
    );

    if (lowRows.length > 0) {
      findings.push({ issue: "quality_report_score_below_90", count: lowRows.length });
    }
    if (failRows.length > 0) {
      findings.push({ issue: "quality_report_non_pass", count: failRows.length });
    }
    if (missingInternalScore.length > 0) {
      findings.push({
        issue: "title100_internal_link_score_missing",
        count: missingInternalScore.length,
      });
    }

    return {
      path: relativePath,
      status: findings.length === 0 ? "ok" : "fail",
      total: report.length,
      minScore: Math.min(...report.map((row) => row.score)),
      maxScore: Math.max(...report.map((row) => row.score)),
      findings,
    };
  }

  if (typeof report.minScore === "number" && report.minScore < MIN_SCORE) {
    findings.push({ issue: "summary_min_score_below_90", minScore: report.minScore });
  }
  if (Array.isArray(report.failures) && report.failures.length > 0) {
    findings.push({ issue: "summary_has_failures", count: report.failures.length });
  }

  return {
    path: relativePath,
    status: findings.length === 0 ? "ok" : "fail",
    total: null,
    minScore: report.minScore ?? null,
    maxScore: report.maxScore ?? null,
    avgScore: report.avgScore ?? null,
    findings,
  };
}

mkdirSync(REPORT_DIR, { recursive: true });

const manifestAudits = MANIFESTS.map(auditManifest);
const qualityAudits = QUALITY_REPORTS.map(auditQualityReport);
const findings = [...manifestAudits, ...qualityAudits].flatMap((audit) =>
  audit.findings.map((finding) => ({ path: audit.path, ...finding })),
);
const summary = {
  status: findings.length === 0 ? "ok" : "fail",
  generatedAt: new Date().toISOString(),
  minRequiredScore: MIN_SCORE,
  minRequiredChars: MIN_CHARS,
  expectedIntervalHours: EXPECTED_INTERVAL_HOURS,
  manifests: manifestAudits,
  qualityReports: qualityAudits,
  findings,
};

writeFileSync(
  join(REPORT_DIR, "generated-content-quality-audit-latest.json"),
  `${JSON.stringify(summary, null, 2)}\n`,
  "utf8",
);

console.log(
  JSON.stringify(
    {
      status: summary.status,
      manifests: manifestAudits.length,
      qualityReports: qualityAudits.length,
      findings: findings.length,
      minScores: manifestAudits.map((audit) => ({
        path: audit.path,
        minScore: audit.minScore,
        minChars: audit.minChars,
      })),
    },
    null,
    2,
  ),
);

if (findings.length > 0) {
  process.exitCode = 1;
}
