import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "성인 입문 로드맵",
  description:
    "테니스를 처음 시작하는 성인을 위한 3단계 성장 로드맵과 훈련 우선순위 가이드입니다.",
  path: "/utility/adult-beginner-roadmap",
  type: "website",
  tags: ["테니스 입문", "성인 초보 테니스", "훈련 로드맵"],
});

const stages = [
  {
    name: "1단계: 적응기",
    detail: "그립, 준비자세, 스플릿 스텝, 짧은 랠리에 익숙해지는 시기입니다.",
  },
  {
    name: "2단계: 연결기",
    detail: "포핸드와 백핸드를 이어서 치고 서브와 리턴의 기본 흐름을 만들기 시작합니다.",
  },
  {
    name: "3단계: 실전기",
    detail: "점수 경기, 간단한 패턴 플레이, 범실 관리와 멘탈 루틴을 붙이는 단계입니다.",
  },
] as const;

const rules = [
  "한 번에 모든 기술을 잡으려 하지 말고 주간 핵심 과제 하나만 정합니다.",
  "실전 감각은 랠리와 게임 경험으로만 올라가므로 레슨만으로 끝내지 않습니다.",
  "부상 방지를 위해 손목, 팔꿈치, 종아리 피로 신호를 초반부터 체크합니다.",
] as const;

export default function AdultBeginnerRoadmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-lime-100 bg-gradient-to-br from-lime-50 via-white to-emerald-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-lime-700">Beginner Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">성인 입문 로드맵</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          성인 입문자는 속도보다 순서가 중요합니다. 이 로드맵은 처음 3개월에서 6개월 동안 무엇을 먼저 익히고
          어떤 훈련을 반복해야 하는지 기준을 잡아줍니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/ntrp-test"
            className="rounded-full bg-lime-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            현재 수준 점검
          </Link>
          <Link
            href="/utility/training-planner"
            className="rounded-full border border-lime-600 px-5 py-2.5 text-sm font-semibold text-lime-700"
          >
            훈련 계획 세우기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {stages.map((stage) => (
          <article key={stage.name} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{stage.name}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{stage.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">초반에 기억할 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
