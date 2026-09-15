#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const utilityRoot = path.join(root, "src", "app", "utility");
const resultPages = [];
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const full = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name === "page.tsx" && full.includes(`${path.sep}result${path.sep}`)) resultPages.push(full);
  }
}
walk(utilityRoot);

assert.equal(resultPages.length, 9, "result-page inventory drifted");
for (const file of resultPages) {
  const source = fs.readFileSync(file, "utf8");
  const hrefs = [...source.matchAll(/href=["'](\/[^"']*)["']/gu)].map((match) => match[1]);
  assert.ok(source.includes("UtilityResultLinks") || hrefs.length > 0, `${file} has no contextual next action`);
  assert.doesNotMatch(source, /(?:page|step)\s*break|강제\s*분할/iu, `${file} adds forced content splitting`);
  for (const href of hrefs) {
    if (href === "/" || href === "/utility") continue;
    if (!href.startsWith("/utility/")) continue;
    const slug = href.split("/").filter(Boolean)[1];
    assert.ok(fs.existsSync(path.join(utilityRoot, slug)), `${file} links to missing ${href}`);
  }
}

const component = fs.readFileSync("src/components/UtilityResultLinks.tsx", "utf8");
assert.match(component, /다음에 확인할 도구/u);
assert.match(component, /열기/u);
const home = fs.readFileSync("src/app/page.tsx", "utf8");
for (const href of ["/utility/ntrp-test", "/utility/string-tension", "/utility/injury-risk"]) {
  assert.ok(home.includes(href), `home is missing primary path ${href}`);
}

console.log(JSON.stringify({ status: "ok", resultPages: resultPages.length, homePrimaryPaths: 3 }));
