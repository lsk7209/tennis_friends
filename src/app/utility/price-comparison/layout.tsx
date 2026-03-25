import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 장비 가격 비교",
  description:
    "테니스 라켓, 스트링, 신발 등 장비 가격을 한 번에 비교하세요. 카테고리별 최저가와 성능 대비 가성비를 확인합니다.",
  path: "/utility/price-comparison",
  type: "website",
  tags: ["테니스 장비 가격", "가격 비교", "라켓 가격", "테니스 용품"],
});

export default function PriceComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
