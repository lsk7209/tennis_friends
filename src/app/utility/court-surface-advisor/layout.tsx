import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Court Surface Advisor",
  description: "Court Surface Advisor — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/court-surface-advisor",
  },
  openGraph: {
    title: "Court Surface Advisor | TennisFriends",
    description: "Court Surface Advisor — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/court-surface-advisor",
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
