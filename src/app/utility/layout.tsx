import { Metadata } from 'next';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';

export const metadata: Metadata = {
  title: '테니스 유틸리티 도구 모음',
  description: '테니스 실력 향상을 위한 66개 무료 도구. NTRP 자가점검, 스트링 텐션 계산기, 부상 예방 참고 점검, 플레이 스타일 테스트, 장비 추천, 훈련 계획 등. 결과는 참고용입니다.',
  keywords: ['테니스 유틸리티', '테니스 도구', 'NTRP 테스트', '스트링 텐션', '부상 예방', '테니스 계산기', '테니스 분석'],
  alternates: {
    canonical: `${siteUrl}/utility`,
  },
  openGraph: {
    title: '테니스 유틸리티 도구 모음',
    description: '테니스 실력 향상을 위한 66개 무료 도구. 결과는 참고용입니다.',
    url: `${siteUrl}/utility`,
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
    images: [{
      url: `${siteUrl}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: '테니스 유틸리티 도구 모음 - TennisFriends',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 유틸리티 도구 모음',
    description: '66개 무료 테니스 도구 모음',
    images: [`${siteUrl}/opengraph-image`],
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

