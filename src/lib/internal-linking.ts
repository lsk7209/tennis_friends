import type { RelatedContentItem } from "@/components/RelatedContent";

type LinkCandidate = RelatedContentItem & {
  keywords: string[];
  priority: number;
};

export type InternalLinkContext = {
  title?: string;
  category?: string;
  tags?: string[];
  content?: string;
  currentHref?: string;
};

const CORE_UTILITY_LINKS: LinkCandidate[] = [
  {
    id: "ntrp-test",
    title: "NTRP 실력 테스트",
    description: "현재 테니스 레벨을 확인하고 다음 훈련 기준을 잡습니다.",
    category: "실력 측정",
    href: "/utility/ntrp-test",
    keywords: ["서브", "리턴", "실력", "레벨", "초보", "중급", "ntrp"],
    priority: 90,
  },
  {
    id: "play-style-test",
    title: "플레이 스타일 진단",
    description: "경기 성향과 보완 포인트를 유형별로 확인합니다.",
    category: "성향 분석",
    href: "/utility/play-style-test",
    keywords: ["스타일", "플레이", "전술", "성향", "공격", "수비", "멘탈"],
    priority: 86,
  },
  {
    id: "string-tension",
    title: "스트링 텐션 계산기",
    description: "라켓, 스트링, 플레이 스타일에 맞는 텐션 범위를 찾습니다.",
    category: "장비 설정",
    href: "/utility/string-tension",
    keywords: ["스트링", "텐션", "라켓", "장비", "타구감", "하이브리드"],
    priority: 84,
  },
  {
    id: "injury-risk",
    title: "부상 위험 체크",
    description: "운동량, 통증, 회복 상태를 기준으로 위험 신호를 점검합니다.",
    category: "건강 관리",
    href: "/utility/injury-risk",
    keywords: ["부상", "통증", "회복", "무릎", "어깨", "손목", "엘보"],
    priority: 83,
  },
  {
    id: "equipment-recommendation",
    title: "장비 추천 시스템",
    description: "실력과 목적에 맞는 라켓, 스트링, 장비 조합을 고릅니다.",
    category: "장비 추천",
    href: "/utility/equipment-recommendation",
    keywords: ["장비", "라켓", "추천", "선택", "무게", "밸런스", "스트링"],
    priority: 82,
  },
  {
    id: "match-analyzer",
    title: "경기 분석 도구",
    description: "경기 기록을 다음 연습 주제와 전술로 정리합니다.",
    category: "경기 분석",
    href: "/utility/match-analyzer",
    keywords: ["경기", "분석", "기록", "전술", "전략", "실수", "패턴"],
    priority: 78,
  },
  {
    id: "training-planner",
    title: "훈련 계획 도우미",
    description: "목표와 가능한 시간에 맞춰 주간 훈련 구성을 잡습니다.",
    category: "훈련 계획",
    href: "/utility/training-planner",
    keywords: ["훈련", "연습", "계획", "루틴", "주간", "드릴", "목표"],
    priority: 76,
  },
  {
    id: "tennis-dictionary",
    title: "테니스 용어 사전",
    description: "규칙, 전술, 장비 용어를 빠르게 확인합니다.",
    category: "학습",
    href: "/utility/tennis-dictionary",
    keywords: ["규칙", "용어", "룰", "스코어", "코트", "복식", "단식"],
    priority: 74,
  },
  {
    id: "doubles-chemistry-test",
    title: "복식 궁합 테스트",
    description: "파트너 역할 조합과 커버 약속을 점검합니다.",
    category: "복식",
    href: "/utility/doubles-chemistry-test",
    keywords: ["복식", "더블", "파트너", "전위", "후위", "궁합", "커버"],
    priority: 72,
  },
  {
    id: "mental-training",
    title: "멘탈 트레이닝",
    description: "포인트 사이 루틴과 집중력 회복 방법을 정리합니다.",
    category: "멘탈",
    href: "/utility/mental-training",
    keywords: ["멘탈", "집중", "심리", "루틴", "긴장", "압박"],
    priority: 70,
  },
];

function toRelatedItem(item: LinkCandidate): RelatedContentItem {
  return {
    id: item.id,
    title: item.title,
    description: item.description,
    excerpt: item.excerpt,
    category: item.category,
    tags: item.tags,
    href: item.href,
    date: item.date,
    readTime: item.readTime,
    badge: item.badge,
  };
}

export function getCoreUtilityLinks(): RelatedContentItem[] {
  return CORE_UTILITY_LINKS.map(toRelatedItem);
}

export function getRelatedUtilityLinks(
  context: InternalLinkContext,
  maxResults = 3,
): RelatedContentItem[] {
  const text = [
    context.title,
    context.category,
    ...(context.tags ?? []),
    context.content,
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const scored = CORE_UTILITY_LINKS.filter(
    (item) => item.href !== context.currentHref,
  )
    .map((item) => {
      const keywordScore = item.keywords.reduce(
        (score, keyword) => score + (text.includes(keyword.toLowerCase()) ? 1 : 0),
        0,
      );

      return {
        item,
        score: keywordScore * 10 + item.priority,
        matched: keywordScore > 0,
      };
    })
    .sort((a, b) => b.score - a.score);

  return [
    ...scored.filter((entry) => entry.matched),
    ...scored.filter((entry) => !entry.matched),
  ]
    .slice(0, maxResults)
    .map(({ item }) => toRelatedItem(item));
}
