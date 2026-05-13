import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partner Compatibility Check",
  description: "Partner Compatibility Check — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/partner-compatibility-check",
  },
  openGraph: {
    title: "Partner Compatibility Check | TennisFriends",
    description: "Partner Compatibility Check — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/partner-compatibility-check",
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
