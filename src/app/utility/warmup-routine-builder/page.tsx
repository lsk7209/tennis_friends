"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ──────────────────────────── types ──────────────────────────── */

type TimeOption = 5 | 10 | 15 | 20;
type MatchType = "단식" | "복식" | "연습";
type Condition = "좋음" | "보통" | "뻣뻣함";
type Focus = "전신" | "상체" | "하체" | "어깨";

interface Exercise {
  name: string;
  minDuration: number;
  maxDuration: number;
  description: string;
  tags: Focus[];
}

interface RoutineStep {
  order: number;
  name: string;
  duration: number;
  sets: number;
  description: string;
}

/* ──────────────────────────── exercise pool ──────────────────── */

const EXERCISES: Exercise[] = [
  {
    name: "조깅/제자리 뛰기",
    minDuration: 1,
    maxDuration: 3,
    description: "가볍게 심박수를 올리며 전신 혈류를 촉진합니다. 무릎을 살짝 높이 올려주세요.",
    tags: ["전신", "하체"],
  },
  {
    name: "팔 돌리기/어깨 풀기",
    minDuration: 1,
    maxDuration: 2,
    description: "양팔을 크게 원을 그리며 돌려 어깨 관절의 가동 범위를 넓힙니다.",
    tags: ["상체", "어깨", "전신"],
  },
  {
    name: "런지 워킹",
    minDuration: 2,
    maxDuration: 2,
    description: "한 발씩 앞으로 깊게 내딛으며 허벅지와 엉덩이 근육을 깨웁니다.",
    tags: ["하체", "전신"],
  },
  {
    name: "힙 오프너",
    minDuration: 1,
    maxDuration: 2,
    description: "옆으로 큰 원을 그리듯 고관절을 열어 옆 움직임을 부드럽게 만듭니다.",
    tags: ["하체", "전신"],
  },
  {
    name: "사이드 셔플",
    minDuration: 2,
    maxDuration: 2,
    description: "사이드라인을 따라 좌우로 빠르게 이동하며 코트 커버 감각을 잡습니다.",
    tags: ["하체", "전신"],
  },
  {
    name: "스플릿 스텝 연습",
    minDuration: 2,
    maxDuration: 2,
    description: "가볍게 점프 후 양발로 착지하는 동작을 반복하여 첫 발 반응을 훈련합니다.",
    tags: ["하체", "전신"],
  },
  {
    name: "가벼운 랠리",
    minDuration: 3,
    maxDuration: 5,
    description: "서비스 라인 안에서 짧은 공으로 시작해 임팩트 감각과 리듬을 맞춥니다.",
    tags: ["전신", "상체"],
  },
  {
    name: "서브 연습",
    minDuration: 2,
    maxDuration: 3,
    description: "가볍게 토스를 올리고 50-70% 힘으로 서브 모션을 리허설합니다.",
    tags: ["상체", "어깨", "전신"],
  },
  {
    name: "고관절 스트레칭",
    minDuration: 2,
    maxDuration: 2,
    description: "동적 런지 자세에서 고관절을 앞뒤로 부드럽게 열어줍니다.",
    tags: ["하체", "전신"],
  },
  {
    name: "햄스트링 동적 스트레칭",
    minDuration: 2,
    maxDuration: 2,
    description: "다리를 앞으로 들어올리며 햄스트링을 동적으로 늘려줍니다.",
    tags: ["하체", "전신"],
  },
];

/* ──────────────────────────── routine generator ──────────────── */

function generateRoutine(
  time: TimeOption,
  matchType: MatchType,
  condition: Condition,
  focus: Focus,
): RoutineStep[] {
  // Score and filter exercises by relevance
  let pool = EXERCISES.map((ex) => {
    let score = 0;
    if (ex.tags.includes(focus)) score += 3;
    if (focus === "전신") score += 1; // slight boost for full-body focus

    // Match type preferences
    if (matchType === "단식" && (ex.name.includes("셔플") || ex.name.includes("스플릿"))) score += 2;
    if (matchType === "복식" && (ex.name.includes("랠리") || ex.name.includes("서브"))) score += 2;
    if (matchType === "연습" && (ex.name.includes("랠리") || ex.name.includes("스트레칭"))) score += 2;

    // Condition adjustments
    if (condition === "뻣뻣함" && (ex.name.includes("스트레칭") || ex.name.includes("오프너") || ex.name.includes("풀기"))) score += 3;
    if (condition === "좋음" && (ex.name.includes("셔플") || ex.name.includes("랠리") || ex.name.includes("서브"))) score += 2;

    return { exercise: ex, score };
  });

  // Sort by score descending, then add shuffle within same score
  pool.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return Math.random() - 0.5;
  });

  // Always start with a warm-up cardio exercise
  const jogging = pool.find((p) => p.exercise.name === "조깅/제자리 뛰기");
  const rest = pool.filter((p) => p.exercise.name !== "조깅/제자리 뛰기");

  const ordered = jogging ? [jogging, ...rest] : rest;

  // Greedily pick exercises that fit the time budget
  let remaining: number = time;
  const selected: RoutineStep[] = [];
  let order = 1;

  for (const item of ordered) {
    if (remaining <= 0) break;
    const ex = item.exercise;

    // Determine duration based on remaining time and condition
    let duration: number;
    if (condition === "뻣뻣함") {
      duration = Math.min(ex.maxDuration, remaining);
    } else if (condition === "좋음") {
      duration = Math.min(ex.minDuration, remaining);
    } else {
      duration = Math.min(Math.ceil((ex.minDuration + ex.maxDuration) / 2), remaining);
    }

    if (duration < ex.minDuration) {
      // Skip if we can't fit even the minimum
      if (remaining >= 1 && selected.length > 0) {
        // Give remaining time to last exercise
        selected[selected.length - 1].duration += remaining;
        remaining = 0;
      }
      continue;
    }

    const sets = duration >= 3 ? 2 : 1;

    selected.push({
      order,
      name: ex.name,
      duration,
      sets,
      description: ex.description,
    });

    remaining -= duration;
    order++;
  }

  // If there's leftover time, distribute to the last exercise
  if (remaining > 0 && selected.length > 0) {
    selected[selected.length - 1].duration += remaining;
  }

  return selected;
}

