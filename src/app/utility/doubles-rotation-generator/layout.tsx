import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "복식 로테이션·대진표 생성기",
  description:
    "동호회 참가자와 코트 수를 입력하면 라운드별 복식 조를 짭니다. 휴식을 고르게 돌리고 같은 파트너 반복을 줄이며, 결과를 텍스트로 복사할 수 있습니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/doubles-rotation-generator" },
  path: "/utility/doubles-rotation-generator",
  type: "website",
  tags: ["복식 대진표", "테니스 로테이션", "동호회 대진", "복식 조 짜기"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}