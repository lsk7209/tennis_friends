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
