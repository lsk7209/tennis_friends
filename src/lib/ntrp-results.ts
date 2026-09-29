export type NtrpLocalResult = {
  id: string;
  createdAt: string;
  score: number;
  level: string;
  character: string;
};

const LEGACY_STORAGE_KEY = "tennisfrens:ntrp-results:v1";
const STORAGE_KEY = "tennisfrens:ntrp-results:v2";
const MAX_RESULTS = 50;

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
type StoredEnvelope = { version: 2; results: NtrpLocalResult[] };
type PendingAttempt = { score: number; character: string; questionnaire: "legacy-v2"; scoring: "legacy-sum-v2" };
const memoryPending = new Map<string, PendingAttempt>();
export type NtrpStorageStatus = "ready" | "empty" | "recovered" | "unavailable";

function isResult(value: unknown): value is NtrpLocalResult {
  if (!value || typeof value !== "object") return false;
  const item = value as Partial<NtrpLocalResult>;
  return (
    typeof item.id === "string" &&
    typeof item.createdAt === "string" &&
    typeof item.score === "number" &&
    Number.isFinite(item.score) &&
    typeof item.level === "string" &&
    typeof item.character === "string"
  );
}

function getStorage(storage?: StorageLike): StorageLike | null {
  if (storage) return storage;
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    return null;
  }
}

export function readNtrpStorage(storage?: StorageLike): {
  results: NtrpLocalResult[];
  status: NtrpStorageStatus;
} {
  const target = getStorage(storage);
  if (!target) return { results: [], status: "unavailable" };
  try {
    const current = target.getItem(STORAGE_KEY);
    const legacy = target.getItem(LEGACY_STORAGE_KEY);
    if (!current && !legacy) return { results: [], status: "empty" };
    const parsed: unknown = JSON.parse(current || legacy || "[]");
    const rawResults = Array.isArray(parsed)
      ? parsed
      : parsed && typeof parsed === "object" && (parsed as Partial<StoredEnvelope>).version === 2
        ? (parsed as Partial<StoredEnvelope>).results
        : null;
    if (!Array.isArray(rawResults)) return { results: [], status: "recovered" };
    const results = rawResults.filter(isResult).slice(0, MAX_RESULTS);
    if (!current) {
      target.setItem(STORAGE_KEY, JSON.stringify({ version: 2, results } satisfies StoredEnvelope));
      target.removeItem(LEGACY_STORAGE_KEY);
    }
    return { results, status: results.length ? "ready" : "empty" };
  } catch {
    return { results: [], status: "recovered" };
  }
}

export function readNtrpResults(storage?: StorageLike): NtrpLocalResult[] {
  return readNtrpStorage(storage).results;
}

export function clearNtrpResults(storage?: StorageLike): boolean {
  const target = getStorage(storage);
  if (!target) return false;
  try {
    target.removeItem(STORAGE_KEY);
    target.removeItem(LEGACY_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}

export function exportNtrpResults(storage?: StorageLike): string {
  return JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), results: readNtrpResults(storage) }, null, 2);
}

export function registerPendingNtrpAttempt(completionId: string, attempt: PendingAttempt): boolean {
  memoryPending.set(completionId, attempt);
  try {
    window.sessionStorage.setItem(`tennisfrens:ntrp-pending:${completionId}`, JSON.stringify(attempt));
    return true;
  } catch {
    return false;
  }
}

function matchesPending(raw: string | null, attempt: PendingAttempt): boolean {
  if (!raw) return false;
  try {
    const saved = JSON.parse(raw) as Partial<PendingAttempt>;
    return saved.score === attempt.score && saved.character === attempt.character &&
      saved.questionnaire === attempt.questionnaire && saved.scoring === attempt.scoring;
  } catch {
    return false;
  }
}

export function hasPendingNtrpAttempt(completionId: string, attempt: PendingAttempt, storage?: StorageLike): boolean {
  if (!completionId) return false;
  const memory = memoryPending.get(completionId);
  if (memory && matchesPending(JSON.stringify(memory), attempt)) return true;
  try {
    const target = storage ?? (typeof window === "undefined" ? null : window.sessionStorage);
    return matchesPending(target?.getItem(`tennisfrens:ntrp-pending:${completionId}`) ?? null, attempt);
  } catch {
    return false;
  }
}

export function recordNtrpResultOnce(input: {
  completionId: string;
  score: number;
  level: string;
  character: string;
}, storage?: StorageLike, sessionStorageOverride?: StorageLike): boolean {
  const target = getStorage(storage);
  let sessionTarget = sessionStorageOverride ?? null;
  if (!sessionTarget) {
    try {
      sessionTarget = typeof window === "undefined" ? null : window.sessionStorage;
    } catch {
      return false;
    }
  }
  if (!target || !sessionTarget || !Number.isFinite(input.score) || input.score <= 0 || !input.completionId) return false;
  const pendingKey = `tennisfrens:ntrp-pending:${input.completionId}`;

  try {
    const pending = sessionTarget.getItem(pendingKey);
    if (!pending || !matchesPending(pending, { score: input.score, character: input.character, questionnaire: "legacy-v2", scoring: "legacy-sum-v2" })) return false;
    const stored = readNtrpStorage(target);
    if (stored.status === "recovered" || stored.status === "unavailable") return false;
    const previous = stored.results;
    if (previous.some((result) => result.id === input.completionId)) return false;
    const next: NtrpLocalResult = {
      id: input.completionId,
      createdAt: new Date().toISOString(),
      score: input.score,
      level: input.level,
      character: input.character,
    };
    target.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 2, results: [next, ...previous].slice(0, MAX_RESULTS) } satisfies StoredEnvelope),
    );
    // A failed durable write must leave this marker available for a retry.
    try { sessionTarget.removeItem(pendingKey); } catch { /* The durable record already exists. */ }
    memoryPending.delete(input.completionId);
    return true;
  } catch {
    // Private browsing or storage policy can make persistence unavailable.
    return false;
  }
}
