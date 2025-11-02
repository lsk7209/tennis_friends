import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import CTA from '@/components/blog/CTA';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export const metadata = {
  title: '프란시스 티아포 선수 프로필과 스토리',
  description: '미국 하드에서 빛나는 에너지와 창의적 선택, 팀 퍼스트 태도로 사랑받는 프란시스 티아포의 성장 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
  keywords: ['테니스', '프란시스 티아포', '선수 프로필', '스토리', '미국'],
  alternates: {
    canonical: 'https://www.tennisfrens.com/players/frances-tiafoe',
  },
  openGraph: {
    title: '프란시스 티아포 선수 프로필과 스토리',
    description: '미국 하드에서 빛나는 에너지와 창의적 선택, 팀 퍼스트 태도로 사랑받는 프란시스 티아포의 성장 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
    url: 'https://www.tennisfrens.com/players/frances-tiafoe',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '프란시스 티아포 선수 프로필과 스토리',
    description: '미국 하드에서 빛나는 에너지와 창의적 선택, 팀 퍼스트 태도로 사랑받는 프란시스 티아포의 성장 배경과 플레이 철학, 라이벌 구도를 정리했습니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'growth-background-community-court-starting-momentum', text: '성장 배경 — 커뮤니티 코트에서 시작한 원동력', depth: 2 },
  { id: 'playing-style-speed-open-touch-close', text: '경기 스타일 — 속도로 벌리고, 터치로 닫는다', depth: 2 },
  { id: 'return-transition-first-shake-two-movements', text: '리턴과 전환 — 첫 흔들림을 만드는 두 동작', depth: 2 },
  { id: 'rhythm-selection-emotion-hot-procedure-cold', text: '리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게', depth: 2 },
  { id: 'surface-development-hard-straight-grass-concise-clay', text: '표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내', depth: 2 },
  { id: 'human-aspects-brightness-etiquette-team-first', text: '인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트', depth: 2 },
  { id: 'nationality-culture-us-hard-tradition-creativity-expand', text: '국적과 문화 — 미국 하드의 전통을 창의로 확장', depth: 2 },
  { id: 'relationships-rivals-question-speed-answer-angle', text: '관계와 라이벌 — 질문은 속도, 답은 각도', depth: 2 },
  { id: 'famous-scenes-drop-stop-straight-stab', text: '명장면 — 드롭으로 멈추고, 직선으로 찌른다', depth: 2 },
  { id: 'equipment-details-tension-balance-contact-sense', text: '장비와 디테일 — 텐션·밸런스·접점의 감각', depth: 2 },
  { id: 'future-challenges-second-serve-halfcourt-conclusion', text: '앞으로의 과제 — 세컨드 서브와 하프코트의 결말', depth: 2 },
  { id: 'fans-community-lasting-trust-way', text: '팬과 커뮤니티 — 오래 가는 신뢰의 방식', depth: 2 },
];

const faqs = [
  {
    q: '프란시스 티아포의 경기 스타일은 어떤가요?',
    a: '폭발적인 풋워크와 감각적인 터치, 변주를 두려워하지 않는 전진이 특징입니다. 속도로 공간을 만들고 터치로 문장을 닫으며, 드롭샷과 슬라이스로 템포를 흔든 뒤 바로 패싱으로 전환합니다.'
  },
  {
    q: '티아포의 성장 배경은 어떤가요?',
    a: '커뮤니티 코트에서 시작했습니다. 제한된 환경에서도 매일 코트를 지키며 벽치기·풋워크·코어 드릴을 빠뜨리지 않는 루틴을 만들었고, 동작을 줄이고 접점을 앞에 둔다는 한 문장을 속도로 번역했습니다.'
  },
  {
    q: '티아포의 강점은 무엇인가요?',
    a: '에너지와 창의가 최대 강점입니다. 폭발적인 스텝과 감각적인 터치로 흐름을 뒤집으며, 변주를 두려워하지 않는 전진으로 경기를 자신의 리듬으로 끌고 옵니다.'
  },
  {
    q: '티아포의 인간적인 면모는 어떤가요?',
    a: '밝음, 예의, 팀 퍼스트가 특징입니다. 인터뷰는 경쾌하지만 책임의 언어가 분명하며, 대표팀 이벤트에서 보여주는 에너지와 배려로 분위기 메이커이자 리더로 불립니다.'
  },
  {
    q: '티아포의 미래 전망은 어떻게 되나요?',
    a: '세컨드 서브 코스 다양화와 하프코트 마무리 일관성이 관건입니다. 리턴 직후 3구에서 전진 타이밍 반 박자 앞당김, 결말 선택지를 고정하면 긴 경기에서도 에너지 관리가 쉬워질 것입니다.'
  },
];

export default function FrancesTiafoeBlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-950 dark:via-gray-900 dark:to-purple-950">
      <Article
        title="프란시스 티아포 — 에너지와 창의로 코트를 달구다"
        excerpt="폭발적인 스텝과 감각적인 터치, 변주를 두려워하지 않는 전진으로 흐름을 뒤집는 프란시스 티아포의 성장, 스타일, 인간적인 면모와 과제를 한 편으로."
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {['테니스', '프란시스 티아포', '선수 프로필', '스토리', '미국'].map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Reading Time & Date */}
          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <span>📖 8분 읽기</span>
            <span>•</span>
            <span>2025년 10월 12일</span>
          </div>

          {/* Table of Contents */}
          <TOC items={tocItems} />

          {/* Article Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h1 id="frances-tiafoe-energy-creativity-heat-court">프란시스 티아포 — 에너지와 창의로 코트를 달구다</h1>

            <p><strong>직답:</strong> 프란시스 티아포(Frances Tiafoe)는 폭발적인 풋워크와 감각적인 터치, 변주를 두려워하지 않는 전진으로 흐름을 흔들어 경기를 자신의 리듬으로 끌고 오는 미국의 간판입니다.</p>

            <h2 id="growth-background-community-court-starting-momentum">성장 배경 — 커뮤니티 코트에서 시작한 원동력</h2>
            <p>그의 테니스는 화려함보다 성실함에서 출발했습니다. 제한된 환경에서도 매일 코트를 지키며, 벽치기·풋워크·코어 드릴을 빠뜨리지 않는 루틴을 만들었습니다. 코치는 "동작을 줄이고 접점을 앞에 둔다"는 한 문장을 반복했고, 티아포는 이 문장을 속도로 번역했습니다. 기록장에는 화려한 수치 대신 "오늘의 수정 한 줄"이 남고, 그 메모가 다음 훈련의 우선순위가 되었습니다.</p>

            <h2 id="playing-style-speed-open-touch-close">경기 스타일 — 속도로 벌리고, 터치로 닫는다</h2>
            <p>티아포의 포핸드는 준비가 짧고 임팩트가 빠릅니다. 라인을 과하게 노리지 않으면서도 직선에 가까운 구질로 깊이를 확보하고, 백핸드는 양손의 안정감으로 네트를 넉넉히 넘겨 점유율을 쌓습니다. 짧은 볼이 보이면 하프코트에서 한 걸음 전진해 발리·하프발리로 결말을 앞당기고, 드롭샷과 슬라이스로 템포를 흔든 뒤 바로 패싱으로 전환합니다. 요약하면 속도로 공간을 만들고, 터치로 문장을 닫는 테니스입니다.</p>

            <h2 id="return-transition-first-shake-two-movements">리턴과 전환 — 첫 흔들림을 만드는 두 동작</h2>
            <p>리턴에서는 한 발 앞선 스타트로 바운드 높이를 낮추고, 세컨드 서브엔 과감히 전진해 상대의 퍼스트볼을 끊습니다. 수비 국면에 몰리면 낮게 깔린 슬라이스로 타점을 내린 뒤, 다음 샷에서 크로스를 직선으로 접어 카운터를 꽂습니다. 네트 점유는 무리하지 않되, 빈 공간이 열리면 주저하지 않는 결단이 특징입니다.</p>

            <h2 id="rhythm-selection-emotion-hot-procedure-cold">리듬과 선택 — 감정은 뜨겁게, 절차는 차갑게</h2>
            <p>포인트 사이 티아포는 라켓 스트링을 훑고 두 번의 깊은 호흡으로 루틴을 고정합니다. 스코어가 밀려도 동작의 길이를 바꾸지 않아 심박이 급히 치솟지 않습니다. 타이브레이크 초반엔 높이·길이를 먼저 확인하고, 3~4포인트 구간에서 라인을 얇게 쓰며 승부수를 던집니다. 위험을 회피하지 않되, 이유 없는 도박은 하지 않는 태도가 장기전에서 힘을 냅니다.</p>

            <h2 id="surface-development-hard-straight-grass-concise-clay">표면별 전개 — 하드의 직선, 잔디의 간결, 점토의 인내</h2>
            <p>하드에서는 퍼스트 서브 확률과 3구 패턴의 속도로 주도권을 잡습니다. 잔디에선 토스를 낮추고 백스윙을 더 줄여 타점을 앞에 고정, 슬라이스 리턴을 섞어 초반 속도를 통제합니다. 점토에서는 회전을 늘려 낙구를 안정시키고, 길어진 랠리 중간에 드롭으로 템포 차를 만들며 전진 발리로 결말을 재촉합니다. 표면이 달라져도 원칙은 같습니다. 흐름을 먼저 안정시키고, 열린 틈에서만 칼을 뽑습니다.</p>

            <h2 id="human-aspects-brightness-etiquette-team-first">인간적인 면모 — 밝음, 예의, 그리고 팀 퍼스트</h2>
            <p>티아포의 인터뷰는 경쾌하지만 책임의 언어가 분명합니다. 이긴 날은 준비가 맞았다고, 진 날은 수정이 필요하다고 담담히 말합니다. 팬에게 미소와 눈맞춤을, 경기장 스태프에게는 짧은 감사를 잊지 않습니다. 대표팀 이벤트에서 보여주는 에너지와 배려는 왜 그가 '분위기 메이커이자 리더'로 불리는지 설명합니다.</p>

            <h2 id="nationality-culture-us-hard-tradition-creativity-expand">국적과 문화 — 미국 하드의 전통을 창의로 확장</h2>
            <p>강서브·퍼스트볼 중심의 미국식 문법을, 티아포는 속도와 터치의 균형으로 확장합니다. 첫 두 타구에서 공간을 벌리고, 세 번째에서 결말을 재촉하되, 필요할 때는 드롭과 슬라이스로 리듬을 비틀어 예측을 지연시킵니다. 전통에 창의를 얹는 이 감각이 그의 정체성을 선명하게 만듭니다.</p>

            <h2 id="relationships-rivals-question-speed-answer-angle">관계와 라이벌 — 질문은 속도, 답은 각도</h2>
            <p>동시대 강자들과의 승부에서 그는 속도로 질문을 던지고, 상대의 반응에서 각을 읽습니다. 네트를 서두르는 유형에겐 낮은 통과샷과 깊은 로브를 번갈아 보여 첫 시도를 주저하게 만들고, 강한 리턴러에겐 바디 서브 비중을 높여 스텝을 묶습니다. 같은 패턴이 두 번 허용되면 세 번째에는 타점과 스윙 길이를 바꿔 같은 구역을 다른 느낌으로 찌릅니다.</p>

            <h2 id="famous-scenes-drop-stop-straight-stab">명장면 — 드롭으로 멈추고, 직선으로 찌른다</h2>
            <p>브레이크 포인트. 중앙 깊은 볼로 상대 스텝을 뒤로 밀어낸 뒤, 티아포는 짧은 드롭으로 템포를 끊습니다. 전진하는 상대의 균형이 무너지는 순간, 그는 한 발 안으로 파고들어 포핸드 직선을 꽂습니다. 관중의 환호가 커져도 그의 루틴은 그대로입니다. 감정의 폭발 뒤에도 절차는 흔들리지 않는다는 믿음이 응축된 장면입니다.</p>

            <h2 id="equipment-details-tension-balance-contact-sense">장비와 디테일 — 텐션·밸런스·접점의 감각</h2>
            <p>그는 라켓 밸런스를 과하게 머리쪽으로 보내지 않아 스윙 회복이 빠르고, 스트링 텐션은 기온과 공의 반발에 맞춰 소폭 조정합니다. 더운 날엔 텐션을 올려 반발을 제어하고, 실내에서는 텐션을 낮춰 체공 시간을 확보합니다. 신발은 측면 지지와 접지의 균형을 중시해 급가속·급정지에서도 발목의 흔들림을 줄입니다. 장비가 플레이를 지배하도록 두지 않고, 플레이가 요구하는 만큼만 바꾸는 철학이 일관됩니다.</p>

            <h2 id="future-challenges-second-serve-halfcourt-conclusion">앞으로의 과제 — 세컨드 서브와 하프코트의 결말</h2>
            <p>그가 한 단계 더 도약하려면 세컨드 서브 코스의 다양화와 하프코트 마무리의 일관성이 필요합니다. 리턴 직후 3구에서 전진 타이밍을 반 박자 앞당기고, 결말의 선택지를 한두 개로 고정한다면 긴 경기에서도 에너지 관리가 쉬워질 것입니다. 이미 갖춘 속도와 창의 위에 실수의 폭을 좁히는 기술이 얹히면, 그의 이름은 큰 무대의 마지막 장면에서 더 자주 호명될 가능성이 큽니다.</p>

            <h2 id="fans-community-lasting-trust-way">팬과 커뮤니티 — 오래 가는 신뢰의 방식</h2>
            <p>티아포를 오래 응원하게 만드는 힘은 태도의 일관성입니다. 이기는 날에도 감사의 순서를 지키고, 지는 날에도 책임을 먼저 말합니다. 작은 제스처와 정확한 선택이 모여 한 사람의 초상이 완성됩니다. 기록은 표가 되지만, 태도는 기억이 됩니다. 그래서 그의 테니스는 결과를 넘어 이야기로 남습니다.</p>
          </div>

          {/* Related Links */}
          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">
              📚 관련 자료
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">내부 링크</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/players" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🏆 선수 프로필</Link></li>
                  <li><Link href="/utility/ntrp-test" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🎯 실력 테스트</Link></li>
                  <li><Link href="/utility/play-style-test" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">🎾 플레이 스타일 테스트</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">외부 자료</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://www.atptour.com/" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">ATP 투어 공식 사이트</a></li>
                  <li><a href="https://en.wikipedia.org/wiki/Frances_Tiafoe" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 dark:text-blue-200 dark:hover:text-blue-100 font-medium underline underline-offset-2">위키피디아 프로필</a></li>
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