# TennisFriends 최적화 진단 리포트

- **작성일**: 2026-05-26
- **데이터 기간**: 2026-04-25 ~ 2026-05-23 (GSC 28일)
- **도메인**: www.tennisfrens.com

---

## TL;DR — 즉시 잡아야 하는 5가지

1. **카니발리제이션** — `www.` 와 no-`www.` 두 호스트가 동시 인덱싱됨 (NTRP 페이지 클릭 15 vs 1로 분산). → 301 redirect 추가 필요.
2. **미정의 Tailwind 토큰** — `text-text-light`, `text-text-muted`, `bg-content-dark` 가 5개 파일·74회 사용되는데 정의된 적 없음. **라이트 모드에서 텍스트가 안 보이거나 잘못 렌더링됨**. about/contact/블로그 동적 페이지 전부 영향.
3. **AdSense 광고 렌더 안 됨** — `.env.local` 부재 + `NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT`/`_BOTTOM_SLOT` 미설정 → 광고 슬롯이 `null` 반환 → 광고 영역 자체가 안 그려짐.
4. **노출 高·CTR 0% 선수 페이지** — `martin-landaluce` 345노출/0.87%, `miomir-kecmanovic` 158노출/0% 등. 제목·설명 SEO 약함.
5. **PSI 측정 불가** — 익명 PSI 호출 429 차단. API Key 필요.

---

## 1. GSC 28일 검색 성과 (실측)

### 전체 지표
| 지표 | 값 |
|---|---|
| 총 클릭 | 49 |
| 총 노출 | 2,243 |
| 평균 CTR | 2.18% (Google 평균 3~5% 대비 낮음) |
| 평균 순위 | 11.64 (1페이지 끝 ~ 2페이지 초) |
| 인덱싱된 페이지 | 243 |
| 인덱싱된 쿼리 | 133 |

### 기기 분포 — **모바일 우선이 정당함**
| 기기 | 클릭 | 노출 | CTR | 평균 순위 |
|---|---|---|---|---|
| MOBILE | 37 (76%) | 1,560 (70%) | 2.37% | **9.70** |
| DESKTOP | 12 (24%) | 633 (28%) | 1.90% | 16.35 |
| TABLET | 0 | 27 | 0% | 8.11 |

→ 모바일이 데스크탑보다 평균 순위 6.6칸 높음. 모바일 우선 최적화 정당화.

### Top 클릭 페이지 (요약)
| Page | Clicks | Impr | CTR | Pos |
|---|---|---|---|---|
| `www./utility/ntrp-test` | 15 | 77 | **19.48%** | 4.82 |
| `www./` | 5 | 41 | 12.20% | 7.20 |
| `tennisfrens.com/players/jannik-sinner` ⚠️ no-www | 4 | 21 | 19.05% | 16.52 |
| `www./players/martin-landaluce` | 3 | **345** | **0.87%** | 9.33 |
| `www./blog/tennis-club-fee-split-guide` | 3 | 8 | 37.50% | 10.63 |
| `tennisfrens.com/utility/ntrp-test` ⚠️ no-www 중복 | 1 | 11 | 9.09% | 7.82 |

### 노출 大·CTR 0% (개선 1순위)
| Page | Impr | Clicks | CTR | Pos |
|---|---|---|---|---|
| `players/martin-landaluce` | 345 | 3 | 0.87% | 9.33 |
| `players/arthur-landercknech` | 203 | 0 | 0% | 10.44 |
| `players/miomir-kecmanovic` | 158 | 0 | 0% | 9.34 |

→ 위치 좋은데 클릭이 안 나옴 = **title/description이 검색의도와 미스매치**. NTRP(19.48%)는 잘 됐으니 그 패턴을 따라가야 함.

상세 CSV: `docs/reports/gsc-{pages,queries,page-query,device}-2026-05-26.csv`

---

## 2. 코드 정적 분석

### 2-1. 미정의 Tailwind 토큰 (CRITICAL UX 버그)

`tailwind.config` 또는 `globals.css`에 정의된 적 없는 토큰을 다음 파일들이 사용 중:

| 파일 | 라인수 점유 | 영향 |
|---|---|---|
| `src/app/contact/page.tsx` | 32회 | 페이지 전체 |
| `src/app/about/page.tsx` | 21회 | 페이지 전체 |
| `src/app/blog/[slug]/page.tsx` | 12회 | **블로그 동적 라우트 — 카니발/사이트 핵심** |
| `src/components/RelatedContent.tsx` | 6회 | **모든 페이지 하단 관련글 컴포넌트** |
| `src/components/AuthorByline.tsx` | 3회 | `dark:` prefix만 → 라이트 모드 영향 X |

사용된 미정의 토큰:
- `text-text-light` (텍스트 의도 안 보임)
- `text-text-muted` / `text-text-muted/80`
- `bg-content-dark`
- `bg-background-dark`

