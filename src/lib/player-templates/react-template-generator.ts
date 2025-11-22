/**
 * React 컴포넌트 템플릿 생성 유틸리티
 * 
 * 선수 데이터를 기반으로 PlayerPageTemplate에 전달할 props를 생성
 */

import { Player, TemplateType, PlayerMetadata, PlayerFAQ } from '@/types/player';

interface TemplateSections {
  introduction: {
    title: string;
    quote: string;
    content: string[];
  };
  playerType: {
    title: string;
    description: string;
    profileItems: Array<{ label: string; value: string; icon?: 'check' | 'trophy' | 'trending' | 'zap' | 'target' }>;
    playStyle: string;
    characterTags: Array<{ text: string; icon: 'heart' | 'star' | 'trophy' | 'brain' | 'award' | 'target' | 'zap'; color: string }>;
  };
  strengths: {
    title: string;
    summary: string;
    technical: { title: string; highlight: string; content: string[] };
    physical: { title: string; content: string[] };
    mental: { 
      title: string; 
      stats: string; 
      content: string[];
    };
    tactical: { title: string; content: string[] };
  };
  representativeMatch: {
    title: string;
    summary: string;
    matches: Array<{
      title: string;
      description: string;
      highlight?: string;
    }>;
    memorableMoment: {
      quote: string;
    };
  };
  fanAppeal: {
    title: string;
    summary: string;
    courtManner: { title: string; content: string[] };
    interviewStyle: { title: string; content: string[] };
    teamRelations: { title: string; content: string[] };
  };
  recentForm: {
    title: string;
    summary: string;
    recentPerformance: { title: string; content: string[] };
    injuryStatus: { title: string; content: string[] };
    rankingTrend: { title: string; content: string[] };
  };
  oneLiner: {
    title: string;
    summary: string;
    content: string[];
  };
  optional?: {
    injuryCareer?: {
      title: string;
      summary: string;
      difficultPeriod: { title: string; highlight: string; content: string[] };
      recovery: { title: string; quote?: string; content: string[] };
      styleChange: { title: string; content: string[] };
    };
    growthStory?: {
      title: string;
      summary: string;
      background: { title: string; content: string[] };
      earlyCareer: { title: string; content: string[] };
      turningPoint: { title: string; content: string[] };
    };
    rivalry?: {
      title: string;
      summary: string;
      rivals: Array<{
        name: string;
        record: string;
        description: string;
      }>;
      memorableMatches: Array<{
        title: string;
        description: string;
      }>;
    };
  };
}

/**
 * 플레이 스타일 한글 변환
 */
function getPlayStyleKo(style: string): string {
  const styleMap: Record<string, string> = {
    aggressive: '공격형',
    'all-court': '전천후',
    'big-server': '빅서버',
    'counter-puncher': '카운터펀처',
    defensive: '수비형',
    baseliner: '베이스라인',
  };
  return styleMap[style] || style;
}

/**
 * 백핸드 타입 한글 변환
 */
function getBackhandKo(backhand: string): string {
  return backhand === 'one-handed' ? '원핸드' : '투핸드';
}

/**
 * 손잡이 한글 변환
 */
function getHandKo(hand: string): string {
  return hand === 'right' ? '오른손' : '왼손';
}

/**
 * 코트 타입 한글 변환
 */
function getSurfaceKo(surface: string): string {
  const surfaceMap: Record<string, string> = {
    hard: '하드',
    clay: '클레이',
    grass: '그래스',
    mixed: '혼합',
  };
  return surfaceMap[surface] || surface;
}

/**
 * 템플릿 유형별 섹션 생성
 */
