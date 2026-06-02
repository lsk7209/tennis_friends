#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const REPORT_DIR = join(ROOT, "docs", "reports");

function read(relativePath) {
  const filePath = join(ROOT, relativePath);
  return existsSync(filePath) ? readFileSync(filePath, "utf8") : "";
}

const nextConfig = read("next.config.ts");
const layout = read("src/app/layout.tsx");
const globals = read("src/app/globals.css");
const cloudflareHeaders = read("public/_headers");
const findings = [];

function assert(condition, issue, detail = {}) {
  if (!condition) findings.push({ issue, ...detail });
}

function includesAll(source, tokens) {
  return tokens.every((token) => source.includes(token));
}

assert(nextConfig.includes("compress: true"), "next_compression_disabled");
assert(
  includesAll(nextConfig, [
    "formats: [\"image/avif\", \"image/webp\"]",
    "deviceSizes:",
    "imageSizes:",
  ]),
  "next_image_optimization_missing",
);
assert(
  includesAll(nextConfig, [
    "optimizePackageImports",
    "lucide-react",
    "framer-motion",
    "recharts",
  ]),
  "package_import_optimization_missing",
);

for (const [route, cacheToken] of [
  ["/sitemap.xml", "s-maxage=3600"],
  ["/sitemap-naver.xml", "s-maxage=3600"],
  ["/rss.xml", "s-maxage=60"],
  ["/feed", "s-maxage=60"],
  ["/robots.txt", "s-maxage=86400"],
  ["/llms.txt", "s-maxage=3600"],
  ["/llms-full.txt", "s-maxage=3600"],
  ["/ai-index.json", "s-maxage=3600"],
  ["/opensearch.xml", "s-maxage=86400"],
  ["/images/:path*", "stale-while-revalidate=86400"],
  ["/fonts/:path*", "immutable"],
]) {
  const routeIndex = nextConfig.indexOf(`source: "${route}"`);
  assert(routeIndex !== -1, "cache_header_route_missing", { route });
  if (routeIndex !== -1) {
    const section = nextConfig.slice(routeIndex, routeIndex + 500);
    assert(section.includes(cacheToken), "cache_header_policy_missing", {
      route,
      expected: cacheToken,
    });
  }
}

for (const [route, cacheToken] of [
  ["/sitemap.xml", "s-maxage=3600"],
  ["/sitemap-naver.xml", "s-maxage=3600"],
  ["/rss.xml", "s-maxage=60"],
  ["/feed", "application/rss+xml; charset=utf-8"],
  ["/robots.txt", "s-maxage=86400"],
  ["/llms.txt", "text/plain; charset=utf-8"],
  ["/llms-full.txt", "text/plain; charset=utf-8"],
  ["/ai-index.json", "application/json; charset=utf-8"],
  ["/ads.txt", "s-maxage=86400"],
  ["/opensearch.xml", "application/opensearchdescription+xml; charset=utf-8"],
  ["/images/*", "stale-while-revalidate=86400"],
  ["/fonts/*", "immutable"],
]) {
  const routeIndex = cloudflareHeaders.indexOf(route);
  assert(routeIndex !== -1, "cloudflare_header_route_missing", { route });
  if (routeIndex !== -1) {
    const section = cloudflareHeaders.slice(routeIndex, routeIndex + 300);
    assert(section.includes(cacheToken), "cloudflare_header_policy_missing", {
      route,
      expected: cacheToken,
    });
  }
}

for (const token of [
  "X-Robots-Tag",
  "pagead2.googlesyndication.com",
  "www.googletagmanager.com",
  "www.google-analytics.com",
  "googleads.g.doubleclick.net",
]) {
  assert(cloudflareHeaders.includes(token), "cloudflare_global_header_missing", {
    token,
  });
}

for (const origin of [
  "https://cdn.jsdelivr.net",
  "https://pagead2.googlesyndication.com",
  "https://www.googletagmanager.com",
]) {
  assert(
    layout.includes(`href="${origin}"`) && layout.includes('rel="preconnect"'),
    "critical_preconnect_missing",
    { origin },
  );
}

for (const fontVar of [
  "--font-inter",
  "--font-archivo-black",
  "--font-inter-tight",
  "--font-jetbrains",
]) {
  assert(layout.includes(fontVar), "next_font_variable_missing", { fontVar });
}

assert(layout.includes("display: \"swap\""), "next_font_display_swap_missing");
assert(layout.includes("preload: true"), "primary_font_preload_missing");
assert(globals.includes("font-display: swap"), "local_font_display_swap_missing");
assert(
  globals.includes("overflow-wrap: anywhere") ||
    globals.includes("word-break: keep-all"),
  "responsive_text_wrapping_guard_missing",
);

const report = {
  status: findings.length === 0 ? "ok" : "fail",
  generatedAt: new Date().toISOString(),
  checkedFiles: [
    "next.config.ts",
    "public/_headers",
    "src/app/layout.tsx",
    "src/app/globals.css",
  ],
  findings,
};

mkdirSync(REPORT_DIR, { recursive: true });
writeFileSync(
  join(REPORT_DIR, "performance-config-audit-latest.json"),
  `${JSON.stringify(report, null, 2)}\n`,
  "utf8",
);

console.log(JSON.stringify(report));

if (findings.length > 0) {
  process.exitCode = 1;
}
