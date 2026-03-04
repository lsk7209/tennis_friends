import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '수분 섭취 플래너 | TennisFriends',
  description: '훈련 시간과 기온에 맞춰 경기 전·중·후 수분/전해질 섭취 계획을 세워보세요.',
  alternates: { canonical: `${SITE_URL}/utility/hydration-planner` },
};

export default function HydrationPlannerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">수분 섭취 플래너</h1>
      <p className="text-text-muted mb-6">더운 날씨 경기에서 퍼포먼스를 유지하기 위한 기본 수분 전략을 제공합니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">권장 템플릿</h2>
        <ol className="list-decimal pl-5 space-y-1 text-text-muted">
          <li>경기 2시간 전: 물 400~600ml</li>
          <li>경기 중: 체감 땀량에 따라 15~20분마다 100~200ml</li>
          <li>경기 후: 손실 체중 기반 보충</li>
        </ol>
      </section>
      <Link href="/blog/tennis-hydration-electrolyte-guide" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">수분 전략 글(예정) 보기</Link>
    </main>
  );
}
