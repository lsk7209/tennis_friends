# GitHub Pages 배포 가이드

## 📋 개요

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

## 🚀 배포 방법

### 자동 배포 (권장)

1. **GitHub 저장소 설정**
   - GitHub 저장소의 **Settings** → **Pages**로 이동
   - **Source**를 **GitHub Actions**로 설정
   - 저장소 이름이 `tennis_friends`인 경우 basePath가 자동으로 설정됩니다

2. **환경 변수 설정 (선택)**
   - GitHub 저장소의 **Settings** → **Secrets and variables** → **Actions**
   - 다음 Secrets 추가 (선택사항):
     - `NEXT_PUBLIC_SITE_URL`: 사이트 URL (예: `https://username.github.io/repository-name`)
     - `NEXT_PUBLIC_SUPABASE_URL`: Supabase URL
     - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase Anon Key
     - `GOOGLE_SITE_VERIFICATION`: 구글 인증 코드
     - `NAVER_SITE_VERIFICATION`: 네이버 인증 코드

3. **배포 트리거**
   - `main` 또는 `master` 브랜치에 푸시하면 자동으로 배포됩니다
   - 또는 **Actions** 탭에서 수동으로 워크플로우 실행 가능

### 수동 배포

```bash
# 로컬에서 빌드 및 배포
npm run gh-pages
```

## 📁 배포 구조

### basePath 설정
- 저장소 이름이 `tennis_friends`인 경우: `/tennis_friends`
- 루트 도메인인 경우: `/` (basePath 없음)

### 빌드 출력
- 빌드된 파일은 `out/` 디렉토리에 생성됩니다
- GitHub Pages는 이 디렉토리의 내용을 배포합니다

## 🔧 환경 변수

### GitHub Secrets 설정

GitHub 저장소의 **Settings** → **Secrets and variables** → **Actions**에서 다음 Secrets를 설정할 수 있습니다:

```env
# 필수 (자동 설정됨)
NEXT_PUBLIC_SITE_URL=https://username.github.io/repository-name

# 선택적
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_ANALYTICS_API_URL=your_analytics_api_url
GOOGLE_SITE_VERIFICATION=your_google_verification_code
NAVER_SITE_VERIFICATION=your_naver_verification_code
DAUM_SITE_VERIFICATION=your_daum_verification_code
BING_SITE_VERIFICATION=your_bing_verification_code
```

## 📊 배포 워크플로우

### 빌드 단계
1. 코드 체크아웃
2. Node.js 22 설정
3. 의존성 설치 (`npm ci`)
4. 프로젝트 빌드 (`npm run build`)
5. 아티팩트 업로드

### 배포 단계
1. GitHub Pages 환경 설정
2. 아티팩트 배포

## 🔍 배포 확인

### 배포 상태 확인
1. GitHub 저장소의 **Actions** 탭에서 워크플로우 실행 상태 확인
2. **Settings** → **Pages**에서 배포된 URL 확인

### 배포된 사이트 확인
- 기본 URL: `https://[username].github.io/[repository-name]`
- 또는 커스텀 도메인 설정 가능

## 🚨 문제 해결

### 빌드 실패
1. **의존성 오류**: `package.json` 확인
2. **타입 오류**: TypeScript 오류 확인
3. **환경 변수 오류**: Secrets 설정 확인

### 배포 실패
1. **권한 오류**: Pages 권한 확인
2. **아티팩트 오류**: 빌드 출력 디렉토리 확인
3. **경로 오류**: basePath 설정 확인

### 페이지가 표시되지 않음
1. **basePath 확인**: 저장소 이름과 일치하는지 확인
2. **404 오류**: `next.config.ts`의 basePath 설정 확인
3. **캐시 문제**: 브라우저 캐시 삭제

## 📝 주의사항

### 정적 Export 제한사항
- API Routes는 정적 export에서 작동하지 않음
- 서버 사이드 기능은 제한됨
- 동적 라우팅은 정적 생성 필요

### basePath 설정
- 저장소 이름이 `tennis_friends`인 경우 자동으로 `/tennis_friends`로 설정
- 루트 도메인을 사용하려면 `next.config.ts` 수정 필요

## 🔄 업데이트

배포된 사이트를 업데이트하려면:
1. 코드 수정
2. `main` 브랜치에 푸시
3. GitHub Actions가 자동으로 재배포

## 📚 참고 자료

- [GitHub Pages 문서](https://docs.github.com/en/pages)
- [Next.js 정적 Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions 문서](https://docs.github.com/en/actions)

