import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "멘탈 트레이닝",
  description:
    "경기 집중력과 침착함을 키우는 멘탈 훈련 도구입니다. 호흡법, 자신감 회복, 리셋 루틴 등을 연습하세요.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/mental-training" },
  path: "/utility/mental-training",
  type: "website",
  tags: ["테니스 멘탈", "멘탈 트레이닝", "경기 심리", "집중력 훈련", "자신감"],
});

export default function MentalTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
