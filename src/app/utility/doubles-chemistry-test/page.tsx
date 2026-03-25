"use client";

import { useState } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface Question {
  question: string;
  options: [string, string, string]; // 3pt, 2pt, 1pt
}

const questions: Question[] = [
  {
    question: "파트너와 포칭 신호를 주고받나요?",
    options: ["항상 주고받는다", "가끔 주고받는다", "거의 안 한다"],
  },
  {
    question: "실점 후 파트너에게 어떻게 반응하나요?",
    options: ["격려한다", "특별한 반응 없다", "불만을 표시한다"],
  },
  {
    question: "서브 게임에서 역할 분담이 명확한가요?",
    options: ["매우 명확하다", "대충 정해져 있다", "불분명하다"],
  },
  {
    question: "로브 대처 시 누가 올라갈지 정해져 있나요?",
    options: ["항상 정해져 있다", "그때그때 다르다", "자주 혼란스럽다"],
  },
  {
    question: "경기 중 전술 논의를 하나요?",
    options: ["체인지오버마다 한다", "가끔 한다", "거의 안 한다"],
  },
  {
    question: "파트너의 약점을 커버해주나요?",
    options: ["적극적으로 커버한다", "노력 중이다", "각자 알아서 한다"],
  },
  {
    question: "서브 리턴 시 포지셔닝이 조화로운가요?",
    options: ["잘 맞는다", "보통이다", "자주 겹친다"],
  },
  {
    question: "파트너와 플레이 템포가 맞나요?",
    options: ["완벽히 맞는다", "대체로 맞는다", "맞지 않는다"],
  },
  {
    question: "위기 상황에서 분위기 전환을 하나요?",
    options: ["둘 다 잘한다", "한 명만 한다", "둘 다 못한다"],
  },
  {
    question: "경기 후 피드백을 주고받나요?",
    options: ["항상 주고받는다", "가끔 주고받는다", "거의 안 한다"],
  },
];

interface Grade {
  label: string;
  title: string;
  color: string;
  bg: string;
  border: string;
  advice: string;
}


