import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTRP 실력 테스트",
  description: "NTRP 실력 테스트 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/ntrp-test",
  },
  openGraph: {
    title: "NTRP 실력 테스트 | TennisFriends",
    description: "NTRP 실력 테스트 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/ntrp-test",
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
