import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matchday Packing Checklist",
  description: "Matchday Packing Checklist — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/matchday-packing-checklist",
  },
  openGraph: {
    title: "Matchday Packing Checklist | TennisFriends",
    description: "Matchday Packing Checklist — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/matchday-packing-checklist",
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
