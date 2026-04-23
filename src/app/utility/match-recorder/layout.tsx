import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "경기 기록기",
  description:
    "테니스 경기를 기록하고 다음 경기력 향상으로 연결하세요. 스코어, 위치, 날짜 등을 체계적으로 관리합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/match-recorder" },
  path: "/utility/match-recorder",
  type: "website",
  tags: ["경기 기록", "테니스 기록", "매치 리코더", "경기 이력 관리"],
});

export default function MatchRecorderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
