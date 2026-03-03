# SEO 개선 사항 및 검색 엔진 등록 가이드

## 📋 개선 완료 사항

### 1. RSS 피드 개선 ✅
- **위치**: `/rss.xml`
- **변경사항**:
  - 실제 블로그 데이터(`allBlogPosts`) 사용
  - 최신 50개 포스트만 포함 (성능 최적화)
  - 날짜순 정렬
  - 카테고리 정보 추가
  - 네이버/다음 호환성 개선

### 2. 사이트맵 개선 ✅
- **위치**: `/sitemap.xml`
- **변경사항**:
  - 실제 블로그 포스트 날짜 정보 반영
  - 블로그 우선순위 상향 (0.7 → 0.8)
  - 블로그 업데이트 빈도 상향 (monthly → weekly)
  - 추가 정적 페이지 포함 (about, contact, quiz)

### 3. 네이버 사이트맵 생성 ✅
- **위치**: `/sitemap-naver.xml`
- **용도**: 네이버 검색 등록용
- **포함 내용**: 최대 1000개 URL

### 4. robots.txt 개선 ✅
- **위치**: `/robots.txt`
- **변경사항**:
  - 네이버 봇(Yeti) 최적화
  - 다음 봇(Daumoa) 최적화
  - 구글 봇(Googlebot) 최적화
  - 네이버 사이트맵 링크 추가

### 5. 메타 태그 추가 ✅
- 네이버 사이트 인증 메타 태그
- 다음 사이트 인증 메타 태그
- RSS 피드 링크

## 🔍 검색 엔진 등록 방법

### 구글 검색 등록

1. **Google Search Console 접속**
   - https://search.google.com/search-console

2. **속성 추가**
   - URL 접두어 방식 선택
   - 사이트 URL 입력: `https://tennisfrens.com`

3. **소유권 확인**
   - HTML 태그 방식 선택
   - 제공된 메타 태그를 `src/app/layout.tsx`의 `verification.google`에 추가

4. **사이트맵 제출**
   - `https://tennisfrens.com/sitemap.xml`

### 네이버 검색 등록

1. **네이버 서치어드바이저 접속**
   - https://searchadvisor.naver.com/

2. **사이트 등록**
   - 사이트 URL 입력: `https://tennisfrens.com`

3. **소유권 확인**
   - HTML 메타 태그 방식 선택
   - 제공된 메타 태그를 `src/app/layout.tsx`의 `head` 섹션에 추가
   - 현재: `naver-site-verification-code` → 실제 코드로 교체 필요

4. **사이트맵 제출**
   - `https://tennisfrens.com/sitemap-naver.xml`
   - 또는 일반 사이트맵: `https://tennisfrens.com/sitemap.xml`

5. **RSS 피드 등록** (선택사항)
   - `https://tennisfrens.com/rss.xml`

### 다음 검색 등록

1. **다음 검색 등록 페이지 접속**
   - https://register.search.daum.net/index.daum

2. **사이트 등록**
   - 사이트 URL 입력: `https://tennisfrens.com`

3. **소유권 확인**
   - HTML 메타 태그 방식 선택
   - 제공된 메타 태그를 `src/app/layout.tsx`의 `head` 섹션에 추가
   - 현재: `daum-site-verification-code` → 실제 코드로 교체 필요

4. **사이트맵 제출**
   - `https://tennisfrens.com/sitemap.xml`

## 📊 SEO 최적화 체크리스트

### 메타 태그
- [x] Open Graph 태그
- [x] Twitter Card 태그
- [x] 네이버 사이트 인증
- [x] 다음 사이트 인증
- [x] RSS 피드 링크
- [x] 네이버 봇 최적화 (NaverBot, Yeti)
- [x] 다음 봇 최적화 (DaumBot, Daumoa)
- [x] 모바일 웹앱 메타 태그

