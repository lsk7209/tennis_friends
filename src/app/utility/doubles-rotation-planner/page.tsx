import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '복식 로테이션 플래너 | TennisFriends',
  description: '복식에서 서비스 게임/리턴 게임별 위치 전환 규칙을 팀 스타일에 맞춰 설계합니다.',
  alternates: { canonical: `${SITE_URL}/utility/doubles-rotation-planner` },
};

export default function DoublesRotationPlannerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">복식 로테이션 플래너</h1>
      <p className="text-text-muted mb-6">파트너 조합(공격형/수비형)에 맞춰 포칭, 스위치, 스테이 규칙을 미리 정합니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">기본 플랜 예시</h2>
        <ol className="list-decimal pl-5 space-y-1 text-text-muted">
          <li>40-30 리드 상황: 전위 적극 포칭</li>
          <li>30-40 위기 상황: 라인 커버 우선, 무리한 포칭 금지</li>
          <li>리턴 게임 듀스: 백핸드 크로스 리턴 + 전위 고정</li>
        </ol>
      </section>
      <Link href="/blog/tennis-doubles-communication-cues" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">복식 커뮤니케이션 글 보기</Link>
    </main>
  );
}
