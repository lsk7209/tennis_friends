import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 점수 계산 퀴즈",
  description:
    "러브, 듀스, 어드밴티지, 타이브레이크, 노애드, 매치 타이브레이크까지 12문제로 테니스 점수 규칙을 확인하는 퀴즈입니다. 문제마다 ITF 규칙 기준 해설을 제공합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/tennis-scoring-quiz" },
  path: "/utility/tennis-scoring-quiz",
  type: "website",
  tags: ["테니스 점수", "테니스 스코어", "타이브레이크 규칙", "듀스", "노애드"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}