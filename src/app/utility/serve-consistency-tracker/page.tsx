import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '서브 일관성 트래커 | TennisFriends',
  description: '서브 성공률, 1서브 비율, 더블폴트를 기록해 서브 일관성을 추적하세요.',
  alternates: { canonical: `${SITE_URL}/utility/serve-consistency-tracker` },
};

export default function ServeConsistencyTrackerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">서브 일관성 트래커</h1>
      <p className="text-text-muted mb-6">
        최근 10경기 기준으로 1서브 성공률, 2서브 득점률, 더블폴트 빈도를 기록해 서브 안정성을 확인하세요.
      </p>

      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">기록 항목</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>1서브 성공률 (%)</li>
          <li>2서브 포인트 획득률 (%)</li>
          <li>더블폴트 개수</li>
          <li>중요 포인트(30-30 이상) 서브 성공률</li>
        </ul>
      </section>

      <div className="flex gap-3">
        <Link href="/utility" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">유틸리티 목록</Link>
        <Link href="/blog/tennis-serve-placement-guide" className="px-4 py-2 rounded-lg border border-white/20">관련 가이드 보기</Link>
      </div>
    </main>
  );
}
