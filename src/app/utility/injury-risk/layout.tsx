import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata-helpers';

// Enhanced metadata with Naver optimization
export const metadata: Metadata = generatePageMetadata({
  title: '부상 위험 예측',
  description: '데이터 기반 분석으로 부상 위험도를 체크하고, 안전한 플레이를 위한 맞춤형 조언을 받아보세요. 나이, 플레이 환경, 이전 부상 이력을 종합 분석합니다.',
  alternates: { canonical: "https://www.tennisfrens.com/utility/injury-risk" },
  path: '/utility/injury-risk',
  type: 'website',
  tags: ['부상 예방', '테니스 부상', '부상 위험도', '테니스 엘보우', '테니스 안전', '부상 리스크'],
});

export default function InjuryRiskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

