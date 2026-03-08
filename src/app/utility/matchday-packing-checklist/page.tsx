import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import MatchdayPackingChecklistClient from "./MatchdayPackingChecklistClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 경기일 준비물 체크리스트",
  description: "날씨와 경기 형태에 맞춰 경기 당일 준비물을 자동으로 정리합니다.",
  path: "/utility/matchday-packing-checklist",
  type: "website",
  tags: ["tennis utility", "matchday", "packing", "체크리스트"],
});

export default function Page() {
  return <MatchdayPackingChecklistClient />;
}