게다가 `app/blog/[slug]/page.tsx`는 `prose prose-invert max-w-none` 으로 **라이트 모드에서도 invert 강제** 적용 → 본문 다크 톤 + 사이트 라이트 배경 충돌.

**올바른 대체 (shadcn 토큰 활용)**:
| 미정의 → | 대체 |
|---|---|
| `text-text-light` | `text-foreground` |
| `text-text-muted` | `text-muted-foreground` |
| `bg-content-dark` | `bg-card` |
| `bg-background-dark` | `bg-background` |
| `prose prose-invert` | `prose dark:prose-invert` (조건부) |

### 2-2. 블로그 본문 영역 폭 / 톤

- `components/blog/Article.tsx` (정적 블로그용): `max-w-[1380px]` — 사이트 다른 컨테이너(`max-w-7xl` = 1280px)보다 100px 넓음. 일관성 부족하나 가독성은 OK
- `app/blog/[slug]/page.tsx` (동적 블로그용): `container mx-auto max-w-4xl px-4 py-12` + 본문 영역 다크 강제 → **동적/정적 블로그 두 가지 다른 렌더링 경로 공존**

### 2-3. next/image 점검

| 파일 | priority | sizes | 평가 |
|---|---|---|---|
| `components/blog/Article.tsx` | ✓ | ✓ | OK |
| `components/players/PlayerProfileCard.tsx` | ✓ | ✓ | OK |
| `app/players/page.tsx` | (확인 필요) | (확인 필요) | 리스트 페이지 LCP 영향 |
| `app/players/[slug]/page.tsx` | ✓ | ✗ (fixed dim) | OK (192x192 고정) |

### 2-4. 모바일 360px 반응형

전수 조사 결과 모바일 깨질 가능성 있는 패턴은 거의 없음:
- 표는 모두 `overflow-x-auto`로 감쌈 (정적 블로그 30+ 파일)
- 고정 width 사용은 `TennisCourtDiagram` 의 `max-w-[600px]` 뿐 (모바일에서 100%로 줄어듦)
- `Article` 컨테이너 `max-w-[1380px]` 도 모바일에서 100%

→ 추가 모바일 검증은 dev 서버 + 실기기 확인이 필요하나 코드 정적으로는 깨질 패턴 없음.

### 2-5. AdSense 슬롯

- `AdSenseSlot` 컴포넌트 사용처: `app/blog/[slug]/page.tsx` 본문 상단/하단 2곳뿐
- 슬롯 ID ENV (`NEXT_PUBLIC_ADSENSE_ARTICLE_TOP_SLOT`, `_BOTTOM_SLOT`): **미설정 → 슬롯 컴포넌트가 `null` 반환 → 광고 영역 자체가 안 그려짐**
- `.env.local` 부재 확인됨
- AdSense 메인 스크립트(`AdSense` 컴포넌트)는 정상 작동 — 다만 슬롯이 없어 본문 광고 노출 0
- **수익 0** 상태로 추정

---

## 3. CWV / 속도 (PSI)

익명 PSI 호출 5개 동시 시도 → 모두 429. 단일 IP·간격 부족으로 차단.

**필요**: PageSpeed Insights API Key (무료 25k/일)
- 발급: https://console.cloud.google.com/apis/credentials
- 활성화 필요 API: PageSpeed Insights API
- 받으면 `scripts/fetch-psi-data.mjs` 작성 → 5개 페이지 × (mobile/desktop) = 10건 측정

**대체 진단** (코드 기반 예측):
| 항목 | 상태 |
|---|---|
| `next/image` 최적화 | ✓ Vercel 환경에서 AVIF/WebP, deviceSizes/imageSizes 명시 |
| `optimizePackageImports` | ✓ lucide-react, framer-motion, recharts 등 9종 트리쉐이킹 |
| `compress` | ✓ 활성화 |
| `removeConsole` (production) | ✓ error/warn만 유지 |
| 사이트맵/RSS/llms.txt 캐시 헤더 | ✓ 1시간 |
| robots.txt 캐시 | ✓ 24시간 |
| HSTS + CSP + 보안 헤더 | ✓ 전부 적용 |
| AdSense `setTimeout(1500ms)` 로 지연 로드 | ✓ LCP 보호 |
| 폰트 (Inter `display: swap`) | ✓ |
| **검증 안 됨**: 실측 LCP/INP/CLS | ⚠️ PSI 필요 |

---

## 4. SEO / AEO / GEO 점검

| 항목 | 상태 |
|---|---|
| robots.ts | ✓ Googlebot/Yeti/Bingbot/Daumoa 명시, AI봇 9종 허용, Bytespider 차단 |
| sitemap.xml + sitemap-naver.xml | ✓ 동적 생성 (`src/lib/sitemap-entries.ts`) |
| `public/llms.txt`, `llms-full.txt`, `ai-index.json` | ✓ 존재, 빌드 시 자동 생성 (`prebuild` hook) |
| JSON-LD | ✓ Organization, WebSite, BlogPosting, FAQPage, Person, Breadcrumb |
| Canonical | ✓ 모든 페이지 |
| OG 이미지 (1200×630) | ✓ 동적 생성 (`/api/og`) |
| Naver/Daum/Bing verification meta | ✓ ENV 기반 |
| **카니발리제이션** | ❌ www/no-www 동시 인덱싱 |

