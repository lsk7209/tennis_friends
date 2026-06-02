import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 규칙 퀴즈",
  description:
    "12문항 테니스 규칙 퀴즈로 서브, 풋폴트, 복식, 타이브레이크, 인플레이 상황 판단을 점검하세요. 정답과 해설, 약점 분석을 함께 제공합니다.",
  path: "/tennis-rules-quiz",
  type: "website",
  tags: [
    "테니스 규칙",
    "테니스 퀴즈",
    "테니스 룰 테스트",
    "테니스 기본 규칙",
    "테니스 경기 규칙",
  ],
});

export default function TennisRulesQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
