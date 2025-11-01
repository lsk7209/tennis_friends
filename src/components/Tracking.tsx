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
}

export default function Tracking() {
  const pathname = usePathname();

  useEffect(() => {
    // 방문자 데이터 수집 (클라이언트 사이드 저장)
    const trackVisit = () => {
      try {
        const visitorData: VisitorData = {
          id: Math.random().toString(36).substr(2, 9),
          timestamp: new Date().toISOString(),
          referrer: document.referrer || '',
          userAgent: navigator.userAgent || '',
          ip: 'client-side',
          page: pathname,
          searchKeyword: extractKeyword(document.referrer) || undefined,
          searchEngine: getSearchEngine(document.referrer) || undefined
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
