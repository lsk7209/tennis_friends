import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 훈련 플래너",
  description:
    "현재 수준과 주간 가능 시간을 기준으로 맞춤 훈련 계획을 세우세요. 기술, 체력, 전략을 균형 있게 배분합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/training-planner" },
  path: "/utility/training-planner",
  type: "website",
  tags: ["훈련 계획", "테니스 플래너", "주간 훈련", "훈련 스케줄"],
});

export default function TrainingPlannerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
