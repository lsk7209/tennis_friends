import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '복식 커뮤니케이션 큐 | TennisFriends',
  description: '복식에서 파트너와 짧고 정확하게 의사소통하는 핵심 큐를 정리했습니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-doubles-communication-cues` },
  openGraph: {
    title: '복식 커뮤니케이션 큐',
    description: '복식 실수를 줄이는 콜과 신호 체계.',
    url: `${SITE_URL}/blog/tennis-doubles-communication-cues`,
    type: 'article',
  },
};

export default function TennisDoublesCommunicationCuesPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">복식 커뮤니케이션 큐</h1>
      <p className="text-text-muted mb-8">복식은 기술보다 합이 중요합니다. 짧은 콜 4개만 맞춰도 실수율이 크게 줄어듭니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>Mine: 내가 처리</li>
        <li>Switch: 포지션 전환</li>
        <li>Stay: 자리 유지</li>
        <li>Up: 전진 압박</li>
      </ul>
      <Link href="/utility/doubles-rotation-planner" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">복식 로테이션 플래너(예정)</Link>
    </main>
  );
}
