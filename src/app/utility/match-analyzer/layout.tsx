import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "경기 분석기",
  description:
    "경기 데이터를 분석하여 다음 승부 포인트를 찾으세요. 서브, 리턴, 랠리 패턴 등 주요 지표를 확인합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/match-analyzer" },
  path: "/utility/match-analyzer",
  type: "website",
  tags: ["경기 분석", "테니스 통계", "경기 데이터", "전술 분석", "승률 분석"],
});

export default function MatchAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
