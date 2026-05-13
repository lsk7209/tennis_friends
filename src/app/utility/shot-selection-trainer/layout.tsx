import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "샷 선택 트레이너",
  description:
    "8가지 코트 상황에서 최적의 샷을 선택하는 인터랙티브 훈련 게임입니다. 테니스 의사결정 능력을 점검하세요.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/shot-selection-trainer" },
  path: "/utility/shot-selection-trainer",
  type: "website",
  tags: ["샷 선택", "테니스 전략", "의사결정 훈련", "샷 IQ"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
