export type NtrpLocalResult = {
  id: string;
  createdAt: string;
  score: number;
  level: string;
  character: string;
};

const STORAGE_KEY = "tennisfrens:ntrp-results:v1";
const MAX_RESULTS = 50;

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

export function readNtrpResults(): NtrpLocalResult[] {
  if (typeof window === "undefined") return [];
  try {
    const parsed: unknown = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter(isResult).slice(0, MAX_RESULTS) : [];
  } catch {
    return [];
  }
}

export function recordNtrpResultOnce(input: {
  completionId: string;
  score: number;
  level: string;
  character: string;
}): boolean {
  if (typeof window === "undefined" || input.score <= 0 || !input.completionId) return false;
  const pendingKey = `tennisfrens:ntrp-pending:${input.completionId}`;

  try {
    if (window.sessionStorage.getItem(pendingKey) !== "1") return false;
    window.sessionStorage.removeItem(pendingKey);
    const previous = readNtrpResults();
    if (previous.some((result) => result.id === input.completionId)) return false;
    const next: NtrpLocalResult = {
      id: input.completionId,
      createdAt: new Date().toISOString(),
      score: input.score,
      level: input.level,
      character: input.character,
    };
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify([next, ...previous].slice(0, MAX_RESULTS)),
    );
    return true;
  } catch {
    // Private browsing or storage policy can make persistence unavailable.
    return false;
  }
}
