import { Metadata } from 'next';
import { getSiteUrl } from '@/lib/site';

export const metadata: Metadata = {
  title: '테니스 블로그 - 전략, 기술, 장비 가이드 | TennisFriends',
  description: '테니스 실력 향상을 위한 전략, 기술 팁, 장비 가이드, 훈련법 등 전문가가 작성한 테니스 콘텐츠를 만나보세요. 초보자부터 상급자까지 단계별 가이드 제공.',
  keywords: ['테니스 블로그', '테니스 팁', '테니스 전략', '테니스 기술', '테니스 레슨', '테니스 가이드', '테니스 훈련법'],
  alternates: {
    canonical: `${getSiteUrl()}/blog`,
  },
  openGraph: {
    title: '테니스 블로그 - 전략, 기술, 장비 가이드 | TennisFriends',
    description: '테니스 실력 향상을 위한 전략, 기술 팁, 장비 가이드 등 전문가가 작성한 테니스 콘텐츠.',
    type: 'website',
    url: `${getSiteUrl()}/blog`,
    images: [{
      url: `${getSiteUrl()}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: '테니스 블로그 - TennisFriends',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 블로그 - 전략, 기술, 장비 가이드',
    description: '테니스 실력 향상을 위한 전략, 기술 팁, 장비 가이드.',
    images: [`${getSiteUrl()}/opengraph-image`],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

