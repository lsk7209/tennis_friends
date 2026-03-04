import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '테니스 블로그 - 필승 전략, 팁, 가이드 | Tennis Friends',
  description: '테니스 실력 향상을 위한 전략, 기술 팁, 장비 가이드 등 다양한 정보를 제공합니다. 초보자부터 상급자까지 도움이 되는 유용한 글을 만나보세요.',
  keywords: ['테니스', '블로그', '테니스 팁', '테니스 가이드', '테니스 기술', '테니스 레슨'],
  alternates: {
    canonical: 'https://tennisfrens.com/blog',
  },
  openGraph: {
    title: '테니스 블로그 - 필승 전략, 팁, 가이드 | Tennis Friends',
    description: '테니스 실력 향상을 위한 전략, 기술 팁, 장비 가이드 등 다양한 정보를 제공합니다.',
    type: 'website',
    url: 'https://tennisfrens.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

