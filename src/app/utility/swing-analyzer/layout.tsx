import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "스윙 분석기",
  description:
    "스윙 영상을 보고 핵심 교정 포인트를 찾으세요. 스윙 궤적, 임팩트, 팔로스루 등을 체계적으로 분석합니다.",
  path: "/utility/swing-analyzer",
  type: "website",
  tags: ["스윙 분석", "테니스 스윙", "폼 교정", "스윙 궤적 분석"],
});

export default function SwingAnalyzerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
