"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Situation {
  id: number;
  courtEmoji: string;
  scene: string;
  detail: string;
  choices: readonly [string, string, string];
  bestIndex: number;
  explanation: string;
}

const SITUATIONS: readonly Situation[] = [
  {
    id: 1,
    courtEmoji: "🎾",
    scene: "상대가 깊은 크로스코트를 보냄",
    detail: "당신은 베이스라인 뒤에서 풀 스트로크 준비 중입니다.",
    choices: ["크로스 랠리", "다운더라인", "드롭샷"],
    bestIndex: 0,
    explanation:
      "깊은 크로스코트에는 크로스 랠리가 가장 안정적입니다. 네트 가장 낮은 지점을 넘기며, 코트 대각선 길이를 활용해 마진이 넉넉합니다. 다운더라인은 네트 높은 곳을 넘겨야 해 리스크가 크고, 드롭샷은 거리가 멀어 성공률이 낮습니다.",
  },
  {
    id: 2,
    courtEmoji: "🏃",
    scene: "짧은 공이 서비스라인 근처에 떨어짐",
    detail: "상대는 베이스라인에 있고, 당신은 앞으로 들어갈 시간이 충분합니다.",
    choices: ["어프로치샷 + 네트", "강한 포핸드", "로브"],
    bestIndex: 0,
    explanation:
      "짧은 공은 진입 기회입니다. 어프로치샷으로 깊게 보내고 네트를 잡으면 상대에게 압박을 줍니다. 강한 포핸드는 위너를 노릴 수 있지만 네트 포지션을 포기하게 되고, 로브는 공격 기회를 낭비합니다.",
  },
  {
    id: 3,
    courtEmoji: "🧱",
    scene: "상대가 네트에 있고, 당신은 깊은 위치",
    detail: "베이스라인 뒤 1m 지점에서 수비적 자세입니다.",
    choices: ["패싱샷", "로브", "상대 몸쪽"],
    bestIndex: 1,
    explanation:
      "깊은 위치에서는 로브가 가장 안전한 선택입니다. 패싱샷은 각도를 만들기 어렵고, 상대 몸쪽 공은 네트 플레이어에게 쉬운 발리 기회를 줍니다. 높은 톱스핀 로브로 시간을 벌고 포지션을 회복하세요.",
  },
  {
    id: 4,
    courtEmoji: "⚡",
    scene: "듀스 40-40, 자신의 서브",
    detail: "중요한 포인트에서 퍼스트 서브를 넣어야 합니다.",
    choices: ["와이드 서브", "바디 서브", "T서브"],
    bestIndex: 1,
    explanation:
      "바디 서브는 리턴 각도를 제한하는 가장 효과적인 선택입니다. 상대가 몸을 비켜야 해서 강한 리턴이 어렵고, 서브 넣는 사람 입장에서도 미스 확률이 낮습니다. 와이드나 T서브는 정확도 부담이 큽니다.",
  },
  {
    id: 5,
    courtEmoji: "📐",
    scene: "상대가 베이스라인 깊이 쳐옴, 높은 바운드",
    detail: "허리 위로 올라오는 킥성 공을 받아야 합니다.",
    choices: ["톱스핀 크로스", "플랫 다운더라인", "슬라이스"],
    bestIndex: 0,
    explanation:
      "높은 바운드에는 톱스핀 크로스가 최적입니다. 톱스핀을 걸어 깊게 보내면 상대를 계속 뒤에 묶어둘 수 있습니다. 플랫 다운더라인은 타이밍 맞추기 어렵고, 슬라이스는 높은 공에서 뜨기 쉽습니다.",
  },
  {
    id: 6,
    courtEmoji: "🔥",
    scene: "네트 앞에서 발리 기회, 상대가 중앙",
    detail: "서비스라인 안쪽에서 편안한 포핸드 발리 찬스입니다.",
    choices: ["앵글 발리", "깊은 발리", "드롭 발리"],
    bestIndex: 0,
    explanation:
      "상대가 중앙에 있을 때 앵글 발리가 가장 효과적입니다. 짧은 각도로 상대가 닿을 수 없는 곳에 보낼 수 있습니다. 깊은 발리는 상대가 중앙이라 커버 가능하고, 드롭 발리도 중앙에서 달려올 수 있습니다.",
  },
  {
    id: 7,
    courtEmoji: "💥",
    scene: "상대의 세컨드 서브, 약한 킥 서브",
    detail: "바운드가 높지 않고 느린 세컨드 서브가 왔습니다.",
    choices: ["공격적 리턴", "안정 리턴", "드롭 리턴"],
    bestIndex: 0,
    explanation:
      "약한 세컨드 서브는 공격 기회입니다. 깊고 강한 리턴으로 상대를 수비에 몰아넣으세요. 안정 리턴은 기회 낭비이고, 드롭 리턴은 서버가 앞으로 오기 전이라 읽히기 쉽습니다.",
  },
  {
    id: 8,
    courtEmoji: "🏆",
    scene: "긴 랠리 후 상대가 밖으로 밀림",
    detail: "상대가 사이드라인 바깥으로 밀려나 오픈 코트가 크게 열렸습니다.",
    choices: ["오픈 코트 위너", "한번 더 밀기", "드롭샷"],
    bestIndex: 0,
    explanation:
      "오픈 코트가 확실히 열렸을 때는 위너를 노려야 합니다. 빈 공간에 확실하게 마무리하세요. 한번 더 밀기는 상대에게 회복 시간을 주고, 드롭샷은 오픈 코트보다 효율이 떨어집니다.",
  },
] as const;

