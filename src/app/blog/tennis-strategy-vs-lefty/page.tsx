import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "왼손잡이 상대 공략법 (Lefty 대응 전술) | 서브부터 복식 전략까지",
  description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수의 토스를 읽는 법, 서브 코스 공략, 그리고 복식에서의 승리 공식까지 심층 분석.",
  keywords: ["테니스 전술", "왼손잡이", "Lefty", "서브 리턴", "공략법", "복식 전술", "테니스 팁"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty',
  },
  openGraph: {
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술) | 서브부터 복식 전략까지",
    description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수의 토스를 읽는 법, 서브 코스 공략, 그리고 복식에서의 승리 공식까지 심층 분석.",
    url: 'https://tennisfriends.co.kr/blog/tennis-strategy-vs-lefty',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "왼손잡이 상대 공략법 (Lefty 대응 전술) | 서브부터 복식 전략까지",
    description: "반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수의 토스를 읽는 법, 서브 코스 공략, 그리고 복식에서의 승리 공식까지 심층 분석.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'reading-service', text: '왼손잡이 서브 읽기: "토스 위치를 봐라"', depth: 2 },
  { id: 'return-strategy', text: "공포의 '애드 코트' 슬라이스 서브 리턴", depth: 2 },
  { id: 'serving-tactic', text: '내가 서브 넣을 때: 티(T) 존과 바디 공략', depth: 2 },
  { id: 'rally-strategy', text: '랠리 공략: 백핸드 집요하게 괴롭히기', depth: 2 },
  { id: 'doubles-tip', text: '복식(Doubles)에서의 특별 전략', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "왼손잡이의 백핸드 쪽을 노릴 때 가장 효과적인 샷은?",
    a: "오른손잡이 기준 '포핸드 인사이드-아웃'입니다. 상대의 백핸드 쪽으로 공을 깊게 보내면 왼손잡이는 평소보다 훨씬 많은 움직임을 강요받게 됩니다. 또한 다운더라인 샷도 평소보다 더 자주 섞어주어야 합니다."
  },
  {
    q: "왼손잡이와 복식을 할 때 주의할 점은?",
    a: "두 사람 모두 포핸드가 코트 중앙에 오게 배치하는 'I-포메이션'이나 전략적 배치가 가능합니다. 이렇게 서면 중앙으로 오는 공을 강력한 포핸드로 처리할 수 있는 장점이 있지만, 서로의 라켓이 부딪히거나 양쪽 사이드가 비는 단점도 있으니 파트너와 미리 콜 사인을 정해야 합니다."
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
            <Badge key="테니스 전술" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 전술</Badge>
            <Badge key="왼손잡이" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">왼손잡이</Badge>
            <Badge key="서브 리턴" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">서브 리턴</Badge>
            <Badge key="복식 전략" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">복식 전략</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            왼손잡이 상대 공략법 (Lefty 대응 전술)
            <span className="block text-2xl md:text-3xl mt-2 text-purple-200 font-normal">심화 가이드</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전문적인 전술 팁.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">7분 읽기</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="font-medium">2026-01-24 업데이트</span>
            </div>
          </div>
        </div>
      </div>

      <Article slug="tennis-strategy-vs-lefty" date="2026-01-24" title="왼손잡이 상대 공략법 (Lefty 대응 전술) | 서브부터 복식 전략까지" excerpt="반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl mb-8 border-l-4 border-indigo-500 shadow-sm">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스 동호인의 약 10% 내외만이 왼손잡이(Lefty)입니다. 평소 오른손잡이와만 랠리를 하다가 가끔 만나는 왼손잡이는 당혹감 그 자체입니다. 공의 회전 방향이 반대이고, 내가 평소 공격하던 코스가 상대의 강점인 포핸드 쪽인 경우가 많기 때문입니다. 하지만 그 원리만 알면 대응할 수 있습니다.
              </p>
            </div>

            <h2 id="reading-service">왼손잡이 서브 읽기: "토스 위치를 봐라"</h2>
            <p>
              왼손잡이 서브가 까다로운 이유는 궤적이 낯설기 때문이기도 하지만, <strong>폼을 읽기 어렵기 때문</strong>입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-4">
                  <h4 className="font-bold text-indigo-600 mb-2">👀 슬라이스 서브 토스</h4>
                  <p className="text-sm">토스가 머리보다 <strong>왼쪽</strong>으로 더 많이 빠집니다. 라켓이 공의 측면을 긁기 위한 준비 동작입니다. 이 경우 공은 당신의 백핸드 쪽으로 휘어져 나갑니다.</p>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-4">
                  <h4 className="font-bold text-indigo-600 mb-2">👀 플랫/킥 서브 토스</h4>
                  <p className="text-sm">토스가 머리 <strong>바로 위나 약간 오른쪽</strong>으로 올라갑니다. 이 경우 공은 더 직선적이거나 높게 튀어 오릅니다.</p>
                </CardContent>
              </Card>
            </div>

            <h2 id="return-strategy">공포의 '애드 코트' 슬라이스 서브 리턴</h2>
            <p>
              왼손잡이의 가장 큰 무기는 애드 코트(Ad Court)에서 바깥쪽으로 휘어져 나가는 <strong>와이드 슬라이스 서브</strong>입니다.
            </p>
            <ul className="space-y-4 my-6">
              <li className="flex gap-3 items-start">
                <span className="font-bold text-white bg-indigo-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong>위치 선정 (Positioning):</strong> 평소보다 한두 발자국 더 왼쪽(사이드라인 쪽)으로 치우쳐 서세요. 아예 단식 라인을 밟고 서도 좋습니다. 와이드 코스를 미리 차단하면 상대는 부담을 느껴 중앙(T존)으로 서브를 넣게 됩니다.
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <span className="font-bold text-white bg-indigo-500 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong>대각선 스텝 (Diagonal Step):</strong> 리턴 시 앞으로 들어오면서 대각선으로 움직여야 공이 휘어져 나가기 전에 컨택할 수 있습니다. 뒤로 물러나면 공은 이미 코트 밖으로 멀어진 상태라 리턴이 불가능해집니다.
                </div>
              </li>
            </ul>

            <h2 id="serving-tactic">내가 서브 넣을 때: 티(T) 존과 바디 공략</h2>
            <p>
              반대로 당신이 서브를 넣을 때는 어디를 노려야 할까요?
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>티(T) 존 공략:</strong> 듀스 코트(Deuce Court)에서 센터 라인 쪽(T존)으로 넣으면 왼손잡이의 백핸드를 공략할 수 있습니다. 이는 그들의 리턴 범위를 제한합니다.</li>
              <li><strong>바디(Body) 서브:</strong> 왼손잡이는 포핸드 리턴을 선호하여 습관적으로 옆으로 비켜서는 경향이 있습니다. 몸 쪽 깊숙이 서브를 넣으면 스텝이 꼬여 효과적입니다.</li>
            </ul>

            <h2 id="rally-strategy">랠리 공략: 백핸드 집요하게 괴롭히기</h2>
            <p>
              오른손잡이가 가장 자신 있어 하는 '포핸드 크로스'는 왼손잡이에게는 가장 강력한 <strong>'포핸드 크로스'</strong>로 되돌아옵니다.
            </p>
            <p>
              전술의 핵심은 나의 <strong>백핸드 크로스</strong> 또는 <strong>포핸드 인사이드-아웃</strong>을 통해 상대의 백핸드 쪽을 집요하게 노리는 것입니다. 상대가 백핸드로 공을 받아내게 만들면, 그제야 코트의 빈 공간(오픈 코트)이 보이기 시작할 것입니다.
            </p>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-500 mt-4">
              <p className="text-sm">
                <strong>⚠️ 주의:</strong> 왼손잡이의 백핸드 쪽으로 어프로치 샷을 칠 때는 평소보다 더 깊게 쳐야 합니다. 얕으면 강력한 패싱샷을 맞을 수 있습니다.
              </p>
            </div>

            <h2 id="doubles-tip">복식(Doubles)에서의 특별 전략</h2>
            <p>
              왼손잡이와 팀을 맺거나 상대로 만났을 때의 복식 전략은 다릅니다.
            </p>
            <Card className="my-6 bg-slate-50 dark:bg-slate-900">
              <CardContent className="pt-6">
                <h3 className="font-bold mb-3">상대가 왼손-오른손 조합일 때</h3>
                <p className="text-sm mb-2">가장 까다로운 조합입니다. 두 선수 모두 포핸드가 코트 중앙을 커버할 수도 있고, 양 날개(Side)를 커버할 수도 있습니다.</p>
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><strong>가운데 로브 금지:</strong> 두 선수 모두 포핸드 스매싱이 가능하므로 중앙 로브는 자살행위입니다.</li>
                  <li><strong>리턴 시 스트레이트 공략:</strong> 전위의 움직임이 헷갈릴 수 있으므로 앨리(Alley) 쪽 다운더라인 공격을 초반에 보여주어 전위 발을 묶어두세요.</li>
                </ul>
              </CardContent>
            </Card>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              라파엘 나달이 수많은 오른손잡이 챔피언들을 무너뜨린 비결은 단순한 실력이 아니라 '왼손잡이의 이점'을 극대화했기 때문입니다. 하지만 반대로 생각하면, 왼손잡이 역시 오른손잡이를 대할 때 일정한 패턴을 가지고 있습니다. 그 패턴을 읽고 먼저 백핸드 쪽을 선점한다면, 왼손잡이는 더 이상 공포의 대상이 아닌 '익숙한 공략 대상'이 될 것입니다.
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
            currentSlug="tennis-strategy-vs-lefty"
            category="테니스 전술"
            tags={["테니스 전술", "왼손잡이", "Lefty", "서브 리턴", "공략법", "복식 전술"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
