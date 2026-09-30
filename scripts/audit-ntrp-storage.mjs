#!/usr/bin/env node

import assert from "node:assert/strict";
import {
  canWriteNtrpHistory,
  clearNtrpResults,
  exportNtrpRawStorage,
  exportNtrpResults,
  getNtrpHistoryActions,
  hasPendingNtrpAttempt,
  legacySumV2Level,
  MAX_NTRP_RESULTS,
  registerPendingNtrpAttempt,
  readNtrpStorage,
  recordNtrpResultOnce,
  summarizeNtrpResults,
} from "../src/lib/ntrp-results.ts";

const V2 = "tennisfrens:ntrp-results:v2";
const V1 = "tennisfrens:ntrp-results:v1";
const VERSIONS = { questionnaire: "legacy-v2", scoring: "legacy-sum-v2" };

class MemoryStorage {
  values = new Map();
  failWrites = false;
  failReads = false;
  getItem(key) {
    if (this.failReads) throw new DOMException("blocked", "SecurityError");
    return this.values.get(key) ?? null;
  }
  setItem(key, value) {
    if (this.failWrites) throw new Error("quota");
    this.values.set(key, value);
  }
  removeItem(key) {
    if (this.failWrites) throw new Error("unavailable");
    this.values.delete(key);
  }
}

function pending(session, id, score, character) {
  session.setItem(`tennisfrens:ntrp-pending:${id}`, JSON.stringify({ score, character, ...VERSIONS }));
}
function record(local, session, id, score, character = "올라운더") {
  pending(session, id, score, character);
  return recordNtrpResultOnce({ completionId: id, score, level: legacySumV2Level(score), character }, local, session);
}
const legacyRecord = (id, extra = {}) => ({ id, createdAt: "2026-01-01T00:00:00.000Z", score: 42, level: "3.0", character: "올라운더", ...extra });

// --- Level mapping of the current (unchanged) model.
assert.equal(legacySumV2Level(14), null);
assert.equal(legacySumV2Level(15), "1.5");
assert.equal(legacySumV2Level(42), "3.0");
assert.equal(legacySumV2Level(55), "4.0");
assert.equal(legacySumV2Level(75), "5.0+");
assert.equal(legacySumV2Level(76), null);
assert.equal(legacySumV2Level(45.5), null);

// --- Normal save, duplicate prevention, versions on new records.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  assert.deepEqual(readNtrpStorage(local), { results: [], status: "empty", excludedCount: 0 });
  assert.equal(record(local, session, "new-result", 55, "수비형"), true);
  assert.equal(recordNtrpResultOnce({ completionId: "new-result", score: 55, level: "4.0", character: "수비형" }, local, session), false);
  const [saved] = readNtrpStorage(local).results;
  assert.equal(saved.questionnaire, "legacy-v2");
  assert.equal(saved.scoring, "legacy-sum-v2");
  assert.equal(saved.provenance, "local_completed");
  assert.equal(saved.level, "4.0");
  // Export → re-read round trip keeps the same normalized records.
  const exported = exportNtrpResults(local);
  const roundTrip = new MemoryStorage();
  roundTrip.setItem(V2, exported);
  assert.deepEqual(readNtrpStorage(roundTrip).results, JSON.parse(exported).results);
  assert.equal(clearNtrpResults(local), true);
  assert.equal(readNtrpStorage(local).results.length, 0);
}

// --- New-write validation: 14/15/75/76, negative, fractional, NaN/Infinity, wrong level.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  assert.equal(record(local, session, "s15", 15), true);
  assert.equal(record(local, session, "s75", 75), true);
  for (const score of [14, 76, -1, 45.5, Number.NaN, Number.POSITIVE_INFINITY]) {
    pending(session, `bad-${score}`, score, "올라운더");
    assert.equal(recordNtrpResultOnce({ completionId: `bad-${score}`, score, level: "3.0", character: "올라운더" }, local, session), false, String(score));
  }
  pending(session, "wrong-level", 55, "올라운더");
  assert.equal(recordNtrpResultOnce({ completionId: "wrong-level", score: 55, level: "3.5", character: "올라운더" }, local, session), false, "level must match the current mapping");
  assert.equal(recordNtrpResultOnce({ completionId: "", score: 45, level: "3.5", character: "올라운더" }, local, session), false);
  assert.equal(readNtrpStorage(local).results.length, 2);
}

// --- 51 saves keep only the latest 50.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  for (let index = 0; index < 51; index += 1) assert.equal(record(local, session, `r${index}`, 45), true);
  const stored = readNtrpStorage(local);
  assert.equal(stored.results.length, 50);
  assert.equal(stored.results[0].id, "r50");
}

