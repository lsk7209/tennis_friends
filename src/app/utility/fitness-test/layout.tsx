import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "테니스 피트니스 테스트",
  description:
    "테니스에 필요한 체력 요소를 측정하고 종합 점수를 확인하세요. 심폐지구력, 근력, 민첩성 등을 점검합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/fitness-test" },
  path: "/utility/fitness-test",
  type: "website",
  tags: ["테니스 체력 테스트", "피트니스 측정", "테니스 체력", "운동 능력 평가"],
});

export default function FitnessTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
