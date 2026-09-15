#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";

const contract = JSON.parse(fs.readFileSync("docs/tennisfrens-audit/URL_HTTP_CONTRACT.json", "utf8"));
const robots = fs.readFileSync("src/app/robots.ts", "utf8");
const redirects = fs.readFileSync("next.config.ts", "utf8");
const sitemap = fs.readFileSync("src/lib/sitemap-entries.ts", "utf8");

assert.equal(contract.canonicalOrigin, "https://tennisfrens.com");
assert.equal(contract.evidenceAxes.source, "VERIFIED");
assert.equal(contract.evidenceAxes.liveHttp, "NOT_VERIFIED");
assert.equal(contract.liveEvidence.status, "NOT_VERIFIED");
const types = new Set(contract.contracts.map((entry) => entry.type));
for (const required of ["canonical-public", "public-noindex", "private-disallowed", "legacy-redirect", "missing"]) {
  assert.ok(types.has(required), `missing URL contract type: ${required}`);
}
for (const privatePath of ["/private/", "/admin/", "/api/auth/"]) {
  assert.match(robots, new RegExp(privatePath.replaceAll("/", "\\/"), "u"));
}
assert.match(redirects, /permanent:\s*true/u);
assert.match(redirects, /playerLegacyRedirects/u);
assert.match(sitemap, /isIndexableBlogSlug/u);
assert.match(sitemap, /playerLegacyRedirects/u);
assert.equal(contract.generatedOutputEvidence.lastResult, "PASS");
assert.ok(contract.generatedOutputEvidence.pageCount > 0);

console.log(JSON.stringify({ status: "ok", contractTypes: [...types], liveHttp: "NOT_VERIFIED" }));
