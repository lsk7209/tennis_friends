import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournament Budget Calculator",
  description: "Tournament Budget Calculator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/tournament-budget-calculator",
  },
  openGraph: {
    title: "Tournament Budget Calculator | TennisFriends",
    description: "Tournament Budget Calculator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/tournament-budget-calculator",
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
