import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "서브 속도 추정 계산기",
  description:
    "서브 거리와 도달 시간을 입력하면 예상 서브 속도를 계산합니다. 서브 파워를 객관적으로 측정하세요.",
  path: "/utility/serve-velocity-calculator",
  type: "website",
  tags: ["서브 속도", "서브 계산기", "테니스 서브", "서브 파워 측정"],
});

export default function ServeVelocityCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
