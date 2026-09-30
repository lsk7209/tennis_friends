"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { safeJsonParse } from "@/lib/safe-json";
import { trackEvent, TRACKING_EVENTS } from "@/lib/analytics";
import { safeStorageGet, safeStorageSet } from "@/lib/safe-storage";
import { isExternalEffectsActiveInDocument } from "@/lib/external-effects";

const MAX_STORED_VISITOR_EVENTS = 200;
const CONTENT_READ_THRESHOLD = 0.75;
const CONTENT_READ_MIN_SECONDS = 45;
const trackedCompletionIds = new Set<string>();

export function isBlogArticlePath(pathname: string): boolean {
  return /^\/blog\/[^/]+\/?$/.test(pathname) && !pathname.startsWith("/blog/page/");
}

export function hasReachedArticleThreshold(
  rect: Pick<DOMRect, "top" | "height">,
  viewportHeight: number,
): boolean {
  return rect.height > 0 && rect.top + rect.height > 0 &&
    rect.top + rect.height * CONTENT_READ_THRESHOLD <= viewportHeight;
}

interface VisitorData {
  id: string;
  timestamp: string;
  referrer: string;
  userAgent: string;
  ip: string;
  page: string;
  searchKeyword?: string;
  searchEngine?: string;
  // 추가 세분화 데이터
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  deviceType: "desktop" | "mobile" | "tablet";
  screenResolution: string;
  language: string;
  timezone: string;
  pageType: "home" | "blog" | "utility" | "test" | "result" | "admin" | "other";
  sessionId: string;
  isNewVisitor: boolean;
  visitDuration?: number; // 페이지 체류 시간
  // 테스트 관련 데이터
  testCompleted?: string; // 완료한 테스트 ID
  testResult?: Record<string, unknown>; // 테스트 결과 데이터
  testType?: string; // 테스트 종류
}

/**
 * Optional on-device visit log read by the internal /admin page. It is not the
 * user's NTRP history (see ntrp-results.ts) and is written only when production
 * external effects are enabled, so local, test, and preview runs leave no log.
 * Only the referrer origin is kept; raw search terms, full referrer URLs, the
 * raw user-agent string, and result payloads are not stored.
 */
export function isVisitorLogEnabled(): boolean {
  return isExternalEffectsActiveInDocument();
}

export function referrerOrigin(referrer: string): string {
  if (!referrer) return "";
  try {
    return new URL(referrer).origin;
  } catch {
    return "";
  }
}

function appendVisitorLog(entry: VisitorData): void {
  const existingData: VisitorData[] = safeJsonParse(safeStorageGet("visitorData"), []);
  existingData.push(entry);
  safeStorageSet("visitorData", JSON.stringify(existingData.slice(-MAX_STORED_VISITOR_EVENTS)));
}

function buildVisitorEntry(page: string, pageType: VisitorData["pageType"], sessionId: string, isNewVisitor: boolean): VisitorData {
  const deviceInfo = parseUserAgent(navigator.userAgent || "");
  const origin = referrerOrigin(document.referrer);
  return {
    id: Math.random().toString(36).substring(2, 11),
    timestamp: new Date().toISOString(),
    referrer: origin,
    userAgent: "",
    ip: "client-side",
    page,
    searchEngine: getSearchEngine(origin) || undefined,
    browser: deviceInfo.browser,
    browserVersion: deviceInfo.browserVersion,
    os: deviceInfo.os,
    osVersion: deviceInfo.osVersion,
    deviceType: getDeviceType(),
    screenResolution: `${screen.width}x${screen.height}`,
    language: navigator.language || "unknown",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    pageType,
    sessionId,
    isNewVisitor,
  };
}

// 테스트 완료 이벤트 추적 함수
export const trackTestCompletion = (testType: string) => {
  if (isVisitorLogEnabled()) {
    try {
      appendVisitorLog({
        ...buildVisitorEntry(window.location.pathname, "test", getOrCreateSessionId(), false),
        testCompleted: testType,
        testType,
      });
      updateTestCompletionCount(testType);
    } catch (error) {
      if (process.env.NODE_ENV === "development") {
        console.error("Failed to track test completion:", error);
      }
    }
  }

  // Local storage can fail independently of the analytics consent/delivery path.
  trackEvent(TRACKING_EVENTS.TEST_COMPLETED, {
    test_type: testType,
    page_path: window.location.pathname,
    questionnaire_version: testType === "ntrp-test" ? "legacy-v2" : undefined,
    scoring_version: testType === "ntrp-test" ? "legacy-sum-v2" : undefined,
    measurement_version: "v2",
  });
};

/**
 * Sends one completion per completion id. `_details` is accepted for existing
 * callers but intentionally neither stored nor sent.
 */
