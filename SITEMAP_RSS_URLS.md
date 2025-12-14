# 사이트맵 및 RSS 주소 확인

## 📍 생성된 주소 목록

### 1. 사이트맵 (Sitemap)
**URL**: `https://tennisfriends.co.kr/sitemap.xml`

**포함 내용**:
- 기본 페이지 (홈, 블로그, 유틸리티)
- 모든 유틸리티 페이지
- 모든 선수 페이지 (PLAYERS_DB 기반)
- 모든 블로그 포스트 (allBlogPosts 기반)
- 추가 정적 페이지 (about, contact, tennis-rules-quiz)

**특징**:
- 실제 블로그 포스트 날짜 정보 반영
- 우선순위 및 업데이트 빈도 최적화
- Next.js MetadataRoute.Sitemap 형식

---

### 2. 네이버 사이트맵 (Naver Sitemap)
**URL**: `https://tennisfriends.co.kr/sitemap-naver.xml`

**포함 내용**:
- 기본 페이지
- 모든 유틸리티 페이지
- 모든 선수 페이지
- 최신 블로그 포스트 1000개

**특징**:
- 네이버 검색 등록용 최적화
- 네이버 사이트맵 네임스페이스 포함
- 1시간마다 자동 재생성

---

### 3. RSS 피드 (RSS Feed)
**URL**: `https://tennisfriends.co.kr/rss.xml`

**포함 내용**:
- 최신 블로그 포스트 50개 (날짜순 정렬)
- 각 포스트의 제목, 설명, 날짜, 카테고리
- 네이버/다음 호환성 개선

**특징**:
- 실제 블로그 데이터(allBlogPosts) 사용
- 날짜순 정렬 (최신순)
- 카테고리 정보 포함
- 1시간마다 자동 재생성

---

### 4. Robots.txt
**URL**: `https://tennisfriends.co.kr/robots.txt`

**설정 내용**:
- 모든 봇 허용 (기본)
- 네이버 봇 최적화 (Yeti)
- 다음 봇 최적화 (Daumoa)
- 구글 봇 최적화 (Googlebot)
- /private/, /admin/ 디렉토리 차단
- 사이트맵 링크 포함 (일반 + 네이버)

---

## 🔍 검증 방법

### 로컬 개발 환경에서 확인
```bash
# 개발 서버 실행
npm run dev

# 브라우저에서 확인
http://localhost:3000/sitemap.xml
http://localhost:3000/sitemap-naver.xml
http://localhost:3000/rss.xml
http://localhost:3000/robots.txt
```

### 프로덕션 환경에서 확인
```
https://tennisfriends.co.kr/sitemap.xml
https://tennisfriends.co.kr/sitemap-naver.xml
https://tennisfriends.co.kr/rss.xml
https://tennisfriends.co.kr/robots.txt
```

### 검증 도구
1. **구글 Search Console**
   - 사이트맵 제출 및 검증
   - https://search.google.com/search-console

2. **네이버 서치어드바이저**
   - 네이버 사이트맵 제출 및 검증
   - https://searchadvisor.naver.com/

3. **RSS 검증기**
   - https://validator.w3.org/feed/
   - RSS 피드 형식 검증

4. **사이트맵 검증기**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html
   - 사이트맵 형식 검증

---

## 📊 통계 정보

### 사이트맵에 포함된 페이지 수
- 기본 페이지: 3개
- 유틸리티 페이지: 약 30개 (자동 수집)
- 선수 페이지: 약 50개 (PLAYERS_DB 기반)
- 블로그 포스트: 약 50개 (allBlogPosts 기반)
- 추가 페이지: 3개
- **총 약 136개 페이지**

### RSS 피드에 포함된 포스트 수
- 최신 블로그 포스트: 50개
- 날짜순 정렬 (최신순)

### 네이버 사이트맵에 포함된 URL 수
- 최대 1000개 URL
- 모든 페이지 타입 포함

---

## 🔧 설정 파일 위치

### 사이트맵
- `src/app/sitemap.ts` - 일반 사이트맵
- `src/app/sitemap-naver.xml/route.ts` - 네이버 사이트맵

### RSS 피드
- `src/app/rss.xml/route.ts` - RSS 피드 생성

### Robots.txt
- `src/app/robots.ts` - robots.txt 생성

---

## 📝 검색 엔진 제출 가이드

### 구글 (Google)
1. Google Search Console 접속
2. 속성 추가 (https://tennisfriends.co.kr)
3. 사이트맵 제출: `https://tennisfriends.co.kr/sitemap.xml`

### 네이버
1. 네이버 서치어드바이저 접속
2. 사이트 등록
3. 사이트맵 제출: `https://tennisfriends.co.kr/sitemap-naver.xml`
4. RSS 피드 제출 (선택): `https://tennisfriends.co.kr/rss.xml`

### 다음
1. 다음 검색 등록 페이지 접속
2. 사이트 등록
3. 사이트맵 제출: `https://tennisfriends.co.kr/sitemap.xml`

---

## ✅ 확인 체크리스트

- [x] 사이트맵 생성 완료
- [x] 네이버 사이트맵 생성 완료
- [x] RSS 피드 생성 완료
- [x] robots.txt 설정 완료
- [x] 실제 데이터 연동 완료
- [x] 날짜 정보 반영 완료
- [ ] 검색 엔진 제출 (수동 작업 필요)
- [ ] 검색 엔진 인증 코드 업데이트 (수동 작업 필요)

---

## 🚀 다음 단계

1. **검색 엔진 등록**
   - 각 검색 엔진에 사이트 등록
   - 사이트맵 제출

2. **인증 코드 업데이트**
   - `src/app/layout.tsx`에서 실제 인증 코드로 교체

3. **모니터링**
   - 검색 엔진별 인덱싱 상태 확인
   - 크롤링 오류 확인

