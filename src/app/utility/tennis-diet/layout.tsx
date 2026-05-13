import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 식단 가이드",
  description:
    "테니스 활동량에 맞는 식단을 설계하세요. 체중, 운동 시간, 목표에 따른 영양소 배분과 식단 제안을 제공합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/tennis-diet" },
  path: "/utility/tennis-diet",
  type: "website",
  tags: ["테니스 식단", "운동 식단", "테니스 영양", "스포츠 다이어트"],
});

export default function TennisDietLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
