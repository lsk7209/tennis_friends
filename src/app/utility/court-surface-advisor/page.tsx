import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "코트 표면 추천 가이드",
  description: "플레이 스타일과 연습 목적에 맞춰 어떤 코트 표면이 잘 맞는지 정리하는 테니스 코트 표면 추천 가이드입니다.",
  path: "/utility/court-surface-advisor",
  type: "website",
  tags: ["tennis utility", "court surface", "코트 표면 추천"],
});

const sections = [
  {
    id: "hard",
    heading: "하드코트",
    body: "가장 범용적인 표면입니다. 바운드가 비교적 일정해 기본 패턴을 점검하기 좋고, 경기 준비용 훈련에도 잘 맞습니다.",
  },
  {
    id: "clay",
    heading: "클레이코트",
    body: "긴 랠리, 풋워크, 인내심을 훈련하기 좋습니다. 스핀과 높이 변화에 적응하는 감각을 기르기에도 유리합니다.",
  },
  {
    id: "grass",
    heading: "잔디코트",
    body: "낮고 빠른 바운드에 적응해야 하므로 반응 속도와 첫 스텝, 짧은 포인트 운영을 점검하는 데 적합합니다.",
  },
  {
    id: "indoor",
    heading: "실내코트",
    body: "날씨와 바람 변수가 적어 폼 교정이나 특정 기술 반복 훈련에 특히 유리합니다.",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12">
      <section className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm dark:border-white/10 dark:bg-gray-900">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Strategy</p>
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">코트 표면 추천 가이드</h1>
        <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-300">
          연습 목적과 플레이 스타일에 따라 잘 맞는 코트 표면은 달라집니다. 이 페이지는 각 표면의 특징과 어떤 상황에 활용하면 좋은지 빠르게 정리합니다.
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
          <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">추천 활용 예시</h2>
          <div className="space-y-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
            <p>폼 교정: 실내코트 또는 하드코트</p>
            <p>풋워크와 지구력: 클레이코트</p>
            <p>반응 속도와 짧은 포인트 대응: 잔디 또는 빠른 하드코트</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/utility/court-conditions" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white">
              Court Conditions
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
