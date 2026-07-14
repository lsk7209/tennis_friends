import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "워밍업 루틴 빌더",
  description:
    "가용 시간, 경기 유형, 컨디션, 집중 부위를 선택하면 맞춤 워밍업 루틴을 자동으로 생성해주는 인터랙티브 테니스 워밍업 도구입니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/warmup-routine-builder" },
  path: "/utility/warmup-routine-builder",
  type: "website",
  tags: ["테니스 워밍업", "경기 전 준비", "훈련 루틴", "워밍업 루틴 생성기"],
});

export default function WarmupRoutineBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
