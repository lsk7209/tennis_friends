# 배포 체크리스트

## ✅ GitHub Pages 배포 준비 완료

### 설정된 워크플로우
- ✅ `.github/workflows/deploy-github-pages.yml` - 메인 배포 워크플로우
- ✅ `.github/workflows/deploy.yml` - 대체 배포 워크플로우
- ✅ `.github/workflows/deploy-pages.yml` - 최신 배포 워크플로우

### 빌드 설정
- ✅ 정적 export 설정 (`output: 'export'`)
- ✅ basePath 동적 설정 (저장소 이름 기반)
- ✅ 환경 변수 지원
- ✅ Node.js 22 사용

### 배포 전 체크리스트

#### 1. GitHub 저장소 설정
- [ ] 저장소 생성 또는 확인
- [ ] Settings → Pages → Source: **GitHub Actions** 선택
- [ ] 저장소 이름 확인 (basePath 자동 설정)

#### 2. 환경 변수 설정 (선택)
GitHub 저장소의 **Settings** → **Secrets and variables** → **Actions**에서:

- [ ] `NEXT_PUBLIC_SITE_URL` (선택)
- [ ] `GITHUB_PAGES_BASE_PATH` (선택, 기본값은 저장소 이름)
- [ ] `NEXT_PUBLIC_SUPABASE_URL` (선택)
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY` (선택)
- [ ] `GOOGLE_SITE_VERIFICATION` (선택)
- [ ] `NAVER_SITE_VERIFICATION` (선택)

#### 3. 코드 푸시
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

#### 4. 배포 확인
- [ ] Actions 탭에서 워크플로우 실행 확인
- [ ] 빌드 성공 확인
- [ ] 배포 성공 확인
- [ ] 배포된 사이트 접속 확인

## 📍 배포된 URL

배포 완료 후:
- 기본 URL: `https://[username].github.io/[repository-name]`
- 또는 커스텀 도메인

## 🚨 문제 해결

### 빌드 실패
1. Actions 탭에서 오류 로그 확인
2. Node.js 버전 확인 (22)
3. 의존성 설치 오류 확인

### 404 오류
1. basePath 설정 확인
2. 저장소 이름과 basePath 일치 확인
3. 브라우저 캐시 삭제

### 배포가 시작되지 않음
1. Settings → Pages에서 Source가 GitHub Actions인지 확인
2. main 브랜치에 푸시했는지 확인
3. Actions 탭에서 워크플로우 활성화 확인

## 📚 참고 문서

- `GITHUB_PAGES_DEPLOYMENT.md` - 상세 배포 가이드
- `GITHUB_DEPLOYMENT_QUICK_START.md` - 빠른 시작 가이드

