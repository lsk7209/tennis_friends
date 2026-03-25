import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "알렉산더 즈베레프: 높이와 기술의 완벽한 조화",
  description: "198cm의 장신에서 나오는 광속 서브와 투어 최고의 백핸드. 부상을 이겨내고 다시 정상에 선 즈베레프의 이야기.",
  keywords: ["테니스","알렉산더 즈베레프","Alexander Zverev","서브","독일"],
  alternates: {
    canonical: 'https://tennisfrens.com/blog/alexander-zverev',
  },
  openGraph: {
    title: "알렉산더 즈베레프: 높이와 기술의 완벽한 조화",
    description: "198cm의 장신에서 나오는 광속 서브와 투어 최고의 백핸드. 부상을 이겨내고 다시 정상에 선 즈베레프의 이야기.",
    url: 'https://tennisfrens.com/blog/alexander-zverev',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "알렉산더 즈베레프: 높이와 기술의 완벽한 조화",
    description: "198cm의 장신에서 나오는 광속 서브와 투어 최고의 백핸드. 부상을 이겨내고 다시 정상에 선 즈베레프의 이야기.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "즈베레프는 올림픽 금메달리스트인가요?",
    "a": "네, 2020 도쿄 올림픽 남자 단식에서 금메달을 획득했습니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","알렉산더 즈베레프","Alexander Zverev","서브","독일"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            알렉산더 즈베레프: 높이와 기술의 완벽한 조화
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            198cm의 장신에서 나오는 광속 서브와 투어 최고의 백핸드. 부상을 이겨내고 다시 정상에 선 즈베레프의 이야기.
          </p>
        </div>
      </div>

      <Article slug="alexander-zverev" date="2026-01-24" title="알렉산더 즈베레프: 높이와 기술의 완벽한 조화" excerpt="198cm의 장신에서 나오는 광속 서브와 투어 최고의 백핸드. 부상을 이겨내고 다시 정상에 선 즈베레프의 이야기.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>독일 테니스의 자존심, 사샤 즈베레프</h2>
      <p>알렉산더 즈베레프(애칭 사샤)는 주니어 시절부터 '차기 세계 1위'로 지목받던 천재였습니다. 큰 키와 유연한 움직임은 그를 더욱 특별하게 만듭니다.</p>
      <h3>1. 압도적인 서브와 백핸드</h3>
      <p>그의 서브는 시속 220km를 넘나들며, 특히 듀스 코트에서의 와이드 서브는 득점 공식입니다. 백핸드 다운더라인은 그의 가장 강력한 위닝샷입니다.</p>
      <h3>2. 부상 극복과 성숙</h3>
      <p>2022년 롤랑가로스에서의 치명적인 발목 부상은 그에게 시련이었지만, 동시에 그를 정신적으로 더 강하게 만들었습니다. 복귀 후 그는 더욱 단단해진 모습으로 투어를 호령하고 있습니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="alexander-zverev" 
            category="Player" 
            tags={["테니스","알렉산더 즈베레프","Alexander Zverev","서브","독일"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
