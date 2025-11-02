'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

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
  deviceType: 'desktop' | 'mobile' | 'tablet';
  screenResolution: string;
  language: string;
  timezone: string;
  pageType: 'home' | 'blog' | 'utility' | 'test' | 'result' | 'admin' | 'other';
  sessionId: string;
  isNewVisitor: boolean;
  visitDuration?: number; // 페이지 체류 시간
  // 테스트 관련 데이터
  testCompleted?: string; // 완료한 테스트 ID
  testResult?: any; // 테스트 결과 데이터
  testType?: string; // 테스트 종류
}

// 테스트 완료 이벤트 추적 함수
export const trackTestCompletion = (testType: string, testResult?: any) => {
  try {
    const testData: VisitorData = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      referrer: document.referrer || '',
      userAgent: navigator.userAgent || '',
      ip: 'client-side',
      page: window.location.pathname,
      searchKeyword: extractKeyword(document.referrer) || undefined,
      searchEngine: getSearchEngine(document.referrer) || undefined,
      // 디바이스 정보
      browser: parseUserAgent(navigator.userAgent).browser,
      browserVersion: parseUserAgent(navigator.userAgent).browserVersion,
      os: parseUserAgent(navigator.userAgent).os,
      osVersion: parseUserAgent(navigator.userAgent).osVersion,
      deviceType: getDeviceType(),
      screenResolution: `${screen.width}x${screen.height}`,
      language: navigator.language || 'unknown',
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      pageType: 'test',
      sessionId: getOrCreateSessionId(),
      isNewVisitor: false, // 테스트 완료는 이미 방문자로 가정
      // 테스트 관련 데이터
      testCompleted: testType,
      testResult: testResult,
      testType: testType
    };

    // 기존 방문자 데이터 가져오기
    const existingData = JSON.parse(localStorage.getItem('visitorData') || '[]');

    // 테스트 완료 데이터 추가
    existingData.push(testData);
    const recentData = existingData.slice(-1000);

    // 로컬 스토리지에 저장
    localStorage.setItem('visitorData', JSON.stringify(recentData));

    // 테스트 완료 횟수 카운터 업데이트
    updateTestCompletionCount(testType);

  } catch (error) {
    console.error('Failed to track test completion:', error);
  }
};

// 테스트 완료 횟수 관리
function updateTestCompletionCount(testType: string) {
  const countKey = `test_completion_${testType}`;
  const currentCount = parseInt(localStorage.getItem(countKey) || '0');
  localStorage.setItem(countKey, (currentCount + 1).toString());
}

// 테스트 완료 횟수 조회
export const getTestCompletionCount = (testType: string): number => {
  const countKey = `test_completion_${testType}`;
  return parseInt(localStorage.getItem(countKey) || '0');
};

// 인기 테스트 순위 계산
export const getPopularTests = (): { testType: string; count: number }[] => {
  const testTypes = [
    'ntrp-test', 'play-style-test', 'flexibility-test', 'reaction-test',
    'focus-training', 'string-tension', 'equipment-recommendation',
    'training-planner', 'match-analyzer', 'injury-risk', 'nutrition-guide'
  ];

  return testTypes.map(testType => ({
    testType,
    count: getTestCompletionCount(testType)
  })).sort((a, b) => b.count - a.count);
};

export default function Tracking() {
  const pathname = usePathname();

  useEffect(() => {
    // 방문자 데이터 수집 (클라이언트 사이드 저장)
    const trackVisit = () => {
      try {
        // 세션 관리
        const sessionId = getOrCreateSessionId();
        const isNewVisitor = isNewVisitorCheck();

        // 디바이스 및 브라우저 정보 파싱
        const deviceInfo = parseUserAgent(navigator.userAgent);

        const visitorData: VisitorData = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
          referrer: document.referrer || '',
          userAgent: navigator.userAgent || '',
          ip: 'client-side',
          page: pathname,
          searchKeyword: extractKeyword(document.referrer) || undefined,
          searchEngine: getSearchEngine(document.referrer) || undefined,
          // 추가 세분화 데이터
          browser: deviceInfo.browser,
          browserVersion: deviceInfo.browserVersion,
          os: deviceInfo.os,
          osVersion: deviceInfo.osVersion,
          deviceType: getDeviceType(),
          screenResolution: `${screen.width}x${screen.height}`,
          language: navigator.language || 'unknown',
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          pageType: getPageType(pathname),
          sessionId: sessionId,
          isNewVisitor: isNewVisitor
        };

        // 기존 방문자 데이터 가져오기
        const existingData = JSON.parse(localStorage.getItem('visitorData') || '[]');

        // 새로운 데이터 추가 (최근 1000개만 유지)
        existingData.push(visitorData);
        const recentData = existingData.slice(-1000);

        // 로컬 스토리지에 저장
        localStorage.setItem('visitorData', JSON.stringify(recentData));

        // 서버 사이드 API가 있다면 함께 호출 (정적 배포에서는 무시됨)
        fetch('/api/track', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            page: pathname,
            referrer: document.referrer,
            userAgent: navigator.userAgent,
          }),
        }).catch(() => {
          // API가 없는 경우 무시
        });
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    // 페이지 로드 시 트래킹 (관리자 페이지는 제외)
    if (!pathname.startsWith('/admin') && typeof window !== 'undefined') {
      trackVisit();
    }
  }, [pathname]);

  return null; // UI를 렌더링하지 않음
}

