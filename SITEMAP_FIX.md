# 사이트맵 도메인 오류 수정 가이드

## 문제 상황
Google Search Console에서 "URL이 허용되지 않음" 오류가 238개 발생했습니다.
- 사이트맵 URL: `https://www.tennisfrens.com/sitemap.xml`
- 사이트맵에 포함된 URL: `https://tennisfriends.co.kr` (잘못된 도메인)

## 원인
사이트맵이 `tennisfriends.co.kr` 도메인을 사용하고 있지만, 실제 사이트는 `www.tennisfrens.com`입니다.

## 해결 방법

### 1. Vercel 환경 변수 설정 (필수)

Vercel 대시보드에서 다음 환경 변수를 설정하세요:

**Production 환경:**
```
NEXT_PUBLIC_SITE_URL=https://www.tennisfrens.com
```

**Preview 환경:**
```
NEXT_PUBLIC_SITE_URL=https://www.tennisfrens.com
```

**Development 환경:**
```
NEXT_PUBLIC_SITE_URL=https://www.tennisfrens.com
```

### 2. 환경 변수 설정 방법

1. Vercel 대시보드 접속
2. 프로젝트 선택
3. **Settings** → **Environment Variables** 이동
4. `NEXT_PUBLIC_SITE_URL` 변수 추가/수정
5. 값: `https://www.tennisfrens.com`
6. 모든 환경(Production, Preview, Development)에 적용
7. **Redeploy** 클릭하여 재배포

### 3. 코드 변경 사항

다음 파일들의 기본값을 `www.tennisfrens.com`으로 변경했습니다:

- `src/app/sitemap.ts`
- `src/app/sitemap-naver.xml/route.ts`
- `src/app/rss.xml/route.ts`
- `src/app/robots.ts`

### 4. 재배포 후 확인

1. 재배포 완료 후 다음 URL 확인:
   - `https://www.tennisfrens.com/sitemap.xml`
   - `https://www.tennisfrens.com/sitemap-naver.xml`
   - `https://www.tennisfrens.com/rss.xml`
   - `https://www.tennisfrens.com/robots.txt`

2. 사이트맵의 모든 URL이 `www.tennisfrens.com` 도메인을 사용하는지 확인

3. Google Search Console에서 사이트맵 재제출:
   - Google Search Console 접속
   - **Sitemaps** 메뉴
   - 기존 사이트맵 삭제 후 재제출
   - 또는 **테스트** 버튼으로 오류 확인

### 5. 추가 확인 사항

- 모든 페이지의 canonical URL이 올바른 도메인을 사용하는지 확인
- Open Graph 이미지 URL이 올바른 도메인을 사용하는지 확인
- 구조화된 데이터(JSON-LD)의 URL이 올바른 도메인을 사용하는지 확인

## 참고

- 환경 변수는 빌드 시점에 적용되므로, 변경 후 반드시 재배포가 필요합니다.
- `NEXT_PUBLIC_` 접두사가 붙은 변수는 클라이언트와 서버 모두에서 사용 가능합니다.
- 여러 도메인을 사용하는 경우, 각 환경별로 다른 값을 설정할 수 있습니다.

