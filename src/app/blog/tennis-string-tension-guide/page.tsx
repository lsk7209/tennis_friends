import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "스트링 텐션의 비밀: 높게? 낮게?",
  description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
  keywords: ["테니스 장비", "스트링 텐션", "라켓 수리", "컨트롤", "파워"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-string-tension-guide',
  },
  openGraph: {
    title: "스트링 텐션의 비밀: 높게? 낮게?",
    description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
    url: 'https://tennisfriends.co.kr/blog/tennis-string-tension-guide',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "스트링 텐션의 비밀: 높게? 낮게?",
    description: "텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: "높은 텐션(Tight): '컨트롤'의 정석", depth: 2 },
  { id: 'key-point-2', text: "낮은 텐션(Loose): '파워'와 '스핀'의 극대화", depth: 2 },
  { id: 'key-point-3', text: "나에게 맞는 '적정 텐션' 찾는 법", depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "텐션이 낮아지면 스핀이 정말 더 많이 걸리나요?",
    a: "네, '스냅백(Snap-back)' 현상 때문입니다. 스트링이 임팩트 시 옆으로 밀렸다가 다시 제자리로 돌아오면서 공에 회전을 더해주는데, 텐션이 낮을수록 스트링의 가동 범위가 넓어져 스핀량이 증가합니다."
  },
  {
    q: "스트링 작업 후 시간이 지나면 텐션이 변하나요?",
    a: "그렇습니다. 이를 '텐션 로스'라고 합니다. 보통 줄을 맨 직후 24시간 내에 가장 많이 떨어지며, 폴리 스트링의 경우 한 달 정도 지나면 탄성을 잃어 '죽은 스트링'이 되므로 주기적인 교체가 필요합니다."
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
            <Badge key="테니스 장비" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 장비</Badge>
            <Badge key="스트링 텐션" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">스트링 텐션</Badge>
            <Badge key="라켓 수리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">라켓 수리</Badge>
            <Badge key="컨트롤" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">컨트롤</Badge>
            <Badge key="파워" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">파워</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            스트링 텐션의 비밀: 높게? 낮게?
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.
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

      <Article slug="tennis-string-tension-guide" date="2026-01-24" title="스트링 텐션의 비밀: 높게? 낮게?" excerpt="텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-2xl mb-8 border-l-8 border-blue-500">
              <p className="text-lg text-slate-800 dark:text-slate-200 leading-relaxed mb-0 font-medium">
                "라켓을 바꾼 것보다 텐션을 2파운드 조정한 것이 경기력을 더 크게 바꿨습니다." 많은 프로 선수가 입을 모아 하는 말입니다. 스트링 텐션은 공이 라켓에 머무는 시간과 반발력을 결정하는 핵심 변수입니다.
              </p>
            </div>

            <h2 id="key-point-1">높은 텐션(Tight): '컨트롤'의 정석</h2>
            <p>
              보통 55파운드 이상의 높은 텐션을 의미합니다. 스트링이 팽팽하면 임팩트 시 '트램펄린 효과'가 줄어듭니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <Card className="bg-white dark:bg-slate-900 border-blue-100 dark:border-blue-900">
                <CardContent className="p-4">
                  <h4 className="text-blue-600 font-bold mb-2">장점</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 정교한 샷 컨트롤이 가능</li>
                    <li>• 공이 라인 밖으로 나가는 것을 억제</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-slate-900 border-red-100 dark:border-red-900">
                <CardContent className="p-4">
                  <h4 className="text-red-600 font-bold mb-2">단점</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 스스로 만들어야 하는 파워 부담</li>
                    <li>• 팔에 전달되는 충격 증가 (부상 위험)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 id="key-point-2">낮은 텐션(Loose): '파워'와 '스핀'의 극대화</h2>
            <p>
              40~48파운드 수준의 낮은 텐션은 최근 현대 테니스의 트렌드이기도 합니다. 스트링이 더 많이 변형되었다가 복원되면서 공에 엄청난 에너지를 실어줍니다.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span><strong>스냅백(Snap-back) 효과:</strong> 스트링이 미끄러졌다 돌아오며 스핀량이 늘어납니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                <span><strong>편안한 타구감:</strong> 충격을 스트링이 대신 흡수하여 엘보 방지에 도움을 줍니다.</span>
              </li>
            </ul>

            <h2 id="key-point-3">나에게 맞는 '적정 텐션' 찾는 법</h2>
            <p>
              가장 좋은 기준은 본인의 <strong>스윙 스피드</strong>입니다.
            </p>
            <table className="w-full text-sm border-collapse my-6">
              <thead>
                <tr className="bg-slate-100 dark:bg-slate-800">
                  <th className="p-3 border">유형</th>
                  <th className="p-3 border">추천 범위</th>
                  <th className="p-3 border">핵심 이유</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border font-bold">초보자</td>
                  <td className="p-3 border text-center">48~52 lbs</td>
                  <td className="p-3 border">부족한 근력을 스트링 파워로 보완</td>
                </tr>
                <tr>
                  <td className="p-3 border font-bold">중상급자</td>
                  <td className="p-3 border text-center">52~56 lbs</td>
                  <td className="p-3 border">강한 스윙을 코트 안에 가두기 위함</td>
                </tr>
              </tbody>
            </table>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              텐션 선택에 정답은 없습니다. 하지만 중요한 규칙 하나는 있습니다. <strong>"겨울철에는 평소보다 2~3파운드 낮추고, 여름철에는 높이세요."</strong> 온도가 낮으면 스트링 자체가 딱딱해지기 때문입니다. 작은 실험을 통해 여러분만의 골디락스(Goldilocks) 텐션을 찾으시길 바랍니다.
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
            currentSlug="tennis-string-tension-guide"
            category="테니스 장비"
            tags={["테니스 장비", "스트링 텐션", "라켓 수리", "컨트롤", "파워"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
