import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "바람 부는 날 테니스 잘 치는 법",
  description: "불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.",
  keywords: ["테니스 팁", "바람", "날씨", "풋워크", "야외 테니스"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
  },
  openGraph: {
    title: "바람 부는 날 테니스 잘 치는 법",
    description: "불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.",
    url: 'https://tennisfriends.co.kr/blog/tennis-windy-condition-tips',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "바람 부는 날 테니스 잘 치는 법",
    description: "불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '바람을 대하는 기본: '여유'와 '잔발'', depth: 2 },
  { id: 'key-point-2', text: '맞바람(Against) vs 등바람(With)', depth: 2 },
  { id: 'key-point-3', text: '옆바람(Crosswind) 공략법', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "바람 부는 날 테니스 잘 치는 법 관련 자주 묻는 질문 1",
    a: '이곳에 답변이 들어갑니다. 구체적이고 도움이 되는 정보를 제공하세요.'
  },
  {
    q: "바람 부는 날 테니스 잘 치는 법 관련 자주 묻는 질문 2",
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
            <Badge key="테니스 팁" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 팁</Badge>
            <Badge key="바람" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">바람</Badge>
            <Badge key="날씨" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">날씨</Badge>
            <Badge key="풋워크" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">풋워크</Badge>
            <Badge key="야외 테니스" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">야외 테니스</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            바람 부는 날 테니스 잘 치는 법
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.
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

      <Article slug="tennis-windy-condition-tips" date="2026-01-24" title="바람 부는 날 테니스 잘 치는 법" excerpt="불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-sky-50 dark:bg-sky-900/30 p-6 rounded-2xl mb-8 border border-sky-100 dark:border-sky-800 shadow-inner">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                테니스는 야외 스포츠이며, 바람은 경기의 '제3의 선수'입니다. 아무리 완벽한 폼을 가졌어도 불어오는 강풍 앞에서는 무너질 수밖에 없습니다. 하지만 바람을 원망하는 대신 이용할 줄 안다면, 당신은 실력 이상의 결과를 만들어낼 수 있습니다. 바람 부는 날 코트에서 살아남는 3가지 전술을 제안합니다.
              </p>
            </div>

            <h2 id="key-point-1">바람을 대하는 기본: '여유'와 '잔발'</h2>
            <p>
              바람이 불면 공의 궤적은 불규칙해집니다. 평소처럼 타이밍을 잡으려 하면 헛스윙이나 프레임 샷이 나오기 쉽습니다.
            </p>
            <ul className="list-none space-y-3 my-4">
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">●</span>
                <span><strong>스몰 스텝:</strong> 큰 보폭으로 이동하기보다 잘게 쪼개는 잔발을 통해 마지막 순간까지 타점을 조정해야 합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-500 mt-1">●</span>
                <span><strong>마진 확보:</strong> 라인 끝을 노리는 공격적인 샷보다는 코트 중앙에서 1~2미터 안쪽을 겨냥하여 바람에 의한 오차 범위를 확보하세요.</span>
              </li>
            </ul>

            <h2 id="key-point-2">맞바람(Against) vs 등바람(With)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-red-600 mb-2">⬇ 맞바람 (상대에게 부는 바람)</h4>
                <p className="text-sm">공이 짧아지기 쉽습니다. 평소보다 더 높고 길게 쳐야 하며, 이때는 마음껏 힘을 실어 스윙해도 공이 나가지 않습니다. <strong>드롭샷</strong>을 시도하기에 최상의 타이밍입니다.</p>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-blue-600 mb-2">⬆ 등바람 (나에게 부는 바람)</h4>
                <p className="text-sm">공이 베이스라인 밖으로 나가기 쉽습니다. 파워를 줄이고 <strong>탑스핀</strong>을 많이 걸어 공을 코트 안에 가둬야 합니다.</p>
              </div>
            </div>

            <h2 id="key-point-3">옆바람(Crosswind) 공략법</h2>
            <p>
              옆바람은 공을 코트 밖으로 밀어내거나 안으로 들여보냅니다.
            </p>
            <p>
              바람이 불어오는 쪽에서 불어 나가는 쪽으로 치는 크로스 샷은 매우 위험합니다. 추천하는 전략은 <strong>'바람을 타고 가는 샷'</strong>입니다. 바람이 공을 코트 안쪽으로 밀어준다고 느껴지는 쪽을 타겟으로 삼으세요. 그러면 평소보다 훨씬 큰 각도의 앵글샷을 안전하게 보낼 수 있습니다.
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              프로 선수들조차 바람이 심한 날에는 "이런 날은 테니스가 아니라 누가 더 잘 버티느냐의 싸움"이라고 말합니다. 화려한 샷에 대한 미련을 버리고, 바람이라는 변수를 전술의 일부로 받아들이는 순간 경기 주도권은 당신에게 넘어올 것입니다.
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
            currentSlug="tennis-windy-condition-tips"
            category="테니스 팁"
            tags={["테니스 팁", "바람", "날씨", "풋워크", "야외 테니스"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
