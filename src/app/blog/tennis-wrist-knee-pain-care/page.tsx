import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
  description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
  keywords: ["테니스 건강","부상 방지","손목 통증","무릎 재활","스트레칭"],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-wrist-knee-pain-care',
  },
  openGraph: {
    title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
    description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
    url: 'https://tennisfriends.co.kr/blog/tennis-wrist-knee-pain-care',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리",
    description: "TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems = [
  { id: 'introduction', text: '들어가며', depth: 2 },
  { id: 'key-point-1', text: '핵심 포인트 1', depth: 2 },
  { id: 'key-point-2', text: '핵심 포인트 2', depth: 2 },
  { id: 'key-point-3', text: '핵심 포인트 3', depth: 2 },
  { id: 'conclusion', text: '마무리하며', depth: 2 },
];

const faqs = [
  {
    q: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리 관련 자주 묻는 질문 1",
    a: '이곳에 답변이 들어갑니다. 구체적이고 도움이 되는 정보를 제공하세요.'
  },
  {
    q: "테니스 엘보 외의 부상: 손목 및 무릎 통증 관리 관련 자주 묻는 질문 2",
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
            <Badge key="테니스 건강" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">테니스 건강</Badge>
            <Badge key="부상 방지" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">부상 방지</Badge>
            <Badge key="손목 통증" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">손목 통증</Badge>
            <Badge key="무릎 재활" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">무릎 재활</Badge>
            <Badge key="스트레칭" className="bg-white/20 text-white border-white/30 backdrop-blur-sm hover:bg-white/30 transition-colors">스트레칭</Badge>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            테니스 엘보 외의 부상: 손목 및 무릎 통증 관리
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.
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

      <Article slug="tennis-wrist-knee-pain-care" date="2026-01-24" title="테니스 엘보 외의 부상: 손목 및 무릎 통증 관리" excerpt="TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          {/* Table of Contents */}
          <div className="mb-12">
            <TOC items={tocItems} />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700 prose-h2:pb-3 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-base">
            
            <h2 id="introduction">들어가며</h2>
            <p>
              {"TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭."} 이 글에서는 {"테니스 건강"}에 대해 깊이 있게 알아봅니다.
              (이곳에 서론 내용을 작성해 주세요.)
            </p>

            <h2 id="key-point-1">핵심 포인트 1</h2>
            <p>
              첫 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="key-point-2">핵심 포인트 2</h2>
            <p>
              두 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="key-point-3">핵심 포인트 3</h2>
            <p>
              세 번째 중요한 내용은... (내용 작성)
            </p>

            <h2 id="conclusion">마무리하며</h2>
            <p>
              지금까지 테니스 엘보 외의 부상: 손목 및 무릎 통증 관리에 대해 알아보았습니다. 여러분의 테니스 라이프에 도움이 되기를 바랍니다.
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
          <CTA />
        </div>
      </Article>
    </div>
  );
}
