import fs from "node:fs";
import path from "node:path";
import { performance } from "node:perf_hooks";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const DEFAULT_BASE_URL = "https://www.tennisfrens.com";
const baseUrl = (
  readArg("--base-url") ||
  process.env.PUBLIC_AUDIT_BASE_URL ||
  DEFAULT_BASE_URL
).replace(/\/$/, "");

const samples = [
  { label: "home", path: "/", maxHtmlBytes: 140_000 },
  { label: "ntrp utility", path: "/utility/ntrp-test", maxHtmlBytes: 100_000 },
  { label: "string tension", path: "/utility/string-tension", maxHtmlBytes: 100_000 },
  { label: "rules quiz", path: "/tennis-rules-quiz", maxHtmlBytes: 110_000 },
  {
    label: "blog sample",
    path: "/blog/tennis-hybrid-string-setup",
    maxHtmlBytes: 160_000,
  },
  {
    label: "player sample",
    path: "/players/arthur-rinderknech",
    maxHtmlBytes: 140_000,
  },
  { label: "sitemap", path: "/sitemap.xml", maxHtmlBytes: 260_000 },
  { label: "rss", path: "/rss.xml", maxHtmlBytes: 80_000 },
];

const psiSamples = [
  { label: "home", url: `${baseUrl}/`, strategy: "mobile" },
  { label: "ntrp utility", url: `${baseUrl}/utility/ntrp-test`, strategy: "mobile" },
  {
    label: "blog sample",
    url: `${baseUrl}/blog/tennis-hybrid-string-setup`,
    strategy: "mobile",
  },
];

const findings = [];
const warnings = [];

function readArg(flag) {
  const args = process.argv.slice(2);
  const index = args.indexOf(flag);
  return index >= 0 ? args[index + 1] : "";
}

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function warn(condition, warning) {
  if (condition) warnings.push(warning);
}

async function fetchTimed(sample) {
  const url = `${baseUrl}${sample.path}`;
  const start = performance.now();
  const response = await fetch(url, { redirect: "manual" });
  const text = await response.text();
  const durationMs = performance.now() - start;
  const bytes = Buffer.byteLength(text);
  const contentType = response.headers.get("content-type") || "";
  const cacheControl = response.headers.get("cache-control") || "";

  assert(response.status === 200, {
    label: sample.label,
    path: sample.path,
    issue: "unexpected status",
    status: response.status,
    location: response.headers.get("location"),
  });

  warn(durationMs > 2500, {
    label: sample.label,
    path: sample.path,
    issue: "slow live response",
    durationMs: Number(durationMs.toFixed(0)),
  });

  warn(bytes > sample.maxHtmlBytes, {
    label: sample.label,
    path: sample.path,
    issue: "response size above guardrail",
    bytes,
    maxHtmlBytes: sample.maxHtmlBytes,
  });

  if (["/sitemap.xml", "/rss.xml"].includes(sample.path)) {
    warn(!cacheControl, {
      label: sample.label,
      path: sample.path,
      issue: "cache-control header missing",
    });
  }

  return {
    label: sample.label,
    path: sample.path,
    status: response.status,
    durationMs: Number(durationMs.toFixed(0)),
    bytes,
    contentType,
    cacheControl,
  };
}

async function runPsi(sample) {
  const apiUrl = new URL("https://www.googleapis.com/pagespeedonline/v5/runPagespeed");
  apiUrl.searchParams.set("url", sample.url);
  apiUrl.searchParams.set("strategy", sample.strategy);
  apiUrl.searchParams.set("category", "performance");

  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!response.ok) {
    const message = data.error?.message || "PageSpeed request failed";
    const quotaExceeded = response.status === 429 || /quota/i.test(message);
    warnings.push({
      label: sample.label,
      tool: "pagespeed",
      status: quotaExceeded ? "skipped_quota" : "skipped_error",
      strategy: sample.strategy,
      message,
    });
    return null;
  }

  const lighthouse = data.lighthouseResult;
  const performanceScore = lighthouse?.categories?.performance?.score;
  const audits = lighthouse?.audits || {};
  const result = {
    label: sample.label,
    url: sample.url,
    strategy: sample.strategy,
    performanceScore:
      typeof performanceScore === "number"
        ? Number((performanceScore * 100).toFixed(0))
        : null,
    firstContentfulPaintMs: audits["first-contentful-paint"]?.numericValue ?? null,
    largestContentfulPaintMs: audits["largest-contentful-paint"]?.numericValue ?? null,
    cumulativeLayoutShift: audits["cumulative-layout-shift"]?.numericValue ?? null,
    totalBlockingTimeMs: audits["total-blocking-time"]?.numericValue ?? null,
  };

  warn(result.performanceScore !== null && result.performanceScore < 70, {
    label: sample.label,
    tool: "pagespeed",
    issue: "low mobile performance score",
    performanceScore: result.performanceScore,
  });
  warn(result.largestContentfulPaintMs !== null && result.largestContentfulPaintMs > 4000, {
    label: sample.label,
    tool: "pagespeed",
    issue: "LCP above mobile guardrail",
    largestContentfulPaintMs: Number(result.largestContentfulPaintMs.toFixed(0)),
  });
  warn(result.cumulativeLayoutShift !== null && result.cumulativeLayoutShift > 0.1, {
    label: sample.label,
    tool: "pagespeed",
    issue: "CLS above guardrail",
    cumulativeLayoutShift: Number(result.cumulativeLayoutShift.toFixed(3)),
  });

  return result;
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const liveResults = [];
for (const sample of samples) {
  liveResults.push(await fetchTimed(sample));
}

const psiResults = [];
for (const sample of psiSamples) {
  const result = await runPsi(sample);
  if (result) psiResults.push(result);
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  baseUrl,
  liveResults,
  psi: {
    attempted: psiSamples.length,
    completed: psiResults.length,
    results: psiResults,
  },
  warnings,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "performance-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
