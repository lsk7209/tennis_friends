import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "장비 추천 도구",
  description: "장비 추천 도구 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/equipment-recommendation",
  },
  openGraph: {
    title: "장비 추천 도구 | TennisFriends",
    description: "장비 추천 도구 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/equipment-recommendation",
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
