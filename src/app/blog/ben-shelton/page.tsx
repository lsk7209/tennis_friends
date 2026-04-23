import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "벤 쉘튼: 미국의 새로운 서브 킹",
  description: "대학교 테니스에서 혜성처럼 등장한 왼손잡이 거포. 벤 쉘튼의 폭발적인 서브와 다이내믹한 플레이 스타일.",
  keywords: ["테니스","벤 쉘튼","Ben Shelton","서브","미국"],
  alternates: {
    canonical: 'https://tennisfrens.com/players/ben-shelton',
  },
  openGraph: {
    title: "벤 쉘튼: 미국의 새로운 서브 킹",
    description: "대학교 테니스에서 혜성처럼 등장한 왼손잡이 거포. 벤 쉘튼의 폭발적인 서브와 다이내믹한 플레이 스타일.",
    url: 'https://tennisfrens.com/players/ben-shelton',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "벤 쉘튼: 미국의 새로운 서브 킹",
    description: "대학교 테니스에서 혜성처럼 등장한 왼손잡이 거포. 벤 쉘튼의 폭발적인 서브와 다이내믹한 플레이 스타일.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "쉘튼은 대학 선수 출신인가요?",
    "a": "네, 플로리다 대학(Gators)에서 뛰며 NCAA 단식 챔피언을 차지했습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","벤 쉘튼","Ben Shelton","서브","미국"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            벤 쉘튼: 미국의 새로운 서브 킹
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            대학교 테니스에서 혜성처럼 등장한 왼손잡이 거포. 벤 쉘튼의 폭발적인 서브와 다이내믹한 플레이 스타일.
          </p>
        </div>
      </div>

      <Article slug="ben-shelton" date="2026-01-24" title="벤 쉘튼: 미국의 새로운 서브 킹" excerpt="대학교 테니스에서 혜성처럼 등장한 왼손잡이 거포. 벤 쉘튼의 폭발적인 서브와 다이내믹한 플레이 스타일.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>코트를 뒤흔드는 에너지, 벤 쉘튼</h2>
      <p>벤 쉘튼은 등장과 동시에 투어의 주목을 받았습니다. 그의 아버지는 프로 선수 출신인 브라이언 쉘튼으로, 체계적인 엘리트 교육을 받았습니다.</p>
      <h3>1. 왼손 서브의 이점</h3>
      <p>강력한 파워에 왼손잡이 특유의 휠(Spin)까지 더해진 그의 서브는 리턴하기 악몽과 같습니다. 특히 킥 서브의 높이는 압도적입니다.</p>
      <h3>2. 쇼맨십과 세리머니</h3>
      <p>US 오픈에서 보여준 '전화 끊기' 세리머니는 전 세계적인 화제가 되었습니다. 그는 관중의 환호를 즐길 줄 아는 엔터테이너입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="ben-shelton" 
            category="Player" 
            tags={["테니스","벤 쉘튼","Ben Shelton","서브","미국"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
