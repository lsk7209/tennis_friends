import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '서브 파워를 위한 고관절 모빌리티 | TennisFriends',
  description: '고관절 가동성을 개선해 서브 파워와 안정성을 높이는 루틴 가이드입니다.',
  alternates: { canonical: `${SITE_URL}/blog/tennis-hip-mobility-for-serve-power` },
  openGraph: {
    title: '서브 파워를 위한 고관절 모빌리티',
    description: '가동성 향상으로 서브 효율 높이기.',
    url: `${SITE_URL}/blog/tennis-hip-mobility-for-serve-power`,
    type: 'article',
  },
};

export default function TennisHipMobilityForServePowerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">서브 파워를 위한 고관절 모빌리티</h1>
      <p className="text-text-muted mb-8">팔 스윙보다 먼저 확인해야 할 것은 하체 가동성입니다. 고관절 제한은 서브 파워 손실로 이어집니다.</p>
      <ul className="list-disc pl-5 space-y-2 text-text-muted mb-8">
        <li>워밍업: 90/90 회전 + 런지 트위스트</li>
        <li>메인: 힙 회전 가동 범위 확보 드릴</li>
        <li>정리: 서브 모션에 맞춘 동적 스트레칭</li>
      </ul>
      <Link href="/utility/warmup-generator" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">워밍업 루틴 생성기 사용하기</Link>
    </main>
  );
}
