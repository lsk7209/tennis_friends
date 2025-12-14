# TennisFriends 🎾

데이터로 똑똑하게, 테니스를 즐겁게. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 리스크 예측 등 테니스 실력 향상을 위한 모든 것을 제공하는 웹 애플리케이션입니다.

## 🚀 주요 기능

- **NTRP 실력 테스트**: 과학적 알고리즘 기반 테니스 실력 평가
- **스트링 텐션 계산기**: 라켓 스트링 텐션 최적화 도구
- **부상 리스크 예측**: 데이터 기반 부상 예방 시스템
- **테니스 블로그**: 전문가가 작성한 테니스 가이드 및 분석
- **선수 정보**: 프로 테니스 선수 상세 정보 및 분석
- **다양한 유틸리티**: 훈련 계획, 경기 분석, 영양 가이드 등

## 🛠️ 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Database**: Supabase (선택적)

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 20 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

개발 서버는 [http://localhost:3000](http://localhost:3000)에서 실행됩니다.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

## 🚀 배포

### GitHub Pages 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 GitHub Pages에 배포됩니다.

#### 빠른 배포 (3단계)

1. **GitHub 저장소 설정**
   - 저장소 **Settings** → **Pages** → **Source**: **GitHub Actions** 선택

2. **코드 푸시**
   ```bash
   git push origin main
   ```

3. **배포 확인**
   - **Actions** 탭에서 배포 상태 확인
   - 배포된 URL: `https://[username].github.io/[repository-name]`

#### 자동 배포

- `main` 또는 `master` 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다
- 워크플로우: `.github/workflows/deploy-github-pages.yml`

#### 수동 배포

```bash
# 로컬에서 빌드 및 배포
npm run gh-pages
```

#### 환경 변수 설정 (선택)

GitHub 저장소의 **Settings** → **Secrets and variables** → **Actions**에서 Secrets 추가:

- `NEXT_PUBLIC_SITE_URL`: 사이트 URL
- `GITHUB_PAGES_BASE_PATH`: basePath (기본값은 저장소 이름)
- 기타 환경 변수들

자세한 내용은 `GITHUB_PAGES_DEPLOYMENT.md`를 참고하세요.

### Cloudflare Pages 배포

```bash
# Cloudflare Pages 빌드
npm run cf-build

# Cloudflare Pages 배포
npm run deploy
```

### 환경 변수

프로젝트 루트에 `.env.local` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
# Supabase (선택적)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

`.env.example` 파일을 참고하세요.

## 📁 프로젝트 구조

```
├── src/
│   ├── app/              # Next.js App Router 페이지
│   │   ├── blog/        # 블로그 페이지
│   │   ├── players/     # 선수 정보 페이지
│   │   ├── utility/     # 유틸리티 페이지
│   │   └── ...
│   ├── components/      # React 컴포넌트
│   │   ├── layout/     # 레이아웃 컴포넌트
│   │   ├── blog/       # 블로그 관련 컴포넌트
│   │   └── ui/         # UI 컴포넌트
│   ├── lib/            # 유틸리티 함수 및 라이브러리
│   ├── data/           # 정적 데이터
│   └── types/           # TypeScript 타입 정의
├── public/              # 정적 파일
└── .github/            # GitHub Actions 워크플로우
```

## 🎨 코드 스타일

이 프로젝트는 ESLint를 사용하여 코드 품질을 유지합니다.

```bash
# 린트 검사
npm run lint
```

## 📝 최적화 사항

- ✅ 폰트 로딩 최적화 (next/font 사용)
- ✅ 프로덕션 Console 로그 제거
- ✅ SSR 호환성 개선
- ✅ 번들 크기 최적화
- ✅ 이미지 최적화 설정
- ✅ 보안 헤더 설정

자세한 최적화 내용은 `OPTIMIZATION_REPORT.md`를 참고하세요.

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.

## 🔗 관련 링크

- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)
- [Radix UI 문서](https://www.radix-ui.com/docs)

## 📧 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.

---

Made with ❤️ by TennisFriends
