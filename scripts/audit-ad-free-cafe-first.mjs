#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUTPUT_MODE = process.argv.includes("--output");
const REPORT_DIR = path.join(ROOT, "docs", "reports");
const CAFE_URL = "https://cafe.naver.com/homecookie";
const GA_ID = "G-W1K51D8SBX";
const findings = [];

const forbidden = [
  ["adsense name", /AdSense/],
  ["adsense queue", /adsbygoogle/],
  ["adsense metadata", /google-adsense/],
  ["adsense environment", /NEXT_PUBLIC_ADSENSE/],
  ["ad client attribute", /data-ad-client/],
  ["ad slot attribute", /data-ad-slot/],
  ["affiliate banner component", /CoupangAffiliateBanner/],
  ["affiliate measurement", /banner-measurement/],
  ["affiliate proxy", /banner-management/],
  ["affiliate dashboard", /multi-dashboard-one\.vercel\.app/],
  ["advertising script host", /pagead\d*\.googlesyndication\.com/],
  ["advertising frame host", /googleads\.g\.doubleclick\.net/],
];

function assert(condition, finding) {
  if (!condition) findings.push(finding);
}

function collectTextFiles(directory) {
  if (!fs.existsSync(directory)) return [];
  const extensions = new Set([".css", ".html", ".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".txt", ".xml"]);
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...collectTextFiles(absolute));
    } else if (extensions.has(path.extname(entry.name))) {
      files.push(absolute);
    }
  }

  return files;
}

function scanFiles(files, scope) {
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    for (const [issue, pattern] of forbidden) {
      if (pattern.test(source)) {
        findings.push({
          scope,
          file: path.relative(ROOT, file).replaceAll("\\", "/"),
          issue,
        });
      }
    }
  }
}

function findOutputPage(...segments) {
  const directoryPage = path.join(ROOT, "out", ...segments, "index.html");
  const flatPage = path.join(ROOT, "out", `${path.join(...segments)}.html`);
  if (fs.existsSync(directoryPage)) return directoryPage;
  if (fs.existsSync(flatPage)) return flatPage;
  return "";
}

fs.mkdirSync(REPORT_DIR, { recursive: true });

if (OUTPUT_MODE) {
  const outputDirectory = path.join(ROOT, "out");
  assert(fs.existsSync(outputDirectory), {
    scope: "static output",
    issue: "out directory missing; run the production build first",
  });

  if (fs.existsSync(outputDirectory)) {
    scanFiles(collectTextFiles(outputDirectory), "static output");
    assert(!fs.existsSync(path.join(outputDirectory, "ads.txt")), {
      scope: "static output",
      issue: "advertising seller file is still exported",
    });

    const homePath = findOutputPage();
    const articlePath = findOutputPage("blog", "t09-20-minute-wall-practice-log");
    const privacyPath = findOutputPage("privacy");
    for (const [label, file] of [
      ["home", homePath],
      ["wall-practice article", articlePath],
      ["privacy", privacyPath],
    ]) {
      assert(Boolean(file), { scope: "static output", issue: `${label} HTML missing` });
    }

    if (homePath) {
      const home = fs.readFileSync(homePath, "utf8");
      assert(home.includes(CAFE_URL), {
        scope: "static output",
        issue: "home cafe destination missing",
      });
      assert(home.includes(GA_ID), {
        scope: "static output",
        issue: "production GA4 measurement ID missing",
      });
    }

    if (articlePath) {
      const article = fs.readFileSync(articlePath, "utf8");
      assert(article.includes("article-data-table"), {
        scope: "static output",
        issue: "semantic article table missing",
      });
      assert(!/<p>\s*:?-{3,}:?\s*\|/i.test(article), {
        scope: "static output",
        issue: "raw Markdown table separator remains",
      });
      assert(article.includes("20-minute-wall-practice.webp"), {
        scope: "static output",
        issue: "wall-practice editorial image missing",
      });
      if (process.env.GITHUB_PAGES === "true") {
        assert(article.includes("/tennis_friends/images/blog/20-minute-wall-practice.webp"), {
          scope: "static output",
          issue: "wall-practice image is missing the GitHub Pages base path",
        });
      }
    }
  }
} else {
  const runtimeFiles = [
    ...collectTextFiles(path.join(ROOT, "src")),
    path.join(ROOT, "next.config.ts"),
  ];
  scanFiles(runtimeFiles, "runtime source");

  assert(!fs.existsSync(path.join(ROOT, "public", "ads.txt")), {
    scope: "public source",
    issue: "advertising seller file still exists",
  });

  const layout = fs.readFileSync(path.join(ROOT, "src", "app", "layout.tsx"), "utf8");
  const analytics = fs.readFileSync(path.join(ROOT, "src", "lib", "analytics.ts"), "utf8");
  const cafeLink = fs.readFileSync(path.join(ROOT, "src", "components", "NaverCafeLink.tsx"), "utf8");
  const nextConfig = fs.readFileSync(path.join(ROOT, "next.config.ts"), "utf8");

  assert((layout.match(/<CafeBanner \/>/g) || []).length === 1, {
    scope: "conversion",
    issue: "sitewide cafe CTA must render exactly once",
  });
  assert(layout.includes("<GAProvider") && layout.includes("<Tracking"), {
    scope: "measurement",
    issue: "GA4 providers are not preserved",
  });
  assert(layout.includes(GA_ID), {
    scope: "measurement",
    issue: "production GA4 measurement ID missing",
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
  ]) {
    assert(nextConfig.includes(origin), {
      scope: "measurement",
      issue: "GA4 CSP origin missing",
      origin,
    });
  }
}

const report = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  mode: OUTPUT_MODE ? "static-output" : "source",
  primaryConversion: "naver_cafe_visit",
  destination: CAFE_URL,
  findings,
};

fs.writeFileSync(
  path.join(
    REPORT_DIR,
    OUTPUT_MODE
      ? "cafe-first-ad-free-output-audit-latest.json"
      : "cafe-first-ad-free-source-audit-latest.json",
  ),
  `${JSON.stringify(report, null, 2)}\n`,
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(report, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(report));
