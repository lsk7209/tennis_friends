import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "서브 코스 매핑 가이드",
  description:
    "디유스와 애드 코트에서 플랫, 슬라이스, 킥 서브 코스를 어떻게 조합할지 정리하는 서브 전략 가이드입니다.",
  path: "/utility/serve-placement-mapper",
  type: "website",
  tags: ["서브 코스", "테니스 서브", "서브 전략"],
});

const servePatterns = [
  {
    title: "디유스 코트",
    detail: "와이드 슬라이스로 각을 만들거나 바디 서브로 리턴 타이밍을 뺏는 선택이 기본이 됩니다.",
  },
  {
    title: "애드 코트",
    detail: "백핸드 쪽 킥 서브로 밀어내거나 T 서브로 빠르게 주도권을 잡는 패턴이 효율적입니다.",
  },
  {
    title: "중요 포인트",
    detail: "가장 자신 있는 구질과 가장 높은 성공률의 코스를 먼저 선택해야 합니다.",
  },
] as const;

const tips = [
  "상대가 리턴 위치를 앞으로 당기면 바디나 킥으로 높낮이 변화를 줍니다.",
  "첫 서브가 흔들리는 날은 욕심내는 코스보다 패턴이 이어지는 코스를 우선합니다.",
  "복식에서는 코스 하나보다 전위의 움직임과 같이 설계하는 편이 더 중요합니다.",
] as const;

export default function ServePlacementMapperPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-50 via-white to-cyan-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">Serve Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">서브 코스 매핑 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          서브는 속도보다 다음 공을 쉽게 만들 수 있는 코스 설계가 더 중요할 때가 많습니다. 이 페이지는 코트
          위치와 포인트 상황에 따라 어떤 코스 조합이 실전적인지 정리합니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/serve-velocity-calculator"
            className="rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            서브 속도 보기
          </Link>
          <Link
            href="/utility/shot-selection-trainer"
            className="rounded-full border border-sky-600 px-5 py-2.5 text-sm font-semibold text-sky-700"
          >
            다음 샷 선택 연결
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {servePatterns.map((pattern) => (
          <article key={pattern.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{pattern.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{pattern.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">코스 설계 팁</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
