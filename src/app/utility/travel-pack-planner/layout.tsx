import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Travel Pack Planner",
  description: "Travel Pack Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/travel-pack-planner",
  },
  openGraph: {
    title: "Travel Pack Planner | TennisFriends",
    description: "Travel Pack Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/travel-pack-planner",
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
