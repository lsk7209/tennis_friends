// Local-only NTRP history. The storage envelope version (`version: 2`) is the
// storage format; questionnaire/scoring versions describe how a score was made.
// The two must not be conflated, and old records are never re-scored.

export type NtrpQuestionnaireVersion = "legacy-v2" | "unknown-legacy";
export type NtrpScoringVersion = "legacy-sum-v2" | "unknown-legacy";
export type NtrpProvenance = "local_completed" | "legacy_imported";

export type NtrpLocalResult = {
  id: string;
  createdAt: string;
  score: number;
  level: string;
  character: string;
  questionnaire: NtrpQuestionnaireVersion;
  scoring: NtrpScoringVersion;
  provenance: NtrpProvenance;
};

/**
 * ready/empty: history can be read and written.
 * partial: some records were excluded (kept untouched in storage) — writes are blocked.
 * corrupt: the stored value cannot be parsed or has an unsupported format — writes are blocked.
 * unavailable: the browser denied storage access; nothing is known about stored data.
 */
export type NtrpStorageStatus = "ready" | "empty" | "partial" | "corrupt" | "unavailable";

export type NtrpStorageRead = {
  results: NtrpLocalResult[];
  status: NtrpStorageStatus;
  excludedCount: number;
};

export type NtrpScoreSummary = {
  scoring: "legacy-sum-v2";
  count: number;
  best: number;
  average: number;
};

export const NTRP_QUESTIONNAIRE_VERSION = "legacy-v2";
export const NTRP_SCORING_VERSION = "legacy-sum-v2";
export const LEGACY_SUM_V2_MIN_SCORE = 15;
export const LEGACY_SUM_V2_MAX_SCORE = 75;

const LEGACY_STORAGE_KEY = "tennisfrens:ntrp-results:v1";
const STORAGE_KEY = "tennisfrens:ntrp-results:v2";
export const NTRP_OWNED_STORAGE_KEYS = [STORAGE_KEY, LEGACY_STORAGE_KEY] as const;
export const MAX_NTRP_RESULTS = 50;
const MAX_ID_LENGTH = 100;
const MAX_DATE_LENGTH = 40;
const MAX_CHARACTER_LENGTH = 40;
const UNKNOWN_LEGACY_MAX_SCORE = 100;
const LEGACY_LEVEL_PATTERN = /^[1-7]\.[05]\+?$/;

// Upper score bound (inclusive) for each level of the current 15-question sum model.
const LEGACY_SUM_V2_LEVEL_BANDS: ReadonlyArray<readonly [number, string]> = [
  [24, "1.5"],
  [34, "2.5"],
  [44, "3.0"],
  [54, "3.5"],
  [64, "4.0"],
  [70, "4.5"],
  [LEGACY_SUM_V2_MAX_SCORE, "5.0+"],
];

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem">;
type StoredEnvelope = { version: 2; results: unknown[] };
type PendingAttempt = {
  score: number;
  character: string;
  questionnaire: typeof NTRP_QUESTIONNAIRE_VERSION;
  scoring: typeof NTRP_SCORING_VERSION;
};
const memoryPending = new Map<string, PendingAttempt>();

export function isLegacySumV2Score(score: unknown): score is number {
  return typeof score === "number" && Number.isInteger(score) &&
    score >= LEGACY_SUM_V2_MIN_SCORE && score <= LEGACY_SUM_V2_MAX_SCORE;
}

/** Level of the current sum model. Only defined for integer scores in 15..75. */
export function legacySumV2Level(score: number): string | null {
  if (!isLegacySumV2Score(score)) return null;
  return LEGACY_SUM_V2_LEVEL_BANDS.find(([upper]) => score <= upper)?.[1] ?? null;
}

function isBoundedString(value: unknown, maxLength: number, allowEmpty = false): value is string {
  return typeof value === "string" && value.length <= maxLength && (allowEmpty || value.length > 0);
}

function isValidDate(value: unknown): value is string {
  return isBoundedString(value, MAX_DATE_LENGTH) && Number.isFinite(Date.parse(value));
}

