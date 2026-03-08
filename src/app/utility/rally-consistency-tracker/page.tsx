import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "랠리 안정성 추적 가이드",
  description:
    "랠리 길이, 실수 시점, 공 높이 패턴을 기준으로 일관성을 점검하는 테니스 분석 가이드입니다.",
  path: "/utility/rally-consistency-tracker",
  type: "website",
  tags: ["랠리 분석", "테니스 일관성", "경기 기록"],
});

const points = [
  {
    title: "랠리 길이 기록",
    detail: "5구 이하에서 무너지는지, 8구 이상 랠리에서 흔들리는지 먼저 구간을 나눠 봅니다.",
  },
  {
    title: "실수 위치 확인",
    detail: "네트 실수인지 아웃 실수인지, 포핸드인지 백핸드인지까지 같이 적어야 원인이 보입니다.",
  },
  {
    title: "볼 높이 패턴",
    detail: "낮은 볼 처리에서 무너지는지 높은 볼에서 성급해지는지 확인하면 훈련 방향이 쉬워집니다.",
  },
] as const;

const tips = [
  "한 세션에서 랠리 목표 개수를 정해 두면 일관성 향상을 숫자로 보기 쉽습니다.",
  "좋은 랠리와 나쁜 랠리를 함께 기록해야 실제 차이를 알 수 있습니다.",
  "길게 버티는 것만이 아니라 원하는 높이와 깊이를 유지했는지도 봐야 합니다.",
] as const;

export default function RallyConsistencyTrackerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-teal-100 bg-gradient-to-br from-teal-50 via-white to-cyan-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-700">Analysis Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">랠리 안정성 추적 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          랠리 일관성은 단순히 오래 넘기는 능력이 아니라 같은 높이와 깊이를 반복할 수 있는 능력입니다. 이
          페이지는 랠리 패턴을 기록할 때 무엇을 봐야 하는지 정리한 기준표입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/unforced-error-audit"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            범실 분석과 연결
          </Link>
          <Link
            href="/utility/match-recorder"
            className="rounded-full border border-teal-600 px-5 py-2.5 text-sm font-semibold text-teal-700"
          >
            경기 기록 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {points.map((point) => (
          <article key={point.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{point.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{point.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">추적 팁</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
