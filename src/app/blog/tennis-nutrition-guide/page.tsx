import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisNutritionGuidePage() {
  const title = "테니스 영양 가이드: 경기력 극대화를 위한 과학적 식단";
  const excerpt = "테니스 선수들을 위한 맞춤 영양 전략. 경기 전후 영양 섭취, 수분 보충, 에너지 관리까지 테니스 다이어트 계산기와 함께 최적의 영양 플랜을 세워보세요.";

  const toc = [
    { id: "nutrition-basics", text: "테니스 영양의 기초", depth: 2 as const },
    { id: "pre-match-nutrition", text: "경기 전 영양", depth: 2 as const },
    { id: "during-match", text: "경기 중 영양 보충", depth: 2 as const },
    { id: "post-match-recovery", text: "경기 후 회복 영양", depth: 2 as const },
    { id: "hydration-guide", text: "수분 보충 전략", depth: 2 as const },
    { id: "macronutrients", text: "거대 영양소 균형", depth: 2 as const },
    { id: "micronutrients", text: "미량 영양소", depth: 2 as const },
    { id: "supplements", text: "보충제 가이드", depth: 2 as const },
    { id: "meal-planning", text: "식단 계획", depth: 2 as const },
    { id: "special-considerations", text: "특별 고려사항", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스 선수에게 가장 중요한 영양소는?",
      a: "탄수화물(에너지원), 단백질(근육 회복), 수분(체액 균형)이 가장 중요합니다. 테니스 다이어트 계산기로 개인 맞춤 비율을 확인하세요."
    },
    {
      q: "경기 전 몇 시간 전에 식사해야 하나요?",
      a: "경기 시작 2-3시간 전에 가벼운 탄수화물 중심 식사를 하세요. 너무 늦은 식사는 소화 불량을, 너무 이른 식사는 에너지 부족을 유발합니다."
    },
    {
      q: "경기 중 수분 보충은 어떻게 해야 하나요?",
      a: "15-20분마다 150-200ml씩 소량씩 섭취하세요. 스포츠 드링크로 전해질과 당분을 함께 보충하는 것이 효과적입니다."
    },
    {
      q: "근육 회복을 위한 최고의 식품은?",
      a: "닭가슴살, 연어, 계란, 그릭 요거트 등이 단백질이 풍부합니다. 경기 후 30분 이내에 섭취하는 것이 가장 효과적입니다."
    },
    {
      q: "카페인 섭취는 경기력에 도움이 되나요?",
      a: "적절한 카페인(200mg 이내)은 집중력과 지구력을 향상시킬 수 있지만, 개인차가 있으니 경기 전 테스트해보세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 테니스 영양은 에너지 공급, 회복 촉진, 부상 예방의 핵심입니다. 테니스 다이어트 계산기로 개인 맞춤 영양 플랜을 세우고, 경기 상황별 최적의 영양 전략을 실천하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="nutrition-basics">테니스 영양의 기초</h2>
      <p>
        테니스 영양은 단순한 식단 관리가 아닌 과학적 퍼포먼스 최적화입니다.
        에너지 공급, 근육 회복, 수분 균형, 면역력 강화가 핵심 목표입니다.
        테니스 다이어트 계산기로 개인별 칼로리와 영양소 요구량을 계산하고,
        경기 상황에 따른 맞춤 전략을 수립하세요. 영양 관리가 경기력의 30%를 좌우합니다.
      </p>

      <h2 id="pre-match-nutrition">경기 전 영양</h2>
      <p>
        경기 전 영양은 에너지 저장과 최적 컨디션 조성에 초점입니다.
        경기 시작 2-3시간 전에는 탄수화물 중심의 식사를 하여 글리코겐 저장을 극대화하세요.
        너무 무겁거나 기름진 음식은 피하고, 익숙한 음식으로 소화 불량을 예방합니다.
        경기 1시간 전에는 가벼운 간식으로 에너지를 보충하세요.
      </p>

      <h2 id="during-match">경기 중 영양 보충</h2>
      <p>
        경기 중 영양 보충은 지구력 유지와 탈수 예방을 위한 것입니다.
        15-20분마다 소량의 스포츠 드링크나 물을 섭취하여 수분과 전해질 균형을 유지합니다.
        긴 경기에서는 에너지 젤이나 바나나로 탄수화물을 보충하세요.
        개인의 땀 배출량과 경기 강도에 따라 보충 빈도를 조절합니다.
      </p>

      <h2 id="post-match-recovery">경기 후 회복 영양</h2>
      <p>
        경기 후 회복 영양은 근육 회복과 염증 감소에 필수적입니다.
        경기 종료 후 30분 이내에 단백질과 탄수화물을 함께 섭취하여 근육 글리코겐 재합성과
        단백질 합성을 촉진하세요. 항염증 식품(베리류, 연어, 녹차)을 활용하여 회복을 가속화합니다.
        충분한 회복 영양이 다음 경기력을 좌우합니다.
      </p>

      <h2 id="hydration-guide">수분 보충 전략</h2>
      <p>
        테니스 선수의 수분 보충은 체중 1kg당 30-35ml가 기준입니다.
        땀으로 잃는 전해질(나트륨, 칼륨, 마그네슘)을 고려하여 스포츠 드링크를 선택하세요.
        경기 전 2-3시간 전부터 수분 섭취를 시작하고, 경기 중에는 규칙적으로 보충합니다.
        탈수 증상(어지러움, 피로감)이 나타나면 즉시 수분 보충과 휴식을 취하세요.
      </p>

      <h2 id="macronutrients">거대 영양소 균형</h2>
      <p>
        테니스 선수의 최적 거대 영양소 비율은 탄수화물 60-70%, 단백질 15-20%, 지방 20-25%입니다.
        탄수화물은 에너지원, 단백질은 근육 회복, 지방은 호르몬 생성과 영양소 흡수에 중요합니다.
        테니스 다이어트 계산기로 개인별 최적 비율을 계산하고,
        식단 구성 시 균형을 유지하세요. 영양소 불균형은 퍼포먼스 저하를 유발합니다.
      </p>

      <h2 id="micronutrients">미량 영양소</h2>
      <p>
        미량 영양소는 면역력 강화와 에너지 대사에 필수적입니다.
        철분(빈혈 예방), 아연(면역력), 칼슘(뼈 건강), 비타민 D(근력 강화)를 충분히 섭취하세요.
        신선한 채소, 과일, 견과류로 자연스럽게 섭취하고, 필요시 보충제를 고려합니다.
        미량 영양소 결핍은 피로감과 부상 위험을 증가시킵니다.
      </p>

      <h2 id="supplements">보충제 가이드</h2>
      <p>
        보충제는 식단 보완 수단이지 대체제가 아닙니다. 크레아틴(근력 향상), 베타알라닌(지구력),
        BCAAs(근육 회복), 프로바이오틱스(장 건강)를 고려할 수 있습니다.
        단, 과도한 섭취는 건강 위험을 초래할 수 있으니 전문가 상담 후 사용하세요.
        보충제는 개인차가 크므로 효과를 모니터링하며 조정합니다.
      </p>

      <h2 id="meal-planning">식단 계획</h2>
      <p>
        체계적인 식단 계획으로 일관된 퍼포먼스를 유지합니다.
        아침은 탄수화물 중심, 점심은 균형 잡힌 식사, 저녁은 단백질 중심으로 구성하세요.
        간식으로는 견과류, 과일, 그릭 요거트를 활용하고, 경기 스케줄에 맞춰 식사 시간을 조정합니다.
        식단 계획이 습관화되면 자연스러운 퍼포먼스 향상을 경험할 수 있습니다.
      </p>

      <h2 id="special-considerations">특별 고려사항</h2>
      <p>
        체중 조절, 알레르기, 채식주의 등 개인 상황을 고려한 맞춤 영양 전략이 필요합니다.
        여행이나 시차로 인한 경기에서는 현지 식단 적응에 유의하세요.
        계절 변화, 고지대 경기, 더운 날씨 등 환경 변화에 따른 영양 조정이 중요합니다.
        건강 상태 변화에 맞춰 영양 전략을 유연하게 조정하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis.com/pro-game/2021/01/tennis-nutrition-guide/456789/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 영양 가이드 - Tennis.com</a></li>
          <li>• <a href="https://www.usta.com/en/home/improve/nutrition/tennis-nutrition.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">USTA 테니스 영양 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}
