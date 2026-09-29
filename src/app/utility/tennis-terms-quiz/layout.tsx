import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 용어 퀴즈",
  description:
    "듀스, 브레이크 포인트, 킥 서브, 노 맨즈 랜드, 럭키 루저 등 테니스 용어를 설명만 보고 맞히는 10문제 퀴즈입니다. 풀 때마다 다른 용어가 나옵니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/tennis-terms-quiz" },
  path: "/utility/tennis-terms-quiz",
  type: "website",
  tags: ["테니스 용어", "테니스 용어 퀴즈", "테니스 입문", "테니스 기초"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}