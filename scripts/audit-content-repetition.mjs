#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import {
  isDuplicateLeadText,
  normalizeArticleHtml,
  removeDuplicateLeadParagraph,
} from "../src/lib/article-html.mjs";

const root = process.cwd();
const page = fs.readFileSync(path.join(root, "src/app/blog/[slug]/page.tsx"), "utf8");

const repeated = '<p><strong>같은 요약입니다.</strong></p><h2>본문</h2><p>근거입니다.</p>';
assert.equal(
  removeDuplicateLeadParagraph(repeated, ["같은 요약입니다."]),
  "<h2>본문</h2><p>근거입니다.</p>",
);
assert.equal(
  normalizeArticleHtml(repeated, ["다른 요약입니다."]),
  repeated,
);
const longerLead = "<p>요약 앞부분입니다. 본문에만 있는 결론입니다.</p><p>다음 문단입니다.</p>";
assert.equal(
  removeDuplicateLeadParagraph(longerLead, ["요약 앞부분입니다."]),
  longerLead,
  "a prefix match must not delete the body-only suffix",
);
assert.equal(isDuplicateLeadText(longerLead, "요약 앞부분입니다."), true);
assert.equal(
  removeDuplicateLeadParagraph("<p>&amp; <strong>공백</strong> 확인</p><p>둘째</p>", ["& 공백 확인"]),
  "<p>둘째</p>",
);
assert.equal(
  removeDuplicateLeadParagraph("<p>첫째</p><p>첫째</p>", ["첫째"]),
  "<p>첫째</p>",
  "only the first paragraph is removed",
);

assert.match(page, /normalizeArticleHtml\([\s\S]*contentData\?\.summary,[\s\S]*post\.excerpt/);
assert.match(page, /showExcerpt\s*=[\s\S]*post\.excerpt\.trim\(\)\s*!==\s*normalizedSummary[\s\S]*!isDuplicateLeadText/);
assert.match(page, /showExcerpt\s*&&/);

const importer = fs.readFileSync(path.join(root, "scripts/import-reviewed-tennis-drafts.mjs"), "utf8");
assert.match(importer, /summary:\s*item\.answer_claim\s*\|\|\s*item\.subtitle\s*\|\|\s*excerpt/);
assert.doesNotMatch(importer, /summary:\s*excerpt[,}]/);

console.log("Content repetition audit passed.");
