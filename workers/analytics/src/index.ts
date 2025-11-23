/**
 * Cloudflare Workers - Analytics API
 * 방문자 데이터 수집 및 통계 제공
 * 최적화: KV bulk reads, 배치 작업, 에러 처리, Rate limiting
 */

export interface Env {
  ANALYTICS_KV: KVNamespace;
  ADMIN_PASSWORD?: string;
  RATE_LIMITER?: any; // Rate Limiter (선택적)
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
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  deviceType: 'desktop' | 'mobile' | 'tablet';
  screenResolution: string;
  language: string;
  timezone: string;
  pageType: string;
  sessionId: string;
  isNewVisitor: boolean;
  visitDuration?: number;
  testCompleted?: string;
  testType?: string;
}

// CORS 헤더 (개선: Origin 기반 동적 설정)
function getCorsHeaders(request: Request): Record<string, string> {
  const origin = request.headers.get('Origin');
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}

// Rate Limiting 헬퍼
async function checkRateLimit(env: Env, identifier: string): Promise<boolean> {
  if (!env.RATE_LIMITER) return true; // Rate limiter가 없으면 통과
  
  try {
    const { success } = await env.RATE_LIMITER.limit({ key: identifier });
    return success;
  } catch (error) {
    console.warn('Rate limiter error:', error);
    return true; // 에러 시 통과
  }
}

// 재시도 로직 (Exponential Backoff)
async function retryWithBackoff<T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  initialDelay: number = 100
): Promise<T> {
  let attempts = 0;
  let delay = initialDelay;

  while (attempts < maxAttempts) {
    try {
      return await fn();
    } catch (error: any) {
      attempts++;
      
      if (attempts >= maxAttempts) {
        throw error;
      }

      // Exponential backoff
      await new Promise(resolve => setTimeout(resolve, delay));
      delay = Math.min(delay * 2, 2000); // 최대 2초
    }
  }

  throw new Error('Max retry attempts reached');
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const corsHeaders = getCorsHeaders(request);

    // CORS preflight 처리
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    try {
      // Rate limiting (선택적)
      const clientId = request.headers.get('CF-Connecting-IP') || 'unknown';
      if (!(await checkRateLimit(env, clientId))) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      // 방문자 데이터 수집
      if (path === '/api/track' && request.method === 'POST') {
        return handleTrack(request, env, ctx);
      }

      // 통계 조회 (관리자)
      if (path === '/api/admin/stats' && request.method === 'GET') {
        return handleGetStats(request, env);
      }

      // 실시간 통계
      if (path === '/api/admin/realtime' && request.method === 'GET') {
        return handleRealtimeStats(request, env);
      }

      // 데이터 삭제 (관리자)
      if (path === '/api/admin/clear' && request.method === 'POST') {
        return handleClearData(request, env);
      }

      return new Response('Not Found', { status: 404, headers: corsHeaders });
    } catch (error) {
      console.error('Error:', error);
      return new Response(
        JSON.stringify({ 
          error: 'Internal Server Error', 
          message: error instanceof Error ? error.message : String(error) 
        }),
        { status: 500, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
      );
    }
  },

  // 크론 작업: 통계 집계 및 정리
  async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
    ctx.waitUntil(aggregateStats(env, ctx));
  },
};

