#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";

const read = (file) => fs.readFileSync(file, "utf8");
const enhanced = read("src/components/seo/EnhancedBlogPostSchema.tsx");
const legacy = read("src/components/seo/BlogPostSchema.tsx");
const dynamicBlog = read("src/app/blog/[slug]/page.tsx");
const policy = read("docs/tennisfrens-audit/STRUCTURED_DATA_POLICY.md");

assert.match(enhanced, /\.\.\.\(dateModified && \{ dateModified \}\)/u);
assert.doesNotMatch(enhanced, /dateModified:\s*dateModified\s*\|\|\s*date/u);
assert.doesNotMatch(legacy, /dateModified:\s*date/u);
assert.match(enhanced, /"@type": "Organization"/u);
assert.match(dynamicBlog, /itemType="https:\/\/schema\.org\/Organization"/u);
assert.doesNotMatch(dynamicBlog, /itemType="https:\/\/schema\.org\/Person"/u);
assert.doesNotMatch(enhanced + legacy, /AggregateRating/u);
assert.match(policy, /FAQPage.*not treated|FAQPage.*처리되지/iu);
assert.match(policy, /Rating schema is prohibited/u);

console.log(JSON.stringify({ status: "ok", checks: ["real-author-type", "explicit-modified-date", "no-unsupported-rating", "breadcrumb-policy", "faq-goal-retired"] }));
