import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 코트 예약",
  description:
    "지역, 코트 타입, 시간대 기준으로 테니스 코트 예약 흐름을 빠르게 확인하세요. 실내·실외 코트 정보와 가격을 비교합니다.",
  path: "/utility/court-booking",
  type: "website",
  tags: ["테니스 코트 예약", "코트 찾기", "테니스장 예약", "코트 가격 비교"],
});

export default function CourtBookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
