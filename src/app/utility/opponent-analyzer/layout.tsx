import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "상대 분석기",
  description:
    "상대 스타일에 맞는 경기 플랜을 만드세요. 상대의 강점과 약점을 분석하고 맞춤 전략을 제안합니다.",
  path: "/utility/opponent-analyzer",
  type: "website",
  tags: ["상대 분석", "테니스 전략", "경기 플랜", "상대 약점 분석"],
});

export default function OpponentAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
