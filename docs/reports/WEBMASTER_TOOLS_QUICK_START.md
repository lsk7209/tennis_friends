# 웹마스터 도구 빠른 시작 가이드

## 🚀 빠른 설정 (5분)

### 1. 환경 변수 설정

`.env.local` 파일 생성 및 다음 내용 추가:

```env
NEXT_PUBLIC_SITE_URL=https://www.tennisfrens.com
GOOGLE_SITE_VERIFICATION=여기에_구글_인증코드_입력
NAVER_SITE_VERIFICATION=여기에_네이버_인증코드_입력
```

### 2. 구글 Search Console 등록

1. https://search.google.com/search-console 접속
2. 속성 추가 → URL 접두어: `https://www.tennisfrens.com`
3. 소유권 확인:
   - **HTML 메타 태그** 방식 선택
   - `content` 값 복사 → `.env.local`의 `GOOGLE_SITE_VERIFICATION`에 붙여넣기
   - 배포 후 "확인" 클릭
4. 사이트맵 제출: `https://www.tennisfrens.com/sitemap.xml`

### 3. 네이버 서치어드바이저 등록

1. https://searchadvisor.naver.com/ 접속
2. 사이트 추가 → `https://www.tennisfrens.com`
3. 소유권 확인:
   - **HTML 메타 태그** 방식 선택
   - `content` 값 복사 → `.env.local`의 `NAVER_SITE_VERIFICATION`에 붙여넣기
   - 배포 후 "확인" 클릭
4. 사이트맵 제출: `https://www.tennisfrens.com/sitemap-naver.xml`

## ✅ 완료!

이제 검색 엔진이 사이트를 크롤링하고 인덱싱하기 시작합니다.

---

## 📋 생성된 파일 및 URL

### 인증 파일
- 구글: `https://www.tennisfrens.com/google[코드]` 또는 `https://www.tennisfrens.com/google[코드].html`
- 네이버: `https://www.tennisfrens.com/naver[코드].html`
- Bing: `https://www.tennisfrens.com/BingSiteAuth.xml`

### 사이트맵
- 일반: `https://www.tennisfrens.com/sitemap.xml`
- 네이버: `https://www.tennisfrens.com/sitemap-naver.xml`

### RSS
- RSS 피드: `https://www.tennisfrens.com/rss.xml`

---

## 🔍 상세 가이드

더 자세한 내용은 `WEBMASTER_TOOLS_SETUP.md` 파일을 참고하세요.

