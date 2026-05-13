import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "포핸드 안정성 테스트",
  description:
    "포핸드의 일관성, 방향 제어, 파워 밸런스를 테스트하고 개선 포인트를 확인하세요. 포핸드 실력을 객관적으로 진단합니다.",
  alternates: { canonical: "https://www.tennisfrens.com/utility/forehand-stability-test" },
  path: "/utility/forehand-stability-test",
  type: "website",
  tags: ["포핸드 테스트", "포핸드 안정성", "테니스 포핸드", "스트로크 분석"],
});

export default function ForehandStabilityTestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
