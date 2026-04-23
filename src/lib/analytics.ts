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
// 환경변수 미설정 시 기본값 사용. Vercel 환경변수로 override 가능.
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-W1K51D8SBX";

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
  } catch {
    // 트래킹 실패는 조용히 무시
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

// 전역 gtag 타입 선언
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "set" | "consent",
      targetId: string,
      params?: GtagParams,
    ) => void;
    dataLayer: unknown[];
  }
}
