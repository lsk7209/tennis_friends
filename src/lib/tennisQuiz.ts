export interface Question {
  id: string;
  q: string;
  options: string[];
  a: number;
  exp: string;
  cat: string;
  diff: 1 | 2 | 3;
}

export interface QuizAnswer {
  id: string;
  correct: boolean;
  cat: string;
  diff: number;
  selectedAnswer: number;
  timeSpent: number;
}

export interface QuizResult {
  score: number;
  grade: string;
  wrongByCat: Record<string, number>;
  timeSpent: number;
  answers: QuizAnswer[];
}

export const QUESTION_BANK: Question[] = [
  { 
    id: "Q1", 
    cat: "Serve", 
    diff: 1,
    q: "서브 토스를 잡고 다시 던졌다. 반칙인가?",
    options: ["반칙(더블 폴트)", "반칙 아님(재토스 가능)", "경고 후 1포인트 감점", "리시버 재량"],
    a: 1, 
    exp: "타격 시도가 없다면 토스를 잡아 재시도 가능. 폴트 아님." 
  },
  { 
    id: "Q2", 
    cat: "Footfault", 
    diff: 1,
    q: "서브 시 베이스라인을 밟았다.",
    options: ["풋폴트", "문제없음", "경고", "서버 포인트"],
    a: 0, 
    exp: "베이스라인 혹은 연장선 접촉은 풋폴트." 
  },
  { 
    id: "Q3", 
    cat: "Scoring", 
    diff: 1,
    q: "단식에서 바깥쪽 사이드라인(복식 라인)은",
    options: ["인", "아웃", "첫 세트만 인", "듀스코트만 인"],
    a: 1, 
    exp: "단식은 안쪽 사이드라인 사용. 바깥 라인은 아웃." 
  },
  { 
    id: "Q4", 
    cat: "Let/Net", 
    diff: 1,
    q: "리턴한 공이 네트를 맞고 상대 코트로 넘어갔다.",
    options: ["인", "아웃", "렛", "두 번 바운스 필요"],
    a: 0, 
    exp: "넘어가서 인코트에 떨어지면 인." 
  },
  { 
    id: "Q5", 
    cat: "Doubles", 
    diff: 2,
    q: "복식 리시버 파트너가 공을 맞혔다.",
    options: ["인플레이 계속", "아웃", "렛", "서버 포인트"],
    a: 3, 
    exp: "리시버가 치지 못하고 파트너가 맞히면 서버 포인트." 
  },
  { 
    id: "Q6", 
    cat: "Tiebreak", 
    diff: 2,
    q: "타이브레이크에서 콜 방식은?",
    options: ["포인트 합계만", "서버 점수만", "서버-리시버 순서 강조", "게임 스코어와 함께"],
    a: 2, 
    exp: "서버-리시버 순서가 중요. 올바른 콜 관행을 따른다." 
  },
  { 
    id: "Q7", 
    cat: "Let/Net", 
    diff: 2,
    q: "공이 네트포스트를 맞고 상대 코트로 들어갔다.",
    options: ["아웃", "인", "무조건 렛", "서버만 인"],
    a: 1, 
    exp: "네트포스트 등 구조물은 인플레이. 상대 코트로 넘어가면 인." 
  },
  { 
    id: "Q8", 
    cat: "Hindrance", 
    diff: 2,
    q: "리시버가 준비되지 않았음을 손들어 표시했다.",
    options: ["서버 폴트", "렛(리플레이)", "리시버 포인트", "경고"],
    a: 1, 
    exp: "정당한 준비 불가 시 렛 가능. 반복 남용은 매너 이슈." 
  },
  { 
    id: "Q9", 
    cat: "BallInPlay", 
    diff: 2,
    q: "코트 외벽(펜스 등)을 맞고 다시 코트로 들어온 볼",
    options: ["인", "아웃", "렛", "대회 규정 따름"],
    a: 1, 
    exp: "코트 경계 밖 오브젝트 접촉은 아웃." 
  },
  { 
    id: "Q10", 
    cat: "Serve", 
    diff: 2,
    q: "더블스에서 리시빙 포지션 변경 가능 시점은?",
    options: ["세트 중 언제든", "게임 진행 중 언제든", "포인트 중에도 가능", "게임 교대 시 가능"],
    a: 3, 
    exp: "게임 교대 때 리시빙 포지션 변경 가능." 
  },
  { 
    id: "Q11", 
    cat: "Return", 
    diff: 2,
    q: "스핀 서브가 크게 휘어 들어올 때 리시버의 올바른 대응은?",
    options: ["미리 움직여 라켓을 크게 휘두른다", "짧은 백스윙과 안정된 면으로 블록", "베이스라인 뒤로 멀리 물러난다", "포핸드만 활용한다"],
    a: 1, 
    exp: "리턴은 짧고 단단한 라켓면으로 블록이 안전." 
  },
  { 
    id: "Q12", 
    cat: "Hindrance", 
    diff: 3,
    q: "상대가 샷 직후 크게 소리를 질러 집중을 방해했다.",
    options: ["인정", "실격", "방해(Hindrance)로 렛 또는 포인트 박탈", "재경기 요청만 가능"],
    a: 2, 
    exp: "고의적 방해는 기준에 따라 포인트 박탈 가능." 
  },
  { 
    id: "Q13", 
    cat: "Scoring", 
    diff: 3,
    q: "'노-렛 서브' 규정이 적용되는 이벤트에서 넷터치 서브가 인코트에 들어왔다.",
    options: ["서버 포인트", "렉 선언 후 재서브", "리시버 선택", "대회별 규정에 따름"],
    a: 0, 
    exp: "노-렛이면 인코트에 들어온 넷터치 서브는 그대로 진행(서버 포인트)." 
  },
  { 
    id: "Q14", 
    cat: "BallInPlay", 
    diff: 3,
    q: "라켓이 손에서 미끄러져 네트를 넘어 상대 코트에 들어갔다(볼은 인코트로 들어감).",
    options: ["인", "아웃", "방해로 포인트 상실", "렛"],
    a: 2, 
    exp: "장비가 상대 코트에 침범하면 방해로 포인트 상실." 
  },
  { 
    id: "Q15", 
    cat: "Footfault", 
    diff: 2,
    q: "베이스라인의 연장선을 가로질러 옆으로 나가 있었다.",
    options: ["풋폴트 아님", "풋폴트", "경고", "상대 선택"],
    a: 1, 
    exp: "연장선 침범도 풋폴트." 
  },
  { 
    id: "Q16", 
    cat: "Tiebreak", 
    diff: 3,
    q: "슈퍼 타이브레이크(매치 타이브레이크) 기본 포인트 수는?",
    options: ["7포인트 선승", "10포인트 선승(2점차)", "12포인트 선승", "대회 재량"],
    a: 1, 
    exp: "일반적으로 10포인트 선승, 2점차. 대회 룰 확인 필요." 
  },
  { 
    id: "Q17", 
    cat: "Doubles", 
    diff: 2,
    q: "복식에서 네트 근처 파트너가 리턴 전에 손을 들며 플레이 방식을 신호했다.",
    options: ["규칙 위반", "허용(전술 신호)", "렛", "경고"],
    a: 1, 
    exp: "비언어적 전술 신호는 허용." 
  },
  { 
    id: "Q18", 
    cat: "Let/Net", 
    diff: 2,
    q: "인플레이 중 공이 네트 스트랩을 스치고 들어갔다.",
    options: ["인", "아웃", "렛", "서버만 인"],
    a: 0, 
    exp: "인플레이 구조물 접촉 후 상대코트 진입이면 인." 
  },
  { 
    id: "Q19", 
    cat: "Serve", 
    diff: 3,
    q: "서브 동작 중 공을 떨어뜨려 바닥에 바운드된 후 타격했다.",
    options: ["허용", "폴트", "렛", "재서브"],
    a: 0, 
    exp: "임팩트가 규정 위치에서 이뤄지면 허용." 
  },
  { 
    id: "Q20", 
    cat: "Hindrance", 
    diff: 2,
    q: "옆 코트 공이 들어와 플레이를 중단했다.",
    options: ["계속 진행", "렛 선언 후 리플레이", "즉시 포인트 종료, 서버 포인트", "경고"],
    a: 1, 
    exp: "외부 방해는 렛으로 리플레이." 
  },
  { 
    id: "Q21", 
    cat: "Scoring", 
    diff: 2,
    q: "게임 스코어 고지에서 서버/리시버가 혼동되었다.",
    options: ["즉시 포인트 무효", "심판만 정정 가능", "플레이어 합의로 정정", "그대로 진행"],
    a: 2, 
    exp: "합의로 정정 가능. 분쟁 시 감독 판단." 
  },
  { 
    id: "Q22", 
    cat: "Doubles", 
    diff: 3,
    q: "복식에서 리시버가 의도적으로 공을 잡아 플레이를 중단했다.",
    options: ["리시빙 팀 포인트 상실", "렛", "서버 포인트", "경고"],
    a: 2, 
    exp: "인플레이 중 공을 잡으면 서버 포인트." 
  },
  { 
    id: "Q23", 
    cat: "Return", 
    diff: 2,
    q: "리턴 시 베이스라인 바깥(코트 뒤쪽)에서 시작해도 되나요?",
    options: ["불가", "가능", "첫 서브만 가능", "복식만 가능"],
    a: 1, 
    exp: "위치 제한 없음. 다만 풋폴트/시간 지연 주의." 
  },
  { 
    id: "Q24", 
    cat: "BallInPlay", 
    diff: 3,
    q: "라켓에 공이 두 번 맞은 듯 보였다(더블 히트 의심). 고의는 아님.",
    options: ["아웃", "렛", "허용", "경고"],
    a: 2, 
    exp: "비고의적 더블 히트는 허용." 
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  "Serve": "emerald",
  "Return": "sky", 
  "Scoring": "amber",
  "Tiebreak": "indigo",
  "Let/Net": "teal",
  "Footfault": "rose",
  "Doubles": "violet",
  "Hindrance": "orange",
  "BallInPlay": "cyan"
};

export const CATEGORY_LABELS: Record<string, string> = {
  "Serve": "서브",
  "Return": "리턴", 
  "Scoring": "스코어링",
  "Tiebreak": "타이브레이크",
  "Let/Net": "렛/네트",
  "Footfault": "풋폴트",
  "Doubles": "복식",
  "Hindrance": "방해",
  "BallInPlay": "볼 인플레이"
};

export function pickQuestions(bank: Question[]): Question[] {
  const categories = [...new Set(bank.map(q => q.cat))];
  const selectedQuestions: Question[] = [];
  const usedIds = new Set<string>();
  
  // 각 카테고리에서 최소 1문항씩 선택
  categories.forEach(cat => {
    const categoryQuestions = bank.filter(q => q.cat === cat && !usedIds.has(q.id));
    if (categoryQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      selectedQuestions.push(categoryQuestions[randomIndex]);
      usedIds.add(categoryQuestions[randomIndex].id);
    }
  });
  
  // 남은 슬롯을 난이도 균형을 맞춰 채우기
  const remainingSlots = 12 - selectedQuestions.length;
  const remainingQuestions = bank.filter(q => !usedIds.has(q.id));
  
  // 난이도별로 분류
  const byDifficulty = {
    1: remainingQuestions.filter(q => q.diff === 1),
    2: remainingQuestions.filter(q => q.diff === 2),
    3: remainingQuestions.filter(q => q.diff === 3)
  };
  
  // 난이도 균형 맞춰 선택 (총합 18-22 범위)
  let currentDiffSum = selectedQuestions.reduce((sum, q) => sum + q.diff, 0);
  const targetDiffSum = 20; // 목표 난이도 합
  
  for (let i = 0; i < remainingSlots; i++) {
    const neededDiff = Math.round((targetDiffSum - currentDiffSum) / (remainingSlots - i));
    const targetDiff = Math.max(1, Math.min(3, neededDiff));
    
    const availableQuestions = byDifficulty[targetDiff as keyof typeof byDifficulty];
    if (availableQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableQuestions.length);
      const selected = availableQuestions[randomIndex];
      selectedQuestions.push(selected);
      usedIds.add(selected.id);
      currentDiffSum += selected.diff;
      
      // 사용된 문항을 배열에서 제거
      byDifficulty[targetDiff as keyof typeof byDifficulty] = availableQuestions.filter(q => q.id !== selected.id);
    }
  }
  
  // 문항 순서 섞기
  return selectedQuestions.sort(() => Math.random() - 0.5);
}

