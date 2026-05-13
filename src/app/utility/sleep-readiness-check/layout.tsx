import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sleep Readiness Check",
  description: "Sleep Readiness Check — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/sleep-readiness-check",
  },
  openGraph: {
    title: "Sleep Readiness Check | TennisFriends",
    description: "Sleep Readiness Check — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/sleep-readiness-check",
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
