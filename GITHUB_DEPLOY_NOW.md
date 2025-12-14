# GitHub Pages 배포 지금 바로 하기

## 🚀 빠른 배포 (3단계)

### 1단계: GitHub 저장소 설정 확인

1. GitHub 저장소로 이동
2. **Settings** → **Pages** 메뉴 클릭
3. **Source** 섹션에서 **GitHub Actions** 선택
4. 저장

### 2단계: 코드 푸시

터미널에서 다음 명령어 실행:

```bash
# 변경사항 확인
git status

# 모든 변경사항 추가
git add .

# 커밋
git commit -m "Deploy to GitHub Pages with SEO improvements"

# GitHub에 푸시
git push origin main
```

### 3단계: 배포 확인

1. GitHub 저장소의 **Actions** 탭 클릭
2. "Deploy to GitHub Pages" 워크플로우 실행 확인
3. 빌드 완료 대기 (약 3-5분)
4. 배포 완료 후 **Settings** → **Pages**에서 URL 확인

## 📍 배포된 사이트 URL

배포 완료 후 접속 가능한 URL:
- 기본: `https://[username].github.io/[repository-name]`
- 예시: `https://yourusername.github.io/7-2_tennis`

## ⚙️ 환경 변수 설정 (선택)

더 나은 SEO를 위해 환경 변수를 설정하세요:

**Settings** → **Secrets and variables** → **Actions** → **New repository secret**

추가할 Secrets:
- `NEXT_PUBLIC_SITE_URL`: `https://yourusername.github.io/7-2_tennis`
- `GOOGLE_SITE_VERIFICATION`: (구글 웹마스터 도구 인증 코드)
- `NAVER_SITE_VERIFICATION`: (네이버 웹마스터 도구 인증 코드)
- `DAUM_SITE_VERIFICATION`: (다음 웹마스터 도구 인증 코드)
- `BING_SITE_VERIFICATION`: (Bing 웹마스터 도구 인증 코드)

## 🔍 배포 상태 확인

### 성공적인 배포 확인 방법

1. **Actions 탭**:
   - ✅ 초록색 체크 표시 = 배포 성공
   - ❌ 빨간색 X 표시 = 배포 실패 (로그 확인)

2. **Pages 설정**:
   - **Settings** → **Pages**에서 배포 상태 확인
   - "Your site is live at..." 메시지 확인

3. **사이트 접속**:
   - 배포된 URL로 직접 접속하여 확인

## 🐛 문제 해결

### 빌드 실패 시

1. **Actions** 탭에서 오류 로그 확인
2. 일반적인 원인:
   - Node.js 버전 문제 (현재 22 사용)
   - 의존성 설치 실패
   - 빌드 오류

### 404 오류 시

1. basePath 설정 확인
2. 저장소 이름과 basePath 일치 확인
3. 브라우저 캐시 삭제 후 재시도

### 배포가 시작되지 않을 때

1. **Settings** → **Pages**에서 Source가 **GitHub Actions**인지 확인
2. `main` 또는 `master` 브랜치에 푸시했는지 확인
3. 워크플로우 파일이 `.github/workflows/` 디렉토리에 있는지 확인

## 📝 수동 배포 (대안)

GitHub Actions 대신 수동으로 배포하려면:

```bash
# 로컬에서 빌드
npm run build

# gh-pages 패키지로 배포 (설치 필요)
npm install -g gh-pages
npm run gh-pages
```

## ✅ 배포 완료 체크리스트

- [ ] GitHub 저장소 Settings → Pages에서 Source가 GitHub Actions로 설정됨
- [ ] 코드가 main 브랜치에 푸시됨
- [ ] Actions 탭에서 워크플로우가 실행됨
- [ ] 빌드가 성공적으로 완료됨
- [ ] 배포가 성공적으로 완료됨
- [ ] 배포된 사이트가 정상적으로 접속됨

## 🎉 완료!

배포가 완료되면 사이트가 전 세계에 공개됩니다!

