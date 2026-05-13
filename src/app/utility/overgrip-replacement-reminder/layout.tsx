import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overgrip Replacement Reminder",
  description: "Overgrip Replacement Reminder — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/overgrip-replacement-reminder",
  },
  openGraph: {
    title: "Overgrip Replacement Reminder | TennisFriends",
    description: "Overgrip Replacement Reminder — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/overgrip-replacement-reminder",
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
