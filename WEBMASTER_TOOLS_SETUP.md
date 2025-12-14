# 네이버/구글 웹마스터 도구 설정 가이드

## 📋 개요

이 가이드는 TennisFriends 사이트를 네이버 서치어드바이저와 구글 Search Console에 등록하고 최적화하는 방법을 설명합니다.

---

## 🔧 환경 변수 설정

`.env.local` 파일에 다음 변수들을 추가하세요:

```env
# 사이트 URL
NEXT_PUBLIC_SITE_URL=https://tennisfriends.co.kr

# 구글 Search Console 인증 코드
GOOGLE_SITE_VERIFICATION=your-google-verification-code

# 네이버 서치어드바이저 인증 코드
NAVER_SITE_VERIFICATION=your-naver-verification-code

# 다음 검색 등록 인증 코드 (선택)
DAUM_SITE_VERIFICATION=your-daum-verification-code

# Bing 웹마스터 도구 인증 코드 (선택)
BING_SITE_VERIFICATION=your-bing-verification-code
```

---

## 🔍 구글 Search Console 설정

### 1단계: Search Console 접속 및 속성 추가

1. **Google Search Console 접속**
   - https://search.google.com/search-console

2. **속성 추가**
   - "속성 추가" 클릭
   - "URL 접두어" 방식 선택
   - 사이트 URL 입력: `https://tennisfriends.co.kr`

### 2단계: 소유권 확인

#### 방법 1: HTML 메타 태그 (권장)

1. **메타 태그 방식 선택**
2. 제공된 메타 태그에서 `content` 값 복사
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. `.env.local` 파일에 추가:
   ```env
   GOOGLE_SITE_VERIFICATION=YOUR_VERIFICATION_CODE
   ```
4. 배포 후 "확인" 클릭

#### 방법 2: HTML 파일 업로드

1. **HTML 파일 방식 선택**
2. 제공된 파일명 복사 (예: `google1234567890.html`)
3. 파일명에서 `google`과 `.html` 제거한 코드를 `.env.local`에 추가:
   ```env
   GOOGLE_SITE_VERIFICATION=1234567890
   ```
4. URL 확인: `https://tennisfriends.co.kr/google1234567890`
5. 배포 후 "확인" 클릭

### 3단계: 사이트맵 제출

1. **사이트맵 메뉴로 이동**
2. **새 사이트맵 추가** 클릭
3. 다음 사이트맵 제출:
   ```
   https://tennisfriends.co.kr/sitemap.xml
   ```

### 4단계: 추가 설정

1. **국가 타겟팅**
   - 설정 > 국가 타겟팅
   - 한국 선택

2. **URL 검사 도구**
   - URL 검사 도구로 개별 페이지 인덱싱 요청 가능

---

## 🔍 네이버 서치어드바이저 설정

### 1단계: 서치어드바이저 접속 및 사이트 등록

1. **네이버 서치어드바이저 접속**
   - https://searchadvisor.naver.com/

2. **사이트 등록**
   - "웹마스터 도구" > "사이트 추가"
   - 사이트 URL 입력: `https://tennisfriends.co.kr`

### 2단계: 소유권 확인

#### 방법 1: HTML 메타 태그 (권장)

1. **HTML 메타 태그 방식 선택**
2. 제공된 메타 태그에서 `content` 값 복사
   ```html
   <meta name="naver-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
3. `.env.local` 파일에 추가:
   ```env
   NAVER_SITE_VERIFICATION=YOUR_VERIFICATION_CODE
   ```
4. 배포 후 "확인" 클릭

#### 방법 2: HTML 파일 업로드

1. **HTML 파일 방식 선택**
2. 제공된 파일명 복사 (예: `naver1234567890.html`)
3. 파일명에서 `naver`와 `.html` 제거한 코드를 `.env.local`에 추가:
   ```env
   NAVER_SITE_VERIFICATION=1234567890
   ```
4. URL 확인: `https://tennisfriends.co.kr/naver1234567890.html`
5. 배포 후 "확인" 클릭

