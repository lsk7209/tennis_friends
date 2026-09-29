/**
 * Tennis scoring quiz. Every answer follows the ITF Rules of Tennis (Rules 5, 6,
 * 10, 22 and Appendix VI alternative scoring). Explanations state the rule
 * rather than opinion.
 */
export const SCORING_QUIZ_VERSION = "tf-scoring-quiz-v1-20260929";
export const ITF_RULES_URL = "https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf";

export type ScoringQuestion = {
  id: string;
  prompt: string;
  options: [string, string, string, string];
  answerIndex: 0 | 1 | 2 | 3;
  explanation: string;
};

export const SCORING_QUESTIONS: ScoringQuestion[] = [
  {
    id: "point-names",
    prompt: "한 게임에서 서버가 첫 세 포인트를 모두 따냈습니다. 서버가 불러야 할 점수는?",
    options: ["30-0", "40-0 (포티-러브)", "45-0", "게임"],
    answerIndex: 1,
    explanation: "포인트는 0(러브) → 15 → 30 → 40 → 게임 순서입니다. 세 포인트를 따면 40이고, 한 포인트를 더 따야 게임입니다.",
  },
  {
    id: "call-order",
    prompt: "리시버가 두 포인트, 서버가 한 포인트를 땄습니다. 올바른 콜은?",
    options: ["30-15", "15-30", "30-15 또는 15-30 아무거나", "리시버 점수를 먼저 부른다"],
    answerIndex: 1,
    explanation: "점수는 항상 서버 점수를 먼저 부릅니다. 서버 15, 리시버 30이므로 \"15-30\"입니다.",
  },
  {
    id: "deuce",
    prompt: "40-40(듀스)에서 서버가 한 포인트를 땄습니다. 다음 상황은?",
    options: ["서버가 게임을 가져간다", "어드밴티지 서버 — 한 포인트 더 따면 게임", "다시 듀스", "50-40이 된다"],
    answerIndex: 1,
    explanation: "듀스 이후에는 연속 두 포인트를 따야 게임입니다. 한 포인트를 따면 어드밴티지, 이어서 잃으면 다시 듀스입니다.",
  },
  {
    id: "no-ad",
    prompt: "노애드(No-Ad) 방식에서 40-40이 되면?",
    options: ["듀스와 똑같이 두 포인트 차이가 날 때까지 계속", "단 한 포인트(디사이딩 포인트)로 게임이 결정된다", "서버가 자동으로 게임을 가져간다", "타이브레이크로 넘어간다"],
    answerIndex: 1,
    explanation: "노애드는 40-40에서 디사이딩 포인트 하나로 게임을 끝냅니다. 이때 리시버(복식은 리시브하는 팀)가 듀스 코트와 애드 코트 중 받을 쪽을 고릅니다.",
  },
  {
    id: "set-win",
    prompt: "타이브레이크를 쓰는 일반 세트에서 5-5가 되었습니다. 세트를 가져가려면?",
    options: ["먼저 6게임을 따면 끝", "7-5처럼 두 게임 차이로 7게임을 따거나, 6-6이면 타이브레이크", "8게임을 먼저 따야 한다", "바로 타이브레이크"],
    answerIndex: 1,
    explanation: "세트는 6게임 이상, 두 게임 차이로 이깁니다. 5-5에서 7-5가 되면 세트 종료, 6-6이 되면 타이브레이크로 7-6이 결정됩니다.",
  },
  {
    id: "tiebreak-win",
    prompt: "일반 타이브레이크(7포인트) 점수가 6-6입니다. 이기는 조건은?",
    options: ["다음 포인트를 따면 승리", "두 포인트 차이가 날 때까지 계속", "서버가 유리하므로 서버 승리", "10포인트 먼저"],
    answerIndex: 1,
    explanation: "타이브레이크는 7포인트 이상, 두 포인트 차이로 이깁니다. 6-6이면 8-6, 9-7처럼 두 포인트 차가 날 때까지 이어집니다.",
  },
  {
    id: "tiebreak-serve",
    prompt: "타이브레이크의 서브 순서로 맞는 것은?",
    options: ["게임처럼 한 사람이 끝까지 서브", "첫 서버가 1포인트, 이후 두 포인트씩 번갈아 서브", "매 포인트마다 서버가 바뀐다", "두 포인트씩 서브하고 첫 서버도 2포인트"],
    answerIndex: 1,
    explanation: "차례인 선수가 첫 포인트를 서브하고, 이후 상대부터 두 포인트씩 번갈아 서브합니다. 매 서브는 듀스 코트·애드 코트를 번갈아 갑니다.",
  },
  {
    id: "tiebreak-change",
    prompt: "타이브레이크 중 코트를 바꾸는 시점은?",
    options: ["바꾸지 않는다", "양쪽 합계 6포인트마다", "7포인트마다", "타이브레이크가 끝난 뒤에만"],
    answerIndex: 1,
    explanation: "타이브레이크에서는 두 사람의 포인트 합계가 6의 배수가 될 때마다(6, 12, 18 …) 코트를 바꿉니다.",
  },
  {
    id: "change-ends",
    prompt: "일반 게임에서 코트를 바꾸는 시점은?",
    options: ["매 게임 뒤", "각 세트의 1, 3, 5 … 홀수 번째 게임이 끝난 뒤", "짝수 번째 게임 뒤", "세트가 끝날 때만"],
    answerIndex: 1,
    explanation: "각 세트의 첫 게임, 세 번째 게임 그리고 이후 홀수 번째 게임이 끝나면 코트를 바꿉니다. 세트가 끝났을 때 게임 수 합계가 홀수면 그때도 바꿉니다.",
  },
  {
    id: "after-tiebreak",
    prompt: "타이브레이크로 끝난 세트 다음, 새 세트의 첫 게임은 누가 서브할까요?",
    options: ["타이브레이크를 이긴 쪽", "타이브레이크에서 먼저 서브한 쪽의 상대", "직전 세트 첫 게임 서버", "토스를 다시 한다"],
    answerIndex: 1,
    explanation: "타이브레이크에서 먼저 서브한 선수(팀)는 다음 세트 첫 게임에서 리시브합니다. 즉 그 상대가 첫 게임을 서브합니다.",
  },
  {
    id: "match-tiebreak",
    prompt: "마지막 세트 대신 쓰는 10점 매치 타이브레이크의 승리 조건은?",
    options: ["7포인트 먼저", "10포인트 이상, 두 포인트 차이", "10포인트 먼저, 차이 무관", "15포인트 먼저"],
    answerIndex: 1,
    explanation: "10점 매치 타이브레이크는 10포인트 이상을 두 포인트 차이로 따야 이깁니다. 9-9라면 11-9, 12-10처럼 계속됩니다. 규칙에는 7점 매치 타이브레이크도 있으니 시작 전에 방식을 정하세요.",
  },
  {
    id: "service-let",
    prompt: "서브가 네트에 맞고 서비스 박스 안에 정확히 들어갔습니다(렛). 어떻게 할까요?",
    options: ["그대로 인플레이로 진행", "그 서브만 다시 한다(폴트로 치지 않음)", "폴트 하나로 기록", "포인트를 다시 처음부터 두 번 서브 기회"],
    answerIndex: 1,
    explanation: "서브 렛은 해당 서브만 다시 합니다. 첫 서브에서 렛이면 다시 첫 서브, 세컨드 서브에서 렛이면 다시 세컨드 서브입니다.",
  },
];

