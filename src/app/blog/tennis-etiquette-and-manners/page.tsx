import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export const metadata = {
  title: '테니스 코트 예절과 매너 — 진짜 실력자는 태도에서 드러난다 | 경기력보다 중요한 스포츠맨십의 기술',
  description: '테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.',
  keywords: ['테니스 예절', '테니스 매너', '스포츠맨십', '코트 예절', '테니스 태도', '클럽 문화'],
  alternates: {
    canonical: 'https://tennisfriends.co.kr/blog/tennis-etiquette-and-manners',
  },
  openGraph: {
    title: '테니스 코트 예절과 매너 — 진짜 실력자는 태도에서 드러난다 | 경기력보다 중요한 스포츠맨십의 기술',
    description: '테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.',
    url: 'https://tennisfriends.co.kr/blog/tennis-etiquette-and-manners',
    siteName: 'TennisFriends',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '테니스 코트 예절과 매너 — 진짜 실력자는 태도에서 드러난다 | 경기력보다 중요한 스포츠맨십의 기술',
    description: '테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const tocItems: Array<{ id: string; text: string; depth: 2 | 3 }> = [
  { id: 'before-match', text: '1. 경기 전 — 인사는 기본, 준비는 예의', depth: 2 },
  { id: 'during-match', text: '2. 경기 중 — 감정은 숨기고, 리듬은 유지하라', depth: 2 },
  { id: 'doubles-match', text: '3. 복식 경기 — 팀워크는 매너의 또 다른 이름', depth: 2 },
  { id: 'line-calls', text: '4. 라인콜(Line Call) — 공정보다 \'명확함\'', depth: 2 },
  { id: 'geo-club-culture', text: '5. GEO별 클럽 문화 이해하기', depth: 2 },
  { id: 'after-match', text: '6. 경기 후 — 끝이 진짜 매너다', depth: 2 },
  { id: 'club-relationships', text: '7. 클럽 내 관계 매너 — 인간관계가 경기력이다', depth: 2 },
  { id: 'conclusion-etiquette-manners', text: '결론 — 실력은 기술로, 품격은 태도로 증명된다', depth: 2 },
];

const faqs = [
  {
    q: '상대가 라인콜을 잘못했을 때 어떻게 하나요?',
    a: '논쟁하지 말고 \'괜찮아요\'로 넘기세요. 감정적 대응은 리듬을 깨뜨립니다.'
  },
  {
    q: '복식 경기 중 파트너가 계속 실수합니다.',
    a: '한숨보다 격려가 필요합니다. \'괜찮아, 다음 공 잡자\' 한마디가 분위기를 바꿉니다.'
  },
  {
    q: '경기 후 인사는 꼭 해야 하나요?',
    a: '네. 경기 후 인사는 상대뿐 아니라 자신에게 하는 \'마무리 의식\'입니다.'
  },
  {
    q: '코트 정리는 누가 하나요?',
    a: '사용한 사람이 합니다. 볼, 의자, 물병을 원래 자리로 돌려놓는 것이 기본 예절입니다.'
  },
  {
    q: '지역별 클럽 매너가 다른가요?',
    a: '그렇습니다. 서울은 질서, 부산은 친화, 제주엔 배려 중심 문화가 뚜렷합니다.'
  }
];

export default function TennisEtiquetteAndMannersPage() {
  const title = '테니스 코트 예절과 매너 — 진짜 실력자는 태도에서 드러난다 | 경기력보다 중요한 스포츠맨십의 기술';
  const excerpt = '테니스의 품격은 스윙보다 태도에서 드러난다. 매너 있는 플레이가 실력을 완성한다.';

  return (
    <Article slug="tennis-etiquette-and-manners" date="2024-01-01" title={title} excerpt={excerpt}>
      <div className="bg-gradient-to-r from-neutral-50 to-stone-50 dark:from-neutral-950 dark:to-stone-950 p-6 rounded-lg mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Badge className="bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
            스포츠맨십
          </Badge>
          <Badge className="bg-stone-100 text-stone-800 dark:bg-stone-900 dark:text-stone-300">
            코트 예절
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          테니스는 '신사의 스포츠'라고 불립니다. 하지만 이 말은 단순히 복장 때문이 아닙니다. 테니스는 경기력 이전에 '태도'가 실력을 완성하는 종목입니다. 라켓을 잘 휘두르는 사람보다 코트를 존중하는 사람이 진짜 플레이어입니다.
        </p>
      </div>

      <TOC items={tocItems} />

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-etiquette-guide/789456/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 예절 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/tennis-etiquette.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 예절 가이드</a></li>
        </ul>
      </div>

      <section id="before-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-blue-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
          경기 전 — 인사는 기본, 준비는 예의
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스의 첫 매너는 <strong>'준비'와 '인사'</strong>입니다. 코트에 들어설 때는 상대와 파트너에게 눈을 마주치며 인사하세요. 단순한 예절 같지만, 이 3초의 인사가 경기의 분위기를 결정합니다.
        </p>

        <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">경기 전 체크리스트:</h3>
          <ul className="text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 볼과 장비는 사전에 준비 (상대에게 빌리지 않기)</li>
            <li>• 코트 입장 전 신발 먼지 제거</li>
            <li>• 파트너와 전략 간단 공유</li>
          </ul>
        </div>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-200 text-sm">
            <strong>💡 팁:</strong> "좋은 경기합시다!" 한마디가 최고의 워밍업입니다.
          </p>
        </div>
      </section>

      <section id="during-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-green-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
          경기 중 — 감정은 숨기고, 리듬은 유지하라
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          테니스는 멘탈 스포츠입니다. 실수나 오심에 감정을 드러내면 상대뿐 아니라 자신도 흔들립니다.
        </p>

        <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">지켜야 할 매너:</h3>
          <ul className="text-green-700 dark:text-green-300 space-y-1">
            <li>• 상대 실수 시 박수나 리액션 금지 (표정도 매너)</li>
            <li>• 라켓 던지기, 볼 차기, 코트 내 고함 금지</li>
            <li>• 상대 서브 준비 중 움직임 자제</li>
          </ul>
        </div>

        <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-yellow-800 dark:text-yellow-200 text-sm">
            <strong>프로 선수의 공통점:</strong> 실수를 해도 표정이 일정합니다. '감정 제로'가 곧 '존중의 언어'입니다.
          </p>
        </div>
      </section>

      <section id="doubles-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-purple-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
          복식 경기 — 팀워크는 매너의 또 다른 이름
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          복식에서는 상대보다 <strong>파트너에게 먼저 예의</strong>를 지켜야 합니다.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">상황</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">잘못된 행동</th>
                <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">올바른 매너</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">파트너 실수</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">한숨, 고개 돌림</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">"괜찮아" 한마디로 정리</td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-800">
                <td className="border border-gray-300 dark:border-gray-600 p-3">포인트 후</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">침묵</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">짧은 하이파이브 or 손 터치</td>
              </tr>
              <tr>
                <td className="border border-gray-300 dark:border-gray-600 p-3">상대 실수</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">웃음</td>
                <td className="border border-gray-300 dark:border-gray-600 p-3">무표정 유지 or "노프라블럼" 언급</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 TIP:</strong> 복식은 팀이 하나의 호흡으로 움직이는 경기입니다. '함께 리듬을 만드는 태도'가 결국 경기력을 높입니다.
          </p>
        </div>
      </section>

      <section id="line-calls" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-indigo-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">4</span>
          라인콜(Line Call) — 공정보다 '명확함'
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          라인콜은 테니스 매너의 핵심입니다.
        </p>

        <div className="bg-indigo-50 dark:bg-indigo-950 p-4 rounded-lg border-l-4 border-indigo-500">
          <h3 className="font-bold text-indigo-800 dark:text-indigo-200 mb-3">기준:</h3>
          <ul className="text-indigo-700 dark:text-indigo-300 space-y-1">
            <li>• 자신 코트에 떨어진 공만 판정 가능.</li>
            <li>• 애매할 땐 '인(in)'으로 인정.</li>
            <li>• 상대의 판정에 이견이 있어도 '이의 없이 진행'이 기본.</li>
          </ul>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>기억하세요:</strong> '이긴 포인트'보다 '깨끗한 포인트'가 더 오래 기억됩니다.
          </p>
        </div>
      </section>

      <section id="geo-club-culture" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-cyan-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">5</span>
          GEO별 클럽 문화 이해하기
        </h2>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">서울·경기:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">정시·질서 중심 → 코트 시간 철저히 지키기.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">부산:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">친화적 분위기 → 인사·대화 매너 강조.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">대구:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">경기 집중형 → 시끄러운 응원 자제.</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">제주:</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">관광객 혼합 → 초보자 배려 문화 중요.</p>
          </div>
        </div>

        <div className="bg-cyan-50 dark:bg-cyan-950 p-4 rounded-lg border-l-4 border-cyan-500">
          <p className="text-cyan-800 dark:text-cyan-200 text-sm">
            <strong>📍 GEO 팁:</strong> 지역마다 클럽 분위기와 예절의 결이 다릅니다. GEO 감각을 익히면 낯선 코트에서도 자연스럽게 어울릴 수 있습니다.
          </p>
        </div>
      </section>

      <section id="after-match" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-pink-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">6</span>
          경기 후 — 끝이 진짜 매너다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          경기가 끝났다고 매너도 끝나는 건 아닙니다.
        </p>

        <div className="bg-pink-50 dark:bg-pink-950 p-4 rounded-lg border-l-4 border-pink-500">
          <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">기본 예절:</h3>
          <ul className="text-pink-700 dark:text-pink-300 space-y-1">
            <li>• 상대와 심판에게 감사 인사 ("수고하셨습니다." "좋은 경기였습니다.")</li>
            <li>• 볼 정리 후 코트 청소, 의자·물병 원위치</li>
            <li>• 라켓 덮개 씌워서 퇴장</li>
          </ul>
        </div>

        <div className="bg-purple-50 dark:bg-purple-950 p-4 rounded-lg border-l-4 border-purple-500">
          <p className="text-purple-800 dark:text-purple-200 text-sm">
            <strong>💡 팁:</strong> 코트를 나설 때 등 돌리지 말고 살짝 고개 숙여 인사하면 인상에 남습니다.
          </p>
        </div>
      </section>

      <section id="club-relationships" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-teal-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">7</span>
          클럽 내 관계 매너 — 인간관계가 경기력이다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          클럽 활동에서의 태도는 경기보다 중요합니다.
        </p>

        <div className="bg-teal-50 dark:bg-teal-950 p-4 rounded-lg border-l-4 border-teal-500">
          <h3 className="font-bold text-teal-800 dark:text-teal-200 mb-3">지켜야 할 기본 원칙:</h3>
          <ul className="text-teal-700 dark:text-teal-300 space-y-1">
            <li>• 초보자에게 친절하게 설명 (비판 금지)</li>
            <li>• 파트너 선택은 실력보다 '호흡' 중심으로</li>
            <li>• 경기 중 실수는 경기 후에 조언</li>
          </ul>
        </div>

        <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border-l-4 border-orange-500">
          <p className="text-orange-800 dark:text-orange-200 text-sm">
            <strong>핵심 문장:</strong> "말은 적게, 존중은 깊게." 이것이 코트 위 품격입니다.
          </p>
        </div>
      </section>

      <section id="conclusion-etiquette-manners" className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span className="bg-red-500 text-white rounded-lg w-8 h-8 flex items-center justify-center text-sm font-bold">8</span>
          결론 — 실력은 기술로, 품격은 태도로 증명된다
        </h2>

        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
          진짜 테니스 플레이어는 점수로 평가받지 않습니다. 라켓을 쥔 손보다 마음의 무게가 더 중요합니다. 코트를 존중하고, 상대를 존중하며, 경기의 흐름을 깨지 않는 태도 — 그것이 바로 '테니스다운 테니스'입니다.
        </p>
      </section>

      
      {/* FAQ Section */}
      <FAQ items={faqs} />

      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-8">
        <h3 className="font-bold text-gray-900 dark:text-white mb-3">관련 글 더보기</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/blog/tennis-mental-focus-recovery">
            <Card className="bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 hover:border-blue-400 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  태도와 멘탈
                </Badge>
                <h4 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  테니스 경기 중 멘탈 붕괴 방지법 — 실수 후 3초 회복 루틴의 힘
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스의 승패는 멘탈이 결정한다. 실수 후 3초, 그 짧은 루틴이 경기 전체의 흐름을 바꾼다.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </Article>
  );
}
