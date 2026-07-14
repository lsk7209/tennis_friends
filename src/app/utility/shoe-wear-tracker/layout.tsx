import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoe Wear Tracker",
  description: "Shoe Wear Tracker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/shoe-wear-tracker",
  },
  openGraph: {
    title: "Shoe Wear Tracker | TennisFriends",
    description: "Shoe Wear Tracker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/shoe-wear-tracker",
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
