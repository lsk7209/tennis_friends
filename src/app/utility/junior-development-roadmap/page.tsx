import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "주니어 성장 로드맵",
  description:
    "주니어 선수를 위한 기술, 움직임, 경기 경험, 회복 관리 우선순위를 정리한 성장 로드맵입니다.",
  path: "/utility/junior-development-roadmap",
  type: "website",
  tags: ["주니어 테니스", "성장 로드맵", "주니어 훈련"],
});

const areas = [
  {
    title: "기술 기반",
    detail: "큰 스윙보다 임팩트 안정성과 반복 가능한 준비자세를 먼저 만듭니다.",
  },
  {
    title: "움직임",
    detail: "첫 발 반응, 균형, 감속 능력을 조기에 훈련해 부상 위험을 낮춥니다.",
  },
  {
    title: "경기 경험",
    detail: "실전에서 점수 운영과 감정 조절을 배우도록 연습 경기와 소규모 대회를 병행합니다.",
  },
  {
    title: "회복과 습관",
    detail: "수면, 수분, 학교 일정과 병행 가능한 루틴을 만드는 것이 장기 성장의 핵심입니다.",
  },
] as const;

const principles = [
  "성장기에는 무리한 볼륨보다 지속 가능한 반복이 더 중요합니다.",
  "이기는 경기보다 배울 경기 경험을 꾸준히 쌓는 편이 장기적으로 유리합니다.",
  "부모와 코치가 같은 기준으로 목표를 공유해야 훈련 방향이 흔들리지 않습니다.",
] as const;

export default function JuniorDevelopmentRoadmapPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-sky-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-700">Training Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">주니어 성장 로드맵</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          주니어 선수의 성장은 한 시즌 성적보다 더 긴 시간축으로 봐야 합니다. 기술, 움직임, 경기 경험,
          회복 루틴이 같이 올라가야 중장기적으로 흔들리지 않는 기반이 생깁니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/focus-training"
            className="rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            집중 훈련 연결
          </Link>
          <Link
            href="/utility/goal-setting"
            className="rounded-full border border-violet-600 px-5 py-2.5 text-sm font-semibold text-violet-700"
          >
            목표 관리 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {areas.map((area) => (
          <article key={area.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{area.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{area.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">운영 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
