import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '소라나 크르스테아 선수 프로필과 스토리',
  description: '30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.',
  keywords: ['테니스', '소라나 크르스테아', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/sorana-cirstea',
  },
  openGraph: {
    title: '소라나 크르스테아 선수 프로필과 스토리',
    description: '30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.',
    url: 'https://tennisfriends.co.kr/blog/sorana-cirstea',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '소라나 크르스테아 선수 프로필과 스토리',
    description: '30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background', text: '성장 배경', depth: 2 },
  { id: 'play-style', text: '경기 스타일', depth: 2 },
  { id: 'why-notable', text: '주목해야 할 이유', depth: 2 },
  { id: 'stats-analysis', text: '스탯 분석', depth: 2 },
  { id: 'signature-match', text: '명장면 (Signature Match)', depth: 2 },
  { id: 'fan-appeal', text: '팬 어필 포인트', depth: 2 },
  { id: 'recent-form', text: '최근 폼과 전망', depth: 2 },
];

const faqs = [
  {
    "q": "크르스테아는 결혼했나요?",
    "a": "아직 미혼입니다. 테니스 선수인 산티아고 히랄도(콜롬비아)와 3년간 교제했었으며, 현재는 테니스에 집중하고 있습니다."
  },
  {
    "q": "그녀의 취미는 무엇인가요?",
    "a": "독서와 쇼핑을 즐깁니다. 또한 6개 국어(루마니아어, 영어, 스페인어, 프랑스어 등)를 구사하는 능력자이기도 합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '소라나 크르스테아', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            소라나 크르스테아
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">8분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026. 01. 24</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="sorana-cirstea" date="2026-01-24"
        title="소라나 크르스테아 선수 프로필과 스토리"
        excerpt="30대에 전성기를 맞이한 루마니아의 &quot;공격 본능&quot;, 꾸준함의 대명사."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/50 dark:to-indigo-950/50 rounded-2xl p-6 md:p-8 mb-10 border border-blue-100 dark:border-blue-900">
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 leading-relaxed font-medium mb-0">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3 align-middle" />
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 30대에 전성기를 맞이한 루마니아의 "공격 본능", 꾸준함의 대명사.
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>루마니아 흐레슈트에서 태어났습니다. 4살 때 어머니의 권유로 테니스를 시작했습니다. 슈테피 그래프를 동경하며 자랐고, 어릴 때부터 공격적인 테니스를 선호했습니다. 2009년 롤랑가로스 8강에 오르며 혜성처럼 등장했고, 긴 슬럼프를 겪기도 했지만 30대에 들어 제2의 전성기를 구가하고 있습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"공격적인 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비를 하기보다는 먼저 공격해서 랠리를 끝내려고 합니다. 플랫성 구질의 포핸드와 백핸드가 네트 위를 낮게 깔고 지나갑니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 파워가 실린 포핸드 스트로크가 주무기입니다. 좌우 코너를 찌르는 각도가 예리합니다.</li>
                    <li><strong>템포:</strong> 빠른 박자로 공을 처리하여 상대의 시간을 빼앗습니다.</li>
                    <li><strong>기복:</strong> 공격적인 스타일 탓에 컨디션이 안 좋은 날에는 에러가 많아지는 경향이 있습니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🇷🇴 "루마니아의 자존심"</div>
                    <p>시모나 할렙과 함께 루마니아 테니스를 이끌어온 베테랑입니다. 2008년 18세의 나이로 투어에 데뷔해 15년 넘게 Top 100을 유지하는 자기관리의 끝판왕입니다.</p>
                    <p>특히 2023년 마이애미 오픈에서 4강에 오르며 10년 만에 마스터스 준결승 무대를 밟는 등, 나이가 들수록 더 노련하고 매서운 테니스를 보여주고 있습니다.</p>
                </div>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">파워 (Power)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">묵직한 스트로크.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">경험 (Experience)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">투어 15년차 베테랑.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">공격성 (Aggression)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">선공 필승.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">준수함.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">수비 (Defense)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">6</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">공격에 비해 약함.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">산전수전 다 겪음.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2023 US 오픈 3회전 vs 엘레나 리바키나</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2023. 09. 02</p>
                <p className="text-gray-700 dark:text-gray-300">거함을 침몰시킨 경기. 윔블던 챔피언이자 강력한 우승 후보였던 리바키나를 상대로 3세트 접전 끝에 2-1 승리를 거뒀습니다. 베테랑의 노련미가 파워를 이길 수 있음을 증명했습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">💃 "쿨한 언니"</div>
                    <p>시원시원한 이목구비와 플레이 스타일로 많은 팬을 보유하고 있습니다. 인터뷰에서도 솔직하고 당당한 화법을 구사하여 "걸크러쉬" 매력을 발산합니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"여전한 경쟁력"</strong></p>
                <p>Top 30 안팎의 랭킹을 유지하며 메이저 대회 시드 배정을 받고 있습니다. 언제든 상위 랭커를 잡을 수 있는 '지뢰밭' 같은 선수입니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="sorana-cirstea" 
            category="선수 프로필"
            tags={['테니스', '소라나 크르스테아', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
