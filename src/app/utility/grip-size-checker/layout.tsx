import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grip Size Checker",
  description: "Grip Size Checker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/grip-size-checker",
  },
  openGraph: {
    title: "Grip Size Checker | TennisFriends",
    description: "Grip Size Checker — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/grip-size-checker",
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
