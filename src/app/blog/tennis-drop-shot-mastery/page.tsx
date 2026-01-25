import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "드롭샷 마스터하기: 타이밍과 위장술",
  description: "상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.",
  keywords: ["테니스 기술", "드롭샷", "전술", "터치", "슬라이스"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-drop-shot-mastery',
  },
  openGraph: {
    title: "드롭샷 마스터하기: 타이밍과 위장술",
    description: "상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.",
    url: 'https://tennisfriends.co.kr/blog/tennis-drop-shot-mastery',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "드롭샷 마스터하기: 타이밍과 위장술",
    description: "상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '완벽한 위장술(Disguise): "드라이브인 척하라"', depth: 2 },
  { id: 'key-point-2', text: '기술적 핵심: 하이 투 로우(High to Low)와 무게 중심', depth: 2 },
  { id: 'key-point-3', text: '언제 던질 것인가? (전술적 타이밍)', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "드롭샷 마스터하기: 타이밍과 위장술 관련 자주 묻는 질문 1",
    a: '이곳에 답변이 들어갑니다. 구체적이고 도움이 되는 정보를 제공하세요.'
  },
  {
    q: "드롭샷 마스터하기: 타이밍과 위장술 관련 자주 묻는 질문 2",
    a: '이곳에 답변이 들어갑니다. 독자의 궁금증을 해결해 줄 수 있는 내용을 작성하세요.'
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
            <Badge key="드롭샷" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">드롭샷</Badge>
            <Badge key="전술" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">전술</Badge>
            <Badge key="터치" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">터치</Badge>
            <Badge key="슬라이스" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">슬라이스</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            드롭샷 마스터하기: 타이밍과 위장술
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.
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

      <Article slug="tennis-drop-shot-mastery" date="2026-01-24" title="드롭샷 마스터하기: 타이밍과 위장술" excerpt="상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl mb-8 border-l-4 border-green-500">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0 font-medium">
                드롭샷은 단순한 '연약한 샷'이 아니라, 코트의 길이를 활용해 상대를 무력화시키는 <strong>가장 우아하고 치명적인 기술</strong>입니다. 잘 들어간 드롭샷은 상대의 무릎을 꺾고 멘탈을 흔들어 놓습니다. 단순히 살살 치는 것을 넘어, 위장술과 터치 감각을 마스터하는 법을 공개합니다.
              </p>
            </div>

            <h2 id="key-point-1">완벽한 위장술(Disguise): "드라이브인 척하라"</h2>
            <p>
              드롭샷의 성공률은 상대가 예측하느냐에 달려 있습니다. 처음부터 드롭샷을 치겠다고 폼을 잡으면 푸셔들에게는 좋은 먹잇감이 됩니다.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>테이크백 유지:</strong> 강력한 포핸드 드라이브를 칠 때와 똑같이 라켓을 뒤로 빼세요.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600 font-bold">✓</span>
                <span><strong>마지막 순간의 전환:</strong> 공과 접촉하기 직전 어깨와 손목의 힘을 빼며 슬라이스 면으로 공 밑을 부드럽게 깎아줍니다.</span>
              </li>
            </ul>

            <h2 id="key-point-2">기술적 핵심: 하이 투 로우(High to Low)와 무게 중심</h2>
            <p>
              공을 밀어내는 것이 아니라 <strong>'흡수'</strong>해야 합니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-6">
              <p className="text-sm mb-0">
                라켓 면이 공 밑을 지나가면서 백스핀(Backspin)을 걸어야 바운드 후 공이 앞으로 튀지 않고 멈추거나 뒤로 돌아옵니다. 이때 무릎을 낮춰 자신의 무게 중심을 공과 가깝게 유지하면 훨씬 정교한 터치감을 느낄 수 있습니다.
              </p>
            </div>

            <h2 id="key-point-3">언제 던질 것인가? (전술적 타이밍)</h2>
            <p>
              아무리 터치가 좋아도 잘못된 상황에서의 드롭샷은 자살행위입니다.
            </p>
            <table className="w-full text-sm border-collapse my-6">
              <thead>
                <tr className="bg-green-100 dark:bg-green-900/30">
                  <th className="p-3 border">상황</th>
                  <th className="p-3 border">권장 여부</th>
                  <th className="p-3 border">이유</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border">상대가 베이스라인 뒤에 있을 때</td>
                  <td className="p-3 border text-center text-green-600 font-bold">Best</td>
                  <td className="p-3 border">뛰어와야 할 거리가 멉니다.</td>
                </tr>
                <tr>
                  <td className="p-3 border">높게 튀어 오르는 짧은 공</td>
                  <td className="p-3 border text-center text-green-600 font-bold">Good</td>
                  <td className="p-3 border">위에서 아래로 깎기 아주 좋은 조건입니다.</td>
                </tr>
                <tr>
                  <td className="p-3 border">내가 수비하는 상황에서</td>
                  <td className="p-3 border text-center text-red-600 font-bold">Bad</td>
                  <td className="p-3 border">터치가 불안정해 자살구가 될 확률이 높습니다.</td>
                </tr>
              </tbody>
            </table>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              드롭샷 마스터인 로저 페더러나 카를로스 알카라즈를 보세요. 그들은 상대가 뒤로 물러나는 찰나를 놓치지 않습니다. 연습 코트에서 랠리 중 가끔은 과감하게 드롭샷을 시도해 보세요. 당신의 테니스 가방에 '치명적인 단검' 하나가 추가될 것입니다.
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
                      <Link href="/players" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🏆</span>
                        <span className="font-medium">선수 프로필 더보기</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/utility/ntrp-test" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
                      <a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
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
            currentSlug="tennis-drop-shot-mastery"
            category="테니스 기술"
            tags={["테니스 기술", "드롭샷", "전술", "터치", "슬라이스"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
