import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 집중 루틴",
  description:
    "경기 중 흔들리지 않는 집중력을 만드는 훈련 루틴입니다. 호흡, 시선, 루틴 등 멘탈 집중 기법을 연습하세요.",
  alternates: { canonical: "https://tennisfrens.com/utility/focus-training" },
  path: "/utility/focus-training",
  type: "website",
  tags: ["테니스 집중력", "집중 루틴", "멘탈 훈련", "경기 집중", "테니스 루틴"],
});

export default function FocusTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
