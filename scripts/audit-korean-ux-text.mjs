import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const SCAN_ROOTS = [
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

const MOJIBAKE_PATTERNS = [
  {
    name: "replacement character",
    regex: /\uFFFD/,
  },
  {
    name: "triple question mark marker",
    regex: /\?\?\?/,
  },
  {
    name: "common Korean mojibake sequence",
    regex:
      /[\u4E00-\u9FFF]{2,}[\uAC00-\uD7AF]{1,}|[\u00C2-\u00FF]{2,}/,
  },
];

const findings = [];
const scanned = [];

function shouldSkip(filePath) {
  return SKIP_PARTS.some((part) => filePath.includes(part));
}

function walk(directory) {
  if (!fs.existsSync(directory)) return;

  for (const item of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, item.name);
    if (shouldSkip(fullPath)) continue;

    if (item.isDirectory()) {
      walk(fullPath);
      continue;
    }

    const extension = path.extname(item.name).toLowerCase();
    if (!TEXT_EXTENSIONS.has(extension)) continue;

    const relativePath = path.relative(ROOT, fullPath);
    const content = fs.readFileSync(fullPath, "utf8");
    scanned.push(relativePath);

    for (const pattern of MOJIBAKE_PATTERNS) {
      const match = pattern.regex.exec(content);
      if (!match) continue;

      const before = content.slice(0, match.index);
      const line = before.split(/\r?\n/).length;
      const lineText = content.split(/\r?\n/)[line - 1]?.trim().slice(0, 180);
      findings.push({
        file: relativePath,
        line,
        issue: pattern.name,
        sample: lineText,
      });
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
  path.join(REPORTS_DIR, "korean-ux-text-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
