import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '테니스 블로그 | TennisFriends',
  description: '테니스 실력 향상을 위한 전문적인 가이드와 최신 정보를 제공합니다. 초보자부터 프로 선수까지 모두가 즐길 수 있는 콘텐츠를 준비하고 있습니다.',
  keywords: ['테니스', '블로그', '테니스 팁', '테니스 가이드', '테니스 기술'],
  openGraph: {
    title: '테니스 블로그 | TennisFriends',
    description: '테니스 실력 향상을 위한 전문적인 가이드와 최신 정보를 제공합니다.',
    type: 'website',
    url: 'https://www.tennisfrens.com/blog',
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

