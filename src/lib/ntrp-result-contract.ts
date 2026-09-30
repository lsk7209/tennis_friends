export type NtrpResultParams =
  | { kind: "empty" | "invalid" }
  | { kind: "displayable"; score: number; style: string | null; source: "shared" | "legacy_link" | "local_candidate" };

const STYLES = new Set(["공만 넘기는 성실형", "수비적 생존형", "빠른 공격형", "전술 분석형", "올라운더"]);

export function parseNtrpResultParams(params: URLSearchParams): NtrpResultParams {
  if (!params.has("score")) return { kind: "empty" };
  const rawScore = params.get("score") ?? "";
  if (!/^\d+$/.test(rawScore)) return { kind: "invalid" };
  const score = Number(rawScore);
  if (!Number.isInteger(score) || score < 15 || score > 75) return { kind: "invalid" };

  if (params.get("mode") === "share") {
    if (params.get("v") !== "1" || params.get("questionnaire") !== "legacy-v2" || params.get("scoring") !== "legacy-sum-v2") return { kind: "invalid" };
    const style = params.get("style");
    if (style && !STYLES.has(style)) return { kind: "invalid" };
    return { kind: "displayable", score, style, source: "shared" };
  }
  if (params.has("v") || params.has("mode")) return { kind: "invalid" };
  const style = params.get("q13");
  return { kind: "displayable", score, style: style && STYLES.has(style) ? style : null, source: params.has("completion") ? "local_candidate" : "legacy_link" };
}

export function buildNtrpShareUrl(pageUrl: string, score: number, style: string | null): string {
  const current = new URL(pageUrl);
  const route = "/utility/ntrp-test/result";
  const routeIndex = current.pathname.lastIndexOf(route);
  const basePath = routeIndex >= 0 ? current.pathname.slice(0, routeIndex) : "";
  const url = new URL(`${basePath}${route}`, current.origin);
  url.searchParams.set("mode", "share");
  url.searchParams.set("v", "1");
  url.searchParams.set("questionnaire", "legacy-v2");
  url.searchParams.set("scoring", "legacy-sum-v2");
  url.searchParams.set("score", String(score));
  if (style && STYLES.has(style)) url.searchParams.set("style", style);
  return url.toString();
}

export type NtrpResultOrigin =
  | "completed_in_this_browser"
  | "saved_in_this_browser"
  | "unverified_completion"
  | "shared"
  | "legacy_link";

/**
 * Where a displayed result came from. Only a pending proof created by the test
 * page in this browser counts as a new completion; a `completion` URL parameter
 * alone is merely a candidate and proves nothing.
 */
export function resolveNtrpResultOrigin(input: {
  source: "shared" | "legacy_link" | "local_candidate";
  hasPendingProof: boolean;
  isStoredLocally: boolean;
}): { origin: NtrpResultOrigin; countsAsNewCompletion: boolean } {
  if (input.source === "shared") return { origin: "shared", countsAsNewCompletion: false };
  if (input.source === "legacy_link") return { origin: "legacy_link", countsAsNewCompletion: false };
  if (input.hasPendingProof) return { origin: "completed_in_this_browser", countsAsNewCompletion: true };
  if (input.isStoredLocally) return { origin: "saved_in_this_browser", countsAsNewCompletion: false };
  return { origin: "unverified_completion", countsAsNewCompletion: false };
}

export const NTRP_RESULT_ORIGIN_LABELS: Record<NtrpResultOrigin, string> = {
  completed_in_this_browser: "이 브라우저에서 방금 완료한 비공식 자가점검 결과입니다.",
  saved_in_this_browser: "이 브라우저에서 완료해 저장된 기록입니다.",
  unverified_completion: "이 브라우저에서 완료했는지 확인할 수 없어 참고용으로만 표시합니다. 내 기록에는 저장하지 않습니다.",
  shared: "공유받은 참고 결과입니다. 이 브라우저의 테스트 완료 기록은 아닙니다.",
  legacy_link: "이전 형식의 링크로 표시한 참고 결과입니다. 이 브라우저의 테스트 완료 기록은 아닙니다.",
};

/** Share copy always carries the unofficial status; it never includes answers or completion ids. */
export function buildNtrpShareText(level: string, character: string | null): string {
  const style = character ? ` (${character} 스타일)` : "";
  return `🎾 TennisFriends NTRP 비공식 자가점검 참고 결과: ${level}${style}. 공식 NTRP 등급은 아니에요. 나도 해보기 →`;
}
