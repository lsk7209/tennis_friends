import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult Beginner Roadmap",
  description: "Adult Beginner Roadmap — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://www.tennisfrens.com/utility/adult-beginner-roadmap",
  },
  openGraph: {
    title: "Adult Beginner Roadmap | TennisFriends",
    description: "Adult Beginner Roadmap — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://www.tennisfrens.com/utility/adult-beginner-roadmap",
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
