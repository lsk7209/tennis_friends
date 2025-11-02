import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '카를로스 알카라즈 선수 프로필과 스토리',
  description: '스페인 출신 테니스 선수 카를로스 알카라즈의 성장 배경, 경기 스타일, 인간적 면모와 라이벌 이야기를 담았습니다.',
  keywords: ['테니스', '카를로스 알카라즈', '선수 프로필', '스토리', 'ATP'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/carlos-alcaraz',
  },
  openGraph: {
    title: '카를로스 알카라즈 선수 프로필과 스토리',
    description: '스페인 출신 테니스 선수 카를로스 알카라즈의 성장 배경, 경기 스타일, 인간적 면모와 라이벌 이야기를 담았습니다.',
    url: 'https://www.tennisfrens.com/blog/carlos-alcaraz',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '카를로스 알카라즈 선수 프로필과 스토리',
    description: '스페인 출신 테니스 선수 카를로스 알카라즈의 성장 배경, 경기 스타일, 인간적 면모와 라이벌 이야기를 담았습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-daily-accumulation', text: '성장 배경 — 일상에서 축적된 힘', depth: 2 },
  { id: 'playing-style-pressure-variation-smile', text: '경기 스타일 — 압박과 변주, 그리고 미소', depth: 2 },
  { id: 'experience-growth-surface-adaptation', text: '경험과 성장 — 표면을 가리지 않는 적응력', depth: 2 },
  { id: 'human-aspects-attitude-over-results', text: '인human적인 면모 — 결과보다 태도', depth: 2 },
  { id: 'nationality-culture-modern-interpretation', text: '국적과 문화 — 스페인 전통 위에 올린 현대적 해석', depth: 2 },
  { id: 'relationships-rivals-grow-together', text: '관계와 라이벌 — 함께 더 높이', depth: 2 },
  { id: 'famous-scenes-courage-of-choice', text: '명장면 — 선택의 용기', depth: 2 },
  { id: 'future-challenges-narrative-over-skill', text: '앞으로의 과제 — 기술보다 서사', depth: 2 },
];

const faqs = [
  {
    q: '카를로스 알카라즈의 주무기는 무엇인가요?',
    a: '그의 주무기는 공격적인 베이스라인 플레이와 빠른 코트 커버리지입니다. 강력한 스트로크와 탁월한 운동능력으로 상대를 압박합니다.'
  },
  {
    q: '알카라즈는 어떤 표면에서 가장 강한가요?',
    a: '모든 표면에서 강력한 모습을 보여주지만, 특히 클레이 코트에서 탁월한 스핀 컨트롤과 전진 플레이로 강점을 발휘합니다.'
  },
  {
    q: '알카라즈의 인간적인 면모는 어떤가요?',
    a: '겸손하고 감사하는 태도를 유지하며, 코트 안에서는 대담하고 코트 밖에서는 따뜻한 성격을 가지고 있습니다.'
  },
  {
    q: '알카라즈의 라이벌은 누구인가요?',
    a: '얀니크 시너와의 라이벌리가 대표적입니다. 서로의 장점을 인정하면서도 치열한 경쟁을 펼치고 있습니다.'
  },
  {
    q: '알카라즈의 미래 전망은 어떻게 되나요?',
    a: '기술적 완성도를 높이고 서사를 쌓는 과정에 있습니다. 이미 많은 기록을 세웠지만, 앞으로 더 큰 업적을 이룰 잠재력을 가지고 있습니다.'
  },
];

