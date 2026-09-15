#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const inventory = read("docs/tennisfrens-audit/INVENTORY.md");
const authority = read("docs/tennisfrens-audit/AUTHORITY_AND_EXTERNAL_EFFECTS.md");
const baseline = JSON.parse(read("docs/tennisfrens-audit/MEASUREMENT_BASELINE.json"));
const packageJson = JSON.parse(read("package.json"));

for (const label of ["Indexable sitemap entries", "Indexable blog entries", "Utility metadata", "Player profiles"]) {
  assert.ok(inventory.includes(label), `inventory is missing ${label}`);
}
for (const key of ["gsc", "ga4", "adsenseAccount", "rum"]) {
  assert.equal(baseline.metrics[key].value, null, `${key} must remain null without private evidence`);
  assert.equal(baseline.metrics[key].coverage, "not_verified");
}
for (const phrase of ["Git push", "preview/production deploy", "Account changes", "not authorized"]) {
  assert.ok(authority.includes(phrase), `authority matrix is missing ${phrase}`);
}
const verify = packageJson.scripts.verify;
for (const forbidden of ["publish:vercel", "submit-indexnow", "submit-gsc-sitemap"]) {
  assert.ok(!verify.includes(forbidden), `verify must not contain external mutation: ${forbidden}`);
}
console.log("docs/11 governance audit passed.");
