# Cloudflare 최적화 관리자 시스템

## 🎯 개요

클라우드플레어 Workers, KV, Cron을 활용한 실시간 통계 및 관리자 시스템입니다.

## 🏗️ 아키텍처

```
┌─────────────────┐
│  Next.js App    │
│  (Frontend)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Cloudflare      │
│ Workers API     │
│ /api/track      │
│ /api/admin/*    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Cloudflare KV   │
│ (데이터 저장)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Cron Triggers   │
│ (통계 집계)      │
└─────────────────┘
```

## 📦 구성 요소

### 1. Cloudflare Workers (`workers/analytics/`)
- 방문자 데이터 수집 API
- 통계 조회 API
- 실시간 통계 API
- 데이터 관리 API

### 2. Cloudflare KV
- 방문자 데이터 저장 (30일 보관)
- 일일 통계 저장
- 집계된 통계 저장 (1년 보관)

### 3. 크론 작업
- 매일 자정(UTC) 통계 집계
- 오래된 데이터 정리

### 4. 프론트엔드 연동
- `src/lib/cloudflare-analytics.ts` - API 클라이언트
- `src/components/Tracking.tsx` - 자동 데이터 수집
- `src/app/admin/page.tsx` - 관리자 대시보드

## 🚀 배포 방법

### 1단계: KV 네임스페이스 생성

```bash
cd workers/analytics
wrangler kv:namespace create "ANALYTICS_KV"
wrangler kv:namespace create "ANALYTICS_KV" --preview
```

생성된 ID를 `wrangler.toml`에 추가

### 2단계: Workers 배포

```bash
npm install
npm run deploy
```

### 3단계: 환경 변수 설정

프론트엔드 `.env.local`:
```bash
NEXT_PUBLIC_ANALYTICS_API_URL=https://tennis-analytics.your-account.workers.dev
```

Workers `wrangler.toml`:
```toml
[vars]
ADMIN_PASSWORD = "your-secure-password"
```

## 📊 주요 기능

### 데이터 수집
- 자동 방문자 추적
- 검색 키워드 추출
- 디바이스 정보 수집
- 세션 관리

### 통계 분석
- 실시간 통계
- 일일/주간/월별 통계
- 지역별 통계
- 키워드 분석
- 사용자 행동 분석
- 테스트 전환율

### 관리자 기능
- 데이터 검증
- 데이터 초기화
- 실시간 모니터링
- Cloudflare 연동 상태 확인

## 💰 비용

### 무료 플랜
- Workers: 100,000 요청/일
- KV: 100,000 읽기/쓰기/일
- 크론: 1회/일

### 유료 플랜 (필요시)
- Workers: $5/월 (1,000만 요청)
- KV: $0.50/GB 저장공간

## 🔧 설정 파일

- `workers/analytics/wrangler.toml` - Workers 설정
- `workers/analytics/src/index.ts` - Workers 코드
- `src/lib/cloudflare-analytics.ts` - API 클라이언트
- `docs/cloudflare-analytics-setup.md` - 상세 설정 가이드

## 📝 API 엔드포인트

### POST `/api/track`
방문자 데이터 수집

### GET `/api/admin/stats?password=xxx`
통계 조회

### GET `/api/admin/realtime?password=xxx`
실시간 통계

### POST `/api/admin/clear?password=xxx`
데이터 초기화

## 🔒 보안

- 관리자 API는 비밀번호 인증
- CORS 헤더 설정
- IP 주소는 Cloudflare에서 자동 추출
- HTTPS 강제

## 📈 모니터링

Cloudflare 대시보드에서 확인:
- Workers 요청 수 및 에러율
- KV 읽기/쓰기 수
- 크론 작업 실행 로그
- 응답 시간

## 🐛 트러블슈팅

### Workers 배포 실패
- KV 네임스페이스 ID 확인
- wrangler.toml 설정 확인

### 데이터가 안 보임
- API URL 환경 변수 확인
- Workers 로그 확인
- KV에 데이터 저장되는지 확인

### 크론 작업 미실행
- wrangler.toml의 triggers 확인
- Cloudflare 대시보드에서 크론 활성화 확인