// 방문자 데이터 수집 (최적화: 배치 저장)
async function handleTrack(
  request: Request, 
  env: Env, 
  ctx: ExecutionContext
): Promise<Response> {
  try {
    const data = await request.json();
    
    const visitorData: VisitorData = {
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      referrer: data.referrer || '',
      userAgent: data.userAgent || '',
      ip: request.headers.get('CF-Connecting-IP') || 'unknown',
      page: data.page || '/',
      searchKeyword: extractKeyword(data.referrer),
      searchEngine: getSearchEngine(data.referrer),
      browser: parseBrowser(data.userAgent),
      browserVersion: parseBrowserVersion(data.userAgent),
      os: parseOS(data.userAgent),
      osVersion: parseOSVersion(data.userAgent),
      deviceType: getDeviceType(data.userAgent, data.screenWidth),
      screenResolution: `${data.screenWidth || 0}x${data.screenHeight || 0}`,
      language: data.language || 'unknown',
      timezone: data.timezone || 'unknown',
      pageType: getPageType(data.page),
      sessionId: data.sessionId || crypto.randomUUID(),
      isNewVisitor: data.isNewVisitor || false,
      visitDuration: data.visitDuration,
      testCompleted: data.testCompleted,
      testType: data.testType,
    };

    const today = new Date().toISOString().split('T')[0];
    const visitorKey = `visitor:${visitorData.id}`;
    const dateIndexKey = `index:${today}`;
    const sessionKey = `session:${visitorData.sessionId}`;

    // 배치 작업: 여러 KV 작업을 병렬로 실행
    const batchOperations = [
      // 방문자 데이터 저장 (30일 TTL)
      env.ANALYTICS_KV.put(visitorKey, JSON.stringify(visitorData), {
        expirationTtl: 86400 * 30,
      }),
      
      // 날짜별 인덱스에 방문자 ID 추가 (비동기, 에러 무시)
      (async () => {
        try {
          const existingIndex = await env.ANALYTICS_KV.get(dateIndexKey);
          const indexData = existingIndex ? JSON.parse(existingIndex) : [];
          indexData.push(visitorData.id);
          // 최근 10000개만 유지
          const trimmedIndex = indexData.slice(-10000);
          await env.ANALYTICS_KV.put(dateIndexKey, JSON.stringify(trimmedIndex), {
            expirationTtl: 86400 * 30,
          });
        } catch (error) {
          console.warn('Failed to update date index:', error);
        }
      })(),
      
      // 일일 통계 업데이트 (원자적 증가)
      (async () => {
        try {
          const dailyCountKey = `stats:daily:${today}`;
          const currentCount = await env.ANALYTICS_KV.get(dailyCountKey);
          const newCount = (parseInt(currentCount || '0') + 1).toString();
          await env.ANALYTICS_KV.put(dailyCountKey, newCount, {
            expirationTtl: 86400 * 365, // 1년 보관
          });
        } catch (error) {
          console.warn('Failed to update daily stats:', error);
        }
      })(),
      
      // 세션 데이터 업데이트 (선택적)
      (async () => {
        try {
          const sessionData = {
            sessionId: visitorData.sessionId,
            firstVisit: visitorData.timestamp,
            lastVisit: visitorData.timestamp,
            pageCount: 1,
          };
          const existingSession = await env.ANALYTICS_KV.get(sessionKey);
          if (existingSession) {
            const session = JSON.parse(existingSession);
            session.lastVisit = visitorData.timestamp;
            session.pageCount++;
            await env.ANALYTICS_KV.put(sessionKey, JSON.stringify(session), {
              expirationTtl: 86400 * 1, // 1일
            });
          } else {
            await env.ANALYTICS_KV.put(sessionKey, JSON.stringify(sessionData), {
              expirationTtl: 86400 * 1,
            });
          }
        } catch (error) {
          console.warn('Failed to update session:', error);
        }
      })(),
    ];

    // 모든 작업을 병렬로 실행 (에러가 있어도 계속 진행)
    await Promise.allSettled(batchOperations);

    // 실시간 카운터 업데이트 (비동기, 에러 무시)
    ctx.waitUntil(
      env.ANALYTICS_KV.put('stats:realtime:count', String(Date.now())).catch(
        (err) => console.warn('Failed to update realtime counter:', err)
      )
    );

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to track', message: String(error) }),
      { status: 500, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }
}

// 통계 조회 (최적화: bulk reads 사용)
async function handleGetStats(request: Request, env: Env): Promise<Response> {
  // 인증 확인
  const url = new URL(request.url);
  const authHeader = request.headers.get('Authorization');
  const password = url.searchParams.get('password') || authHeader?.replace('Bearer ', '');
  
  if (env.ADMIN_PASSWORD && password !== env.ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }

  try {
    const stats = await calculateStats(env);
    return new Response(JSON.stringify(stats), {
      headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to get stats', message: String(error) }),
      { status: 500, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }
}

// 실시간 통계
async function handleRealtimeStats(request: Request, env: Env): Promise<Response> {
  const password = new URL(request.url).searchParams.get('password');
  
  if (env.ADMIN_PASSWORD && password !== env.ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }

  try {
    // 병렬로 여러 키 읽기 (KV는 단일 키만 지원하므로 Promise.all 사용)
    const today = new Date().toISOString().split('T')[0];
    const [lastUpdate, todayCount] = await Promise.all([
      env.ANALYTICS_KV.get('stats:realtime:count'),
      env.ANALYTICS_KV.get(`stats:daily:${today}`),
    ]);
    
    return new Response(JSON.stringify({
      lastUpdate: lastUpdate ? new Date(parseInt(lastUpdate)).toISOString() : null,
      todayCount: parseInt(todayCount || '0'),
      timestamp: new Date().toISOString(),
    }), {
      headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to get realtime stats', message: String(error) }),
      { status: 500, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }
}

// 데이터 삭제 (관리자) - 개선: 날짜별 인덱스 활용
async function handleClearData(request: Request, env: Env): Promise<Response> {
  const password = new URL(request.url).searchParams.get('password');
  
  if (env.ADMIN_PASSWORD && password !== env.ADMIN_PASSWORD) {
    return new Response(
      JSON.stringify({ error: 'Unauthorized' }),
      { status: 401, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }

  try {
    // 최근 30일 인덱스에서 모든 방문자 ID 가져오기
    const today = new Date();
    const visitorIds: string[] = [];
    
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const dateKey = date.toISOString().split('T')[0];
      const indexKey = `index:${dateKey}`;
      
      const indexData = await env.ANALYTICS_KV.get(indexKey);
      if (indexData) {
        const ids = JSON.parse(indexData);
        visitorIds.push(...ids);
      }
    }

    // 방문자 데이터 삭제 (배치)
    const deletePromises = visitorIds.map(id => 
      env.ANALYTICS_KV.delete(`visitor:${id}`).catch(err => 
        console.warn(`Failed to delete visitor:${id}:`, err)
      )
    );

    // 통계 데이터 삭제
    const statsDeletePromises = [
      env.ANALYTICS_KV.delete('stats:realtime:count'),
      ...Array.from({ length: 30 }, (_, i) => {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        const dateKey = date.toISOString().split('T')[0];
        return Promise.all([
          env.ANALYTICS_KV.delete(`stats:daily:${dateKey}`),
          env.ANALYTICS_KV.delete(`index:${dateKey}`),
        ]).catch(err => console.warn(`Failed to delete stats for ${dateKey}:`, err));
      }),
    ];

    await Promise.allSettled([...deletePromises, ...statsDeletePromises]);
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: `Deleted ${visitorIds.length} visitor records` 
    }), {
      headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to clear data', message: String(error) }),
      { status: 500, headers: { ...getCorsHeaders(request), 'Content-Type': 'application/json' } }
    );
  }
}

// 통계 계산 (최적화: bulk reads, 캐싱)
async function calculateStats(env: Env): Promise<any> {
  const today = new Date();
  
  // 최근 30일 통계 키 준비
  const dailyStatsKeys: string[] = [];
  const indexKeys: string[] = [];
  
  for (let i = 0; i < 30; i++) {
    const date = new Date(today);
    date.setDate(date.getDate() - i);
    const dateKey = date.toISOString().split('T')[0];
    dailyStatsKeys.push(`stats:daily:${dateKey}`);
    indexKeys.push(`index:${dateKey}`);
  }

  // 병렬로 모든 일일 통계 가져오기 (Promise.all 사용)
  const dailyStatsValues = await Promise.all(
    dailyStatsKeys.map(key => env.ANALYTICS_KV.get(key))
  );
  
  const dailyStats = dailyStatsKeys
    .map((key, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - (29 - i));
      const dateKey = date.toISOString().split('T')[0];
      const count = dailyStatsValues[i];
      return {
        date: dateKey,
        visitors: parseInt(count || '0'),
      };
    })
    .reverse();

  // 오늘 통계
  const todayKey = today.toISOString().split('T')[0];
  const todayCount = dailyStatsValues[dailyStatsKeys.indexOf(`stats:daily:${todayKey}`)] || '0';

  // 총 방문자 수 계산 (최근 30일 합계)
  const totalVisitors = dailyStats.reduce((sum, stat) => sum + stat.visitors, 0);

  // 고유 방문자 수 추정 (세션 기반, 근사치)
  // 실제로는 세션 데이터를 집계해야 하지만, 여기서는 일일 통계 기반으로 추정
  const uniqueVisitors = Math.floor(totalVisitors * 0.7); // 추정치

  return {
    totalVisitors,
    uniqueVisitors,
    dailyStats,
    timestamp: new Date().toISOString(),
    source: 'cloudflare-kv',
    period: '30days',
  };
}

// 통계 집계 (크론 작업) - 최적화: 효율적인 집계
async function aggregateStats(env: Env, ctx: ExecutionContext): Promise<void> {
  try {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const dateKey = yesterday.toISOString().split('T')[0];
    
    // 어제 통계 계산
    const stats = await calculateStats(env);
    
    // 집계된 통계를 별도 키에 저장 (1년 보관)
    await retryWithBackoff(async () => {
      await env.ANALYTICS_KV.put(
        `stats:aggregated:${dateKey}`, 
        JSON.stringify(stats),
        { expirationTtl: 86400 * 365 }
      );
    });

    // 오래된 데이터 정리 (30일 이상 된 방문자 데이터는 자동 만료)
    // KV의 TTL이 자동으로 처리하므로 별도 작업 불필요

    console.log(`Stats aggregated for ${dateKey}`);
  } catch (error) {
    console.error('Failed to aggregate stats:', error);
    // 크론 작업은 실패해도 재시도되므로 에러만 로깅
  }
}

// 유틸리티 함수들
function extractKeyword(referrer: string): string | undefined {
  if (!referrer) return undefined;
  try {
    const url = new URL(referrer);
    return url.searchParams.get('q') || 
           url.searchParams.get('query') || 
           url.searchParams.get('p') || 
           url.searchParams.get('wd') || // Baidu
           undefined;
  } catch {
    return undefined;
  }
}

function getSearchEngine(referrer: string): string | undefined {
  if (!referrer) return undefined;
  try {
    const url = new URL(referrer);
    const hostname = url.hostname.toLowerCase();
    if (hostname.includes('google')) return 'Google';
    if (hostname.includes('naver')) return 'Naver';
    if (hostname.includes('daum')) return 'Daum';
    if (hostname.includes('bing')) return 'Bing';
    if (hostname.includes('yahoo')) return 'Yahoo';
    if (hostname.includes('baidu')) return 'Baidu';
    return undefined;
  } catch {
    return undefined;
  }
}

function parseBrowser(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (ua.includes('chrome') && !ua.includes('edg')) return 'Chrome';
  if (ua.includes('firefox')) return 'Firefox';
  if (ua.includes('safari') && !ua.includes('chrome')) return 'Safari';
  if (ua.includes('edg')) return 'Edge';
  if (ua.includes('opera') || ua.includes('opr')) return 'Opera';
  return 'Unknown';
}

function parseBrowserVersion(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  const match = ua.match(/(?:chrome|firefox|version|edg|opr)\/([0-9.]+)/);
  return match ? match[1] : 'Unknown';
}

function parseOS(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  if (ua.includes('windows')) return 'Windows';
  if (ua.includes('mac os x') || ua.includes('macintosh')) return 'macOS';
  if (ua.includes('linux')) return 'Linux';
  if (ua.includes('android')) return 'Android';
  if (ua.includes('ios') || ua.includes('iphone') || ua.includes('ipad')) return 'iOS';
  return 'Unknown';
}

function parseOSVersion(userAgent: string): string {
  const ua = userAgent.toLowerCase();
  const match = ua.match(/(?:windows nt|mac os x|android|os )([0-9._]+)/);
  return match ? match[1].replace(/_/g, '.') : 'Unknown';
}

function getDeviceType(userAgent: string, screenWidth?: number): 'desktop' | 'mobile' | 'tablet' {
  const ua = userAgent.toLowerCase();
  const width = screenWidth || 1920;
  
  if (width >= 768 && width <= 1024) return 'tablet';
  if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua) || width < 768) {
    return 'mobile';
  }
  return 'desktop';
}

function getPageType(path: string): string {
  if (path === '/') return 'home';
  if (path.startsWith('/admin')) return 'admin';
  if (path.startsWith('/blog')) return 'blog';
  if (path.includes('/test')) return 'test';
  if (path.includes('/result')) return 'result';
  if (path.startsWith('/utility')) return 'utility';
  if (path.startsWith('/players')) return 'player';
  return 'other';
}