function getGrade(score: number): Grade {
  if (score >= 26)
    return {
      label: "S",
      title: "환상의 파트너",
      color: "text-fuchsia-600",
      bg: "bg-gradient-to-br from-fuchsia-500 to-pink-500",
      border: "border-fuchsia-300",
      advice:
        "이미 훌륭한 팀워크를 갖추고 있습니다! 지금의 소통 방식을 유지하면서 더 높은 수준의 전술 패턴을 함께 연습해 보세요. 대회 출전도 적극 추천합니다.",
    };
  if (score >= 20)
    return {
      label: "A",
      title: "좋은 궁합",
      color: "text-violet-600",
      bg: "bg-gradient-to-br from-violet-500 to-indigo-500",
      border: "border-violet-300",
      advice:
        "기본적인 호흡은 잘 맞고 있습니다. 포칭 신호 체계를 더 구체적으로 만들고, 위기 상황 대처 루틴을 함께 정해 두면 한 단계 더 올라갈 수 있습니다.",
    };
  if (score >= 14)
    return {
      label: "B",
      title: "발전 가능",
      color: "text-amber-600",
      bg: "bg-gradient-to-br from-amber-500 to-orange-500",
      border: "border-amber-300",
      advice:
        "잠재력은 충분합니다. 경기 전 역할 분담을 명확히 하고, 체인지오버 때 짧게라도 전술 대화를 나누는 습관을 들여 보세요. 연습 경기에서 소통 연습을 꾸준히 하면 빠르게 좋아질 수 있습니다.",
    };
  return {
    label: "C",
    title: "소통이 필요해요",
    color: "text-rose-600",
    bg: "bg-gradient-to-br from-rose-500 to-red-500",
    border: "border-rose-300",
    advice:
      "파트너와의 의사소통을 처음부터 다시 맞춰 보는 것을 추천합니다. 간단한 신호 체계(포칭 여부, 로브 대처)부터 정하고, 실점 후 서로 격려하는 루틴을 만들어 보세요. 작은 변화가 큰 차이를 만듭니다.",
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

type Screen = "intro" | "quiz" | "result";

export default function DoublesChemistryTestPage() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  /* handlers */
  const startQuiz = () => {
    setAnswers([]);
    setCurrent(0);
    setScreen("quiz");
  };

  const selectOption = (points: number) => {
    const next = [...answers, points];
    setAnswers(next);
    if (next.length < questions.length) {
      setCurrent(current + 1);
    } else {
      setScreen("result");
    }
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const grade = getGrade(totalScore);
  const progress = ((current + 1) / questions.length) * 100;

  /* ---- Intro ---- */
  if (screen === "intro") {
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12">
        <section className="rounded-3xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 shadow-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
            Doubles Chemistry Test
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            복식 궁합 테스트
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-700">
            10가지 질문으로 복식 파트너와의 궁합 점수를 확인하세요. 역할 분담,
            커뮤니케이션, 전술 조화까지 — 우리 팀의 강점과 개선점을 한눈에 볼 수
            있습니다.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["10문항", "약 2분 소요", "즉시 결과 확인"].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-fuchsia-100 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800"
              >
                {item}
              </div>
            ))}
          </div>

          <button
            onClick={startQuiz}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-fuchsia-600 px-8 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-fuchsia-700 active:scale-[0.97]"
          >
            시작하기
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </section>

        <div className="flex flex-wrap gap-3 px-2">
          <Link
            href="/utility/partner-compatibility-check"
            className="rounded-full border border-fuchsia-200 px-5 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50"
          >
            파트너 체크 보기
          </Link>
          <Link
            href="/utility/doubles-positioning-simulator"
            className="rounded-full border border-fuchsia-200 px-5 py-2 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50"
          >
            복식 포지셔닝 보기
          </Link>
        </div>
      </main>
    );
  }

  /* ---- Quiz ---- */
  if (screen === "quiz") {
    const q = questions[current];
    return (
      <main className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-12">
        {/* progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>
              질문 {current + 1} / {questions.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* question card */}
        <section className="rounded-3xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 shadow-sm md:p-10">
          <p className="text-sm font-semibold text-fuchsia-600">
            Q{current + 1}
          </p>
          <h2 className="mt-2 text-xl font-bold text-gray-900 md:text-2xl">
            {q.question}
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {q.options.map((option, idx) => {
              const points = 3 - idx; // 3, 2, 1
              return (
                <button
                  key={option}
                  onClick={() => selectOption(points)}
                  className="group w-full rounded-2xl border border-gray-200 bg-white px-6 py-4 text-left text-sm font-medium text-gray-800 shadow-sm transition hover:border-fuchsia-300 hover:bg-fuchsia-50 hover:shadow-md active:scale-[0.98]"
                >
                  <span className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-bold text-gray-500 transition group-hover:bg-fuchsia-200 group-hover:text-fuchsia-700">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  {option}
                </button>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  /* ---- Result ---- */
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-12">
      {/* grade card */}
      <section
        className={`relative overflow-hidden rounded-3xl border ${grade.border} bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 shadow-sm md:p-12`}
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-fuchsia-100/40 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-pink-100/40 blur-3xl" />

        <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
          Test Result
        </p>
        <h1 className="relative mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
          복식 궁합 결과
        </h1>

        {/* score */}
        <div className="relative mt-8 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
          {/* grade badge */}
          <div
            className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl ${grade.bg} text-4xl font-extrabold text-white shadow-lg`}
          >
            {grade.label}
          </div>

          <div>
            <p className={`text-2xl font-bold ${grade.color}`}>
              {grade.title}
            </p>
            <p className="mt-1 text-sm text-gray-500">
              총점{" "}
              <span className="font-bold text-gray-900">{totalScore}</span> /{" "}
              {questions.length * 3}점
            </p>
          </div>
        </div>

        {/* score bar */}
        <div className="relative mt-6">
          <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className={`h-full rounded-full ${grade.bg} transition-all duration-700 ease-out`}
              style={{
                width: `${(totalScore / (questions.length * 3)) * 100}%`,
              }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>10</span>
            <span>14</span>
            <span>20</span>
            <span>26</span>
            <span>30</span>
          </div>
        </div>
      </section>

      {/* advice */}
      <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">맞춤 조언</h2>
        <p className="mt-4 text-sm leading-7 text-gray-700">{grade.advice}</p>
      </section>

      {/* grade table */}
      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-gray-900">등급 기준</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {(
            [
              ["S", "26–30점", "환상의 파트너", "from-fuchsia-500 to-pink-500"],
              ["A", "20–25점", "좋은 궁합", "from-violet-500 to-indigo-500"],
              ["B", "14–19점", "발전 가능", "from-amber-500 to-orange-500"],
              ["C", "10–13점", "소통이 필요해요", "from-rose-500 to-red-500"],
            ] as const
          ).map(([g, range, title, gradient]) => (
            <div
              key={g}
              className={`flex items-center gap-3 rounded-xl border bg-white p-3 ${
                grade.label === g ? "ring-2 ring-fuchsia-400" : ""
              }`}
            >
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${gradient} text-sm font-bold text-white`}
              >
                {g}
              </span>
              <div>
                <p className="text-sm font-semibold text-gray-900">{title}</p>
                <p className="text-xs text-gray-500">{range}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* actions */}
      <div className="flex flex-wrap gap-3 px-2">
        <button
          onClick={startQuiz}
          className="rounded-full bg-fuchsia-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-fuchsia-700 active:scale-[0.97]"
        >
          다시 테스트하기
        </button>
        <Link
          href="/utility/partner-compatibility-check"
          className="rounded-full border border-fuchsia-200 px-6 py-2.5 text-sm font-medium text-fuchsia-700 transition hover:bg-fuchsia-50"
        >
          파트너 체크 보기
        </Link>
        <Link
          href="/utility"
          className="rounded-full border border-gray-200 px-6 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
        >
          유틸리티 목록
        </Link>
      </div>
    </main>
  );
}
