import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '에카테리나 알렉산드로바 선수 프로필과 스토리',
  description: '코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.',
  keywords: ['테니스', '에카테리나 알렉산드로바', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/ekaterina-alexandrova',
  },
  openGraph: {
    title: '에카테리나 알렉산드로바 선수 프로필과 스토리',
    description: '코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.',
    url: 'https://tennisfriends.co.kr/blog/ekaterina-alexandrova',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '에카테리나 알렉산드로바 선수 프로필과 스토리',
    description: '코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.',
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
    "q": "알렉산드로바는 왜 한국 주소를 쓰나요?",
    "a": "실제 주소는 아니지만, 코리아 오픈에서의 좋은 기억 때문인지 한국 팬들에게 애정이 깊습니다. 팬들은 \"명예 한국인\"이라고 부르기도 합니다."
  },
  {
    "q": "그녀의 서브 최고 속도는?",
    "a": "시속 190km 이상을 기록하기도 하며, WTA 투어에서 에이스 개수 상위권에 항상 이름을 올립니다."
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
            {['테니스', '에카테리나 알렉산드로바', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            에카테리나 알렉산드로바
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.
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

      <Article slug="ekaterina-alexandrova" date="2026-01-24"
        title="에카테리나 알렉산드로바 선수 프로필과 스토리"
        excerpt="코트 위에 미사일을 쏘는 &quot;실내 코트의 여왕&quot;, 예측 불가의 플랫 히터."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 코트 위에 미사일을 쏘는 "실내 코트의 여왕", 예측 불가의 플랫 히터.
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>러시아 첼랴빈스크 출신이지만, 테니스 훈련을 위해 일찍이 체코 프라하로 이주하여 오랫동안 거주했습니다. 이 때문에 플레이 스타일이 체코 선수들(크비토바, 플리스코바)과 유사한 점이 많습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"플랫 히터 (Flat Hitter)"</strong></p>
                <p>스핀을 거의 걸지 않고 플랫하게 때립니다. 네트 위를 스치듯 지나가는 공은 바운드 후에도 낮게 깔려 상대가 받아치기 어렵습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>서브:</strong> 투어 최상위권의 서브 능력을 가졌습니다. 스피드와 코스 모두 훌륭합니다.</li>
                    <li><strong>리턴:</strong> 상대 서브가 약하면 바로 위너로 연결합니다.</li>
                    <li><strong>약점:</strong> 클레이 코트처럼 공이 느리고 높게 튀는 환경에서는 위력이 반감됩니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">⚡ "속사포 테니스"</div>
                    <p>공을 잡고 생각할 틈을 주지 않습니다. 리턴부터 공격적이며, 랠리 중에도 템포를 극한으로 끌어올려 상대방을 질식시킵니다. 특히 잔디 코트나 실내 하드 코트처럼 공이 빠르게 깔리는 환경에서 극강의 모습을 보여줍니다.</p>
                    <p>2022년, 2023년 코리아 오픈(서울)에서 연속으로 결승에 진출(22년 우승, 23년 준우승)하여 한국 팬들에게 매우 친숙한 선수입니다.</p>
                </div>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">에이스 제조기.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">파워 (Power)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">묵직하고 빠름.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">스피드 (Speed)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">평범함.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">일관성 (Consistency)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">6</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">기복이 있음.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">특수성 (Specialty)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">실내/잔디 강자.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">표정 변화 없음.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2022 코리아 오픈 결승 vs 옐레나 오스타펜코</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2022. 09. 25</p>
                <p className="text-gray-700 dark:text-gray-300">한국 팬들에게 강렬한 인상을 남긴 경기. 톱 시드 오스타펜코를 상대로 한 수 위의 파워와 정교함을 보여주며 2-0(7-6, 6-0)으로 완파하고 우승컵을 들어 올렸습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🧊 "아이스 퀸"</div>
                    <p>경기 중 표정 변화가 거의 없습니다. 위너를 쳐도, 실수를 해도 무덤덤한 표정으로 다음 포인트를 준비하는 모습이 카리스마 있습니다. 하지만 시상식에서는 수줍은 미소를 보여주는 반전 매력이 있습니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"Top 20의 터줏대감"</strong></p>
                <p>2024년 마이애미 오픈 4강에 오르며 커리어 하이를 위협하고 있습니다. 시비옹테크와 페굴라를 연달아 꺾는 등 '거물 킬러'의 본능을 유감없이 발휘 중입니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="ekaterina-alexandrova" 
            category="선수 프로필"
            tags={['테니스', '에카테리나 알렉산드로바', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
