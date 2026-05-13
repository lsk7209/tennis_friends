import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)",
  description: "낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.",
  keywords: ["테니스 기술", "슬라이스", "백핸드", "Slice", "페이스 조절"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-slice-backhand-mastery',
  },
  openGraph: {
    title: "슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)",
    description: "낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.",
    url: 'https://www.tennisfrens.com/blog/tennis-slice-backhand-mastery',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)",
    description: "낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '그립과 스윙 경로: "하이 투 로우(High to Low)"', depth: 2 },
  { id: 'key-point-2', text: '수비에서의 활용: "힘을 중화하라"', depth: 2 },
  { id: 'key-point-3', text: '공격에서의 활용: "심리적 압박"', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "슬라이스를 칠 때 공이 너무 높게 뜹니다.",
    a: "라켓 면이 너무 하늘을 보고 있거나, 스윙 궤적이 너무 가파른 하향 곡선일 가능성이 큽니다. 임팩트 순간 라켓 면을 지면과 수직에 가깝게 유지하고, 앞으로 밀어주는 동작(Follow-through)을 더 길게 가져가 보세요."
  },
  {
    q: "양손 백핸드 유저도 슬라이스를 배워야 하나요?",
    a: "필수입니다. 멀리 떨어지는 공을 방어하거나 낮은 바운드 대응, 드롭샷 전환 등 양손으로는 한계가 있는 상황에서 슬라이스는 완벽한 대안이 됩니다."
  },
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge key="테니스 기술" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 기술</Badge>
            <Badge key="슬라이스" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">슬라이스</Badge>
            <Badge key="백핸드" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">백핸드</Badge>
            <Badge key="Slice" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Slice</Badge>
            <Badge key="페이스 조절" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">페이스 조절</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.
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

      <Article showHeader={false} slug="tennis-slice-backhand-mastery" date="2026-01-24" title="슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)" excerpt="낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-8 border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                슬라이스 백핸드(Slice Backhand)는 테니스계의 <strong>'스위스 아미 나이프'</strong>입니다. 강력한 톱스핀을 방어할 때, 게임의 리듬을 바꿀 때, 혹은 우아한 드롭샷으로 연결할 때 모두 쓰이기 때문입니다. 페더러처럼 낮고 날카롭게 깔려 들어가는 슬라이스의 비결을 무엇일까요?
              </p>
            </div>

            <h2 id="key-point-1">그립과 스윙 경로: "하이 투 로우(High to Low)"</h2>
            <p>
              슬라이스는 <strong>컨티넨탈 그립</strong>이 필수입니다.
            </p>
            <p>
              스윙의 시작점은 당신의 어깨 뒤쪽, 귀 높이 정도가 좋습니다. 공을 위에서 아래로 사선으로 깎아내리듯 스윙하되, 임팩트 순간 라켓 면이 너무 열리지 않게 주의해야 합니다. 라켓 면이 너무 열리면 공이 높게 둥실 뜨고, 반대로 너무 닫히면 네트에 걸립니다.
            </p>

            <h2 id="key-point-2">수비에서의 활용: "힘을 중화하라"</h2>
            <p>
              베이스라인 끝에서 상대의 강력한 스트로크를 받았을 때, 톱스핀으로 맞대응하는 것은 체력 소모가 큽니다.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-5 rounded-xl my-6">
              <p className="text-sm font-medium mb-2">슬라이스 방어의 장점:</p>
              <ul className="text-sm space-y-2">
                <li>• <strong>공 속도 조절:</strong> 상대의 빠른 샷을 느리게 되돌려 주어 재정비 시간을 벌어줍니다.</li>
                <li>• <strong>낮은 바운드:</strong> 상대가 공격적인 위너를 치기 어렵도록 공을 낮게 깔아줍니다.</li>
              </ul>
            </div>

            <h2 id="key-point-3">공격에서의 활용: "심리적 압박"</h2>
            <p>
              슬라이스는 훌륭한 <strong>어프로치 샷(Approach Shot)</strong>이 됩니다.
            </p>
            <p>
              상대의 백핸드 깊숙한 곳으로 낮게 깔리는 슬라이스를 보내면, 상대는 낮은 타점에서 억지로 공을 들어 올려야 합니다. 이때 상대의 샷은 힘이 없거나 높게 뜨게 되며, 당신은 네트에서 손쉬운 발리로 포인트를 마무리할 수 있습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              슬라이스는 힘으로 치는 샷이 아니라 '터치'와 '감각'의 기술입니다. 단순히 넘기는 공이 아니라, 바둑의 정석처럼 코트 여기저기에 전략적으로 깔아두는 수라고 생각하세요. 낮게 깔리는 슬라이스 하나만 제대로 구비해도 상대는 어마어마한 피로감을 느끼게 될 것입니다.
            </p>

          </div>

          {/* Related Links */}
          <div className="mt-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                관련 자료
              </h3>
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
                      <Link href="/players" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">NTRP 자가 진단</span>
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
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">ATP 투어</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <RelatedPosts
            currentSlug="tennis-slice-backhand-mastery"
            category="테니스 기술"
            tags={["테니스 기술", "슬라이스", "백핸드", "Slice", "페이스 조절"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
