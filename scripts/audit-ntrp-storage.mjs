#!/usr/bin/env node

import assert from "node:assert/strict";
import {
  clearNtrpResults,
  exportNtrpResults,
  hasPendingNtrpAttempt,
  registerPendingNtrpAttempt,
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
local.setItem("tennisfrens:ntrp-results:v1", JSON.stringify([{ id: "preserved", createdAt: "2026-01-01T00:00:00.000Z", score: 42, level: "3.0", character: "올라운더" }]));
assert.deepEqual(readNtrpStorage(local), { results: [], status: "recovered" });
session.setItem("tennisfrens:ntrp-pending:corrupt", JSON.stringify({ score: 45, character: "올라운더", questionnaire: "legacy-v2", scoring: "legacy-sum-v2" }));
assert.equal(recordNtrpResultOnce({ completionId: "corrupt", score: 45, level: "3.5", character: "올라운더" }, local, session), false);
assert.equal(local.getItem("tennisfrens:ntrp-results:v2"), "{broken", "a new result must not overwrite corrupt history");
assert.notEqual(local.getItem("tennisfrens:ntrp-results:v1"), null);
local.removeItem("tennisfrens:ntrp-results:v2");
local.removeItem("tennisfrens:ntrp-results:v1");
session.setItem("tennisfrens:ntrp-pending:new-result", JSON.stringify({ score: 55, character: "수비형", questionnaire: "legacy-v2", scoring: "legacy-sum-v2" }));
assert.equal(recordNtrpResultOnce({ completionId: "new-result", score: 55, level: "3.5", character: "수비형" }, local, session), true);
assert.equal(recordNtrpResultOnce({ completionId: "new-result", score: 55, level: "3.5", character: "수비형" }, local, session), false);
assert.equal(JSON.parse(exportNtrpResults(local)).results.length, 1);
assert.equal(clearNtrpResults(local), true);
assert.equal(readNtrpStorage(local).results.length, 0);

const blocked = new MemoryStorage();
blocked.failWrites = true;
assert.equal(clearNtrpResults(blocked), false);
assert.equal(recordNtrpResultOnce({ completionId: "x", score: 1, level: "1.5", character: "입문" }, blocked, session), false);

const retryLocal = new MemoryStorage();
const retrySession = new MemoryStorage();
const retryKey = "tennisfrens:ntrp-pending:retry";
const retryAttempt = { score: 45, character: "올라운더", questionnaire: "legacy-v2", scoring: "legacy-sum-v2" };
retrySession.setItem(retryKey, JSON.stringify(retryAttempt));
assert.equal(hasPendingNtrpAttempt('retry', retryAttempt, retrySession), true);
assert.equal(hasPendingNtrpAttempt('retry', { ...retryAttempt, score: 75 }, retrySession), false);
retryLocal.failWrites = true;
const retryInput = { completionId: "retry", score: 45, level: "3.5", character: "올라운더" };
assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), false);
assert.equal(retrySession.getItem(retryKey), JSON.stringify(retryAttempt), "failed writes must leave the pending attempt retryable");
retryLocal.failWrites = false;
assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), true);
assert.equal(hasPendingNtrpAttempt('retry', retryAttempt, retrySession), false);
assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), false);
assert.equal(readNtrpStorage(retryLocal).results.length, 1);

const originalWindow = globalThis.window;
Object.defineProperty(globalThis, "window", { configurable: true, value: {
  get localStorage() { throw new DOMException("blocked", "SecurityError"); },
  get sessionStorage() { throw new DOMException("blocked", "SecurityError"); },
} });
try {
  assert.equal(readNtrpStorage().status, "unavailable");
  assert.equal(registerPendingNtrpAttempt('memory-only', retryAttempt), false);
  assert.equal(hasPendingNtrpAttempt('memory-only', retryAttempt), true);
  assert.equal(hasPendingNtrpAttempt('memory-only', { ...retryAttempt, score: 75 }), false);
  assert.equal(recordNtrpResultOnce(retryInput), false);
  assert.equal(clearNtrpResults(), false);
} finally {
  if (originalWindow === undefined) delete globalThis.window;
  else Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
}

console.log("NTRP storage audit passed.");
