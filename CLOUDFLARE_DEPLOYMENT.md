# 🚀 클라우드플레어 배포 가이드

## 📋 배포 전 체크리스트

### ✅ 완료된 작업
- [x] Next.js 정적 export 설정 (`next.config.ts`)
- [x] 빌드 오류 수정 (모든 페이지 정상 빌드)
- [x] Suspense 경계 설정 (useSearchParams 오류 해결)
- [x] 정적 export 호환성 설정 (robots.ts, sitemap.ts, API routes)
- [x] wrangler.toml 설정 완료
- [x] 환경 변수 설정

## 🛠️ 배포 단계

### 1. 클라우드플레어 계정 설정
```bash
# Wrangler CLI 설치 (이미 설치됨)
npm install -g wrangler

# 클라우드플레어 계정 로그인
wrangler login
```

### 2. 프로젝트 빌드 및 배포
```bash
# 정적 사이트 빌드
npm run cf-build

# 클라우드플레어 Pages에 배포
npm run deploy
```

### 3. 환경 변수 설정 (클라우드플레어 대시보드)
클라우드플레어 Pages 대시보드에서 다음 환경 변수 설정:

**Production 환경:**
- `NEXT_PUBLIC_SITE_URL`: `https://tennisfrens.com`
- `NEXT_PUBLIC_SUPABASE_URL`: `[Supabase 프로젝트 URL]`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: `[Supabase Anon Key]`

### 4. 커스텀 도메인 설정
- 도메인: `tennisfrens.com`
- SSL/TLS: Full (Strict)
- DNS 설정: CNAME 레코드 추가

## 📁 배포된 파일 구조
```
out/
├── index.html
├── blog/
│   ├── [slug]/
│   └── page.html
├── utility/
│   ├── ntrp-test/
│   ├── string-tension/
│   ├── play-style-test/
│   └── ...
├── _next/
│   └── static/
└── robots.txt, sitemap.xml
```

## 🔧 추가 설정

### 리다이렉트 설정
```toml
# wrangler.toml에 이미 설정됨
[[redirects]]
from = "/utility"
to = "/utility/ntrp-test"
status = 301
```

### 성능 최적화
- 이미지 최적화: `unoptimized: true` (정적 export용)
- 압축: `compress: true`
- 보안 헤더: X-Frame-Options, X-Content-Type-Options 등

## 🚨 주의사항

### API Routes 제한
- 정적 export에서는 API routes가 제한됨
- `/api/tension`은 환경 변수 없이도 작동하도록 수정됨
- 향후 Supabase 연동 시 환경 변수 필수

### Supabase 연동
현재 Supabase 환경 변수가 없어도 작동하지만, 다음 기능들이 제한됨:
- NTRP 테스트 결과 저장
- 통계 데이터 수집
- 리더보드 기능

## 📊 배포 후 확인사항

### 1. 기본 기능 테스트
- [ ] 홈페이지 로딩
- [ ] 블로그 포스트 표시
- [ ] 유틸리티 페이지 접근
- [ ] 모바일 반응형 확인

### 2. SEO 확인
- [ ] robots.txt 접근 가능
- [ ] sitemap.xml 접근 가능
- [ ] 메타 태그 정상 표시

### 3. 성능 확인
- [ ] 페이지 로딩 속도
- [ ] 이미지 최적화
- [ ] Core Web Vitals 점수

## 🔄 향후 업데이트

### 자동 배포 설정
GitHub Actions를 통한 자동 배포 설정 예정:
```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: tennis-friends
          directory: out
```

### 데이터베이스 연동
Supabase 환경 변수 설정 후 다음 기능 활성화:
- 사용자 데이터 저장
- 통계 수집
- 리더보드 기능

## 📞 지원

배포 관련 문제 발생 시:
1. 클라우드플레어 대시보드 로그 확인
2. 빌드 로그 검토
3. 환경 변수 설정 확인
4. 도메인 DNS 설정 확인

---

**배포 완료 후 사이트 URL:** https://tennisfrens.com