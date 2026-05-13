import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Time Availability Planner",
  description: "Tennis Time Availability Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/tennis-time-availability-planner",
  },
  openGraph: {
    title: "Tennis Time Availability Planner | TennisFriends",
    description: "Tennis Time Availability Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/tennis-time-availability-planner",
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
