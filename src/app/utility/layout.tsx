import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const metadata: Metadata = {
  title: '테니스 유틸리티 도구 모음 | TennisFriends',
  description: '테니스 실력 향상을 위한 다양한 스마트 도구들을 제공합니다. NTRP 실력 테스트, 스트링 텐션 계산기, 부상 위험도 평가, 플레이 스타일 진단 등 50개 이상의 전문 도구를 무료로 이용하세요.',
  keywords: ['테니스 유틸리티', '테니스 도구', 'NTRP 테스트', '스트링 텐션', '부상 예방', '테니스 계산기', '테니스 분석'],
  alternates: {
    canonical: `${siteUrl}/utility`,
  },
  openGraph: {
    title: '테니스 유틸리티 도구 모음 | TennisFriends',
    description: '테니스 실력 향상을 위한 다양한 스마트 도구들을 제공합니다. 50개 이상의 전문 도구를 무료로 이용하세요.',
    url: `${siteUrl}/utility`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
};

import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

export default function UtilityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: '홈', item: '/' },
          { name: '유틸리티', item: '/utility' },
        ]}
      />
      {children}
    </>
  );
}

