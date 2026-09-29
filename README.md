# TennisFriends 🎾

테니스 콘텐츠와 참고 도구를 이용하고 네이버 카페에서 이야기를 이어갈 수 있는 웹 애플리케이션입니다. NTRP 자가점검과 부상 예방 정보는 공식 등급이나 의학적 진단이 아닙니다.

## 🚀 주요 기능

- **NTRP 실력 테스트**: 기존 15문항 합산 방식의 비공식 자가점검
- **스트링 텐션 계산기**: 라켓 스트링 텐션 최적화 도구
- **부상 예방 참고 점검**: 입력 항목에 따른 일반 정보 제공, 의학적 진단·개인별 위험 예측 아님
- **테니스 블로그**: 테니스 가이드 및 분석
- **선수 정보**: 프로 테니스 선수 상세 정보 및 분석
- **다양한 유틸리티**: 훈련 계획, 경기 분석, 영양 가이드 등

## 🛠️ 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Storage**: 로그인 없이 브라우저 localStorage 사용

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
- 워크플로우: `.github/workflows/deploy.yml`

#### 수동 배포

```bash
# 로컬에서 빌드 및 배포
npm run gh-pages
```

#### 환경 변수 설정

`NEXT_PUBLIC_SITE_URL`, `GITHUB_PAGES_BASE_PATH`, `NEXT_PUBLIC_EXTERNAL_EFFECTS`, GA4 측정 ID는 `.github/workflows/deploy.yml`에 명시되어 있습니다. Actions Secrets로 받는 값은 검색엔진 사이트 인증 토큰(`GOOGLE_`, `NAVER_`, `DAUM_`, `BING_SITE_VERIFICATION`)뿐입니다.

대표 도메인 `https://tennisfrens.com`은 Git 연동 Vercel 배포가 제공하고, GitHub Pages는 정적 미러입니다. 정적 export에는 Next.js 런타임 리디렉션·헤더·미들웨어가 적용되지 않습니다. 자세한 내용은 `GITHUB_PAGES_DEPLOYMENT.md`를 참고하세요.

### 환경 변수

로컬에서는 `env.example`을 참고해 프로젝트 루트에 `.env.local`을 만드세요. 분석·광고 등 외부 효과는 `NEXT_PUBLIC_EXTERNAL_EFFECTS=production`(또는 Vercel Production 환경)일 때만 켜지므로 로컬·프리뷰에서는 기본적으로 꺼져 있습니다. 광고는 추가로 `NEXT_PUBLIC_ADS_CONSENT_READY=verified`가 필요합니다.

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

# 전체 검증 (소스 감사 → 린트 → 타입체크 → 빌드)
npm run verify
```

## 📝 최적화 사항

- 폰트 로딩 최적화 (next/font 사용)
- 프로덕션 Console 로그 제거
- 이미지 최적화 설정
- 보안 헤더 설정 (Vercel 런타임에서만 적용, 정적 export에는 미적용)

각 항목의 검증은 `npm run verify`에 포함된 `audit:*` 스크립트가 담당합니다.

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
