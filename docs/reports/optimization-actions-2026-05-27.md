# TennisFriends 최적화 적용 내역 — 2026-05-27

진단 리포트 `optimization-audit-2026-05-26.md` 기반 Phase 2a + 2c 적용.

## Phase 2a — Tailwind 토큰 + 카니발리제이션 (자동 수정 완료)

### 1. `next.config.ts` — no-www → www 301 host redirect
```ts
{
  source: "/:path*",
  has: [{ type: "host", value: "tennisfrens.com" }],
  destination: "https://www.tennisfrens.com/:path*",
  permanent: true,
},
```
- **목적**: GSC 카니발리제이션 해소. www / no-www 두 호스트 동시 인덱싱 분산 (NTRP 페이지 15 vs 1 클릭) 통합
- **효과 측정**: 배포 후 1~2주 GSC `https://www.tennisfrens.com/*` 노출 증가 확인

### 2. 미정의 Tailwind 토큰 → shadcn 토큰 교체

| 미정의 (no-op) | shadcn 토큰 |
|---|---|
| `text-text-light` | `text-foreground` |
| `text-text-muted` | `text-muted-foreground` |
| `bg-content-dark` | `bg-card` |
| `bg-background-dark` | `bg-background` |

**적용 파일**:
- `src/app/about/page.tsx` (21회)
- `src/app/contact/page.tsx` (32회)
- `src/app/blog/[slug]/page.tsx` (12회)
- `src/components/RelatedContent.tsx` (6회)

→ 라이트 모드에서 본문 텍스트 가독성 회복. 미정의 토큰은 Tailwind v4에서 무시되어 시각적 깨짐 발생 중이었음.

### 3. `blog/[slug]/page.tsx` `prose-invert` 조건부화
```diff
- className="prose prose-invert max-w-none"
+ className="prose dark:prose-invert max-w-none"
```
- 동적 블로그 글 본문이 라이트 모드에서도 다크 톤으로 강제되던 문제 해소

## Phase 2c — 블로그 인덱싱 해제 (GSC 노출 5+, B 전략)

### `src/lib/blog-quality.ts` LOW_QUALITY 목록에서 4개 슬러그 제거

| Slug | GSC 노출 | 클릭 | 평균 위치 |
|---|---|---|---|
| `tennis-strategy-beat-pusher` | 11 | 0 | 6.36 |
| `tennis-hybrid-string-setup` | 9 | 1 | 6.67 |
| `tennis-windy-condition-tips` | 7 | 0 | 4.14 |
| `tennis-scoring-system-guide` | 5 | 0 | 15.00 |

**조치 효과 흐름**:
1. `isIndexableBlogSlug(slug)` → `true` 로 전환
2. `blog/[slug]/page.tsx` `generateMetadata`에서 `robots: { index: true }` 적용
3. `sitemap-entries.ts` 자동 포함
4. 다음 Vercel 배포 → `postdeploy` hook이 `search:notify` 실행
5. GSC sitemap 자동 제출 + IndexNow (Bing/Naver/IndexNow.org) 동시 알림

**측정 계획**: 2~4주 후 GSC에서 위 4개 슬러그의 노출·CTR 추이 확인. 효과 검증되면 노출 3+ 슬러그까지 단계 확대.

## 추가 데이터 수집 인프라

### `scripts/fetch-gsc-data.mjs` (신규)
- GSC searchAnalytics 28일 자동 수집 (page / query / page×query / device)
- 출력: `docs/reports/gsc-*-2026-05-26.csv` + summary JSON
- 재실행 가능: `node scripts/fetch-gsc-data.mjs`

### `scripts/fetch-ga4-data.mjs` (신규)
- GA4 Data API 28일 자동 수집 (pages / source / device / country)
- 출력: `docs/reports/ga4-*-2026-05-26.csv` + summary JSON
- 환경변수: `GA4_PROPERTY_ID` (기본 `534356101`)
- 재실행 가능: `node scripts/fetch-ga4-data.mjs`

## GA4 28일 핵심 인사이트 (audit 리포트에 미반영분)

### 트래픽 소스 (87%가 네이버)
| Source/Medium | Sessions | Users |
|---|---|---|
| **m.search.naver.com / referral** | 811 (74%) | 750 |
| **naver / organic** | 140 (13%) | 123 |
| (direct) | 66 (6%) | 62 |
| google / organic | 47 (4%) | 41 |
| bing / organic | 13 (1%) | 13 |

→ GSC(구글)는 전체 트래픽의 4%만 보여줌. **네이버 우선 최적화로 전략 전환 필요**.

### 기기별 (모바일 79%)
| Device | Sessions | Bounce | Avg Duration |
|---|---|---|---|
| mobile | 867 (79%) | 30.22% | 107.6s |
| desktop | 218 (20%) | 33.03% | 179.9s |
| tablet | 10 (1%) | 20.00% | 196.4s |

### Top 페이지 (실사용)
1. `/utility/ntrp-test/test` — 368뷰, 이탈 2.6%, 체류 24초 (정상 wizard flow)
2. `/utility/ntrp-test/result` — 319뷰, 이탈 7.9%, **체류 162초**
3. `/` — 228뷰
4. `/utility/ntrp-test` — 344뷰 (2개 title 합산 — metadata 변경 캐시)
5. `/utility/string-tension/test` — 90뷰, **engagement 100%**

### 블로그 트래픽 거의 0
- `/blog` 15뷰 (28일)
- 100편 글 GA4 page 목록에 거의 안 나타남
- **진짜 원인**: `blog-quality.ts` LOW_QUALITY 114개가 noindex (이번 해제로 일부 회복 기대)

## 발견된 다른 빈틈 (미수정 — 다음 단계 후보)

### 선수 페이지 한국어 메타 약함
| 한국어 쿼리 | 노출 | 클릭 | 위치 |
|---|---|---|---|
| "란달루세" | 211 | 2 | 9.27 |
| "아르튀르 랭데르크네슈" | 195 | 0 | 10.48 |
| "미오미르 케크마노비치" | 149 | 0 | 9.34 |

→ `players/[slug]/page.tsx` `generateMetadata`가 영문 title 우선:
```ts
const baseTitle = `${player.name} tennis player | ranking, profile, ${tour}`;
```
한국어 검색 매칭 약함. 패턴 재작성 시 즉시 CTR 회복 기대.

### Google Indexing API 미구현
- 신규 URL 즉시 인덱싱 요청 누락 (일 200건 무료)
- `scripts/submit-google-indexing.js` 작성 → `search:notify` 파이프라인에 추가하면 자동화

## 다음 액션 (우선순위)

1. **dev 서버 검증** — about/contact/blog 라이트 모드 가독성 확인 (사용자 수동)
2. **선수 메타 한국어 보강** — `players/[slug]/page.tsx` 자동 수정
3. **PSI API Key 수령** — 사용자 발급, 5페이지 × mobile/desktop 측정
4. **AdSense 자동광고 확인** — 사용자 셋팅 완료 후 광고 노출 검증
5. **2~4주 후 재측정** — 위 변경 효과 GSC + GA4로 검증
