import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '체성분 변화 트래커 | TennisFriends',
  description: '체중·체지방·근육량 추이를 기록해 훈련 성과와 회복 상태를 추적합니다.',
  alternates: { canonical: `${SITE_URL}/utility/body-composition-tracker` },
};

export default function BodyCompositionTrackerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">체성분 변화 트래커</h1>
      <p className="text-text-muted mb-6">숫자 변화만 보는 것이 아니라 경기 퍼포먼스와 함께 비교해 해석하세요.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">추천 기록 주기</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>체중: 주 2~3회</li>
          <li>체지방/근육량: 2주 1회</li>
          <li>수면·피로·훈련 강도: 매일</li>
        </ul>
      </section>
      <Link href="/utility/nutrition-macro-planner" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">영양 매크로 플래너 보기</Link>
    </main>
  );
}