export function generateTemplateSections(
  player: Player,
  content: {
    introduction: { quote: string; paragraphs: string[] };
    playerType: { description: string; playStyle: string; characterTags: string[] };
    strengths: {
      summary: string;
      technical: { highlight: string; paragraphs: string[] };
      physical: { paragraphs: string[] };
      mental: { stats: string; paragraphs: string[] };
      tactical: { paragraphs: string[] };
    };
    representativeMatch: {
      summary: string;
      matches: Array<{ title: string; description: string; highlight?: string }>;
      memorableMoment: string;
    };
    fanAppeal: {
      summary: string;
      courtManner: string[];
      interviewStyle: string[];
      teamRelations: string[];
    };
    recentForm: {
      summary: string;
      recentPerformance: string[];
      injuryStatus: string[];
      rankingTrend: string[];
    };
    oneLiner: { summary: string; paragraphs: string[] };
    optional?: {
      injuryCareer?: {
        summary: string;
        difficultPeriod: { highlight: string; paragraphs: string[] };
        recovery: { quote?: string; paragraphs: string[] };
        styleChange: string[];
      };
      growthStory?: {
        summary: string;
        background: string[];
        earlyCareer: string[];
        turningPoint: string[];
      };
      rivalry?: {
        summary: string;
        rivals: Array<{ name: string; record: string; description: string }>;
        memorableMatches: Array<{ title: string; description: string }>;
      };
    };
  }
): TemplateSections {
  const currentYear = new Date().getFullYear();
  const age = currentYear - player.birthYear;

  // 캐릭터 태그 아이콘 매핑
  const tagIconMap: Record<string, { icon: 'heart' | 'star' | 'trophy' | 'brain' | 'award' | 'target' | 'zap'; color: string }> = {
    '우아한': { icon: 'heart', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700' },
    '전사': { icon: 'heart', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700' },
    '미학': { icon: 'star', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700' },
    '전성기': { icon: 'trophy', color: 'bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 border-amber-300 dark:border-amber-700' },
    '멘탈': { icon: 'brain', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700' },
    '전술': { icon: 'award', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700' },
    '흐름': { icon: 'target', color: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200 border-indigo-300 dark:border-indigo-700' },
    '역전': { icon: 'zap', color: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700' },
  };

  const getTagConfig = (tag: string) => {
    for (const [key, config] of Object.entries(tagIconMap)) {
      if (tag.includes(key)) {
        return config;
      }
    }
    return { icon: 'star' as const, color: 'bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700' };
  };

  const sections: TemplateSections = {
    introduction: {
      title: `${player.nameKo}, ${player.templateType === 'comeback' ? '왜 다시 주목받는 선수인가?' : player.templateType === 'mindset' ? '왜 여전히 세계 최고인가?' : '왜 주목받는 선수인가?'}`,
      quote: content.introduction.quote,
      content: content.introduction.paragraphs,
    },
    playerType: {
      title: '이 선수는 어떤 유형의 플레이어인가?',
      description: `${player.nameKo}는 ${player.country} 출신의 세계랭킹 상위권 선수로, ${getPlayStyleKo(player.style)} 스타일과 ${getBackhandKo(player.backhand)} 백핸드가 특징인 ${player.tour} 투어의 ${age >= 30 ? '베테랑' : '선수'}다.`,
      profileItems: [
        { label: '국적', value: player.country, icon: 'check' },
        { label: '생년', value: `${player.birthYear}년 (${age}세)`, icon: 'check' },
        { label: '최고 랭킹', value: `${player.rankingPeak}위`, icon: 'trophy' },
        { label: '현재 랭킹', value: `${player.rankingCurrent}위`, icon: 'trending' },
        { label: '주 종목', value: `단식 (${player.tour})`, icon: 'check' },
        { label: '플레이 스타일', value: getPlayStyleKo(player.style), icon: 'zap' },
        { label: '시그니처 무기', value: `${getBackhandKo(player.backhand)} 백핸드`, icon: 'target' },
      ],
      playStyle: content.playerType.playStyle,
      characterTags: content.playerType.characterTags.map(tag => {
        const config = getTagConfig(tag);
        return { text: tag, ...config };
      }),
    },
    strengths: {
      title: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?',
      summary: content.strengths.summary,
      technical: {
        title: '기술적 강점',
        highlight: content.strengths.technical.highlight,
        content: content.strengths.technical.paragraphs,
      },
      physical: {
        title: '피지컬 능력',
        content: content.strengths.physical.paragraphs,
      },
      mental: {
        title: '멘탈 강점',
        stats: content.strengths.mental.stats,
        content: content.strengths.mental.paragraphs,
      },
      tactical: {
        title: '전술적 다양성',
        content: content.strengths.tactical.paragraphs,
      },
    },
    representativeMatch: {
      title: '이 선수를 가장 잘 보여주는 경기는 무엇일까?',
      summary: content.representativeMatch.summary,
      matches: content.representativeMatch.matches,
      memorableMoment: {
        quote: content.representativeMatch.memorableMoment,
      },
    },
    fanAppeal: {
      title: '팬들은 이 선수의 어떤 점에 끌릴까?',
      summary: content.fanAppeal.summary,
      courtManner: {
        title: '코트 매너',
        content: content.fanAppeal.courtManner,
      },
      interviewStyle: {
        title: '인터뷰 스타일',
        content: content.fanAppeal.interviewStyle,
      },
      teamRelations: {
        title: '팀과의 관계',
        content: content.fanAppeal.teamRelations,
      },
    },
    recentForm: {
      title: `요즘 ${player.nameKo}의 경기력 흐름은 어떤가?`,
      summary: content.recentForm.summary,
      recentPerformance: {
        title: '최근 성적',
        content: content.recentForm.recentPerformance,
      },
      injuryStatus: {
        title: '부상 관리',
        content: content.recentForm.injuryStatus,
      },
      rankingTrend: {
        title: '랭킹과 스타일 변화',
        content: content.recentForm.rankingTrend,
      },
    },
    oneLiner: {
      title: `${player.nameKo}, 한 문장으로 정리하면?`,
      summary: content.oneLiner.summary,
      content: content.oneLiner.paragraphs,
    },
  };

  // 템플릿 유형별 선택 섹션 추가
  if (player.templateType === 'comeback' && content.optional?.injuryCareer) {
    sections.optional = {
      injuryCareer: {
        title: '어떤 부상과 공백이 이 선수의 커리어를 흔들었나?',
        summary: content.optional.injuryCareer.summary,
        difficultPeriod: {
          title: '가장 어려웠던 시기',
          highlight: content.optional.injuryCareer.difficultPeriod.highlight,
          content: content.optional.injuryCareer.difficultPeriod.paragraphs,
        },
        recovery: {
          title: '체계적인 복귀',
          quote: content.optional.injuryCareer.recovery.quote,
          content: content.optional.injuryCareer.recovery.paragraphs,
        },
        styleChange: {
          title: '변화한 플레이 스타일',
          content: content.optional.injuryCareer.styleChange,
        },
      },
    };
  }

  if (player.templateType === 'narrative' && content.optional?.growthStory) {
    sections.optional = {
      ...sections.optional,
      growthStory: {
        title: `${player.nameKo}은 어떻게 여기까지 왔을까?`,
        summary: content.optional.growthStory.summary,
        background: {
          title: '성장 배경',
          content: content.optional.growthStory.background,
        },
        earlyCareer: {
          title: '주니어 시절',
          content: content.optional.growthStory.earlyCareer,
        },
        turningPoint: {
          title: '전환점',
          content: content.optional.growthStory.turningPoint,
        },
      },
    };
  }

  if (player.templateType === 'rivalry' && content.optional?.rivalry) {
    sections.optional = {
      ...sections.optional,
      rivalry: {
        title: '이 선수의 라이벌은 누구인가?',
        summary: content.optional.rivalry.summary,
        rivals: content.optional.rivalry.rivals,
        memorableMatches: content.optional.rivalry.memorableMatches,
      },
    };
  }

  return sections;
}

/**
 * TOC 아이템 생성
 */
export function generateTOCItems(player: Player, hasOptional: boolean): Array<{ id: string; text: string; depth: 2 | 3 }> {
  const baseItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
    { id: 'why-again-notable', text: `${player.nameKo}, ${player.templateType === 'comeback' ? '왜 다시 주목받는 선수인가?' : player.templateType === 'mindset' ? '왜 여전히 세계 최고인가?' : '왜 주목받는 선수인가?'}`, depth: 2 },
    { id: 'what-type-of-player', text: '이 선수는 어떤 유형의 플레이어인가?', depth: 2 },
    { id: 'what-keeps-top-ranking', text: '이 선수가 세계 상위권을 지키는 힘은 무엇인가?', depth: 2 },
  ];

  if (player.templateType === 'comeback') {
    baseItems.push({ id: 'what-injury-career', text: '어떤 부상과 공백이 이 선수의 커리어를 흔들었나?', depth: 2 });
  }

  baseItems.push(
    { id: 'what-proves-player', text: '이 선수를 가장 잘 보여주는 경기는 무엇일까?', depth: 2 },
    { id: 'what-attracts-fans', text: '팬들은 이 선수의 어떤 점에 끌릴까?', depth: 2 },
    { id: 'recent-form', text: `요즘 ${player.nameKo}의 경기력 흐름은 어떤가?`, depth: 2 },
    { id: 'one-sentence-summary', text: `${player.nameKo}, 한 문장으로 정리하면?`, depth: 2 }
  );

  return baseItems;
}

