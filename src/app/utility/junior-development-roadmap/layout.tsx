import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junior Development Roadmap",
  description: "Junior Development Roadmap — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/junior-development-roadmap",
  },
  openGraph: {
    title: "Junior Development Roadmap | TennisFriends",
    description: "Junior Development Roadmap — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/junior-development-roadmap",
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
