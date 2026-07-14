import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practice Wall Drill Planner",
  description: "Practice Wall Drill Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/practice-wall-drill-planner",
  },
  openGraph: {
    title: "Practice Wall Drill Planner | TennisFriends",
    description: "Practice Wall Drill Planner — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/practice-wall-drill-planner",
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
