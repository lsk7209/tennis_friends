#!/usr/bin/env node
// Every static page that declares `tocItems` must render a matching element id
// for each TOC entry, with no duplicate ids. A TOC link with no target silently
// scrolls nowhere and promises content the page does not contain (2026-09-30:
// tennis-starting-complete-guide listed `finding-lessons` without a section).
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function listPages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return listPages(fullPath);
    return entry.name === "page.tsx" ? [fullPath] : [];
  });
}

const failures = [];
let checkedPages = 0;
let checkedAnchors = 0;
for (const file of listPages(path.join(root, "src/app"))) {
  const source = fs.readFileSync(file, "utf8");
  const tocBlock = source.match(/const tocItems[^=]*=\s*\[([\s\S]*?)\n\];/);
  if (!tocBlock) continue;
  const relative = path.relative(root, file).replaceAll("\\", "/");
  const tocIds = [...tocBlock[1].matchAll(/id:\s*['"]([^'"]+)['"]/g)].map((match) => match[1]);
  if (!tocIds.length) continue;
  checkedPages += 1;
  const renderedIds = [...source.matchAll(/\bid=["']([^"']+)["']/g)].map((match) => match[1]);
  const counts = renderedIds.reduce((map, id) => map.set(id, (map.get(id) ?? 0) + 1), new Map());
  for (const id of tocIds) {
    checkedAnchors += 1;
    if (!counts.has(id)) failures.push(`${relative}: TOC target #${id} has no element`);
  }
  for (const [id, count] of counts) {
    if (count > 1) failures.push(`${relative}: duplicate id="${id}" (${count}x)`);
  }
  if (new Set(tocIds).size !== tocIds.length) failures.push(`${relative}: duplicate TOC entries`);
}

// Local hero images referenced by static articles must exist in public/ (a
// missing file renders a broken image and a 404 in BlogPosting.image).
const missingImages = [];
for (const file of listPages(path.join(root, "src/app/blog"))) {
  const source = fs.readFileSync(file, "utf8");
  for (const match of source.matchAll(/\bimage="(\/[^"]+)"/g)) {
    if (!fs.existsSync(path.join(root, "public", match[1]))) {
      missingImages.push(`${path.relative(root, file).replaceAll("\\", "/")}: ${match[1]}`);
    }
  }
}
assert.deepEqual(missingImages, [], `missing article images:\n${missingImages.join("\n")}`);

assert.ok(checkedPages > 0, "no TOC pages found; the audit pattern is stale");
assert.deepEqual(failures, [], `TOC target failures:\n${failures.join("\n")}`);
console.log(`TOC target audit passed: ${checkedPages} pages, ${checkedAnchors} anchors.`);
