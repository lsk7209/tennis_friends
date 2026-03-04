import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '원정 피로도 추정기 | TennisFriends',
  description: '이동 시간, 수면 손실, 경기 강도를 기반으로 원정 경기 피로도를 추정합니다.',
  alternates: { canonical: `${SITE_URL}/utility/travel-fatigue-estimator` },
};

export default function TravelFatigueEstimatorPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">원정 피로도 추정기</h1>
      <p className="text-text-muted mb-6">장거리 이동 후 경기력 저하를 줄이기 위해 컨디션 위험도를 사전 점검하세요.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">평가 항목</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>총 이동 시간(door-to-door)</li>
          <li>수면 손실 시간</li>
          <li>이동 직후 경기 여부</li>
          <li>최근 7일 누적 훈련량</li>
        </ul>
      </section>
      <Link href="/utility/jetlag-adjustment-planner" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">시차 적응 플래너로 이동</Link>
    </main>
  );
}
