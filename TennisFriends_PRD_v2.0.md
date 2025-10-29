# 🎾 TennisFriends 통합 PRD v2.0

> "데이터로 내 실력을 확인하고, 함께 성장하는 테니스 커뮤니티"

---

## 0️⃣ 개요

| 항목     | 내용                                                                                                    |
| ------ | ----------------------------------------------------------------------------------------------------- |
| 프로젝트명  | TennisFriends                                                                                         |
| 유형     | 콘텐츠 허브 + 유틸리티 + 커뮤니티                                                                                  |
| 목적     | 테니스 실력 측정(NTRP), 장비추천, 코칭정보 제공 및 커뮤니티 연결                                                              |
| 1차 대상  | 20–50대 직장인, NTRP 2.0–4.5 레벨 아마추어 플레이어                                                                 |
| MVP 범위 | 실력 테스트 + 유틸리티 3종 + 블로그 콘텐츠 허브                                                                         |
| 기술환경   | Frontend: Next.js(App Router) + Tailwind + shadcn/ui<br>Backend: Cloudflare Functions + Supabase + KV |
| 배포     | Cloudflare Pages + Workers + KV + R2 + Cron                                                           |
| SEO 목표 | Lighthouse SEO ≥ 92 / JSON-LD 100% 유효 / Link Health 100%                                              |

---

## 1️⃣ IA & 라우팅

```
/app
 ├─ (site)
 │   ├─ page.tsx                # 홈
 │   ├─ utility/ntrp-test/      # 실력 테스트
 │   ├─ utility/string-tension/ # 텐션 계산기
 │   ├─ utility/injury-risk/    # 부상 리스크
 │   ├─ blog/[slug]/            # 블로그 상세
 │   ├─ guide/[slug]/           # HowTo 가이드
 │   ├─ about/, contact/        # 소개·문의
 │   ├─ terms/, privacy/        # 정책 페이지
 │   └─ sitemap.xml, robots.txt
 │
 └─ (admin)
     ├─ login/                  # 관리자 로그인
     ├─ dashboard/              # 게시글·유틸리티 관리
     └─ seo/, settings/         # 설정/색인 관리
```

---

## 2️⃣ 프론트엔드 (v0.dev / Cursor용)

### 🎯 목표

* 반응형·다크모드 지원
* SEO/AEO 완전 대응 (FAQPage·HowTo·BlogPosting)
* 유틸리티/콘텐츠 자동 연결 구조 (H2당 내부링크 ≥1)
* OG 이미지·JSON-LD 자동 생성

---

### 주요 페이지 요약

| 페이지             | 목적           | 주요 기능                        |
| --------------- | ------------ | ---------------------------- |
| Home            | 서비스 진입       | CTA(테스트, 텐션, 리스크), 최신 블로그 3개 |
| NTRP Test       | 실력 측정        | 질문지→결과 계산→레벨별 리포트            |
| String Tension  | 텐션 추천        | 라켓·스트링·스타일 입력→kg 계산          |
| Injury Risk     | 부상 리스크       | 나이·빈도·이력 입력→리스크 점수 시각화       |
| Blog            | 정보 콘텐츠       | MDX+TOC+FAQ+관련글 블록           |
| Guide           | HowTo 형식 가이드 | 단계별 카드/CTA                   |
| About / Contact | 신뢰·문의        | 이메일폼 / 팀소개                   |
| Admin           | 관리 도구        | 콘텐츠 CRUD / SEO 상태 / 캐시 갱신    |

---

### 공통 컴포넌트

| 컴포넌트               | 설명                      |
| ------------------ | ----------------------- |
| `<Header />`       | 로고, 메뉴, 다크모드 토글         |
| `<Footer />`       | 저작권, SNS, 정책 링크         |
| `<CTASection />`   | 주요 유틸리티 진입              |
| `<ResultCard />`   | NTRP 결과 요약              |
| `<BlogCard />`     | 블로그 리스트 카드              |
| `<TOC />`          | 자동 목차 생성                |
| `<RelatedPosts />` | 관련글 블록                  |
| `<JsonLd />`       | 구조화 데이터 자동 생성           |
| `<SEOHead />`      | Title·Meta·Canonical 자동 |

