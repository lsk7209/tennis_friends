import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "샷 선택 트레이너",
  description:
    "공 높이, 위치, 밸런스 상태에 따라 어떤 샷을 선택해야 하는지 정리하는 테니스 전략 가이드입니다.",
  path: "/utility/shot-selection-trainer",
  type: "website",
  tags: ["샷 선택", "테니스 전략", "의사결정 훈련"],
});

const decisions = [
  {
    title: "높은 볼",
    detail: "시간이 있으면 깊게 밀어 주도권을 잡고, 무리한 라인 공략보다 상대를 뒤로 보내는 선택이 안전합니다.",
  },
  {
    title: "낮은 볼",
    detail: "네트를 크게 넘기는 안전 마진을 두고 크로스로 연결하는 편이 실수 확률을 줄입니다.",
  },
  {
    title: "짧은 볼",
    detail: "진입이 늦었으면 강타보다 깊은 어프로치가 낫고, 진입이 좋으면 빈 공간을 먼저 봅니다.",
  },
] as const;

const principles = [
  "좋은 샷보다 다음 볼까지 연결되는 샷을 우선합니다.",
  "균형이 무너진 상태에서는 강한 공격보다 시간 벌기 선택이 더 효율적입니다.",
  "상대 약점이 보여도 내 자세가 준비되지 않았으면 무리하지 않습니다.",
] as const;

export default function ShotSelectionTrainerPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Strategy Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">샷 선택 트레이너</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          경기에서 범실이 많다면 기술보다 선택 문제일 때가 많습니다. 이 페이지는 볼 높이, 위치, 준비 상태에 따라
          어떤 샷이 합리적인지 정리하는 기준표입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/opponent-analyzer"
            className="rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            상대 분석과 연결
          </Link>
          <Link
            href="/utility/unforced-error-audit"
            className="rounded-full border border-blue-600 px-5 py-2.5 text-sm font-semibold text-blue-700"
          >
            범실 분석 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {decisions.map((decision) => (
          <article key={decision.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{decision.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{decision.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">선택 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