// --- Legacy migration: a fully valid v1 list migrates; versions are not invented.
{
  const local = new MemoryStorage();
  local.setItem(V1, JSON.stringify([legacyRecord("legacy")]));
  const migrated = readNtrpStorage(local);
  assert.equal(migrated.status, "ready");
  assert.equal(migrated.results[0].scoring, "unknown-legacy");
  assert.equal(migrated.results[0].questionnaire, "unknown-legacy");
  assert.equal(migrated.results[0].provenance, "legacy_imported");
  assert.equal(local.getItem(V1), null);
  assert.match(local.getItem(V2), /"version":2/);
  // Legacy scores are never re-graded to the current mapping (42 → "3.0" is kept even if it differed).
  assert.equal(migrated.results[0].level, "3.0");
}

// --- Partial corruption: valid records shown, excluded originals preserved, writes blocked.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  const rawV1 = JSON.stringify([
    legacyRecord("legacy"),
    { id: "bad", createdAt: "invalid", score: "NaN" },
    legacyRecord("negative", { score: -3 }),
    legacyRecord("fraction", { score: 42.5 }),
    legacyRecord("bad-date", { createdAt: "not-a-date" }),
    legacyRecord("future", { questionnaire: "future-v3", scoring: "future-v3", provenance: "local_completed" }),
    legacyRecord("missing-level", { level: undefined }),
  ]);
  local.setItem(V1, rawV1);
  const partial = readNtrpStorage(local);
  assert.equal(partial.status, "partial");
  assert.equal(partial.results.length, 1);
  assert.equal(partial.excludedCount, 6);
  assert.equal(local.getItem(V1), rawV1, "a read must not drop excluded originals");
  assert.equal(local.getItem(V2), null);
  assert.equal(canWriteNtrpHistory(partial.status), false);
  assert.equal(record(local, session, "blocked-partial", 45), false);
  assert.equal(local.getItem(V1), rawV1);
}

// --- Explicit-version record that contradicts the current mapping is excluded, not re-graded.
{
  const local = new MemoryStorage();
  local.setItem(V2, JSON.stringify({ version: 2, results: [legacyRecord("tampered", { score: 55, level: "3.5", ...VERSIONS, provenance: "local_completed" })] }));
  assert.equal(readNtrpStorage(local).status, "partial");
}

// --- Unsupported envelope version is corrupt, never overwritten.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  const future = JSON.stringify({ version: 3, results: [] });
  local.setItem(V2, future);
  assert.equal(readNtrpStorage(local).status, "corrupt");
  assert.equal(record(local, session, "blocked-future", 45), false);
  assert.equal(local.getItem(V2), future);
}

// --- D01 corrupt_history_not_overwritten_before_confirmation / cancel / reset / save after recovery.
{
  const local = new MemoryStorage();
  const session = new MemoryStorage();
  local.setItem(V2, "{broken");
  local.setItem(V1, JSON.stringify([legacyRecord("preserved")]));
  local.setItem("unrelated:theme", "dark");
  assert.deepEqual(readNtrpStorage(local), { results: [], status: "corrupt", excludedCount: 0 });
  assert.equal(record(local, session, "corrupt", 45), false);
  assert.equal(local.getItem(V2), "{broken", "a new result must not overwrite corrupt history");
  assert.notEqual(local.getItem(V1), null);
  // Raw export is available while storage is readable and includes the corrupt original.
  const backup = JSON.parse(exportNtrpRawStorage(local));
  assert.equal(backup.keys[V2], "{broken");
  // Cancel = no call; every key stays.
  assert.equal(local.getItem(V2), "{broken");
  assert.equal(local.getItem("unrelated:theme"), "dark");
  // Confirmed reset removes only NTRP-owned keys.
  assert.equal(clearNtrpResults(local), true);
  assert.equal(local.getItem(V2), null);
  assert.equal(local.getItem(V1), null);
  assert.equal(local.getItem("unrelated:theme"), "dark");
  // can_save_after_confirmed_recovery: the retained pending attempt now saves once.
  assert.equal(recordNtrpResultOnce({ completionId: "corrupt", score: 45, level: "3.5", character: "올라운더" }, local, session), true);
  assert.equal(recordNtrpResultOnce({ completionId: "corrupt", score: 45, level: "3.5", character: "올라운더" }, local, session), false);
  assert.equal(readNtrpStorage(local).results.length, 1);
}

// --- D01 corrupt_history_exposes_recovery_even_with_zero_rows; clean empty history needs no delete prompt.
assert.deepEqual(getNtrpHistoryActions("corrupt", 0), { showRecovery: true, canExportResults: false, canDeleteResults: false });
assert.equal(getNtrpHistoryActions("partial", 1).showRecovery, true);
assert.deepEqual(getNtrpHistoryActions("empty", 0), { showRecovery: false, canExportResults: false, canDeleteResults: false });
assert.deepEqual(getNtrpHistoryActions("ready", 2), { showRecovery: false, canExportResults: true, canDeleteResults: true });
assert.equal(getNtrpHistoryActions("unavailable", 0).showRecovery, false, "unreadable storage is not offered a reset it cannot perform");

// --- D01 read_security_error_is_unavailable (getItem throws; not "corrupt").
{
  const denied = new MemoryStorage();
  denied.failReads = true;
  assert.deepEqual(readNtrpStorage(denied), { results: [], status: "unavailable", excludedCount: 0 });
  assert.equal(exportNtrpRawStorage(denied), null, "raw export is only offered when storage is readable");
}

