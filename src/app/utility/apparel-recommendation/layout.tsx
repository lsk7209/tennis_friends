import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 의류 추천",
  description:
    "날씨와 경기 스타일에 맞는 테니스 의류를 추천받으세요. 기온, 날씨, 레벨에 따른 상의·하의·액세서리 조합을 제안합니다.",
  path: "/utility/apparel-recommendation",
  type: "website",
  tags: ["테니스 의류", "테니스 복장 추천", "운동복 선택", "테니스 패션"],
});

export default function ApparelRecommendationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
