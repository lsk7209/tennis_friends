#!/usr/bin/env node

import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { getUtilityContract } from "../src/lib/utility-contracts.ts";

const root = process.cwd();
const page = fs.readFileSync(path.join(root, "src/app/utility/page.tsx"), "utf8");
const items = [...page.matchAll(/id:\s*"([^"]+)"[\s\S]*?status:\s*"(완료|개발 예정)"[\s\S]*?category:\s*"([^"]+)"/g)]
  .map((match) => ({ id: match[1], status: match[2], category: match[3] }));
assert.equal(items.length, 72, "all utility metadata entries must have a four-axis contract");
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
