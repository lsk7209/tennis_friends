# GitHub Pages 배포 빠른 시작

## 🚀 3단계로 배포하기

### 1단계: GitHub 저장소 설정

1. **GitHub 저장소 생성** (이미 있다면 생략)
   - 새 저장소 생성 또는 기존 저장소 사용

2. **Pages 설정**
   - 저장소 **Settings** → **Pages** 이동
   - **Source**: **GitHub Actions** 선택
   - 저장

### 2단계: 코드 푸시

```bash
# 로컬에서 실행
git add .
git commit -m "Initial commit"
git push origin main
```

### 3단계: 배포 확인

1. **Actions 탭 확인**
   - GitHub 저장소의 **Actions** 탭에서 워크플로우 실행 확인
   - 빌드 및 배포 완료 대기 (약 3-5분)

2. **배포된 사이트 확인**
   - **Settings** → **Pages**에서 배포된 URL 확인
   - 기본 URL: `https://[username].github.io/[repository-name]`

## ✅ 완료!

이제 사이트가 GitHub Pages에 배포되었습니다.

---

## 🔧 추가 설정 (선택)

### 환경 변수 설정

**Settings** → **Secrets and variables** → **Actions**에서 Secrets 추가:

- `NEXT_PUBLIC_SITE_URL`: 사이트 URL
- `GITHUB_PAGES_BASE_PATH`: basePath (기본값은 저장소 이름)
- 기타 환경 변수들

### basePath 설정

저장소 이름이 `tennis_friends`가 아닌 경우:

1. **Secrets에 추가**:
   - `GITHUB_PAGES_BASE_PATH`: `/your-repo-name`

2. **또는 루트 도메인 사용**:
   - `GITHUB_PAGES_BASE_PATH`: `/` (빈 값)

---

## 📍 배포된 URL

- 기본: `https://[username].github.io/[repository-name]`
- 커스텀 도메인: 설정한 도메인

---

## 🐛 문제 해결

### 빌드 실패
- **Actions** 탭에서 오류 로그 확인
- Node.js 버전 확인 (22 사용)
- 의존성 설치 오류 확인

### 404 오류
- basePath 설정 확인
- 저장소 이름과 basePath 일치 확인
- 브라우저 캐시 삭제

### 페이지가 표시되지 않음
- 배포 완료 대기 (최대 10분)
- **Settings** → **Pages**에서 배포 상태 확인

---

## 📚 상세 가이드

더 자세한 내용은 `GITHUB_PAGES_DEPLOYMENT.md`를 참고하세요.

