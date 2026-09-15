#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const page = read("src/app/blog/[slug]/page.tsx");
const candidates = read("docs/tennisfrens-audit/CONTENT_AND_ENTITY_CANDIDATES.md");
const provenance = read("docs/tennisfrens-audit/PROVENANCE_RIGHTS_FRESHNESS.md");
const manifest = JSON.parse(read("docs/tennisfrens-audit/URL_CHANGE_DRY_RUN.json"));

assert.match(page, /dateModified=\{modifiedTime\}/);
assert.match(page, /author=\{post\.author \?\? SITE_NAME\}/);
assert.doesNotMatch(page, /dateModified=\{publishedTime\}/);
assert.match(candidates, /false positive/i);
assert.match(candidates, /do not redirect|do not.*consolidation/i);
assert.equal(manifest.mode, "dry-run");
assert.equal(manifest.authorizedForExecution, false);
for (const change of manifest.changes) {
  for (const key of ["from", "to", "intent", "uniqueInformation", "internalLinks", "sitemap", "rollback", "state"]) {
    assert.ok(key in change, `URL decision is missing ${key}`);
  }
}
for (const phrase of ["unresolved", "sourceFetchedAt", "effectiveAt", "verifiedAt", "maximum 2 retries", "no background retry schedule"]) {
  assert.ok(provenance.includes(phrase), `provenance/freshness ledger is missing ${phrase}`);
}
console.log("Provenance and URL decision audit passed.");
