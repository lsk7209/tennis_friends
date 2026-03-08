import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스화 마모 체크 가이드",
  description:
    "밑창 패턴, 쿠셔닝, 미끄러짐을 기준으로 테니스화 교체 시점을 판단하는 실전 체크 가이드입니다.",
  path: "/utility/shoe-wear-tracker",
  type: "website",
  tags: ["테니스화", "신발 마모", "테니스 장비 관리"],
});

const areas = [
  {
    name: "밑창",
    description: "자주 닿는 바깥쪽과 앞꿈치 패턴이 닳아 미끄러움이 생기지 않는지 확인합니다.",
  },
  {
    name: "쿠셔닝",
    description: "착지 충격이 커졌거나 발목과 무릎 피로가 빨리 올라오면 쿠셔닝 저하를 의심합니다.",
  },
  {
    name: "갑피",
    description: "옆면이 늘어나 발이 흔들리면 급정지와 방향 전환에서 안정감이 떨어집니다.",
  },
] as const;

const questions = [
  "최근 코트에서 미끄러지는 장면이 늘었는가",
  "하드코트 플레이 뒤 발바닥과 무릎 피로가 전보다 커졌는가",
  "신발 측면이 주저앉아 발을 잘 잡아주지 못하는가",
  "경기 중 급정지할 때 불안감이 느껴지는가",
] as const;

export default function ShoeWearTrackerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-orange-100 bg-gradient-to-br from-orange-50 via-white to-amber-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-700">Equipment Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">테니스화 마모 체크 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          신발 마모는 단순한 착용감 문제가 아니라 발목 안정성과 정지 동작에 바로 연결됩니다. 정기적으로 마모
          상태를 확인하면 미끄러짐과 부상 위험을 줄일 수 있습니다.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/shoe-recommender"
            className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            신발 추천 보기
          </Link>
          <Link
            href="/utility/court-surface-advisor"
            className="rounded-full border border-orange-600 px-5 py-2.5 text-sm font-semibold text-orange-700"
          >
            코트 표면 가이드
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {areas.map((area) => (
          <article key={area.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{area.name}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{area.description}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">교체 판단 질문</h2>
        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          {questions.map((question) => (
            <li key={question} className="rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700">
              {question}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
