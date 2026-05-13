import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "후베르트 후르카츠: 폴란드의 서브 머신",
  description: "조용하지만 강력하다. 투어 최고의 서브 능력과 부드러운 터치를 겸비한 후르카츠의 매력.",
  keywords: ["테니스","후베르트 후르카츠","Hubert Hurkacz","서브 앤 발리","폴란드"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/hubert-hurkacz',
  },
  openGraph: {
    title: "후베르트 후르카츠: 폴란드의 서브 머신",
    description: "조용하지만 강력하다. 투어 최고의 서브 능력과 부드러운 터치를 겸비한 후르카츠의 매력.",
    url: 'https://www.tennisfrens.com/blog/hubert-hurkacz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "후베르트 후르카츠: 폴란드의 서브 머신",
    description: "조용하지만 강력하다. 투어 최고의 서브 능력과 부드러운 터치를 겸비한 후르카츠의 매력.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "후르카츠가 채식주의자인가요?",
    "a": "네, 그는 비건(Vegan) 식단을 실천하는 선수로 알려져 있습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","후베르트 후르카츠","Hubert Hurkacz","서브 앤 발리","폴란드"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            후베르트 후르카츠: 폴란드의 서브 머신
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            조용하지만 강력하다. 투어 최고의 서브 능력과 부드러운 터치를 겸비한 후르카츠의 매력.
          </p>
        </div>
      </div>

      <Article showHeader={false} slug="hubert-hurkacz" date="2026-01-24" title="후베르트 후르카츠: 폴란드의 서브 머신" excerpt="조용하지만 강력하다. 투어 최고의 서브 능력과 부드러운 터치를 겸비한 후르카츠의 매력.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>부드러운 거인, 후베르트 후르카츠</h2>
      <p>그는 투어에서 가장 '착한 선수'로 통합니다. 하지만 코트 위에서는 무자비한 서브를 꽂아 넣습니다.</p>
      <h3>1. 완벽한 서브 메커니즘</h3>
      <p>그의 서브는 폼이 간결하고 아름답습니다. 높은 타점에서 나오는 각도 깊은 서브는 받기 어렵기로 정평이 나 있습니다.</p>
      <h3>2. 올바른 멘탈</h3>
      <p>항상 긍정적이고 평정심을 유지하는 멘탈은 그가 꾸준히 톱10을 유지하는 비결입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="hubert-hurkacz" 
            category="Player" 
            tags={["테니스","후베르트 후르카츠","Hubert Hurkacz","서브 앤 발리","폴란드"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
