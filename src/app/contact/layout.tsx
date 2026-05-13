import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '문의하기 | TennisFriends',
  description: 'TennisFriends에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락주세요. 빠른 시일 내에 답변드리겠습니다.',
  keywords: ['TennisFriends 문의', '테니스 문의', '고객 지원', '제안하기', '피드백'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/contact',
  },
  openGraph: {
    title: '문의하기 | TennisFriends',
    description: 'TennisFriends에 대한 문의사항이나 제안사항이 있으시면 언제든지 연락주세요.',
    url: 'https://www.tennisfrens.com/contact',
    type: 'website',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

