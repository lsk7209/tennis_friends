import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '90분 연습 플랜 템플릿 | TennisFriends',
  description: '동호인을 위한 90분 테니스 연습 구성: 워밍업, 기술, 패턴, 매치플레이 템플릿.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-practice-plan-90-min-template` },
  openGraph: {
    title: '90분 연습 플랜 템플릿',
    description: '효율적인 90분 훈련 구성 가이드.',
    url: `${SITE_URL}/blog/tennis-practice-plan-90-min-template`,
    type: 'article',
  },
};

export default function TennisPracticePlan90MinTemplatePage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">90분 연습 플랜 템플릿</h1>
      <p className="text-text-muted mb-8">무작정 치는 연습 대신 구간별 목표를 분리하면 실력 상승 속도가 달라집니다.</p>
      <ol className="list-decimal pl-5 space-y-2 text-text-muted mb-8">
        <li>10분 워밍업</li>
        <li>25분 기술 드릴(포/백/서브)</li>
        <li>25분 패턴 드릴(서브+1, 리턴+1)</li>
        <li>20분 상황 게임</li>
        <li>10분 정리/리뷰</li>
      </ol>
      <Link href="/utility/warmup-generator" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">워밍업 루틴 생성기 사용하기</Link>
    </main>
  );
}
