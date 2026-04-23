import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "토미 폴: 기민한 미국의 테크니션",
  description: "빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.",
  keywords: ["테니스","토미 폴","Tommy Paul","테크니션","미국"],
  alternates: {
    canonical: 'https://tennisfrens.com/players/tommy-paul',
  },
  openGraph: {
    title: "토미 폴: 기민한 미국의 테크니션",
    description: "빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.",
    url: 'https://tennisfrens.com/players/tommy-paul',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "토미 폴: 기민한 미국의 테크니션",
    description: "빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "토미 폴의 주니어 성적은?",
    "a": "롤랑가로스 주니어 우승자 출신으로, 어릴 때부터 클레이 코트에서도 강점을 보였습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","토미 폴","Tommy Paul","테크니션","미국"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            토미 폴: 기민한 미국의 테크니션
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.
          </p>
        </div>
      </div>

      <Article slug="tommy-paul" date="2026-01-24" title="토미 폴: 기민한 미국의 테크니션" excerpt="빠른 발과 영리한 경기 운영. 미국 테니스의 황금세대를 이끄는 토미 폴의 다재다능함.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>가장 운동 신경 좋은 선수, 토미 폴</h2>
      <p>그의 코트 커버 능력은 놀라울 정도입니다. 역동적인 움직임으로 어려운 공을 받아내며 관중의 환호를 이끌어냅니다.</p>
      <h3>1. 역습의 명수</h3>
      <p>수비하다가 갑자기 공격으로 전환하는 능력이 탁월합니다. 그의 포핸드 역크로스는 상대의 허를 찌릅니다.</p>
      <h3>2. 자유로운 영혼</h3>
      <p>코트 밖에서의 자유분방한 모습과 달리 경기 중에는 누구보다 진지하고 집중력 있는 모습을 보여줍니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="tommy-paul" 
            category="Player" 
            tags={["테니스","토미 폴","Tommy Paul","테크니션","미국"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
