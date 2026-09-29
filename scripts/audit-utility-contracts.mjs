#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { getUtilityContract } from "../src/lib/utility-contracts.ts";

const root = process.cwd();
const page = fs.readFileSync(path.join(root, "src/app/utility/page.tsx"), "utf8");
const items = [...page.matchAll(/id:\s*"([^"]+)"[\s\S]*?status:\s*"(완료|개발 예정)"[\s\S]*?category:\s*"([^"]+)"/g)]
  .map((match) => ({ id: match[1], status: match[2], category: match[3] }));
assert.equal(items.length, 75, "all utility metadata entries must have a four-axis contract");
for (const item of items) {
  const contract = getUtilityContract(item);
  assert.ok(contract.purpose);
  assert.ok(["available", "planned"].includes(contract.releaseState));
  assert.ok(["local-rules", "static-reference", "simulation"].includes(contract.dataOrigin));
  assert.equal(contract.verificationState, item.status === "완료" ? "locally-verified" : "not-released");
}
assert.equal(getUtilityContract({ id: "court-booking", category: "예약", status: "완료" }).dataOrigin, "simulation");
assert.match(page, /UTILITY_CONTRACT_LABELS\[contract\.dataOrigin\]/);
assert.match(page, /UTILITY_CONTRACT_LABELS\[contract\.verificationState\]/);
console.log(`Utility contract audit passed for ${items.length} entries.`);

// Public tool counts must match the real number of utility routes.
const routeCount = fs.readdirSync(path.join(root, "src/app/utility"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, "src/app/utility", entry.name, "page.tsx"))).length;
for (const file of ["src/app/utility/layout.tsx", "src/app/_components/home/tools-mosaic.tsx", "src/app/_components/home/live-ticker.tsx"]) {
  const counts = [...fs.readFileSync(path.join(root, file), "utf8").matchAll(new RegExp("([0-9]{2})\\uAC1C(?:\\s\\uC774\\uC0C1\\uC758)?\\s(?:\\uBB34\\uB8CC\\s)?(?:\\uD14C\\uB2C8\\uC2A4\\s)?\\uB3C4\\uAD6C", "gu"))].map((match) => Number(match[1]));
  assert.ok(counts.length > 0, `${file} no longer states a tool count`);
  assert.ok(counts.every((count) => count === routeCount), `${file} states ${counts} tools but ${routeCount} routes exist`);
}
console.log(`Public tool count matches ${routeCount} utility routes.`);
