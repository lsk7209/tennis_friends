import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function TennisEquipmentGuidePage() {
  const title = "테니스 장비 가이드: 올바른 장비 선택의 모든 것";
  const excerpt = "테니스 장비 선택은 경기력에 직접적인 영향을 미칩니다. 라켓, 스트링, 신발, 의류의 올바른 선택 방법과 유지관리 팁, 가격 비교까지 테니스 장비 완벽 가이드를 만나보세요.";

  const toc = [
    { id: "equipment-importance", text: "장비의 중요성", depth: 2 as const },
    { id: "racket-selection", text: "라켓 선택 가이드", depth: 2 as const },
    { id: "string-guide", text: "스트링 선택과 관리", depth: 2 as const },
    { id: "shoes-guide", text: "테니스 신발", depth: 2 as const },
    { id: "apparel-guide", text: "테니스 의류", depth: 2 as const },
    { id: "accessories", text: "액세서리와 용품", depth: 2 as const },
    { id: "maintenance", text: "장비 유지관리", depth: 2 as const },
    { id: "budget-planning", text: "예산 계획", depth: 2 as const },
    { id: "beginner-tips", text: "초보자 팁", depth: 2 as const },
    { id: "pro-recommendations", text: "프로 선수 추천", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스 라켓은 어떻게 선택해야 하나요?",
      a: "플레이 스타일, 실력 수준, 신체 조건을 고려하세요. 초보자는 가벼운 라켓부터 시작하고, 중급 이상은 자신의 타격 스타일에 맞는 라켓을 선택합니다."
    },
    {
      q: "스트링 텐션은 얼마가 적당한가요?",
      a: "스트링 텐션 계산기로 개인 맞춤 텐션을 확인하세요. 초보자는 50-55lbs, 중급은 55-60lbs, 고급은 60lbs 이상이 일반적입니다."
    },
    {
      q: "테니스 신발은 일반 운동화와 다른가요?",
      a: "네, 전용 테니스 신발이 필요합니다. 코트 표면에 특화된 디자인으로 미끄러짐 방지, 충격 흡수, 방향 전환 용이성을 제공합니다."
    },
    {
      q: "장비 구매 예산은 어느 정도가 적당한가요?",
      a: "초보자는 30-50만원, 중급자는 50-100만원, 고급자는 100만원 이상이 일반적입니다. 품질 좋은 중고 장비도 좋은 선택입니다."
    },
    {
      q: "장비 유지관리는 어떻게 해야 하나요?",
      a: "라켓은 스트링 교체와 그립 테이프 교체를 주기적으로 하세요. 신발은 세척 후 건조하고, 의류는 땀 제거 세탁이 중요합니다."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 올바른 장비 선택은 테니스 경기력의 30%를 좌우합니다. 자신의 플레이 스타일과 예산에 맞는 장비를 선택하고, 정기적인 유지관리로 최적의 상태를 유지하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="equipment-importance">장비의 중요성</h2>
      <p>
        테니스 장비는 단순한 도구가 아니라 경기력에 직접적인 영향을 미치는 파트너입니다.
        올바른 장비 선택은 부상 예방, 퍼포먼스 향상, 경기력 유지에 핵심적인 역할을 합니다.
        자신의 플레이 스타일, 신체 조건, 예산을 고려하여 최적의 장비를 선택하세요.
        품질 좋은 장비는 장기적으로 투자 가치가 있습니다.
      </p>

      <h2 id="racket-selection">라켓 선택 가이드</h2>
      <p>
        라켓 선택의 핵심은 헤드 사이즈, 무게, 밸런스, 길이입니다. 초보자는 가벼운 라켓(280-300g)으로 시작하고,
        중급 이상은 자신의 타격 스타일에 맞게 선택합니다. 오버사이즈 헤드(107-115sq in)는 타격면이 넓어
        초보자에게 유리하며, 미드플러스 헤드(95-105sq in)는 컨트롤이 좋습니다. 샘플 라켓을 쳐보는 것이 중요합니다.
      </p>

      <h2 id="string-guide">스트링 선택과 관리</h2>
      <p>
        스트링은 라켓의 심장부입니다. 합성 장섬유, 천연 장섬유, 하이브리드 등 다양한 종류가 있으며,
        자신의 타격 스타일에 맞게 선택해야 합니다. 스트링 텐션은 퍼포먼스에 큰 영향을 미치므로
        스트링 텐션 계산기로 최적 텐션을 확인하세요. 일반적으로 6-9개월마다 교체하는 것이 좋습니다.
      </p>

      <h2 id="shoes-guide">테니스 신발</h2>
      <p>
        테니스 전용 신발은 일반 운동화와 다릅니다. 코트 표면에 특화된 디자인으로 미끄러짐 방지,
        충격 흡수, 방향 전환 용이성을 제공합니다. 클레이 코트용, 하드 코트용, 잔디 코트용으로
        구분되며, 자신의 주 코트를 고려하여 선택하세요. 발에 맞는 사이즈와 쿠셔닝이 중요합니다.
      </p>

      <h2 id="apparel-guide">테니스 의류</h2>
      <p>
        테니스 의류는 땀 흡수, 통기성, 유연성이 핵심입니다. 폴리에스터 소재의 기능성 의류가
        땀을 빠르게 배출하여 쾌적함을 유지합니다. 라켓 스윙이 편한 디자인과 햇빛 차단 기능이
        있는 의류를 선택하세요. 계절과 코트 타입에 맞는 색상과 디자인을 고려합니다.
      </p>

      <h2 id="accessories">액세서리와 용품</h2>
      <p>
        테니스 가방, 그립 테이프, 스트링 가드, 헤드 테이프 등의 액세서리가 경기력을 지원합니다.
        선바이저나 모자는 햇빛 차단에 필수적이며, 워터 보틀과 에너지 젤은 경기 중 수분과 에너지 보충에 도움이 됩니다.
        개인의 필요에 따라 선택하세요.
      </p>

      <h2 id="maintenance">장비 유지관리</h2>
      <p>
        장비 유지관리는 경기력 유지에 필수적입니다. 라켓은 스트링 상태를 주기적으로 점검하고,
        그립 테이프는 마르면 교체하세요. 신발은 경기 후 세척하고 건조하며, 의류는 땀 제거 세탁을 합니다.
        정기적인 점검과 유지관리로 장비 수명을 연장하고 최적의 퍼포먼스를 유지할 수 있습니다.
      </p>

      <h2 id="budget-planning">예산 계획</h2>
      <p>
        테니스 장비 예산은 실력 수준과 목표에 따라 달라집니다. 초보자는 30-50만원으로 시작할 수 있으며,
        중급자는 50-100만원, 고급자는 100만원 이상을 고려하세요. 품질 좋은 중고 장비도 좋은 선택입니다.
        장비별 우선순위를 정하여 단계적으로 구입하는 것을 추천합니다.
      </p>

      <h2 id="beginner-tips">초보자 팁</h2>
      <p>
        초보자는 너무 고가의 장비를 구입하기보다는 기본적인 장비부터 시작하세요.
        라켓은 가벼운 것을 선택하고, 스트링은 내구성이 좋은 것을 추천합니다.
        처음에는 렌탈 코트를 이용하거나 친구의 장비를 빌려 사용하며 자신의 취향을 파악하세요.
        점차 실력이 향상됨에 따라 장비를 업그레이드하는 것이 좋습니다.
      </p>

      <h2 id="pro-recommendations">프로 선수 추천</h2>
      <p>
        프로 선수들의 장비 선택은 퍼포먼스 극대화를 위한 과학적 접근입니다.
        노박 조코비치는 헤드 라켓을 선호하며, 로저 페더러는 윌슨 라켓을 사용합니다.
        프로 선수들의 장비 선택 이유를 연구하며 자신의 플레이 스타일에 맞는 장비를 찾아보세요.
        최신 기술이 적용된 장비들이 점점 더 많이 출시되고 있습니다.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/gear/2021/01/best-tennis-rackets/567890/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 장비 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/play/equipment/racket-buying-guide.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 라켓 구매 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />

      {/* 관련 글 섹션 */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">관련 글 더보기</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/blog/tennis-string-guide">
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 mb-2">
                  장비 가이드
                </Badge>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                  라켓 스트링 종류별 특징과 선택 가이드
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스 스트링의 종류와 특징을 분석하고 자신의 플레이 스타일에 맞는 스트링 선택 가이드를 제공합니다.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog/tennis-shoes-selection-guide">
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 mb-2">
                  장비 가이드
                </Badge>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                  테니스 신발 선택 완벽 가이드
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  코트 타입별, 발 모양별, 예산별로 추천하는 테니스 신발 선택 가이드와 관리법.
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/blog/tennis-apparel-guide">
            <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all group cursor-pointer">
              <CardContent className="p-4">
                <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300 mb-2">
                  장비 가이드
                </Badge>
                <h3 className="font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 line-clamp-2">
                  테니스 의류 가이드: 운동복부터 액세서리까지
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  테니스 플레이에 최적화된 의류 선택과 관리법. 기능성, 스타일, 예산까지 고려한 완벽 가이드.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>
    </Article>
  );
}
