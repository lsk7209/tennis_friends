import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "맞춤 드릴 생성기",
  description:
    "목표와 레벨에 맞는 나만의 테니스 연습 드릴 세션을 자동으로 생성합니다. 포핸드, 서브, 풋워크 등 다양한 드릴을 제공합니다.",
  path: "/utility/practice-drill-generator",
  type: "website",
  tags: ["테니스 드릴", "연습 루틴", "훈련 생성기", "테니스 연습"],
});

export default function PracticeDrillGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
