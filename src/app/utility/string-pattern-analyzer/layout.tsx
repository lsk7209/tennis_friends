import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "스트링 패턴 분석기",
  description:
    "내 플레이 스타일에 맞는 스트링 패턴을 분석하고 추천받으세요. 스핀, 컨트롤, 파워 밸런스를 고려한 맞춤 제안을 제공합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/string-pattern-analyzer" },
  path: "/utility/string-pattern-analyzer",
  type: "website",
  tags: ["스트링 패턴", "테니스 스트링", "라켓 세팅", "스트링 추천"],
});

export default function StringPatternAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
