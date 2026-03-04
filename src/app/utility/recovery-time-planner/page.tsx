import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '회복 시간 플래너 | TennisFriends',
  description: '훈련 강도와 경기 빈도에 맞춰 회복 시간을 계획하는 테니스 전용 플래너입니다.',
  alternates: { canonical: `${SITE_URL}/utility/recovery-time-planner` },
};

export default function RecoveryTimePlannerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">회복 시간 플래너</h1>
      <p className="text-text-muted mb-6">
        연속 경기/훈련 이후 피로도를 기준으로 휴식, 저강도 훈련, 기술훈련 비중을 계획해 보세요.
      </p>

      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">추천 회복 루틴 예시</h2>
        <ol className="list-decimal pl-5 space-y-1 text-text-muted">
          <li>경기 직후 30분 이내 수분·탄수화물 보충</li>
          <li>당일 저강도 스트레칭 15분</li>
          <li>다음날 기술 위주 45분 + 고강도 금지</li>
          <li>48시간 후 정상 강도 복귀 여부 체크</li>
        </ol>
      </section>

      <Link href="/utility" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">유틸리티 목록</Link>
    </main>
  );
}
