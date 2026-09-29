import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata-helpers';

// Enhanced metadata with Naver optimization
export const metadata: Metadata = generatePageMetadata({
  title: '테니스 부상 예방 참고 점검',
  description: '플레이 환경과 이전 부상 이력 등 입력 항목을 점검하고 일반적인 예방 정보를 확인하세요. 의학적 진단이나 개인별 위험 예측은 아닙니다.',
  alternates: { canonical: "https://tennisfrens.com/utility/injury-risk" },
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

