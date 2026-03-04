import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '시차 적응 플래너 | TennisFriends',
  description: '출발/도착 시간대 기준으로 취침, 식사, 훈련 시간대를 조정하는 플래너입니다.',
  alternates: { canonical: `${SITE_URL}/utility/jetlag-adjustment-planner` },
};

export default function JetlagAdjustmentPlannerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">시차 적응 플래너</h1>
      <p className="text-text-muted mb-6">시차가 큰 원정일수록 생체리듬 조정 계획이 경기력에 큰 영향을 줍니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">기본 적용 순서</h2>
        <ol className="list-decimal pl-5 space-y-1 text-text-muted">
          <li>출발 3일 전부터 취침/기상 시간 30분씩 이동</li>
          <li>도착 후 아침 광노출과 가벼운 유산소 우선</li>
          <li>강훈련은 도착 24~48시간 후 배치</li>
        </ol>
      </section>
      <Link href="/blog/tennis-match-journaling-method" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">원정 컨디션 기록법 보기</Link>
    </main>
  );
}
