import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "경기 영상 복기 템플릿",
  description:
    "테니스 경기 영상을 볼 때 서브, 리턴, 랠리, 멘탈 포인트를 구조적으로 정리하는 복기 가이드입니다.",
  path: "/utility/match-video-review-template",
  type: "website",
  tags: ["경기 영상 분석", "테니스 복기", "전술 분석"],
});

const reviewBlocks = [
  {
    title: "서브와 리턴",
    points: ["첫 서브 성공률", "세컨드 서브 이후 전개", "리턴 위치와 선택", "중요 포인트에서의 패턴"],
  },
  {
    title: "랠리 흐름",
    points: ["주도권을 잡은 볼의 종류", "실수 패턴이 반복된 구간", "상대 약점을 공략한 빈도", "긴 랠리 후 결정타 선택"],
  },
  {
    title: "멘탈과 루틴",
    points: ["실점 뒤 회복 속도", "포인트 사이 루틴 유지", "위기 상황 판단", "세트 후반 집중력 변화"],
  },
] as const;

const rules = [
  "한 경기에서 고칠 것 하나, 유지할 것 하나만 우선 뽑습니다.",
  "좋았던 장면도 반드시 기록해야 재현 가능한 패턴이 남습니다.",
  "감정 평가보다 실제 장면과 숫자를 같이 적는 편이 정확합니다.",
] as const;

export default function MatchVideoReviewTemplatePage() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-12">
      <section className="rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-700">Analysis Utility</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">경기 영상 복기 템플릿</h1>
        <p className="mt-4 max-w-3xl text-base leading-7 text-gray-700">
          경기 영상을 볼 때 막연하게 "오늘 안 됐다"로 끝내면 다음 연습으로 연결되지 않습니다. 복기 구조를
          고정해 두면 실제 수정해야 할 장면과 반복해야 할 패턴이 빠르게 드러납니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/utility/match-analyzer"
            className="rounded-full bg-slate-700 px-5 py-2.5 text-sm font-semibold text-white"
          >
            경기 분석으로 이어서 보기
          </Link>
          <Link
            href="/utility/match-recorder"
            className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-700"
          >
            경기 기록과 함께 쓰기
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {reviewBlocks.map((block) => (
          <article key={block.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">{block.title}</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
              {block.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900">복기 원칙</h2>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-700">
          {rules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
