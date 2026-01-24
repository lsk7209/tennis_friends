import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '온스 자베르: 튀니지의 마법사',
  description: '다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.',
  keywords: ['테니스', '온스 자베르', 'Ons Jabeur', '드롭샷', '튀니지'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/ons-jabeur',
  },
  openGraph: {
    title: '온스 자배르: 튀니지의 마법사',
    description: '다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.',
    url: 'https://tennisfriends.co.kr/blog/ons-jabeur',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '온스 자베르: 튀니지의 마법사',
    description: '다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'style-variety', text: '경기 스타일: 변화무쌍한 샷 선택', depth: 2 },
  { id: 'drop-shot-master', text: '드롭샷의 달인', depth: 2 },
  { id: 'pioneer', text: '아랍권 여성 테니스의 개척자', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: '자베르의 가장 큰 강점은 무엇인가요?',
    a: '예측 불가능한 샷 선택과 창의성입니다. 슬라이스, 드롭샷, 로브를 자유자재로 구사하며 상대를 끊임없이 당황시킵니다.'
  },
  {
    q: '그녀가 이룬 역사적 성과는?',
    a: '아랍권 여성 최초로 그랜드 슬램 결승에 진출했으며(윔블던, US오픈), WTA 랭킹 2위까지 올랐습니다.'
  },
  {
    q: '자베르의 별명 "튀니지의 마법사"의 유래는?',
    a: '마법사처럼 다양한 샷을 꺼내며 상대를 현혹시키는 플레이 스타일 때문에 붙여진 별명입니다.'
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">온스 자베르</Badge>
            <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">드롭샷</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            온스 자베르: 튀니지의 마법사
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르의 창의적 테니스를 분석합니다.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">5분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="ons-jabeur" date="2026-01-24" title="온스 자베르: 튀니지의 마법사" excerpt="다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <p>
              온스 자베르(Ons Jabeur)는 WTA 투어에서 가장 독창적인 테니스를 구사하는 선수입니다. 다른 선수들이 파워로 밀어붙일 때, 그녀는 **다양성(Variety)**으로 승부합니다. 슬라이스, 드롭샷, 로브, 앵글샷... 그녀의 도구함에는 모든 종류의 샷이 들어 있습니다. "튀니지의 마법사"라는 별명이 딱 어울리는 그녀의 테니스를 살펴봅니다.
            </p>

            <h2 id="style-variety">경기 스타일: 변화무쌍한 샷 선택</h2>
            <p>
              자베르의 테니스는 **'읽을 수 없음'**에 있습니다. 같은 자세에서 플랫 드라이브가 나올 수도, 날카로운 슬라이스가 나올 수도, 깜짝 드롭샷이 나올 수도 있습니다. 상대는 그녀가 무엇을 칠지 예측할 수 없어 항상 반 박자 늦게 반응하게 됩니다. 이런 스타일은 과거의 전설 마르티나 힝기스를 연상시키며, 현대 파워 테니스 시대에 신선한 대안을 제시합니다.
            </p>

            <h2 id="drop-shot-master">드롭샷의 달인</h2>
            <p>
              그녀의 시그니처 샷은 단연 **드롭샷**입니다. 베이스라인에서의 강타 중간에 갑자기 들어오는 부드러운 터치의 드롭샷은 상대를 전력 질주하게 만듭니다. 그리고 상대가 네트 앞으로 달려왔을 때, 그녀는 로브로 다시 뒤로 보내버립니다. 이 **드롭샷-로브 콤보**는 상대의 체력을 빼는 동시에 심리적으로도 지치게 만듭니다.
            </p>

            <h2 id="pioneer">아랍권 여성 테니스의 개척자</h2>
            <p>
              자베르는 단순한 선수 이상입니다. 그녀는 아랍권과 아프리카 여성들에게 **롤 모델**입니다. 윔블던과 US 오픈 결승에 진출하며 아랍 여성 최초의 기록을 세웠고, 이는 수많은 어린 소녀들에게 꿈을 심어주었습니다. "나는 나를 따르는 사람들을 위해 문을 여는 것"이라는 그녀의 말은 스포츠를 넘어선 사회적 의미를 담고 있습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              온스 자베르는 테니스가 단순히 힘의 게임이 아니라 **두뇌 게임**임을 증명합니다. 그녀의 마법 같은 플레이는 앞으로도 계속 우리를 즐겁게 해줄 것입니다.
            </p>

          </div>

          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">관련 자료</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    내부 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/tennis-drop-shot-mastery" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎾</span>
                        <span className="font-medium">드롭샷 마스터하기</span>
                      </Link>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                    추천 링크
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <a href="https://www.wtatennis.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">WTA 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
