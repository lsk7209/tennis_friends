import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: '안나 칼린스카야 선수 프로필과 스토리',
  description: '차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".',
  keywords: ['테니스', '안나 칼린스카야', '선수 프로필', '스토리', 'WTA'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/anna-kalinskaya',
  },
  openGraph: {
    title: '안나 칼린스카야 선수 프로필과 스토리',
    description: '차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".',
    url: 'https://tennisfriends.co.kr/blog/anna-kalinskaya',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '안나 칼린스카야 선수 프로필과 스토리',
    description: '차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".',
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
    "q": "칼린스카야의 남자친구는 누구인가요?",
    "a": "현재 ATP 세계 랭킹 1위인 이탈리아의 야닉 시너(Jannik Sinner)입니다."
  },
  {
    "q": "칼린스카야의 별명은?",
    "a": "특별한 별명은 없으나, 팬들 사이에서는 미모와 차가운 경기 스타일 때문에 '얼음공주' 등으로 불리기도 합니다."
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
            {['테니스', '안나 칼린스카야', '선수 프로필', '스토리', 'WTA'].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            안나 칼린스카야
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".
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

      <Article slug="anna-kalinskaya" date="2026-01-24"
        title="안나 칼린스카야 선수 프로필과 스토리"
        excerpt="차갑고 매서운 스트로크, 세계 1위를 사로잡은 &quot;러시아의 얼음공주&quot;."
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
                <strong className="text-blue-700 dark:text-blue-300">요약:</strong> 차갑고 매서운 스트로크, 세계 1위를 사로잡은 "러시아의 얼음공주".
              </p>
            </div>

            <h2 id="growth-background">성장 배경와 커리어</h2>
            
                <p>러시아 모스크바 출신입니다. 부모님이 전직 배드민턴 선수들이라 라켓을 다루는 감각을 물려받았습니다. 주니어 시절 복식 그랜드슬램을 우승했으나, 성인 무대 적응에 시간이 걸렸습니다. 25세가 된 2024년에 마침내 Top 20에 진입했습니다.</p>
            

            <h2 id="play-style">경기 스타일</h2>
            
                <p><strong>"공격적인 카운터 펀처"</strong></p>
                <p>감정을 드러내지 않는 포커페이스로 상대의 공을 기계처럼 받아칩니다. 공의 힘을 이용해 각도를 벌리는 능력이 탁월합니다.</p>
                <ul class="list-disc pl-5 my-4 space-y-2">
                    <li><strong>타이밍:</strong> 공을 라이징 볼로 처리하여 박자가 매우 빠릅니다. 상대가 준비할 시간을 주지 않습니다.</li>
                    <li><strong>백핸드:</strong> 다운더라인 백핸드 공격이 일품입니다.</li>
                    <li><strong>멘탈:</strong> 예전에는 기복이 있었으나, 최근에는 위기 상황에서도 흔들리지 않는 침착함을 갖췄습니다.</li>
                </ul>
            

            <h2 id="why-notable">주목해야 할 이유</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">❄️ "늦깍이 전성기"</div>
                    <p>만년 유망주였으나 2024년 두바이 챔피언십(WTA 1000)에서 세계 1위 시비옹테크, 3위 고프, 9위 오스타펜코를 연파하고 결승에 오르며 기량이 만개했습니다.</p>
                    <p>또한 남자 세계 1위 <strong>야닉 시너</strong>와의 연인 관계가 알려지며 테니스계 최고의 '슈퍼 커플'로 화제를 모으고 있습니다.</p>
                </div>
            

            <h2 id="stats-analysis">스탯 분석</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">타이밍 (Timing)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">완벽한 임팩트.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">백핸드 (Backhand)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">9</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">날카로운 무기.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">멘탈 (Mental)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">얼음처럼 차가움.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">수비 (Defense)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">8.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">견고한 벽.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">서브 (Serve)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">7.5</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">평균적임.</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-gray-900 dark:text-white">미모 (Visual)</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">10</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-2">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">투어 대표 미녀.</p>
              </div>
              
            </div>

            <h2 id="signature-match">명장면 (Signature Match)</h2>
            <div className="bg-slate-50 dark:bg-slate-900 border-l-4 border-indigo-500 p-6 rounded-r-lg my-6">
                <h3 className="text-xl font-bold mb-2 text-indigo-700 dark:text-indigo-300">2024 두바이 챔피언십 4강 vs 이가 시비옹테크</h3>
                <p className="text-sm text-gray-500 mb-4 font-mono">2024. 02. 23</p>
                <p className="text-gray-700 dark:text-gray-300">세계 1위를 무너뜨린 인생 경기. 무적 포스를 뽐내던 시비옹테크를 상대로 한 치의 물러섬도 없는 맞불 작전을 펼쳐 2-0(6-4, 6-4) 완승을 거뒀습니다. 시비옹테크가 쩔쩔맬 정도로 완벽한 경기력이었습니다.</p>
            </div>

            <h2 id="fan-appeal">팬 어필 포인트</h2>
            
                <div class="highlight-box">
                    <div class="highlight-box-title">👸 "테니스 여신"</div>
                    <p>뛰어난 실력만큼이나 수려한 외모로 많은 팬을 보유하고 있습니다. 시너와 함께 훈련하거나 경기장을 찾는 모습이 자주 포착되어 팬들의 부러움을 사고 있습니다.</p>
                </div>
            

            <h2 id="recent-form">최근 폼과 전망</h2>
            
                <p><strong>"Top 10 진입 목표"</strong></p>
                <p>두바이 준우승 이후 베를린 오픈 준우승 등 꾸준히 상위권 성적을 내고 있습니다. 지금의 기세라면 메이저 대회 4강 이상도 충분히 가능해 보입니다.</p>
            
          </div>

          <FAQ items={faqs} />
          
          <RelatedPosts 
            currentSlug="anna-kalinskaya" 
            category="선수 프로필"
            tags={['테니스', '안나 칼린스카야', '선수 프로필', 'WTA']} 
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
