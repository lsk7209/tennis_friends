import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "경기 영상 복기 템플릿",
  description:
    "서브, 리턴, 랠리, 네트 플레이, 멘탈까지 4가지 카테고리로 경기를 구조적으로 복기하는 인터랙티브 체크리스트입니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/match-video-review-template" },
  path: "/utility/match-video-review-template",
  type: "website",
  tags: ["경기 영상 분석", "테니스 복기", "전술 분석", "경기 체크리스트"],
});

export default function MatchVideoReviewTemplateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
