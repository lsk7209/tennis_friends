import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "스테파노스 치치파스: 그리스 조각상의 테니스",
  description: "긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.",
  keywords: ["테니스","스테파노스 치치파스","Stefanos Tsitsipas","그리스","원핸드 백핸드"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/stefanos-tsitsipas',
  },
  openGraph: {
    title: "스테파노스 치치파스: 그리스 조각상의 테니스",
    description: "긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.",
    url: 'https://www.tennisfrens.com/blog/stefanos-tsitsipas',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "스테파노스 치치파스: 그리스 조각상의 테니스",
    description: "긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "치치파스가 유튜버인가요?",
    "a": "네, 브이로그를 직접 편집하여 올리는 것으로 유명하며, 영상 퀄리티도 수준급입니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","스테파노스 치치파스","Stefanos Tsitsipas","그리스","원핸드 백핸드"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            스테파노스 치치파스: 그리스 조각상의 테니스
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.
          </p>
        </div>
      </div>

      <Article showHeader={false} slug="stefanos-tsitsipas" date="2026-01-24" title="스테파노스 치치파스: 그리스 조각상의 테니스" excerpt="긴 머리를 휘날리며 코트를 누비는 그리스의 신. 강력한 포핸드와 네트 플레이를 겸비한 치치파스의 스타일.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>그리스 신화의 재림, 스테파노스 치치파스</h2>
      <p>치치파스는 유튜브를 운영하고 철학적인 글을 쓰는 등 독특한 감성의 소유자입니다. 코트 위에서도 창의적인 플레이를 보여줍니다.</p>
      <h3>1. 포핸드 지배력</h3>
      <p>그의 포핸드는 투어 최정상급입니다. 인사이드-아웃 포핸드로 상대를 압박하는 능력은 최고 수준입니다.</p>
      <h3>2. 가족과 테니스</h3>
      <p>어머니가 프로 선수 출신이며, 아버지가 코치를 맡고 있는 테니스 가족입니다. 남동생도 프로 선수로 활동하고 있습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="stefanos-tsitsipas" 
            category="Player" 
            tags={["테니스","스테파노스 치치파스","Stefanos Tsitsipas","그리스","원핸드 백핸드"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
