import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTRP 테스트 | 테니스 실력 등급 자가 진단",
  description:
    "15문항 비공식 자가점검으로 NTRP 기준의 대략적인 실력 구간을 가늠해 보세요. 스트로크·서브·경기 경험 답변을 합산한 참고 결과이며 공식 등급이 아닙니다.",
  alternates: {
    canonical: "https://tennisfrens.com/utility/ntrp-test",
  },
  openGraph: {
    title: "NTRP 테스트 | 테니스 실력 등급 자가 진단",
    description:
      "15문항 비공식 자가점검으로 NTRP 기준의 대략적인 실력 구간을 가늠해 보세요. 스트로크·서브·경기 경험 답변을 합산한 참고 결과이며 공식 등급이 아닙니다.",
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
