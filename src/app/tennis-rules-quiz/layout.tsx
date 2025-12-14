import { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/seo/metadata-helpers';

// Enhanced metadata with Naver optimization
export const metadata: Metadata = generatePageMetadata({
  title: '테니스 규칙 퀴즈',
  description: '12문항 랜덤 퀴즈로 실전 규칙 감각을 점검하고 약점을 분석해보세요. 각 문항마다 정답과 상세한 해설을 즉시 확인할 수 있습니다.',
  path: '/tennis-rules-quiz',
  type: 'website',
  tags: ['테니스 규칙', '테니스 퀴즈', '테니스 규칙 학습', '테니스 기본 규칙', '테니스 점수 체계'],
});

export default function TennisRulesQuizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
