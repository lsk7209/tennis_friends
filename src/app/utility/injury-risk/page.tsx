'use client';

import Link from 'next/link';
import { AlertTriangle, CheckCircle2, Heart, Shield, Target, Zap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import FAQSection from '@/components/seo/FAQSection';
import SoftwareApplicationSchema from '@/components/seo/SoftwareApplicationSchema';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tennisfrens.com';
const utilityUrl = `${siteUrl}/utility/injury-risk`;

const factors = [
  { title: '플레이 빈도', description: '최근 경기와 연습량이 급격히 늘었는지 확인합니다.', icon: <Zap className="h-5 w-5 text-amber-600" /> },
  { title: '기존 통증', description: '손목, 팔꿈치, 어깨, 무릎의 반복 통증 여부를 먼저 봅니다.', icon: <AlertTriangle className="h-5 w-5 text-rose-600" /> },
  { title: '장비 상태', description: '신발 마모, 스트링 텐션, 라켓 무게가 몸에 무리를 주는지 체크합니다.', icon: <Shield className="h-5 w-5 text-sky-600" /> },
  { title: '회복 루틴', description: '수면, 수분, 스트레칭, 경기 후 쿨다운 습관을 함께 봅니다.', icon: <Heart className="h-5 w-5 text-emerald-600" /> },
];

const faqItems = [
  { question: '이 도구는 무엇을 확인하나요?', answer: '테니스 플레이 빈도, 기존 통증, 장비 상태, 회복 루틴 같은 요소를 바탕으로 부상 위험 신호를 빠르게 점검합니다.' },
  { question: '의학적 진단을 대신하나요?', answer: '아니요. 이 페이지는 자가 점검용 참고 도구이며, 실제 통증이나 부상 의심이 있으면 전문 진료가 우선입니다.' },
  { question: '언제 다시 체크하는 게 좋나요?', answer: '대회 전, 연습량을 갑자기 늘린 뒤, 신발이나 스트링을 바꾼 뒤, 통증이 반복될 때 다시 보는 편이 좋습니다.' },
];

export default function InjuryRiskPage() {
  return (
    <>
      <SoftwareApplicationSchema
        name="부상 위험 점검"
        description="테니스 플레이 빈도, 통증 이력, 장비 상태, 회복 루틴을 바탕으로 부상 위험 신호를 점검하는 웹 도구입니다."
        url={utilityUrl}
        applicationCategory="HealthApplication"
        featureList={['부상 위험 점검', '자가 체크', '예방 가이드']}
        offers={{ price: '0', priceCurrency: 'KRW' }}
      />

      <main className="min-h-screen bg-[linear-gradient(180deg,_#fff7ed_0%,_#ffffff_34%,_#f8fafc_100%)]">
        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-[32px] bg-gradient-to-r from-red-600 to-orange-500 px-8 py-10 text-white shadow-xl">
              <Badge className="bg-white/15 text-white hover:bg-white/15">부상 위험 점검</Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">안전하게 오래 치기 위한 테니스 부상 체크</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-orange-50">
                테니스는 누적 피로와 반복 동작이 크기 때문에 큰 통증이 오기 전에 신호를 먼저 보는 편이 중요합니다.
                이 도구는 부상 위험을 빠르게 확인하고 예방 루틴을 정리하는 데 초점을 둡니다.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link href="/utility/injury-risk/test">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-orange-50">
                    <Shield className="mr-2 h-5 w-5" />
                    위험도 체크 시작
                  </Button>
                </Link>
                <Link href="/utility/recovery-routine-generator">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    회복 루틴 보기
                  </Button>
                </Link>
              </div>
            </div>

            <section className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {factors.map((factor) => (
                <Card key={factor.title} className="border-slate-200 bg-white shadow-sm">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-slate-100">
                      {factor.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-slate-900">{factor.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{factor.description}</p>
                  </CardContent>
                </Card>
              ))}
            </section>

            <section className="mt-10 rounded-[28px] bg-slate-900 px-8 py-8 text-white shadow-xl">
              <h2 className="text-2xl font-semibold">체크 후 바로 할 일</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div>
                  <div className="flex items-center gap-2 text-slate-300"><CheckCircle2 className="h-4 w-4" />플레이 빈도 조정</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">통증 신호가 있으면 강도보다 볼륨을 먼저 줄이는 편이 안전합니다.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-300"><Target className="h-4 w-4" />장비 점검</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">신발 밑창, 스트링 상태, 그립 마모를 함께 확인하세요.</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-300"><Heart className="h-4 w-4" />회복 루틴 고정</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">수분, 수면, 쿨다운 스트레칭이 결국 누적 부하를 줄입니다.</p>
                </div>
              </div>
            </section>

            <section className="mt-10">
              <FAQSection items={faqItems} id="injury-risk-faq" title="자주 묻는 질문" />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