---

## 5. 자동 발행 파이프라인 점검

| 단계 | 상태 |
|---|---|
| GSC sitemap 자동 제출 (`scripts/submit-gsc-sitemap.js`) | ✓ |
| IndexNow Bing/Naver/IndexNow.org 자동 제출 (`scripts/submit-indexnow.js`) | ✓ Key `46d9a30e05e90f665fa353387fa67c4c` |
| `postdeploy` hook 연결 (`npm run search:notify:postdeploy`) | ✓ 자동 트리거 |
| GSC 서비스 계정 소유자 추가 | ✓ 완료 (`id-ai-179@cursorai-451704.iam.gserviceaccount.com`) |
| Google Indexing API (일 200건 무료) | ⚠️ **미구현** — 신규 URL 즉시 인덱싱 누락 |

→ 발행 파이프라인은 거의 다 갖춰져 있음. Google Indexing API만 추가하면 완벽.

---

## 6. 우선순위 수정안 (Phase 별)

### Phase 2a — 즉시 자동 수정 (이번 세션)
| # | 항목 | 영향 | 위험 |
|---|---|---|---|
| 1 | `next.config.ts`에 no-www → www 301 redirect 추가 | 카니발 해소, NTRP 페이지 클릭 통합 | 낮음 (Vercel 도메인 설정과 중복 가능, 검증 필요) |
| 2 | `RelatedContent.tsx` 미정의 토큰 → shadcn 토큰 교체 | 모든 페이지 하단 영역 가독성 회복 | 낮음 |
| 3 | `about/page.tsx`, `contact/page.tsx` 토큰 교체 | 페이지 전체 가독성 회복 | 낮음 |
| 4 | `blog/[slug]/page.tsx` 토큰 교체 + `prose prose-invert` → `prose dark:prose-invert` | 블로그 동적 본문 정상화 | 중간 (광범위) |

### Phase 2b — 사용자 값 받은 후
| # | 항목 | 차단 사유 |
|---|---|---|
| 5 | AdSense 슬롯 ID 3개 ENV 설정 + Vercel 환경 변수 반영 | 사용자 슬롯 ID 필요 |
| 6 | PSI 5×2 = 10건 측정 → 실측 기반 추가 최적화 | PSI API Key 필요 |
| 7 | GA4 28일 페이지뷰/체류/이탈 수집 | GA4 Property ID + 뷰어 권한 |

### Phase 3 — SEO 보강
| # | 항목 |
|---|---|
| 8 | 노출 高·CTR 0% 페이지(martin-landaluce, miomir-kecmanovic) title/description 개선 — NTRP(19.48%) 패턴 차용 |
| 9 | 선수 페이지 generateMetadata 영문 위주 → 한국어 검색의도 매칭 강화 |
| 10 | Naver 40자 / 80자 길이 기준 검증 |

### Phase 4 — 자동 파이프라인 강화
| # | 항목 |
|---|---|
| 11 | Google Indexing API 추가 (`scripts/submit-google-indexing.js`) — 신규 URL 즉시 인덱싱 |
| 12 | `notify-search-engines.js`에 Indexing API 추가 |
| 13 | Vercel postdeploy hook 동작 검증 (실제 트리거 로그 확인) |

---

## 7. 사용자에게 필요한 값 (재요청)

| 항목 | 어디서 |
|---|---|
| **GA4 Property ID** (숫자 9~10자리) | GA4 → 관리 → 속성 설정 |
| **GA4 서비스 계정 뷰어 권한** | GA4 → 관리 → 속성 액세스 관리 → `id-ai-179@cursorai-451704.iam.gserviceaccount.com` 추가 |
| **AdSense 슬롯 ID 3개** | AdSense → 광고 → 광고 단위 → 각 단위 코드의 `data-ad-slot` 값 (홈 인피드 / 블로그 본문 상단 / 블로그 본문 하단) |
| **PageSpeed Insights API Key** | https://console.cloud.google.com/apis/credentials → "PageSpeed Insights API" 활성화 → API Key 발급 |

---

## 참고 파일

- `docs/reports/gsc-pages-2026-05-26.csv` — 243페이지 전체
- `docs/reports/gsc-queries-2026-05-26.csv` — 133쿼리 전체
- `docs/reports/gsc-page-query-2026-05-26.csv` — 149쌍 (카니발/매칭 분석용)
- `docs/reports/gsc-device-2026-05-26.csv` — 기기별
- `docs/reports/gsc-summary-2026-05-26.json` — 요약 + Top10 + Low-CTR Top10
- `scripts/fetch-gsc-data.mjs` — 재실행 가능
