import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '혼복 전략 가이드 | TennisFriends',
  description: '혼합복식에서 포지션·타깃 설정·서브 게임 운영을 체계적으로 정리한 가이드.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-mixed-doubles-strategy-guide` },
  openGraph: {
    title: '혼복 전략 가이드',
    description: '혼합복식에서 실수 줄이고 강점 살리는 운영 전략.',
    url: `${SITE_URL}/blog/tennis-mixed-doubles-strategy-guide`,
    type: 'article',
  },
};

export default function TennisMixedDoublesStrategyGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">혼복 전략 가이드</h1>
      <p className="text-text-muted mb-8">혼복은 역할 분담이 선명할수록 강합니다. 포인트 시작 전 합의가 핵심입니다.</p>
      <ol className="list-decimal pl-5 space-y-2 text-text-muted mb-8">
        <li>서비스 게임: 전위 개입 타이밍 고정</li>
        <li>리턴 게임: 타깃 존을 미리 합의</li>
        <li>위기 점수: 안전 패턴 우선</li>
      </ol>
      <Link href="/utility/doubles-rotation-planner" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">복식 로테이션 플래너 사용하기</Link>
    </main>
  );
}
