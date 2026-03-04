import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '경기 영상 태깅 도우미 | TennisFriends',
  description: '포인트 유형과 에러 패턴을 빠르게 태깅해 영상 분석 시간을 줄여주는 유틸리티입니다.',
  alternates: { canonical: `${SITE_URL}/utility/video-tagging-assistant` },
};

export default function VideoTaggingAssistantPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">경기 영상 태깅 도우미</h1>
      <p className="text-text-muted mb-6">서브/리턴/랠리 종료 패턴을 태깅해 개선 우선순위를 빠르게 도출합니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">태깅 카테고리</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>득점 패턴: 서브+1, 리턴+1, 랠리 우위</li>
          <li>실점 패턴: 언포스드 에러, 포지션 미스, 선택 오류</li>
          <li>압박 구간: 30-30, 듀스, 브레이크포인트</li>
        </ul>
      </section>
      <Link href="/blog/tennis-video-analysis-for-amateurs" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">영상 분석 가이드 보기</Link>
    </main>
  );
}