export type QuizGrade = { correct: number; total: number; label: string; message: string };

export type DisplayOption = { label: string; originalIndex: number };

/** Rotates option order per question so the correct answer is not always in the same position. */
export function getDisplayOptions(question: ScoringQuestion, questionIndex: number): DisplayOption[] {
  const offset = (questionIndex * 3 + 1) % question.options.length;
  return question.options.map((_, position) => {
    const originalIndex = (position + offset) % question.options.length;
    return { label: question.options[originalIndex], originalIndex };
  });
}

const GRADE_BANDS: { minRatio: number; label: string; message: string }[] = [
  { minRatio: 1, label: "만점", message: "심판 없이도 점수 진행을 정확히 맡을 수 있습니다." },
  { minRatio: 0.75, label: "능숙", message: "기본 점수는 확실합니다. 틀린 문항의 타이브레이크·노애드 규칙만 다시 확인해 보세요." },
  { minRatio: 0.5, label: "보통", message: "게임 점수는 익숙하지만 세트·타이브레이크 규칙에서 헷갈리는 부분이 있습니다." },
  { minRatio: 0, label: "입문", message: "해설을 한 번 읽고 다시 풀어 보면 대부분 금방 익숙해집니다." },
];

export function gradeScoringQuiz(answers: (number | null)[]): QuizGrade {
  const total = SCORING_QUESTIONS.length;
  const correct = SCORING_QUESTIONS.filter((question, index) => answers[index] === question.answerIndex).length;
  const ratio = total === 0 ? 0 : correct / total;
  const band = GRADE_BANDS.find((candidate) => ratio >= candidate.minRatio) ?? GRADE_BANDS[GRADE_BANDS.length - 1];
  return { correct, total, label: band.label, message: band.message };
}
