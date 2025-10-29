// 테니스 영양 가이드 데이터 및 로직

export interface NutritionProfile {
  title: string;
  summary: string;
  foods: string[];
  hydration: string;
  macros: {
    carbs: number;
    protein: number;
    fat: number;
  };
  timing?: string;
  tips?: string[];
  avoid?: string[];
}

export interface NutritionPlan {
  pre: NutritionProfile;
  during?: NutritionProfile;
  post: NutritionProfile;
}

export interface NutritionInput {
  activityLevel: string;
  sessionDuration: number;
  sessionType: string;
  timeOfDay: string;
  weather: string;
  goals: string[];
  dietaryRestrictions: string[];
  bodyWeight: number;
  age: number;
  gender: string;
}

export interface Meal {
  name: string;
  calories: number;
  macronutrients?: {
    carbs: number;
    protein: number;
    fat: number;
  };
  ingredients?: string[];
  timing?: string;
  benefits?: string[];
}

export interface Supplement {
  name: string;
  benefits?: string[];
}

export interface Timing {
  period: string;
  description: string;
}

export interface NutritionResult {
  plan: NutritionPlan;
  totalHydration: string;
  totalCalories: string;
  keyWords: string[];
  avoidWords: string[];
  duration: string;
  activityType: string;
  goal: string;
  planName?: string;
  macronutrients?: {
    carbs: { grams: number; percentage: number };
    protein: { grams: number; percentage: number };
    fat: { grams: number; percentage: number };
  };
  hydration?: {
    waterIntake: number;
    electrolyteNeeds: string[];
  };
  meals?: Meal[];
  supplements?: Supplement[];
  timing?: Timing[];
  recommendations?: {
    general: string[];
    hydration: string[];
    recovery: string[];
    performance: string[];
  };
}

