import type { Metadata } from "next";
import EquipmentRecommendationClient from "./EquipmentRecommendationClient";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 장비 추천",
  description: "실력, 플레이 성향, 예산을 기준으로 라켓과 스트링 추천 방향을 확인합니다.",
  path: "/utility/equipment-recommendation",
  type: "website",
  tags: ["테니스 장비", "라켓 추천", "스트링 추천"],
});

export default function EquipmentRecommendationPage() {
  return <EquipmentRecommendationClient />;
}
