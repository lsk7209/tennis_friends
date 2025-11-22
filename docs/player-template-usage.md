# 테니스 선수 페이지 템플릿 사용 가이드

## 개요

현재 적용된 스타일을 기반으로 한 React 컴포넌트 템플릿 시스템입니다. 5가지 템플릿 유형에 따라 조정 가능한 선수 페이지를 생성할 수 있습니다.

## 템플릿 유형

1. **technique** - 기술 특화형: 기술적 강점에 초점
2. **mindset** - 멘탈/전술형: 멘탈과 전술에 초점
3. **narrative** - 성장 서사형: 성장 스토리에 초점
4. **rivalry** - 라이벌 구도형: 라이벌 관계에 초점
5. **comeback** - 복귀·부상형: 부상과 복귀에 초점

## 주요 기능

### 1. 시각적 요소
- **아이콘**: Lucide React 아이콘 사용
- **인용구 박스**: 핵심 요약을 강조
- **정보 박스**: 선수 프로필을 그라데이션 박스로 표시
- **배지**: 캐릭터 태그를 아이콘과 함께 표시
- **구분선**: 섹션 간 시각적 구분
- **하이라이트**: 중요 정보 배경색 강조

### 2. 구조화된 섹션
- 도입 섹션 (인용구 포함)
- 선수 유형 섹션 (프로필 박스)
- 강점 섹션 (기술/피지컬/멘탈/전술)
- 대표 경기 섹션
- 팬심 섹션
- 최근 경기력 섹션
- 한 문장 요약
- 선택 섹션 (템플릿 유형별)

## 사용 방법

### 1. 선수 데이터 준비

```typescript
import { Player } from '@/types/player';

const player: Player = {
  nameKo: '그리고르 디미트로프',
  nameEn: 'Grigor Dimitrov',
  slug: 'grigor-dimitrov',
  country: '불가리아',
  birthYear: 1991,
  hand: 'right',
  backhand: 'one-handed',
  rankingCurrent: 15,
  rankingPeak: 3,
  tour: 'ATP',
  style: 'all-court',
  favoriteSurface: 'hard',
  templateType: 'comeback',
  tagsStory: ['우아한 전사', '한 손 백핸드의 미학', '두 번째 전성기'],
};
```

### 2. 콘텐츠 데이터 준비

```typescript
const content = {
  introduction: {
    quote: '원핸드 백핸드의 미학과 우아한 올코트 플레이로 두 번째 전성기를 만들어가고 있는 베테랑 선수',
    paragraphs: [
      '그리고르 디미트로프는 불가리아 출신의 베테랑 테니스 선수로...',
      '그는 2017년 ATP 파이널 우승을 차지하며...',
    ],
  },
  // ... 나머지 섹션 콘텐츠
};
```

### 3. 템플릿 생성

```typescript
import { generateTemplateSections, generateTOCItems } from '@/lib/player-templates/react-template-generator';
import { PlayerPageTemplate } from '@/templates/players/PlayerPageTemplate';

const sections = generateTemplateSections(player, content);
const tocItems = generateTOCItems(player, !!content.optional);

export default function PlayerPage() {
  return (
    <PlayerPageTemplate
      player={player}
      metadata={metadata}
      tocItems={tocItems}
      faqs={faqs}
      sections={sections}
    />
  );
}
```

## 템플릿 유형별 특징

### comeback (복귀·부상형)
- 부상과 복귀 섹션이 필수로 포함
- "왜 다시 주목받는 선수인가?" 제목 사용
- 재도약 신호에 초점

### mindset (멘탈/전술형)
- 멘탈 강점 섹션 강화
- "왜 여전히 세계 최고인가?" 제목 사용
- 전술적 다양성에 초점

### narrative (성장 서사형)
- 성장 스토리 섹션 포함
- 주니어 시절과 전환점 강조

### rivalry (라이벌 구도형)
- 라이벌 관계 섹션 포함
- 라이벌 전적과 대표 경기 강조

### technique (기술 특화형)
- 기술적 강점 섹션 강화
- 스탯과 기술 분석에 초점

## 스타일 가이드

### 아이콘 사용
- 기술적 강점: Zap (보라색)
- 피지컬 능력: Shield (녹색)
- 멘탈 강점: Brain (파란색)
- 전술적 다양성: Award (인디고)
- 프로필: Target (파란색)
- 랭킹: Trophy/Crown (황금색)

### 색상 테마
- 파란색: 기본 정보, 인용구
- 녹색: 멘탈 강점, 통계
- 보라색: 기술적 강점
- 노란색: 어려웠던 시기
- 인디고: 전술적 다양성

### 배지 색상
- 캐릭터 태그에 따라 자동 매핑
- "우아한", "전사" → 파란색
- "미학" → 보라색
- "전성기" → 황금색
- "멘탈" → 파란색
- "전술" → 보라색
- "흐름" → 인디고
- "역전" → 빨간색

## 예시

완전한 예시는 다음 파일을 참고하세요:
- `src/app/players/grigor-dimitrov/page.tsx` (comeback 타입)
- `src/app/players/novak-djokovic/page.tsx` (mindset 타입)

## 주의사항

1. 모든 콘텐츠는 한국어로 작성
2. 문장은 짧고 명확하게
3. 중요한 숫자와 통계는 볼드체로 강조
4. 섹션 간 구분선 사용
5. 다크 모드 지원 확인

