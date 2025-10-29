export interface InjuryRiskInput {
  age: number;
  gender: 'male' | 'female';
  playingFrequency: 'daily' | 'weekly3' | 'weekly2' | 'weekly1' | 'monthly';
  playingDuration: 'under1h' | '1-2h' | '2-3h' | 'over3h';
  experience: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  previousInjuries: string[];
  warmupRoutine: 'none' | 'basic' | 'comprehensive';
  coolDownRoutine: 'none' | 'basic' | 'comprehensive';
  equipmentAge: 'new' | '1year' | '2years' | 'over3years';
  courtType: 'hard' | 'clay' | 'grass' | 'mixed';
  weatherCondition: 'indoor' | 'outdoor';
}

export interface InjuryRiskResult {
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'very-high';
  riskFactors: string[];
  preventionTips: string[];
  equipmentRecommendations: string[];
  trainingAdjustments: string[];
  warningSigns: string[];
}

export function calculateInjuryRisk(input: InjuryRiskInput): InjuryRiskResult {
  let riskScore = 0;
  const riskFactors: string[] = [];
  const preventionTips: string[] = [];
  const equipmentRecommendations: string[] = [];
  const trainingAdjustments: string[] = [];
  const warningSigns: string[] = [];

  // 나이 기반 위험도
  if (input.age < 18) {
    riskScore += 10;
    riskFactors.push('성장기 관절 부담');
  } else if (input.age >= 40) {
    riskScore += 25;
    riskFactors.push('중년기 관절 노화');
  } else if (input.age >= 50) {
    riskScore += 35;
    riskFactors.push('고령기 관절 취약성');
  }

  // 성별 기반 위험도
  if (input.gender === 'female') {
    riskScore += 15;
    riskFactors.push('여성 호르몬 변화로 인한 관절 취약성');
  }

  // 플레이 빈도 기반 위험도
  switch (input.playingFrequency) {
    case 'daily':
      riskScore += 30;
      riskFactors.push('과도한 플레이 빈도');
      preventionTips.push('주 3-4회로 플레이 빈도 조절');
      break;
    case 'weekly3':
      riskScore += 15;
      break;
    case 'weekly2':
      riskScore += 5;
      break;
    case 'weekly1':
      riskScore += 0;
      break;
    case 'monthly':
      riskScore += 10;
      riskFactors.push('낮은 플레이 빈도로 인한 근력 부족');
      preventionTips.push('정기적인 근력 운동 추가');
      break;
  }

  // 플레이 시간 기반 위험도
  switch (input.playingDuration) {
    case 'under1h':
      riskScore += 5;
      break;
    case '1-2h':
      riskScore += 0;
      break;
    case '2-3h':
      riskScore += 15;
      riskFactors.push('장시간 플레이로 인한 피로 누적');
      preventionTips.push('2시간마다 휴식 시간 확보');
      break;
    case 'over3h':
      riskScore += 25;
      riskFactors.push('과도한 플레이 시간');
      preventionTips.push('플레이 시간을 2시간 이내로 제한');
      break;
  }

  // 경험 수준 기반 위험도
  switch (input.experience) {
    case 'beginner':
      riskScore += 20;
      riskFactors.push('초보자 기술 부족');
      preventionTips.push('기본 기술 습득 후 본격적인 플레이');
      trainingAdjustments.push('기본 스트로크 연습 우선');
      break;
    case 'intermediate':
      riskScore += 10;
      break;
    case 'advanced':
      riskScore += 5;
      break;
    case 'expert':
      riskScore += 15;
      riskFactors.push('고강도 플레이로 인한 과사용');
      preventionTips.push('충분한 회복 시간 확보');
      break;
  }

  // 이전 부상 이력 기반 위험도
  if (input.previousInjuries.includes('tennis-elbow')) {
    riskScore += 25;
    riskFactors.push('테니스 엘보우 이력');
    preventionTips.push('스트링 텐션 조정 및 그립 크기 확인');
    equipmentRecommendations.push('테니스 엘보우 방지용 스트링');
  }
  if (input.previousInjuries.includes('shoulder')) {
    riskScore += 20;
    riskFactors.push('어깨 부상 이력');
    preventionTips.push('어깨 근력 강화 운동');
    trainingAdjustments.push('서브 동작 점진적 강화');
  }
  if (input.previousInjuries.includes('knee')) {
    riskScore += 20;
    riskFactors.push('무릎 부상 이력');
    preventionTips.push('무릎 보호대 착용 고려');
    equipmentRecommendations.push('무릎 보호대');
  }
  if (input.previousInjuries.includes('ankle')) {
    riskScore += 15;
    riskFactors.push('발목 부상 이력');
    preventionTips.push('발목 안정성 운동');
    equipmentRecommendations.push('발목 보호대');
  }

  // 워밍업 루틴 기반 위험도
  switch (input.warmupRoutine) {
    case 'none':
      riskScore += 20;
      riskFactors.push('워밍업 부족');
      preventionTips.push('15분 이상 워밍업 필수');
      trainingAdjustments.push('동적 스트레칭 포함 워밍업');
      break;
    case 'basic':
      riskScore += 10;
      break;
    case 'comprehensive':
      riskScore += 0;
      break;
  }

  // 쿨다운 루틴 기반 위험도
  switch (input.coolDownRoutine) {
    case 'none':
      riskScore += 15;
      riskFactors.push('쿨다운 부족');
      preventionTips.push('10분 이상 쿨다운 스트레칭');
      trainingAdjustments.push('정적 스트레칭 포함 쿨다운');
      break;
    case 'basic':
      riskScore += 5;
      break;
    case 'comprehensive':
      riskScore += 0;
      break;
  }

  // 장비 노화 기반 위험도
  switch (input.equipmentAge) {
    case 'new':
      riskScore += 0;
      break;
    case '1year':
      riskScore += 5;
      break;
    case '2years':
      riskScore += 10;
      riskFactors.push('장비 노화');
      equipmentRecommendations.push('라켓 스트링 교체');
      break;
    case 'over3years':
      riskScore += 20;
      riskFactors.push('심각한 장비 노화');
      equipmentRecommendations.push('라켓 및 스트링 교체 권장');
      break;
  }

  // 코트 타입 기반 위험도
  switch (input.courtType) {
    case 'hard':
      riskScore += 15;
      riskFactors.push('하드코트 충격');
      preventionTips.push('충격 흡수 신발 착용');
      equipmentRecommendations.push('충격 흡수 신발');
      break;
    case 'clay':
      riskScore += 5;
      break;
    case 'grass':
      riskScore += 10;
      riskFactors.push('그래스코트 미끄러움');
      preventionTips.push('그래스 전용 신발 착용');
      break;
    case 'mixed':
      riskScore += 10;
      break;
  }

  // 날씨 조건 기반 위험도
  if (input.weatherCondition === 'outdoor') {
    riskScore += 10;
    riskFactors.push('야외 환경 변화');
    preventionTips.push('날씨에 따른 플레이 강도 조절');
  }

  // 위험도 레벨 결정
  let riskLevel: 'low' | 'medium' | 'high' | 'very-high';
  if (riskScore <= 30) {
    riskLevel = 'low';
  } else if (riskScore <= 60) {
    riskLevel = 'medium';
  } else if (riskScore <= 90) {
    riskLevel = 'high';
  } else {
    riskLevel = 'very-high';
  }

  // 경고 신호 추가
  if (riskLevel === 'high' || riskLevel === 'very-high') {
    warningSigns.push('플레이 중 통증 지속');
    warningSigns.push('아침에 관절 뻣뻣함');
    warningSigns.push('플레이 후 회복 시간 증가');
    warningSigns.push('기술적 성능 저하');
  }

  return {
    riskScore,
    riskLevel,
    riskFactors,
    preventionTips,
    equipmentRecommendations,
    trainingAdjustments,
    warningSigns
  };
}

export function getRiskLevelInfo(level: string) {
  const levelInfo = {
    'low': { 
      label: '낮음', 
      color: 'bg-green-100 text-green-800',
      description: '안전한 플레이 환경입니다. 현재 루틴을 유지하세요.'
    },
    'medium': { 
      label: '보통', 
      color: 'bg-yellow-100 text-yellow-800',
      description: '일부 주의사항이 있습니다. 예방 조치를 취하세요.'
    },
    'high': { 
      label: '높음', 
      color: 'bg-orange-100 text-orange-800',
      description: '부상 위험이 높습니다. 즉시 조치가 필요합니다.'
    },
    'very-high': { 
      label: '매우 높음', 
      color: 'bg-red-100 text-red-800',
      description: '심각한 부상 위험입니다. 전문가 상담을 권장합니다.'
    }
  };
  
  return levelInfo[level as keyof typeof levelInfo] || levelInfo.medium;
}
