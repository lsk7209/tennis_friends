# Cloudflare Workers 배포 가이드

## 빠른 시작

### 1. KV 네임스페이스 생성

```bash
# 프로덕션 KV 네임스페이스 생성
wrangler kv:namespace create "ANALYTICS_KV"

# 프리뷰 KV 네임스페이스 생성
wrangler kv:namespace create "ANALYTICS_KV" --preview
```

생성된 ID를 `wrangler.toml`에 추가:

```toml
[[kv_namespaces]]
binding = "ANALYTICS_KV"
id = "생성된-프로덕션-ID"
preview_id = "생성된-프리뷰-ID"
```

### 2. 환경 변수 설정

`wrangler.toml`에서 비밀번호 설정:

```toml
[vars]
ADMIN_PASSWORD = "your-secure-password-here"
```

또는 Cloudflare 대시보드에서 설정:
- Workers & Pages → Analytics Worker → Settings → Variables

### 3. 배포

```bash
cd workers/analytics
npm install
npm run deploy
```

배포 후 생성된 URL을 확인하고, 프론트엔드 환경 변수에 추가:

```bash
NEXT_PUBLIC_ANALYTICS_API_URL=https://tennis-analytics.your-account.workers.dev
```

## 크론 작업 확인

배포 후 Cloudflare 대시보드에서:
1. Workers & Pages → Analytics Worker
2. Triggers 탭 확인
3. Cron Triggers가 활성화되어 있는지 확인

## 테스트

### 방문자 데이터 수집 테스트

```bash
curl -X POST https://tennis-analytics.your-account.workers.dev/api/track \
  -H "Content-Type: application/json" \
  -d '{
    "page": "/test",
    "referrer": "https://www.google.com/search?q=테니스",
    "userAgent": "Mozilla/5.0...",
    "screenWidth": 1920,
    "screenHeight": 1080,
    "language": "ko-KR",
    "timezone": "Asia/Seoul",
    "sessionId": "test-session",
    "isNewVisitor": true
  }'
```

### 통계 조회 테스트

```bash
curl "https://tennis-analytics.your-account.workers.dev/api/admin/stats?password=your-password"
```

## 모니터링

Cloudflare 대시보드에서 확인:
- 요청 수
- 에러율
- KV 읽기/쓰기 수
- 크론 작업 실행 로그

## 트러블슈팅

### KV 네임스페이스 바인딩 오류
- `wrangler.toml`의 네임스페이스 ID 확인
- Workers 설정에서 KV 바인딩 확인

### 크론 작업이 실행되지 않음
- `wrangler.toml`의 `[triggers]` 섹션 확인
- Cloudflare 대시보드에서 크론 트리거 활성화 확인

### CORS 오류
- `corsHeaders`가 모든 응답에 포함되는지 확인
- OPTIONS 요청 처리 확인