export function gradeQuiz(answers: QuizAnswer[]): QuizResult {
  const score = answers.filter(a => a.correct).length;
  const wrongByCat: Record<string, number> = {};
  const timeSpent = answers.reduce((sum, a) => sum + a.timeSpent, 0);
  
  answers.forEach(a => {
    if (!a.correct) {
      wrongByCat[a.cat] = (wrongByCat[a.cat] || 0) + 1;
    }
  });
  
  let grade = "Beginner";
  if (score >= 10) grade = "Rules Pro";
  else if (score >= 7) grade = "Match Ready";
  else if (score >= 4) grade = "Learning";
  
  return { score, grade, wrongByCat, timeSpent, answers };
}

export function getTopWeakAreas(wrongByCat: Record<string, number>): string[] {
  const sorted = Object.entries(wrongByCat)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3)
    .map(([cat]) => cat);
  
  return sorted.length > 0 ? sorted : ["Scoring", "Serve", "Tiebreak"];
}

export function getGradeInfo(grade: string) {
  const gradeInfo = {
    "Rules Pro": { 
      label: "규칙 전문가", 
      color: "bg-purple-100 text-purple-800",
      description: "테니스 규칙을 완벽하게 이해하고 있습니다!"
    },
    "Match Ready": { 
      label: "경기 준비 완료", 
      color: "bg-green-100 text-green-800",
      description: "실전 경기에 충분히 준비된 규칙 지식을 갖추고 있습니다."
    },
    "Learning": { 
      label: "학습 중", 
      color: "bg-yellow-100 text-yellow-800",
      description: "기본 규칙은 알고 있지만 더 학습이 필요합니다."
    },
    "Beginner": { 
      label: "초보자", 
      color: "bg-red-100 text-red-800",
      description: "기본 규칙부터 차근차근 학습해보세요."
    }
  };
  
  return gradeInfo[grade as keyof typeof gradeInfo] || gradeInfo.Beginner;
}
