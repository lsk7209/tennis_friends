import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 날씨 체크",
  description:
    "오늘 날씨가 테니스 치기에 적합한지 빠르게 판단하세요. 기온, 습도, 바람, 자외선 등을 종합 분석합니다.",
  path: "/utility/weather-check",
  type: "website",
  tags: ["테니스 날씨", "날씨 체크", "야외 테니스", "경기 날씨 확인"],
});

export default function WeatherCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
