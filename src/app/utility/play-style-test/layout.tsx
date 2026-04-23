import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이 스타일 진단",
  description: "플레이 스타일 진단 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/play-style-test",
  },
  openGraph: {
    title: "플레이 스타일 진단 | TennisFriends",
    description: "플레이 스타일 진단 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/play-style-test",
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
