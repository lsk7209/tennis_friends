import { isExternalEffectsActiveInDocument } from "@/lib/external-effects";

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
  // Legacy event: a click toward a tool landing page, not an assessment start.
  tool_started: new Set(["tool_slug", "source_path", "destination_path"]),
  assessment_started: new Set([
    "tool_slug", "page_path", "questionnaire_version", "scoring_version", "measurement_version",
  ]),
  test_completed: new Set([
    "test_type", "page_path", "questionnaire_version", "scoring_version", "measurement_version",
  ]),
  cta_clicked: new Set([
    "cta_location",
    "source",
    "destination_path",
    "destination_url",
    "result_type",
  ]),
  content_read_complete: new Set(["page_path", "read_seconds", "measurement_version"]),
  lead_captured: new Set(["source", "page_path"]),
  search_performed: new Set(["query_length", "result_count", "page_path"]),
  blog_post_viewed: new Set(["page_path", "measurement_version"]),
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
 * Result of a local dispatch attempt. "sent" means the event was handed to
 * gtag in this browser — it does not prove that GA received or processed it.
 */
export type TrackEventResult = "sent" | "queued" | "dropped";

// Events fired before gtag.js is ready (e.g. the first NTRP answer or a fast
// result page) would otherwise be silently lost. The queue lives in memory only,
// accepts events only when the server enabled production external effects,
// is bounded in size and age, never retries, and is never persisted.
export const ANALYTICS_QUEUE_MAX_EVENTS = 20;
export const ANALYTICS_QUEUE_MAX_AGE_MS = 30_000;
type QueuedEvent = { eventName: string; params: GtagParams; queuedAt: number; key: string };
const analyticsQueue: QueuedEvent[] = [];

function isAnalyticsQueueAllowed(): boolean {
  return isExternalEffectsActiveInDocument();
}

function dispatch(eventName: string, params: GtagParams): TrackEventResult {
  try {
    window.gtag("event", eventName, params);
    return "sent";
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[analytics] trackEvent failed", eventName, e);
    }
    return "dropped";
  }
}

function enqueue(eventName: string, params: GtagParams, now: number): TrackEventResult {
  if (!isAnalyticsQueueAllowed()) return "dropped";
  const key = `${eventName}:${JSON.stringify(params)}`;
  if (analyticsQueue.some((item) => item.key === key)) return "queued";
  if (analyticsQueue.length >= ANALYTICS_QUEUE_MAX_EVENTS) return "dropped";
  analyticsQueue.push({ eventName, params, queuedAt: now, key });
  return "queued";
}

/** Sends queued events once gtag is ready; expired events are discarded. Returns the sent count. */
export function flushAnalyticsQueue(now: number = Date.now()): number {
  if (!isGAEnabled()) return 0;
  const pending = analyticsQueue.splice(0, analyticsQueue.length);
  return pending
    .filter((item) => now - item.queuedAt <= ANALYTICS_QUEUE_MAX_AGE_MS)
    .filter((item) => dispatch(item.eventName, item.params) === "sent").length;
}

export function getQueuedAnalyticsEventCount(): number {
  return analyticsQueue.length;
}

/**
 * GA4 커스텀 이벤트 전송
 * @param eventName - snake_case 권장 (예: "tool_used", "cta_clicked")
 * @param params - 이벤트 파라미터 (최대 25개, 값 100자 이내 권장)
 */
export function trackEvent(eventName: string, params: GtagParams = {}): TrackEventResult {
  const sanitizedParams = sanitizeAnalyticsEvent(eventName, params);
  if (!sanitizedParams) return "dropped";
  if (!isGAEnabled()) return enqueue(eventName, sanitizedParams, Date.now());
  return dispatch(eventName, sanitizedParams);
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
  ASSESSMENT_STARTED: "assessment_started",
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