/* ──────────────────────────── option button ──────────────────── */

function OptionButton<T extends string | number>({
  label,
  value,
  selected,
  onSelect,
}: {
  label: string;
  value: T;
  selected: T | null;
  onSelect: (v: T) => void;
}) {
  const isActive = selected === value;
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all ${
        isActive
          ? "border-orange-500 bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-700 hover:border-orange-300 hover:bg-orange-50"
      }`}
    >
      {label}
    </button>
  );
}

/* ──────────────────────────── main page ──────────────────────── */

export default function WarmupRoutineBuilderPage() {
  const [time, setTime] = useState<TimeOption | null>(null);
  const [matchType, setMatchType] = useState<MatchType | null>(null);
  const [condition, setCondition] = useState<Condition | null>(null);
  const [focus, setFocus] = useState<Focus | null>(null);
  const [routine, setRoutine] = useState<RoutineStep[] | null>(null);

  const allSelected = time !== null && matchType !== null && condition !== null && focus !== null;

  const handleGenerate = useCallback(() => {
    if (!allSelected) return;
    setRoutine(generateRoutine(time, matchType, condition, focus));
  }, [time, matchType, condition, focus, allSelected]);

  const handleReset = useCallback(() => {
    setRoutine(null);
  }, []);

  const totalTime = routine?.reduce((sum, s) => sum + s.duration, 0) ?? 0;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      {/* ── Hero ── */}
      <section className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">
          Training Utility
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">워밍업 루틴 빌더</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          가용 시간, 경기 유형, 컨디션, 집중 부위를 선택하면 나에게 맞는 워밍업 루틴을 자동으로
          생성해드립니다. 경기 전 3분이면 충분합니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/cooldown-routine-builder"
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            쿨다운 루틴 보기
          </Link>
          <Link
            href="/utility/focus-training"
            className="rounded-full border border-rose-600 px-5 py-2.5 text-sm font-semibold text-rose-700"
          >
            집중 훈련과 연결
          </Link>
        </div>
      </section>

      {/* ── Selection Form ── */}
      {!routine && (
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">루틴 설정</h2>
          <p className="mt-1 text-sm text-gray-500">4가지를 선택한 뒤 루틴을 생성하세요.</p>

          {/* 가용 시간 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">⏱ 가용 시간</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {([5, 10, 15, 20] as TimeOption[]).map((v) => (
                <OptionButton key={v} label={`${v}분`} value={v} selected={time} onSelect={setTime} />
              ))}
            </div>
          </div>

          {/* 경기 유형 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">🎾 경기 유형</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["단식", "복식", "연습"] as MatchType[]).map((v) => (
                <OptionButton key={v} label={v} value={v} selected={matchType} onSelect={setMatchType} />
              ))}
            </div>
          </div>

          {/* 컨디션 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">💪 컨디션</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["좋음", "보통", "뻣뻣함"] as Condition[]).map((v) => (
                <OptionButton key={v} label={v} value={v} selected={condition} onSelect={setCondition} />
              ))}
            </div>
          </div>

          {/* 집중 부위 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">🎯 집중 부위</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(["전신", "상체", "하체", "어깨"] as Focus[]).map((v) => (
                <OptionButton key={v} label={v} value={v} selected={focus} onSelect={setFocus} />
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            type="button"
            disabled={!allSelected}
            onClick={handleGenerate}
            className={`mt-8 w-full rounded-2xl px-6 py-3.5 text-base font-bold transition-all ${
              allSelected
                ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg hover:from-orange-600 hover:to-rose-600"
                : "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            루틴 생성
          </button>
        </section>
      )}

      {/* ── Generated Routine ── */}
      {routine && (
        <>
          {/* Summary bar */}
          <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-orange-200 bg-gradient-to-r from-orange-50 to-rose-50 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white">
                {totalTime}
              </span>
              <span className="text-sm font-semibold text-gray-800">분 루틴</span>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-orange-700 shadow-sm">
              {matchType}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-rose-700 shadow-sm">
              컨디션: {condition}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              집중: {focus}
            </span>
          </section>

          {/* Steps */}
          <section className="grid gap-4 sm:grid-cols-2">
            {routine.map((step) => (
              <article
                key={step.order}
                className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* numbered badge */}
                <span className="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-sm font-bold text-white shadow">
                  {step.order}
                </span>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">{step.name}</h3>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-sm font-semibold text-orange-600">{step.duration}분</span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="text-sm text-gray-500">{step.sets}세트</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">{step.description}</p>
                </div>
              </article>
            ))}
          </section>

          {/* Reset button */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-orange-400 px-6 py-3 text-sm font-bold text-orange-600 transition-colors hover:bg-orange-50"
            >
              다시 만들기
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-orange-600 hover:to-rose-600"
            >
              같은 설정으로 재생성
            </button>
          </div>
        </>
      )}
    </main>
  );
}
