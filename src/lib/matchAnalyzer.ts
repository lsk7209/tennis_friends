export interface MatchAnalysisInput {
  matchType: 'singles' | 'doubles';
  duration: number; // 분
  sets: number;
  games: number[];
  points: {
    won: number;
    lost: number;
  };
  serves: {
    firstServeIn: number;
    firstServeTotal: number;
    secondServeIn: number;
    secondServeTotal: number;
    aces: number;
    doubleFaults: number;
  };
  returns: {
    firstServeReturnWon: number;
    firstServeReturnTotal: number;
    secondServeReturnWon: number;
    secondServeReturnTotal: number;
  };
  winners: {
    forehand: number;
    backhand: number;
    volley: number;
    overhead: number;
  };
  errors: {
    forehand: number;
    backhand: number;
    volley: number;
    overhead: number;
  };
  netPlay: {
    approaches: number;
    volleysWon: number;
    volleysLost: number;
  };
  mental: {
    breakPointsWon: number;
    breakPointsFaced: number;
    tiebreakWon: number;
    tiebreakLost: number;
  };
}

export interface MatchAnalysisResult {
  overallScore: number;
  grade: 'A' | 'B' | 'C' | 'D' | 'F';
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
  statistics: {
    servePercentage: number;
    returnPercentage: number;
    winnerErrorRatio: number;
    netPlaySuccess: number;
    breakPointConversion: number;
  };
  recommendations: {
    technical: string[];
    tactical: string[];
    mental: string[];
    physical: string[];
  };
  nextMatchGoals: string[];
}

export function analyzeMatch(input: MatchAnalysisInput): MatchAnalysisResult {
  const stats = calculateStatistics(input);
  const score = calculateOverallScore(stats);
  const grade = getGrade(score);
  
  return {
    overallScore: score,
    grade,
    strengths: getStrengths(stats),
    weaknesses: getWeaknesses(stats),
    improvements: getImprovements(stats),
    statistics: stats,
    recommendations: getRecommendations(stats),
    nextMatchGoals: getNextMatchGoals(stats)
  };
}

function calculateStatistics(input: MatchAnalysisInput) {
  const servePercentage = input.serves.firstServeTotal > 0 
    ? (input.serves.firstServeIn / input.serves.firstServeTotal) * 100 
    : 0;
    
  const returnPercentage = (input.returns.firstServeReturnTotal + input.returns.secondServeReturnTotal) > 0
    ? ((input.returns.firstServeReturnWon + input.returns.secondServeReturnWon) / 
       (input.returns.firstServeReturnTotal + input.returns.secondServeReturnTotal)) * 100
    : 0;
    
  const totalWinners = Object.values(input.winners).reduce((sum, val) => sum + val, 0);
  const totalErrors = Object.values(input.errors).reduce((sum, val) => sum + val, 0);
  const winnerErrorRatio = totalErrors > 0 ? totalWinners / totalErrors : totalWinners;
  
  const netPlaySuccess = (input.netPlay.volleysWon + input.netPlay.volleysLost) > 0
    ? (input.netPlay.volleysWon / (input.netPlay.volleysWon + input.netPlay.volleysLost)) * 100
    : 0;
    
  const breakPointConversion = input.mental.breakPointsFaced > 0
    ? (input.mental.breakPointsWon / input.mental.breakPointsFaced) * 100
    : 0;

  return {
    servePercentage,
    returnPercentage,
    winnerErrorRatio,
    netPlaySuccess,
    breakPointConversion
  };
}

function calculateOverallScore(stats: any): number {
  let score = 0;
  
  // 서브 성공률 (25점 만점)
  if (stats.servePercentage >= 70) score += 25;
  else if (stats.servePercentage >= 60) score += 20;
  else if (stats.servePercentage >= 50) score += 15;
  else if (stats.servePercentage >= 40) score += 10;
  else score += 5;
  
  // 리턴 성공률 (25점 만점)
  if (stats.returnPercentage >= 50) score += 25;
  else if (stats.returnPercentage >= 40) score += 20;
  else if (stats.returnPercentage >= 30) score += 15;
  else if (stats.returnPercentage >= 20) score += 10;
  else score += 5;
  
  // 위너/에러 비율 (25점 만점)
  if (stats.winnerErrorRatio >= 1.5) score += 25;
  else if (stats.winnerErrorRatio >= 1.0) score += 20;
  else if (stats.winnerErrorRatio >= 0.7) score += 15;
  else if (stats.winnerErrorRatio >= 0.5) score += 10;
  else score += 5;
  
  // 네트 플레이 성공률 (15점 만점)
  if (stats.netPlaySuccess >= 80) score += 15;
  else if (stats.netPlaySuccess >= 70) score += 12;
  else if (stats.netPlaySuccess >= 60) score += 9;
  else if (stats.netPlaySuccess >= 50) score += 6;
  else score += 3;
  
  // 브레이크 포인트 컨버전 (10점 만점)
  if (stats.breakPointConversion >= 60) score += 10;
  else if (stats.breakPointConversion >= 50) score += 8;
  else if (stats.breakPointConversion >= 40) score += 6;
  else if (stats.breakPointConversion >= 30) score += 4;
  else score += 2;
  
  return Math.min(score, 100);
}

