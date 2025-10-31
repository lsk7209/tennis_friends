import Article from '@/components/blog/Article';
import TOC from '@/components/blog/TOC';
import { FAQ } from '@/components/blog/FAQ';

export default function TennisEquipmentMaintenancePage() {
  const title = "테니스 장비 유지보수 완벽 가이드: 장비 수명 연장과 성능 유지";
  const excerpt = "테니스 장비의 올바른 관리법으로 수명을 늘리고 최고의 성능을 유지하세요. 라켓, 스트링, 신발, 의류별 세심한 관리 방법을 배우고 장비 투자를 최대한 활용해보세요.";

  const toc = [
    { id: "racket-maintenance", text: "라켓 관리", depth: 2 as const },
    { id: "string-maintenance", text: "스트링 관리", depth: 2 as const },
    { id: "shoe-maintenance", text: "신발 관리", depth: 2 as const },
    { id: "apparel-maintenance", text: "의류 관리", depth: 2 as const },
    { id: "storage-tips", text: "보관 방법", depth: 2 as const },
    { id: "maintenance-schedule", text: "관리 주기", depth: 2 as const },
    { id: "common-problems", text: "자주 발생하는 문제", depth: 2 as const },
    { id: "cost-saving-tips", text: "비용 절감 팁", depth: 2 as const },
  ];

  const faqs = [
    {
      q: "테니스 라켓은 얼마나 자주 점검해야 하나요?",
      a: "격한 플레이 시 매달, 일반 플레이 시 3개월마다 전문점에서 점검하는 것이 좋습니다. 균열, 그립 상태, 무게 변화를 확인하세요."
    },
    {
      q: "스트링은 언제 교체해야 할까요?",
      a: "새 스트링의 장력이 10-15% 떨어지거나, 타격 시 소리가 변하거나, 컨트롤이 떨어질 때 교체하세요. 보통 2-3개월마다 교체합니다."
    },
    {
      q: "테니스 신발은 어떻게 세척해야 하나요?",
      a: "물에 담그지 말고 부드러운 솔과 중성 세제로 가볍게 세척하세요. 그 후 통풍이 잘 되는 곳에서 자연 건조시키고 방수 스프레이를 뿌려주세요."
    },
    {
      q: "장비 관리를 소홀히 하면 어떤 문제가 생기나요?",
      a: "부상 위험이 증가하고, 퍼포먼스가 떨어지며, 장비 수명이 단축됩니다. 특히 스트링이 느슨해지면 타격의 정확성과 파워가 현저히 떨어집니다."
    },
    {
      q: "장비 관리 비용을 줄이는 방법은?",
      a: "정기적인 사전 점검으로 큰 수리를 예방하고, 올바른 보관으로 장비 수명을 늘리세요. 또한 계절별 장비 교체 시기를 지켜 과도한 마모를 방지하세요."
    },
  ];

  return (
    <Article title={title} excerpt={excerpt}>
      <blockquote>
        핵심 요약: 장비 관리는 테니스 실력의 기본입니다. 올바른 유지보수로 장비 투자를 최대한 활용하고, 안전하고 효율적인 플레이를 유지하세요.
      </blockquote>

      <TOC items={toc} />

      <h2 id="racket-maintenance">라켓 관리</h2>
      <p>
        테니스 라켓은 가장 중요한 장비입니다. 프레임의 균열을 정기적으로 점검하고, 그립 테이프의
        마모 상태를 확인하세요. 라켓을 물에 노출시키지 말고, 햇빛이 강한 곳에 장시간 두지 마세요.
        그립이 미끄러우면 교체하고, 프레임이 휘었는지 수시로 확인하세요. 라켓의 무게와 밸런스가
        변하지 않도록 주의하세요. 올바른 라켓 관리는 타격의 일관성을 유지합니다.
      </p>

      <h2 id="string-maintenance">스트링 관리</h2>
      <p>
        스트링은 타격의 핵심입니다. 장력이 떨어지면 즉시 교체하세요. 스트링 교체 시 전문점에서
        정확한 장력을 맞추는 것이 중요합니다. 스트링 사이의 이물질을 제거하고, 습기에 노출되지
        않도록 보관하세요. 스트링 종류에 따라 관리 방법이 다르므로 라벨을 확인하세요.
        정기적인 스트링 교체는 부상 예방에도 도움이 됩니다.
      </p>

      <h2 id="shoe-maintenance">신발 관리</h2>
      <p>
        테니스 신발은 발의 안전을 책임집니다. 플레이 후 먼지를 털고, 젖은 상태로 두지 마세요.
        밑창의 마모 상태를 수시로 확인하고, 쿠션이 상실되었으면 교체하세요. 신발끈을 적절한
        길이로 조정하고, 깔창의 상태도 점검하세요. 신발 관리가 잘못되면 발목과 무릎 부상을
        유발할 수 있습니다. 안전한 플레이를 위한 필수 관리입니다.
      </p>

      <h2 id="apparel-maintenance">의류 관리</h2>
      <p>
        테니스 의류는 땀과 마찰에 노출됩니다. 세탁 시 세제를 최소한으로 사용하고, 찬물 세탁을
        권장합니다. 건조 시 그늘에서 말리고, 다리미는 낮은 온도로 사용하세요. 흡습속건 기능이
        떨어지면 세탁 주기를 늘리세요. 의류 관리가 잘못되면 피부 트러블을 유발할 수 있습니다.
        쾌적한 플레이 환경을 유지하세요.
      </p>

      <h2 id="storage-tips">보관 방법</h2>
      <p>
        장비 보관은 수명에 직접적인 영향을 미칩니다. 라켓은 라켓 가방에 세로로 보관하고,
        스트링 장력이 유지되도록 하세요. 신발은 통풍이 잘 되는 곳에 보관하고, 의류는 옷걸이에
        걸어 보관하세요. 습기가 많은 곳이나 직사광선을 피하고, 온도와 습도를 일정하게 유지하세요.
        올바른 보관 습관이 장비 수명을 연장합니다.
      </p>

      <h2 id="maintenance-schedule">관리 주기</h2>
      <p>
        각 장비별로 적절한 관리 주기를 지키세요. 라켓은 매달 외관 점검, 스트링은 2-3개월마다
        교체, 신발은 6개월마다 상태 확인, 의류는 사용 빈도에 따라 세탁하세요. 계절 변화나
        사용 빈도에 따라 주기를 조정하세요. 정기적인 관리가 예기치 않은 고장을 예방합니다.
        계획적인 관리로 장비 투자를 보호하세요.
      </p>

      <h2 id="common-problems">자주 발생하는 문제</h2>
      <p>
        가장 흔한 문제는 스트링 장력 저하입니다. 타격 시 소리가 변하거나 컨트롤이 떨어지면
        교체하세요. 신발 밑창 마모도 자주 발생하며, 이로 인해 미끄러짐 사고가 생길 수 있습니다.
        라켓 그립 마모도 일상적인 문제입니다. 이러한 문제를 미리 파악하고 해결하세요.
        사전 예방이 비용 절감의 핵심입니다.
      </p>

      <h2 id="cost-saving-tips">비용 절감 팁</h2>
      <p>
        장비 관리를 통해 비용을 절감하세요. 정기 점검으로 큰 수리를 예방하고, 올바른 세척으로
        수명을 연장하세요. 계절별 장비 교체 시기를 지켜 과도한 마모를 방지하세요. 전문점 할인을
        활용하고, 온라인 가격 비교로 합리적인 구매를 하세요. 현명한 관리로 장비 비용을
        최적화하세요.
      </p>

      <div className="bg-white/50 p-4 rounded-lg mb-4">
        <p className="text-sm text-gray-600 mb-2">📚 더 깊이 공부해보세요:</p>
        <ul className="space-y-1 text-sm">
          <li>• <a href="https://www.tennis-warehouse.com/Learn/racket_care.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">테니스 용품 관리 가이드 - Tennis Warehouse</a></li>
          <li>• <a href="https://www.wilson.com/en-us/article/tennis-racket-maintenance" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">윌슨 라켓 관리 가이드</a></li>
        </ul>
      </div>

      <FAQ items={faqs} />
    </Article>
  );
}