// 검색 엔진 감지
function getSearchEngine(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    if (url.hostname.includes('google')) return 'Google';
    if (url.hostname.includes('naver')) return 'Naver';
    if (url.hostname.includes('daum')) return 'Daum';
    if (url.hostname.includes('bing')) return 'Bing';
    if (url.hostname.includes('yahoo')) return 'Yahoo';
    return '기타';
  } catch {
    return null;
  }
}

// 검색 키워드 추출
function extractKeyword(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    const params = url.searchParams;
    return params.get('q') || params.get('query') || params.get('p') || params.get('wd');
  } catch {
    return null;
  }
}

// 세션 ID 생성 및 관리
function getOrCreateSessionId(): string {
  const sessionKey = 'tennis_session_id';
  let sessionId = localStorage.getItem(sessionKey);

  if (!sessionId) {
    sessionId = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    localStorage.setItem(sessionKey, sessionId);

    // 세션 만료 시간 설정 (24시간)
    const expiry = Date.now() + (24 * 60 * 60 * 1000);
    localStorage.setItem('tennis_session_expiry', expiry.toString());
  } else {
    // 세션 만료 확인
    const expiry = parseInt(localStorage.getItem('tennis_session_expiry') || '0');
    if (Date.now() > expiry) {
      // 세션 만료됨, 새로운 세션 생성
      sessionId = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
      localStorage.setItem(sessionKey, sessionId);
      const newExpiry = Date.now() + (24 * 60 * 60 * 1000);
      localStorage.setItem('tennis_session_expiry', newExpiry.toString());
    }
  }

  return sessionId;
}

// 신규 방문자 확인
function isNewVisitorCheck(): boolean {
  const visitorKey = 'tennis_first_visit';
  const firstVisit = localStorage.getItem(visitorKey);

  if (!firstVisit) {
    localStorage.setItem(visitorKey, new Date().toISOString());
    return true;
  }

  return false;
}

// User-Agent 파싱
function parseUserAgent(userAgent: string) {
  const ua = userAgent.toLowerCase();

  // 브라우저 정보
  let browser = 'Unknown';
  let browserVersion = 'Unknown';

  if (ua.includes('chrome') && !ua.includes('edg')) {
    browser = 'Chrome';
    const match = ua.match(/chrome\/([0-9.]+)/);
    browserVersion = match ? match[1] : 'Unknown';
  } else if (ua.includes('firefox')) {
    browser = 'Firefox';
    const match = ua.match(/firefox\/([0-9.]+)/);
    browserVersion = match ? match[1] : 'Unknown';
  } else if (ua.includes('safari') && !ua.includes('chrome')) {
    browser = 'Safari';
    const match = ua.match(/version\/([0-9.]+)/);
    browserVersion = match ? match[1] : 'Unknown';
  } else if (ua.includes('edg')) {
    browser = 'Edge';
    const match = ua.match(/edg\/([0-9.]+)/);
    browserVersion = match ? match[1] : 'Unknown';
  } else if (ua.includes('opera') || ua.includes('opr')) {
    browser = 'Opera';
    const match = ua.match(/(?:opera|opr)\/([0-9.]+)/);
    browserVersion = match ? match[1] : 'Unknown';
  }

  // OS 정보
  let os = 'Unknown';
  let osVersion = 'Unknown';

  if (ua.includes('windows')) {
    os = 'Windows';
    const match = ua.match(/windows nt ([0-9.]+)/);
    if (match) {
      const version = match[1];
      osVersion = version === '10.0' ? '10/11' : version === '6.3' ? '8.1' : version === '6.2' ? '8' : version === '6.1' ? '7' : version;
    }
  } else if (ua.includes('mac os x')) {
    os = 'macOS';
    const match = ua.match(/mac os x ([0-9_]+)/);
    if (match) {
      osVersion = match[1].replace(/_/g, '.');
    }
  } else if (ua.includes('linux')) {
    os = 'Linux';
  } else if (ua.includes('android')) {
    os = 'Android';
    const match = ua.match(/android ([0-9.]+)/);
    osVersion = match ? match[1] : 'Unknown';
  } else if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) {
    os = 'iOS';
    const match = ua.match(/os ([0-9_]+)/);
    if (match) {
      osVersion = match[1].replace(/_/g, '.');
    }
  }

  return { browser, browserVersion, os, osVersion };
}

// 디바이스 타입 확인
function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;

  // 태블릿 확인
  if (width >= 768 && width <= 1024) {
    return 'tablet';
  }

  // 모바일 확인
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) || width < 768) {
    return 'mobile';
  }

  return 'desktop';
}

// 페이지 타입 분류
function getPageType(pathname: string): 'home' | 'blog' | 'utility' | 'test' | 'result' | 'admin' | 'other' {
  if (pathname === '/') return 'home';
  if (pathname.startsWith('/admin')) return 'admin';
  if (pathname.startsWith('/blog')) return 'blog';
  if (pathname.includes('/test')) return 'test';
  if (pathname.includes('/result')) return 'result';
  if (pathname.startsWith('/utility')) return 'utility';

  return 'other';
}
