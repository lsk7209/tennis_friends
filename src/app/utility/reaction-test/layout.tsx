import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "반응 속도 테스트",
  description:
    "테니스에서 중요한 첫 반응 속도를 측정하세요. 다양한 모드로 시각 반응과 판단 속도를 점검합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/reaction-test" },
  path: "/utility/reaction-test",
  type: "website",
  tags: ["반응 속도", "테니스 반응 테스트", "민첩성 측정", "반사 신경"],
});

export default function ReactionTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