### 구조화된 데이터 (JSON-LD)
- [x] Organization 스키마 (전역)
- [x] BlogPosting 스키마 (블로그 포스트)
- [x] Person 스키마 (선수 프로필)
- [x] ProfilePage 스키마 (선수 페이지)
- [x] BreadcrumbList 스키마 (모든 페이지)
- [x] SoftwareApplication 스키마 (유틸리티 페이지)
- [x] FAQPage 스키마 (FAQ가 있는 페이지)
- [x] HowTo 스키마 컴포넌트 (가이드 페이지용)

### 기술적 SEO
- [x] 사이트맵 생성 (`/sitemap.xml`)
- [x] robots.txt 설정
- [x] 네이버 사이트맵 생성 (`/sitemap-naver.xml`)
- [x] RSS 피드 생성 (`/rss.xml`)
- [x] Canonical URL 설정
- [x] 모바일 최적화
- [x] 구조화된 데이터 통합 (@graph 사용)

### 콘텐츠 최적화
- [ ] 메타 설명 길이 최적화 (110-155자)
- [ ] 제목 길이 최적화 (45-60자)
- [ ] 내부 링크 구조 개선
- [ ] 이미지 alt 텍스트 최적화

## 🔧 환경 변수 설정

`.env.local` 파일에 다음 변수들을 설정하세요:

```env
NEXT_PUBLIC_SITE_URL=https://tennisfrens.com
```

## 🎯 추가 개선 사항 (완료)

### 구조화된 데이터 개선
1. **BlogPostSchema 컴포넌트 생성**
   - BlogPosting, Organization, BreadcrumbList 통합
   - 네이버/다음 최적화를 위한 @graph 구조 사용
   - 모든 블로그 포스트에 자동 적용

2. **SoftwareApplicationSchema 컴포넌트 생성**
   - 유틸리티 페이지용 구조화된 데이터
   - NTRP 테스트 페이지에 적용 완료
   - 다른 유틸리티 페이지에도 확장 가능

3. **HowToSchema 컴포넌트 생성**
   - 가이드/튜토리얼 페이지용
   - 단계별 설명 구조화

4. **OrganizationSchema 컴포넌트 생성**
   - 전역 Organization 스키마
   - layout.tsx에 추가하여 모든 페이지에 적용

### 네이버/다음 검색 최적화
- 네이버 봇 메타 태그 추가 (NaverBot, Yeti)
- 다음 봇 메타 태그 추가 (DaumBot, Daumoa)
- 모바일 웹앱 메타 태그 추가
- RSS 피드 네이버 호환성 개선

## 📝 다음 단계

1. **검색 엔진 등록**
   - 구글 Search Console 등록
   - 네이버 서치어드바이저 등록
   - 다음 검색 등록

2. **인증 코드 업데이트**
   - `src/app/layout.tsx`에서 실제 인증 코드로 교체
   - 네이버: `naver-site-verification-code`
   - 다음: `daum-site-verification-code`
   - 구글: `google-site-verification-code`

3. **사이트맵 제출**
   - 각 검색 엔진에 사이트맵 제출
   - 정기적으로 업데이트 확인

4. **모니터링**
   - 검색 엔진별 인덱싱 상태 확인
   - 검색 순위 모니터링
   - 크롤링 오류 확인
   - 구조화된 데이터 검증 (Google Rich Results Test)

5. **추가 최적화**
   - 다른 유틸리티 페이지에 SoftwareApplication 스키마 추가
   - 가이드 페이지에 HowTo 스키마 추가
   - 이미지 최적화 및 alt 텍스트 개선
   - 내부 링크 구조 개선

## 📚 참고 자료

- [Google Search Console](https://search.google.com/search-console)
- [네이버 서치어드바이저](https://searchadvisor.naver.com/)
- [다음 검색 등록](https://register.search.daum.net/index.daum)
- [Next.js SEO 가이드](https://nextjs.org/learn/seo/introduction-to-seo)

