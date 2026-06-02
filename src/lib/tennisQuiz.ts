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
    q: "서브 토스가 마음에 들지 않아 공을 치지 않고 다시 잡았다. 판정은?",
    options: ["렛으로 다시 서브한다", "아무 페널티 없이 다시 토스할 수 있다", "경고 후 1점 감점", "리시버의 포인트"],
    a: 1,
    exp: "서브 동작 중 공을 치지 않았다면 토스를 다시 할 수 있습니다. 공을 치려다 맞히면 다른 판정이 될 수 있습니다.",
  },
  {
    id: "Q2",
    cat: "Footfault",
    diff: 1,
    q: "서브할 때 발이 베이스라인을 밟은 채 공을 쳤다. 올바른 판정은?",
    options: ["풋폴트", "문제없음", "경고만 부여", "리시버 실점"],
    a: 0,
    exp: "서브 임팩트 전에 베이스라인이나 코트 안쪽을 밟으면 풋폴트입니다.",
  },
  {
    id: "Q3",
    cat: "Scoring",
    diff: 1,
    q: "복식에서 바깥쪽 사이드라인과 안쪽 단식 라인 중 어느 라인을 사용하나요?",
    options: ["안쪽 단식 라인", "바깥쪽 복식 라인", "첫 세트만 단식 라인", "타이브레이크에서만 복식 라인"],
    a: 1,
    exp: "복식은 바깥쪽 복식 사이드라인을 기준으로 합니다.",
  },
  {
    id: "Q4",
    cat: "Let/Net",
    diff: 1,
    q: "리턴한 공이 네트를 맞고 상대 코트 안에 떨어졌다. 판정은?",
    options: ["인플레이", "아웃", "렛", "두 번 바운드 후만 유효"],
    a: 0,
    exp: "서브가 아닌 일반 랠리 중에는 공이 네트를 맞아도 상대 코트 안에 들어가면 인플레이입니다.",
  },
  {
    id: "Q5",
    cat: "Doubles",
    diff: 2,
    q: "복식에서 리시버의 파트너가 서브를 직접 맞혔다. 판정은?",
    options: ["플레이 계속", "렛", "서브 다시", "서버 포인트"],
    a: 3,
    exp: "리시버가 공을 치지 못하고 리시버 팀 선수가 몸에 맞으면 서버 팀의 포인트입니다.",
  },
  {
    id: "Q6",
    cat: "Tiebreak",
    diff: 2,
    q: "타이브레이크에서 특히 중요한 운영 기준은?",
    options: ["게임 합계만 기록", "서버의 득점만 기록", "서버와 리시버 순서 및 코트 교대", "일반 게임 스코어만 기록"],
    a: 2,
    exp: "타이브레이크는 서버 순서와 코트 교대 타이밍이 핵심입니다. 순서를 놓치면 경기 운영이 흔들립니다.",
  },
  {
    id: "Q7",
    cat: "Let/Net",
    diff: 2,
    q: "서브가 네트 포스트를 맞고 상대 서비스 박스에 들어갔다. 판정은?",
    options: ["인", "아웃", "무조건 렛", "서버만 선택 가능"],
    a: 1,
    exp: "서브는 네트를 넘어 올바른 서비스 박스에 들어가야 합니다. 네트 포스트를 맞은 서브는 일반적으로 아웃입니다.",
  },
  {
    id: "Q8",
    cat: "Hindrance",
    diff: 2,
    q: "리시버가 준비되지 않았다고 분명히 표시했는데 서버가 서브를 넣었다. 적절한 처리는?",
    options: ["서버 포인트", "렛 또는 리플레이", "리시버 포인트", "경고 후 진행"],
    a: 1,
    exp: "리시버가 명확히 준비되지 않았고 즉시 반응했다면 다시 진행하는 것이 일반적인 매너와 규칙 처리입니다.",
  },
  {
    id: "Q9",
    cat: "BallInPlay",
    diff: 2,
    q: "랠리 중 공이 코트 밖 울타리나 구조물을 맞고 다시 코트로 들어왔다. 판정은?",
    options: ["인플레이", "아웃", "렛", "상대가 선택"],
    a: 1,
    exp: "코트 경계 밖 구조물이나 고정물을 맞은 공은 아웃입니다.",
  },
  {
    id: "Q10",
    cat: "Doubles",
    diff: 2,
    q: "복식에서 리시브 순서를 바꿀 수 있는 시점은?",
    options: ["포인트 중 언제든", "게임 진행 중 언제든", "세트 중간 언제든", "게임이 끝나고 다음 리시브 게임 시작 전"],
    a: 3,
    exp: "복식 리시브 순서는 해당 세트의 리시브 게임 단위로 정해집니다. 임의로 중간 변경할 수 없습니다.",
  },
  {
    id: "Q11",
    cat: "Return",
    diff: 2,
    q: "강한 첫 서브를 안정적으로 리턴하려면 어떤 대응이 좋을까요?",
    options: ["크게 휘둘러 깊게 친다", "짧고 단단한 면으로 블록한다", "베이스라인 뒤로 무조건 물러난다", "스핀만 크게 사용한다"],
    a: 1,
    exp: "강한 서브 리턴은 스윙을 줄이고 라켓 면을 안정적으로 만드는 블록 리턴이 안전합니다.",
  },
  {
    id: "Q12",
    cat: "Hindrance",
    diff: 3,
    q: "상대가 공을 친 직후 일부러 큰 소리를 내어 집중을 방해했다. 가능한 판정은?",
    options: ["무조건 인정", "무조건 실격", "방해로 인한 렛 또는 포인트 페널티", "친선경기에서는 처리 불가"],
    a: 2,
    exp: "고의적인 방해는 경기 상황에 따라 렛, 포인트 상실 등으로 처리될 수 있습니다.",
  },
  {
    id: "Q13",
    cat: "Scoring",
    diff: 3,
    q: "노 애드 방식에서 듀스가 되면 다음 포인트는 어떻게 처리하나요?",
    options: ["다음 포인트 승자가 게임을 가져간다", "무조건 서버가 선택한다", "리시버가 코트를 선택할 수 있다", "다시 40-40부터 반복한다"],
    a: 0,
    exp: "노 애드에서는 듀스 후 다음 포인트가 결정 포인트입니다. 대회 규정에 따라 리시버가 코트를 선택하는 경우도 있습니다.",
  },
  {
    id: "Q14",
    cat: "BallInPlay",
    diff: 3,
    q: "라켓이 손에서 빠져 공을 맞히고 상대 코트에 들어갔다. 판정은?",
    options: ["인", "아웃", "장비가 공을 친 것이므로 포인트 상실 가능", "무조건 렛"],
    a: 2,
    exp: "선수가 들고 있지 않은 장비가 공에 영향을 주면 정상 타구로 보기 어렵고 포인트 상실이 될 수 있습니다.",
  },
  {
    id: "Q15",
    cat: "Footfault",
    diff: 2,
    q: "서브 직전 발이 센터마크 연장선을 넘어섰다. 판정은?",
    options: ["문제없음", "풋폴트", "경고만", "상대 선택"],
    a: 1,
    exp: "서브 때는 베이스라인뿐 아니라 센터마크 연장선 침범도 풋폴트가 될 수 있습니다.",
  },
  {
    id: "Q16",
    cat: "Tiebreak",
    diff: 3,
    q: "매치 타이브레이크의 일반적인 승리 조건은?",
    options: ["7점 선취", "10점 선취와 2점 차", "12점 선취", "상대 실격 시에만 종료"],
    a: 1,
    exp: "매치 타이브레이크는 보통 10점 선취, 2점 차 조건을 사용합니다. 대회 규정은 반드시 확인해야 합니다.",
  },
  {
    id: "Q17",
    cat: "Doubles",
    diff: 2,
    q: "복식에서 네트 근처 파트너가 리턴 전에 손짓으로 포치 신호를 냈다. 허용되나요?",
    options: ["규칙 위반", "허용되는 전술 신호", "무조건 렛", "경고"],
    a: 1,
    exp: "파트너 간 비언어 전술 신호는 일반적으로 허용됩니다. 다만 상대를 직접 방해하는 행동은 문제가 됩니다.",
  },
  {
    id: "Q18",
    cat: "Let/Net",
    diff: 2,
    q: "랠리 중 공이 네트 스트랩을 맞고 상대 코트로 넘어갔다. 판정은?",
    options: ["인플레이", "아웃", "렛", "서버만 다시"],
    a: 0,
    exp: "일반 랠리 중 공이 네트나 스트랩을 맞아도 상대 코트 안에 떨어지면 인플레이입니다.",
  },
  {
    id: "Q19",
    cat: "Serve",
    diff: 3,
    q: "서브 동작 중 공을 떨어뜨려 바닥에 튄 뒤 다시 잡았다. 판정은?",
    options: ["허용", "서브 실패", "렛", "리시버 포인트"],
    a: 0,
    exp: "공을 치지 않았다면 토스를 다시 할 수 있습니다. 단, 반복적으로 지연하면 매너 문제가 될 수 있습니다.",
  },
  {
    id: "Q20",
    cat: "Hindrance",
    diff: 2,
    q: "옆 코트 공이 들어와 플레이를 중단했다. 적절한 처리는?",
    options: ["계속 진행", "렛으로 리플레이", "즉시 서버 포인트", "경고"],
    a: 1,
    exp: "외부 공은 안전과 공정성 문제이므로 보통 렛으로 다시 진행합니다.",
  },
  {
    id: "Q21",
    cat: "Scoring",
    diff: 2,
    q: "스코어 착오를 뒤늦게 발견했을 때 가장 우선해야 할 기준은?",
    options: ["무조건 이전 포인트 무효", "심판만 확정 가능", "양 선수 합의와 규정에 따라 정정", "그대로 진행만 가능"],
    a: 2,
    exp: "스코어 착오는 가능한 즉시 정정하되, 합의와 대회 규정이 우선입니다.",
  },
  {
    id: "Q22",
    cat: "Doubles",
    diff: 3,
    q: "복식에서 리시버가 고의로 서브 공을 손으로 잡아 플레이를 중단했다. 판정은?",
    options: ["리시브 팀 포인트", "렛", "서버 팀 포인트", "경고만"],
    a: 2,
    exp: "인플레이 공을 고의로 잡으면 정상 플레이를 방해한 것이므로 상대 포인트가 될 수 있습니다.",
  },
  {
    id: "Q23",
    cat: "Return",
    diff: 2,
    q: "리턴 위치는 베이스라인 바깥이나 코트 안쪽 어디든 선택할 수 있나요?",
    options: ["불가", "가능", "첫 서브 때만 가능", "복식에서만 가능"],
    a: 1,
    exp: "리턴 위치 자체에는 제한이 없습니다. 다만 서브가 들어오기 전 움직임으로 시간을 지연하거나 방해해서는 안 됩니다.",
  },
  {
    id: "Q24",
    cat: "BallInPlay",
    diff: 3,
    q: "한 번의 스윙에서 공이 라켓에 두 번 맞았지만 고의가 아니었다. 판정은?",
    options: ["아웃", "렛", "허용", "경고"],
    a: 2,
    exp: "고의가 아닌 연속 접촉은 일반적으로 허용됩니다. 명백히 두 번 치려 한 경우와 구분해야 합니다.",
  },
];

