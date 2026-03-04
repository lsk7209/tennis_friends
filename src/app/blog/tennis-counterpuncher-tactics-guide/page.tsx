import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '카운터펀처 공략 전술 | TennisFriends',
  description: '수비형 카운터펀처를 상대로 포인트를 설계하는 실전 전술 가이드입니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-counterpuncher-tactics-guide` },
  openGraph: {
    title: '카운터펀처 공략 전술',
    description: '수비형 상대에게 휘둘리지 않는 공격 설계법.',
    url: `${SITE_URL}/blog/tennis-counterpuncher-tactics-guide`,
    type: 'article',
  },
};

export default function TennisCounterpuncherTacticsGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">카운터펀처 공략 전술</h1>
      <p className="text-text-muted mb-8">상대의 안정성에 맞서려면 더 세게 치는 것보다 포인트 구조를 바꿔야 합니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>코너 고집보다 깊이+각도 조합으로 공간 열기</li>
        <li>긴 랠리 후 짧은 볼 전환 빈도 높이기</li>
        <li>득점 시도 타이밍을 1~2구 늦춰 범실 최소화</li>
      </ul>
      <Link href="/utility/match-analyzer" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">경기 분석 도구로 전술 점검하기</Link>
    </main>
  );
}
