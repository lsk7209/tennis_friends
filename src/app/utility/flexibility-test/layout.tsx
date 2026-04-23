import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "유연성 테스트",
  description:
    "테니스 움직임에 필요한 어깨, 흉추, 고관절 등 주요 관절의 가동 범위를 점검하고 개선 방향을 확인하세요.",
  alternates: { canonical: "https://tennisfrens.com/utility/flexibility-test" },
  path: "/utility/flexibility-test",
  type: "website",
  tags: ["테니스 유연성", "가동 범위 테스트", "스트레칭", "관절 유연성"],
});

export default function FlexibilityTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
