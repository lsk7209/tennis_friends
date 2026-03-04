import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '초보자를 위한 리턴 포지셔닝 | TennisFriends',
  description: '서버 유형별 기본 리턴 위치와 조정 원칙을 쉽게 정리한 초보자 가이드입니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-return-positioning-beginner-guide` },
  openGraph: {
    title: '초보자를 위한 리턴 포지셔닝',
    description: '리턴 실수를 줄이는 기본 위치 선정법.',
    url: `${SITE_URL}/blog/tennis-return-positioning-beginner-guide`,
    type: 'article',
  },
};

export default function TennisReturnPositioningBeginnerGuidePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">초보자를 위한 리턴 포지셔닝</h1>
      <p className="text-text-muted mb-8">리턴은 스윙보다 위치가 먼저입니다. 한 발 차이로 타점 여유와 실수율이 크게 달라집니다.</p>
      <h2 className="text-2xl font-semibold mb-3">기본 원칙</h2>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>빅서버 상대: 베이스라인 뒤 1~2보</li>
        <li>세컨드 서브: 베이스라인 안 1보 진입</li>
        <li>포인트 초반에는 방향보다 깊이 우선</li>
      </ul>
      <Link href="/utility/return-position-advisor" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">리턴 포지션 추천기(예정)</Link>
    </main>
  );
}