export const CATEGORY_COLORS: Record<string, string> = {
  Serve: "emerald",
  Return: "sky",
  Scoring: "amber",
  Tiebreak: "indigo",
  "Let/Net": "teal",
  Footfault: "rose",
  Doubles: "violet",
  Hindrance: "orange",
  BallInPlay: "cyan",
};

export const CATEGORY_LABELS: Record<string, string> = {
  Serve: "서브",
  Return: "리턴",
  Scoring: "스코어",
  Tiebreak: "타이브레이크",
  "Let/Net": "렛/네트",
  Footfault: "풋폴트",
  Doubles: "복식",
  Hindrance: "방해",
  BallInPlay: "인플레이",
};

export function pickQuestions(bank: Question[]): Question[] {
  const categories = [...new Set(bank.map((q) => q.cat))];
  const selectedQuestions: Question[] = [];
  const usedIds = new Set<string>();

  categories.forEach((cat) => {
    const categoryQuestions = bank.filter((q) => q.cat === cat && !usedIds.has(q.id));
    if (categoryQuestions.length > 0) {
      const randomIndex = Math.floor(Math.random() * categoryQuestions.length);
      selectedQuestions.push(categoryQuestions[randomIndex]);
      usedIds.add(categoryQuestions[randomIndex].id);
    }
  });

  const remainingSlots = 12 - selectedQuestions.length;
  const remainingQuestions = bank.filter((q) => !usedIds.has(q.id));
  const byDifficulty = {
    1: remainingQuestions.filter((q) => q.diff === 1),
    2: remainingQuestions.filter((q) => q.diff === 2),
    3: remainingQuestions.filter((q) => q.diff === 3),
  };

  let currentDiffSum = selectedQuestions.reduce((sum, q) => sum + q.diff, 0);
  const targetDiffSum = 20;

  for (let i = 0; i < remainingSlots; i += 1) {
    const neededDiff = Math.round((targetDiffSum - currentDiffSum) / (remainingSlots - i));
    const targetDiff = Math.max(1, Math.min(3, neededDiff)) as 1 | 2 | 3;
    let availableQuestions = byDifficulty[targetDiff];

    if (availableQuestions.length === 0) {
      availableQuestions = Object.values(byDifficulty).flat();
    }

    if (availableQuestions.length === 0) break;

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const selected = availableQuestions[randomIndex];
    selectedQuestions.push(selected);
    usedIds.add(selected.id);
    currentDiffSum += selected.diff;
    byDifficulty[selected.diff] = byDifficulty[selected.diff].filter((q) => q.id !== selected.id);
  }

  return selectedQuestions.sort(() => Math.random() - 0.5);
}

