import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tennis Goal Streak Tracker",
  description: "Tennis Goal Streak Tracker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/tennis-goal-streak-tracker",
  },
  openGraph: {
    title: "Tennis Goal Streak Tracker | TennisFriends",
    description: "Tennis Goal Streak Tracker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/tennis-goal-streak-tracker",
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
