import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";
import ReturnPositionCalculatorClient from "./ReturnPositionCalculatorClient";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 리턴 위치 계산기",
  description: "서브 속도, 구질, 코트, 리턴 스타일에 따라 추천 리턴 위치를 계산합니다.",
  path: "/utility/return-position-calculator",
  type: "website",
  tags: ["tennis utility", "return", "position", "리턴 위치"],
});

export default function Page() {
  return <ReturnPositionCalculatorClient />;
}
