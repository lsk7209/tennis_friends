import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const SCAN_ROOTS = [
  "next.config.ts",
  "package.json",
  "scripts",
  "src/app",
  "src/components",
  "src/lib",
  "src/templates",
  "workers",
  "public",
];

const SKIP_PARTS = [
  `${path.sep}.next${path.sep}`,
  `${path.sep}node_modules${path.sep}`,
  `${path.sep}src${path.sep}data${path.sep}blog-content${path.sep}`,
  `${path.sep}src${path.sep}data${path.sep}players${path.sep}`,
];

const TEXT_EXTENSIONS = new Set([
  ".css",
  ".html",
  ".js",
  ".json",
  ".jsx",
  ".md",
  ".mjs",
  ".ts",
  ".tsx",
  ".txt",
  ".xml",
]);

const ENCODING_PATTERNS = [
  { name: "replacement character", regex: /\uFFFD/ },
  { name: "triple question mark marker", regex: /\?\?\?/ },
  {
    name: "question-prefixed Korean mojibake",
    regex: /\?[\uAC00-\uD7AF\u4E00-\u9FFF\uF900-\uFAFF]/,
  },
  {
    name: "common Korean mojibake sequence",
    regex:
      /[\uF900-\uFAFF]|[\u4E00-\u9FFF]{2,}[\uAC00-\uD7AF]{1,}|[\u00C2-\u00FF]{2,}/,
  },
];

const findings = [];
const scanned = [];

function shouldSkip(filePath) {
  return SKIP_PARTS.some((part) => filePath.includes(part));
}

function scanFile(filePath) {
  if (shouldSkip(filePath)) return;

  const extension = path.extname(filePath).toLowerCase();
  if (!TEXT_EXTENSIONS.has(extension)) return;

  const relativePath = path.relative(ROOT, filePath);
  const content = fs.readFileSync(filePath, "utf8");
  scanned.push(relativePath);

  for (const pattern of ENCODING_PATTERNS) {
    const match = pattern.regex.exec(content);
    if (!match) continue;

    const before = content.slice(0, match.index);
    const line = before.split(/\r?\n/).length;
    const lineText = content.split(/\r?\n/)[line - 1]?.trim().slice(0, 180);
    if (isIntentionalDetector(relativePath, lineText)) continue;

    findings.push({
      file: relativePath,
      line,
      issue: pattern.name,
      sample: lineText,
    });
  }
}

function isIntentionalDetector(relativePath, lineText) {
  const normalizedPath = relativePath.replaceAll(path.sep, "/");
  if (!normalizedPath.startsWith("scripts/audit-")) return false;

  return (
    lineText.includes("common Korean mojibake sequence") ||
    lineText.includes("question-prefixed Korean mojibake") ||
    lineText.includes("replacement character") ||
    lineText.includes("\\uFFFD") ||
    lineText.includes("\\u4E00") ||
    lineText.includes("\\u00C2")
  );
}

function walk(targetPath) {
  if (!fs.existsSync(targetPath)) return;
  const stat = fs.statSync(targetPath);

  if (stat.isFile()) {
    scanFile(targetPath);
    return;
  }

  if (!stat.isDirectory()) return;

  for (const item of fs.readdirSync(targetPath, { withFileTypes: true })) {
    const fullPath = path.join(targetPath, item.name);
    if (shouldSkip(fullPath)) continue;

    if (item.isDirectory()) {
      walk(fullPath);
    } else {
      scanFile(fullPath);
    }
  }
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

for (const root of SCAN_ROOTS) {
  walk(path.join(ROOT, root));
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  scannedRoots: SCAN_ROOTS,
  skipped: [
    "src/data/blog-content",
    "src/data/players",
    "node_modules",
    ".next",
  ],
  scannedFiles: scanned.length,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "source-encoding-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
