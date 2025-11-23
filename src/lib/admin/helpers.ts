/**
 * 관리자 페이지 헬퍼 함수
 */

/**
 * 리퍼러 표시 이름 추출
 */
export function getReferrerDisplay(referrer: string): string {
  if (!referrer || referrer === '') {
    return '직접 접속';
  }
  try {
    const url = new URL(referrer);
    return url.hostname.replace('www.', '');
  } catch {
    return referrer;
  }
}

/**
 * 검색 엔진 추출
 */
export function getSearchEngine(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();
    if (hostname.includes('google')) return 'Google';
    if (hostname.includes('naver')) return 'Naver';
    if (hostname.includes('daum')) return 'Daum';
    if (hostname.includes('bing')) return 'Bing';
    return null;
  } catch {
    return null;
  }
}

/**
 * 검색 키워드 추출
 */
export function extractKeyword(referrer: string): string | undefined {
  if (!referrer) return undefined;
  try {
    const url = new URL(referrer);
    return url.searchParams.get('q') || 
           url.searchParams.get('query') || 
           url.searchParams.get('p') || 
           undefined;
  } catch {
    return undefined;
  }
}

/**
 * 날짜 포맷팅
 */
export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateString;
  }
}

/**
 * 숫자 포맷팅
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat('ko-KR').format(num);
}

/**
 * 퍼센트 포맷팅
 */
export function formatPercent(value: number, decimals: number = 1): string {
  return `${value.toFixed(decimals)}%`;
}

/**
 * 시간 포맷팅 (초 → 분:초)
 */
export function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}분 ${remainingSeconds}초`;
}