export const trackTestCompletionOnce = (
  testType: string,
  completionId: string,
  _details?: Record<string, unknown>,
) => {
  const key = `test_completion_once:${testType}:${completionId}`;
  if (trackedCompletionIds.has(key)) return;

  try {
    if (typeof window !== "undefined") {
      if (window.sessionStorage.getItem(key)) return;
      window.sessionStorage.setItem(key, "1");
    }
  } catch {
    // Storage can be unavailable in private mode or embedded browsers.
  }

  trackedCompletionIds.add(key);
  trackTestCompletion(testType);
};

// 테스트 완료 횟수 관리
function updateTestCompletionCount(testType: string) {
  const countKey = `test_completion_${testType}`;
  const currentCount = parseInt(safeStorageGet(countKey) || "0");
  safeStorageSet(countKey, (currentCount + 1).toString());
}

// 테스트 완료 횟수 조회
export const getTestCompletionCount = (testType: string): number => {
  const countKey = `test_completion_${testType}`;
  return parseInt(safeStorageGet(countKey) || "0");
};

// 인기 테스트 순위 계산
export const getPopularTests = (): { testType: string; count: number }[] => {
  const testTypes = [
    "ntrp-test",
    "play-style-test",
    "flexibility-test",
    "reaction-test",
    "focus-training",
    "string-tension",
    "equipment-recommendation",
    "training-planner",
    "match-analyzer",
    "injury-risk",
    "nutrition-guide",
  ];

  return testTypes
    .map((testType) => ({
      testType,
      count: getTestCompletionCount(testType),
    }))
    .sort((a, b) => b.count - a.count);
};

export default function Tracking() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleToolStart = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;

      const destination = new URL(anchor.href, window.location.href);
      if (destination.origin !== window.location.origin) return;

      const normalizedPath = destination.pathname.replace(
        /^\/tennis_friends(?=\/|$)/,
        "",
      );
      const match = normalizedPath.match(/^\/utility\/([^/]+)\/?$/);
      if (!match) return;

      trackEvent(TRACKING_EVENTS.TOOL_STARTED, {
        tool_slug: match[1],
        source_path: pathname,
        destination_path: normalizedPath,
      });
    };

    document.addEventListener("click", handleToolStart);
    return () => document.removeEventListener("click", handleToolStart);
  }, [pathname]);

  useEffect(() => {
    // 방문자 데이터 수집 (클라이언트 사이드 저장)
    const trackVisit = () => {
      if (isVisitorLogEnabled()) {
        try {
          appendVisitorLog(buildVisitorEntry(pathname, getPageType(pathname), getOrCreateSessionId(), isNewVisitorCheck()));
        } catch (error) {
          if (process.env.NODE_ENV === "development") {
            console.error("Failed to track visit:", error);
          }
        }
      }

      if (isBlogArticlePath(pathname) && document.querySelector("article")) {
        trackEvent(TRACKING_EVENTS.BLOG_POST_VIEWED, {
          page_path: pathname,
          measurement_version: "v2",
        });
      }
    };

    // 페이지 로드 시 트래킹 (관리자 페이지는 제외)
    if (pathname.startsWith("/admin") || typeof window === "undefined") return;

    let idleId: number | null = null;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(trackVisit, { timeout: 3000 });
    } else {
      timeoutId = globalThis.setTimeout(trackVisit, 2000);
    }

    return () => {
      if (idleId !== null) window.cancelIdleCallback(idleId);
      if (timeoutId !== null) globalThis.clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isBlogArticlePath(pathname) || typeof window === "undefined") return;

    const article = document.querySelector("article");
    if (!article) return;

    let didTrack = false;
    let reachedThreshold = false;
    let visibleMs = 0;
    let visibleSince = document.visibilityState === "visible" ? Date.now() : null;

    const checkReadComplete = () => {
      if (didTrack) return;
      if (document.visibilityState === "visible" &&
          hasReachedArticleThreshold(article.getBoundingClientRect(), window.innerHeight)) {
        reachedThreshold = true;
      }
      const currentVisibleMs = visibleMs + (visibleSince === null ? 0 : Date.now() - visibleSince);
      if (reachedThreshold && currentVisibleMs >= CONTENT_READ_MIN_SECONDS * 1000) {
        didTrack = true;
        trackEvent(TRACKING_EVENTS.CONTENT_READ_COMPLETE, {
          page_path: pathname,
          read_seconds: Math.round(currentVisibleMs / 1000),
          measurement_version: "v2",
        });
      }
    };

    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        visibleSince = Date.now();
      } else if (visibleSince !== null) {
        visibleMs += Date.now() - visibleSince;
        visibleSince = null;
      }
      checkReadComplete();
    };

    checkReadComplete();
    window.addEventListener("scroll", checkReadComplete, { passive: true });
    window.addEventListener("resize", checkReadComplete);
    document.addEventListener("visibilitychange", onVisibilityChange);
    const timer = window.setInterval(checkReadComplete, 1000);

    return () => {
      window.removeEventListener("scroll", checkReadComplete);
      window.removeEventListener("resize", checkReadComplete);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.clearInterval(timer);
    };
  }, [pathname]);

  return null; // UI를 렌더링하지 않음
}

