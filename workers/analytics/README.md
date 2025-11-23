# Cloudflare Workers - Analytics API

테니스 프렌즈의 방문자 데이터 수집 및 통계 제공을 위한 Cloudflare Workers입니다.

## 🚀 최적화 완료

이 Worker는 다음 최적화가 적용되었습니다:

- ✅ **KV 배치 작업**: 병렬 처리로 성능 향상 (5-10배)
- ✅ **에러 처리**: 자동 재시도 로직 (Exponential Backoff)
- ✅ **Rate Limiting**: DDoS 공격 방지
- ✅ **CORS 개선**: 동적 Origin 허용
- ✅ **데이터 구조 개선**: 날짜별 인덱스로 효율적인 데이터 관리
- ✅ **크론 작업 최적화**: 효율적인 통계 집계

자세한 내용은 [OPTIMIZATION.md](./OPTIMIZATION.md)를 참조하세요.

## 🚀 배포 방법

### 1. KV 네임스페이스 생성

```bash
# KV 네임스페이스 생성
wrangler kv:namespace create "ANALYTICS_KV"
wrangler kv:namespace create "ANALYTICS_KV" --preview

# 생성된 네임스페이스 ID를 wrangler.toml에 추가
```

### 2. 환경 변수 설정

```bash
# wrangler.toml 또는 Cloudflare 대시보드에서 설정
ADMIN_PASSWORD=your-secure-password
```

### 3. 배포

```bash
cd workers/analytics
npm install
npm run deploy
```

## 📡 API 엔드포인트

### POST `/api/track`
방문자 데이터 수집

**Request Body:**
```json
{
  "page": "/blog/tennis-footwork-science",
  "referrer": "https://www.google.com/search?q=테니스",
  "userAgent": "Mozilla/5.0...",
  "screenWidth": 1920,
  "screenHeight": 1080,
  "language": "ko-KR",
  "timezone": "Asia/Seoul",
  "sessionId": "session-123",
  "isNewVisitor": true
}
```

### GET `/api/admin/stats?password=xxx`
통계 데이터 조회 (관리자 전용)

### GET `/api/admin/realtime?password=xxx`
실시간 통계 조회

### POST `/api/admin/clear?password=xxx`
데이터 초기화 (관리자 전용)

## ⏰ 크론 작업

매일 자정(UTC)에 통계를 집계하여 저장합니다.

## 🔧 설정

### wrangler.toml

```toml
name = "tennis-analytics"
main = "src/index.ts"
compatibility_date = "2024-01-25"

[[kv_namespaces]]
binding = "ANALYTICS_KV"
id = "your-kv-namespace-id"

[triggers]
crons = ["0 0 * * *"]  # 매일 자정

[vars]
ADMIN_PASSWORD = "your-password"
```

## 📊 데이터 구조

### KV 저장 구조

- `visitor:{id}` - 개별 방문자 데이터 (30일 TTL)
- `index:{date}` - 날짜별 방문자 ID 인덱스 (최근 10,000개, 30일 TTL)
- `stats:daily:{date}` - 일일 방문자 수 (1년 TTL)
- `stats:aggregated:{date}` - 집계된 통계 (1년 TTL)
- `stats:realtime:count` - 실시간 카운터
- `session:{sessionId}` - 세션 데이터 (1일 TTL)

## 🔒 보안

- 관리자 API는 비밀번호 인증 필요
- CORS 헤더 설정 (동적 Origin 허용)
- Rate Limiting 지원 (선택적)
- IP 주소는 Cloudflare에서 자동 추출
- 에러 메시지에서 민감한 정보 제거

