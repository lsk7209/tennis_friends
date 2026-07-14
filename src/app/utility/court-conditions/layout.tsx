import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "코트 컨디션 분석",
  description:
    "코트 표면, 기온, 습도, 바람 등 환경 요소를 입력하면 플레이 적합도를 분석하고 전략 팁을 제공합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/court-conditions" },
  path: "/utility/court-conditions",
  type: "website",
  tags: ["코트 컨디션", "테니스 코트 상태", "코트 환경 분석", "플레이 조건"],
});

export default function CourtConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