export default function CarlosAlcarazBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="카를로스 알카라즈 — '즐기는 재능'으로 시대를 앞당긴 젊은 왕"
        excerpt="공격적 베이스라인과 변주로 흐름을 장악하는 카를로스 알카라즈의 성장, 스타일, 인간미와 라이벌 이야기를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '카를로스 알카라즈', '선수 프로필', '스토리', 'ATP'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 6분 읽기</span>
            <span>•</span>
            <span>2025년 11월 1일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="carlos-alcaraz-young-king">카를로스 알카라즈 — '즐기는 재능'으로 시대를 앞당긴 젊은 왕</h1>

            <p><strong>직답:</strong> 카를로스 알카라즈는 스페인 무르시아 엘팔마에서 자란 선수로, 공격적인 베이스라인과 빠른 전환으로 흐름을 틀어쥐는 것이 강점입니다.</p>

            <h2 id="growth-background-daily-accumulation">성장 배경 — 일상에서 축적된 힘</h2>
            <p>그의 시작은 거창하지 않았습니다. 지역 클럽을 운영하던 아버지 곁에서 공을 주고받던 시간이 훈련의 대부분이었고, 스스로 코트를 정리하고 다음 날을 준비하는 루틴이 몸에 배었습니다. 성적을 위한 조급함보다 하루를 충실히 쌓는 태도가 우선이었고, 그 습관은 긴 랠리에서도 표정이 흐트러지지 않는 안정감으로 이어졌습니다. 청소년 시절에는 선배들의 경기를 복기하며 "왜 이 포인트에서 저 선택을 했는가"를 스스로 질문했고, 답을 찾으면 즉시 연습에 반영했습니다. 기술보다 태도, 재능보다 습관이 먼저라는 믿음이 그의 바탕을 만들었습니다.</p>

            <h2 id="playing-style-pressure-variation-smile">경기 스타일 — 압박과 변주, 그리고 미소</h2>
            <p>알카라즈의 경기는 '공격'과 '다양성'이 공존합니다. 베이스라인에서 먼저 압박을 걸되, 짧은 볼이 떨어지면 과감히 전진해 발리로 마무리합니다. 카운터 포핸드는 회전과 직선의 비율을 자유롭게 바꾸며, 백핸드는 각도를 열어 코트 폭을 최대한 사용합니다. 상대 리턴이 깊을수록 그는 드롭샷과 로브를 섞어 리듬을 깨뜨리고, 다음 볼에서 다시 강한 스트로크로 속도를 끌어올립니다. 무엇보다 인상적인 것은 위기에서도 나오는 미소입니다. 표정을 다잡는 그 몇 초가 다음 선택을 가볍게 만들고, 과감한 결정을 정당화합니다. 속도와 타이밍을 바꾸는 감각, 코트 전체를 보며 '여기서 한 번 비틀겠다'고 판단하는 상상력이 그를 특별하게 만듭니다.</p>

            <h2 id="experience-growth-surface-adaptation">경험과 성장 — 표면을 가리지 않는 적응력</h2>
            <p>하드, 클레이, 잔디 어디서든 자신만의 템포를 갖추려는 노력이 이어졌습니다. 클레이에서는 깊은 스핀과 수비 전환으로 랠리를 길게 가져가고, 하드에서는 퍼스트 서브 확률과 리턴 위치를 미세하게 조정해 초반 주도권을 챙깁니다. 잔디에서는 낮은 바운드에 맞춘 준비 자세와 슬라이스의 빈도를 높여 리듬을 단순화합니다. 표면마다 기술의 비율을 달리하지만 지향점은 같습니다. "상대가 내 계획에 동의하도록 만든다." 이 원칙 덕분에 그는 중요한 경기일수록 평소 루틴을 더 엄격하게 지키며, 컨디션이 완벽하지 않을 때에도 승부의 흐름을 늦추지 않습니다.</p>

            <h2 id="human-aspects-attitude-over-results">인간적인 면모 — 결과보다 태도</h2>
            <p>그의 인터뷰에서 반복되는 단어는 '감사'와 '즐거움'입니다. 연습이 지루해질 때면 처음 라켓을 잡던 날의 설렘을 떠올리고, 승리한 날에는 스태프와 가족을 먼저 찾습니다. 패배한 뒤에도 상대의 장점을 먼저 말하는 태도는 코트 밖의 신뢰로 돌아옵니다. 그는 "실수는 누구나 한다. 문제는 다음 공을 어떻게 대하느냐"라고 말하곤 합니다. 이 간단한 문장이야말로 그가 위기에서 표정을 잃지 않는 이유를 설명합니다.</p>

            <h2 id="nationality-culture-modern-interpretation">국적과 문화 — 스페인 전통 위에 올린 현대적 해석</h2>
            <p>스페인 테니스가 이어온 끈기와 회전의 전통은 그의 기반입니다. 여기에 빠른 판단과 전진 성향, 과감한 드롭샷이라는 현대적 해석을 더해 새로운 스타일을 만들었습니다. 감정을 숨기지 않되 상대를 존중하는 제스처를 잊지 않는 태도는 스페인 스포츠 문화의 따뜻함을 닮았습니다. 코트 밖에서는 겸손하고, 코트 안에서는 대담한 이 대비가 그의 서사를 풍성하게 합니다.</p>

            <h2 id="relationships-rivals-grow-together">관계와 라이벌 — 함께 더 높이</h2>
            <p>그와 동세대인 얀니크 시너와의 만남은 서로의 한계를 끌어올린 대표적 사례입니다. 서로의 강점을 인정하면서도 코트에 서면 한 포인트도 양보하지 않는 관계는 팬들에게 최고의 볼거리를 제공합니다. 한편, 선배 세대의 거물들과 마주할 때 그는 존중을 앞세우되 두려움은 보이지 않습니다. '그들이 만든 기준을 넘어서는 것이 내 역할'이라는 태도는 세대의 경계에서 자신만의 길을 열어가겠다는 선언처럼 들립니다.</p>

            <h2 id="famous-scenes-courage-of-choice">명장면 — 선택의 용기</h2>
            <p>기억에 남는 장면들의 공통점은 '결정의 순간'입니다. 디우스에서 맞는 두 번째 서브, 타이브레이크 초반의 첫 랠리, 브레이크 포인트를 내준 직후의 리턴 포인트. 그는 이런 국면에서 항상 코트를 넓게 보고, 가장 단순하면서도 상대가 예상하지 못한 해법을 고릅니다. 드롭샷으로 한 번 접고, 다음 볼에서 완력을 쏟는 식의 구성은 선택의 결과를 스스로 책임지겠다는 태도이자, 관중에게 '테니스는 재미있는 게임'임을 상기시키는 연출이기도 합니다.</p>

            <h2 id="future-challenges-narrative-over-skill">앞으로의 과제 — 기술보다 서사</h2>
            <p>알카라즈에게 남은 과제는 기록보다 '어떤 이야기로 기억될 것인가'에 가깝습니다. 어린 날의 성실함을 잃지 않은 채, 다양한 표면에서 자신의 테니스를 더 간결하게 다듬을 필요가 있습니다. 그는 이미 많은 것을 보여주었습니다. 이제는 중요한 순간마다 선택의 이유를 명료하게 증명하는 일만 남았습니다. 그 증명은 하나의 포인트, 하나의 표정, 하나의 루틴에서 시작될 것입니다.</p>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              📚 관련 자료
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">내부 링크</h4>
                <ul className="space-y-1 text-sm">
                  <li><Link href="/players" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🏆 선수 프로필</Link></li>
                  <li><Link href="/utility/ntrp-test" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🎯 실력 테스트</Link></li>
                  <li><Link href="/utility/play-style-test" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">🎾 플레이 스타일 테스트</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">외부 자료</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">ATP 투어 공식 사이트</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Carlos_Alcaraz" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <FAQ items={faqs} />

          {/* CTA */}
          <CTA />
        </div>
      </Article>
    </div>
  );
}
