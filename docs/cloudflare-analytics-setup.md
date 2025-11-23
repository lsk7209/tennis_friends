# Cloudflare Analytics 설정 가이드

## 개요

클라우드플레어 Workers, KV, Cron을 활용한 실시간 통계 시스템입니다.

## 아키텍처

```
Frontend (Next.js)
  ↓
Cloudflare Workers API
  ↓
Cloudflare KV (데이터 저장)
  ↓
Cron Triggers (통계 집계)
```

## 설정 단계

### 1. KV 네임스페이스 생성

```bash
# 프로덕션 KV 네임스페이스
wrangler kv:namespace create "ANALYTICS_KV"

# 프리뷰 KV 네임스페이스
wrangler kv:namespace create "ANALYTICS_KV" --preview
```

생성된 ID를 `workers/analytics/wrangler.toml`에 추가:

```toml
[[kv_namespaces]]
binding = "ANALYTICS_KV"
id = "생성된-네임스페이스-ID"
preview_id = "생성된-프리뷰-ID"
```

### 2. Workers 배포

```bash
cd workers/analytics
npm install
npm run deploy
```

### 3. 환경 변수 설정

프론트엔드 `.env.local` 또는 Cloudflare Pages 환경 변수:

```bash
NEXT_PUBLIC_ANALYTICS_API_URL=https://tennis-analytics.your-account.workers.dev
```

Workers 환경 변수 (wrangler.toml 또는 대시보드):

```toml
[vars]
ADMIN_PASSWORD = "your-secure-password"
```

### 4. 프론트엔드 연동

`src/components/Tracking.tsx`가 자동으로 Workers API를 호출합니다.

`src/app/admin/page.tsx`가 Workers API를 우선 사용하고, 없으면 localStorage를 사용합니다.

## 데이터 흐름

1. **방문자 접속** → Tracking 컴포넌트가 `/api/track` 호출
2. **Workers가 데이터 저장** → KV에 방문자 데이터 저장
3. **일일 통계 업데이트** → `stats:daily:{date}` 키에 카운트 증가
4. **크론 작업** → 매일 자정에 통계 집계 및 저장
5. **관리자 페이지** → `/api/admin/stats`로 통계 조회

## 비용 최적화

- **KV 읽기/쓰기**: 무료 플랜 100,000회/일
- **Workers 요청**: 무료 플랜 100,000회/일
- **크론 작업**: 무료 플랜 1회/일

## 모니터링

Cloudflare 대시보드에서:
- Workers 요청 수
- KV 읽기/쓰기 수
- 에러 로그
- 크론 작업 실행 상태

## 트러블슈팅

### API 호출 실패
- Workers URL 확인
- CORS 설정 확인
- KV 네임스페이스 바인딩 확인

### 데이터가 안 보임
- localStorage 폴백 확인
- KV에 데이터가 저장되는지 확인
- 크론 작업이 실행되는지 확인

## 환경 변수 설정

### 프론트엔드 (.env.local)

```bash
# Cloudflare Workers API URL
NEXT_PUBLIC_ANALYTICS_API_URL=https://tennis-analytics.your-account.workers.dev

# 기타
NEXT_PUBLIC_SITE_URL=https://tennisfriends.co.kr
```

### Cloudflare Pages 환경 변수

Cloudflare Pages 대시보드 → 프로젝트 설정 → 환경 변수에서 설정:
- `NEXT_PUBLIC_ANALYTICS_API_URL`: Workers 배포 후 생성된 URL

## 최적화 완료 ✅

- [x] KV 배치 작업 및 병렬 처리
- [x] 에러 처리 및 자동 재시도 로직
- [x] Rate Limiting 지원
- [x] CORS 개선 (동적 Origin)
- [x] 데이터 구조 개선 (날짜별 인덱스)
- [x] 크론 작업 최적화

## 향후 개선

- [ ] D1 데이터베이스 연동 (더 복잡한 쿼리)
- [ ] R2에 통계 리포트 저장
- [ ] 실시간 WebSocket 연결
- [ ] 알림 기능 (이상 트래픽 감지)
- [ ] 대시보드 위젯 (Cloudflare Analytics 연동)

자세한 최적화 내용은 [workers/analytics/OPTIMIZATION.md](../../workers/analytics/OPTIMIZATION.md)를 참조하세요.

