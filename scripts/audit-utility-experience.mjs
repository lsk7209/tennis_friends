import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const UTILITY_DIR = path.join(ROOT, "src", "app", "utility");
const UTILITY_PAGE = path.join(UTILITY_DIR, "page.tsx");
const REPORTS_DIR = path.join(ROOT, "docs", "reports");
const COMPLETE = "\uC644\uB8CC";
const PLANNED = "\uAC1C\uBC1C \uC608\uC815";

function readUtilityRoutes() {
  return fs
    .readdirSync(UTILITY_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();
}

function readUtilityMetadata(source) {
  const entries = [];
  let current = null;

  for (const line of source.split(/\r?\n/)) {
    const idMatch = /id:\s*"([^"]+)"/.exec(line);
    if (idMatch) {
      current = { id: idMatch[1] };
    }

    const statusMatch = /status:\s*"([^"]+)"/.exec(line);
    if (statusMatch && current) {
      current.status = statusMatch[1];
      entries.push(current);
      current = null;
    }
  }

  return entries;
}

function duplicates(values) {
  const seen = new Set();
  const repeated = new Set();

  for (const value of values) {
    if (seen.has(value)) repeated.add(value);
    seen.add(value);
  }

  return [...repeated].sort();
}

fs.mkdirSync(REPORTS_DIR, { recursive: true });

const source = fs.readFileSync(UTILITY_PAGE, "utf8");
const routes = readUtilityRoutes();
const routeSet = new Set(routes);
const metadata = readUtilityMetadata(source);
const completed = metadata.filter((entry) => entry.status === COMPLETE);
const planned = metadata.filter((entry) => entry.status === PLANNED);
const completedSet = new Set(completed.map((entry) => entry.id));
const findings = [];

const duplicateIds = duplicates(metadata.map((entry) => entry.id));
if (duplicateIds.length > 0) {
  findings.push({ issue: "duplicate utility metadata ids", ids: duplicateIds });
}

const unknownStatus = metadata.filter(
  (entry) => entry.status !== COMPLETE && entry.status !== PLANNED,
);
if (unknownStatus.length > 0) {
  findings.push({
    issue: "unknown utility metadata status",
    entries: unknownStatus,
  });
}

const completedMissingRoute = completed
  .filter((entry) => !routeSet.has(entry.id))
  .map((entry) => entry.id)
  .sort();
if (completedMissingRoute.length > 0) {
  findings.push({
    issue: "completed utility card links to missing route",
    ids: completedMissingRoute,
  });
}

const routeMissingCompletedMetadata = routes
  .filter((route) => !completedSet.has(route))
  .sort();
if (routeMissingCompletedMetadata.length > 0) {
  findings.push({
    issue: "utility route is missing from completed index cards",
    ids: routeMissingCompletedMetadata,
  });
}

const plannedWithRoute = planned
  .filter((entry) => routeSet.has(entry.id))
  .map((entry) => entry.id)
  .sort();
if (plannedWithRoute.length > 0) {
  findings.push({
    issue: "existing utility route is still marked planned",
    ids: plannedWithRoute,
  });
}

if (!source.includes("{activeUtilities.length}")) {
  findings.push({
    issue: "utility hero count is not bound to activeUtilities.length",
  });
}

if (!source.includes("href={`/utility/${utility.id}`}")) {
  findings.push({
    issue: "active utility cards do not use slug-based internal links",
  });
}

const audit = {
  status: findings.length === 0 ? "ok" : "failed",
  generatedAt: new Date().toISOString(),
  routes: routes.length,
  metadata: metadata.length,
  completed: completed.length,
  planned: planned.length,
  findings,
};

fs.writeFileSync(
  path.join(REPORTS_DIR, "utility-experience-audit-latest.json"),
  JSON.stringify(audit, null, 2),
  "utf8",
);

if (findings.length > 0) {
  console.error(JSON.stringify(audit, null, 2));
  process.exit(1);
}

console.log(JSON.stringify(audit));