---

### 프론트엔드 요구사항

* [ ] 반응형 (360~1280px)
* [ ] 다크모드 토글
* [ ] Lighthouse SEO ≥ 92
* [ ] TOC·FAQ 자동 렌더링
* [ ] OG 이미지 `/api/og`
* [ ] 캐시: ETag + SWR
* [ ] 내부링크 자동화 (H2당 1개)
* [ ] sitemap + lastmod 자동 반영

---

## 3️⃣ 백엔드 (Cloudflare Functions + Supabase)

### 🎯 목표

* RESTful JSON API (RFC7807 에러 포맷)
* 인증/권한 관리 (Supabase Auth)
* 크론 기반 콘텐츠 리빌드/캐시 갱신
* Supabase + KV + R2 통합 구조

---

### 데이터베이스 스키마

| 테이블명                  | 설명                                  |
| --------------------- | ----------------------------------- |
| `users`               | 회원정보(id, email, nickname, level)    |
| `ntrp_results`        | 테스트 결과(score, level, desc, user_id) |
| `string_tension_logs` | 텐션 계산기 입력/결과                        |
| `injury_risk_logs`    | 부상 리스크 계산 로그                        |
| `posts`               | 블로그 글(MDX 원문, meta, tags, SEO)      |
| `settings`            | 사이트/SEO/정책 데이터                      |
| `related_links`       | 내부링크 그래프(from_slug,to_slug,weight)  |

---

### 주요 API 엔드포인트

| Method | Path                       | 설명                |
| ------ | -------------------------- | ----------------- |
| POST   | `/api/ntrp/score`          | 실력테스트 점수 계산       |
| GET    | `/api/ntrp/result/:id`     | 결과 조회             |
| POST   | `/api/tension/calc`        | 텐션 계산             |
| POST   | `/api/risk/calc`           | 부상 리스크 산출         |
| GET    | `/api/posts`               | 블로그 목록(필터/페이지네이션) |
| GET    | `/api/posts/:slug`         | 블로그 상세            |
| GET    | `/api/posts/related/:slug` | 관련글 추천            |
| POST   | `/api/admin/posts`         | 글 등록(관리자)         |
| PUT    | `/api/admin/posts/:id`     | 수정                |
| DELETE | `/api/admin/posts/:id`     | 삭제                |
| GET    | `/api/settings`            | 설정값 조회            |
| GET    | `/api/health`              | 헬스체크              |

---

### 비즈니스 로직 요약

**NTRP 계산식**

```ts
score = (answers.reduce((a,b)=>a+b) / answers.length) * 20
level = score < 40 ? "2.5 초급자" : score < 60 ? "3.0 중급자" : score < 80 ? "3.5 상급자" : "4.0 이상"
```

**텐션 계산식**

```ts
base = playStyle==="파워"?25:playStyle==="컨트롤"?23:24
if(stringType==="폴리") base-=1
if(racketModel.includes("EZONE")) base+=0.5
```

**리스크 계산식**

```ts
riskScore = (age*0.3 + weeklyMatches*5 + prevInjury*20)
category = riskScore < 40 ? "낮음" : riskScore < 70 ? "보통" : "높음"
```

---

### 캐시·성능 설계

| 항목 | 기술                             | 설명           |
| -- | ------------------------------ | ------------ |
| 캐시 | Cloudflare KV                  | 인기글/유틸 결과 캐싱 |
| DB | Supabase                       | 메인 데이터 저장    |
| 백업 | R2                             | 이미지, OG, PDF |
| 정책 | `stale-while-revalidate=86400` |              |
| 크론 | sitemap, 캐시 리빌드, GSC 핑         |              |

---

### 크론 작업 (Cloudflare Scheduler)

| 작업명               | 주기           | 설명                 |
| ----------------- | ------------ | ------------------ |
| `rebuild_sitemap` | 매일 03:00 UTC | sitemap.xml 갱신     |
| `refresh_cache`   | 6시간 간격       | 인기글 캐시 리프레시        |
| `cleanup_logs`    | 주 1회         | 90일 이상 로그 삭제       |
| `ping_gsc`        | 매일 04:00 UTC | Google/IndexNow 알림 |

