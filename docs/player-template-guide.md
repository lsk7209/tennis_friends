# 테니스 선수 컨텐츠 템플릿 사용 가이드

## 개요

이 가이드는 SSOT 규격에 맞춘 테니스 선수 컨텐츠 작성 템플릿 시스템을 설명합니다. 5가지 템플릿 타입을 제공하며, SEO/AEO/GEO 최적화가 자동으로 적용됩니다.

## 템플릿 타입

### 1. 기술 특화형 (technique)
- **대상**: 기술적 강점이 뚜렷한 선수
- **포커스**: 포핸드, 백핸드, 서브, 리턴 등 기술 디테일
- **예시**: 카를로스 알카라즈, 라파엘 나달

### 2. 멘탈/전술형 (mindset)
- **대상**: 멘탈과 전술이 강점인 선수
- **포커스**: 타이브레이크 승률, 전술 변화, 흐름 읽기
- **예시**: 노바크 조코비치, 앤디 머레이

### 3. 성장 서사형 (narrative)
- **대상**: 성장 배경이 주목받는 선수
- **포커스**: 유소년 시절, 커리어 전환점, 성장 스토리
- **예시**: 야닉 시너, 벤 셸턴

### 4. 라이벌 구도형 (rivalry)
- **대상**: 특정 라이벌과의 구도가 뚜렷한 선수
- **포커스**: 라이벌전, 상성 분석, 경쟁 구도
- **예시**: 알카라즈 vs 시너, 페더러 vs 나달

### 5. 복귀·부상형 (comeback)
- **대상**: 부상에서 복귀한 선수
- **포커스**: 부상 이력, 복귀 과정, 재도약 신호
- **예시**: 알렉산더 즈베레프, 도미닉 팀

## 템플릿 구조

### 필수 7섹션

모든 템플릿은 다음 7개 섹션을 포함합니다:

1. **도입·훅**: 선수의 인상적인 한 줄 요약
2. **이 선수는 어떤 선수인가?**: 기본 프로필 및 정체성
3. **왜 세계랭킹 상위권인가?**: 기술·피지컬·멘탈·전술 강점
4. **어떤 경기가 이 선수를 증명했는가?**: 대표 경기 및 명장면
5. **팬들이 이 선수를 좋아하는 이유는?**: 인간적 매력
6. **최근 경기력 흐름은 어떤가?**: 현재 위치 분석
7. **이 선수를 한 문장으로 요약하면?**: 마지막 훅

### 선택 섹션

템플릿 타입에 따라 다음 섹션이 추가됩니다:

- **라이벌 구도형**: "이 선수의 라이벌은 누구인가?"
- **성장 서사형**: "{선수명}은 어떤 환경에서 자랐는가?"
- **복귀·부상형**: "어떤 부상이 이 선수의 커리어를 흔들었는가?"

## 사용 방법

### 1. 선수 데이터 준비

```typescript
import { Player } from '@/types/player';

const player: Player = {
  nameKo: "카를로스 알카라즈",
  nameEn: "Carlos Alcaraz",
  slug: "carlos-alcaraz",
  country: "Spain",
  birthYear: 2003,
  hand: "right",
  backhand: "two-handed",
  rankingCurrent: 2,
  rankingPeak: 1,
  tour: "ATP",
  style: "aggressive",
  favoriteSurface: "clay",
  templateType: "technique",
  tagsStory: ["하이라이트 제조기", "전천후", "공격형"],
  // ... 기타 필드
};
```

### 2. 템플릿 생성

```typescript
import { generateTemplate } from '@/lib/player-templates/template-generator';

const markdown = generateTemplate(player);
```

### 3. 메타데이터 생성

```typescript
import { generateNextMetadata } from '@/lib/player-templates/metadata-generator';

export async function generateMetadata() {
  return generateNextMetadata(player);
}
```

### 4. 구조화 데이터 생성

