#!/usr/bin/env node

import assert from "node:assert/strict";
import { assertPublishable, evaluatePublicationCandidate } from "../src/lib/publication-quality.mjs";

const routes = new Set(["/blog/known"]);
const valid = { slug: "valid-article", title: "검증 가능한 글", status: "done", body: `${"충분한 본문입니다. ".repeat(80)} [관련 글](/blog/known) https://example.org`, reviewEvidence: "editorial-log-1" };
assert.deepEqual(assertPublishable(valid, routes).hardErrors, []);
for (const candidate of [
  { ...valid, slug: "Bad Slug" },
  { ...valid, status: "blocked" },
  { ...valid, body: "전문가 검수 완료 test@example.com" },
  { ...valid, body: `${valid.body} [깨진 링크](/blog/missing)` },
]) assert.throws(() => assertPublishable(candidate, routes), /Publication blocked/);

const warningOnly = evaluatePublicationCandidate({ slug: "short", title: "짧은 글", status: "done", body: "짧은 일반 설명" }, routes);
assert.equal(warningOnly.hardErrors.length, 0);
assert.ok(warningOnly.warnings.includes("short_body"));
assert.ok(warningOnly.warnings.includes("no_external_source"));
console.log("Publication quality gate audit passed.");