---

### 보안·운영 정책

* Supabase JWT + 쿠키 세션 인증
* Rate Limit: 100req/IP/h
* RFC7807 에러 표준화
* CSRF Origin 검증
* CSP/COOP/HSTS 적용
* HTTPS only
* 데이터 익명화 로깅

---

## 4️⃣ SEO/AEO 구조화

| 스키마                        | 적용 대상     | 설명              |
| -------------------------- | --------- | --------------- |
| `WebSite` + `SearchAction` | 전역        | 검색박스 노출         |
| `BlogPosting`              | 블로그       | 각 포스트           |
| `HowTo`                    | 가이드       | 단계별 튜토리얼        |
| `FAQPage`                  | FAQ 포함 문서 | Rich Snippet    |
| `SoftwareApplication`      | 유틸리티      | NTRP·텐션·리스크 계산기 |

모든 페이지는 canonical, hreflang, lastUpdated 포함.
FAQ 3–5개, H2당 내부링크 ≥1, 메타 길이 Title(45–60), Description(110–155).

---

## 5️⃣ 메타데이터 규격 (Frontmatter)

### BlogPost

```yaml
title: "테니스 라켓 고를 때 가장 많이 하는 실수 5가지"
summary: "라켓은 단순한 장비가 아니라 당신의 스윙을 기억하는 파트너입니다."
tags: ["테니스라켓","장비추천","NTRP"]
slug: "common-tennis-racket-mistakes"
date: "2025-10-22"
readingMinutes: 4
seoTitle: "테니스 라켓 고를 때 실수 5가지 | TennisFriends"
seoDescription: "테니스 초보의 장비 선택 실수를 교정하고 안전하게 성장하는 법."
```

### UtilityTool

```json
{
  "title": "NTRP 실력 테스트",
  "slug": "ntrp-test",
  "tags": ["테니스","실력테스트","NTRP"],
  "version": "1.0",
  "inputs": ["질문10개"],
  "outputs": ["레벨","점수","해설"],
  "seoTitle": "NTRP 실력 테스트 | TennisFriends",
  "seoDescription": "당신의 테니스 실력을 객관적으로 측정해보세요."
}
```

---

## 6️⃣ 품질 게이트

| 항목          | 기준                    |
| ----------- | --------------------- |
| SEO         | Lighthouse ≥ 92       |
| CQI         | ≥70 (가독·구조·링크·참여)     |
| Link Health | 100%                  |
| JSON-LD     | 유효성 통과                |
| 관련글         | 최소 3개 (태그+임베딩 기반)     |
| 내부링크        | 첫 300자 내 1개 포함        |
| 다크모드        | 모든 페이지 대응             |
| 반응형         | 모바일 360px~데스크탑 1280px |

---

## 7️⃣ 확장 로드맵

| Phase | 기능              | 설명            |
| ----- | --------------- | ------------- |
| v1.0  | NTRP·유틸3종 + 블로그 | MVP           |
| v1.1  | 로그인 + 즐겨찾기      | Supabase Auth |
| v1.2  | 파트너 매칭 + 코트검색   | Geo 기반        |
| v1.3  | 커뮤니티/댓글         | Cloudflare D1 |
| v2.0  | 글로벌 버전(i18n)    | 영어·일본어 버전     |

---

## 8️⃣ 개발 명령 예시 (Cursor용)

**프론트엔드**

```
프레임워크: Next.js 14(App Router)
UI: Tailwind + shadcn/ui
데이터: Supabase + Cloudflare KV
아래 TennisFriends 통합 PRD에 따라
홈, NTRP 테스트, 스트링 텐션 계산기, 부상 리스크, 블로그 페이지를 구현해주세요.
SEO/AEO 스키마와 TOC, 관련글 컴포넌트 포함.
```

**백엔드**

```
백엔드: Cloudflare Functions
DB: Supabase(Auth+DB)
캐시: Cloudflare KV
API 스펙: TennisFriends 통합 PRD 기준으로 RESTful JSON + RFC7807 에러 구조로 구현.
크론 트리거(sitemap, cache, cleanup) 포함.
```

