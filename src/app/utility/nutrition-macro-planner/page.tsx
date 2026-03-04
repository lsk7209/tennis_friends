import { Metadata } from 'next';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: '영양 매크로 플래너 | TennisFriends',
  description: '훈련일/경기일/회복일에 맞춰 탄수화물·단백질·지방 비율을 계획하는 도구입니다.',
  alternates: { canonical: `${SITE_URL}/utility/nutrition-macro-planner` },
};

export default function NutritionMacroPlannerPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-3xl font-bold mb-4">영양 매크로 플래너</h1>
      <p className="text-text-muted mb-6">테니스 일정에 맞춘 하루 섭취 비율을 설정해 에너지 저하를 줄입니다.</p>
      <section className="rounded-xl border border-white/10 bg-content-dark p-6 mb-6">
        <h2 className="text-xl font-semibold mb-3">권장 템플릿</h2>
        <ul className="list-disc pl-5 space-y-1 text-text-muted">
          <li>고강도 훈련일: 탄수화물 비중 상향</li>
          <li>회복일: 단백질·미세영양소 중심</li>
          <li>대회일: 소화 쉬운 탄수화물 분할 섭취</li>
        </ul>
      </section>
      <Link href="/blog/tennis-hydration-electrolyte-guide" className="px-4 py-2 rounded-lg bg-primary text-background-dark font-semibold">수분·전해질 가이드 보기</Link>
    </main>
  );
}
