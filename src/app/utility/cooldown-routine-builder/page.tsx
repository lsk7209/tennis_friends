"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ──────────────────────────── types ──────────────────────────── */

type Intensity = "가벼운 연습" | "보통 경기" | "강도 높은 경기" | "대회";
type BodyPart = "전신" | "어깨·팔" | "허리·코어" | "다리";
type TimeOption = 5 | 10 | 15;

interface Exercise {
  name: string;
  duration: number; // seconds
  description: string;
  focusArea: string;
  tags: BodyPart[];
  /** higher = more likely at higher intensity */
  intensityWeight: number;
}

interface RoutineStep {
  order: number;
  name: string;
  duration: string;
  description: string;
  focusArea: string;
}

/* ──────────────────────────── exercise pool ──────────────────── */

const EXERCISES: Exercise[] = [
  {
    name: "가벼운 걷기",
    duration: 120,
    description:
      "코트를 천천히 걸으며 심박수를 서서히 낮춥니다. 팔을 자연스럽게 흔들어 전신 혈류를 정리합니다.",
    focusArea: "심폐·전신",
    tags: ["전신", "다리"],
    intensityWeight: 3,
  },
  {
    name: "대퇴사두근 스트레칭",
    duration: 60,
    description:
      "한 발로 서서 반대쪽 발목을 잡고 허벅지 앞쪽을 늘립니다. 각 다리 30초씩 유지합니다.",
    focusArea: "허벅지 앞쪽",
    tags: ["다리", "전신"],
    intensityWeight: 2,
  },
  {
    name: "햄스트링 스트레칭",
    duration: 60,
    description:
      "한 발을 앞으로 내밀고 상체를 숙여 허벅지 뒤쪽을 늘립니다. 각 다리 30초씩 천천히 진행합니다.",
    focusArea: "허벅지 뒤쪽",
    tags: ["다리", "전신"],
    intensityWeight: 2,
  },
  {
    name: "종아리 스트레칭",
    duration: 60,
    description:
      "벽이나 네트 포스트에 손을 대고 한 발을 뒤로 뻗어 종아리를 늘립니다. 각 30초씩 유지합니다.",
    focusArea: "종아리",
    tags: ["다리", "전신"],
    intensityWeight: 2,
  },
  {
    name: "어깨 스트레칭",
    duration: 60,
    description:
      "한 팔을 가슴 앞으로 뻗고 반대 팔로 당겨 어깨 뒤쪽 근육을 이완합니다. 각 30초씩 유지합니다.",
    focusArea: "어깨",
    tags: ["어깨·팔", "전신"],
    intensityWeight: 2,
  },
  {
    name: "삼두근 스트레칭",
    duration: 60,
    description:
      "한 팔을 머리 위로 올려 등 뒤로 접고, 반대 손으로 팔꿈치를 부드럽게 당깁니다. 각 30초씩 진행합니다.",
    focusArea: "삼두근",
    tags: ["어깨·팔", "전신"],
    intensityWeight: 1,
  },
  {
    name: "고관절 스트레칭",
    duration: 60,
    description:
      "런지 자세에서 골반을 앞으로 밀어 고관절 앞쪽을 열어줍니다. 좌우 옆 움직임이 많은 테니스에 필수입니다.",
    focusArea: "고관절",
    tags: ["다리", "허리·코어", "전신"],
    intensityWeight: 2,
  },
  {
    name: "허리 비틀기",
    duration: 60,
    description:
      "바닥에 앉아 한쪽 다리를 꼬고 반대 방향으로 상체를 천천히 돌립니다. 허리와 척추 주변 긴장을 풀어줍니다.",
    focusArea: "허리·척추",
    tags: ["허리·코어", "전신"],
    intensityWeight: 2,
  },
  {
    name: "목 스트레칭",
    duration: 30,
    description:
      "고개를 좌우·앞뒤로 천천히 기울여 목과 승모근 긴장을 해소합니다. 각 방향 7~8초 유지합니다.",
    focusArea: "목·승모근",
    tags: ["어깨·팔", "전신"],
    intensityWeight: 1,
  },
  {
    name: "전완근 스트레칭",
    duration: 60,
    description:
      "팔을 앞으로 뻗고 반대 손으로 손등을 당겨 전완 안쪽을 늘립니다. 테니스 엘보 예방에 효과적입니다.",
    focusArea: "전완·손목",
    tags: ["어깨·팔", "전신"],
    intensityWeight: 2,
  },
  {
    name: "깊은 호흡 & 명상",
    duration: 120,
    description:
      "눈을 감고 코로 4초 들이쉬고, 7초 참고, 8초 내쉽니다. 부교감신경을 활성화해 회복을 촉진합니다.",
    focusArea: "정신·호흡",
    tags: ["전신"],
    intensityWeight: 3,
  },
  {
    name: "폼롤러 종아리/대퇴",
    duration: 120,
    description:
      "폼롤러 위에 종아리와 허벅지를 올려 천천히 굴립니다. 근막을 이완하고 혈류 순환을 도와 회복을 빠르게 합니다.",
    focusArea: "종아리·허벅지 근막",
    tags: ["다리", "전신"],
    intensityWeight: 3,
  },
];

