import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Doubles Positioning Simulator",
  description: "Doubles Positioning Simulator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/doubles-positioning-simulator",
  },
  openGraph: {
    title: "Doubles Positioning Simulator | TennisFriends",
    description: "Doubles Positioning Simulator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/doubles-positioning-simulator",
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
