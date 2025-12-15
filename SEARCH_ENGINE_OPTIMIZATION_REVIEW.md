# 검색 엔진 수집 최적화 검토 및 개선 사항

## ✅ 현재 구현 상태

### 1. robots.txt ✅
- **위치**: `/robots.txt`
- **구현 상태**: 완료
- **포함된 봇**:
  - 구글: Googlebot, Googlebot-Image, Googlebot-Video
  - 네이버: Yeti, NaverBot
  - 다음: Daumoa, DaumBot
  - 기타: Bingbot, msnbot 등
- **사이트맵 링크**: 
  - `/sitemap.xml` (구글용)
  - `/sitemap-naver.xml` (네이버용)

### 2. 사이트맵 ✅
- **구글용**: `/sitemap.xml` (MetadataRoute.Sitemap 형식)
- **네이버용**: `/sitemap-naver.xml` (네이버 스키마 포함)
- **포함 내용**: 
  - 정적 페이지 (/, /blog, /utility 등)
  - 유틸리티 페이지 (자동 수집)
  - 선수 페이지 (PLAYERS_DB 기반)
  - 블로그 글 (allBlogPosts 기반)
  - 추가 페이지 (about, contact, quiz)

### 3. RSS 피드 ✅
- **위치**: `/rss.xml`
- **포함 내용**: 최신 50개 블로그 포스트
- **네이버 호환성**: 네이버 블로그 RSS 링크 포함

### 4. 메타 태그 ✅
- **네이버 인증**: `naver-site-verification` 메타 태그
- **다음 인증**: `daum-site-verification` 메타 태그
- **구글 인증**: `google-site-verification` 메타 태그
- **네이버 봇 최적화**: NaverBot, Yeti 메타 태그
- **다음 봇 최적화**: DaumBot, Daumoa 메타 태그

### 5. 구조화된 데이터 ✅
- **Organization**: 전역 적용
- **WebSite**: 전역 적용 (검색 기능 포함)
- **BlogPosting**: 블로그 포스트에 적용
- **SoftwareApplication**: 유틸리티 페이지에 적용
- **Quiz**: 퀴즈 페이지에 적용

## 🔧 개선 필요 사항

### 1. 도메인 일관성 ⚠️
**문제**: `layout.tsx`의 `metadataBase`가 여전히 `tennisfriends.co.kr` 사용
**해결**: `www.tennisfrens.com`으로 변경 필요

### 2. 다음 검색 최적화 강화
**현재**: 기본적인 메타 태그만 있음
**개선**: 다음 검색 최적화를 위한 추가 설정 필요

### 3. 네이버 검색 최적화 강화
**현재**: 기본적인 설정만 있음
**개선**: 
- 네이버 검색 최적화 가이드 준수
- 모바일 최적화 강화
- 이미지 최적화

### 4. 사이트맵 검증
**확인 필요**:
- 사이트맵이 올바른 형식인지
- 모든 URL이 접근 가능한지
- 네이버 사이트맵이 네이버 스키마를 올바르게 사용하는지

## 📋 검색 엔진별 등록 체크리스트

### 구글 (Google Search Console)
- [x] robots.txt 설정
- [x] sitemap.xml 생성
- [x] 사이트 인증 메타 태그
- [ ] 사이트맵 제출 (수동)
- [ ] 인덱싱 상태 모니터링

### 네이버 (서치어드바이저)
- [x] robots.txt 설정 (Yeti, NaverBot)
- [x] sitemap-naver.xml 생성
- [x] 사이트 인증 메타 태그
- [x] RSS 피드 제공
- [ ] 사이트맵 제출 (수동)
- [ ] 수집 요청
- [ ] 인덱싱 상태 모니터링

### 다음 (Daum 검색)
- [x] robots.txt 설정 (DaumBot, Daumoa)
- [x] 사이트 인증 메타 태그
- [ ] 사이트맵 제출 (수동)
- [ ] 인덱싱 상태 모니터링

## 🚀 권장 사항

1. **정기적인 사이트맵 업데이트**
   - 블로그 글이 추가될 때마다 자동 업데이트
   - 선수 정보 업데이트 시 반영

2. **크롤링 모니터링**
   - Google Search Console에서 크롤링 오류 확인
   - 네이버 서치어드바이저에서 수집 현황 확인

3. **성능 최적화**
   - 페이지 로딩 속도 개선
   - 모바일 최적화 강화
   - 이미지 최적화

4. **콘텐츠 최적화**
   - 메타 설명 길이 최적화 (110-155자)
   - 제목 길이 최적화 (45-60자)
   - 내부 링크 구조 개선

