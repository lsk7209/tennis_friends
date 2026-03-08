import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "벽치기 연습 플래너",
  description:
    "혼자 연습할 때 포핸드, 백핸드, 리듬, 발 움직임을 조합하는 테니스 벽치기 플래너입니다.",
  path: "/utility/practice-wall-drill-planner",
  type: "website",
  tags: ["벽치기", "혼자 테니스 연습", "테니스 플래너"],
});

const wallPlan = [
  {
    title: "5분 리듬 만들기",
    detail: "짧은 스윙으로 일정한 높이와 박자를 맞추며 임팩트 감각을 깨웁니다.",
  },
  {
    title: "10분 방향 훈련",
    detail: "포핸드와 백핸드를 번갈아 치며 높이와 깊이를 일정하게 유지합니다.",
  },
  {
    title: "5분 발 움직임",
    detail: "한두 걸음 옆으로 이동한 뒤 다시 중앙으로 돌아오는 리커버리 스텝을 넣습니다.",
  },
  {
    title: "5분 마무리 루틴",
    detail: "세게 치기보다 실수 없이 연결하는 감각으로 마무리합니다.",
  },
] as const;

const cautions = [
  "벽과 너무 가까우면 준비 시간이 없어 자세가 무너집니다.",
  "세게 치는 것보다 같은 높이와 간격을 반복하는 편이 효과적입니다.",
  "손목만 쓰는 습관이 생기지 않도록 몸통 회전과 발 위치를 같이 확인합니다.",
] as const;

export default function PracticeWallDrillPlannerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-stone-100 bg-gradient-to-br from-stone-50 via-white to-lime-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-700">Training Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">벽치기 연습 플래너</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          파트너가 없는 날에도 벽치기만 잘 활용하면 리듬, 임팩트, 발 움직임을 충분히 다듬을 수 있습니다.
          중요한 건 목적 없이 오래 치는 것이 아니라 짧은 구간을 나눠 의도적으로 반복하는 것입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/practice-drill-generator"
            className="rounded-full bg-stone-700 px-5 py-2.5 text-sm font-semibold text-white"
          >
            드릴 구성 가이드 보기
          </Link>
          <Link
            href="/utility/focus-training"
            className="rounded-full border border-stone-700 px-5 py-2.5 text-sm font-semibold text-stone-700"
          >
            집중 훈련과 연결
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {wallPlan.map((step) => (
          <article key={step.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{step.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{step.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">주의할 점</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {cautions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
