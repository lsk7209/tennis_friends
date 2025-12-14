# 검색 엔진 및 AI 봇 크롤링 최적화 가이드

## ✅ 완료된 최적화 작업

### 1. robots.txt 최적화
- **위치**: `/robots.txt`
- **추가된 봇**:
  - 검색 엔진: Googlebot, NaverBot, Yeti, DaumBot, Bingbot, msnbot
  - AI 크롤러: GPTBot, ChatGPT-User, Google-Extended, CCBot, anthropic-ai, Claude-Web, PerplexityBot, Applebot-Extended
  - 소셜 미디어: FacebookBot, TwitterBot, LinkedInBot
  - 기타: DuckDuckBot, Baiduspider, YandexBot, Slurp

### 2. AI 크롤러 전용 설정
- **ai.txt**: `.well-known/ai.txt` - AI 크롤러를 위한 명시적 허용 정책
- **메타 태그**: 각 AI 크롤러별 허용 메타 태그 추가
- **robots.txt**: 모든 주요 AI 크롤러 허용

### 3. 구조화된 데이터 개선
- **WebSite 스키마**: 검색 기능 포함
- **Organization 스키마**: 전역 적용
- **BlogPosting 스키마**: 모든 블로그 포스트
- **SoftwareApplication 스키마**: 유틸리티 페이지

### 4. 크롤링 최적화 헤더
- X-Robots-Tag 헤더 추가
- 사이트맵/RSS 캐싱 최적화
- 크롤러 친화적 캐시 정책

### 5. 웰노운 경로
- `.well-known/robots.txt` - 대체 robots.txt 경로
- `.well-known/ai.txt` - AI 크롤러 정책
- `.well-known/security.txt` - 보안 정책

## 📍 생성된 파일 및 URL

### robots.txt
- URL: `https://tennisfriends.co.kr/robots.txt`
- 모든 주요 검색 엔진 및 AI 크롤러 허용

### ai.txt
- URL: `https://tennisfriends.co.kr/.well-known/ai.txt`
- AI 크롤러 전용 정책 파일

### security.txt
- URL: `https://tennisfriends.co.kr/.well-known/security.txt`
- 보안 정책 및 연락처 정보

### 사이트맵
- 일반: `https://tennisfriends.co.kr/sitemap.xml`
- 네이버: `https://tennisfriends.co.kr/sitemap-naver.xml`

### RSS
- RSS 피드: `https://tennisfriends.co.kr/rss.xml`

## 🤖 지원되는 AI 크롤러

### OpenAI
- **GPTBot**: ChatGPT 학습용 크롤러
- **ChatGPT-User**: ChatGPT 사용자 요청 크롤러

### Google
- **Google-Extended**: Google AI 학습용 크롤러
- **Googlebot**: 일반 검색 크롤러

### Anthropic
- **anthropic-ai**: Anthropic AI 학습용
- **Claude-Web**: Claude 웹 크롤러

### 기타 AI
- **CCBot**: Common Crawl 봇
- **PerplexityBot**: Perplexity AI 크롤러
- **Applebot-Extended**: Apple AI 크롤러
- **Omgilibot**: Omgili 크롤러

## 🔍 검색 엔진 크롤러

### 국내
- **NaverBot / Yeti**: 네이버 검색
- **DaumBot / Daumoa**: 다음 검색

### 해외
- **Googlebot**: 구글 검색
- **Bingbot / msnbot**: Bing 검색
- **Slurp**: Yahoo 검색
- **DuckDuckBot**: DuckDuckGo 검색
- **Baiduspider**: 바이두 검색
- **YandexBot**: 얀덱스 검색

## 📊 크롤링 최적화 설정

### 캐싱 정책
- **사이트맵**: 1시간 캐시
- **RSS**: 1시간 캐시
- **robots.txt**: 24시간 캐시
- **ai.txt**: 24시간 캐시

### 메타 태그
- 모든 페이지에 크롤러 허용 메타 태그
- 이미지/비디오 프리뷰 최대화
- 스니펫 길이 제한 없음

### 구조화된 데이터
- 모든 페이지에 적절한 스키마 적용
- 검색 엔진과 AI가 콘텐츠를 이해하기 쉽도록 구조화

## 🚀 다음 단계

1. **모니터링**
   - Google Search Console에서 크롤링 상태 확인
   - 네이버 서치어드바이저에서 수집 현황 확인
   - AI 크롤러 접근 로그 확인

2. **최적화**
   - 크롤링 오류 수정
   - 페이지 속도 개선
   - 구조화된 데이터 검증

3. **확장**
   - 추가 AI 크롤러 지원
   - 새로운 구조화된 데이터 타입 추가

## 📚 참고 자료

- [robots.txt 규격](https://www.robotstxt.org/)
- [Google AI 크롤러 정책](https://developers.google.com/search/docs/crawling-indexing/overview-google-crawlers)
- [OpenAI GPTBot 정책](https://platform.openai.com/docs/gptbot)
- [Anthropic Claude 크롤러](https://www.anthropic.com/index/claude-and-crawler-update)

