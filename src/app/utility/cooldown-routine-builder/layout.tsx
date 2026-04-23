import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "쿨다운 루틴 빌더",
  description:
    "운동 강도, 사용 부위, 시간을 선택하면 맞춤 쿨다운 루틴을 자동으로 생성해주는 인터랙티브 테니스 쿨다운 도구입니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/cooldown-routine-builder" },
  path: "/utility/cooldown-routine-builder",
  type: "website",
  tags: ["테니스 회복", "쿨다운 루틴", "훈련 후 스트레칭", "쿨다운 루틴 생성기"],
});

export default function CooldownRoutineBuilderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