export function gradeQuiz(answers: QuizAnswer[]): QuizResult {
  const score = answers.filter((a) => a.correct).length;
  const wrongByCat: Record<string, number> = {};
  const timeSpent = answers.reduce((sum, a) => sum + a.timeSpent, 0);

  answers.forEach((a) => {
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
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([cat]) => cat);

  return sorted.length > 0 ? sorted : ["Scoring", "Serve", "Tiebreak"];
}

export function getGradeInfo(grade: string) {
  const gradeInfo = {
    "Rules Pro": {
      label: "규칙 전문가",
      color: "bg-purple-100 text-purple-800",
      description: "테니스 규칙과 경기 상황 판단을 안정적으로 이해하고 있습니다.",
    },
    "Match Ready": {
      label: "경기 준비 완료",
      color: "bg-green-100 text-green-800",
      description: "실전 경기에서 필요한 핵심 규칙을 대부분 알고 있습니다.",
    },
    Learning: {
      label: "학습 중",
      color: "bg-yellow-100 text-yellow-800",
      description: "기본 규칙은 이해하고 있지만 실전 상황별 판단 연습이 더 필요합니다.",
    },
    Beginner: {
      label: "입문 단계",
      color: "bg-red-100 text-red-800",
      description: "서브, 스코어, 인플레이 같은 기본 규칙부터 차근차근 익히면 좋습니다.",
    },
  };

  return gradeInfo[grade as keyof typeof gradeInfo] || gradeInfo.Beginner;
}
