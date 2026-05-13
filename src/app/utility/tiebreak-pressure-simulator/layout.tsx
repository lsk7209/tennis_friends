import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "타이브레이크 압박 시뮬레이터",
  description:
    "타이브레이크 상황별 전술 판단력을 테스트하세요. 7가지 압박 시나리오에서 최적의 선택을 훈련합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/tiebreak-pressure-simulator" },
  path: "/utility/tiebreak-pressure-simulator",
  type: "website",
  tags: ["타이브레이크", "테니스 멘탈", "압박 상황", "전술 시뮬레이터"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
