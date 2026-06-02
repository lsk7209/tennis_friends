import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const ENTRY_FILES = [
  "src/data/blog-content/index.ts",
  "src/data/blog-posts.js",
];
const PLAYER_DATA_DIR = "src/data/players";
const TEXT_EXTENSIONS = new Set([".js", ".ts", ".tsx"]);

const ENCODING_PATTERNS = [
  { name: "replacement character", regex: /\uFFFD/g },
  { name: "escaped replacement character", regex: /\\uFFFD/g },
  { name: "triple question marker", regex: /\?\?\?/g },
  { name: "html question cluster", regex: /[>"]\?\?(?:\s+\?\?)+/g },
];

const findings = [];
const scanned = new Set();

function toAbsolute(relativePath) {
  return path.join(ROOT, relativePath);
}

function toRelative(filePath) {
  return path.relative(ROOT, filePath).replaceAll(path.sep, "/");
}

function readFile(relativePath) {
  return fs.readFileSync(toAbsolute(relativePath), "utf8");
}

function addFinding(filePath, issue, index, content) {
  const line = content.slice(0, index).split(/\r?\n/).length;
  const lineText = content.split(/\r?\n/)[line - 1]?.trim().slice(0, 220) || "";

  findings.push({
    file: toRelative(filePath),
    line,
    issue,
    sample: lineText,
  });
}

function scanFile(filePath) {
  if (!fs.existsSync(filePath) || scanned.has(filePath)) return;
  if (!TEXT_EXTENSIONS.has(path.extname(filePath))) return;

  scanned.add(filePath);
  const content = fs.readFileSync(filePath, "utf8");

  for (const pattern of ENCODING_PATTERNS) {
    for (const match of content.matchAll(pattern.regex)) {
      addFinding(filePath, pattern.name, match.index ?? 0, content);
    }
  }
}

function resolveImports(entryRelativePath) {
  const entryPath = toAbsolute(entryRelativePath);
  const entryDir = path.dirname(entryPath);
  const source = fs.readFileSync(entryPath, "utf8");
  const imports = [];

  for (const match of source.matchAll(/from\s+["'](\.\/[^"']+)["']/g)) {
    const specifier = match[1];
    const candidates = [
      path.resolve(entryDir, specifier),
      path.resolve(entryDir, `${specifier}.js`),
      path.resolve(entryDir, `${specifier}.ts`),
      path.resolve(entryDir, `${specifier}.tsx`),
    ];
    const resolved = candidates.find((candidate) => fs.existsSync(candidate));
    if (resolved) imports.push(resolved);
  }

  return imports;
}

function walkDataDir(relativeDir) {
  const dirPath = toAbsolute(relativeDir);
  if (!fs.existsSync(dirPath)) return [];

  const files = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDataDir(toRelative(fullPath)));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

for (const entry of ENTRY_FILES) {
  scanFile(toAbsolute(entry));
  for (const imported of resolveImports(entry)) {
    scanFile(imported);
  }
}

for (const playerFile of walkDataDir(PLAYER_DATA_DIR)) {
  scanFile(playerFile);
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  entryFiles: ENTRY_FILES,
  playerDataDir: PLAYER_DATA_DIR,
  scannedFiles: [...scanned].map(toRelative).sort(),
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "active-content-encoding-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: audit.status,
    scannedFiles: audit.scannedFiles.length,
    findings: audit.findings.length,
    report: "docs/reports/active-content-encoding-audit-latest.json",
  }),
);
