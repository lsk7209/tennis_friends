import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "회복 루틴 생성 가이드",
  description:
    "경기 강도와 피로 부위에 따라 수분, 스트레칭, 수면, 영양 루틴을 조합하는 테니스 회복 가이드입니다.",
  path: "/utility/recovery-routine-generator",
  type: "website",
  tags: ["테니스 회복", "경기 후 루틴", "피로 관리"],
});

const routines = [
  {
    label: "가벼운 훈련 후",
    items: ["수분 보충", "10분 걷기", "하체 중심 스트레칭", "평소 수면 유지"],
  },
  {
    label: "강한 경기 후",
    items: ["전해질 보충", "하체와 어깨 이완", "탄수화물과 단백질 섭취", "당일 수면 우선"],
  },
  {
    label: "연속 일정 중",
    items: ["짧은 낮잠 또는 휴식", "통증 부위 체크", "강한 훈련 축소", "다음 경기 전 워밍업 보강"],
  },
] as const;

const priorities = [
  "피로가 전신인지 특정 부위인지 먼저 구분합니다.",
  "컨디션이 떨어진 날에는 훈련 강도를 줄이는 것이 회복 루틴의 일부입니다.",
  "회복 기록을 남기면 어떤 루틴이 효과적인지 빠르게 알 수 있습니다.",
] as const;

export default function RecoveryRoutineGeneratorPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Recovery Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">회복 루틴 생성 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          회복은 피로를 느낀 뒤 대응하는 것이 아니라 일정과 강도에 맞춰 미리 설계하는 편이 더 효과적입니다.
          상황별 기준 루틴을 잡아 두면 경기력 하락과 과사용 위험을 줄일 수 있습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/sleep-readiness-check"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            수면 준비도 체크
          </Link>
          <Link
            href="/utility/hydration-planner"
            className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-700"
          >
            수분 플래너 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {routines.map((routine) => (
          <article key={routine.label} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{routine.label}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {routine.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">회복 루틴 우선순위</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {priorities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
