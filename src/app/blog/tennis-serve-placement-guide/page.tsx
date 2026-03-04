import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '테니스 서브 코스 공략 가이드 | TennisFriends',
  description: '와이드, 바디, T존 서브를 점수 상황별로 활용하는 실전 코스 공략 가이드.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-serve-placement-guide` },
  openGraph: {
    title: '테니스 서브 코스 공략 가이드',
    description: '점수 상황별 서브 코스 선택 원칙과 실전 패턴 정리.',
    url: `${SITE_URL}/blog/tennis-serve-placement-guide`,
    type: 'article',
  },
};

export default function TennisServePlacementGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">테니스 서브 코스 공략 가이드</h1>
      <p className="text-text-muted mb-8">서브의 속도보다 중요한 건 상황에 맞는 코스 선택입니다. 와이드/바디/T존을 점수와 상대 성향에 맞춰 사용해 보세요.</p>

      <h2 className="text-2xl font-semibold mb-3">핵심 원칙 3가지</h2>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>리스크가 큰 점수(브레이크포인트)에서는 바디·안전 코스를 우선합니다.</li>
        <li>상대가 리턴 위치를 고정하면 다음 포인트에 반대 코스를 즉시 사용합니다.</li>
        <li>서브+1 계획(다음 샷 위치)까지 함께 결정해야 성공률이 올라갑니다.</li>
      </ul>

      <Link href="/utility/serve-consistency-tracker" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">서브 일관성 트래커 사용하기</Link>
    </main>
  );
}
