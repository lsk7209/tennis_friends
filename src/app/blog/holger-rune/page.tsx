import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '홀게르 루네 선수 프로필과 스토리',
  description: '덴마크 출신 홀게르 루네의 성장 배경, 공격적 리턴과 변주, 감정·리듬 관리, 라이벌 구도와 앞으로의 과제를 깊이 있게 다룹니다.',
  keywords: ['테니스', '홀게르 루네', '선수 프로필', '스토리', '덴마크'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/blog/holger-rune',
  },
  openGraph: {
    title: '홀게르 루네 선수 프로필과 스토리',
    description: '덴마크 출신 홀게르 루네의 성장 배경, 공격적 리턴과 변주, 감정·리듬 관리, 라이벌 구도와 앞으로의 과제를 깊이 있게 다룹니다.',
    url: 'https://www.tennisfrens.com/blog/holger-rune',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '홀게르 루네 선수 프로필과 스토리',
    description: '덴마크 출신 홀게르 루네의 성장 배경, 공격적 리턴과 변주, 감정·리듬 관리, 라이벌 구도와 앞으로의 과제를 깊이 있게 다룹니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-indoor-court-density', text: '성장 배경 — 북유럽의 실내 코트가 만든 밀도', depth: 2 },
  { id: 'playing-style-return-start-variation-finish', text: '경기 스타일 — 리턴으로 시작해 변주로 마무리', depth: 2 },
  { id: 'rhythm-emotion-handle-heat-technique', text: '리듬과 감정 — 뜨거움을 다루는 기술', depth: 2 },
  { id: 'experience-transition-indoor-hard-clay-grass', text: '경험과 전환 — 실내 하드의 속도, 점토의 인내, 잔디의 간결함', depth: 2 },
  { id: 'human-aspects-honesty-tenacity-made-image', text: '인간적인 면모 — 솔직함과 집요함이 만든 이미지', depth: 2 },
  { id: 'nationality-culture-calmness-above-boldness', text: '국적과 문화 — 차분함 위의 대담함', depth: 2 },
  { id: 'relationships-rivals-same-generation-different', text: '관계와 라이벌 — 같은 세대, 다른 문장', depth: 2 },
  { id: 'famous-scenes-down-line-opens-window', text: '명장면 — 다운더라인이 열어젖히는 창', depth: 2 },
  { id: 'equipment-details-tension-contact-adjustment', text: '장비와 디테일 — 텐션과 접점의 미세 조정', depth: 2 },
  { id: 'future-challenges-mistake-range-narrowing', text: '앞으로의 과제 — 실수의 폭을 좁히는 결말의 기술', depth: 2 },
  { id: 'fans-community-lasting-honesty', text: '팬과 커뮤니티 — 오래 남는 솔직함', depth: 2 },
];