export const nutritionProfiles: { [key: string]: { [key: string]: NutritionProfile } } = {
  match: {
    pre: {
      title: "경기 전 영양 계획",
      summary: "경기 시작 2시간 전, 가볍고 소화 잘 되는 탄수화물을 중심으로 에너지 준비",
      foods: ["바나나 1개", "오트밀 1컵", "닭가슴살 샌드위치", "스포츠음료 300ml"],
      hydration: "워밍업 전후 총 500~600ml 수분 섭취",
      macros: { carbs: 60, protein: 25, fat: 15 },
      timing: "경기 2시간 전",
      tips: [
        "무거운 식사는 피하고 가벼운 탄수화물 중심으로",
        "카페인은 적당히, 과도한 섭취는 피하세요",
        "소화 시간을 고려하여 충분한 여유를 두세요"
      ],
      avoid: ["기름진 음식", "과도한 카페인", "탄산음료"]
    },
    during: {
      title: "경기 중 수분 보충",
      summary: "세트 간 10~15분 간격으로 수분과 전해질 보충",
      foods: ["이온음료", "소금 한 꼬집", "바나나 1/2개"],
      hydration: "300ml~500ml/세트당",
      macros: { carbs: 80, protein: 10, fat: 10 },
      timing: "세트 간 휴식 시간",
      tips: [
        "소금을 약간 섞어 전해질 보충",
        "너무 차갑지 않은 물로 갈증 해소",
        "과도한 섭취는 오히려 부담이 될 수 있어요"
      ],
      avoid: ["과도한 수분 섭취", "너무 차가운 음료", "단맛이 강한 음료"]
    },
    post: {
      title: "경기 후 회복 가이드",
      summary: "30분 내 단백질·탄수화물 동시 섭취로 근육 회복 가속화",
      foods: ["단백질 쉐이크", "과일", "저지방 요거트", "물 500ml"],
      hydration: "경기 후 1시간 이내 700~1000ml 수분 보충",
      macros: { carbs: 40, protein: 40, fat: 20 },
      timing: "경기 후 30분 이내",
      tips: [
        "단백질과 탄수화물을 함께 섭취하세요",
        "충분한 수분 보충으로 탈수 방지",
        "과일의 자연당으로 에너지 회복"
      ],
      avoid: ["알코올", "과도한 당분", "기름진 음식"]
    }
  },
  training: {
    pre: {
      title: "훈련 전 영양 계획",
      summary: "훈련 시작 1시간 전, 지속적인 에너지 공급을 위한 균형 잡힌 식사",
      foods: ["현미밥 1공기", "달걀 2개", "견과류 한 줌", "물 400ml"],
      hydration: "훈련 전 400~500ml 수분 섭취",
      macros: { carbs: 50, protein: 30, fat: 20 },
      timing: "훈련 1시간 전",
      tips: [
        "복합 탄수화물로 지속적인 에너지 공급",
        "단백질로 근육 보호",
        "견과류의 건강한 지방으로 포만감 유지"
      ],
      avoid: ["과도한 당분", "기름진 음식", "과식"]
    },
    during: {
      title: "훈련 중 수분 보충",
      summary: "훈련 중 규칙적인 수분 보충으로 체력 유지",
      foods: ["물", "이온음료", "바나나 1/2개"],
      hydration: "200~300ml/30분마다",
      macros: { carbs: 70, protein: 15, fat: 15 },
      timing: "훈련 중 30분마다",
      tips: [
        "갈증을 느끼기 전에 미리 수분 보충",
        "땀을 많이 흘렸다면 소금을 약간 추가",
        "너무 차가운 물보다는 미지근한 물이 좋아요"
      ],
      avoid: ["과도한 수분 섭취", "너무 차가운 음료"]
    },
    post: {
      title: "훈련 후 회복 가이드",
      summary: "훈련 후 30분 내 근육 회복과 에너지 보충",
      foods: ["단백질 쉐이크", "바나나", "아몬드", "물 500ml"],
      hydration: "훈련 후 1시간 이내 600~800ml 수분 보충",
      macros: { carbs: 45, protein: 35, fat: 20 },
      timing: "훈련 후 30분 이내",
      tips: [
        "단백질로 근육 회복 촉진",
        "탄수화물로 에너지 저장소 회복",
        "충분한 수분으로 탈수 방지"
      ],
      avoid: ["알코올", "과도한 당분", "기름진 음식"]
    }
  },
  rest: {
    pre: {
      title: "휴식일 영양 플랜",
      summary: "회복 중심의 균형 잡힌 식단. 단백질 유지, 지방 제한",
      foods: ["달걀", "견과류", "현미밥", "채소", "과일"],
      hydration: "수시 섭취 (2L/일)",
      macros: { carbs: 40, protein: 40, fat: 20 },
      timing: "하루 종일",
      tips: [
        "균형 잡힌 식단으로 전반적인 건강 유지",
        "충분한 수분 섭취로 몸의 회복 도움",
        "과일과 채소로 비타민과 미네랄 보충"
      ],
      avoid: ["과식", "과도한 당분", "가공식품"]
    },
    post: {
      title: "휴식일 영양 플랜",
      summary: "회복 중심의 균형 잡힌 식단. 단백질 유지, 지방 제한",
      foods: ["달걀", "견과류", "현미밥", "채소", "과일"],
      hydration: "수시 섭취 (2L/일)",
      macros: { carbs: 40, protein: 40, fat: 20 },
      timing: "하루 종일",
      tips: [
        "균형 잡힌 식단으로 전반적인 건강 유지",
        "충분한 수분 섭취로 몸의 회복 도움",
        "과일과 채소로 비타민과 미네랄 보충"
      ],
      avoid: ["과식", "과도한 당분", "가공식품"]
    }
  }
};

export function calculateNutritionPlan(
  activityType: string,
  duration: string,
  goal: string
): NutritionResult {
  let plan: NutritionPlan;
  
  if (activityType === 'match') {
    plan = {
      pre: nutritionProfiles.match.pre,
      during: nutritionProfiles.match.during,
      post: nutritionProfiles.match.post
    };
  } else if (activityType === 'training') {
    plan = {
      pre: nutritionProfiles.training.pre,
      during: nutritionProfiles.training.during,
      post: nutritionProfiles.training.post
    };
  } else {
    // rest day
    plan = {
      pre: nutritionProfiles.rest.pre,
      post: nutritionProfiles.rest.post
    };
  }

  // Duration-based adjustments
  const durationMultiplier = getDurationMultiplier(duration);
  
  // Goal-based adjustments
  const goalAdjustments = getGoalAdjustments(goal);

  // Calculate totals
  const totalHydration = calculateTotalHydration(plan, durationMultiplier);
  const totalCalories = calculateTotalCalories(plan, durationMultiplier, goalAdjustments);

  // Generate keywords and avoid words
  const keyWords = generateKeywords(activityType, goal);
  const avoidWords = generateAvoidWords(activityType, goal);

  return {
    plan,
    totalHydration,
    totalCalories,
    keyWords,
    avoidWords,
    duration,
    activityType,
    goal
  };
}

