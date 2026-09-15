#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const read = (relativePath) =>
  fs.readFileSync(path.join(root, relativePath), "utf8");

const policy = read("src/lib/external-effects.ts");
const layout = read("src/app/layout.tsx");
const workflow = read(".github/workflows/deploy.yml");
const staticAudit = read("scripts/audit-static-export.mjs");
const packageJson = JSON.parse(read("package.json"));
const contact = read("src/app/contact/page.tsx");
const bookingTest = read("src/app/utility/court-booking/test/page.tsx");
const ogRoute = read("src/app/api/og/route.tsx");

assert.match(policy, /NEXT_PUBLIC_EXTERNAL_EFFECTS/);
assert.match(policy, /===\s*["']production["']/);
assert.doesNotMatch(policy, /NODE_ENV\s*===\s*["']production["']/);

assert.match(layout, /isProductionExternalEffectsEnabled/);
assert.match(layout, /externalEffectsEnabled\s*&&/);
assert.match(layout, /externalEffectsEnabled\s*&&\s*\([\s\S]*<GAProvider[\s\S]*<Tracking\s*\/>/);
assert.doesNotMatch(layout, /process\.env\.NODE_ENV\s*===\s*["']production["']/);

assert.match(workflow, /NEXT_PUBLIC_EXTERNAL_EFFECTS:\s*production/);
assert.match(staticAudit, /NEXT_PUBLIC_EXTERNAL_EFFECTS:\s*["']production["']/);

assert.match(packageJson.scripts.verify, /audit:external-effects-isolation/);
assert.doesNotMatch(packageJson.scripts.verify, /audit:live-seo|audit:public-endpoints|audit:ops/);

assert.doesNotMatch(contact, /fetch\(|axios|XMLHttpRequest|sendBeacon/);
assert.match(contact, /mailto:/);
assert.doesNotMatch(bookingTest, /fetch\(|axios|XMLHttpRequest|sendBeacon|window\.open/);
assert.match(ogRoute, /dynamic\s*=\s*["']force-static["']/);
assert.doesNotMatch(ogRoute, /request\.url|fetch\(/);

console.log("External-effect isolation audit passed.");
