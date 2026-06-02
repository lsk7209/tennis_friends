import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, "src", "app");
const SITE_URL = "https://www.tennisfrens.com";

const REQUIRED_STATIC_ROUTES = [
  { route: "/", file: "page.tsx", canonicalHints: ['canonical: "/"', 'getAbsoluteUrl("/")'] },
  { route: "/about", file: path.join("about", "page.tsx") },
  { route: "/blog", file: path.join("blog", "layout.tsx") },
  { route: "/contact", file: path.join("contact", "layout.tsx") },
  { route: "/players", file: path.join("players", "layout.tsx") },
  { route: "/privacy", file: path.join("privacy", "page.tsx") },
  { route: "/search", file: path.join("search", "page.tsx") },
  { route: "/tennis-rules-quiz", file: path.join("tennis-rules-quiz", "layout.tsx") },
  { route: "/terms", file: path.join("terms", "page.tsx") },
  { route: "/utility", file: path.join("utility", "layout.tsx") },
];

const findings = [];

function readRelative(relativePath) {
  const fullPath = path.join(APP_DIR, relativePath);
  if (!fs.existsSync(fullPath)) return "";
  return fs.readFileSync(fullPath, "utf8");
}

function hasMetadata(source) {
  return /export\s+(?:const\s+metadata|(?:async\s+)?function\s+generateMetadata)/.test(
    source,
  );
}

function hasCanonicalForRoute(source, route, hints = []) {
  const absolute = `${SITE_URL}${route === "/" ? "" : route}`;
  const defaultHints = [
    `canonical: "${absolute}"`,
    `canonical: '${absolute}'`,
    `canonical: \`${absolute}\``,
    `canonical: \`${"${siteUrl}"}${route}\``,
    `canonical: \`${"${getSiteUrl()}"}${route}\``,
    `getAbsoluteUrl("${route}")`,
    `getAbsoluteUrl('${route}')`,
    `path: "${route}"`,
    `path: '${route}'`,
  ];

  return [...hints, ...defaultHints].some((hint) => source.includes(hint));
}

function auditStaticRoutes() {
  for (const { route, file, canonicalHints = [] } of REQUIRED_STATIC_ROUTES) {
    const source = readRelative(file);
    if (!source) {
      findings.push({ route, issue: "metadata owner file missing", file });
      continue;
    }
    if (!hasMetadata(source)) {
      findings.push({ route, issue: "metadata export missing", file });
    }
    if (!hasCanonicalForRoute(source, route, canonicalHints)) {
      findings.push({ route, issue: "canonical hint missing", file });
    }
  }
}

function auditDynamicTemplates() {
  for (const { route, file } of [
    { route: "/blog/[slug]", file: path.join("blog", "[slug]", "page.tsx") },
    { route: "/players/[slug]", file: path.join("players", "[slug]", "page.tsx") },
  ]) {
    const source = readRelative(file);
    if (!source) {
      findings.push({ route, issue: "dynamic metadata file missing", file });
      continue;
    }
    if (!hasMetadata(source)) {
      findings.push({ route, issue: "dynamic generateMetadata missing", file });
    }
    if (!source.includes("alternates: { canonical") && !source.includes("alternates: { canonical,")) {
      findings.push({ route, issue: "dynamic canonical metadata missing", file });
    }
  }
}

function auditUtilityRoutes() {
  const utilityDir = path.join(APP_DIR, "utility");
  const slugs = fs
    .readdirSync(utilityDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort();

  for (const slug of slugs) {
    const route = `/utility/${slug}`;
    const layoutFile = path.join("utility", slug, "layout.tsx");
    const pageFile = path.join("utility", slug, "page.tsx");
    const layoutSource = readRelative(layoutFile);
    const pageSource = readRelative(pageFile);
    const combinedSource = `${layoutSource}\n${pageSource}`;

    if (!layoutSource && !pageSource) {
      findings.push({ route, issue: "utility route files missing" });
      continue;
    }
    if (!hasMetadata(combinedSource)) {
      findings.push({ route, issue: "utility metadata export missing" });
    }
    if (!hasCanonicalForRoute(combinedSource, route)) {
      findings.push({ route, issue: "utility canonical hint missing" });
    }
  }
}

function auditPlayerStaticRoutes() {
  const playersDir = path.join(APP_DIR, "players");
  const slugs = fs
    .readdirSync(playersDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("["))
    .map((dirent) => dirent.name)
    .sort();

  for (const slug of slugs) {
    const route = `/players/${slug}`;
    const file = path.join("players", slug, "page.tsx");
    const source = readRelative(file);
    if (!source) {
      findings.push({ route, issue: "player page missing", file });
      continue;
    }
    if (!hasMetadata(source)) {
      findings.push({ route, issue: "player metadata export missing", file });
    }
    if (!source.includes("alternates: { canonical") && !hasCanonicalForRoute(source, route)) {
      findings.push({ route, issue: "player canonical metadata missing", file });
    }
  }
}

auditStaticRoutes();
auditDynamicTemplates();
auditUtilityRoutes();
auditPlayerStaticRoutes();

if (findings.length > 0) {
  console.error(JSON.stringify({ findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    staticRoutes: REQUIRED_STATIC_ROUTES.length,
    utilityRoutes: fs
      .readdirSync(path.join(APP_DIR, "utility"), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory()).length,
    playerStaticRoutes: fs
      .readdirSync(path.join(APP_DIR, "players"), { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && !dirent.name.startsWith("["))
      .length,
  }),
);
