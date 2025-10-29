export interface TrainingPlanInput {
  currentLevel: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  playStyle: 'aggressive' | 'defensive' | 'all-round' | 'serve-volley' | 'baseline';
  goals: string[];
  availableTime: {
    weekly: number; // 주당 시간
    sessionLength: number; // 세션당 시간
  };
  focusAreas: string[];
  physicalCondition: 'excellent' | 'good' | 'average' | 'poor';
  experience: number; // 년수
}

export interface TrainingPlanResult {
  planName: string;
  duration: number; // 주
  weeklySchedule: WeeklySchedule[];
  focusAreas: FocusArea[];
  progressMilestones: Milestone[];
  recommendations: {
    technical: string[];
    tactical: string[];
    physical: string[];
    mental: string[];
  };
  equipment: string[];
  nextSteps: string[];
}

export interface WeeklySchedule {
  week: number;
  sessions: TrainingSession[];
  focus: string;
  goals: string[];
}

export interface TrainingSession {
  day: string;
  duration: number;
  type: 'technical' | 'tactical' | 'physical' | 'match' | 'recovery';
  title: string;
  description: string;
  exercises: Exercise[];
  intensity: 'low' | 'medium' | 'high';
}

export interface Exercise {
  name: string;
  duration: number;
  sets?: number;
  reps?: number;
  description: string;
  tips: string[];
}

export interface FocusArea {
  area: string;
  priority: 'high' | 'medium' | 'low';
  exercises: string[];
  timeline: string;
}

export interface Milestone {
  week: number;
  title: string;
  description: string;
  criteria: string[];
}

export function generateTrainingPlan(input: TrainingPlanInput): TrainingPlanResult {
  const planName = generatePlanName(input);
  const duration = calculateDuration(input);
  const weeklySchedule = generateWeeklySchedule(input, duration);
  const focusAreas = generateFocusAreas(input);
  const progressMilestones = generateMilestones(input, duration);
  const recommendations = generateRecommendations(input);
  const equipment = generateEquipmentList(input);
  const nextSteps = generateNextSteps(input);

  return {
    planName,
    duration,
    weeklySchedule,
    focusAreas,
    progressMilestones,
    recommendations,
    equipment,
    nextSteps
  };
}

function generatePlanName(input: TrainingPlanInput): string {
  const levelNames = {
    beginner: '초보자',
    intermediate: '중급자',
    advanced: '고급자',
    expert: '전문가'
  };
  
  const styleNames = {
    aggressive: '공격형',
    defensive: '수비형',
    'all-round': '올라운드',
    'serve-volley': '서브-발리',
    baseline: '베이스라인'
  };

  return `${levelNames[input.currentLevel]} ${styleNames[input.playStyle]} 맞춤 훈련 계획`;
}

function calculateDuration(input: TrainingPlanInput): number {
  const baseDuration = {
    beginner: 12,
    intermediate: 8,
    advanced: 6,
    expert: 4
  };
  
  const timeAdjustment = input.availableTime.weekly < 3 ? 1.5 : 1;
  return Math.ceil(baseDuration[input.currentLevel] * timeAdjustment);
}

function generateWeeklySchedule(input: TrainingPlanInput, duration: number): WeeklySchedule[] {
  const schedules: WeeklySchedule[] = [];
  
  for (let week = 1; week <= duration; week++) {
    const sessions = generateSessionsForWeek(input, week);
    const focus = getWeeklyFocus(input, week);
    const goals = getWeeklyGoals(input, week);
    
    schedules.push({
      week,
      sessions,
      focus,
      goals
    });
  }
  
  return schedules;
}

function generateSessionsForWeek(input: TrainingPlanInput, week: number): TrainingSession[] {
  const sessions: TrainingSession[] = [];
  const weeklyHours = input.availableTime.weekly;
  const sessionLength = input.availableTime.sessionLength;
  const sessionsPerWeek = Math.floor(weeklyHours / sessionLength);
  
  const sessionTypes = getSessionTypes(input, week);
  
  for (let i = 0; i < sessionsPerWeek; i++) {
    const sessionType = sessionTypes[i % sessionTypes.length];
    const session = generateSession(input, sessionType, week, i + 1);
    sessions.push(session);
  }
  
  return sessions;
}

function getSessionTypes(input: TrainingPlanInput, week: number): string[] {
  const baseTypes = ['technical', 'tactical', 'physical'];
  
  if (week % 2 === 0) {
    baseTypes.push('match');
  }
  
  if (week % 3 === 0) {
    baseTypes.push('recovery');
  }
  
  return baseTypes;
}

