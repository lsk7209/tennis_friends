import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unforced Error Audit",
  description: "Unforced Error Audit — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/unforced-error-audit",
  },
  openGraph: {
    title: "Unforced Error Audit | TennisFriends",
    description: "Unforced Error Audit — TennisFriends에서 제공하는 테니스 동호인 전용 도구입니다.",
    url: "https://tennisfrens.com/utility/unforced-error-audit",
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
