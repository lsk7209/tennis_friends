import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "복식 포지셔닝 가이드",
  description:
    "서브 상황, 리턴 상황, 로브 대응에서 복식 포지셔닝 원칙을 정리한 테니스 전술 가이드입니다.",
  path: "/utility/doubles-positioning-simulator",
  type: "website",
  tags: ["복식 포지셔닝", "복식 전술", "테니스 복식"],
});

const patterns = [
  {
    title: "서브 상황",
    detail: "서버 파트너는 전위 압박 타이밍을 잡고, 서버는 첫 볼 방향까지 같이 설계해야 합니다.",
  },
  {
    title: "리턴 상황",
    detail: "리턴 후에는 중앙 회복 위치를 빨리 잡아야 다음 전위 움직임에 대응할 수 있습니다.",
  },
  {
    title: "로브 대응",
    detail: "뒤로 물러날 사람과 중앙 커버를 맡을 사람을 즉시 나눠야 공백이 생기지 않습니다.",
  },
] as const;

const rules = [
  "두 선수 간 거리가 너무 벌어지지 않도록 중앙 커버를 우선한다.",
  "전위가 움직일 때 후위는 빈 공간을 메우는 습관을 갖는다.",
  "포인트 전 한 가지 신호만 맞춰도 포칭 성공률이 올라간다.",
] as const;

export default function DoublesPositioningSimulatorPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-sky-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-700">Doubles Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">복식 포지셔닝 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          복식에서는 샷 하나보다 두 사람이 어디를 지키고 있는지가 더 중요할 때가 많습니다. 이 페이지는 서브,
          리턴, 로브 상황에서 기본적으로 지켜야 할 포지셔닝 원칙을 정리합니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/doubles-chemistry-test"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            복식 궁합 보기
          </Link>
          <Link
            href="/utility/partner-compatibility-check"
            className="rounded-full border border-indigo-600 px-5 py-2.5 text-sm font-semibold text-indigo-700"
          >
            파트너 체크 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {patterns.map((pattern) => (
          <article key={pattern.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{pattern.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{pattern.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">포지셔닝 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
