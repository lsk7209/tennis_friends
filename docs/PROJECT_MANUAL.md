# Tennis Friends 프로젝트 운영 매뉴얼

이 문서는 **Tennis Friends (테니스 친구들)** 웹 애플리케이션의 콘텐츠 관리, SEO 시스템 운영, 배포 방법을 설명하는 통합 가이드입니다.

## 1. 프로젝트 개요

Tennis Friends는 Next.js 기반의 테니스 정보 플랫폼으로, 선수 데이터베이스, 블로그, 유틸리티 도구를 제공합니다.
**"AI-First" 철학**에 따라, 데이터 파일(`src/data/`)만 수정하면 사이트 전체에 콘텐츠와 SEO가 자동으로 반영되도록 설계되었습니다.

*   **프레임워크**: Next.js (App Router)
*   **언어**: TypeScript
*   **주요 데이터 위치**: `src/data/`

---

## 2. 콘텐츠 관리 (Content Management)

### 2.1 선수 데이터 (Player Database)

선수 프로필은 `src/data/players.ts` 파일 하나로 관리됩니다.

**추가/수정 방법:**
1.  `src/data/players.ts` 파일을 엽니다.
2.  `PLAYERS_DB` 객체에 새로운 선수 키(Slug)와 데이터를 추가합니다.
3.  **필수 필드**: `name`, `nameEn`, `country`, `countryFlag`, `detailedProfile` (HTML 콘텐츠 포함).
4.  **육각형 능력치 (Stats)**: `detailedProfile.hexagonStats` 배열에 6가지 항목(Speed, Power 등)을 점수(1-10)와 함께 입력하면 그래프가 자동 생성됩니다.
5.  **FAQ**: `detailedProfile.faq` 배열에 질문/답변을 추가하면 AEO(답변 엔진 최적화)용 스키마가 자동 생성됩니다.

**이미지 추가:**
*   경로: `public/images/players/[slug].png`
*   권장 규격: 배경이 제거된 PNG (누끼 이미지)
*   파일명은 `players.ts`의 키(Slug)와 일치시키는 것을 권장합니다.

### 2.2 블로그 포스트 (Blog Posts)

블로그 글은 `src/data/blog-posts.js`에서 관리됩니다.

**추가/수정 방법:**
1.  `src/data/blog-posts.js` 파일을 엽니다.
2.  `allBlogPosts` 배열에 새로운 객체를 추가합니다.
3.  **필수 필드**:
    *   `title`: 제목
    *   `slug`: URL 경로 (예: `tennis-racket-guide`)
    *   `excerpt`: 요약글 (메타 설명으로도 사용됨)
    *   `content`: 본문 HTML (주의: 현재 데이터 구조상 content 필드가 누락되어 있다면 추가해야 본문이 나옵니다).
    *   `date`: 발행일 (`YYYY-MM-DD`)
    *   `category`, `tags`: 분류 및 키워드

**참고**: 홈페이지(메인)에 노출되는 추천 글은 `src/data/home-blog-posts.ts`에서 별도로 관리할 수 있습니다.

### 2.3 관련 콘텐츠 (Internal Linking)

선수 상세 페이지 하단에 "관련 블로그 가이드"가 자동으로 표시됩니다.
*   **작동 원리**: 블로그 포스트의 `title`이나 `excerpt`에 선수 이름(한글/영문)이 포함되면 자동으로 매칭됩니다.
*   별도의 설정 없이 블로그 글만 잘 작성하면 내부 링크가 연결됩니다.

---

## 3. SEO 시스템 (Automated SEO)

이 프로젝트는 강력한 SEO 자동화를 갖추고 있습니다.

### 3.1 메타데이터 & 스키마
*   **페이지 메타데이터**: 페이지의 `generateMetadata` 함수가 데이터 파일(`players.ts`, `blog-posts.js`)을 읽어 Title, Description, Canonical URL을 자동 생성합니다.
*   **구조화된 데이터 (JSON-LD)**:
    *   **ProfilePage**: 선수 페이지가 '인물 프로필'임을 검색엔진에 알립니다.
    *   **Breadcrumb**: 상단 이동 경로를 검색 결과에 표시합니다.
    *   **FAQPage**: FAQ 섹션이 검색 결과에 노출되도록 돕습니다.

### 3.2 사이트맵 (Sitemap)
*   `src/app/sitemap.ts` 파일이 동적으로 실행됩니다.
*   `PLAYERS_DB`와 `allBlogPosts`의 모든 항목을 스캔하여 `sitemap.xml`을 자동으로 최신화합니다.
*   따라서 선수를 추가하고 배포하기만 하면 구글/네이버가 자동으로 페이지를 찾을 수 있습니다.

---

## 4. 개발 및 배포 (Development & Deployment)

### 4.1 로컬 실행
```bash
npm run dev
```
`http://localhost:3000`에서 확인 가능합니다.

### 4.2 빌드 및 배포
```bash
npm run build
```
GitHub Repository에 코드를 Push하면 (연동된 경우) Vercel 등의 플랫폼을 통해 자동 배포됩니다.

### 4.3 주요 폴더 구조
*   `src/app`: 페이지 라우팅 (Next.js App Router)
*   `src/components`: UI 컴포넌트 (`seo`, `ui` 등)
*   `src/data`: **데이터 저장소 (가장 중요)**
*   `public`: 이미지 등 정적 파일
