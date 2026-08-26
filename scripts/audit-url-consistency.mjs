import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_ROOTS = ["src", "scripts", "public"];
const TEXT_EXTENSIONS = new Set([
  ".ts",
  ".tsx",
  ".js",
  ".mjs",
  ".json",
  ".md",
  ".txt",
  ".xml",
  ".html",
]);

const DISALLOWED_PATTERNS = [
  {
    name: "www host outside redirect fixtures",
    pattern: /https?:\/\/www\.tennisfrens\.com\b/g,
    fix: "Use https://tennisfrens.com for public URLs.",
  },
  {
    name: "retired tennisfriends.co.kr host",
    pattern: /https?:\/\/tennisfriends\.co\.kr\b/g,
    fix: "Use https://tennisfrens.com for current production URLs.",
  },
];

const IGNORED_FILE_PATTERNS = [
  /(^|[\\/])docs[\\/]reports[\\/]gsc-summary-/,
  /(^|[\\/])docs[\\/]reports[\\/]ga4-summary-/,
  /(^|[\\/])docs[\\/]reports[\\/]analytics-audit-latest\.json$/,
  /(^|[\\/])public[\\/]_redirects$/,
  /(^|[\\/])public[\\/]ai-index\.json$/,
  /(^|[\\/])scripts[\\/]audit-redirect-config\.mjs$/,
  /(^|[\\/])scripts[\\/]audit-redirects\.mjs$/,
  /(^|[\\/])scripts[\\/]audit-analytics-reports\.mjs$/,
];

function shouldScan(filePath) {
  if (IGNORED_FILE_PATTERNS.some((pattern) => pattern.test(filePath))) {
    return false;
  }

  return TEXT_EXTENSIONS.has(path.extname(filePath));
}

function walk(dirPath) {
  if (!fs.existsSync(dirPath)) return [];

  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
    } else if (shouldScan(fullPath)) {
      files.push(fullPath);
    }
  }

  return files;
}

const findings = [];

for (const root of SCAN_ROOTS) {
  for (const filePath of walk(path.join(ROOT, root))) {
    const relativePath = path.relative(ROOT, filePath);
    const text = fs.readFileSync(filePath, "utf8");

    for (const { name, pattern, fix } of DISALLOWED_PATTERNS) {
      const matches = [...text.matchAll(pattern)];
      if (matches.length > 0) {
        findings.push({
          file: relativePath,
          issue: name,
          count: matches.length,
          fix,
        });
      }
    }
  }
}

if (findings.length > 0) {
  console.error(JSON.stringify({ findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    scannedRoots: SCAN_ROOTS,
    canonicalHost: "https://tennisfrens.com",
  }),
);