// 검색 엔진 감지
function getSearchEngine(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    if (url.hostname.includes("google")) return "Google";
    if (url.hostname.includes("naver")) return "Naver";
    if (url.hostname.includes("daum")) return "Daum";
    if (url.hostname.includes("bing")) return "Bing";
    if (url.hostname.includes("yahoo")) return "Yahoo";
    return "기타";
  } catch {
    return null;
  }
}

// 세션 ID 생성 및 관리
function getOrCreateSessionId(): string {
  const sessionKey = "tennis_session_id";
  let sessionId = safeStorageGet(sessionKey);

  if (!sessionId) {
    sessionId =
      Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
    safeStorageSet(sessionKey, sessionId);

    // 세션 만료 시간 설정 (24시간)
    const expiry = Date.now() + 24 * 60 * 60 * 1000;
    safeStorageSet("tennis_session_expiry", expiry.toString());
  } else {
    // 세션 만료 확인
    const expiry = parseInt(
      safeStorageGet("tennis_session_expiry") || "0",
    );
    if (Date.now() > expiry) {
      // 세션 만료됨, 새로운 세션 생성
      sessionId =
        Math.random().toString(36).substring(2, 11) + Date.now().toString(36);
      safeStorageSet(sessionKey, sessionId);
      const newExpiry = Date.now() + 24 * 60 * 60 * 1000;
      safeStorageSet("tennis_session_expiry", newExpiry.toString());
    }
  }

  return sessionId;
}

// 신규 방문자 확인
function isNewVisitorCheck(): boolean {
  const visitorKey = "tennis_first_visit";
  const firstVisit = safeStorageGet(visitorKey);

  if (!firstVisit) {
    safeStorageSet(visitorKey, new Date().toISOString());
    return true;
  }

  return false;
}

// User-Agent 파싱
function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();

  // 브라우저 정보
  let browser = "Unknown";
  let browserVersion = "Unknown";

  if (ua.includes("chrome") && !ua.includes("edg")) {
    browser = "Chrome";
    const match = ua.match(/chrome\/([0-9.]+)/);
    browserVersion = match ? match[1] : "Unknown";
  } else if (ua.includes("firefox")) {
    browser = "Firefox";
    const match = ua.match(/firefox\/([0-9.]+)/);
    browserVersion = match ? match[1] : "Unknown";
  } else if (ua.includes("safari") && !ua.includes("chrome")) {
    browser = "Safari";
    const match = ua.match(/version\/([0-9.]+)/);
    browserVersion = match ? match[1] : "Unknown";
  } else if (ua.includes("edg")) {
    browser = "Edge";
    const match = ua.match(/edg\/([0-9.]+)/);
    browserVersion = match ? match[1] : "Unknown";
  } else if (ua.includes("opera") || ua.includes("opr")) {
    browser = "Opera";
    const match = ua.match(/(?:opera|opr)\/([0-9.]+)/);
    browserVersion = match ? match[1] : "Unknown";
  }

  // OS 정보
  let os = "Unknown";
  let osVersion = "Unknown";

  if (ua.includes("windows")) {
    os = "Windows";
    const match = ua.match(/windows nt ([0-9.]+)/);
    if (match) {
      const version = match[1];
      osVersion =
        version === "10.0"
          ? "10/11"
          : version === "6.3"
            ? "8.1"
            : version === "6.2"
              ? "8"
              : version === "6.1"
                ? "7"
                : version;
    }
  } else if (ua.includes("mac os x")) {
    os = "macOS";
    const match = ua.match(/mac os x ([0-9_]+)/);
    if (match) {
      osVersion = match[1].replace(/_/g, ".");
    }
  } else if (ua.includes("linux")) {
    os = "Linux";
  } else if (ua.includes("android")) {
    os = "Android";
    const match = ua.match(/android ([0-9.]+)/);
    osVersion = match ? match[1] : "Unknown";
  } else if (
    ua.includes("ios") ||
    ua.includes("iphone") ||
    ua.includes("ipad")
  ) {
    os = "iOS";
    const match = ua.match(/os ([0-9_]+)/);
    if (match) {
      osVersion = match[1].replace(/_/g, ".");
    }
  }

  return { browser, browserVersion, os, osVersion };
}

// 디바이스 타입 확인
function getDeviceType(): "desktop" | "mobile" | "tablet" {
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  // 태블릿 확인
  if (width >= 768 && width <= 1024) {
    return "tablet";
  }

  // 모바일 확인
  if (
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) ||
    width < 768
  ) {
    return "mobile";
  }

  return "desktop";
}

// 페이지 타입 분류
function getPageType(
  pathname: string,
): "home" | "blog" | "utility" | "test" | "result" | "admin" | "other" {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/admin")) return "admin";
  if (pathname.startsWith("/blog")) return "blog";
  if (pathname.includes("/test")) return "test";
  if (pathname.includes("/result")) return "result";
  if (pathname.startsWith("/utility")) return "utility";

  return "other";
}
