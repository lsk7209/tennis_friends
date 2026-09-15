#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const analytics = fs.readFileSync(path.join(root, "src/lib/analytics.ts"), "utf8");
const search = fs.readFileSync(path.join(root, "src/app/search/SearchClient.tsx"), "utf8");

assert.match(analytics, /EVENT_PARAMETER_ALLOWLIST/);
assert.match(analytics, /sanitizeAnalyticsEvent/);
assert.match(analytics, /if \(!allowedKeys\) return null/);
assert.match(analytics, /SENSITIVE_VALUE_PATTERN/);
assert.match(analytics, /slice\(0, 100\)/);
assert.doesNotMatch(search, /search_term\s*:/);
assert.match(search, /query_length:\s*query\.length/);

const declaredEvents = [...analytics.matchAll(/^\s*[A-Z_]+:\s*"([a-z_]+)"/gm)].map(
  (match) => match[1],
);
for (const eventName of declaredEvents) {
  assert.match(
    analytics,
    new RegExp(`\\n\\s*${eventName}: new Set\\(`),
    `Missing analytics parameter allowlist for ${eventName}`,
  );
}

console.log("Analytics privacy audit passed.");
