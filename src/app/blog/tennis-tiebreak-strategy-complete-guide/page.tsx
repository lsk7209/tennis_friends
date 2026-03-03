import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '타이브레이크 전략 완전정복 | TennisFriends',
  description: '타이브레이크에서 실수 줄이고 승률을 높이는 서브·리턴·멘탈 운영 전략.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-tiebreak-strategy-complete-guide` },
  openGraph: {
    title: '타이브레이크 전략 완전정복',
    description: '타이브레이크 승률을 높이는 운영법.',
    url: `${SITE_URL}/blog/tennis-tiebreak-strategy-complete-guide`,
    type: 'article',
  },
};

export default function TennisTiebreakStrategyCompleteGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">타이브레이크 전략 완전정복</h1>
      <p className="text-text-muted mb-8">타이브레이크는 기술보다 선택이 승부를 가릅니다. 첫 2포인트와 미니브레이크 이후의 운영이 특히 중요합니다.</p>

      <h2 className="text-2xl font-semibold mb-3">실전 체크리스트</h2>
      <ol className="list-decimal pl-5 space-y-2 text-text-muted mb-8">
        <li>첫 서브 확률을 5% 낮추더라도 인플레이 비율을 높입니다.</li>
        <li>리턴은 깊이를 우선해 상대에게 먼저 공격 리스크를 떠넘깁니다.</li>
        <li>포인트 간 루틴(호흡-시선-결정)을 고정해 감정 변동을 줄입니다.</li>
      </ol>

      <Link href="/utility/tiebreak-pressure-test" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">타이브레이크 압박 테스트(예정)</Link>
    </main>
  );
}
