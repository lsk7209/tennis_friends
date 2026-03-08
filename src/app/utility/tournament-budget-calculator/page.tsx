import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import TournamentBudgetCalculatorClient from "./TournamentBudgetCalculatorClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 대회 예산 계산기",
  description: "참가비, 숙박, 교통, 스트링 비용까지 합산해 대회 원정 예산을 계산합니다.",
  path: "/utility/tournament-budget-calculator",
  type: "website",
  tags: ["tennis utility", "budget", "tournament", "대회 예산"],
});

export default function Page() {
  return <TournamentBudgetCalculatorClient />;
}
