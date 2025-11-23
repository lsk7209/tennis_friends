/**
 * Cloudflare Analytics API 클라이언트
 * Workers API와 통신하여 데이터 수집 및 통계 조회
 * 최적화: 에러 처리, 재시도 로직, 타입 안정성
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_ANALYTICS_API_URL || 'https://tennis-analytics.your-account.workers.dev';

export interface TrackEvent {
  page: string;
  referrer?: string;
  userAgent?: string;
  screenWidth?: number;
  screenHeight?: number;
  language?: string;
  timezone?: string;
  sessionId?: string;
  isNewVisitor?: boolean;
  visitDuration?: number;
  testCompleted?: string;
  testType?: string;
}

export interface StatsData {
  totalVisitors: number;
  uniqueVisitors: number;
  dailyStats: { date: string; visitors: number }[];
  timestamp: string;
  source: string;
  period?: string;
  [key: string]: any; // 추가 필드 허용
}

export interface RealtimeStats {
  lastUpdate: string | null;
  todayCount: number;
  timestamp: string;
}

// 재시도 로직 (Exponential Backoff)
async function retryFetch(
  url: string,
  options: RequestInit,
  maxAttempts: number = 3,
  initialDelay: number = 100
): Promise<Response> {
  let attempts = 0;
  let delay = initialDelay;

  while (attempts < maxAttempts) {
    try {
      const response = await fetch(url, options);
      
      // 429 (Rate Limit) 또는 5xx 에러만 재시도
      if (response.status === 429 || (response.status >= 500 && response.status < 600)) {
        if (attempts < maxAttempts - 1) {
          await new Promise(resolve => setTimeout(resolve, delay));
          delay = Math.min(delay * 2, 2000); // 최대 2초
          attempts++;
          continue;
        }
      }
      
      return response;
    } catch (error) {
      attempts++;
      if (attempts >= maxAttempts) {
        throw error;
      }
      await new Promise(resolve => setTimeout(resolve, delay));
      delay = Math.min(delay * 2, 2000);
    }
  }

  throw new Error('Max retry attempts reached');
}

/**
 * 방문자 데이터 수집
 * 실패해도 에러를 throw하지 않음 (비동기 로깅)
 */
export async function trackVisit(event: TrackEvent): Promise<boolean> {
  try {
    const response = await retryFetch(`${API_BASE_URL}/api/track`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(event),
    });

    if (!response.ok && response.status !== 429) {
      // Rate limit은 재시도하지만, 다른 에러는 로깅만
      console.warn('Failed to track visit:', response.status, response.statusText);
    }

    return response.ok;
  } catch (error) {
    // 네트워크 에러는 조용히 실패 (사용자 경험에 영향 없음)
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to track visit:', error);
    }
    return false;
  }
}

/**
 * 통계 데이터 조회
 */
export async function getStats(password?: string): Promise<StatsData | null> {
  try {
    const url = new URL(`${API_BASE_URL}/api/admin/stats`);
    if (password) {
      url.searchParams.set('password', password);
    }

    const response = await retryFetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid password');
      }
      throw new Error(`Failed to fetch stats: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as StatsData;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to get stats:', error);
    }
    throw error;
  }
}

/**
 * 실시간 통계 조회
 */
export async function getRealtimeStats(password?: string): Promise<RealtimeStats | null> {
  try {
    const url = new URL(`${API_BASE_URL}/api/admin/realtime`);
    if (password) {
      url.searchParams.set('password', password);
    }

    const response = await retryFetch(url.toString(), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid password');
      }
      throw new Error(`Failed to fetch realtime stats: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data as RealtimeStats;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to get realtime stats:', error);
    }
    throw error;
  }
}

/**
 * 데이터 초기화
 */
export async function clearData(password: string): Promise<boolean> {
  try {
    const url = new URL(`${API_BASE_URL}/api/admin/clear`);
    url.searchParams.set('password', password);

    const response = await retryFetch(url.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      if (response.status === 401) {
        throw new Error('Unauthorized: Invalid password');
      }
      throw new Error(`Failed to clear data: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Failed to clear data:', error);
    }
    return false;
  }
}

/**
 * API 연결 상태 확인
 */
export async function checkConnection(): Promise<boolean> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/admin/realtime`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // 짧은 타임아웃 (연결 확인만)
      signal: AbortSignal.timeout(3000),
    });
    return response.ok || response.status === 401; // 401도 연결은 성공
  } catch (error) {
    return false;
  }
}
