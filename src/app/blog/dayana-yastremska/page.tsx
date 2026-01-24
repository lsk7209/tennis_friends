import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '다야나 야스트렘스카 선수 프로필과 스토리',
  description: '예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".',
  keywords: ['테니스', '다야나 야스트렘스카', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/dayana-yastremska',
  },
  openGraph: {
    title: '다야나 야스트렘스카 선수 프로필과 스토리',
    description: '예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".',
    url: 'https://tennisfriends.co.kr/blog/dayana-yastremska',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '다야나 야스트렘스카 선수 프로필과 스토리',
    description: '예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".',
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
    "q": "야스트렘스카의 최고 성적은?",
    "a": "그랜드슬램 4강(2024 호주 오픈)이며, 투어 대회 단식 우승 3회를 기록했습니다."
  },
  {
    "q": "그녀는 가수로도 활동하나요?",
    "a": "네, 2020년 코로나 팬데믹 기간에 \"Favorite Track\"이라는 곡을 발표하며 가수로 데뷔하기도 했습니다."
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
            {['테니스', '다야나 야스트렘스카', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            다야나 야스트렘스카
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".
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

      <Article slug="dayana-yastremska" date="2026-01-24"
        title="다야나 야스트렘스카 선수 프로필과 스토리"
        excerpt="예선 통과자의 신화, 우크라이나의 긍지를 짊어진 &quot;파워 히터&quot;."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 예선 통과자의 신화, 우크라이나의 긍지를 짊어진 "파워 히터".
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>우크라이나 오데사 출신입니다. 어린 시절부터 공격적인 테니스로 두각을 나타냈으며, 10대 때 이미 투어 3회 우승을 차지했습니다. 잠시 도핑 논란(무혐의 처분)과 부진이 있었으나, 2024년 화려하게 부활했습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"초공격적 베이스라이너 (Aggressive Baseliner)"</strong></p>
                <p>수비보다는 공격입니다. 공이 오면 무조건 세게 때려버리는 스타일입니다. "모 아니면 도" 식의 플레이지만, 긁히는 날에는 누구도 막을 수 없습니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>포핸드/백핸드:</strong> 양쪽 모두에서 강력한 플랫성 위너를 터뜨립니다. 랠리를 짧게 가져갑니다.</li>
                    <li><strong>리턴:</strong> 상대 서브를 바로 공격하여 득점으로 연결하는 능력이 뛰어납니다.</li>
                    <li><strong>기복:</strong> 공격 아니면 에러입니다. 범실이 많은 날은 자멸하기도 합니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🌪️ "예선에서 4강까지"</div>
                    <p>2024년 호주 오픈에서 예선 3경기를 거쳐 본선에 올라, 윔블던 챔피언 본드루소바, 아자렌카 등을 잇달아 격파하고 <strong>4강(준결승)</strong>까지 진출하는 기적을 썼습니다. 오픈 시대 이후 예선 통과자가 호주 오픈 4강에 오른 것은 1978년 이후 처음입니다.</p>
                </div>
                <p>전쟁 중인 조국 우크라이나에 승전보를 전하기 위해 뛴다는 인터뷰로 많은 이들의 심금을 울렸습니다.</p>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">파워 (Power)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">WTA 최고 수준의 화력.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">공격성 (Aggression)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">후진 기어 없음.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">조국을 위한 투지.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">안정성 (Consistency)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">에러가 많음.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">준수한 편.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">이동 (Movement)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">빠르고 탄력적.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2024 호주 오픈 8강 vs 린다 노스코바</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2024. 01. 24</p>
                <p className="text-gray-700 dark:text-gray-300">4강 신화를 완성한 경기. 시비옹테크를 꺾고 올라온 노스코바를 상대로 압도적인 파워를 보여주며 2-0 완승을 거뒀습니다. 승리 후 카메라 렌즈에 "I am proud of my people from Ukraine"라고 적었습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">💙💛 "우크라이나의 전사"</div>
                    <p>코트 위에서는 파이터, 코트 밖에서는 가수로도 활동한 다재다능한 스타입니다. 전쟁으로 고통받는 자국민들을 대변하는 메시지를 끊임없이 전하며 평화의 아이콘이 되었습니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"제2의 전성기"</strong></p>
                <p>호주 오픈 4강 이후 랭킹이 30위권 안으로 복귀했습니다. 특유의 몰아치기 능력이 살아나, 언제든 상위 랭커를 잡을 수 있는 다크호스로 평가받습니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="dayana-yastremska" 
            category="선수 프로필"
            tags={['테니스', '다야나 야스트렘스카', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
