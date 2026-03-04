import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '리턴 포지션 추천기 | TennisFriends',
  description: '상대 서브 유형(속도/스핀/코스)에 맞춰 기본 리턴 위치를 제안합니다.',
  alternates: { canonical: `${SITE_URL}/utility/return-position-advisor` },
};

export default function ReturnPositionAdvisorPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">리턴 포지션 추천기</h1>
      <p className="text-text-muted mb-6">빅서버, 킥서버, 좌우 코스 편향 서버에 맞는 기본 포지션을 빠르게 정리합니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">추천 로직</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>1서브 평균 속도가 빠를수록 시작 위치를 1~2보 뒤로</li>
          <li>킥서브 빈도가 높을수록 백핸드 타점 확보 우선</li>
          <li>바디 서브 비율이 높으면 준비 폭(stance) 좁게 조정</li>
        </ul>
      </section>
      <Link href="/blog/tennis-return-positioning-beginner-guide" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">리턴 포지셔닝 글 보기</Link>
    </main>
  );
}
