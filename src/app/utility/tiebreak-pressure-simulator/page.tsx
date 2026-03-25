"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types & Data                                                       */
/* ------------------------------------------------------------------ */

interface Scenario {
  score: string;
  situation: string;
  description: string;
  options: [string, string, string];
  /** Index order mapped to points: best=3, ok=2, risky=1 */
  points: [number, number, number];
  feedback: [string, string, string];
}

const scenarios: Scenario[] = [
  {
    score: "0-0",
    situation: "자신의 서브",
    description:
      "타이브레이크 첫 포인트입니다. 긴장감이 가장 높은 순간, 어떤 서브를 선택하시겠습니까?",
    options: ["와이드 서브로 코트를 열기", "바디 서브로 리턴을 봉쇄", "안전한 세이프 서브"],
    points: [2, 3, 1],
    feedback: [
      "와이드 서브는 효과적이지만 첫 포인트에서는 리스크가 있습니다. 리듬을 먼저 잡는 것이 우선입니다.",
      "바디 서브는 상대의 리턴을 가장 효과적으로 제한하면서 안정적인 시작을 만듭니다. 최적의 선택!",
      "너무 안전한 서브는 상대에게 공격 기회를 줄 수 있습니다.",
    ],
  },
  {
    score: "1-2",
    situation: "뒤진 상황, 상대 서브 리턴",
    description:
      "1점 뒤진 상황에서 상대가 서브를 합니다. 리턴 전략을 결정해야 합니다.",
    options: ["공격적 리턴으로 주도권 탈환", "안정적 깊은 리턴", "칩앤차지로 네트 점령"],
    points: [2, 3, 1],
    feedback: [
      "공격적 리턴은 뒤진 상황의 조급함이 반영될 수 있습니다. 성공률이 핵심입니다.",
      "깊은 리턴으로 랠리를 시작하면 상대에게 쉬운 공격을 허용하지 않습니다. 가장 안정적인 선택!",
      "칩앤차지는 서프라이즈 효과가 있지만 뒤진 상황에서 리스크가 큽니다.",
    ],
  },
  {
    score: "3-3",
    situation: "동점, 자신의 서브",
    description:
      "중반 동점 상황입니다. 여기서 미니브레이크를 허용하면 흐름이 넘어갑니다.",
    options: ["에이스를 노리는 강한 서브", "평소와 다른 코스 변경", "안정적인 1st 서브 확률 올리기"],
    points: [1, 2, 3],
    feedback: [
      "에이스를 노리면 더블폴트 리스크가 높아집니다. 동점에서는 안정성이 우선입니다.",
      "코스 변경은 좋은 전략이지만 익숙하지 않은 패턴은 실수를 유발할 수 있습니다.",
      "1st 서브 확률을 높이면 서브 게임 주도권을 유지할 수 있습니다. 최적의 선택!",
    ],
  },
  {
    score: "4-5",
    situation: "뒤진 상황, 상대 서브 리턴",
    description:
      "4-5로 뒤진 긴박한 상황입니다. 이 포인트를 잃으면 매치포인트를 내줍니다.",
    options: ["올인 공격 리턴", "랠리를 유도하는 중립 리턴", "드롭샷으로 의표 찌르기"],
    points: [1, 3, 2],
    feedback: [
      "올인 공격은 압박감에서 비롯된 조급함입니다. 에러 확률이 매우 높습니다.",
      "랠리를 유도하면 상대에게도 압박을 전이시킬 수 있습니다. 가장 현명한 선택!",
      "드롭샷은 창의적이지만 이 상황에서는 도박에 가깝습니다.",
    ],
  },
  {
    score: "5-5",
    situation: "자신의 서브",
    description:
      "5-5 동점! 다음 2포인트가 승부를 결정합니다. 서브 전략을 세우세요.",
    options: ["가장 자신있는 패턴 반복", "상대 허점을 노리는 새로운 시도", "강한 서브로 밀어붙이기"],
    points: [3, 1, 2],
    feedback: [
      "가장 익숙한 패턴이 압박 상황에서 가장 안정적입니다. 최적의 선택!",
      "새로운 시도는 긴장 상황에서 실행력이 크게 떨어집니다.",
      "강하게 밀어붙이면 더블폴트 위험이 높아집니다. 자신있는 패턴이 더 효과적입니다.",
    ],
  },
  {
    score: "6-5",
    situation: "매치포인트, 자신의 서브",
    description:
      "매치포인트를 잡았습니다! 이 서브 하나로 승리할 수 있습니다. 어떤 선택을 하시겠습니까?",
    options: ["가장 자신있는 서브 패턴", "상대 백핸드 약점 공략", "확실한 안전 서브"],
    points: [3, 2, 1],
    feedback: [
      "매치포인트에서는 자신감 있는 패턴이 최고의 무기입니다. 최적의 선택!",
      "약점 공략은 좋은 전략이지만 매치포인트의 긴장감에서 정확도가 떨어질 수 있습니다.",
      "너무 안전한 서브는 상대에게 공격 기회를 줍니다. 매치포인트에서는 자신감이 핵심입니다.",
    ],
  },
  {
    score: "5-6",
    situation: "매치포인트 다운, 상대 서브 리턴",
    description:
      "상대의 매치포인트! 생존을 위한 리턴을 해야 합니다. 이 순간의 선택은?",
    options: ["일단 리턴을 확실히 넣기", "공격적 리턴으로 반격", "높은 로브로 시간 벌기"],
    points: [3, 2, 1],
    feedback: [
      "리턴을 확실히 넣는 것이 생존의 첫 번째 조건입니다. 압박은 서브를 넣는 상대에게도 있습니다. 최적의 선택!",
      "공격적 리턴이 성공하면 전세 역전이지만 에러 확률이 높은 도박입니다.",
      "로브는 상대에게 쉬운 스매시를 허용할 수 있습니다. 가장 위험한 선택입니다.",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Grade                                                              */
/* ------------------------------------------------------------------ */

interface Grade {
  label: string;
  title: string;
  color: string;
  bg: string;
  border: string;
  advice: string;
}


function getGrade(score: number): Grade {
  if (score >= 19)
    return {
      label: "S",
      title: "타이브레이크 마스터",
      color: "text-violet-600",
      bg: "bg-gradient-to-br from-violet-500 to-purple-600",
      border: "border-violet-300",
      advice:
        "뛰어난 판단력입니다! 압박 상황에서도 최적의 선택을 할 수 있는 멘탈을 갖추고 있습니다. 실전에서도 이 판단력을 유지하세요.",
    };
  if (score >= 15)
    return {
      label: "A",
      title: "안정적 플레이어",
      color: "text-purple-600",
      bg: "bg-gradient-to-br from-purple-500 to-indigo-500",
      border: "border-purple-300",
      advice:
        "대부분의 상황에서 좋은 선택을 하고 있습니다. 몇몇 압박 순간에서 조급함을 줄이면 한 단계 더 올라갈 수 있습니다.",
    };
  if (score >= 11)
    return {
      label: "B",
      title: "발전 중인 선수",
      color: "text-indigo-600",
      bg: "bg-gradient-to-br from-indigo-500 to-blue-500",
      border: "border-indigo-300",
      advice:
        "기본적인 판단력은 있지만 압박이 커질수록 리스크가 높은 선택을 하는 경향이 있습니다. 안정성을 우선시하는 연습이 필요합니다.",
    };
  return {
    label: "C",
    title: "멘탈 훈련 필요",
    color: "text-blue-600",
    bg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    border: "border-blue-300",
    advice:
      "압박 상황에서 감정적인 선택을 하는 경향이 있습니다. 포인트 사이 루틴을 만들고 안정적인 플레이 패턴을 먼저 확립하세요.",
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Phase = "intro" | "playing" | "feedback" | "result";

export default function TiebreakPressureSimulatorPage() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const total = scores.reduce((a, b) => a + b, 0);
  const progress = ((current + (phase === "result" ? 1 : 0)) / scenarios.length) * 100;

  /* handlers */
  const handleStart = () => {
    setPhase("playing");
    setCurrent(0);
    setScores([]);
    setSelectedOption(null);
  };

  const handleSelect = (idx: number) => {
    if (phase !== "playing") return;
    const pts = scenarios[current].points[idx];
    setSelectedOption(idx);
    setScores((prev) => [...prev, pts]);
    setPhase("feedback");
  };

  const handleNext = () => {
    if (current + 1 >= scenarios.length) {
      setPhase("result");
    } else {
      setCurrent((prev) => prev + 1);
      setSelectedOption(null);
      setPhase("playing");
    }
  };

  const handleRetry = () => {
    setPhase("intro");
    setCurrent(0);
    setScores([]);
    setSelectedOption(null);
  };

  /* ---------------------------------------------------------------- */
  /*  Intro                                                            */
  /* ---------------------------------------------------------------- */
  if (phase === "intro") {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12">
        <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Tiebreak Simulator
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            타이브레이크 압박 시뮬레이터
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-gray-700">
            7가지 타이브레이크 핵심 상황에서 전술 판단력을 테스트합니다. 각 상황에서 최적의 선택을 찾아
            점수를 획득하세요. 압박 속에서 얼마나 현명한 판단을 내릴 수 있는지 확인해 보세요.
          </p>

          <div className="mx-auto mt-6 flex max-w-sm flex-col gap-3 text-sm text-gray-600">
            <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                7
              </span>
              <span>시나리오</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                3
              </span>
              <span>선택지 / 시나리오당</span>
            </div>
            <div className="flex items-center gap-3 rounded-xl bg-white/70 px-4 py-2.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-xs font-bold text-white">
                21
              </span>
              <span>만점</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-8 py-3.5 text-base font-semibold text-white shadow-md transition hover:from-violet-700 hover:to-purple-700"
          >
            시작
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </section>
      </main>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Result                                                           */
  /* ---------------------------------------------------------------- */
  if (phase === "result") {
    const grade = getGrade(total);
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12">
        {/* progress bar full */}
        <div className="h-2 w-full overflow-hidden rounded-full bg-violet-100">
          <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-500"
            style={{ width: "100%" }} />
        </div>

        <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-purple-50 p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Result
          </p>
          <h2 className="mt-3 text-2xl font-bold text-gray-900">시뮬레이션 결과</h2>

          {/* score circle */}
          <div className="mx-auto mt-8 flex flex-col items-center gap-2">
            <div
              className={`flex h-28 w-28 items-center justify-center rounded-full ${grade.bg} text-white shadow-lg`}
            >
              <span className="text-4xl font-extrabold">{grade.label}</span>
            </div>
            <p className={`mt-2 text-xl font-bold ${grade.color}`}>{grade.title}</p>
            <p className="text-2xl font-bold text-gray-900">
              {total} <span className="text-base font-normal text-gray-500">/ 21</span>
            </p>
          </div>

          {/* score bar */}
          <div className="mx-auto mt-6 max-w-xs">
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-700"
                style={{ width: `${(total / 21) * 100}%` }}
              />
            </div>
          </div>

          {/* advice */}
          <div className={`mx-auto mt-8 max-w-lg rounded-2xl border ${grade.border} bg-white p-6 text-left shadow-sm`}>
            <h3 className="text-sm font-semibold text-violet-600">멘탈 분석</h3>
            <p className="mt-2 text-sm leading-6 text-gray-700">{grade.advice}</p>
          </div>

          {/* per-scenario breakdown */}
          <div className="mx-auto mt-8 max-w-lg space-y-2 text-left">
            <h3 className="mb-3 text-sm font-semibold text-gray-500">시나리오별 점수</h3>
            {scenarios.map((s, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-2.5 text-sm">
                <span className="shrink-0 font-mono text-xs text-gray-400">#{i + 1}</span>
                <span className="min-w-0 flex-1 truncate text-gray-700">
                  {s.score} {s.situation}
                </span>
                <span
                  className={`shrink-0 font-bold ${
                    scores[i] === 3
                      ? "text-violet-600"
                      : scores[i] === 2
                        ? "text-purple-500"
                        : "text-gray-400"
                  }`}
                >
                  {scores[i]}pt
                </span>
              </div>
            ))}
          </div>

          {/* actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleRetry}
              className="rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:from-violet-700 hover:to-purple-700"
            >
              다시 도전
            </button>
            <Link
              href="/utility/mental-training"
              className="rounded-full border border-violet-300 px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-50"
            >
              멘탈 훈련으로 이동
            </Link>
            <Link
              href="/utility"
              className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              유틸리티 목록
            </Link>
          </div>
        </section>
      </main>
    );
  }

  /* ---------------------------------------------------------------- */
  /*  Playing / Feedback                                               */
  /* ---------------------------------------------------------------- */
  const scenario = scenarios[current];

  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12">
      {/* progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-violet-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* header */}
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-violet-600">
          시나리오 {current + 1} / {scenarios.length}
        </span>
        <span className="font-semibold text-gray-600">
          점수: {total} <span className="text-gray-400">/ 21</span>
        </span>
      </div>

      {/* scenario card */}
      <section className="rounded-3xl border border-violet-200 bg-gradient-to-br from-violet-50 via-white to-purple-50 p-6 shadow-sm sm:p-8">
        {/* score badge */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-violet-600 px-4 py-1.5 text-sm font-bold text-white">
            {scenario.score}
          </span>
          <span className="rounded-full border border-violet-300 bg-white px-4 py-1.5 text-sm font-semibold text-violet-700">
            {scenario.situation}
          </span>
        </div>

        <p className="text-base leading-7 text-gray-700">{scenario.description}</p>

        {/* options */}
        <div className="mt-6 flex flex-col gap-3">
          {scenario.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const inFeedback = phase === "feedback";
            const pts = scenario.points[idx];

            let ringClass = "border-gray-200 hover:border-violet-400 hover:bg-violet-50/50";
            if (inFeedback && isSelected) {
              ringClass =
                pts === 3
                  ? "border-violet-500 bg-violet-50 ring-2 ring-violet-300"
                  : pts === 2
                    ? "border-purple-400 bg-purple-50 ring-2 ring-purple-200"
                    : "border-gray-400 bg-gray-50 ring-2 ring-gray-200";
            } else if (inFeedback && pts === 3) {
              ringClass = "border-violet-300 bg-violet-50/60";
            } else if (inFeedback) {
              ringClass = "border-gray-200 opacity-60";
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={inFeedback}
                className={`flex items-center gap-4 rounded-2xl border px-5 py-4 text-left transition ${ringClass} ${
                  inFeedback ? "cursor-default" : "cursor-pointer"
                }`}
              >
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold ${
                    inFeedback && isSelected
                      ? pts === 3
                        ? "bg-violet-600 text-white"
                        : pts === 2
                          ? "bg-purple-500 text-white"
                          : "bg-gray-400 text-white"
                      : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="flex-1 text-sm font-medium text-gray-800">{option}</span>
                {inFeedback && (
                  <span
                    className={`shrink-0 text-xs font-bold ${
                      pts === 3 ? "text-violet-600" : pts === 2 ? "text-purple-500" : "text-gray-400"
                    }`}
                  >
                    {pts}pt
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* feedback panel */}
        {phase === "feedback" && selectedOption !== null && (
          <div className="mt-6 rounded-2xl border border-violet-200 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-violet-600">
              {scenarios[current].points[selectedOption] === 3
                ? "최적의 선택!"
                : scenarios[current].points[selectedOption] === 2
                  ? "괜찮은 선택"
                  : "아쉬운 선택"}
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-700">
              {scenario.feedback[selectedOption]}
            </p>
            <button
              onClick={handleNext}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:from-violet-700 hover:to-purple-700"
            >
              {current + 1 >= scenarios.length ? "결과 보기" : "다음 시나리오"}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
