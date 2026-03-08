import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "범실 분석 가이드",
  description:
    "테니스 범실을 상황, 샷 종류, 의사결정 문제로 나눠 분석하는 실전 복기 가이드입니다.",
  path: "/utility/unforced-error-audit",
  type: "website",
  tags: ["범실 분석", "테니스 복기", "경기 분석"],
});

const groups = [
  {
    title: "기술 범실",
    detail: "준비가 충분했는데도 반복해서 같은 실수가 나온다면 기술 반복이 필요합니다.",
  },
  {
    title: "선택 범실",
    detail: "균형이 무너진 상태에서 무리한 공격을 했는지, 위험 대비 보상이 맞았는지 봐야 합니다.",
  },
  {
    title: "압박 범실",
    detail: "브레이크 포인트나 타이브레이크에서만 실수가 늘어난다면 멘탈 루틴 문제가 섞여 있을 수 있습니다.",
  },
] as const;

const checklist = [
  "어떤 볼 높이에서 실수가 났는가",
  "포핸드와 백핸드 중 어디서 더 많이 나왔는가",
  "실수 전에 충분한 준비 시간이 있었는가",
  "실수 직전 점수 상황은 어땠는가",
] as const;

export default function UnforcedErrorAuditPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50 via-white to-yellow-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">Analysis Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">범실 분석 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          범실은 그냥 줄이는 대상이 아니라 원인별로 나눠서 다뤄야 합니다. 기술 문제인지, 선택 문제인지, 압박
          상황 문제인지 구분하면 훈련이 훨씬 구체적으로 바뀝니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/shot-selection-trainer"
            className="rounded-full bg-amber-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            샷 선택 보기
          </Link>
          <Link
            href="/utility/match-video-review-template"
            className="rounded-full border border-amber-600 px-5 py-2.5 text-sm font-semibold text-amber-700"
          >
            영상 복기 템플릿 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {groups.map((group) => (
          <article key={group.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{group.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{group.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">복기 체크리스트</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
