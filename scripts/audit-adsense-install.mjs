#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_MODE = process.argv.includes("--output");
const REPORT_DIR = path.join(ROOT, "docs", "reports");
const CAFE_URL = "https://cafe.naver.com/homecookie";
const GA_ID = "G-W1K51D8SBX";
const ADSENSE_CLIENT = "ca-pub-3050601904412736";
const ADS_TXT_LINE = "google.com, pub-3050601904412736, DIRECT, f08c47fec0942fa0";
const findings = [];

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function read(relativePath) {
  return fs.readFileSync(path.join(ROOT, relativePath), "utf8");
}

function findOutputPage(...segments) {
  const directoryPage = path.join(ROOT, "out", ...segments, "index.html");
  const flatPage = path.join(ROOT, "out", `${path.join(...segments)}.html`);
  if (fs.existsSync(directoryPage)) return directoryPage;
  if (fs.existsSync(flatPage)) return flatPage;
  return "";
}

function assertExactAdsTxt(relativePath, scope) {
  const filePath = path.join(ROOT, relativePath);
  assert(fs.existsSync(filePath), { scope, issue: "ads.txt missing" });
  if (!fs.existsSync(filePath)) return;
  assert(fs.readFileSync(filePath, "utf8").trim() === ADS_TXT_LINE, {
    scope,
    issue: "ads.txt publisher binding is not exact",
  });
}

fs.mkdirSync(REPORT_DIR, { recursive: true });

if (OUTPUT_MODE) {
  assert(fs.existsSync(path.join(ROOT, "out")), {
    scope: "static output",
    issue: "out directory missing; run the production build first",
  });
  assertExactAdsTxt("out/ads.txt", "static output");

  const homePath = findOutputPage();
  const articlePath = findOutputPage("blog", "t09-20-minute-wall-practice-log");
  for (const [label, file] of [["home", homePath], ["wall-practice article", articlePath]]) {
    assert(Boolean(file), { scope: "static output", issue: `${label} HTML missing` });
    if (file) {
      const html = fs.readFileSync(file, "utf8");
      assert(html.includes(ADSENSE_CLIENT) && html.includes("adsbygoogle.js"), {
        scope: "static output",
        issue: `${label} AdSense loader missing`,
      });
      assert(html.includes(CAFE_URL), { scope: "static output", issue: `${label} cafe destination missing` });
    }
  }
} else {
  assertExactAdsTxt("public/ads.txt", "public source");
  const layout = read("src/app/layout.tsx");
  const analytics = read("src/lib/analytics.ts");
  const cafeLink = read("src/components/NaverCafeLink.tsx");
  const nextConfig = read("next.config.ts");

  assert(layout.includes('id="adsense-loader"') && layout.includes(ADSENSE_CLIENT), {
    scope: "runtime source",
    issue: "AdSense loader or account binding missing",
  });
  assert((layout.match(/<CafeBanner \/>/g) || []).length === 1, {
    scope: "conversion",
    issue: "sitewide cafe CTA must render exactly once",
  });
  assert(layout.includes("<GAProvider") && layout.includes("<Tracking") && layout.includes(GA_ID), {
    scope: "measurement",
    issue: "GA4 providers or production measurement ID missing",
  });
  assert(analytics.includes('NAVER_CAFE_VISIT: "naver_cafe_visit"'), {
    scope: "conversion",
    issue: "cafe conversion event missing",
  });
  assert(cafeLink.includes(CAFE_URL) && cafeLink.includes("destination_url"), {
    scope: "conversion",
    issue: "tracked cafe destination missing",
  });
  for (const origin of [
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://analytics.google.com",
    "https://pagead2.googlesyndication.com",
    "https://googleads.g.doubleclick.net",
    "https://tpc.googlesyndication.com",
  ]) {
    assert(nextConfig.includes(origin), { scope: "CSP", issue: "required origin missing", origin });
  }
}

const report = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  mode: OUTPUT_MODE ? "static-output" : "source",
  adsenseClient: ADSENSE_CLIENT,
  adsTxtLine: ADS_TXT_LINE,
  primaryConversion: "naver_cafe_visit",
  destination: CAFE_URL,
  findings,
};
fs.writeFileSync(
  path.join(REPORT_DIR, OUTPUT_MODE ? "adsense-install-output-audit-latest.json" : "adsense-install-source-audit-latest.json"),
  `${JSON.stringify(report, null, 2)}\n`,
  "utf8",
);
if (findings.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}
console.log(JSON.stringify(report));