const SCORE_PER_BEST = 3;
const SCORE_PER_SUBOPTIMAL = 1;
const MAX_SCORE = SITUATIONS.length * SCORE_PER_BEST; // 24

function getRating(score: number): { label: string; color: string; comment: string } {
  const pct = score / MAX_SCORE;
  if (pct >= 0.9) return { label: "프로급 전술가", color: "text-yellow-400", comment: "코트 위의 체스 마스터! 거의 모든 상황에서 최적의 판단을 내렸습니다." };
  if (pct >= 0.7) return { label: "전략적 플레이어", color: "text-orange-300", comment: "대부분의 상황에서 좋은 판단을 합니다. 몇 가지 상황만 더 연습하면 완벽합니다." };
  if (pct >= 0.5) return { label: "발전 중인 선수", color: "text-orange-200", comment: "기본 전술 이해가 있습니다. 상황별 최적 선택을 좀 더 연습해 보세요." };
  return { label: "전략 초보", color: "text-red-300", comment: "아직 전술적 사고가 익숙하지 않습니다. 각 설명을 읽고 원리를 파악해 보세요." };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Phase = "intro" | "playing" | "result";

export default function ShotSelectionTrainerPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [chosenIndex, setChosenIndex] = useState<number | null>(null);

  const totalScore = scores.reduce((a, b) => a + b, 0);
  const situation = SITUATIONS[currentIndex] as Situation | undefined;

  const handleStart = useCallback(() => {
    setPhase("playing");
    setCurrentIndex(0);
    setScores([]);
    setChosenIndex(null);
  }, []);

  const handleChoice = useCallback(
    (idx: number) => {
      if (chosenIndex !== null || !situation) return;
      const pts = idx === situation.bestIndex ? SCORE_PER_BEST : SCORE_PER_SUBOPTIMAL;
      setChosenIndex(idx);
      setScores((prev) => [...prev, pts]);
    },
    [chosenIndex, situation],
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= SITUATIONS.length) {
      setPhase("result");
    } else {
      setCurrentIndex((i) => i + 1);
      setChosenIndex(null);
    }
  }, [currentIndex]);

  /* ---- Intro ---- */
  if (phase === "intro") {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 py-16">
        <div className="w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-10 text-center shadow-sm">
          <p className="text-5xl">🎾</p>
          <h1 className="mt-4 text-3xl font-extrabold text-gray-900">샷 선택 트레이너</h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
            8가지 실전 코트 상황이 주어집니다. 각 상황에서 가장 효과적인 샷을 선택하세요. 최적의 선택은 3점, 차선은
            1점입니다. 만점은 24점!
          </p>

          <button
            onClick={handleStart}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-3.5 text-base font-bold text-white shadow-lg transition hover:from-red-600 hover:to-orange-600 active:scale-95"
          >
            훈련 시작
          </button>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/utility/opponent-analyzer"
              className="rounded-full border border-red-300 px-4 py-2 text-sm font-semibold text-red-700 transition hover:bg-red-50"
            >
              상대 분석과 연결
            </Link>
            <Link
              href="/utility/unforced-error-audit"
              className="rounded-full border border-orange-300 px-4 py-2 text-sm font-semibold text-orange-700 transition hover:bg-orange-50"
            >
              범실 분석 보기
            </Link>
          </div>
        </div>
      </main>
    );
  }

  /* ---- Result ---- */
  if (phase === "result") {
    const rating = getRating(totalScore);
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 py-16">
        <div className="w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-10 text-center shadow-sm">
          <p className="text-5xl">🏅</p>
          <h2 className="mt-4 text-2xl font-extrabold text-gray-900">훈련 완료!</h2>

          <div className="mx-auto mt-8 flex max-w-xs flex-col items-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 p-8 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest opacity-80">Shot IQ Score</p>
            <p className="mt-2 text-6xl font-black">{totalScore}</p>
            <p className="text-lg font-semibold opacity-80">/ {MAX_SCORE}</p>
            <div className="mt-4 h-px w-full bg-white/30" />
            <p className={`mt-4 text-xl font-bold ${rating.color}`}>{rating.label}</p>
          </div>

          <p className="mx-auto mt-6 max-w-md text-sm leading-6 text-gray-600">{rating.comment}</p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleStart}
              className="rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-7 py-3 text-sm font-bold text-white shadow transition hover:from-red-600 hover:to-orange-600 active:scale-95"
            >
              다시 도전하기
            </button>
            <Link
              href="/utility"
              className="rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              유틸리티 목록
            </Link>
          </div>

          {/* Answer review */}
          <div className="mt-10 space-y-4 text-left">
            <h3 className="text-lg font-bold text-gray-800">문제별 결과</h3>
            {SITUATIONS.map((s, i) => {
              const pts = scores[i] ?? 0;
              const correct = pts === SCORE_PER_BEST;
              return (
                <div
                  key={s.id}
                  className={`rounded-2xl border p-4 ${correct ? "border-green-200 bg-green-50" : "border-orange-200 bg-orange-50"}`}
                >
                  <p className="text-sm font-semibold text-gray-800">
                    {s.courtEmoji} Q{s.id}. {s.scene}
                  </p>
                  <p className="mt-1 text-xs text-gray-600">
                    정답: <span className="font-bold">{s.choices[s.bestIndex]}</span>
                    {correct ? (
                      <span className="ml-2 text-green-700">+3점 정확!</span>
                    ) : (
                      <span className="ml-2 text-orange-700">+1점</span>
                    )}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }

  /* ---- Playing ---- */
  if (!situation) return null;

  const isAnswered = chosenIndex !== null;
  const isCorrect = chosenIndex === situation.bestIndex;

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col items-center gap-6 px-4 py-12">
      {/* Progress bar */}
      <div className="w-full">
        <div className="flex items-center justify-between text-sm font-semibold text-gray-500">
          <span>
            Q{currentIndex + 1} / {SITUATIONS.length}
          </span>
          <span>{totalScore}점</span>
        </div>
        <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-red-500 to-orange-400 transition-all duration-500"
            style={{ width: `${((currentIndex + (isAnswered ? 1 : 0)) / SITUATIONS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Situation card */}
      <div className="w-full rounded-3xl border border-red-200 bg-gradient-to-br from-red-50 via-white to-orange-50 p-8 shadow-sm">
        <div className="flex items-start gap-4">
          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 text-2xl shadow">
            {situation.courtEmoji}
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-gray-900">{situation.scene}</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">{situation.detail}</p>
          </div>
        </div>

        {/* Choices */}
        <div className="mt-8 flex flex-col gap-3">
          {situation.choices.map((choice, idx) => {
            let btnClass =
              "w-full rounded-2xl border-2 px-5 py-4 text-left text-base font-semibold transition";

            if (!isAnswered) {
              btnClass += " border-gray-200 bg-white text-gray-800 hover:border-orange-400 hover:bg-orange-50 active:scale-[0.98]";
            } else if (idx === situation.bestIndex) {
              btnClass += " border-green-400 bg-green-50 text-green-800";
            } else if (idx === chosenIndex) {
              btnClass += " border-orange-400 bg-orange-50 text-orange-800";
            } else {
              btnClass += " border-gray-100 bg-gray-50 text-gray-400";
            }

            return (
              <button
                key={idx}
                onClick={() => handleChoice(idx)}
                disabled={isAnswered}
                className={btnClass}
              >
                <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-sm font-bold text-gray-500">
                  {String.fromCharCode(65 + idx)}
                </span>
                {choice}
                {isAnswered && idx === situation.bestIndex && (
                  <span className="ml-2 text-green-600">&#10003; 최적</span>
                )}
                {isAnswered && idx === chosenIndex && idx !== situation.bestIndex && (
                  <span className="ml-2 text-orange-600">&#9888; 차선</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {isAnswered && (
          <div className="mt-6">
            <div
              className={`rounded-2xl p-5 ${isCorrect ? "border border-green-200 bg-green-50" : "border border-orange-200 bg-orange-50"}`}
            >
              <p className={`text-sm font-bold ${isCorrect ? "text-green-700" : "text-orange-700"}`}>
                {isCorrect ? "정확합니다! +3점" : "차선 선택 +1점"}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-700">{situation.explanation}</p>
            </div>

            <button
              onClick={handleNext}
              className="mt-5 w-full rounded-full bg-gradient-to-r from-red-500 to-orange-500 py-3.5 text-base font-bold text-white shadow transition hover:from-red-600 hover:to-orange-600 active:scale-95"
            >
              {currentIndex + 1 < SITUATIONS.length ? "다음 상황" : "결과 보기"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
