import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "복식 궁합 테스트 가이드",
  description:
    "복식 파트너와의 역할 분담, 커뮤니케이션, 전위-후위 조합을 점검하는 복식 궁합 가이드입니다.",
  path: "/utility/doubles-chemistry-test",
  type: "website",
  tags: ["복식 전략", "복식 파트너", "테니스 궁합"],
});

const blocks = [
  {
    title: "역할 분담",
    detail: "한 명이 전위 압박형인지, 한 명이 베이스라인 안정형인지 먼저 나눠야 포지션이 정리됩니다.",
  },
  {
    title: "의사소통",
    detail: "리턴 위치, 포칭 신호, 로브 대처 신호를 짧은 단어로 통일하면 실수가 줄어듭니다.",
  },
  {
    title: "위기 대응",
    detail: "연속 실점 뒤 누가 분위기를 정리할지 정해 두면 흔들리는 시간을 짧게 만들 수 있습니다.",
  },
] as const;

const questions = [
  "서브 게임과 리턴 게임에서 누가 주도권을 잡는가",
  "전위 움직임에 대한 신호를 미리 맞췄는가",
  "실점 뒤 서로를 탓하지 않고 다음 포인트에 집중하는가",
] as const;

export default function DoublesChemistryTestPage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-fuchsia-100 bg-gradient-to-br from-fuchsia-50 via-white to-pink-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">Doubles Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">복식 궁합 테스트 가이드</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          복식은 개인 기량 합보다 역할 조합이 더 중요할 때가 많습니다. 이 페이지는 파트너와의 궁합을 점검할 때
          어떤 기준으로 봐야 하는지 빠르게 정리하는 용도입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/partner-compatibility-check"
            className="rounded-full bg-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white"
          >
            파트너 체크 보기
          </Link>
          <Link
            href="/utility/doubles-positioning-simulator"
            className="rounded-full border border-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-fuchsia-700"
          >
            복식 포지셔닝 보기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {blocks.map((block) => (
          <article key={block.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{block.title}</h2>
            <p className="mt-4 text-sm leading-6 text-gray-700">{block.detail}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">파트너와 확인할 질문</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {questions.map((question) => (
            <li key={question}>{question}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
