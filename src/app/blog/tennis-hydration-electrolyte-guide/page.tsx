import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '수분·전해질 전략 가이드 | TennisFriends',
  description: '훈련/경기 상황별 수분과 전해질 섭취 타이밍을 정리한 실전 가이드입니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-hydration-electrolyte-guide` },
  openGraph: {
    title: '수분·전해질 전략 가이드',
    description: '더운 날씨 경기에서 퍼포먼스를 지키는 수분 전략.',
    url: `${SITE_URL}/blog/tennis-hydration-electrolyte-guide`,
    type: 'article',
  },
};

export default function TennisHydrationElectrolyteGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">수분·전해질 전략 가이드</h1>
      <p className="text-text-muted mb-8">체감 피로가 오기 전에 보충해야 경기력 저하를 막을 수 있습니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>경기 전: 소량씩 나눠 수분 보충</li>
        <li>경기 중: 기온과 땀량에 맞춘 주기 보충</li>
        <li>경기 후: 체중 감소량 기준 회복</li>
      </ul>
      <Link href="/utility/hydration-planner" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">수분 섭취 플래너 사용하기</Link>
    </main>
  );
}
