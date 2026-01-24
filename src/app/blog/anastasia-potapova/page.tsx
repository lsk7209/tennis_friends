import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '아나스타샤 포타포바 선수 프로필과 스토리',
  description: '주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".',
  keywords: ['테니스', '아나스타샤 포타포바', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/anastasia-potapova',
  },
  openGraph: {
    title: '아나스타샤 포타포바 선수 프로필과 스토리',
    description: '주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".',
    url: 'https://tennisfriends.co.kr/blog/anastasia-potapova',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '아나스타샤 포타포바 선수 프로필과 스토리',
    description: '주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".',
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
    "q": "포타포바의 남편은 누구인가요?",
    "a": "카자흐스탄 국적의 ATP 선수 알렉산더 쉐브첸코입니다. 2023년 12월에 결혼식을 올렸습니다."
  },
  {
    "q": "그녀의 코치는 누구인가요?",
    "a": "오랫동안 이고르 안드레예프(전 러시아 국가대표)의 지도를 받았습니다. 현재는 투어 생활을 하며 남편과 서로 코칭을 돕기도 합니다."
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
            {['테니스', '아나스타샤 포타포바', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            아나스타샤 포타포바
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".
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

      <Article slug="anastasia-potapova" date="2026-01-24"
        title="아나스타샤 포타포바 선수 프로필과 스토리"
        excerpt="주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 &quot;파이터&quot;."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 주니어 랭킹 1위의 재능, 코트를 지배하는 강렬한 "파이터".
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>러시아 사라토프 출신입니다. 할머니가 농구 코치 출신이라 운동신경을 물려받았습니다. 주니어 시절부터 '차라포바'의 후계자로 불리며 엘리트 코스를 밟았습니다. 성인 무대 초반 부상으로 고전했으나, 2023년부터 린츠 오픈 우승 등 투어 타이틀을 수집하며 잠재력을 터뜨리고 있습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"파워풀한 베이스라이너"</strong></p>
                <p>체구는 크지 않지만 온몸의 회전을 이용해 묵직한 공을 때립니다. 특히 다운더라인 공격을 즐겨 사용합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>백핸드:</strong> 가장 자신 있어 하는 샷입니다. 크로스와 다운더라인을 자유자재로 구사합니다.</li>
                    <li><strong>공격성:</strong> 수세에 몰려도 과감하게 카운터를 날리는 배짱이 있습니다.</li>
                    <li><strong>서브:</strong> 더블 폴트가 종종 나오지만, 에이스를 노리는 공격적인 서브를 넣습니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">🔥 "불꽃 같은 승부욕"</div>
                    <p>2016 윔블던 주니어 챔피언 출신입니다. 경기 중 감정을 숨기지 않고 표출하는 맹수 같은 스타일입니다. 이길 때나 질 때나 관중의 시선을 사로잡는 스타성이 있습니다.</p>
                    <p>동료 테니스 선수 알렉산더 쉐브첸코와 결혼하여 '테니스 부부' 대열에 합류했습니다.</p>
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
                <p className="text-sm text-gray-600 dark:text-gray-400">작은 고추가 맵다.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">감정 기복이 심함.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">기술 (Technique)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">교과서적인 폼.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">이동 (Movement)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">빠른 발.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">백핸드 (Backhand)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">해결사.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">개선 중.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2023 린츠 오픈 결승</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2023. 02. 12</p>
                <p className="text-gray-700 dark:text-gray-300">통산 두 번째 투어 우승. 페트라 마르티치를 상대로 압도적인 경기력을 보여주며 6-3, 6-1로 완승했습니다. 이 우승으로 랭킹이 Top 30에 진입했습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">💅 "코트 위의 패셔니스타"</div>
                    <p>항상 화려한 의상과 메이크업으로 경기에 나섭니다. SNS에서도 활발하게 활동하며 팬들과 소통하는 신세대 스타입니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"결혼 후 안정감"</strong></p>
                <p>2023년 말 결혼 이후 심리적으로 안정을 찾았다는 평가입니다. 2024년에도 인디언 웰스 8강 등 굵직한 성적을 내며 Top 20 진입을 노리고 있습니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="anastasia-potapova" 
            category="선수 프로필"
            tags={['테니스', '아나스타샤 포타포바', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
