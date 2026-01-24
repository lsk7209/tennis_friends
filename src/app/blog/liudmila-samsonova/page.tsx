import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '류드밀라 삼소노바 선수 프로필과 스토리',
  description: '이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.',
  keywords: ['테니스', '류드밀라 삼소노바', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/liudmila-samsonova',
  },
  openGraph: {
    title: '류드밀라 삼소노바 선수 프로필과 스토리',
    description: '이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.',
    url: 'https://tennisfriends.co.kr/blog/liudmila-samsonova',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '류드밀라 삼소노바 선수 프로필과 스토리',
    description: '이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.',
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
    "q": "삼소노바는 이탈리아어 가능한가요?",
    "a": "네, 원어민 수준입니다. 인터뷰도 이탈리아어로 유창하게 진행하곤 합니다."
  },
  {
    "q": "그녀의 별명은?",
    "a": "팬들은 줄여서 \"루다(Liuda)\"라고 부릅니다."
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
            {['테니스', '류드밀라 삼소노바', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            류드밀라 삼소노바
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.
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

      <Article slug="liudmila-samsonova" date="2026-01-24"
        title="류드밀라 삼소노바 선수 프로필과 스토리"
        excerpt="이탈리아에서 자란 러시아의 &quot;파워 히터&quot;, 폭발적인 서브와 포핸드의 소유자."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 이탈리아에서 자란 러시아의 "파워 히터", 폭발적인 서브와 포핸드의 소유자.
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>러시아에서 태어났지만, 아버지를 따라 1살 때 이탈리아로 이주하여 성장했습니다. 한때 이탈리아 국적 취득을 고려하기도 했으나 러시아 국적으로 활동 중입니다. 이탈리아어에 능통하며, 플레이 스타일도 이탈리아 선수들처럼 창의적인 면이 섞여 있습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"공격적 올라운더"</strong></p>
                <p>큰 키(182cm)에서 내리꽂는 서브가 일품입니다. 베이스라인 뒤로 물러나지 않고 앞에서 공을 처리하며 경기를 주도합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드:</strong> 엄청난 스피드와 회전이 걸린 포핸드 위너를 양산합니다.</li>
                    <li><strong>드롭샷:</strong> 파워만 있는 것이 아니라, 허를 찌르는 드롭샷으로 상대를 묶어두는 센스도 갖췄습니다.</li>
                    <li><strong>기복:</strong> 강력한 무기가 있지만, 정교함이 떨어지는 날엔 에러가 쏟아집니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🚀 "붐-붐(Boom-Boom) 테니스"</div>
                    <p>WTA 투어에서 가장 강력한 <strong>'원투 펀치(서브+포핸드)'</strong>를 가진 선수 중 한 명입니다. 컨디션이 좋은 날에는 누구도 그녀의 공을 건드리지 못할 정도로 압도적인 화력을 뿜어냅니다.</p>
                    <p>2022년 도쿄, 클리블랜드, 워싱턴 대회 등을 휩쓸며 단기간에 랭킹을 수직 상승시킨 '우승 청부사' 기질이 있습니다.</p>
                </div>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">파워 (Power)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">투어 최상급.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">가장 큰 무기.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">포핸드 (Forehand)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">파괴적임.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">이동 (Movement)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">키에 비해 민첩.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">결승전에 강함.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">안정성 (Consistency)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">6.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">기복이 숙제.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2023 몬트리올 마스터스 4강 vs 엘레나 리바키나</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2023. 08. 13</p>
                <p className="text-gray-700 dark:text-gray-300">진정한 파워 대결. 리바키나를 상대로 힘에서 전혀 밀리지 않고 오히려 압도하며 역전승을 거뒀습니다. 이 승리로 생애 첫 WTA 1000 결승에 진출했습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🎧 "헤드폰 소녀"</div>
                    <p>경기장에 입장할 때 항상 큰 헤드폰을 끼고 비트가 강한 음악을 들으며 집중하는 모습이 트레이드마크입니다. 시크해 보이지만 팬 서비스는 다정한 편입니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"Top 15 안착"</strong></p>
                <p>2023년 하반기 폭발적인 상승세 이후 2024년에는 다소 주춤했지만, 여전히 Top 20 안쪽을 유지하고 있습니다. 잔디 코트 시즌에 특히 강해 다가올 윔블던에서의 활약이 기대됩니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="liudmila-samsonova" 
            category="선수 프로필"
            tags={['테니스', '류드밀라 삼소노바', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