function getGrade(score: number): 'A' | 'B' | 'C' | 'D' | 'F' {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

function getStrengths(stats: any): string[] {
  const strengths: string[] = [];
  
  if (stats.servePercentage >= 65) {
    strengths.push('안정적인 서브 성공률');
  }
  if (stats.returnPercentage >= 45) {
    strengths.push('효율적인 리턴 게임');
  }
  if (stats.winnerErrorRatio >= 1.2) {
    strengths.push('공격적인 샷 선택');
  }
  if (stats.netPlaySuccess >= 75) {
    strengths.push('우수한 네트 플레이');
  }
  if (stats.breakPointConversion >= 55) {
    strengths.push('강력한 브레이크 포인트 활용');
  }
  
  return strengths.length > 0 ? strengths : ['기본기가 탄탄함'];
}

function getWeaknesses(stats: any): string[] {
  const weaknesses: string[] = [];
  
  if (stats.servePercentage < 55) {
    weaknesses.push('서브 성공률 개선 필요');
  }
  if (stats.returnPercentage < 35) {
    weaknesses.push('리턴 게임 강화 필요');
  }
  if (stats.winnerErrorRatio < 0.8) {
    weaknesses.push('에러 감소 및 샷 선택 개선');
  }
  if (stats.netPlaySuccess < 60) {
    weaknesses.push('네트 플레이 정확도 향상');
  }
  if (stats.breakPointConversion < 40) {
    weaknesses.push('중요한 포인트 집중력 강화');
  }
  
  return weaknesses.length > 0 ? weaknesses : ['전반적인 안정성 향상'];
}

function getImprovements(stats: any): string[] {
  const improvements: string[] = [];
  
  if (stats.servePercentage < 60) {
    improvements.push('서브 연습: 일관성과 정확도 향상');
  }
  if (stats.returnPercentage < 40) {
    improvements.push('리턴 연습: 다양한 각도와 깊이 연습');
  }
  if (stats.winnerErrorRatio < 1.0) {
    improvements.push('기본기 연습: 안정적인 스트로크 구축');
  }
  if (stats.netPlaySuccess < 70) {
    improvements.push('네트 연습: 발리와 스매시 정확도 향상');
  }
  if (stats.breakPointConversion < 50) {
    improvements.push('멘탈 연습: 압박 상황에서의 집중력 강화');
  }
  
  return improvements.length > 0 ? improvements : ['전반적인 기술 향상'];
}

function getRecommendations(stats: any) {
  return {
    technical: getTechnicalRecommendations(stats),
    tactical: getTacticalRecommendations(stats),
    mental: getMentalRecommendations(stats),
    physical: getPhysicalRecommendations(stats)
  };
}

function getTechnicalRecommendations(stats: any): string[] {
  const recommendations: string[] = [];
  
  if (stats.servePercentage < 60) {
    recommendations.push('서브 토스 일관성 연습');
    recommendations.push('서브 그립과 스윙 패스 개선');
  }
  if (stats.returnPercentage < 40) {
    recommendations.push('리턴 포지션과 타이밍 연습');
    recommendations.push('다양한 리턴 각도 연습');
  }
  if (stats.winnerErrorRatio < 1.0) {
    recommendations.push('기본 스트로크 정확도 향상');
    recommendations.push('샷 선택과 타이밍 개선');
  }
  
  return recommendations.length > 0 ? recommendations : ['기본기 정교화'];
}

function getTacticalRecommendations(stats: any): string[] {
  const recommendations: string[] = [];
  
  if (stats.netPlaySuccess < 70) {
    recommendations.push('네트 어프로치 타이밍 개선');
    recommendations.push('상대 약점 공략 전략 수립');
  }
  if (stats.breakPointConversion < 50) {
    recommendations.push('중요한 포인트에서의 전략적 사고');
    recommendations.push('상대 패턴 분석 및 대응');
  }
  
  return recommendations.length > 0 ? recommendations : ['전술적 사고 개발'];
}

function getMentalRecommendations(stats: any): string[] {
  const recommendations: string[] = [];
  
  if (stats.breakPointConversion < 50) {
    recommendations.push('압박 상황에서의 집중력 훈련');
    recommendations.push('긍정적 셀프토크 연습');
  }
  
  recommendations.push('경기 중 감정 관리');
  recommendations.push('일관된 플레이 유지');
  
  return recommendations;
}

function getPhysicalRecommendations(stats: any): string[] {
  return [
    '지구력 향상을 위한 유산소 운동',
    '코트 커버리지 향상을 위한 민첩성 훈련',
    '서브 파워 향상을 위한 근력 운동',
    '부상 예방을 위한 유연성 운동'
  ];
}

function getNextMatchGoals(stats: any): string[] {
  const goals: string[] = [];
  
  if (stats.servePercentage < 60) {
    goals.push('서브 성공률 60% 이상 달성');
  }
  if (stats.returnPercentage < 40) {
    goals.push('리턴 성공률 40% 이상 달성');
  }
  if (stats.winnerErrorRatio < 1.0) {
    goals.push('위너/에러 비율 1.0 이상 달성');
  }
  if (stats.netPlaySuccess < 70) {
    goals.push('네트 플레이 성공률 70% 이상 달성');
  }
  if (stats.breakPointConversion < 50) {
    goals.push('브레이크 포인트 컨버전 50% 이상 달성');
  }
  
  return goals.length > 0 ? goals : ['전반적인 성능 향상'];
}
