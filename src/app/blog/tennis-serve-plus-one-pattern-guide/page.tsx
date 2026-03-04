import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '서브+1 패턴 플레이 가이드 | TennisFriends',
  description: '서브 다음 한 샷(plus one) 설계로 포인트 주도권을 잡는 실전 패턴 가이드.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-serve-plus-one-pattern-guide` },
  openGraph: {
    title: '서브+1 패턴 플레이 가이드',
    description: '서브 이후 첫 볼 선택으로 득점 확률을 높이는 법.',
    url: `${SITE_URL}/blog/tennis-serve-plus-one-pattern-guide`,
    type: 'article',
  },
};

export default function TennisServePlusOnePatternGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">서브+1 패턴 플레이 가이드</h1>
      <p className="text-text-muted mb-8">서브만 좋다고 점수를 따기 어렵습니다. 다음 샷 계획이 있어야 완성됩니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>와이드 서브 + 오픈 코트 포핸드</li>
        <li>바디 서브 + 짧은 볼 전진</li>
        <li>T존 서브 + 백핸드 크로스 고정</li>
      </ul>
      <Link href="/utility/serve-consistency-tracker" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">서브 일관성 트래커 사용하기</Link>
    </main>
  );
}
