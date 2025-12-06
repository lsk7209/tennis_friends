# 테니스 친구들 선수 데이터 시스템 운영 가이드

이 문서는 `tennis-friends` 프로젝트의 개선된 '선수 데이터베이스 시스템'에 대한 운영 매뉴얼입니다.
이제 100명 이상의 선수 데이터를 단 하나의 파일에서 손쉽게 관리하고, 자동으로 SEO 최적화된 페이지를 생성할 수 있습니다.

## 1. 시스템 개요

- **데이터 소스**: `src/data/players.ts`
- **타입 정의**: `src/types/player.ts`
- **페이지 생성**:
  - 목록 페이지: `src/app/players/page.tsx` (데이터 소스에서 자동으로 리스트 로딩)
  - 상세 페이지: `src/app/players/[slug]/page.tsx` (동적 라우팅으로 모든 선수 페이지 자동 생성)
- **이미지 경로**: `/public/images/players/{slug}.png`

## 2. 선수 추가/수정 방법

새로운 선수를 추가하거나 정보를 수정하려면 **오직 `src/data/players.ts` 파일만 수정하면 됩니다.**

### 2.1 선수 추가 예시

`PLAYERS_DB` 객체에 새로운 키(slug)와 데이터를 추가하세요.

```typescript
// src/data/players.ts

export const PLAYERS_DB: Record<string, PlayerData> = {
  // ... 기존 선수들
  'new-player-slug': {
    name: '선수 한글 이름',
    nameEn: 'Player English Name',
    country: 'Country Name',
    countryFlag: '국기이모지',
    gender: 'male' | 'female', // 성별 필수
    image: '/images/players/new-player-slug.png' // 이미지 경로 (선택 사항)
  }
};
```

### 2.2 주요 필드 설명

- **key (slug)**: URL에 사용될 고유 ID입니다. (예: `rafael-nadal` -> `tennisfriends.co.kr/players/rafael-nadal`)
- **image**: 이미지가 준비되지 않았다면 이 줄을 생략하세요. 자동으로 국가 국기가 표시되는 예쁜 플레이스홀더가 적용됩니다.
- **gender**: 목록 페이지의 'ATP(남자)' / 'WTA(여자)' 탭 필터링에 사용됩니다.

## 3. 선수 이미지 적용 방법

1. **이미지 준비**: 배경이 투명하거나 깔끔한 PNG/JPG/SVG 파일을 준비합니다. (추천: 배경 제거된 PNG)
2. **파일 이름**: 가급적 슬러그와 동일하게 저장합니다. (예: `rafael-nadal.png`)
3. **저장 위치**: `public/images/players/` 폴더에 파일을 넣으세요.
4. **코드 연결**: `src/data/players.ts`의 해당 선수 데이터에 `image: '/images/players/파일이름.png'`를 추가합니다.

## 4. 커스텀(상세) 페이지 제작 방법

대부분의 선수는 자동 생성된 페이지(`[slug]/page.tsx`)로 충분합니다.
하지만, **특정 선수에 대해 더 복잡한 레이아웃이나 특별한 콘텐츠(경기 기록 그래프, 영상 등)를 넣고 싶다면?**

1. `src/app/players/` 폴더 아래에 해당 선수 슬러그로 폴더를 만듭니다. (예: `src/app/players/carlos-alcaraz/`)
2. 그 안에 `page.tsx`를 만듭니다.
3. Next.js는 자동으로 동적 라우트보다 구체적인 폴더 경로를 우선순위로 보여줍니다.
4. 즉, 별도 폴더를 만드는 순간 그 선수는 공통 템플릿이 아닌, 새로 만든 페이지 디자인을 따르게 됩니다.

## 5. SEO 및 사이트맵

- **자동 반영**: `src/app/sitemap.ts`가 수정되어, `PLAYERS_DB`에 있는 모든 선수는 **자동으로 사이트맵에 포함**됩니다.
- 선수를 추가하고 배포하기만 하면, 구글이 자동으로 해당 페이지를 찾아갑니다.
- `lastModified`, `keywords` 등 SEO 메타데이터도 자동으로 최적화되어 생성됩니다.
