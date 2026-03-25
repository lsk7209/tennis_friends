import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "안드레이 루블레프: 포핸드 머신의 열정",
  description: "투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. 'Bweh'라는 기합과 함께 뿜어내는 루블레프의 폭발적인 에너지.",
  keywords: ["테니스","안드레이 루블레프","Andrey Rublev","포핸드","러시아"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/andrey-rublev',
  },
  openGraph: {
    title: "안드레이 루블레프: 포핸드 머신의 열정",
    description: "투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. 'Bweh'라는 기합과 함께 뿜어내는 루블레프의 폭발적인 에너지.",
    url: 'https://tennisfrens.com/blog/andrey-rublev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "안드레이 루블레프: 포핸드 머신의 열정",
    description: "투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. 'Bweh'라는 기합과 함께 뿜어내는 루블레프의 폭발적인 에너지.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "루블레프의 기합 소리는?",
    "a": "'Bweh(붸)'라고 들리는 독특한 기합 소리로 유명합니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","안드레이 루블레프","Andrey Rublev","포핸드","러시아"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            안드레이 루블레프: 포핸드 머신의 열정
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. 'Bweh'라는 기합과 함께 뿜어내는 루블레프의 폭발적인 에너지.
          </p>
        </div>
      </div>

      <Article slug="andrey-rublev" date="2026-01-24" title="안드레이 루블레프: 포핸드 머신의 열정" excerpt="투어에서 가장 강력한 포핸드를 가진 선수 중 한 명. 'Bweh'라는 기합과 함께 뿜어내는 루블레프의 폭발적인 에너지.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>열정의 아이콘, 안드레이 루블레프</h2>
      <p>루블레프는 코트 위에서 모든 에너지를 쏟아붓는 선수입니다. 때로는 감정을 주체하지 못하는 모습도 보이지만, 그 순수한 열정이 팬들을 매료시킵니다.</p>
      <h3>1. 파괴적인 포핸드</h3>
      <p>그의 포핸드 스피드는 타의 추종을 불허합니다. 빠른 템포로 공을 때려내며 상대를 베이스라인 뒤로 밀어냅니다.</p>
      <h3>2. 꾸준함의 대명사</h3>
      <p>ATP 500 시리즈의 제왕이라 불릴 만큼 꾸준히 성적을 내는 선수입니다. 기복 없이 상위권을 유지하는 성실함이 그의 무기입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="andrey-rublev" 
            category="Player" 
            tags={["테니스","안드레이 루블레프","Andrey Rublev","포핸드","러시아"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