const faqs = [
  {
    q: '홀게르 루네의 경기 스타일은 어떤가요?',
    a: '예측 불가한 변주와 공격적인 리턴, 순간 가속이 특징입니다. 리턴으로 시작해 변주로 마무리하며, 공격적인 리턴과 드롭샷, 하프코트 진입으로 흐름을 뒤틀어 큰 무대에서 존재감을 증명합니다.'
  },
  {
    q: '루네의 성장 배경은 어떤가요?',
    a: '북유럽의 긴 겨울과 실내 코트의 규칙 속에서 시작했습니다. 반복과 기록을 중시했고, 하루 훈련을 기술·전술·멘탈로 나누어 체크리스트를 채웠습니다. 표면이 달라져도 자신이 통제할 수 있는 요소에 집중하는 습관을 만들었습니다.'
  },
  {
    q: '루네의 강점은 무엇인가요?',
    a: '불꽃과 계산 사이의 대담함이 최대 강점입니다. 공격적인 리턴과 예측 불가한 변주로 흐름을 흔들며, 백핸드 다운더라인은 결정적 순간마다 칼처럼 들어갑니다. 순간 가속으로 경기를 역전시킬 수 있는 능력이 뛰어납니다.'
  },
  {
    q: '루네의 인간적인 면모는 어떤가요?',
    a: '솔직함과 집요함이 특징입니다. 인터뷰는 직선적이며, 잘된 날엔 준비가 맞았다고 말하고, 부족한 날엔 수정 항목을 또박또박 적습니다. 공격적인 성향과 책임의 언어가 동시에 보이는 지점이 그의 색깔을 선명하게 합니다.'
  },
  {
    q: '루네의 미래 전망은 어떻게 되나요?',
    a: '실수의 폭을 좁히는 결말의 기술이 과제입니다. 세컨드 서브 코스 다양화, 리턴 직후 3구에서의 전진 타이밍 개선, 하프코트 마무리 선택지를 고정하면 긴 경기에서 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function HolgerRuneBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="홀게르 루네 — 불꽃과 계산 사이의 대담함"
        excerpt="공격적인 리턴과 예측 불가한 변주로 흐름을 흔드는 홀게르 루네의 성장, 스타일, 인간적인 면모와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '홀게르 루네', '선수 프로필', '스토리', '덴마크'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 8월 11일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="holger-rune-fire-calculated-boldness">홀게르 루네 — 불꽃과 계산 사이의 대담함</h1>

            <p><strong>직답:</strong> 홀게르 루네(Holger Rune)는 예측 불가한 변주와 공격적인 리턴, 순간 가속으로 흐름을 뒤틀며 큰 무대에서 존재감을 증명해 온 덴마크의 간판 선수다.</p>

            <h2 id="growth-background-indoor-court-density">성장 배경 — 북유럽의 실내 코트가 만든 밀도</h2>
            <p>루네의 어린 시절은 긴 겨울과 실내 코트의 규칙에서 시작됐다. 코칭팀은 반복과 기록을 중시했고, 하루 훈련을 '기술·전술·멘탈' 세 칸으로 나누어 체크리스트를 채웠다. 실내의 균일한 바운드에서 그는 타점의 오차를 줄이고, 라켓면 각도를 미세하게 바꾸는 감각을 익혔다. 야외로 나가 바람과 온도 차가 커지면, 루네는 스윙의 크기를 줄여 타점을 앞에 두는 방식으로 적응했다. 이 경험은 표면이 달라져도 자신이 통제할 수 있는 요소에 집중하는 습관을 만들었다. 승부가 흔들릴 때일수록 그는 기록으로 돌아가 수정 항목을 한 줄로 요약했다. "토스 낮춤, 리듬 간결."</p>

            <h2 id="playing-style-return-start-variation-finish">경기 스타일 — 리턴으로 시작해 변주로 마무리</h2>
            <p>루네의 경기는 리턴에서 공격이 시작된다. 상대 서브의 궤적을 빠르게 읽어 전진 리턴을 시도하고, 첫 스트로크에서 코스를 과감히 좁힌다. 백핸드 다운더라인은 결정적 순간마다 칼처럼 들어가고, 포핸드는 스핀과 플랫을 섞어 네트를 넉넉히 넘기면서도 깊이를 확보한다. 짧은 볼이 보이면 하프코트 진입을 주저하지 않고, 네트 앞에서 한 박자 빠른 발리로 결말을 앞당긴다. 드롭샷은 단순한 장식이 아니다. 템포를 끊고 리듬을 다시 잡아오는 '전략적 쉼표'로 사용된다. 그래서 루네의 랠리는 길게 간 듯하다가도 갑자기 방향이 꺾이며, 상대는 같은 구역을 서로 다른 속도로 방어해야 한다.</p>

            <h2 id="rhythm-emotion-handle-heat-technique">리듬과 감정 — 뜨거움을 다루는 기술</h2>
            <p>초창기에는 감정의 진폭이 실수로 이어지는 장면이 적지 않았지만, 최근의 루네는 포인트 사이 루틴으로 파고를 낮춘다. 라켓 스트링을 한 번 훑고 두 번의 깊은 호흡을 고정한 뒤, 베이스라인을 일정한 속도로 밟는다. 스코어가 불리할 때도 루틴의 길이를 바꾸지 않아 심박이 갑자기 치솟지 않는다. 타이브레이크 초반에는 높이·길이를 확인하는 안전한 구질을 선택하고, 세 번째 포인트부터 코스를 얇게 써 균형을 흔든다. 뜨거움은 사라지지 않았지만, 이제는 방향을 가지고 폭발한다.</p>

            <h2 id="experience-transition-indoor-hard-clay-grass">경험과 전환 — 실내 하드의 속도, 점토의 인내, 잔디의 간결함</h2>
            <p>실내 하드에서는 첫 두 타구의 속도를 끌어올려 상대 시간을 빼앗는다. 리턴 포지션을 반 발 앞당기고, 3구 패턴을 단순화해 실수를 줄인다. 점토에서는 회전을 늘려 낙구를 안정시키고, 네 번째나 다섯 번째 스트로크에서 드롭과 슬라이스를 섞어 템포를 뒤틀며 길어진 랠리를 자신에게 유리한 국면으로 끌고 온다. 잔디에서는 낮은 자세와 짧은 백스윙으로 타점을 앞에 고정하고, 슬라이스 리턴을 섞어 초반 속도를 조절한다. 표면이 달라져도 원칙은 같다. 흐름을 먼저 안정시키고, 열린 순간에만 칼을 꺼낸다.</p>

            <h2 id="human-aspects-honesty-tenacity-made-image">인간적인 면모 — 솔직함과 집요함이 만든 이미지</h2>
            <p>루네의 인터뷰는 직선적이다. 잘된 날엔 준비가 맞았다고 말하고, 부족한 날엔 수정 항목을 또박또박 적는다. 팀과의 대화에서도 근거를 먼저 찾고, 계획을 생활의 규칙으로 만든다. 팬과의 소통에서는 직설 속의 유머가 드러나며, 경기장 스태프를 향한 짧은 인사도 빠지지 않는다. 논란을 부르는 장면이 있을 때에도 그는 해명과 수정을 동시에 가져가려 한다. 공격적인 성향과 책임의 언어가 동시에 보이는 지점이 그의 색깔을 선명하게 한다.</p>

            <h2 id="nationality-culture-calmness-above-boldness">국적과 문화 — 차분함 위의 대담함</h2>
            <p>덴마크 스포츠 문화는 절제와 효율을 강조한다. 루네는 이 바탕 위에 대담함을 얹는다. 큰 제스처보다 정확한 실행, 장식보다 결론을 중시하지만, 찬스가 열리면 주저 없이 각을 좁힌다. 관중의 소음이나 상대의 과열된 퍼포먼스에도 루틴을 유지하며, 국기를 달고 코트에 들어설 때는 개인의 승부를 넘어 대표 선수로서의 품격을 잊지 않으려 한다.</p>

            <h2 id="relationships-rivals-same-generation-different">관계와 라이벌 — 같은 세대, 다른 문장</h2>
            <p>동세대 강자들과의 승부에서 루네는 질문과 답의 교환을 즐긴다. 강한 톱스핀으로 밀어붙이는 상대에게는 라켓면을 더 닫아 플랫에 가깝게 맞서고, 네트 대시를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만든다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 속도를 바꿔 같은 구역을 다른 느낌으로 찌른다. 이 미세 조정이 후반으로 갈수록 큰 차이를 만든다. 라이벌의 강점을 인정하되, 그 강점이 통하는 구간을 줄여 가는 과정이 곧 그의 전술 노트다.</p>

            <h2 id="famous-scenes-down-line-opens-window">명장면 — 다운더라인이 열어젖히는 창</h2>
            <p>브레이크 포인트, 긴 랠리 끝에 코트 중앙이 잠시 비는 순간. 루네는 백핸드를 몸 가까이 끌어당긴 뒤 라인으로 단호하게 접는다. 공이 흰 선을 스치며 빠져나가면 관중의 숨이 멎는다. 그는 표정을 바꾸지 않은 채 네트를 향해 두 걸음 더 들어간다. 준비와 결단, 그리고 설명 가능한 과감함이 한 장면에 응축된다.</p>

            <h2 id="equipment-details-tension-contact-adjustment">장비와 디테일 — 텐션과 접점의 미세 조정</h2>
            <p>루네는 라켓 텐션을 대회장 기온과 공의 반발에 맞춰 소폭 조정한다. 컨디션이 무거운 날엔 텐션을 낮춰 체공 시간을 확보하고, 상대 스피드가 빠른 실내에서는 텐션을 올려 접점의 흔들림을 줄인다. 신발은 측면 지지력을 중시해 급가속·급정지에서도 발목의 흔들림을 최소화한다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 장비를 조정한다는 철학이 일관된다.</p>

            <h2 id="future-challenges-mistake-range-narrowing">앞으로의 과제 — 실수의 폭을 좁히는 결말의 기술</h2>
            <p>루네가 더 높이 도약하기 위한 열쇠는 불필요한 위험을 덜어내는 결말의 간결함이다. 세컨드 서브의 코스 다양화, 리턴 직후 3구에서의 전진 타이밍 개선, 하프코트 마무리의 선택지를 한두 개로 고정한다면, 긴 경기에서 에너지 관리가 쉬워질 것이다. 이미 갖춘 공격성과 대담함 위에 '실수의 폭을 좁히는 기술'이 더해질 때, 그의 이름은 큰 무대의 마지막 장면에 더 자주 자리할 가능성이 크다.</p>

            <h2 id="fans-community-lasting-honesty">팬과 커뮤니티 — 오래 남는 솔직함</h2>
            <p>그를 오래 응원하게 만드는 것은 직설과 노력의 결합이다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말한다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상을 만든다. 기록은 표가 되지만, 태도는 기억이 된다. 루네의 테니스가 오래 사랑받을 이유가 바로 여기에 있다.</p>
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
                  <li><a href="https://en.wikipedia.org/wiki/Holger_Rune" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200">위키피디아 프로필</a></li>
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