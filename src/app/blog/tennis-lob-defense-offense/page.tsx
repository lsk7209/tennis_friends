import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브",
  description: "위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.",
  keywords: ["테니스 기술", "로브", "Lob", "탑스핀 로브", "수비"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-lob-defense-offense',
  },
  openGraph: {
    title: "로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브",
    description: "위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.",
    url: 'https://tennisfriends.co.kr/blog/tennis-lob-defense-offense',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브",
    description: "위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '핵심 포인트 1', depth: 2 },
  { id: 'key-point-2', text: '핵심 포인트 2', depth: 2 },
  { id: 'key-point-3', text: '핵심 포인트 3', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "상대가 스매싱을 잘하는데 로브를 띄워도 될까요?",
    a: "네, 하지만 깊이가 중요합니다. 베이스라인 근처까지 깊게 보내면 스매싱 공격권에서도 수비가 가능합니다. 또한 태양을 등지고 로브를 띄우면 상대의 시야를 방해하여 실수를 유도할 수도 있습니다."
  },
  {
    q: "탑스핀 로브 연습은 어떻게 하나요?",
    a: "와이퍼 스윙과 비슷하게 공 아래에서 위로 급격하게 라켓을 채 올려줘야 합니다. 네트 바로 앞에서 무릎을 굽히고 공을 감아올리는 짧은 동작부터 연습해 보세요."
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
            <Badge key="로브" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">로브</Badge>
            <Badge key="Lob" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">Lob</Badge>
            <Badge key="탑스핀 로브" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">탑스핀 로브</Badge>
            <Badge key="수비" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">수비</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.
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

      <Article slug="tennis-lob-defense-offense" date="2026-01-24" title="로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브" excerpt="위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-sky-50 dark:bg-sky-900/40 p-6 rounded-2xl mb-8 border border-sky-100 dark:border-sky-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                로브(Lob)는 종종 수비수의 최후 수단으로 여겨지지만, 사실은 <strong>가장 스마트한 공격 수단</strong>이기도 합니다. 하늘 높이 띄우는 공 하나가 상대의 기세와 리듬을 완벽하게 뺏을 수 있기 때문입니다. 위기 상황을 탈출하는 수비형 로브부터, 네트 대시한 상대를 무너뜨리는 공격형 탑스핀 로브까지 정리해 드립니다.
              </p>
            </div>

            <h2 id="key-point-1">수비형 로브: "시간을 벌어라"</h2>
            <p>
              코트 밖으로 밀려났을 때, 가장 필요한 것은 다시 중앙으로 복귀할 <strong>'시간'</strong>입니다.
            </p>
            <ul className="space-y-3 my-4">
              <li className="flex gap-2">
                <span className="text-sky-500 font-bold">●</span>
                <span><strong>궤적:</strong> 최대한 높게 띄우세요. 공이 하늘에 머무는 시간이 길수록 당신이 위치를 잡을 여유가 생깁니다.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-sky-500 font-bold">●</span>
                <span><strong>깊이:</strong> 공의 높이보다 중요한 것은 깊이입니다. 서비스 라인 근처에 떨어지는 로브는 상대에게 스매싱 기회만 줄 뿐입니다. 베이스라인 안쪽 1~2m 지점을 겨냥하세요.</span>
              </li>
            </ul>

            <h2 id="key-point-2">공격형 탑스핀 로브: "허를 찔러라"</h2>
            <p>
              상대가 네트로 대시할 때, 패싱샷만 생각하는 것은 초보입니다.
            </p>
            <p>
              탑스핀 로브는 드라이브를 거는 것처럼 빠른 스윙을 하면서 마지막 순간에 공을 위로 감아올립니다. 상대는 낮은 공이 올 줄 알고 자세를 낮췄다가, 머리 위로 빠르게 넘어가는 공을 바라볼 수밖에 없습니다. 바운드 후에도 스핀 때문에 공이 멀리 도망가므로 추격이 거의 불가능합니다.
            </p>

            <h2 id="key-point-3">복식 경기에서의 로브 활용</h2>
            <p>
              복식에서 로브는 <strong>'포메이션 파괴자'</strong>입니다.
            </p>
            <div className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-6">
              <h4 className="font-bold mb-2">로브-앤-대시 (Lob and Dash)</h4>
              <p className="text-sm">리턴 상황에서 전위의 머리 위로 로브를 띄우고 즉시 우리 팀 두 사람 모두 네트로 전진하세요. 상대방은 공을 쫓아 뒤로 물러나야 하며, 우리 팀은 강력한 네트 점유권을 가져오게 됩니다.</p>
            </div>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              로브를 잘 치는 선수는 상대를 심리적 압박 속에 가둡니다. 상대는 '언제 머리 위로 로브가 올지 모른다'는 불안감에 공격적인 네트 대시를 주저하게 되기 때문입니다. 연습할 때 로브를 '도망가는 공'이 아니라 '게임을 재설계하는 공'으로 생각하고 사용해 보세요.
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
            currentSlug="tennis-lob-defense-offense"
            category="테니스 기술"
            tags={["테니스 기술", "로브", "Lob", "탑스핀 로브", "수비"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
