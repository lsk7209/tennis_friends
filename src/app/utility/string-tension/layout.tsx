import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스트링 텐션 계산기",
  description: "스트링 텐션 계산기 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/string-tension",
  },
  openGraph: {
    title: "스트링 텐션 계산기 | TennisFriends",
    description: "스트링 텐션 계산기 — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/string-tension",
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
