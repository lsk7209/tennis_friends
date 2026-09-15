#!/usr/bin/env node

import assert from "node:assert/strict";
import {
  clearNtrpResults,
  exportNtrpResults,
  readNtrpStorage,
  recordNtrpResultOnce,
} from "../src/lib/ntrp-results.ts";

class MemoryStorage {
  values = new Map();
  failWrites = false;
  getItem(key) { return this.values.get(key) ?? null; }
  setItem(key, value) {
    if (this.failWrites) throw new Error("quota");
    this.values.set(key, value);
  }
  removeItem(key) {
    if (this.failWrites) throw new Error("unavailable");
    this.values.delete(key);
  }
}

const local = new MemoryStorage();
const session = new MemoryStorage();
assert.deepEqual(readNtrpStorage(local), { results: [], status: "empty" });

local.setItem("tennisfrens:ntrp-results:v1", JSON.stringify([
  { id: "legacy", createdAt: "2026-01-01T00:00:00.000Z", score: 42, level: "3.0", character: "올라운더" },
  { id: "bad", createdAt: "invalid", score: "NaN" },
]));
const migrated = readNtrpStorage(local);
assert.equal(migrated.results.length, 1);
assert.equal(local.getItem("tennisfrens:ntrp-results:v1"), null);
assert.match(local.getItem("tennisfrens:ntrp-results:v2"), /"version":2/);

local.setItem("tennisfrens:ntrp-results:v2", "{broken");
assert.deepEqual(readNtrpStorage(local), { results: [], status: "recovered" });
local.removeItem("tennisfrens:ntrp-results:v2");
session.setItem("tennisfrens:ntrp-pending:new-result", "1");
assert.equal(recordNtrpResultOnce({ completionId: "new-result", score: 55, level: "3.5", character: "수비형" }, local, session), true);
assert.equal(recordNtrpResultOnce({ completionId: "new-result", score: 55, level: "3.5", character: "수비형" }, local, session), false);
assert.equal(JSON.parse(exportNtrpResults(local)).results.length, 1);
assert.equal(clearNtrpResults(local), true);
assert.equal(readNtrpStorage(local).results.length, 0);

const blocked = new MemoryStorage();
blocked.failWrites = true;
assert.equal(clearNtrpResults(blocked), false);
assert.equal(recordNtrpResultOnce({ completionId: "x", score: 1, level: "1.5", character: "입문" }, blocked, session), false);

console.log("NTRP storage audit passed.");
