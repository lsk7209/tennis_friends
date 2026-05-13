import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "테니스 영양 가이드",
  description: "테니스 영양 가이드 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/nutrition-guide",
  },
  openGraph: {
    title: "테니스 영양 가이드 | TennisFriends",
    description: "테니스 영양 가이드 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/nutrition-guide",
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
