import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 칼로리 계산기",
  description:
    "단식/복식 여부, 플레이 시간, 운동 강도를 고려하여 테니스 경기 중 소모한 칼로리를 계산합니다. 다이어트와 체력 관리를 위한 필수 도구입니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/calorie-calculator" },
  path: "/utility/calorie-calculator",
  type: "website",
  tags: ["테니스 칼로리", "운동 칼로리 계산", "테니스 다이어트", "칼로리 소모량"],
});

export default function CalorieCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