/* ──────────────────────────── routine generator ──────────────── */

function formatDuration(seconds: number): string {
  if (seconds >= 60) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return secs > 0 ? `${mins}분 ${secs}초` : `${mins}분`;
  }
  return `${seconds}초`;
}

function generateRoutine(
  intensity: Intensity,
  bodyPart: BodyPart,
  time: TimeOption,
): RoutineStep[] {
  const budgetSeconds = time * 60;

  // Score exercises
  const scored = EXERCISES.map((ex) => {
    let score = 0;

    // Body part relevance
    if (ex.tags.includes(bodyPart)) score += 5;
    if (bodyPart === "전신") score += 2;

    // Intensity preferences
    const intensityMap: Record<Intensity, number> = {
      "가벼운 연습": 1,
      "보통 경기": 2,
      "강도 높은 경기": 3,
      "대회": 4,
    };
    const level = intensityMap[intensity];

    // Higher intensity = prefer walking, breathing, foam roller more
    if (level >= 3 && ex.intensityWeight >= 3) score += 3;
    if (level >= 3) score += 1; // everything matters more at high intensity

    // Walking always first priority
    if (ex.name === "가벼운 걷기") score += 10;
    // Breathing/meditation always last
    if (ex.name === "깊은 호흡 & 명상") score += 0;

    return { exercise: ex, score };
  });

  // Sort by score descending, shuffle within same score
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    return Math.random() - 0.5;
  });

  // Always start with walking, always end with breathing
  const walking = scored.find((s) => s.exercise.name === "가벼운 걷기");
  const breathing = scored.find((s) => s.exercise.name === "깊은 호흡 & 명상");
  const rest = scored.filter(
    (s) =>
      s.exercise.name !== "가벼운 걷기" &&
      s.exercise.name !== "깊은 호흡 & 명상",
  );

  const ordered = [
    ...(walking ? [walking] : []),
    ...rest,
    ...(breathing ? [breathing] : []),
  ];

  // Greedily pick exercises fitting the time budget
  let remaining = budgetSeconds;
  const selected: RoutineStep[] = [];
  let order = 1;

  for (const item of ordered) {
    if (remaining <= 0) break;
    const ex = item.exercise;

    // Scale duration based on intensity and available time
    let dur = ex.duration;

    // For light sessions, shorten walking and breathing
    const intensityMap: Record<Intensity, number> = {
      "가벼운 연습": 1,
      "보통 경기": 2,
      "강도 높은 경기": 3,
      "대회": 4,
    };
    const level = intensityMap[intensity];

    if (level <= 1 && dur >= 120) {
      dur = 60; // halve long exercises for light sessions
    }

    // Don't exceed remaining time
    dur = Math.min(dur, remaining);

    // Skip if too short to be useful (< 15 seconds)
    if (dur < 15) {
      if (remaining > 0 && selected.length > 0) {
        // donate to last exercise
        const last = selected[selected.length - 1];
        const lastSec = parseDurationToSeconds(last.duration);
        last.duration = formatDuration(lastSec + remaining);
        remaining = 0;
      }
      continue;
    }

    selected.push({
      order,
      name: ex.name,
      duration: formatDuration(dur),
      description: ex.description,
      focusArea: ex.focusArea,
    });

    remaining -= dur;
    order++;
  }

  // Distribute leftover time to last exercise
  if (remaining > 0 && selected.length > 0) {
    const last = selected[selected.length - 1];
    const lastSec = parseDurationToSeconds(last.duration);
    last.duration = formatDuration(lastSec + remaining);
  }

  return selected;
}

