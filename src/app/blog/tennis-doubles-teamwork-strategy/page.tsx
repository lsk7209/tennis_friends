import Article from '@/components/blog/Article';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import RelatedPosts from '@/components/blog/RelatedPosts';

export const metadata = {
  title: "복식의 신이 되는 팀워크 전략 (Doubles Strategy)",
  description: "복식은 단식과 다른 게임입니다. 1+1이 3이 되는 파트너십의 비밀, 포칭 타이밍, 그리고 진형(Formation) 운영법을 다룹니다.",
  keywords: ["테니스","복식","팀워크","포칭","발리"],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/tennis-doubles-teamwork-strategy',
  },
  openGraph: {
    title: "복식의 신이 되는 팀워크 전략 (Doubles Strategy)",
    description: "복식은 단식과 다른 게임입니다. 1+1이 3이 되는 파트너십의 비밀, 포칭 타이밍, 그리고 진형(Formation) 운영법을 다룹니다.",
    url: 'https://www.tennisfrens.com/blog/tennis-doubles-teamwork-strategy',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "복식의 신이 되는 팀워크 전략 (Doubles Strategy)",
    description: "복식은 단식과 다른 게임입니다. 1+1이 3이 되는 파트너십의 비밀, 포칭 타이밍, 그리고 진형(Formation) 운영법을 다룹니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};


const faqs = [
  {
    "q": "파트너가 자꾸 실수하는데 어떡하죠?",
    "a": "절대로 탓하지 마세요. 심리적으로 위축되면 더 실수합니다. '괜찮아, 다음 거 하나 하자!'라고 파이팅을 불어넣어 주는 것이 승률을 높이는 최고의 방법입니다."
  },
  {
    "q": "전위 위치는 어디가 좋나요?",
    "a": "서비스 박스 정중앙보다 약간 네트 쪽, 그리고 단식 사이드라인과 센터라인의 중간 정도가 기본입니다. 너무 네트에 붙으면 로브에 당하고, 너무 뒤에 있으면 발리 공격을 하기 힘듭니다."
  }
];

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-gray-950 dark:to-blue-950">
      <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["테니스","복식","팀워크","포칭","발리"].map((tag) => (
              <Badge key={tag} className="bg-white/20 text-white border-white/30 backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
            복식의 신이 되는 팀워크 전략 (Doubles Strategy)
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed font-light">
            복식은 단식과 다른 게임입니다. 1+1이 3이 되는 파트너십의 비밀, 포칭 타이밍, 그리고 진형(Formation) 운영법을 다룹니다.
          </p>
        </div>
      </div>

      <Article showHeader={false} slug="tennis-doubles-teamwork-strategy" date="2026-01-24" title="복식의 신이 되는 팀워크 전략 (Doubles Strategy)" excerpt="복식은 단식과 다른 게임입니다. 1+1이 3이 되는 파트너십의 비밀, 포칭 타이밍, 그리고 진형(Formation) 운영법을 다룹니다.">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            
      <h2>둘이서 하나가 되는 예술, 복식 테니스</h2>
      <p>복식 경기는 단순히 두 명이 코트에 서 있는 것이 아닙니다. 파트너와의 호흡, 역할 분담, 그리고 유기적인 움직임이 승패를 가릅니다.</p>

      <h3>1. 소통하라 (Communication)</h3>
      <p>서브를 넣기 전, 리턴을 준비할 때 항상 파트너와 작전을 짜세요. "나 서브 티존으로 넣을게, 네가 포칭 나가", "가운데는 내가 맡을게" 같은 짧은 대화가 실수를 줄이고 신뢰를 쌓습니다. 실수했을 때 서로 격려하는 것은 기본 중의 기본입니다.</p>

      <h3>2. 포칭(Poaching)의 미학</h3>
      <p>전위(Net Player)는 가만히 서 있는 허수아비가 아닙니다. 파트너의 좋은 서브나 스트로크가 들어갔을 때, 과감하게 가운데로 뛰어들어 발리로 끊어먹어야 합니다. 설령 실패하더라도, 상대 리턴러에게 "언제든지 튀어나올 수 있다"는 압박감을 주는 것만으로도 큰 효과가 있습니다.</p>

      <h3>3. 센터(Center)를 사수하라</h3>
      <p>복식에서 가장 안전하고 효과적인 코스는 '센터'입니다. 두 사람 사이의 공간은 서로 미루다가 에러가 나기 쉽고, 앵글 샷의 각도를 줄여줍니다. 반대로 수비할 때도 센터를 먼저 막는 것이 우선입니다.</p>

      <h3>4. 진형의 변화 (I-Formation, Australian)</h3>
      <p>상대가 리턴을 너무 잘한다면 진형을 바꿔보세요. 서버와 전위가 일직선에 서는 I-포메이션이나, 전위가 서버와 같은 쪽에 서는 호주형 포메이션은 상대의 리턴 리듬을 완전히 깨뜨릴 수 있는 고급 전술입니다.</p>
    
          </div>
          <div className="mt-12">
             <FAQ items={faqs} />
          </div>
          <RelatedPosts 
            currentSlug="tennis-doubles-teamwork-strategy" 
            category="Strategy" 
            tags={["테니스","복식","팀워크","포칭","발리"]} 
          />
          <CTA />
        </div>
      </Article>
    </div>
  );
}