---

## 9️⃣ 클라우드플레어 배포 및 운영

### 🎯 배포 아키텍처

```
Cloudflare Pages (Frontend)
├─ Next.js 14 App Router
├─ Static Generation (ISR)
├─ Edge Runtime
└─ Custom Domain: tennis-friends.com

Cloudflare Workers (Backend)
├─ API Routes (/api/*)
├─ Cron Triggers
├─ KV Storage (캐시)
└─ R2 Storage (파일)

Supabase (Database)
├─ PostgreSQL
├─ Auth (JWT)
├─ Real-time subscriptions
└─ Row Level Security (RLS)
```

### 배포 환경 설정

| 환경 | URL | 설명 |
|------|-----|------|
| Production | `https://tennis-friends.com` | 메인 서비스 |
| Staging | `https://staging.tennis-friends.com` | 테스트 환경 |
| Preview | `https://pr-{number}.tennis-friends.com` | PR별 미리보기 |

### Cloudflare Pages 설정

```toml
# wrangler.toml
name = "tennis-friends"
compatibility_date = "2024-01-15"

[env.production]
name = "tennis-friends"
route = "tennis-friends.com/*"

[env.staging]
name = "tennis-friends-staging"
route = "staging.tennis-friends.com/*"

[[kv_namespaces]]
binding = "CACHE"
id = "your-kv-namespace-id"
preview_id = "your-preview-kv-namespace-id"

[[r2_buckets]]
binding = "ASSETS"
bucket_name = "tennis-friends-assets"
```

### 환경 변수 설정

```bash
# Cloudflare Pages Environment Variables
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
CLOUDFLARE_KV_TOKEN=your-kv-token
CLOUDFLARE_R2_TOKEN=your-r2-token
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
META_PIXEL_ID=your-pixel-id
```

### 데이터베이스 스키마 (Supabase)

```sql
-- 사용자 테이블
CREATE TABLE users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  nickname TEXT,
  ntrp_level TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- NTRP 테스트 결과
CREATE TABLE ntrp_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id TEXT,
  user_id UUID REFERENCES users(id),
  score INTEGER NOT NULL,
  level TEXT NOT NULL,
  character TEXT,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 스트링 텐션 계산 결과
CREATE TABLE tension_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id TEXT,
  user_id UUID REFERENCES users(id),
  head_size TEXT NOT NULL,
  string_type TEXT NOT NULL,
  play_style TEXT NOT NULL,
  environment TEXT NOT NULL,
  feel_preference TEXT NOT NULL,
  ntrp_level TEXT,
  tension_lb DECIMAL(4,1) NOT NULL,
  tension_kg DECIMAL(4,1) NOT NULL,
  tension_range TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 테니스 규칙 퀴즈 결과
CREATE TABLE quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  device_id TEXT,
  user_id UUID REFERENCES users(id),
  nickname TEXT,
  score INTEGER NOT NULL,
  grade TEXT NOT NULL,
  time_ms INTEGER NOT NULL,
  wrong_cats JSONB,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 블로그 포스트
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content TEXT NOT NULL,
  summary TEXT,
  tags TEXT[],
  category TEXT,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 리더보드 뷰 (최근 7일)
CREATE MATERIALIZED VIEW ntrp_top7d AS
SELECT id, score, level, character, created_at
FROM ntrp_results
WHERE created_at >= NOW() - INTERVAL '7 days'
ORDER BY score DESC
LIMIT 50;

-- 인덱스 생성
CREATE INDEX idx_ntrp_results_device_id ON ntrp_results(device_id);
CREATE INDEX idx_ntrp_results_created_at ON ntrp_results(created_at);
CREATE INDEX idx_tension_results_device_id ON tension_results(device_id);
CREATE INDEX idx_quiz_results_device_id ON quiz_results(device_id);
CREATE INDEX idx_posts_slug ON posts(slug);
CREATE INDEX idx_posts_published ON posts(published, published_at);

-- RLS 정책
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE ntrp_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE tension_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE quiz_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- 익명 사용자 읽기 허용
CREATE POLICY "Allow anonymous read access" ON posts FOR SELECT USING (published = true);
CREATE POLICY "Allow anonymous insert" ON ntrp_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON tension_results FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON quiz_results FOR INSERT WITH CHECK (true);
```