function getDurationMultiplier(duration: string): number {
  switch (duration) {
    case '30분': return 0.5;
    case '1시간': return 1;
    case '2시간': return 1.5;
    case '3시간 이상': return 2;
    default: return 1;
  }
}

function getGoalAdjustments(goal: string): { carbs: number; protein: number; fat: number } {
  switch (goal) {
    case '체력 유지': return { carbs: 1, protein: 1, fat: 1 };
    case '경기력 향상': return { carbs: 1.2, protein: 1.1, fat: 0.9 };
    case '체중 관리': return { carbs: 0.8, protein: 1.2, fat: 0.8 };
    case '근육 회복': return { carbs: 1, protein: 1.3, fat: 1 };
    default: return { carbs: 1, protein: 1, fat: 1 };
  }
}

function calculateTotalHydration(plan: NutritionPlan, multiplier: number): string {
  let total = 0;
  
  if (plan.pre) total += 500; // 기본 500ml
  if (plan.during) total += 400 * multiplier; // 활동 중
  if (plan.post) total += 600; // 회복용
  
  return `${Math.round(total)}ml`;
}

function calculateTotalCalories(plan: NutritionPlan, multiplier: number, adjustments: any): string {
  let total = 0;
  
  if (plan.pre) total += 300 * adjustments.carbs;
  if (plan.during) total += 150 * multiplier * adjustments.carbs;
  if (plan.post) total += 400 * adjustments.protein;
  
  return `${Math.round(total)}kcal`;
}

function generateKeywords(activityType: string, goal: string): string[] {
  const keywords = [];
  
  if (activityType === 'match') {
    keywords.push('#수분보충', '#빠른소화', '#에너지충전');
  } else if (activityType === 'training') {
    keywords.push('#근육보호', '#지속에너지', '#회복준비');
  } else {
    keywords.push('#균형식단', '#회복중심', '#영양보충');
  }
  
  if (goal === '경기력 향상') {
    keywords.push('#성능향상');
  } else if (goal === '체중 관리') {
    keywords.push('#체중관리');
  } else if (goal === '근육 회복') {
    keywords.push('#근육회복');
  }
  
  return keywords;
}

function generateAvoidWords(activityType: string, goal: string): string[] {
  const avoidWords = [];
  
  if (activityType === 'match') {
    avoidWords.push('#기름진식사', '#탄산음료', '#과도한카페인');
  } else if (activityType === 'training') {
    avoidWords.push('#과식', '#알코올', '#가공식품');
  } else {
    avoidWords.push('#과도한당분', '#가공식품', '#불규칙한식사');
  }
  
  if (goal === '체중 관리') {
    avoidWords.push('#고칼로리', '#고지방');
  }
  
  return avoidWords;
}

export function getMacroChartData(plan: NutritionPlan) {
  const data = [];
  
  if (plan.pre) {
    data.push({
      name: '경기 전',
      carbs: plan.pre.macros.carbs,
      protein: plan.pre.macros.protein,
      fat: plan.pre.macros.fat
    });
  }
  
  if (plan.during) {
    data.push({
      name: '활동 중',
      carbs: plan.during.macros.carbs,
      protein: plan.during.macros.protein,
      fat: plan.during.macros.fat
    });
  }
  
  if (plan.post) {
    data.push({
      name: '회복',
      carbs: plan.post.macros.carbs,
      protein: plan.post.macros.protein,
      fat: plan.post.macros.fat
    });
  }
  
  return data;
}

export function getHydrationChartData(plan: NutritionPlan, duration: string) {
  const multiplier = getDurationMultiplier(duration);
  
  return [
    {
      name: '경기 전',
      amount: 500,
      color: '#10b981'
    },
    {
      name: '활동 중',
      amount: Math.round(400 * multiplier),
      color: '#3b82f6'
    },
    {
      name: '회복',
      amount: 600,
      color: '#8b5cf6'
    }
  ];
}

// 누락된 함수 추가
export function generateNutritionPlan(input: NutritionInput): NutritionResult {
  return calculateNutritionPlan(input.sessionType, input.sessionDuration.toString(), input.goals.join(', '));
}