### 3단계: 사이트맵 제출

1. **요청** > **사이트맵 제출** 메뉴로 이동
2. 다음 사이트맵 제출:
   ```
   https://tennisfriends.co.kr/sitemap-naver.xml
   ```
   또는
   ```
   https://tennisfriends.co.kr/sitemap.xml
   ```

### 4단계: RSS 피드 등록 (선택)

1. **요청** > **RSS 제출** 메뉴로 이동
2. RSS 피드 URL 입력:
   ```
   https://tennisfriends.co.kr/rss.xml
   ```

### 5단계: 추가 설정

1. **검색 최적화**
   - 모바일 친화성 확인
   - 페이지 속도 확인
   - 구조화된 데이터 확인

2. **수집 현황**
   - 수집 현황에서 크롤링 상태 확인
   - 수집 오류 확인 및 수정

---

## 📊 모니터링 및 최적화

### 구글 Search Console

1. **성능 보고서**
   - 검색 성과 확인
   - 클릭률, 노출수, 평균 순위 확인

2. **인덱스 커버리지**
   - 인덱싱된 페이지 수 확인
   - 오류 페이지 확인 및 수정

3. **핵심 웹 바이탈**
   - 페이지 속도 확인
   - 사용자 경험 지표 확인

### 네이버 서치어드바이저

1. **수집 현황**
   - 수집된 페이지 수 확인
   - 수집 오류 확인

2. **검색 노출 현황**
   - 노출 키워드 확인
   - 클릭률 확인

3. **모바일 친화성**
   - 모바일 최적화 상태 확인

---

## 🔗 생성된 인증 파일 URL

### 구글
- HTML 파일: `https://tennisfriends.co.kr/google[verification-code]`
- 예시: `https://tennisfriends.co.kr/google1234567890`

### 네이버
- HTML 파일: `https://tennisfriends.co.kr/naver[verification-code].html`
- 예시: `https://tennisfriends.co.kr/naver1234567890.html`

### Bing (선택)
- XML 파일: `https://tennisfriends.co.kr/BingSiteAuth.xml`

---

## ✅ 체크리스트

### 구글 Search Console
- [ ] 속성 추가 완료
- [ ] 소유권 확인 완료
- [ ] 사이트맵 제출 완료
- [ ] 환경 변수 설정 완료
- [ ] 인덱싱 상태 확인

### 네이버 서치어드바이저
- [ ] 사이트 등록 완료
- [ ] 소유권 확인 완료
- [ ] 사이트맵 제출 완료
- [ ] RSS 피드 등록 (선택)
- [ ] 환경 변수 설정 완료
- [ ] 수집 현황 확인

---

## 🚨 문제 해결

### 인증 실패
1. 환경 변수가 올바르게 설정되었는지 확인
2. 배포가 완료되었는지 확인
3. URL이 정확한지 확인
4. 캐시를 지우고 다시 시도

### 사이트맵 오류
1. 사이트맵 URL이 접근 가능한지 확인
2. XML 형식이 올바른지 확인
3. robots.txt에 사이트맵 링크가 포함되어 있는지 확인

### 인덱싱 지연
1. 사이트맵이 제출되었는지 확인
2. robots.txt가 올바르게 설정되었는지 확인
3. 페이지가 크롤링 가능한지 확인

---

## 📚 참고 자료

- [Google Search Console 도움말](https://support.google.com/webmasters)
- [네이버 서치어드바이저 도움말](https://searchadvisor.naver.com/help)
- [Next.js SEO 가이드](https://nextjs.org/learn/seo/introduction-to-seo)

---

## 🔄 업데이트 내역

- 2025-01-XX: 초기 설정 가이드 작성
- 환경 변수 기반 인증 코드 관리 추가
- HTML 인증 파일 route 추가
- Bing 웹마스터 도구 지원 추가

