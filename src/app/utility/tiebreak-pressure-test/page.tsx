import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '타이브레이크 압박 테스트 | TennisFriends',
  description: '타이브레이크 상황에서 의사결정과 루틴 안정성을 점검하는 셀프 테스트입니다.',
  alternates: { canonical: `${SITE_URL}/utility/tiebreak-pressure-test` },
};

export default function TiebreakPressureTestPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">타이브레이크 압박 테스트</h1>
      <p className="text-text-muted mb-6">7개 시나리오 질문으로 압박 상황에서의 선택 패턴을 진단합니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">진단 항목</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>첫 서브 성공 집착도</li>
          <li>리턴 깊이 우선순위</li>
          <li>포인트 간 루틴 유지력</li>
          <li>미니브레이크 이후 리셋 능력</li>
        </ul>
      </section>
      <Link href="/blog/tennis-tiebreak-strategy-complete-guide" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">타이브레이크 가이드 보기</Link>
    </main>
  );
}