function parseDurationToSeconds(formatted: string): number {
  let total = 0;
  const minMatch = formatted.match(/(\d+)분/);
  const secMatch = formatted.match(/(\d+)초/);
  if (minMatch) total += parseInt(minMatch[1]) * 60;
  if (secMatch) total += parseInt(secMatch[1]);
  return total;
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
          ? "border-teal-500 bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md"
          : "border-gray-200 bg-white text-gray-700 hover:border-teal-300 hover:bg-teal-50"
      }`}
    >
      {label}
    </button>
  );
}

/* ──────────────────────────── main page ──────────────────────── */

export default function CooldownRoutineBuilderPage() {
  const [intensity, setIntensity] = useState<Intensity | null>(null);
  const [bodyPart, setBodyPart] = useState<BodyPart | null>(null);
  const [time, setTime] = useState<TimeOption | null>(null);
  const [routine, setRoutine] = useState<RoutineStep[] | null>(null);

  const allSelected =
    intensity !== null && bodyPart !== null && time !== null;

  const handleGenerate = useCallback(() => {
    if (!allSelected) return;
    setRoutine(generateRoutine(intensity, bodyPart, time));
  }, [intensity, bodyPart, time, allSelected]);

  const handleReset = useCallback(() => {
    setIntensity(null);
    setBodyPart(null);
    setTime(null);
    setRoutine(null);
  }, []);

  const totalSteps = routine?.length ?? 0;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      {/* ── Hero ── */}
      <section className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-emerald-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">
          Recovery Utility
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">
          쿨다운 루틴 빌더
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          운동 강도, 주로 사용한 부위, 가용 시간을 선택하면 나에게 맞는 쿨다운
          루틴을 자동으로 생성해드립니다. 쿨다운은 다음 세션의 컨디션을 만드는
          과정입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/warmup-routine-builder"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            워밍업 루틴 보기
          </Link>
          <Link
            href="/utility/recovery-routine-generator"
            className="rounded-full border border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-700"
          >
            회복 루틴 보기
          </Link>
        </div>
      </section>

      {/* ── Selection Form ── */}
      {!routine && (
        <section className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900">루틴 설정</h2>
          <p className="mt-1 text-sm text-gray-500">
            3가지를 선택한 뒤 루틴을 생성하세요.
          </p>

          {/* 운동 강도 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">
              운동 강도
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                [
                  "가벼운 연습",
                  "보통 경기",
                  "강도 높은 경기",
                  "대회",
                ] as Intensity[]
              ).map((v) => (
                <OptionButton
                  key={v}
                  label={v}
                  value={v}
                  selected={intensity}
                  onSelect={setIntensity}
                />
              ))}
            </div>
          </div>

          {/* 주로 사용한 부위 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">
              주로 사용한 부위
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {(
                ["전신", "어깨·팔", "허리·코어", "다리"] as BodyPart[]
              ).map((v) => (
                <OptionButton
                  key={v}
                  label={v}
                  value={v}
                  selected={bodyPart}
                  onSelect={setBodyPart}
                />
              ))}
            </div>
          </div>

          {/* 시간 */}
          <div className="mt-6">
            <h3 className="text-sm font-semibold text-gray-800">
              가용 시간
            </h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {([5, 10, 15] as TimeOption[]).map((v) => (
                <OptionButton
                  key={v}
                  label={`${v}분`}
                  value={v}
                  selected={time}
                  onSelect={setTime}
                />
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
                ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-lg hover:from-teal-600 hover:to-emerald-600"
                : "cursor-not-allowed bg-gray-100 text-gray-400"
            }`}
          >
            쿨다운 루틴 생성
          </button>
        </section>
      )}

      {/* ── Generated Routine ── */}
      {routine && (
        <>
          {/* Summary bar */}
          <section className="flex flex-wrap items-center gap-4 rounded-3xl border border-teal-200 bg-gradient-to-r from-teal-50 to-emerald-50 p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-500 text-sm font-bold text-white">
                {time}
              </span>
              <span className="text-sm font-semibold text-gray-800">
                분 쿨다운
              </span>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-teal-700 shadow-sm">
              {intensity}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm">
              부위: {bodyPart}
            </span>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              {totalSteps}개 동작
            </span>
          </section>

          {/* Step cards */}
          <section className="grid gap-4 sm:grid-cols-2">
            {routine.map((step) => (
              <article
                key={step.order}
                className="relative rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                {/* numbered badge */}
                <span className="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 text-sm font-bold text-white shadow">
                  {step.order}
                </span>

                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900">
                    {step.name}
                  </h3>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="text-sm font-semibold text-teal-600">
                      {step.duration}
                    </span>
                    <span className="text-xs text-gray-400">|</span>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-700">
                      {step.focusArea}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </section>

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-teal-400 px-6 py-3 text-sm font-bold text-teal-600 transition-colors hover:bg-teal-50"
            >
              처음부터 다시
            </button>
            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:from-teal-600 hover:to-emerald-600"
            >
              같은 설정으로 재생성
            </button>
          </div>
        </>
      )}
    </main>
  );
}
