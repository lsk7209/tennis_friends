import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTRP 테스트 | 테니스 실력 등급 자가 진단",
  description:
    "NTRP 기준으로 현재 테니스 실력 등급을 가늠해 보세요. 스트로크·서브·경기 경험 질문으로 내 수준 범위를 확인할 수 있습니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/ntrp-test",
  },
  openGraph: {
    title: "NTRP 테스트 | 테니스 실력 등급 자가 진단",
    description:
      "NTRP 기준으로 현재 테니스 실력 등급을 가늠해 보세요. 스트로크·서브·경기 경험 질문으로 내 수준 범위를 확인할 수 있습니다.",
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
