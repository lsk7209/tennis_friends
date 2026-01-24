import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
  description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
  keywords: ["테니스 장비", "댐퍼", "진동 방지", "엘보링", "타구음"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-dampener-effectiveness',
  },
  openGraph: {
    title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
    description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
    url: 'https://tennisfriends.co.kr/blog/tennis-dampener-effectiveness',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "댐퍼(Dampener)의 효과: 진동 감소와 타구감",
    description: "작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.",
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
    q: "댐퍼를 사용하면 팔꿈치 통증(테니스 엘보)이 줄어드나요?",
    a: "댐퍼는 타구음과 미세한 고주파 진동을 줄여주어 '타구감'을 부드럽게 만들지만, 실제 팔로 전달되는 큰 충격 에너지를 흡수하지는 못합니다. 엘보 예방을 위해서는 부드러운 스트링이나 낮은 텐션 선택이 더 효과적입니다."
  },
  {
    q: "프로 선수들은 댐퍼를 많이 사용하나요?",
    a: "취향에 따라 갈립니다. 조코비치나 나달은 댐퍼를 사용하지만, 페더러나 머레이처럼 사용하지 않는 선수들도 많습니다. 사용하지 않는 선수들은 현의 미세한 떨림을 통해 공의 터치감을 더 정확히 느끼고 싶어 하는 경우가 많습니다."
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
            <Badge key="댐퍼" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">댐퍼</Badge>
            <Badge key="진동 방지" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">진동 방지</Badge>
            <Badge key="엘보링" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">엘보링</Badge>
            <Badge key="타구음" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">타구음</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            댐퍼(Dampener)의 효과: 진동 감소와 타구감
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.
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

      <Article slug="tennis-dampener-effectiveness" date="2026-01-24" title="댐퍼(Dampener)의 효과: 진동 감소와 타구감" excerpt="작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">

            <h2 id="introduction">들어가며</h2>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-2xl mb-8 border border-blue-100 dark:border-blue-800">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-0">
                라켓 스트링 하단에 끼워진 작은 고무 조각, '댐퍼(Dampener)' 혹은 '엘보링'이라 불리는 이 부품은 테니스인들 사이에서 가장 논쟁이 뜨거운 소품 중 하나입니다. "엘보를 예방해준다"는 믿음부터 "단순한 장식일 뿐이다"라는 회의론까지, 댐퍼의 실제 효과와 선택 기준에 대해 과학적으로 파헤쳐 봅니다.
              </p>
            </div>

            <h2 id="key-point-1">진동 감소와 '타구음'의 심리적 효과</h2>
            <p>
              댐퍼의 가장 즉각적인 효과는 임팩트 시 발생하는 <strong>'핑(Ping)'</strong> 하는 높은 주파수의 금속성 소음을 잡아주는 것입니다. 이 소리가 사라지면 타구감이 훨씬 묵직하고 부드럽게 느껴집니다.
            </p>
            <Card className="my-6 bg-slate-50 dark:bg-slate-900 border-none shadow-inner">
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span><strong>음향적 안정:</strong> 스트링의 잔류 진동 소음을 제거하여 집중력을 높여줍니다.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-500 font-bold">✓</span>
                    <span><strong>피드백 변화:</strong> 덜덜거리는 진동이 손에 덜 전달되어 심리적으로 안도감을 줍니다.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <h2 id="key-point-2">테니스 엘보 방지 효과의 진실</h2>
            <p>
              많은 입문자가 댐퍼를 '엘보링'이라 부르며 부상 방지용으로 구매하지만, 스포츠 과학 연구에 따르면 <strong>댐퍼가 라켓 프레임에서 팔로 전달되는 충격량 자체를 줄여주지는 못합니다.</strong>
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-5 rounded-xl border-l-4 border-amber-400 my-6">
              <p className="text-amber-800 dark:text-amber-200 text-sm mb-0">
                엘보는 주로 잘못된 스윙 폼, 라켓의 강성, 스트링 텐션, 그리고 근력 부족에서 기인합니다. 댐퍼는 '불쾌한 느낌'을 지워줄 뿐, 물리적인 충격을 흡수하는 장치는 아닙니다. 부상 방지를 원하신다면 라켓 무게와 스트링 텐션 조절이 우선입니다.
              </p>
            </div>

            <h2 id="key-point-3">나에게 맞는 댐퍼 종류와 선택법</h2>
            <p>
              댐퍼는 크게 '버튼형'과 '긴 줄 형태'로 나뉩니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                <h4 className="font-bold mb-2">● 버튼형 (Button)</h4>
                <p className="text-sm">가장 일반적이며 탈부착이 쉽습니다. 소리 차단 능력은 보통이며 귀여운 캐릭터 디자인이 많습니다.</p>
              </div>
              <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl">
                <h4 className="font-bold mb-2">● 웜형 (Worm)</h4>
                <p className="text-sm">여러 줄의 스트링에 걸쳐 설치하며, 진동 억제 능력이 훨씬 뛰어납니다. 묵직한 타구감을 선호하는 선수들에게 적합합니다.</p>
              </div>
            </div>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              댐퍼 사용 여부는 전적으로 <strong>'개인의 취향'</strong>입니다. 안드레 애거시처럼 굵은 고무줄을 묶어 쓰기도 하고, 로저 페더러나 세레나 윌리엄스처럼 아예 사용하지 않는 선수들도 많습니다. 만약 임팩트 시의 맑은 소리를 통해 공의 위치를 파악하고 싶다면 제거하고, 부드러운 타구감을 원한다면 장착해 보세요. 작은 변화가 여러분의 즐거움을 더해줄 것입니다.
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
            currentSlug="tennis-dampener-effectiveness"
            category="테니스 장비"
            tags={["테니스 장비", "댐퍼", "진동 방지", "엘보링", "타구음"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
