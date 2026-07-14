import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata-helpers";

export const metadata: Metadata = generatePageMetadata({
  title: "복식 궁합 테스트",
  description:
    "10가지 질문으로 복식 파트너와의 궁합 점수를 확인하세요. 역할 분담, 커뮤니케이션, 전술 조화를 점검합니다.",
  alternates: { canonical: "https://tennisfrens.com/utility/doubles-chemistry-test" },
  path: "/utility/doubles-chemistry-test",
  type: "website",
  tags: ["복식 궁합", "복식 파트너", "테니스 복식", "궁합 테스트"],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
