export interface TensionInput {
  headSize: 'Small' | 'Mid' | 'Oversize';
  stringType: 'Polyester' | 'Multifilament' | 'Natural Gut' | 'Hybrid';
  playStyle: '컨트롤형' | '파워형' | '스핀형' | '올라운더';
  environment: '실내' | '실외(여름)' | '실외(겨울)' | '실외(봄/가을)';
  feelPreference: '부드럽게' | '적당히' | '단단하게';
  ntrpLevel?: '2.5' | '3.0' | '3.5' | '4.0' | '4.5+';
}

export interface TensionResult {
  tensionLb: number;
  tensionKg: number;
  range: string;
  summary: string;
  tips: string[];
  style: string;
  color: string;
}

export const TENSION_MODEL_VERSION = 'tf-tension-rules-v2-20260915';

const VALID_INPUTS = {
  headSize: ['Small', 'Mid', 'Oversize'],
  stringType: ['Polyester', 'Multifilament', 'Natural Gut', 'Hybrid'],
  playStyle: ['컨트롤형', '파워형', '스핀형', '올라운더'],
  environment: ['실내', '실외(여름)', '실외(겨울)', '실외(봄/가을)'],
  feelPreference: ['부드럽게', '적당히', '단단하게'],
  ntrpLevel: ['2.5', '3.0', '3.5', '4.0', '4.5+'],
} as const;

export function isTensionInput(input: Partial<TensionInput>): input is TensionInput {
  return (
    VALID_INPUTS.headSize.includes(input.headSize as never) &&
    VALID_INPUTS.stringType.includes(input.stringType as never) &&
    VALID_INPUTS.playStyle.includes(input.playStyle as never) &&
    VALID_INPUTS.environment.includes(input.environment as never) &&
    VALID_INPUTS.feelPreference.includes(input.feelPreference as never) &&
    (input.ntrpLevel === undefined ||
      VALID_INPUTS.ntrpLevel.includes(input.ntrpLevel as never))
  );
}

export function calculateTension(input: TensionInput): TensionResult {
  if (!isTensionInput(input)) {
    throw new RangeError('invalid tension calculator input');
  }
  let base = 55; // 기본 55lbs
  
  // 라켓 헤드 크기 조정
  if (input.headSize === 'Small') base += 2;
  if (input.headSize === 'Oversize') base -= 2;
  
  // 스트링 재질 조정
  if (input.stringType === 'Polyester') base -= 2;
  if (input.stringType === 'Natural Gut') base += 2;
  if (input.stringType === 'Hybrid') base -= 1;
  
  // 플레이 스타일 조정
  if (input.playStyle === '파워형') base -= 2;
  if (input.playStyle === '컨트롤형') base += 2;
  if (input.playStyle === '스핀형') base += 1;
  
  // 환경 조정
  if (input.environment === '실외(여름)') base -= 2;
  if (input.environment === '실외(겨울)') base += 1;
  if (input.environment === '실외(봄/가을)') base -= 1;
  
  // 타구감 선호도 조정
  if (input.feelPreference === '부드럽게') base -= 2;
  if (input.feelPreference === '단단하게') base += 2;
  
  // NTRP 레벨별 미세 조정
  if (input.ntrpLevel === '4.0' || input.ntrpLevel === '4.5+') base += 1;
  if (input.ntrpLevel === '2.5') base -= 1;
  
  // 최종 범위 제한 (45-65lbs)
  const finalTension = Math.max(45, Math.min(65, base));
  const tensionKg = Math.round(finalTension * 0.453592 * 10) / 10;
  
  // 범위 계산 (±1lb)
  const minTension = Math.max(45, finalTension - 1);
  const maxTension = Math.min(65, finalTension + 1);
  const minKg = Math.round(minTension * 0.453592 * 10) / 10;
  const maxKg = Math.round(maxTension * 0.453592 * 10) / 10;
  
  const range = `${minTension}–${maxTension} lb (${minKg}–${maxKg}kg)`;
  
  // 스타일별 요약 및 팁 생성
  const { summary, tips, color } = generateStyleInfo(input.playStyle, input.stringType, input.environment);
  
  return {
    tensionLb: finalTension,
    tensionKg,
    range,
    summary,
    tips,
    style: input.playStyle,
    color
  };
}

function generateStyleInfo(playStyle: string, _stringType: string, _environment: string) {
  const styleInfo = {
    '컨트롤형': {
      summary: '당신은 컨트롤을 중시하는 플레이어입니다.',
      tips: [
        '조금 높은 텐션은 반발을 줄여 방향 제어에 도움을 줄 수 있습니다.',
        '폴리 스트링은 10시간 이후 텐션 유지율을 체크하세요.',
        '하이브리드 세팅 시 메인 스트링 기준으로 계산하세요.'
      ],
      color: 'blue'
    },
    '파워형': {
      summary: '당신은 파워를 중시하는 공격적 플레이어입니다.',
      tips: [
        '조금 낮은 텐션은 반발과 편안함을 높이는 데 도움을 줄 수 있습니다.',
        '여름철엔 1–2lb 낮춰서 팔꿈치 부담을 줄이세요.',
        '자연거트 스트링은 텐션 유지가 좋아 파워형에 적합합니다.'
      ],
      color: 'red'
    },
    '스핀형': {
      summary: '당신은 스핀을 활용하는 기술적 플레이어입니다.',
      tips: [
        '중간 텐션으로 스핀과 컨트롤의 균형을 맞추세요.',
        '폴리 스트링은 스핀 생성에 효과적입니다.',
        '그립을 강하게 잡고 스윙 속도를 높이세요.'
      ],
      color: 'green'
    },
    '올라운더': {
      summary: '당신은 모든 기술을 균형있게 구사하는 올라운더입니다.',
      tips: [
        '중립적 텐션으로 다양한 샷을 자유롭게 구사하세요.',
        '상황에 따라 텐션을 미세 조정할 수 있습니다.',
        '하이브리드 세팅으로 감각과 파워를 모두 확보하세요.'
      ],
      color: 'gold'
    }
  };
  
  return styleInfo[playStyle as keyof typeof styleInfo];
}

export function getTensionComparison(playStyle: string) {
  const comparisons = {
    '컨트롤형': [
      { style: '컨트롤형', tension: '54-58lb', description: '반발을 줄인 방향 제어' },
      { style: '파워형', tension: '48-52lb', description: '반발과 편안함' },
      { style: '스핀형', tension: '50-54lb', description: '효과적 스핀' }
    ],
    '파워형': [
      { style: '파워형', tension: '48-52lb', description: '반발과 편안함' },
      { style: '컨트롤형', tension: '54-58lb', description: '반발을 줄인 방향 제어' },
      { style: '스핀형', tension: '50-54lb', description: '효과적 스핀' }
    ],
    '스핀형': [
      { style: '스핀형', tension: '50-54lb', description: '효과적 스핀' },
      { style: '컨트롤형', tension: '54-58lb', description: '반발을 줄인 방향 제어' },
      { style: '파워형', tension: '48-52lb', description: '반발과 편안함' }
    ],
    '올라운더': [
      { style: '올라운더', tension: '52-56lb', description: '균형잡힌 플레이' },
      { style: '컨트롤형', tension: '54-58lb', description: '반발을 줄인 방향 제어' },
      { style: '파워형', tension: '48-52lb', description: '반발과 편안함' }
    ]
  };
  
  return comparisons[playStyle as keyof typeof comparisons] || comparisons['올라운더'];
}