function generateSession(input: TrainingPlanInput, type: string, week: number, sessionNumber: number): TrainingSession {
  const sessionTemplates = {
    technical: {
      title: '기술 훈련',
      description: '기본 스트로크와 서브 기술을 집중적으로 연습합니다.',
      intensity: 'medium' as const,
      exercises: generateTechnicalExercises(input, week)
    },
    tactical: {
      title: '전술 훈련',
      description: '경기 상황에 맞는 전술과 포지셔닝을 연습합니다.',
      intensity: 'high' as const,
      exercises: generateTacticalExercises(input, week)
    },
    physical: {
      title: '체력 훈련',
      description: '테니스에 필요한 체력과 근력을 향상시킵니다.',
      intensity: 'high' as const,
      exercises: generatePhysicalExercises(input, week)
    },
    match: {
      title: '경기 연습',
      description: '실전 경기를 통한 경험과 적응력을 기릅니다.',
      intensity: 'high' as const,
      exercises: generateMatchExercises(input, week)
    },
    recovery: {
      title: '회복 훈련',
      description: '몸의 회복과 유연성을 위한 가벼운 훈련입니다.',
      intensity: 'low' as const,
      exercises: generateRecoveryExercises(input, week)
    }
  };
  
  const template = sessionTemplates[type as keyof typeof sessionTemplates];
  
  return {
    day: getDayOfWeek(sessionNumber),
    duration: input.availableTime.sessionLength,
    type: type as any,
    title: template.title,
    description: template.description,
    exercises: template.exercises,
    intensity: template.intensity
  };
}

function generateTechnicalExercises(input: TrainingPlanInput, week: number): Exercise[] {
  const exercises: Exercise[] = [];
  
  if (input.currentLevel === 'beginner') {
    exercises.push({
      name: '포핸드 기본 스트로크',
      duration: 20,
      description: '기본적인 포핸드 스트로크 동작을 연습합니다.',
      tips: ['라켓을 먼저 준비하세요', '몸의 회전을 활용하세요', '끝까지 팔로스루를 하세요']
    });
    
    exercises.push({
      name: '백핸드 기본 스트로크',
      duration: 20,
      description: '기본적인 백핸드 스트로크 동작을 연습합니다.',
      tips: ['양손으로 라켓을 잡으세요', '몸의 중심을 유지하세요', '안정적인 스윙을 하세요']
    });
  } else {
    exercises.push({
      name: '고급 포핸드 스트로크',
      duration: 25,
      description: '다양한 각도와 스핀의 포핸드 스트로크를 연습합니다.',
      tips: ['상체 회전을 극대화하세요', '다양한 각도로 연습하세요', '스핀과 파워를 조절하세요']
    });
  }
  
  exercises.push({
    name: '서브 연습',
    duration: 15,
    description: '일관성 있는 서브를 연습합니다.',
    tips: ['토스를 일정하게 하세요', '리듬을 유지하세요', '타겟을 정확히 노리세요']
  });
  
  return exercises;
}

function generateTacticalExercises(input: TrainingPlanInput, week: number): Exercise[] {
  const exercises: Exercise[] = [];
  
  exercises.push({
    name: '포지셔닝 연습',
    duration: 20,
    description: '코트에서의 최적 포지션을 연습합니다.',
    tips: ['중앙에서 시작하세요', '상대의 움직임을 예측하세요', '빠르게 포지션을 조정하세요']
  });
  
  if (input.playStyle === 'aggressive') {
    exercises.push({
      name: '공격적 샷 연습',
      duration: 25,
      description: '공격적인 샷 선택과 실행을 연습합니다.',
      tips: ['기회를 놓치지 마세요', '위너를 노리세요', '리스크를 감수하세요']
    });
  }
  
  return exercises;
}

function generatePhysicalExercises(input: TrainingPlanInput, week: number): Exercise[] {
  const exercises: Exercise[] = [];
  
  exercises.push({
    name: '코트 이동 연습',
    duration: 15,
    description: '코트에서의 빠른 이동과 방향 전환을 연습합니다.',
    tips: ['발끝으로 움직이세요', '균형을 유지하세요', '빠르게 방향을 바꾸세요']
  });
  
  exercises.push({
    name: '지구력 훈련',
    duration: 20,
    description: '장시간 경기를 위한 지구력을 향상시킵니다.',
    tips: ['일정한 페이스를 유지하세요', '호흡을 조절하세요', '점진적으로 강도를 높이세요']
  });
  
  return exercises;
}

function generateMatchExercises(input: TrainingPlanInput, week: number): Exercise[] {
  const exercises: Exercise[] = [];
  
  exercises.push({
    name: '실전 경기',
    duration: input.availableTime.sessionLength,
    description: '실제 경기 상황에서의 경험을 쌓습니다.',
    tips: ['집중력을 유지하세요', '전략을 실행하세요', '실수를 두려워하지 마세요']
  });
  
  return exercises;
}