// --- Summaries never mix scoring versions.
{
  const summary = summarizeNtrpResults([
    { ...legacyRecord("a", { score: 60 }), questionnaire: "unknown-legacy", scoring: "unknown-legacy", provenance: "legacy_imported" },
    { ...legacyRecord("b", { score: 45, level: "3.5" }), ...VERSIONS, provenance: "local_completed" },
    { ...legacyRecord("c", { score: 55, level: "4.0" }), ...VERSIONS, provenance: "local_completed" },
  ]);
  assert.deepEqual(summary, { scoring: "legacy-sum-v2", count: 2, best: 55, average: 50 });
  assert.equal(summarizeNtrpResults([{ ...legacyRecord("u"), questionnaire: "unknown-legacy", scoring: "unknown-legacy", provenance: "legacy_imported" }]), null);
}

// --- Write failures keep the pending attempt retryable (existing contract).
{
  const blocked = new MemoryStorage();
  blocked.failWrites = true;
  assert.equal(clearNtrpResults(blocked), false);
  const retryLocal = new MemoryStorage();
  const retrySession = new MemoryStorage();
  const retryKey = "tennisfrens:ntrp-pending:retry";
  const retryAttempt = { score: 45, character: "올라운더", ...VERSIONS };
  retrySession.setItem(retryKey, JSON.stringify(retryAttempt));
  assert.equal(hasPendingNtrpAttempt("retry", retryAttempt, retrySession), true);
  assert.equal(hasPendingNtrpAttempt("retry", { ...retryAttempt, score: 75 }, retrySession), false);
  retryLocal.failWrites = true;
  const retryInput = { completionId: "retry", score: 45, level: "3.5", character: "올라운더" };
  assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), false);
  assert.equal(retrySession.getItem(retryKey), JSON.stringify(retryAttempt), "failed writes must leave the pending attempt retryable");
  retryLocal.failWrites = false;
  assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), true);
  assert.equal(hasPendingNtrpAttempt("retry", retryAttempt, retrySession), false);
  assert.equal(recordNtrpResultOnce(retryInput, retryLocal, retrySession), false);
  assert.equal(readNtrpStorage(retryLocal).results.length, 1);

  const originalWindow = globalThis.window;
  Object.defineProperty(globalThis, "window", { configurable: true, value: {
    get localStorage() { throw new DOMException("blocked", "SecurityError"); },
    get sessionStorage() { throw new DOMException("blocked", "SecurityError"); },
  } });
  try {
    assert.equal(readNtrpStorage().status, "unavailable");
    assert.equal(exportNtrpRawStorage(), null);
    assert.equal(registerPendingNtrpAttempt("memory-only", retryAttempt), false);
    assert.equal(hasPendingNtrpAttempt("memory-only", retryAttempt), true);
    assert.equal(hasPendingNtrpAttempt("memory-only", { ...retryAttempt, score: 75 }), false);
    assert.equal(recordNtrpResultOnce(retryInput), false);
    assert.equal(clearNtrpResults(), false);
  } finally {
    if (originalWindow === undefined) delete globalThis.window;
    else Object.defineProperty(globalThis, "window", { configurable: true, value: originalWindow });
  }
}

// --- The stats page must drive its controls from the tested action contract.
{
  const { readFile } = await import("node:fs/promises");
  const stats = await readFile(new URL("../src/app/utility/ntrp-test/stats/page.tsx", import.meta.url), "utf8");
  assert.match(stats, /getNtrpHistoryActions\(/);
  assert.match(stats, /RecoveryPanel/);
  assert.match(stats, /exportNtrpRawStorage\(/);
  assert.match(stats, /window\.confirm\(/, "reset requires explicit confirmation");
  assert.doesNotMatch(stats, /localStorage\.clear\(/);
  assert.doesNotMatch(stats, /disabled=\{!results\.length\}/, "recovery must not depend on displayable row count");

  // D08: privacy copy matches the actual retention constants and deletion scope.
  const privacy = await readFile(new URL("../src/app/privacy/page.tsx", import.meta.url), "utf8");
  const tracking = await readFile(new URL("../src/components/Tracking.tsx", import.meta.url), "utf8");
  const visitorMax = Number(tracking.match(/MAX_STORED_VISITOR_EVENTS = (\d+)/)?.[1]);
  assert.equal(MAX_NTRP_RESULTS, 50);
  assert.match(privacy, new RegExp(`NTRP 결과 기록은 최근 ${MAX_NTRP_RESULTS}건`));
  assert.match(privacy, new RegExp(`방문 기록은 최근 ${visitorMax}건`));
  assert.match(privacy, /NTRP 결과 기록만 지우며/);
  assert.match(privacy, /문항별 답변은\s+저장하지 않습니다/);
  assert.doesNotMatch(privacy, /익명 세션 식별자/);
}

console.log("NTRP storage audit passed.");