```typescript
import { PlayerStructuredData } from '@/components/players/PlayerStructuredData';
import { generateStructuredData } from '@/lib/player-templates/jsonld-generator';

// 컴포넌트에서 사용
<PlayerStructuredData player={player} faqs={faqs} />
```

## 작성 가이드

### H2 제목 규칙

- **질문형 사용**: "이 선수는 어떤 선수인가?"
- **직답 포함**: H2 바로 아래 2-3문장, 110자 이내
- **Claim-Evidence 구조**: 각 H2마다 주장과 근거 1쌍 이상

### 문단 작성 규칙

- **3-4문장 내에서 끊기**: 한 문단 = 한 주제
- **짧고 분명하게**: 한 문장에 한 가지 정보만
- **구체적 숫자 사용**: "대략"보다는 정확한 수치

### 장면 묘사

- **기술 설명 → 바로 실제 장면**
- 예: "강한 포핸드" → "백라인 가까이에서도 풀스윙 포핸드로 위너를 만드는 장면이 자주 나온다."

### 표 활용

- **스탯 데이터**: 표로 시각화
- **비교 정보**: 표로 구조화
- **가독성 향상**: 긴 리스트는 표로 변환

## SEO 체크리스트

### 메타데이터

- [ ] Title: 45-60자
- [ ] Description: 110-155자
- [ ] Keywords: 5-10개
- [ ] Canonical URL 설정

### 구조화 데이터

- [ ] Person 스키마 포함
- [ ] ProfilePage 스키마 포함
- [ ] BreadcrumbList 스키마 포함
- [ ] FAQPage 스키마 (FAQ 3-5개)

### 콘텐츠

- [ ] H2는 질문형 구조
- [ ] 각 H2 직답 110자 이내
- [ ] 내부 링크 H2당 1개 이상
- [ ] FAQ 3-5개 포함

## AEO 최적화

### FAQ

- **3-5개 필수**: 자주 묻는 질문 포함
- **질문 형식**: "~인가요?", "~인가요?" 등 자연스러운 질문
- **답변 길이**: 50-100자 정도

### 표 활용

- **데이터 시각화**: 스탯, 비교 정보
- **구조화된 정보**: 리스트보다 표가 나을 때

### 리스트 활용

- **특징 나열**: 강점, 약점, 특징 등
- **단계별 설명**: 순서가 있는 정보

## GEO 최적화

### 지역 정보

- **국적 명시**: 선수 기본 정보에 포함
- **출신지**: 가능하면 포함
- **지역 키워드**: "{국적} 테니스" 등

### 지역별 검색

- **키워드 최적화**: 지역명 + 테니스 관련 키워드
- **hreflang 태그**: 다국어 지원 시

## 예시 데이터

각 템플릿 타입별 예시 데이터는 `src/data/player-examples/` 디렉토리에 있습니다:

- `example-technique.json`: 기술 특화형 예시
- `example-mindset.json`: 멘탈/전술형 예시
- `example-narrative.json`: 성장 서사형 예시
- `example-rivalry.json`: 라이벌 구도형 예시
- `example-comeback.json`: 복귀·부상형 예시

## 템플릿 파일 위치

템플릿 마크다운 파일은 `src/templates/players/` 디렉토리에 있습니다:

- `template-technique.md`
- `template-mindset.md`
- `template-narrative.md`
- `template-rivalry.md`
- `template-comeback.md`

## 주의사항

1. **플레이스홀더 치환**: 템플릿의 `{선수명}`, `{랭킹}` 등을 실제 데이터로 치환
2. **반복 회피**: 매 글마다 표현을 회전시켜 사용
3. **정확성**: 연도, 대회명, 스탯 등은 정확하게 작성
4. **가독성**: 표, 리스트, 문단 구분을 명확히

## 도움말

템플릿 사용 중 문제가 발생하면:

1. 타입 정의 확인: `src/types/player.ts`
2. 유틸리티 함수 확인: `src/lib/player-templates/`
3. 예시 데이터 참고: `src/data/player-examples/`

