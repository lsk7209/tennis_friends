import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 코치 매칭",
  description:
    "내 목표와 레벨에 맞는 테니스 코치를 찾아보세요. 지역, 전문 분야, 레슨 유형별로 최적의 코치를 매칭합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/coaching-match" },
  path: "/utility/coaching-match",
  type: "website",
  tags: ["테니스 코치", "레슨 매칭", "테니스 레슨", "코치 찾기"],
});

export default function CoachingMatchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
