import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '자스민 파올리니 선수 프로필과 스토리',
  description: '163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.',
  keywords: ['테니스', '자스민 파올리니', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/jasmine-paolini',
  },
  openGraph: {
    title: '자스민 파올리니 선수 프로필과 스토리',
    description: '163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.',
    url: 'https://tennisfriends.co.kr/blog/jasmine-paolini',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '자스민 파올리니 선수 프로필과 스토리',
    description: '163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.',
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
    "q": "파올리니의 키는?",
    "a": "163cm(5피트 4인치)입니다. 현대 테니스에서 매우 단신에 속하지만, 스피드와 기술로 이를 완벽하게 극복했습니다."
  },
  {
    "q": "파올리니의 국적 배경은?",
    "a": "국적은 이탈리아입니다. 어머니가 가나와 폴란드 혈통을 가지고 있어 다양한 문화적 배경을 지니고 있습니다."
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
            {['테니스', '자스민 파올리니', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            자스민 파올리니
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.
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

      <Article slug="jasmine-paolini" date="2026-01-24"
        title="자스민 파올리니 선수 프로필과 스토리"
        excerpt="163cm의 &quot;작은 거인&quot;, 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 163cm의 "작은 거인", 롤랑가로스와 윔블던 결승을 동시에 밟은 이탈리아의 기적.
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>이탈리아 토스카나 지방에서 이탈리아인 아버지와 가나-폴란드 혼혈 어머니 사이에서 태어났습니다. 늦은 나이(28세)에 전성기를 맞이한 대기만성형 선수입니다. 2024년 두바이 챔피언십 우승으로 자신감을 얻어 메이저 결승까지 질주했습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"에너자이저 / 카운터 펀처"</strong></p>
                <p>코트 위를 쉴 새 없이 뛰어다닙니다. 상대가 강하게 치면 그 힘을 이용해 더 빠르게 되돌려 보냅니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>스피드:</strong> 투어에서 가장 빠른 선수 중 한 명입니다. 어떤 공이든 쫓아갑니다.</li>
                    <li><strong>포핸드:</strong> 키에 비해 엄청난 회전량의 헤비 탑스핀을 구사합니다. 나달을 연상시킵니다.</li>
                    <li><strong>에너지:</strong> 항상 긍정적인 에너지를 뿜어내며, 지치지 않는 체력으로 상대를 질리게 만듭니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🇮🇹 "이탈리아의 요정, 세계를 놀라게 하다"</div>
                    <p>2024년은 자스민 파올리니의 해였습니다. 누구도 기대하지 않았던 그녀가 <strong>롤랑가로스(프랑스 오픈)와 윔블던 결승에 연속으로 진출</strong>하는 대이변을 일으켰습니다. 163cm의 작은 키로 파워 히터들을 쓰러뜨리는 모습은 전 세계에 감동을 주었습니다.</p>
                </div>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">스피드 (Speed)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">전광석화.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">체력 (Stamina)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">무한 체력.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">포핸드 (Forehand)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">작지만 매운맛.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">6</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">신체적 한계는 있음.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">항상 웃으며 싸움.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">네트 (Net)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">복식 경험으로 다져진 발리.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2024 윔블던 4강 vs 돈나 베키치</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2024. 07. 11</p>
                <p className="text-gray-700 dark:text-gray-300">윔블던 역사에 남을 명승부. 2시간 51분의 혈투 끝에 2-1 역전승을 거뒀습니다. 마지막 순간까지 포기하지 않고 뛰어다닌 파올리니의 투지가 빛났으며, 이탈리아 여류 선수 최초로 윔블던 결승에 진출했습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">😊 "해피 바이러스"</div>
                    <p>항상 밝은 미소와 긍정적인 태도로 인터뷰하여 '스마일 퀸'으로 불립니다. 그녀의 경기를 보면 기분이 좋아진다는 팬들이 많습니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"Top 5 안착"</strong></p>
                <p>단식뿐만 아니라 복식에서도 롤랑가로스 결승, 올림픽 금메달(에라니와 합작)을 차지하며 세계 최고의 선수 중 한 명으로 우뚝 섰습니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="jasmine-paolini" 
            category="선수 프로필"
            tags={['테니스', '자스민 파올리니', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
