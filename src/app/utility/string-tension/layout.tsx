import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스트링 텐션 계산기",
  description:
    "라켓 종류, 플레이 스타일, 팔 부담, 타구 감각을 기준으로 내 경기력에 맞는 추천 스트링 텐션과 조정 기준을 확인합니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/string-tension",
  },
  openGraph: {
    title: "스트링 텐션 계산기 | TennisFriends",
    description:
      "라켓 종류, 플레이 스타일, 팔 부담, 타구 감각을 기준으로 내 경기력에 맞는 추천 스트링 텐션과 조정 기준을 확인합니다.",
    url: "https://www.tennisfrens.com/utility/string-tension",
    type: "website",
    locale: "ko_KR",
    siteName: "TennisFriends",
  },
};

export default function UtilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
