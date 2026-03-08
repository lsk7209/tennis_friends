import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "파트너 적합도 체크",
  description:
    "복식 파트너와의 플레이 속도, 소통 방식, 전술 선호도를 점검하는 적합도 체크 가이드입니다.",
  path: "/utility/partner-compatibility-check",
  type: "website",
  tags: ["복식 파트너", "테니스 적합도", "복식 체크"],
});

const categories = [
  {
    title: "플레이 템포",
    detail: "한 명은 빠른 전개를 원하고 다른 한 명은 안정적인 랠리를 원하면 충돌이 생기기 쉽습니다.",
  },
  {
    title: "커뮤니케이션 방식",
    detail: "포인트 사이 대화량과 피드백 스타일이 맞는지 확인해야 분위기 관리가 쉬워집니다.",
  },
  {
    title: "전술 선호",
    detail: "포칭 빈도, 로브 사용, 서브 방향 선호가 비슷한지 보면 실전 적응 속도를 알 수 있습니다.",
  },
] as const;

const checkpoints = [
  "서로 강점이 겹치는지, 보완되는지 확인한다.",
  "중요 포인트에서 누가 결정하는 편한지 미리 정한다.",
  "경기 전 기본 포메이션을 간단히 공유한다.",
] as const;

export default function PartnerCompatibilityCheckPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-rose-100 bg-gradient-to-br from-rose-50 via-white to-orange-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-700">Doubles Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">파트너 적합도 체크</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          파트너 적합도는 친분과 별개입니다. 경기 템포, 소통 방식, 전술 선호가 맞아야 실제 복식에서 안정감이
          생기고 실점 뒤 회복도 빨라집니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/doubles-chemistry-test"
            className="rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            복식 궁합 가이드 보기
          </Link>
          <Link
            href="/utility/goal-setting"
            className="rounded-full border border-rose-600 px-5 py-2.5 text-sm font-semibold text-rose-700"
          >
            팀 목표 정리하기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <article key={category.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{category.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{category.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">경기 전 체크포인트</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {checkpoints.map((checkpoint) => (
            <li key={checkpoint}>{checkpoint}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
