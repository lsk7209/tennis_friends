import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "타이브레이크 압박 가이드",
  description:
    "타이브레이크에서 서브 선택, 리턴 집중, 포인트 사이 루틴을 정리하는 멘탈 가이드입니다.",
  path: "/utility/tiebreak-pressure-simulator",
  type: "website",
  tags: ["타이브레이크", "테니스 멘탈", "압박 상황"],
});

const phases = [
  {
    title: "초반 0-0 to 2-2",
    detail: "무리하게 승부하기보다 가장 익숙한 패턴으로 리듬을 먼저 잡는 구간입니다.",
  },
  {
    title: "중반 3-3 to 5-5",
    detail: "미니브레이크 하나가 중요해지므로 리턴 집중도와 첫 볼 선택이 흔들리면 안 됩니다.",
  },
  {
    title: "후반 6점 이후",
    detail: "결정타보다 실수하지 않는 판단이 더 중요해집니다. 포인트 사이 루틴이 핵심입니다.",
  },
] as const;

const reminders = [
  "서브할 때는 가장 자신 있는 코스를 우선한다.",
  "리턴에서는 깊이 확보를 먼저 생각하고 무리한 위너를 노리지 않는다.",
  "실점 직후 다음 포인트 루틴을 짧게 고정한다.",
] as const;

export default function TiebreakPressureSimulatorPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Mental Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">타이브레이크 압박 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          타이브레이크는 기술보다 선택과 루틴 차이가 더 크게 드러나는 구간입니다. 점수 흐름에 따라 무엇을
          지켜야 하는지 미리 정리해 두면 압박 상황에서도 판단이 흔들리지 않습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/mental-training"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            멘탈 훈련과 연결
          </Link>
          <Link
            href="/utility/goal-setting"
            className="rounded-full border border-violet-600 px-5 py-2.5 text-sm font-semibold text-violet-700"
          >
            경기 목표 정리
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {phases.map((phase) => (
          <article key={phase.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{phase.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{phase.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">포인트 사이 리마인드</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {reminders.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
