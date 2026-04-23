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
const PROD_GA_MEASUREMENT_ID = "G-W1K51D8SBX";
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
  (process.env.NODE_ENV === "production" &&
  process.env.VERCEL_ENV === "production"
    ? PROD_GA_MEASUREMENT_ID
    : "");

export const isGAEnabled = (): boolean =>
  typeof window !== "undefined" &&
  GA_MEASUREMENT_ID.startsWith("G-") &&
  typeof window.gtag === "function";

type GtagParams = Record<string, string | number | boolean | null | undefined>;

/**
 * GA4 커스텀 이벤트 전송
 * @param eventName - snake_case 권장 (예: "tool_used", "cta_clicked")
 * @param params - 이벤트 파라미터 (최대 25개, 값 100자 이내 권장)
 */
export function trackEvent(eventName: string, params: GtagParams = {}): void {
  if (!isGAEnabled()) return;
  try {
    window.gtag("event", eventName, params);
  } catch (e) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[analytics] trackEvent failed", eventName, e);
    }
  }
}

/**
 * 페이지뷰 수동 전송 (SPA 전환 시 사용)
 */
export function trackPageView(url: string): void {
  if (!isGAEnabled()) return;
  try {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  } catch {
    // noop
  }
}

/**
 * 전환 이벤트 (AdSense 최적화용 고신호 이벤트)
 */
export const TRACKING_EVENTS = {
  TOOL_USED: "tool_used",
  TEST_COMPLETED: "test_completed",
  CTA_CLICKED: "cta_clicked",
  CONTENT_READ_COMPLETE: "content_read_complete",
  LEAD_CAPTURED: "lead_captured",
  SEARCH_PERFORMED: "search_performed",
  BLOG_POST_VIEWED: "blog_post_viewed",
  PLAYER_PROFILE_VIEWED: "player_profile_viewed",
} as const;

// 전역 gtag 타입 선언 (GA4 공식 시그니처 포괄)
// gtag('js', new Date()) / gtag('config', id, params) / gtag('event', name, params) 등 모두 지원
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}