function generateRecoveryExercises(input: TrainingPlanInput, week: number): Exercise[] {
  const exercises: Exercise[] = [];
  
  exercises.push({
    name: '스트레칭',
    duration: 20,
    description: '근육의 유연성을 향상시키고 부상을 예방합니다.',
    tips: ['천천히 스트레칭하세요', '통증이 느껴지면 멈추세요', '규칙적으로 하세요']
  });
  
  exercises.push({
    name: '가벼운 라켓 연습',
    duration: 15,
    description: '가벼운 볼을 이용한 기본 동작 연습입니다.',
    tips: ['힘을 빼고 연습하세요', '기본 동작에 집중하세요', '편안하게 하세요']
  });
  
  return exercises;
}

function getDayOfWeek(sessionNumber: number): string {
  const days = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'];
  return days[(sessionNumber - 1) % 7];
}

function getWeeklyFocus(input: TrainingPlanInput, week: number): string {
  const focuses = [
    '기본기 정교화',
    '전술 이해',
    '체력 향상',
    '경기 경험',
    '멘탈 강화',
    '기술 통합',
    '실전 적용',
    '성과 평가'
  ];
  
  return focuses[(week - 1) % focuses.length];
}

function getWeeklyGoals(input: TrainingPlanInput, week: number): string[] {
  const goals = [
    '기본 동작의 정확성 향상',
    '일관성 있는 스트로크 구축',
    '전술적 사고 개발',
    '체력과 지구력 향상',
    '경기 경험 축적',
    '멘탈 강화',
    '기술 통합',
    '목표 달성'
  ];
  
  return [goals[(week - 1) % goals.length]];
}

function generateFocusAreas(input: TrainingPlanInput): FocusArea[] {
  const areas: FocusArea[] = [];
  
  areas.push({
    area: '기본 스트로크',
    priority: 'high',
    exercises: ['포핸드', '백핸드', '서브'],
    timeline: '1-4주'
  });
  
  areas.push({
    area: '전술 이해',
    priority: 'medium',
    exercises: ['포지셔닝', '샷 선택', '경기 운영'],
    timeline: '5-8주'
  });
  
  areas.push({
    area: '체력 향상',
    priority: 'medium',
    exercises: ['지구력', '스피드', '민첩성'],
    timeline: '전 기간'
  });
  
  return areas;
}

function generateMilestones(input: TrainingPlanInput, duration: number): Milestone[] {
  const milestones: Milestone[] = [];
  
  milestones.push({
    week: Math.ceil(duration * 0.25),
    title: '1단계 완료',
    description: '기본 기술이 안정화되었습니다.',
    criteria: ['일관된 스트로크', '기본 서브 성공', '기본 포지셔닝']
  });
  
  milestones.push({
    week: Math.ceil(duration * 0.5),
    title: '2단계 완료',
    description: '전술적 이해가 향상되었습니다.',
    criteria: ['전술적 샷 선택', '포지셔닝 개선', '경기 운영 능력']
  });
  
  milestones.push({
    week: Math.ceil(duration * 0.75),
    title: '3단계 완료',
    description: '체력과 기술이 통합되었습니다.',
    criteria: ['체력 향상', '기술 통합', '멘탈 강화']
  });
  
  milestones.push({
    week: duration,
    title: '최종 목표 달성',
    description: '설정한 목표를 달성했습니다.',
    criteria: ['목표 달성', '전반적 향상', '다음 단계 준비']
  });
  
  return milestones;
}

function generateRecommendations(input: TrainingPlanInput) {
  return {
    technical: [
      '기본 동작의 정확성을 우선시하세요',
      '일관성 있는 연습을 하세요',
      '점진적으로 난이도를 높이세요'
    ],
    tactical: [
      '경기 상황을 분석하는 습관을 기르세요',
      '다양한 전술을 시도해보세요',
      '상대의 약점을 파악하세요'
    ],
    physical: [
      '규칙적인 체력 훈련을 하세요',
      '충분한 휴식을 취하세요',
      '부상 예방에 신경 쓰세요'
    ],
    mental: [
      '긍정적인 마인드를 유지하세요',
      '실수를 두려워하지 마세요',
      '집중력을 향상시키세요'
    ]
  };
}

function generateEquipmentList(input: TrainingPlanInput): string[] {
  const equipment = ['테니스 라켓', '테니스 공', '테니스화'];
  
  if (input.currentLevel !== 'beginner') {
    equipment.push('스트링 텐션 측정기');
  }
  
  if (input.focusAreas.includes('체력')) {
    equipment.push('체력 훈련 도구');
  }
  
  return equipment;
}

function generateNextSteps(input: TrainingPlanInput): string[] {
  return [
    '훈련 계획을 일정에 맞춰 실행하세요',
    '정기적으로 진도를 점검하세요',
    '필요시 계획을 조정하세요',
    '다른 유틸리티도 활용해보세요'
  ];
}
