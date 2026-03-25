import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 목표 설정",
  description:
    "실행 가능한 테니스 목표를 세우고 진행 상황을 추적하세요. 기술, 체력, 전략 등 분야별 목표를 체계적으로 관리합니다.",
  path: "/utility/goal-setting",
  type: "website",
  tags: ["테니스 목표", "목표 설정", "실력 향상", "훈련 계획", "테니스 성장"],
});

export default function GoalSettingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
