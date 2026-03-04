import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '경기 저널링 방법론 | TennisFriends',
  description: '경기 후 기록을 통해 개선 포인트를 빠르게 찾는 테니스 저널링 방법입니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-match-journaling-method` },
  openGraph: {
    title: '경기 저널링 방법론',
    description: '실력 향상을 위한 경기 기록 루틴 설계.',
    url: `${SITE_URL}/blog/tennis-match-journaling-method`,
    type: 'article',
  },
};

export default function TennisMatchJournalingMethodPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">경기 저널링 방법론</h1>
      <p className="text-text-muted mb-8">경기 감정 기록과 전술 기록을 분리하면 다음 연습 방향이 명확해집니다.</p>
      <ol className="list-decimal pl-5 space-y-2 text-text-muted mb-8">
        <li>결과보다 패턴(실점 반복 상황)을 먼저 기록</li>
        <li>기술 1개 + 전술 1개 + 멘탈 1개 개선 목표 설정</li>
        <li>다음 훈련 메뉴를 저널과 연결</li>
      </ol>
      <Link href="/utility/video-tagging-assistant" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">영상 태깅 도우미 사용하기</Link>
    </main>
  );
}
