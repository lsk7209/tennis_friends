import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "랭킹 계산기",
  description:
    "경기 결과를 입력하면 예상 랭킹 변동을 확인할 수 있습니다. 승패 기록으로 랭킹 흐름을 시뮬레이션하세요.",
  path: "/utility/ranking-calculator",
  type: "website",
  tags: ["테니스 랭킹", "랭킹 계산", "포인트 계산", "랭킹 시뮬레이션"],
});

export default function RankingCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
