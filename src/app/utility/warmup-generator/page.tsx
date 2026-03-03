import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '워밍업 루틴 생성기 | TennisFriends',
  description: '경기 전 시간(5/10/15분)에 맞춘 테니스 워밍업 루틴을 자동으로 제안합니다.',
  alternates: { canonical: `${SITE_URL}/utility/warmup-generator` },
};

export default function WarmupGeneratorPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">워밍업 루틴 생성기</h1>
      <p className="text-text-muted mb-6">경기 전 남은 시간에 맞춰 관절 가동성, 풋워크, 랠리 준비 루틴을 빠르게 구성합니다.</p>

      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">10분 루틴 샘플</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>2분: 전신 관절 가동성</li>
          <li>3분: 사이드 스텝/스플릿 스텝</li>
          <li>3분: 미니 랠리 + 컨트롤</li>
          <li>2분: 서브 리듬 체크</li>
        </ul>
      </section>

      <Link href="/utility" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">유틸리티 목록</Link>
    </main>
  );
}
