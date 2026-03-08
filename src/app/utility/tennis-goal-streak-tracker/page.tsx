import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 목표 연속 달성 트래커",
  description: "훈련과 경기 목표를 며칠 연속으로 지키고 있는지 확인하는 테니스 목표 연속 달성 트래커입니다.",
  path: "/utility/tennis-goal-streak-tracker",
  type: "website",
  tags: ["tennis utility", "habit", "goal streak"],
});

const sections = [
  {
    id: "streak",
    heading: "연속 달성의 힘",
    body: "테니스 실력은 큰 결심보다 작은 반복에서 더 자주 올라갑니다. 연속 기록은 동기보다 습관을 만드는 데 더 직접적입니다.",
  },
  {
    id: "goal-types",
    heading: "어떤 목표가 잘 맞나",
    body: "주 3회 서브 연습, 경기 후 5분 복기, 매일 10분 스트레칭처럼 짧고 명확한 목표가 가장 유지하기 쉽습니다.",
  },
  {
    id: "review",
    heading: "언제 돌아봐야 하나",
    body: "주말마다 한 번씩 연속 기록을 보고, 실제 실력 향상과 연결되는 목표인지 확인하는 과정이 필요합니다.",
  },
  {
    id: "next-step",
    heading: "다음 행동",
    body: "연속 기록이 끊겼다면 더 크게 잡기보다 더 쉽게 만들면 됩니다. 유지 가능한 최소 행동으로 다시 시작하는 편이 낫습니다.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Habit</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">테니스 목표 연속 달성 트래커</h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
          테니스 목표는 크게 세우는 것보다 끊기지 않게 유지하는 편이 더 중요합니다. 이 페이지는 연속 달성 관리가 왜 중요한지, 어떤 목표가 유지하기 쉬운지 정리합니다.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.id} className="rounded-2xl border border-gray-200 p-5 dark:border-gray-700">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{section.heading}</h2>
              <p className="text-sm leading-6 text-gray-600 dark:text-gray-300">{section.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-gray-50 p-6 dark:bg-gray-800">
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">같이 쓰면 좋은 도구</h2>
          <p className="mb-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
            목표를 세우고 추적하려면 계획 도구와 경기 분석 도구를 같이 쓰는 편이 훨씬 효과적입니다.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/utility/goal-setting" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              Goal Setting
            </Link>
            <Link href="/utility/training-planner" className="rounded-full border border-emerald-500 px-4 py-2 text-sm font-semibold text-emerald-600">
              Training Planner
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
