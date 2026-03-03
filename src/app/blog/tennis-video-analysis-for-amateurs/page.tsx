import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '동호인을 위한 경기 영상 분석법 | TennisFriends',
  description: '스마트폰 영상만으로도 경기력을 개선할 수 있는 핵심 분석 프레임워크를 소개합니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-video-analysis-for-amateurs` },
  openGraph: {
    title: '동호인을 위한 경기 영상 분석법',
    description: '쉽고 빠른 셀프 영상 분석 방법.',
    url: `${SITE_URL}/blog/tennis-video-analysis-for-amateurs`,
    type: 'article',
  },
};

export default function TennisVideoAnalysisForAmateursPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">동호인을 위한 경기 영상 분석법</h1>
      <p className="text-text-muted mb-8">영상 분석은 복잡할 필요가 없습니다. 포지션, 임팩트 타이밍, 범실 패턴 3가지만 봐도 개선 포인트가 선명해집니다.</p>

      <h2 className="text-2xl font-semibold mb-3">초보 분석 프레임</h2>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>포인트 시작 3초 전: 준비자세/리턴 위치</li>
        <li>임팩트 순간: 타점 높이와 몸의 균형</li>
        <li>포인트 종료 후: 다음 포인트 루틴 회복 속도</li>
      </ul>

      <Link href="/utility/video-tagging-assistant" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">영상 태깅 도우미(예정)</Link>
    </main>
  );
}