function normalizeResult(value: unknown): NtrpLocalResult | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const item = value as Record<string, unknown>;
  if (!isBoundedString(item.id, MAX_ID_LENGTH) || !isValidDate(item.createdAt)) return null;
  if (!isBoundedString(item.character, MAX_CHARACTER_LENGTH, true) || typeof item.level !== "string") return null;

  const hasVersionFields = "questionnaire" in item || "scoring" in item || "provenance" in item;
  if (hasVersionFields) {
    // Explicit versions are only written by this module; anything else is unsupported.
    if (item.questionnaire !== NTRP_QUESTIONNAIRE_VERSION || item.scoring !== NTRP_SCORING_VERSION) return null;
    if (item.provenance !== "local_completed") return null;
    if (!isLegacySumV2Score(item.score) || legacySumV2Level(item.score) !== item.level) return null;
    return {
      id: item.id, createdAt: item.createdAt, score: item.score, level: item.level, character: item.character,
      questionnaire: NTRP_QUESTIONNAIRE_VERSION, scoring: NTRP_SCORING_VERSION, provenance: "local_completed",
    };
  }

  // Records written before versions existed: keep them as-is and never re-grade them.
  const score = item.score;
  if (typeof score !== "number" || !Number.isInteger(score) || score <= 0 || score > UNKNOWN_LEGACY_MAX_SCORE) return null;
  if (!LEGACY_LEVEL_PATTERN.test(item.level)) return null;
  return {
    id: item.id, createdAt: item.createdAt, score, level: item.level, character: item.character,
    questionnaire: "unknown-legacy", scoring: "unknown-legacy", provenance: "legacy_imported",
  };
}

function getStorage(storage?: StorageLike): StorageLike | null {
  if (storage) return storage;
  try {
    return typeof window === "undefined" ? null : window.localStorage;
  } catch {
    return null;
  }
}

type RawRead =
  | { kind: "unavailable" }
  | { kind: "empty" }
  | { kind: "corrupt" }
  | { kind: "entries"; entries: unknown[]; fromLegacyKey: boolean };

function readRawEntries(target: StorageLike): RawRead {
  let current: string | null;
  let legacy: string | null;
  try {
    current = target.getItem(STORAGE_KEY);
    legacy = target.getItem(LEGACY_STORAGE_KEY);
  } catch {
    return { kind: "unavailable" };
  }
  if (!current && !legacy) return { kind: "empty" };
  let parsed: unknown;
  try {
    parsed = JSON.parse((current || legacy) as string);
  } catch {
    return { kind: "corrupt" };
  }
  const entries = Array.isArray(parsed)
    ? parsed
    : parsed && typeof parsed === "object" && (parsed as Partial<StoredEnvelope>).version === 2
      ? (parsed as Partial<StoredEnvelope>).results
      : null;
  if (!Array.isArray(entries)) return { kind: "corrupt" };
  return { kind: "entries", entries, fromLegacyKey: !current };
}

function migrateLegacyKey(target: StorageLike, entries: unknown[]): void {
  try {
    target.setItem(STORAGE_KEY, JSON.stringify({ version: 2, results: entries } satisfies StoredEnvelope));
    target.removeItem(LEGACY_STORAGE_KEY);
  } catch {
    // Migration is best-effort; the legacy key stays readable.
  }
}

export function readNtrpStorage(storage?: StorageLike): NtrpStorageRead {
  const target = getStorage(storage);
  if (!target) return { results: [], status: "unavailable", excludedCount: 0 };
  const raw = readRawEntries(target);
  if (raw.kind !== "entries") return { results: [], status: raw.kind, excludedCount: 0 };

  const normalized = raw.entries.map(normalizeResult);
  const results = normalized.filter((item): item is NtrpLocalResult => item !== null).slice(0, MAX_NTRP_RESULTS);
  const excludedCount = normalized.filter((item) => item === null).length;
  // Only a fully valid legacy list is migrated, so excluded originals are never dropped by a read.
  if (raw.fromLegacyKey && excludedCount === 0) migrateLegacyKey(target, raw.entries);
  if (excludedCount > 0) return { results, status: "partial", excludedCount };
  return { results, status: results.length ? "ready" : "empty", excludedCount: 0 };
}

export function readNtrpResults(storage?: StorageLike): NtrpLocalResult[] {
  return readNtrpStorage(storage).results;
}

export function canWriteNtrpHistory(status: NtrpStorageStatus): boolean {
  return status === "ready" || status === "empty";
}

/**
 * Which history controls the UI may offer. Recovery must stay reachable even
 * when zero rows are displayable; a clean empty history needs no delete prompt.
 */
