# 사이트맵 오류 수정 가이드

## 수정된 내용

### 1. `.well-known` 경로 제거
- `.well-known/robots.txt`와 `.well-known/ai.txt`는 메타데이터 파일이므로 사이트맵에서 제거했습니다.
- 이러한 파일들은 사이트맵에 포함하지 않아야 합니다.

### 2. URL 정규화
- 모든 URL에서 trailing slash를 제거하여 일관성을 유지했습니다.
- `baseUrl` 정규화 로직을 추가했습니다.

### 3. 적용된 파일
- `src/app/sitemap.ts` - 메인 사이트맵
- `src/app/sitemap-naver.xml/route.ts` - 네이버 사이트맵

## Google Search Console에서 확인할 사항

### 1. 사이트맵 재제출
1. Google Search Console에 로그인
2. **사이트맵** 메뉴로 이동
3. 기존 사이트맵 삭제 후 재제출:
   - `https://tennisfriends.co.kr/sitemap.xml`
   - `https://tennisfriends.co.kr/sitemap-naver.xml`

### 2. URL 접근성 확인
다음 URL들이 실제로 접근 가능한지 확인하세요:
- `https://tennisfriends.co.kr` ✅
- `https://tennisfriends.co.kr/blog` ✅
- `https://tennisfriends.co.kr/utility` ✅
- `https://tennisfriends.co.kr/about` ✅
- `https://tennisfriends.co.kr/contact` ✅
- `https://tennisfriends.co.kr/tennis-rules-quiz` ✅

### 3. robots.txt 확인
`https://tennisfriends.co.kr/robots.txt`에서 다음을 확인:
- 사이트맵에 포함된 URL들이 차단되지 않았는지
- `sitemap.xml`과 `sitemap-naver.xml`이 올바르게 지정되었는지

### 4. HTTP 상태 코드 확인
사이트맵에 포함된 모든 URL이 다음 상태 코드를 반환하는지 확인:
- ✅ 200 (OK) - 정상
- ❌ 404 (Not Found) - 페이지 없음
- ❌ 403 (Forbidden) - 접근 차단
- ❌ 301/302 (Redirect) - 리다이렉트 (가능하면 피해야 함)

## 추가 확인 사항

### 1. 중복 URL 제거
사이트맵에 동일한 URL이 중복으로 포함되지 않았는지 확인하세요.

### 2. URL 형식 검증
- 모든 URL이 `https://`로 시작하는지
- URL에 특수 문자가 올바르게 인코딩되었는지
- URL 길이가 2048자 이하인지

### 3. 사이트맵 크기 제한
- 단일 사이트맵에 최대 50,000개 URL
- 사이트맵 파일 크기는 50MB 이하

## 문제 해결 단계

### Step 1: 사이트맵 재생성
```bash
# 개발 서버에서 사이트맵 확인
npm run dev
# 브라우저에서 확인: http://localhost:3000/sitemap.xml
```

### Step 2: 사이트맵 검증
온라인 사이트맵 검증 도구 사용:
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)
- [Google Search Console 사이트맵 테스트](https://search.google.com/search-console)

### Step 3: Google Search Console 재제출
1. 기존 사이트맵 삭제
2. 새로운 사이트맵 제출
3. 처리 완료까지 1-2일 대기

### Step 4: 오류 모니터링
- Google Search Console에서 사이트맵 오류 확인
- 오류가 지속되면 특정 URL을 확인하고 해당 페이지의 접근성 검증

## 예상 결과

수정 후 다음이 개선되어야 합니다:
- ✅ "URL이 허용되지 않음" 오류 감소
- ✅ 사이트맵 처리 성공률 증가
- ✅ 검색 엔진 인덱싱 개선

## 참고 사항

- 사이트맵 변경 사항이 Google에 반영되기까지 최대 1-2일 소요될 수 있습니다.
- 일부 오류는 Google의 재크롤링 후 자동으로 해결될 수 있습니다.
- 지속적인 오류가 있다면 해당 URL의 실제 접근성을 확인하세요.

