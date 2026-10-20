import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { blogContentMap } from '@/data/blog-content';
import { normalizeArticleHtml } from '@/lib/article-html.mjs';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "하이브리드 스트링: 소재·메인/크로스 선택과 비교 기록",
  description: "하이브리드는 서로 다른 스트링을 세로줄과 가로줄에 조합하는 방식입니다. 현재 셋업을 기준으로 소재·배치·작업 텐션을 구분해 상담하고 비교하세요.",
  keywords: ["테니스 장비", "하이브리드 스트링", "폴리", "인조쉽", "커스텀"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/tennis-hybrid-string-setup',
  },
  openGraph: {
    title: "하이브리드 스트링: 소재·메인/크로스 선택과 비교 기록",
    description: "하이브리드는 서로 다른 스트링을 세로줄과 가로줄에 조합하는 방식입니다. 현재 셋업을 기준으로 소재·배치·작업 텐션을 구분해 상담하고 비교하세요.",
    url: 'https://tennisfrens.com/blog/tennis-hybrid-string-setup',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "하이브리드 스트링: 소재·메인/크로스 선택과 비교 기록",
    description: "하이브리드는 서로 다른 스트링을 세로줄과 가로줄에 조합하는 방식입니다. 현재 셋업을 기준으로 소재·배치·작업 텐션을 구분해 상담하고 비교하세요.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// The mapped, reviewed article is also used by this independent static route.
const tocItems: { id: string; text: string; depth: 2 | 3 }[] = [];
const articleBody = normalizeArticleHtml(blogContentMap['tennis-hybrid-string-setup'].content)
  .replace(/<h2>(.*?)<\/h2>/g, (_heading: string, title: string) => {
    const id = `section-${tocItems.length + 1}`;
    tocItems.push({ id, text: title, depth: 2 });
    return `<h2 id="${id}">${title}</h2>`;
  });
const faqs = [
  { q: "하이브리드에서 메인과 크로스의 텐션은 항상 달라야 하나요?", a: "모든 조합에 적용되는 하나의 관계는 없습니다. 라켓·스트링 제조사의 안내와 작업자의 판단을 확인하고 제품·배치·텐션·단위를 따로 기록하세요." },
  { q: "편안한 스트링을 고르면 팔 통증을 해결할 수 있나요?", a: "소재나 셋업 변경은 통증 치료와 안전한 경기 지속을 보장하지 않습니다. 통증을 악화시키는 활동을 줄이거나 중단하고 필요한 건강 상담을 받으세요." },
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
            <Badge key="하이브리드 스트링" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">하이브리드 스트링</Badge>
            <Badge key="폴리" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">폴리</Badge>
            <Badge key="인조쉽" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">인조쉽</Badge>
            <Badge key="커스텀" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">커스텀</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            하이브리드 스트링: 소재·메인/크로스 선택과 비교 기록
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            하이브리드는 서로 다른 스트링을 세로줄과 가로줄에 조합하는 방식입니다. 현재 셋업을 기준으로 소재·배치·작업 텐션을 구분해 상담하고 비교하세요.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium">10분 읽기</span>
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

      <Article showHeader={false} slug="tennis-hybrid-string-setup" date="2026-01-24" title="하이브리드 스트링: 소재·메인/크로스 선택과 비교 기록" excerpt="하이브리드는 서로 다른 스트링을 세로줄과 가로줄에 조합하는 방식입니다. 현재 셋업을 기준으로 소재·배치·작업 텐션을 구분해 상담하고 비교하세요.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Editorial HTML comes from the same source as the article inventory. */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-p:leading-relaxed" dangerouslySetInnerHTML={{ __html: articleBody }} />

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
                      <Link href="/blog/tennis-elbow-load-management-match-application" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        <span className="text-xl">🎯</span>
                        <span className="font-medium">팔꿈치 통증과 상담 기록</span>
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
                      <a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/the-ad-inbox-mailbag--get-answers-to-your-tennis-questions.html" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-gray-900 dark:text-gray-100 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                        <span className="text-xl">🌐</span>
                        <span className="font-medium">USTA 스트링 질의응답</span>
                      </a>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <FAQ items={faqs} />
          <RelatedPosts
            currentSlug="tennis-hybrid-string-setup"
            category="테니스 장비"
            tags={["테니스 장비", "하이브리드 스트링", "폴리", "인조쉽", "커스텀"]}
          />

          <CTA />
        </div>
      </Article>
    </div>
  );
}