### 크론 작업 설정

```javascript
// functions/cron.js
export default {
  async scheduled(event, env, ctx) {
    switch (event.cron) {
      case '0 3 * * *': // 매일 03:00 UTC
        await rebuildSitemap(env);
        break;
      case '0 */6 * * *': // 6시간마다
        await refreshCache(env);
        break;
      case '0 0 * * 0': // 주 1회 (일요일)
        await cleanupLogs(env);
        break;
      case '0 4 * * *': // 매일 04:00 UTC
        await pingSearchEngines(env);
        break;
    }
  }
};

async function rebuildSitemap(env) {
  // sitemap.xml 재생성
  const posts = await env.DB.prepare('SELECT slug, updated_at FROM posts WHERE published = true').all();
  const sitemap = generateSitemap(posts.results);
  await env.R2.put('sitemap.xml', sitemap);
}

async function refreshCache(env) {
  // 인기 콘텐츠 캐시 갱신
  const popularPosts = await env.DB.prepare(`
    SELECT slug, title, summary FROM posts 
    WHERE published = true 
    ORDER BY created_at DESC 
    LIMIT 10
  `).all();
  
  await env.CACHE.put('popular_posts', JSON.stringify(popularPosts.results), {
    expirationTtl: 21600 // 6시간
  });
}

async function cleanupLogs(env) {
  // 90일 이상 된 로그 삭제
  await env.DB.prepare(`
    DELETE FROM ntrp_results 
    WHERE created_at < NOW() - INTERVAL '90 days'
  `).run();
  
  await env.DB.prepare(`
    DELETE FROM tension_results 
    WHERE created_at < NOW() - INTERVAL '90 days'
  `).run();
}

async function pingSearchEngines(env) {
  // Google Search Console 알림
  const sitemapUrl = 'https://tennis-friends.com/sitemap.xml';
  await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
}
```

### 성능 최적화

| 항목 | 설정 | 설명 |
|------|------|------|
| CDN | Cloudflare Global | 전 세계 엣지 캐싱 |
| 캐시 | KV Storage | API 응답 캐싱 (6시간) |
| 이미지 | Next.js Image | 자동 최적화 및 WebP 변환 |
| 압축 | Brotli | 텍스트 압축률 20% 향상 |
| 미리로딩 | Link prefetch | 중요 페이지 미리 로드 |

### 모니터링 및 알림

```javascript
// functions/monitor.js
export default {
  async fetch(request, env, ctx) {
    const health = await checkHealth(env);
    
    if (!health.ok) {
      await sendAlert(env, health);
    }
    
    return new Response(JSON.stringify(health), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
};

async function checkHealth(env) {
  const checks = {
    database: await checkDatabase(env),
    kv: await checkKV(env),
    r2: await checkR2(env)
  };
  
  return {
    ok: Object.values(checks).every(check => check.ok),
    checks,
    timestamp: new Date().toISOString()
  };
}
```

### 보안 설정

```javascript
// middleware.js
export function middleware(request) {
  const response = NextResponse.next();
  
  // 보안 헤더 추가
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  
  // CSP 설정
  response.headers.set('Content-Security-Policy', 
    "default-src 'self'; " +
    "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; " +
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
    "font-src 'self' https://fonts.gstatic.com; " +
    "img-src 'self' data: https:; " +
    "connect-src 'self' https://*.supabase.co https://www.google-analytics.com;"
  );
  
  return response;
}
```

### 배포 워크플로우

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          NEXT_PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.SUPABASE_ANON_KEY }}
      
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: tennis-friends
          directory: .next
```

---

## ✅ 결론

**TennisFriends PRD v2.0**은
검색→방문→읽기→참여→재방문 의 전 과정을 자동화·최적화하는 구조입니다.
MVP 완성 후, 유틸리티 중심으로 트래픽을 확보하고
Phase 2에서 매칭/커뮤니티로 확장하며 수익(AdSense·제휴)으로 연결됩니다.
