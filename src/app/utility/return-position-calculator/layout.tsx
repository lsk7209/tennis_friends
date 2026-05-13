import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Return Position Calculator",
  description: "Return Position Calculator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/return-position-calculator",
  },
  openGraph: {
    title: "Return Position Calculator | TennisFriends",
    description: "Return Position Calculator — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/return-position-calculator",
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