export function getNtrpHistoryActions(status: NtrpStorageStatus, displayedCount: number): {
  showRecovery: boolean;
  canExportResults: boolean;
  canDeleteResults: boolean;
} {
  const showRecovery = status === "corrupt" || status === "partial";
  return {
    showRecovery,
    canExportResults: displayedCount > 0,
    canDeleteResults: !showRecovery && status === "ready" && displayedCount > 0,
  };
}

/** Removes only the NTRP-owned keys. Callers must obtain explicit user confirmation first. */
export function clearNtrpResults(storage?: StorageLike): boolean {
  const target = getStorage(storage);
  if (!target) return false;
  try {
    for (const key of NTRP_OWNED_STORAGE_KEYS) target.removeItem(key);
    return true;
  } catch {
    return false;
  }
}

export function exportNtrpResults(storage?: StorageLike): string {
  return JSON.stringify({ version: 2, exportedAt: new Date().toISOString(), results: readNtrpResults(storage) }, null, 2);
}

/** Raw copy of the owned keys for recovery. Returns null when storage cannot be read. */
export function exportNtrpRawStorage(storage?: StorageLike): string | null {
  const target = getStorage(storage);
  if (!target) return null;
  try {
    const keys = Object.fromEntries(NTRP_OWNED_STORAGE_KEYS.map((key) => [key, target.getItem(key)]));
    return JSON.stringify({ kind: "tennisfrens-ntrp-raw-backup", exportedAt: new Date().toISOString(), keys }, null, 2);
  } catch {
    return null;
  }
}

/** Best/average only within the current scoring model; unknown-legacy records are never aggregated. */
export function summarizeNtrpResults(results: NtrpLocalResult[]): NtrpScoreSummary | null {
  const comparable = results.filter((result) => result.scoring === NTRP_SCORING_VERSION);
  if (!comparable.length) return null;
  const scores = comparable.map((result) => result.score);
  return {
    scoring: NTRP_SCORING_VERSION,
    count: comparable.length,
    best: Math.max(...scores),
    average: Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length),
  };
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

function isValidNewResult(input: { completionId: string; score: number; level: string; character: string }): boolean {
  return isBoundedString(input.completionId, MAX_ID_LENGTH) &&
    legacySumV2Level(input.score) === input.level &&
    isBoundedString(input.character, MAX_CHARACTER_LENGTH, true);
}

function getSessionStorage(override?: StorageLike): StorageLike | null {
  if (override) return override;
  try {
    return typeof window === "undefined" ? null : window.sessionStorage;
  } catch {
    return null;
  }
}

export function recordNtrpResultOnce(input: {
  completionId: string;
  score: number;
  level: string;
  character: string;
}, storage?: StorageLike, sessionStorageOverride?: StorageLike): boolean {
  const target = getStorage(storage);
  const sessionTarget = getSessionStorage(sessionStorageOverride);
  if (!target || !sessionTarget || !isValidNewResult(input)) return false;
  const pendingKey = `tennisfrens:ntrp-pending:${input.completionId}`;

  try {
    const pending = sessionTarget.getItem(pendingKey);
    const attempt = { score: input.score, character: input.character, questionnaire: NTRP_QUESTIONNAIRE_VERSION, scoring: NTRP_SCORING_VERSION } as const;
    if (!pending || !matchesPending(pending, attempt)) return false;
    // Corrupt, partial, or unreadable history must never be overwritten by a new result.
    if (!canWriteNtrpHistory(readNtrpStorage(target).status)) return false;
    const raw = readRawEntries(target);
    const previous = raw.kind === "entries" ? raw.entries : [];
    if (previous.some((entry) => (entry as { id?: unknown })?.id === input.completionId)) return false;
    const next: NtrpLocalResult = {
      id: input.completionId,
      createdAt: new Date().toISOString(),
      score: input.score,
      level: input.level,
      character: input.character,
      questionnaire: NTRP_QUESTIONNAIRE_VERSION,
      scoring: NTRP_SCORING_VERSION,
      provenance: "local_completed",
    };
    target.setItem(
      STORAGE_KEY,
      JSON.stringify({ version: 2, results: [next, ...previous].slice(0, MAX_NTRP_RESULTS) } satisfies StoredEnvelope),
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
