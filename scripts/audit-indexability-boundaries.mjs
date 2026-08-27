import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const utilityRoot = path.join(ROOT, "src", "app", "utility");
const privateSegments = new Set(["result", "test", "stats", "leaderboard", "quiz"]);
const findings = [];
let checked = 0;

for (const utility of fs.readdirSync(utilityRoot, { withFileTypes: true })) {
  if (!utility.isDirectory()) continue;
  const utilityPath = path.join(utilityRoot, utility.name);
  for (const child of fs.readdirSync(utilityPath, { withFileTypes: true })) {
    if (!child.isDirectory() || !privateSegments.has(child.name)) continue;
    const pagePath = path.join(utilityPath, child.name, "page.tsx");
    if (!fs.existsSync(pagePath)) continue;

    checked += 1;
    const layoutPath = path.join(utilityPath, child.name, "layout.tsx");
    const source = fs.existsSync(layoutPath)
      ? fs.readFileSync(layoutPath, "utf8")
      : "";
    if (!source.includes("NoIndexLayout")) {
      findings.push({
        route: `/utility/${utility.name}/${child.name}`,
        issue: "result/test route is missing static noindex metadata",
      });
    }
  }
}

const blogRenderLayout = fs.readFileSync(
  path.join(ROOT, "src", "app", "blog-render", "layout.tsx"),
  "utf8",
);
const blogRenderPage = fs.readFileSync(
  path.join(ROOT, "src", "app", "blog-render", "[slug]", "page.tsx"),
  "utf8",
);
if (
  !blogRenderLayout.includes("index: false") ||
  !blogRenderPage.includes("index: false")
) {
  findings.push({ route: "/blog-render/*", issue: "internal renderer is indexable" });
}

for (const [route, relativePath] of [
  ["/admin", "src/app/admin/layout.tsx"],
  ["/tennis-rules-quiz/quiz", "src/app/tennis-rules-quiz/quiz/layout.tsx"],
  ["/tennis-rules-quiz/result", "src/app/tennis-rules-quiz/result/layout.tsx"],
]) {
  const source = fs.readFileSync(path.join(ROOT, relativePath), "utf8");
  if (!source.includes("NoIndexLayout") || !source.includes("export { metadata }")) {
    findings.push({ route, issue: "state-only route is missing static noindex metadata" });
  }
}

const robotsSource = fs.readFileSync(path.join(ROOT, "src/app/robots.ts"), "utf8");
if ((robotsSource.match(/disallow: DISALLOWED_PRIVATE_PATHS/g) ?? []).length < 6) {
  findings.push({
    route: "src/app/robots.ts",
    issue: "one or more named crawler groups are missing the shared private-path policy",
  });
}

const wellKnownRobotsSource = fs.readFileSync(
  path.join(ROOT, "src/app/.well-known/robots.txt/route.ts"),
  "utf8",
);
for (const privatePath of ["/private/", "/admin/", "/api/auth/"]) {
  const occurrences = wellKnownRobotsSource.split(privatePath).length - 1;
  if (occurrences < 2) {
    findings.push({
      route: "src/app/.well-known/robots.txt/route.ts",
      issue: `AI crawler policy is missing ${privatePath}`,
    });
  }
}

if (findings.length > 0) {
  console.error(JSON.stringify({ checked, findings }, null, 2));
  process.exit(1);
}

console.log(
  JSON.stringify({
    status: "ok",
    checked,
    blogRenderNoindex: true,
    stateRoutesNoindex: true,
    aiPrivatePathsBlocked: true,
  }),
);
