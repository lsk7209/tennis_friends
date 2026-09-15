/**
 * GA4 (Google Analytics 4) 이벤트 트래킹 유틸리티
 *
 * 사용 예:
 *   import { trackEvent } from "@/lib/analytics";
 *   trackEvent("tool_used", { tool_name: "string-tension", ntrp: 3.5 });
 *
 * env: NEXT_PUBLIC_GA_MEASUREMENT_ID (G-XXXXXXXXXX) 설정 필요.
 * 값이 없으면 모든 호출은 무시됨 (no-op).
 */

// GA4 Measurement ID
// 프로덕션에서만 기본값 사용. 로컬/프리뷰 빌드는 환경변수 필수.
// 이렇게 해야 프리뷰·포크·로컬 실수 트래픽이 프로덕션 속성에 오염되지 않음.
export const isGAEnabled = (): boolean =>
  typeof window !== "undefined" && typeof window.gtag === "function";

type GtagParams = Record<string, string | number | boolean | null | undefined>;

const EVENT_PARAMETER_ALLOWLIST: Record<string, ReadonlySet<string>> = {
  tool_used: new Set(["tool_name", "ntrp"]),
  tool_started: new Set(["tool_slug", "source_path", "destination_path"]),
  test_completed: new Set(["test_type", "page_path"]),
  cta_clicked: new Set([
    "cta_location",
    "source",
    "destination_path",
    "destination_url",
    "result_type",
  ]),
  content_read_complete: new Set(["page_path", "read_seconds"]),
  lead_captured: new Set(["source", "page_path"]),
  search_performed: new Set(["query_length", "result_count", "page_path"]),
  blog_post_viewed: new Set(["page_path"]),
  player_profile_viewed: new Set(["page_path", "player_slug"]),
  naver_cafe_visit: new Set([
    "cta_location",
    "link_text",
    "destination_url",
    "page_path",
  ]),
};

const SENSITIVE_VALUE_PATTERN = /@|(?:^|\D)01[016789][^0-9]*\d{3,4}[^0-9]*\d{4}(?:\D|$)/;

export function sanitizeAnalyticsEvent(
  eventName: string,
  params: GtagParams = {},
): GtagParams | null {
  const allowedKeys = EVENT_PARAMETER_ALLOWLIST[eventName];
  if (!allowedKeys) return null;

  const sanitized: GtagParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (!allowedKeys.has(key) || value == null) continue;
    if (typeof value !== "string") {
      sanitized[key] = value;
      continue;
    }
    const normalized = value.trim().slice(0, 100);
    if (!normalized || SENSITIVE_VALUE_PATTERN.test(normalized)) continue;
    sanitized[key] = normalized;
  }
  return sanitized;
}

/**
 * GA4 커스텀 이벤트 전송
 * @param eventName - snake_case 권장 (예: "tool_used", "cta_clicked")
 * @param params - 이벤트 파라미터 (최대 25개, 값 100자 이내 권장)
 */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (!isGAEnabled()) return;
  const sanitizedParams = sanitizeAnalyticsEvent(eventName, params);
  if (!sanitizedParams) return;
  try {
    window.gtag("event", eventName, sanitizedParams);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[analytics] trackEvent failed", eventName, e);
    }
  }
}

/**
 * 페이지뷰 수동 전송 (SPA 전환 시 사용)
 */
export function trackPageView(url: string, measurementId: string): void {
  if (!isGAEnabled()) return;
  try {
    const pageLocation = `${window.location.origin}${window.location.pathname}`;
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: pageLocation,
      page_title: document.title,
      send_to: measurementId,
    });
  } catch {
    // noop
  }
}

/**
 * 사이트 행동 및 네이버 카페 전환 이벤트
 */
export const TRACKING_EVENTS = {
  TOOL_USED: "tool_used",
  TOOL_STARTED: "tool_started",
  TEST_COMPLETED: "test_completed",
  CTA_CLICKED: "cta_clicked",
  CONTENT_READ_COMPLETE: "content_read_complete",
  LEAD_CAPTURED: "lead_captured",
  SEARCH_PERFORMED: "search_performed",
  BLOG_POST_VIEWED: "blog_post_viewed",
  PLAYER_PROFILE_VIEWED: "player_profile_viewed",
  NAVER_CAFE_VISIT: "naver_cafe_visit",
} as const;

// 전역 gtag 타입 선언 (GA4 공식 시그니처 포괄)
// gtag('js', new Date()) / gtag('config', id, params) / gtag('event', name, params) 등 모두 지원
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
