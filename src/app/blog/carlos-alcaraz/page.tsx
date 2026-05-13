import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "카를로스 알카라스: 테니스의 새로운 황제",
  description: "최연소 세계 랭킹 1위. 페더러, 나달, 조코비치의 장점만 합친 것 같은 알카라스의 천재적인 플레이.",
  keywords: ["테니스","카를로스 알카라스","Carlos Alcaraz","스페인","차세대 황제"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/carlos-alcaraz',
  },
  openGraph: {
    title: "카를로스 알카라스: 테니스의 새로운 황제",
    description: "최연소 세계 랭킹 1위. 페더러, 나달, 조코비치의 장점만 합친 것 같은 알카라스의 천재적인 플레이.",
    url: 'https://www.tennisfrens.com/blog/carlos-alcaraz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "카를로스 알카라스: 테니스의 새로운 황제",
    description: "최연소 세계 랭킹 1위. 페더러, 나달, 조코비치의 장점만 합친 것 같은 알카라스의 천재적인 플레이.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "알카라스의 최연소 기록은?",
    "a": "만 19세의 나이로 ATP 세계 랭킹 1위에 오르며 역대 최연소 기록을 세웠습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","카를로스 알카라스","Carlos Alcaraz","스페인","차세대 황제"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            카를로스 알카라스: 테니스의 새로운 황제
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            최연소 세계 랭킹 1위. 페더러, 나달, 조코비치의 장점만 합친 것 같은 알카라스의 천재적인 플레이.
          </p>
        </div>
      </div>

      <Article showHeader={false} slug="carlos-alcaraz" date="2026-01-24" title="카를로스 알카라스: 테니스의 새로운 황제" excerpt="최연소 세계 랭킹 1위. 페더러, 나달, 조코비치의 장점만 합친 것 같은 알카라스의 천재적인 플레이.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>새로운 전설의 시작, 카를로스 알카라스</h2>
      <p>나달의 후계자로 불리지만, 그의 스타일은 페더러의 공격력과 조코비치의 유연성까지 갖췄습니다.</p>
      <h3>1. 완성형 올라운더</h3>
      <p>서브, 포핸드, 백핸드, 발리, 스매싱, 드롭샷. 테니스의 모든 기술을 완벽하게 구사합니다. 약점이 없습니다.</p>
      <h3>2. 미소 짓는 승부사</h3>
      <p>중요한 포인트에서도 미소를 잃지 않는 여유와 대담함은 20대 초반이라고 믿기 힘듭니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="carlos-alcaraz" 
            category="Player" 
            tags={["테니스","카를로스 알카라스","Carlos Alcaraz","스페인","차세대 황제"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
