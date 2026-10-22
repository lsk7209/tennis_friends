import fs from "node:fs";
import { createHash } from "node:crypto";

const sourcePacketPath = ".goal-harness/content-90-20261020/next-warmup-club-sources.json";
const sourcePacketData = fs.readFileSync(sourcePacketPath);
const sourcePacketSha = createHash("sha256").update(sourcePacketData).digest("hex");

const items = [
  {
    route: "/blog/aw-074-court-beginner",
    slug: "aw-074-court-beginner",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    metadata: {
      slug: "aw-074-court-beginner",
      title: "발목 불안한 날의 코트 이동과 활동 결정",
      excerpt: "발목이 꺾이거나 불안정한 날 즉각적인 중단 기준(Red Flags)과 영국 NHS 지침에 따른 안전 활동 범위 및 회복 판단을 다룹니다.",
      category: "코트 환경",
      tags: ["발목 부상 예방", "코트 이동", "활동 중단 기준", "테니스 안전"],
      readTime: "9분"
    },
    body: {
      content: `<article>
<p class="article-summary">발목에 힘이 빠지거나 불안정한 날에는 억지 테이핑으로 버티지 말고 즉시 플레이를 멈추고 체중 부하 여부를 확인하세요. 이 글은 발목 부상을 한 번에 치료한다는 약속 대신, 영국 NHS 지침을 토대로 코트 활동 중단 기준과 안전한 활동 제한 수칙을 제시합니다.</p>
<p>테니스 코트에서 좌우로 빠르게 방향을 전환하다 보면 순간적으로 발목이 덜컥거리거나 힘이 풀리는 불안정감(Giving way)을 느낄 때가 있습니다. 많은 동호인이 “파스 뿌리고 테이핑 세게 감으면 괜찮겠지”라며 경기를 강행하곤 합니다. 하지만 인대가 미세하게 손상되었거나 고유수용성 감각이 떨어진 상태에서 무리하게 뛰면 관절 연골 손상이나 완전 파열로 이어질 위험이 큽니다. <a href="/blog/aw-059-recovery">통증 관리 및 활동 조정</a>이 근육통 대처를 다룬다면, 이 글은 발목 관절의 즉각적인 활동 중단 신호와 코트 복귀 전 점검 항목을 다룹니다.</p>
<h2>즉각 코트를 떠나야 하는 3대 위험 신호</h2>
<p>영국 국민보건서비스(NHS)의 발목 통증 및 염좌 관리 지침에 따르면, 다음 세 가지 증상 중 하나라도 나타나면 즉시 코트 플레이를 중단하고 의료진(정형외과 등)의 정확한 진단을 받아야 합니다.</p>
<ul>
<li><strong>체중 부하 불가 (Cannot bear weight):</strong> 발을 디딜 때 심한 통증으로 인해 절뚝거리지 않고 네 걸음 이상 똑바로 걷기 어려운 상태.</li>
<li><strong>관절 불안정 및 꺾임 (Giving way):</strong> 발목 관절이 지탱하지 못하고 덜렁거리거나 무너지는 느낌이 반복되는 경우.</li>
<li><strong>급격한 부종 및 신경 증상:</strong> 부상 직후 주먹 크기로 부어오르거나 발가락 부위가 저리고 감각이 둔해지는 경우.</li>
</ul>
<p>위험 신호가 있다면 얼음찜질과 심장보다 높게 올리는 거치(Elevation)를 취하고 전문의 진료를 받아야 합니다. 마취성 진통제를 먹고 경기를 계속하는 것은 관절 경고 신호를 가려 부상을 악화시키는 위험한 행동입니다.</p>
<h2>경미한 뻐근함일 때의 코트 환경 및 이동 제한</h2>
<p>의학적 위험 신호는 없지만 전날의 피로로 발목 주변이 다소 뻐근하거나 굳어 있는 날이라면 코트 선택과 풋워크를 엄격히 제한해야 합니다. 뉴캐슬 국민보건서비스(Newcastle Hospitals NHS) 물리치료 가이드라인에 따르면, 관절 회복기에는 급격한 부하와 충격을 피하는 활동 조절이 필수적입니다.</p>
<p>첫째, 물기가 남아 있는 하드코트나 모래가 뭉친 인조잔디 코트는 절대 피해야 합니다. 미끄러짐과 갑작스러운 걸림이 발목 외측 인대에 치명적인 회전력을 가하기 때문입니다. 코트 상태 확인은 <a href="/utility/court-surface-advisor">코트 표면별 가이드</a>를 참고할 수 있습니다. 둘째, 좌우로 공을 쫓아갈 때 급격하게 브레이크를 밟는 '커팅 스텝(Cutting step)'을 삼가고, 공과의 거리를 여유 있게 두고 잔발로 멈추는 감속 풋워크를 사용해야 합니다.</p>
<h2>가상 사례: 테이핑으로 버틴 A vs 즉시 중단한 B</h2>
<p>가상으로 주말 동호회 매치 중 발목 꺾임을 경험한 A와 B가 있다고 합시다. A는 가방에 있던 압박붕대를 강하게 감고 남은 3게임을 모두 뛰었습니다. 다음 날 발목 전체에 피멍이 들고 3주간 걷지 못하는 중증 염좌로 악화되었습니다. 반면 B는 발목에 힘이 풀리는 느낌이 들자마자 파트너에게 양해를 구하고 기권한 뒤 얼음찜질을 하고 귀가했습니다. 며칠간 휴식을 취하며 체중 부하를 확인한 B는 1주일 뒤 가벼운 보행부터 안전하게 일상에 복귀했습니다. 이 가상 사례는 치료 결과를 보장하지는 않지만, 무리한 경기 지속이 초래하는 결과를 대조해 보여줍니다.</p>
<h2>조건별 판단표</h2>
<table><caption>발목 불안정 증상별 코트 행동 및 안전 수칙</caption><thead><tr><th scope="col">신체 및 코트 상태</th><th scope="col">관찰된 사실</th><th scope="col">권장 행동</th><th scope="col">절대 금지 사항</th></tr></thead><tbody><tr><th scope="row">체중 부하 불가</th><td>네 걸음 이상 딛지 못함</td><td>경기 즉각 포기, 얼음찜질 및 병원 방문</td><td>진통제 복용 후 경기 강행</td></tr><tr><th scope="row">가벼운 뻐근함 (위험증상 없음)</th><td>보행 가능, 약간의 뻣뻣함</td><td>미니테니스 위주 가벼운 랠리로 제한</td><td>무리한 슬라이딩 및 전력 대시</td></tr><tr><th scope="row">미끄러운 코트 환경</th><td>비 온 뒤 물기 또는 흙 뭉침</td><td>운동 취소 또는 실내 코트로 변경</td><td>미끄러운 바닥에서의 급정지</td></tr></tbody></table>
<p>통증이 없더라도 발목이 좌우로 흔들리는 불안정감이 계속된다면 자가 판단으로 운동을 재개하지 말고 물리치료사나 전문의의 기능 평가를 먼저 받으세요.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>영국 NHS 발목 통증 안내와 뉴캐슬 병원 물리치료 자가 관리 지침을 바탕으로 작성했습니다. 이 글은 의료 진단이나 치료 처방을 대신하지 않으며 테니스 경기 중의 안전 행동 기준으로만 적용해야 합니다.</p>
<ul><li><a href="https://www.nhs.uk/symptoms/foot-pain/ankle-pain/" target="_blank" rel="noopener noreferrer">NHS: Ankle Pain 지침</a></li><li><a href="https://www.newcastle-hospitals.nhs.uk/services/newcastle-occupational-health-service/information-for-staff/physiotherapy/self-help-leaflets/ankle-pain-2/" target="_blank" rel="noopener noreferrer">Newcastle Hospitals NHS: Ankle Pain Self-help Guide</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>발목 보호대를 강하게 차면 통증이 있어도 뛰어도 되나요?</summary><p>보호대는 관절의 가동 범위를 물리적으로 지지해 주는 보조 도구일 뿐, 손상된 인대를 치료하거나 통증의 원인을 없애주지 않습니다. 통증이나 불안정감이 있다면 보호대에 의존해 뛰어서는 안 됩니다.</p></details>
<details><summary>발목을 접질렸을 때 온찜질과 냉찜질 중 무엇을 해야 하나요?</summary><p>부상 직후 48시간 이내의 급성기에는 혈관을 수축시키고 부종을 줄이기 위해 냉찜질(얼음팩을 수건에 싸서 15~20분 적용)을 권장합니다. 온찜질은 초기 염증과 붓기를 악화시킬 수 있습니다.</p></details>
<details><summary>언제쯤 다시 테니스 코트에 복귀할 수 있나요?</summary><p>통증 없이 온전히 체중을 싣고 걸을 수 있고, 까치발 들기와 가벼운 제자리 뛰기가 통증 없이 가능해진 후 전문의의 확인을 받아 단계적으로 복귀해야 합니다.</p></details>
</article>`,
      tags: [
        "발목 부상 예방",
        "코트 이동",
        "활동 중단 기준",
        "테니스 안전"
      ],
      summary: "발목에 힘이 빠지거나 불안정한 날에는 억지 테이핑으로 버티지 말고 즉시 플레이를 멈추고 체중 부하 여부를 확인하세요. 이 글은 발목 부상을 한 번에 치료한다는 약속 대신, 영국 NHS 지침을 토대로 코트 활동 중단 기준과 안전한 활동 제한 수칙을 제시합니다.",
      highlight: "발목이 꺾이거나 체중을 싣지 못할 때는 경기 승패와 상관없이 즉시 코트를 떠나는 것이 장기적인 관절 건강을 지키는 유일한 선택입니다.",
      faq: [
        {
          question: "발목 보호대를 강하게 차면 통증이 있어도 뛰어도 되나요?",
          answer: "보호대는 관절의 가동 범위를 물리적으로 지지해 주는 보조 도구일 뿐, 손상된 인대를 치료하거나 통증의 원인을 없애주지 않습니다. 통증이나 불안정감이 있다면 보호대에 의존해 뛰어서는 안 됩니다."
        },
        {
          question: "발목을 접질렸을 때 온찜질과 냉찜질 중 무엇을 해야 하나요?",
          answer: "부상 직후 48시간 이내의 급성기에는 혈관을 수축시키고 부종을 줄이기 위해 냉찜질(얼음팩을 수건에 싸서 15~20분 적용)을 권장합니다. 온찜질은 초기 염증과 붓기를 악화시킬 수 있습니다."
        },
        {
          question: "언제쯤 다시 테니스 코트에 복귀할 수 있나요?",
          answer: "통증 없이 온전히 체중을 싣고 걸을 수 있고, 까치발 들기와 가벼운 제자리 뛰기가 통증 없이 가능해진 후 전문의의 확인을 받아 단계적으로 복귀해야 합니다."
        }
      ]
    }
  },
  {
    route: "/blog/aw-075-club-record",
    slug: "aw-075-club-record",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    metadata: {
      slug: "aw-075-club-record",
      title: "동호회·게스트 첫 참가 전 필수 확인 체크리스트",
      excerpt: "새로운 테니스 클럽에 처음 참가할 때 경기 포맷, 실력 기준, 비용 분담, 코트 전용화, 셀프 저지 에티켓을 사전에 확인해 트러블을 예방합니다.",
      category: "동호회 운영",
      tags: ["동호회 참가", "게스트 에티켓", "참가 체크리스트", "테니스 매너"],
      readTime: "9분"
    },
    body: {
      content: `<article>
<p class="article-summary">새로운 테니스 클럽이나 게스트 모임에 참가하기 전 경기 포맷, 실력 기준, 비용과 공 분담, 코트 전용화, 셀프 저지 에티켓 5가지를 운영자와 미리 확인하세요. 사전 확인은 불필요한 마찰을 줄이고 즐거운 교류를 만드는 기본입니다.</p>
<p>테니스를 즐기다 보면 지인의 소개나 오픈 채팅을 통해 새로운 동호회나 게스트 모임에 참여할 기회가 생깁니다. 하지만 도착해서야 자신의 실력과 모임 수준이 맞지 않거나, 준비해 온 장비가 코트 규정에 어긋나 당황하는 경우가 많습니다. <a href="/blog/aw-009-club-match-club-match">클럽 매치 진행표</a>가 대회 운영자의 시각을 다룬다면, 이 글은 참가자 개인의 입장에서 첫 방문 전 운영자에게 확인해야 할 5가지 실전 체크리스트를 정리합니다.</p>
<h2>참가 전 운영자에게 확인할 5대 체크포인트</h2>
<p>미국테니스협회(USTA)의 성인 리그 및 플렉스 리그 운영 가이드라인에 따르면, 원활한 경기 운영을 위해 참가 전 경기 조건과 규정을 상호 합의하는 절차가 필수적입니다.</p>
<ol>
<li><strong>경기 포맷과 듀스 룰:</strong> 1세트(6게임 선승) 매치인지, 4게임 단축 세트인지, 40-40에서 노애드(No-ad)를 적용하는지 미리 확인합니다.</li>
<li><strong>모임의 실력대 (NTRP 기준):</strong> 입문자 중심(2.0~2.5) 모임인지 중상급자 중심(3.5 이상)인지 확인해야 합니다. 자신의 실력 확인은 <a href="/utility/ntrp-test">NTRP 자가점검</a> 도구를 활용할 수 있습니다.</li>
<li><strong>참가비와 시합구(시합 공) 분담:</strong> 게스트비 송금 방식과 새 공 지참 의무 여부를 파악합니다.</li>
<li><strong>코트 종류와 테니스화 규정:</strong> 하드코트용 올코트화인지, 클레이/인조잔디 전용 테니스화가 필수인지 확인합니다. 러닝화 착용 시 코트 손상 및 부상 위험으로 입장이 거부될 수 있습니다.</li>
<li><strong>로테이션 및 대기 방식:</strong> 참가자 수에 따른 게임 배분 방식(예: 4명 1코트 고정 vs 6~8명 순환 로테이션)을 숙지합니다.</li>
</ol>
<h2>코트 위 필수 셀프 저지 및 점수 에티켓</h2>
<p>USTA Friend at Court 2026의 'The Code (§§31–32)' 규정에 명시된 자체 판정(Self-officiating) 원칙을 숙지해야 경기 중 오해를 방지할 수 있습니다.</p>
<p>첫째, 서버는 서브를 넣기 전 리시버가 들을 수 있도록 큰 소리로 현재 게임 및 포인트 점수를 호명해야 합니다(예: "게임 3대 2, 포인트 30-15"). 둘째, 상대 코트 인/아웃 판정에서 공이 선에 아주 조금이라도 닿았거나 명확하지 않을 때는 무조건 '인(In)'으로 상대에게 유리하게 판정하는 것이 테니스의 오랜 불문율입니다. 셋째, 점수 분쟁이 생길 경우 두 선수가 합의한 포인트만 인정하고, 의견이 엇갈리는 포인트는 이전 합의된 점수로 돌아가 다시 경기합니다.</p>
<h2>가상 사례: 사전 확인 없는 참가 vs 체크리스트 준비 참가</h2>
<p>가상으로 새로운 클럽에 처음 참가한 A와 B의 하루를 봅시다. A는 규정을 묻지 않고 평소 신던 러닝화를 신고 하드코트에 갔다가 바닥 이염 우려로 출전을 제지당했고, 노애드 룰을 몰라 40-40에서 듀스를 부르다 파트너와 어색해졌습니다. 반면 B는 전날 운영자에게 신발 규정과 4게임 선승 노애드 룰을 미리 확인하고 새 공 1캔을 챙겨 참석했습니다. 파트너와 <a href="/blog/aw-002-club-doubles-beginner">복식 콜 합의</a>를 가볍게 나눈 B는 첫날부터 매너 좋은 게스트로 호평을 받았습니다.</p>
<h2>조건별 판단표</h2>
<table><caption>동호회 첫 참가 준비 및 현장 체크리스트</caption><thead><tr><th scope="col">구분</th><th scope="col">사전 확인 질문</th><th scope="col">현장 확인 사실</th><th scope="col">주의사항</th></tr></thead><tbody><tr><th scope="row">실력대</th><td>"주로 어느 정도 구력과 NTRP 분들이 참여하시나요?"</td><td>상대와 파트너의 평균 구질 확인</td><td>실력을 과장하거나 과도하게 낮추지 않기</td></tr><tr><th scope="row">경기 포맷</th><td>"게임 방식(1세트 vs 4게임)과 노애드 여부는 어떻게 되나요?"</td><td>서브 전 점수 호명 준수</td><td>로컬 로컬 룰에 맞게 빠른 적응</td></tr><tr><th scope="row">장비 규정</th><td>"코트 표면과 신발 규정이 따로 있나요?"</td><td>전용 테니스화 밑창 상태 점검</td><td>러닝화나 흙 묻은 신발 착용 절대 금지</td></tr><tr><th scope="row">비용/공</th><td>"게스트비와 새 공 지참 여부를 알려주세요."</td><td>입금 완료 확인 및 캔 볼 준비</td><td>경기 종료 전 정산 완료</td></tr></tbody></table>
<p>새로운 모임에 들어갈 때는 기술을 뽐내려 하기보다 약속된 룰을 지키고 상대의 플레이를 존중하는 태도가 가장 훌륭한 실력입니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA 성인 리그 가이드라인, USTA 플렉스 리그 안내, USTA Friend at Court 2026 셀프 저지 규정을 참조했습니다. 각 동호회의 로컬 회칙이 우선하므로 이 체크리스트는 사전 질문을 정리하는 기준으로 활용해야 합니다.</p>
<ul><li><a href="https://www.usta.com/en/home/play/adult-tennis/programs/national/about-usta-league.html?intloc=adultleftnav" target="_blank" rel="noopener noreferrer">USTA: Adult League 운영 안내</a></li><li><a href="https://customercare.usta.com/hc/en-us/articles/39736129466772-USTA-Flex-League-Match-Guidelines-Explained" target="_blank" rel="noopener noreferrer">USTA Flex League: 매치 가이드라인</a></li><li><a href="https://www.usta.com/content/dam/usta/2026-pdfs/2026-friend-at-court.pdf" target="_blank" rel="noopener noreferrer">USTA: Friend at Court 2026 (The Code 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>NTRP 실력을 물어보는데 어떻게 답해야 하나요?</summary><p>공식 등급이 없다면 "구력 O년이며, 랠리와 기본 서브가 가능한 NTRP 2.5~3.0 수준입니다"처럼 구력과 함께 자신이 안정적으로 칠 수 있는 범위를 솔직하게 말씀하시면 됩니다.</p></details>
<details><summary>게스트비 송금은 언제 하는 것이 좋은가요?</summary><p>참가가 확정된 직후 사전 입금하거나, 현장 도착 직후 운영자에게 확인하고 입금하는 것이 가장 깔끔한 매너입니다.</p></details>
<details><summary>경기 중 점수 기억이 서로 다를 때는 어떻게 해결하나요?</summary><p>서로 동의하는 점수까지만 인정하고, 이견이 있는 포인트는 인정하지 않은 채 직전 합의된 스코어에서 서브를 다시 진행하는 것이 공식 셀프 카운트 규정입니다.</p></details>
</article>`,
      tags: [
        "동호회 참가",
        "게스트 에티켓",
        "참가 체크리스트",
        "테니스 매너"
      ],
      summary: "새로운 테니스 클럽이나 게스트 모임에 참가하기 전 경기 포맷, 실력 기준, 비용과 공 분담, 코트 전용화, 셀프 저지 에티켓 5가지를 운영자와 미리 확인하세요. 사전 확인은 불필요한 마찰을 줄이고 즐거운 교류를 만드는 기본입니다.",
      highlight: "클럽 모임에서 최고의 매너는 화려한 샷이 아니라 사전 룰 확인과 코트 위 명확한 점수 호명입니다.",
      faq: [
        {
          question: "NTRP 실력을 물어보는데 어떻게 답해야 하나요?",
          answer: "공식 등급이 없다면 \"구력 O년이며, 랠리와 기본 서브가 가능한 NTRP 2.5~3.0 수준입니다\"처럼 구력과 함께 자신이 안정적으로 칠 수 있는 범위를 솔직하게 말씀하시면 됩니다."
        },
        {
          question: "게스트비 송금은 언제 하는 것이 좋은가요?",
          answer: "참가가 확정된 직후 사전 입금하거나, 현장 도착 직후 운영자에게 확인하고 입금하는 것이 가장 깔끔한 매너입니다."
        },
        {
          question: "경기 중 점수 기억이 서로 다를 때는 어떻게 해결하나요?",
          answer: "서로 동의하는 점수까지만 인정하고, 이견이 있는 포인트는 인정하지 않은 채 직전 합의된 스코어에서 서브를 다시 진행하는 것이 공식 셀프 카운트 규정입니다."
        }
      ]
    }
  },
  {
    route: "/blog/aw-076-mental",
    slug: "aw-076-mental",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    metadata: {
      slug: "aw-076-mental",
      title: "더블폴트 직후 멘탈 복구와 다음 포인트 리셋 루틴",
      excerpt: "더블폴트 후 자책감으로 이어지는 연속 실점을 막기 위해 ITF 25초 규칙 안에서 시선 차단과 프로세스 큐를 재설정하는 4단계 루틴을 정리합니다.",
      category: "멘탈 훈련",
      tags: ["더블폴트", "멘탈 루틴", "포인트 사이 리셋", "테니스 심리"],
      readTime: "9분"
    },
    body: {
      content: `<article>
<p class="article-summary">더블폴트 직후에는 자책을 멈추고 ITF 25초 규정 안에서 '시선 격리 3초 → 깊은 날숨 → 현재 점수와 역할 확인 → 다음 구 프로세스 큐 하나'의 4단계로 멘탈을 리셋하세요. 과거의 실수 대신 다음 한 구의 행동에 집중하는 방법입니다.</p>
<p>게임 스코어 40-30이나 타이브레이크 같은 중요한 순간에 더블폴트(Double fault)를 범하면 머릿속이 하얘지고 파트너에게 미안한 마음에 손이 떨리곤 합니다. 많은 플레이어가 당황한 나머지 서둘러 다음 서브를 넣으려다 또다시 실책을 범하며 자멸합니다. <a href="/blog/aw-071-tennis-guide">포인트 사이 루틴</a>이 경기 전반의 집중을 다룬다면, 이 글은 더블폴트라는 급격한 멘탈 충격 직후 짧은 인터벌 안에서 심리적 평정을 되찾는 4단계 리셋 프로토콜을 다룹니다.</p>
<h2>ITF Rule 29의 25초 시간 제약 이해</h2>
<p>국제테니스연맹(ITF) Rule 29 규정에 따르면 포인트가 끝난 뒤 다음 서브를 넣기까지 허용되는 시간은 최대 25초입니다. 이 시간은 무한정 호흡을 가다듬으며 시간을 끌 수 있는 권리가 아닙니다. 불필요하게 경기를 지연시키면 공식 경고를 받을 수 있습니다. 따라서 멘탈 리셋은 복잡한 심리 명상이 아니라 25초라는 짧은 시간 안에 정확히 끝나는 '간결한 행동 약속'이어야 합니다.</p>
<h2>더블폴트 직후 4단계 리셋 프로토콜</h2>
<p>미국테니스협회(USTA)의 스포츠 심리 코칭 자료(Green Light, Yellow Light 프레임워크 및 경기 집중 가이드)를 바탕으로 실전에 맞게 정리한 4단계 루틴입니다.</p>
<ol>
<li><strong>1단계: 감정 반응 차단 (1~3초):</strong> 실점 직후 네트 너머 상대나 파트너를 바로 바라보지 마세요. 등을 돌려 베이스라인 뒤쪽 펜스를 향해 걸으며 라켓 스트링을 손으로 정돈합니다. 시각적 자극을 차단해 당혹감을 가라앉히는 물리적 방화벽입니다.</li>
<li><strong>2단계: 호흡 이완 및 신체 리셋 (4~8초):</strong> 코로 숨을 깊게 들이마시고 입으로 길게 내쉬며 어깨와 턱의 불필요한 긴장을 털어냅니다. 라켓을 반대쪽 손에 쥐고 손목의 악력을 완전히 풀어줍니다.</li>
<li><strong>3단계: 현재 점수와 역할 확인 (9~15초):</strong> 지나간 더블폴트는 이미 지워진 데이터입니다. 고개를 들어 현재 스코어보드를 명확히 인지합니다(예: "지금은 40-40 듀스이며, 내가 세컨드 서브가 아닌 새 퍼스트 서브를 시작할 차례다").</li>
<li><strong>4단계: 단 하나의 프로세스 큐(Process Cue) 설정 (16~25초):</strong> 결과(에이스를 내겠다)를 생각하지 말고, 내가 통제할 수 있는 구체적 행동 하나만 정합니다. 예를 들어 "몸쪽 깊은 코스 보고 토스 끝까지 펴기"처럼 단순한 문장을 머릿속에 띄우고 서브 준비 자세에 들어갑니다. 서브 전 정렬은 <a href="/blog/oct26-pre-serve-routine">프리 서브 루틴</a>을 연결할 수 있습니다.</li>
</ol>
<h2>가상 사례: 조급하게 서두른 A vs 25초 루틴을 지킨 B</h2>
<p>가상으로 복식 매치에서 중요한 순간 더블폴트를 한 A와 B를 비교해 봅시다. A는 파트너에게 "죄송합니다"를 연발하며 곧바로 베이스라인에 서서 5초 만에 다음 서브를 넣었고, 손이 굳은 채 또다시 네트에 공을 박았습니다. 반면 B는 더블폴트 후 즉시 뒤돌아서서 깊은 숨을 내쉬고 스트링을 만진 뒤, "다음은 상대 백핸드 쪽 깊게 스핀 서브"라는 목표를 세우고 20초 시점에 차분히 서브를 넣었습니다. 비록 B의 서브가 에이스가 되지는 않았지만 안정적인 랠리를 시작해 포인트를 지켜냈습니다.</p>
<h2>조건별 판단표</h2>
<table><caption>더블폴트 직후 점수 상황별 프로세스 큐 설정표</caption><thead><tr><th scope="col">현재 점수 조건</th><th scope="col">흔한 심리적 함정</th><th scope="col">추천 프로세스 큐 (선택)</th><th scope="col">절대 피해야 할 행동</th></tr></thead><tbody><tr><th scope="row">30-40 (브레이크 위기)</th><td>"또 폴트하면 게임 끝난다"는 공포</td><td>"서비스 박스 중앙 넓은 타깃에 스핀 서브"</td><td>강하게 플랫으로 찍어 누르려는 도박</td></tr><tr><th scope="row">40-15 (여유 있는 상황)</th><td>"하나쯤 괜찮아" 방심 후 집중력 저하</td><td>"이전 서브 토스 높이만 똑같이 유지"</td><td>루틴 없이 무성의하게 공 던지기</td></tr><tr><th scope="row">타이브레이크 5-5</th><td>극도의 신체 긴장과 손 떨림</td><td>"깊은 날숨 쉬고 공 바운드 3회 고정"</td><td>서두르며 5초 만에 공 던지기</td></tr></tbody></table>
<p>실수는 누구나 합니다. 위대한 선수는 실수를 안 하는 선수가 아니라, 실수 직후 25초 안에 가장 빠르게 평정심을 되찾는 선수입니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA의 심리 코칭 안내서와 ITF Rule 29 규정을 참고했습니다. 이 루틴은 승률을 100% 보장하는 마법이 아니며, 긴장 상태에서 선수가 통제 가능한 행동에 집중하도록 돕는 훈련 도구입니다.</p>
<ul><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/green-light--yellow-light--routines-to-succeed-on-the-tennis-cou.html" target="_blank" rel="noopener noreferrer">USTA: Routines to Succeed on Court 가이드</a></li><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/how-to-stay-focused-during-a-match.html" target="_blank" rel="noopener noreferrer">USTA: How to Stay Focused 안내</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 29 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>더블폴트 후 복식 파트너에게 계속 사과하는 것이 좋은가요?</summary><p>과도한 사과는 파트너까지 부담스럽게 만들고 자신의 부정적 감정을 증폭시킵니다. 가볍게 라켓을 맞대며 "다음 공 집중할게요" 한 마디로 정리하고 곧바로 자신의 리셋 루틴에 들어가는 것이 팀에 훨씬 도움이 됩니다.</p></details>
<details><summary>25초 루틴을 지키다가 시간 지연 경고를 받을 수 있나요?</summary><p>ITF Rule 29 규정 내 25초는 충분한 시간입니다. 1~4단계를 진행하는 데 실제로 소요되는 시간은 약 15~18초이므로 규정 시간 위반 걱정 없이 안정적으로 마칠 수 있습니다.</p></details>
<details><summary>세컨드 서브가 계속 흔들릴 때는 기술적으로 무엇을 바꿔야 하나요?</summary><p>새로운 기술을 시도하지 말고, 토스 팔을 끝까지 펴는 동작과 스윙 스피드를 줄이지 않고 위로 올려치는 브러싱 스핀에만 집중하세요.</p></details>
</article>`,
      tags: [
        "더블폴트",
        "멘탈 루틴",
        "포인트 사이 리셋",
        "테니스 심리"
      ],
      summary: "더블폴트 직후에는 자책을 멈추고 ITF 25초 규정 안에서 '시선 격리 3초 → 깊은 날숨 → 현재 점수와 역할 확인 → 다음 구 프로세스 큐 하나'의 4단계로 멘탈을 리셋하세요. 과거의 실수 대신 다음 한 구의 행동에 집중하는 방법입니다.",
      highlight: "더블폴트 뒤에 오는 진짜 실점은 서브 실수가 아니라, 서둘러 다음 공을 던지는 조급함에서 발생합니다.",
      faq: [
        {
          question: "더블폴트 후 복식 파트너에게 계속 사과하는 것이 좋은가요?",
          answer: "과도한 사과는 파트너까지 부담스럽게 만들고 자신의 부정적 감정을 증폭시킵니다. 가볍게 라켓을 맞대며 \"다음 공 집중할게요\" 한 마디로 정리하고 곧바로 자신의 리셋 루틴에 들어가는 것이 팀에 훨씬 도움이 됩니다."
        },
        {
          question: "25초 루틴을 지키다가 시간 지연 경고를 받을 수 있나요?",
          answer: "ITF Rule 29 규정 내 25초는 충분한 시간입니다. 1~4단계를 진행하는 데 실제로 소요되는 시간은 약 15~18초이므로 규정 시간 위반 걱정 없이 안정적으로 마칠 수 있습니다."
        },
        {
          question: "세컨드 서브가 계속 흔들릴 때는 기술적으로 무엇을 바꿔야 하나요?",
          answer: "새로운 기술을 시도하지 말고, 토스 팔을 끝까지 펴는 동작과 스윙 스피드를 줄이지 않고 위로 올려치는 브러싱 스핀에만 집중하세요."
        }
      ]
    }
  },
  {
    route: "/blog/aw-077-serve-return",
    slug: "aw-077-serve-return",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    metadata: {
      slug: "aw-077-serve-return",
      title: "슬라이스 서브 궤적별 리턴 위치와 코스 대응",
      excerpt: "바깥으로 휘어져 나가는 슬라이스 서브를 뒤로 물러서지 않고 반 보 전진해 바운드 직후 서버 발밑으로 반환하는 리턴 위치와 블록 타법을 정리합니다.",
      category: "리턴 전략",
      tags: ["슬라이스 서브", "서브 리턴", "리턴 위치", "테니스 전술"],
      readTime: "9분"
    },
    body: {
      content: `<article>
<p class="article-summary">바깥쪽으로 휘어 나가는 슬라이스 서브는 뒤로 물러설수록 코트 밖으로 쫓겨납니다. 대각선 반 보 앞 전진 위치에서 바운드 직후 정점을 포착해 컴팩트 블록으로 서버 발밑을 공략하세요.</p>
<p>서브앤발리를 구사하거나 예리한 각도를 만드는 서버를 상대할 때 가장 까다로운 구질이 바로 옆으로 휘어지는 슬라이스 서브(Slice serve)입니다. 많은 동호인이 공의 회전 속도에 밀려 무의식중에 베이스라인 뒤로 두세 걸음 물러서곤 합니다. 하지만 슬라이스 서브는 바운드 후 시간이 지날수록 코트 바깥쪽으로 더 멀리 도망갑니다. 뒤로 물러나면 타점만 낮아지고 빈 코트를 상대에게 헌납하게 됩니다. <a href="/blog/aw-072-serve">서브 리턴 전략</a>이 일반적인 리턴을 다룬다면, 이 글은 슬라이스 서브의 물리적 궤적 특성과 사전 위치 선정, 바운드 직후 라이징 볼 대처법을 다룹니다.</p>
<h2>슬라이스 서브의 물리적 궤적과 흔한 착각</h2>
<p>미국테니스협회(USTA)의 서브 및 리턴 기술 매뉴얼에 따르면 슬라이스 서브는 측면 회전(Sidespin)이 걸려 날아옵니다. 오른손잡이 서버가 넣는 슬라이스 서브는 리시버 기준 왼쪽에서 오른쪽으로 꺾입니다. 즉 듀스 코트에서는 리시버의 포핸드 바깥쪽으로 휘어져 나가고, 애드 코트에서는 리시버의 몸 중심(백핸드 쪽)으로 파고듭니다. 왼손잡이(Lefty) 서버는 이 궤적이 정반대로 나타납니다.</p>
<p>가장 치명적인 실수는 '바운드된 후 공을 보고 따라 뛰는 것'입니다. 바운드 후 0.3초가 지나면 공은 이미 사이드라인 밖 1~2m 지점까지 벗어나며, 여기서 공을 치면 네트 지주(1.07m) 쪽을 넘겨야 해 에러가 급증합니다.</p>
<h2>사전 준비 위치와 전진 블록 메커니즘</h2>
<p>슬라이스 서브를 무력화하는 핵심 원리는 '각도가 벌어지기 전에 잘라먹는 것(Cut off the angle)'입니다.</p>
<ol>
<li><strong>사전 준비 위치 반 보 전진:</strong> 베이스라인 안쪽 또는 베이스라인 바로 위에 서서 준비합니다. 특히 상대가 듀스 코트에서 와이드 슬라이스를 자주 넣는다면, 기본 위치를 사이드라인 쪽으로 반 보 이동해 서 있어야 합니다.</li>
<li><strong>스플릿 스텝 후 대각선 앞 착지:</strong> 서버의 라켓이 공을 빗겨 치는 순간 스플릿 스텝을 하되, 발이 떨어지는 위치가 뒤가 아니라 '대각선 앞쪽 45도'여야 합니다.</li>
<li><strong>백스윙 절반 축소와 블록 타법:</strong> 날아오는 서브의 자체 스피드를 이용해야 합니다. 라켓을 어깨 뒤로 빼지 말고 테이크백을 절반으로 줄여 벽을 치듯 면을 대고 체중만 실어 밀어냅니다. 기본 타법은 <a href="/blog/oct26-block-return">블록 리턴 가이드</a>를 참고할 수 있습니다.</li>
<li><strong>서버 발밑 또는 센터 깊숙이 반환:</strong> 서브앤발리로 들어오는 서버의 무릎 아래 서비스 라인 부근이나, 각도를 좁히기 위해 네트 중앙 쪽으로 깊게 밀어 넣는 것이 안전합니다.</li>
</ol>
<h2>가상 사례: 물러서서 친 A vs 잘라먹은 B</h2>
<p>가상으로 듀스 코트에서 예리한 슬라이스 서브를 맞이한 A와 B의 대처를 봅시다. A는 평소보다 1m 뒤로 물러서서 리턴을 기다렸습니다. 공은 바운드 후 사이드 펜스 쪽으로 꺾였고, A는 간신히 라켓을 댔지만 역모션에 걸려 허공으로 공을 날렸습니다. 반면 B는 베이스라인 안쪽으로 반 보 들어가 준비했고, 공이 튀어 오르는 정점을 놓치지 않고 컴팩트한 블록으로 서버의 발밑에 깔아놓았습니다. 전진하던 서버는 수비적인 하프 발리를 할 수밖에 없었고, B가 손쉽게 패싱샷으로 포인트를 따냈습니다.</p>
<h2>조건별 판단표</h2>
<table><caption>서버 손잡이 및 코트별 슬라이스 서브 리턴 대응표</caption><thead><tr><th scope="col">서버 유형 / 코트</th><th scope="col">공의 바운드 궤적</th><th scope="col">리시버 준비 위치</th><th scope="col">추천 리턴 코스</th></tr></thead><tbody><tr><th scope="row">오른손잡이 / 듀스 코트</th><td>바깥쪽(와이드)으로 급격히 도망감</td><td>와이드 쪽으로 반 보 이동, 반 보 전진</td><td>서버 발밑 크로스 또는 센터 깊숙이</td></tr><tr><th scope="row">오른손잡이 / 애드 코트</th><td>몸쪽(바디 백핸드)으로 파고듬</td><td>중앙에서 반 보 바깥, 오픈 피벗 준비</td><td>네트 중앙 통과하는 안전한 푸시</td></tr><tr><th scope="row">왼손잡이 / 애드 코트</th><td>애드 코트 바깥쪽으로 휘어져 도망감</td><td>애드 사이드라인 쪽 반 보 전진</td><td>상대 백핸드 깊숙한 다운더라인/센터</td></tr></tbody></table>
<p>상대 슬라이스 서브의 위력이 강할수록 큰 스윙을 버리고 공의 궤적 앞에 단단한 벽을 세우는 감각이 리턴 성공률을 높여줍니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA의 왼손잡이 및 다양한 구질 서브 리턴 전략과 ITF 테니스 규칙의 리시버 위치 조항을 참조했습니다. 이 원리는 전술적 가이드이며 모든 서브를 위닝샷으로 연결한다는 의미는 아닙니다.</p>
<ul><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/improve-your-tennis-game--returning-a-lefty-serve.html" target="_blank" rel="noopener noreferrer">USTA: Returning a Lefty Serve 가이드</a></li><li><a href="https://www.usta.com/en/home/improve/tips-and-instruction/national/tennis-strategy--returning-first-and-second-serves.html" target="_blank" rel="noopener noreferrer">USTA: First and Second Serve Return 전략</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 8, 14–17 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>슬라이스 서브를 풀 스윙으로 맞받아치면 왜 자꾸 아웃되나요?</summary><p>슬라이스 서브는 옆 회전과 함께 낮게 깔리는 특성이 있습니다. 풀 스윙을 하면 타점이 늦어 라켓 면이 열리며 사이드라인 밖으로 날아가거나 네트에 직격하기 쉽습니다.</p></details>
<details><summary>왼손잡이 선수의 슬라이스 서브는 왜 특히 까다로운가요?</summary><p>동호인들이 평소 자주 겪는 오른손잡이 서브와 회전 방향이 정반대이기 때문입니다. 애드 코트에서 백핸드 바깥으로 도망가는 궤적에 익숙하지 않으므로 사전에 반 보 안쪽으로 들어서는 훈련이 필요합니다.</p></details>
<details><summary>슬라이스 서브가 바디로 올 때는 어떻게 해야 하나요?</summary><p>뒤로 물러나지 말고 뒷발을 대각선 뒤로 빼며 상체를 비트는 '오픈 피벗 스텝'으로 몸과 라켓 사이에 공간을 확보해 밀어내야 합니다.</p></details>
</article>`,
      tags: [
        "슬라이스 서브",
        "서브 리턴",
        "리턴 위치",
        "테니스 전술"
      ],
      summary: "바깥쪽으로 휘어 나가는 슬라이스 서브는 뒤로 물러설수록 코트 밖으로 쫓겨납니다. 대각선 반 보 앞 전진 위치에서 바운드 직후 정점을 포착해 컴팩트 블록으로 서버 발밑을 공략하세요.",
      highlight: "슬라이스 서브 리턴의 성공은 라켓 스윙이 아니라, 회전 각도가 벌어지기 전에 잘라먹는 전진 스텝에서 갈립니다.",
      faq: [
        {
          question: "슬라이스 서브를 풀 스윙으로 맞받아치면 왜 자꾸 아웃되나요?",
          answer: "슬라이스 서브는 옆 회전과 함께 낮게 깔리는 특성이 있습니다. 풀 스윙을 하면 타점이 늦어 라켓 면이 열리며 사이드라인 밖으로 날아가거나 네트에 직격하기 쉽습니다."
        },
        {
          question: "왼손잡이 선수의 슬라이스 서브는 왜 특히 까다로운가요?",
          answer: "동호인들이 평소 자주 겪는 오른손잡이 서브와 회전 방향이 정반대이기 때문입니다. 애드 코트에서 백핸드 바깥으로 도망가는 궤적에 익숙하지 않으므로 사전에 반 보 안쪽으로 들어서는 훈련이 필요합니다."
        },
        {
          question: "슬라이스 서브가 바디로 올 때는 어떻게 해야 하나요?",
          answer: "뒤로 물러나지 말고 뒷발을 대각선 뒤로 빼며 상체를 비트는 '오픈 피벗 스텝'으로 몸과 라켓 사이에 공간을 확보해 밀어내야 합니다."
        }
      ]
    }
  },
  {
    route: "/blog/aw-078-doubles-serve",
    slug: "aw-078-doubles-serve",
    contentSourceFile: "src/data/blog-content/part16-quality-rewrites.ts",
    metadataSourceFile: "src/data/blog-posts-part16-overrides.js",
    metadata: {
      slug: "aw-078-doubles-serve",
      title: "복식 서브 직후 서버의 첫 발 이동과 포지션 복귀",
      excerpt: "복식 서브 후 제자리에 멈추지 않고 서브 코스와 상대 리턴에 맞춰 전진 대시 또는 베이스라인 중앙 수비로 전환하는 서버의 첫 스텝을 정리합니다.",
      category: "복식 전술",
      tags: ["복식 서브", "서버 포지셔닝", "서브 후 첫발", "복식 전술"],
      readTime: "9분"
    },
    body: {
      content: `<article>
<p class="article-summary">복식 서브 후 제자리에 멈춰 서 있으면 가장 위험합니다. T존 서브 때는 반 보 전진 체중 이동, 와이드 서브나 세컨드 서브 때는 베이스라인 중앙으로 빠르게 복귀해 파트너의 비운 공간을 커버하세요.</p>
<p>동호회 복식 경기에서 가장 흔하게 나오는 실점 장면 중 하나는, 좋은 서브를 넣고도 서버가 베이스라인 뒤에 멍하니 서 있다가 상대 리시버의 크로스 깊은 샷에 역모션으로 꼼짝 못 하는 경우입니다. 서브는 공을 때리는 순간 끝나는 것이 아니라, 서브 후 첫 발을 어디로 디뎌 다음 3구 공격이나 수비 자세를 잡느냐까지가 하나의 완성된 동작입니다. <a href="/blog/aw-073-doubles-5">복식 포지션 5가지</a>가 코트 전체 배치를 다룬다면, 이 글은 복식 '서버' 본인의 서브 직후 첫 스텝과 전위 파트너와의 수비 호흡을 다룹니다.</p>
<h2>서브 직후 0.5초: 제자리에 멈추면 실점한다</h2>
<p>서브를 넣을 때 몸은 앞으로 자연스럽게 쏠립니다. 이때 뒷발이 앞으로 따라 들어오며 균형을 잡아야 하는데, 많은 동호인이 착지 후 제자리에 굳어버립니다. 상대 리시버가 공을 치는 순간 서버가 멈춰 서 있지 않고 올바른 수비 위치로 이동 중이어야만 다음 샷을 대비할 수 있습니다. 미국테니스협회(USTA) Warrior Doubles 및 넷 제너레이션 복식 지침에 따르면 서버의 포지셔닝은 서브의 성공 궤적과 파트너의 전진 위치에 따라 유기적으로 연동되어야 합니다.</p>
<h2>서브 코스별 서버의 첫 발 이동 기준</h2>
<p>서버가 넣은 공의 위치에 따라 첫 스텝의 방향이 완전히 달라집니다.</p>
<ol>
<li><strong>T존(센터) 퍼스트 서브 ➜ 전진 스플릿 스텝:</strong> 공이 T존으로 깊게 들어가면 상대 리시버는 각도를 내지 못하고 네트 중앙 쪽으로 약한 리턴을 보낼 확률이 큽니다. 서버는 착지 발을 코트 안쪽으로 내딛으며 1~2걸음 전진해 서비스라인 부근에서 스플릿 스텝을 밟고, 떠오르는 공을 하프발리나 드라이브로 공격할 준비를 합니다.</li>
<li><strong>와이드(코트 바깥) 서브 ➜ 사이드 스텝 베이스라인 복귀:</strong> 와이드로 빠진 리시버는 각도를 크게 열어 크로스로 깊게 찌를 수 있습니다. 이때 서버가 앞으로 들어가면 발밑이나 깊은 코너에 당합니다. 착지 즉시 베이스라인 안쪽으로 들어가지 말고, 뒤로 반 보 물러나며 코트 중앙 방향으로 사이드 스텝을 밟아 광활하게 열린 크로스 코트를 지켜야 합니다.</li>
<li><strong>세컨드 서브 ➜ 원업원백(One-up One-back) 수비 정렬:</strong> 세컨드 서브는 상대가 공격적으로 리턴할 위험이 높습니다. 무리하게 네트로 달려들지 말고 베이스라인 뒤쪽 1m 지점에서 안정적으로 자리를 잡고 상대의 첫 리턴을 받아쳐 랠리를 시작해야 합니다. 팀 이동 훈련은 <a href="/utility/doubles-positioning-simulator">복식 포지션 시뮬레이터</a>에서 시뮬레이션할 수 있습니다.</li>
</ol>
<h2>파트너 전위와의 사전 약속과 스위치 커버</h2>
<p>서브 전 파트너에게 서브 코스를 미리 알려주는 것은 필수입니다(예: 라켓을 등 뒤에 숨기고 손가락 신호나 작은 목소리로 "와이드", "T존" 전달). USTA Texas 브랜디 브라텍 코치의 조언에 따르면, 전위가 어디를 지켜야 할지 알 때 비로소 서버의 첫 발도 안전해집니다.</p>
<p>만약 전위 파트너가 리턴을 차단하기 위해 중앙으로 포칭을 시도했다면, 서버는 무조건 전위가 비워둔 사이드라인 쪽 뒷공간으로 크로스 이동해야 합니다. 이것이 복식의 기본인 '스위치 커버(Switch Cover)' 원칙입니다.</p>
<h2>가상 사례: 멍하니 서 있던 A vs 와이드 서브 후 복귀한 B</h2>
<p>가상으로 와이드 서브를 넣은 서버 A와 B를 비교해 봅시다. A는 서브가 잘 들어간 것에 만족하며 서비스 박스 뒤편에 멈춰 서서 공을 구경했습니다. 상대 리시버는 넓게 열린 A의 크로스 코너로 깊은 샷을 찔렀고, A는 뛰어가다 넘어지며 실점했습니다. 반면 B는 와이드 서브를 넣자마자 착지 발을 박차고 베이스라인 중앙 뒤쪽으로 사이드 스텝 2보를 이동했습니다. 상대가 날카로운 크로스 앵글 리턴을 날렸지만, 이미 길목을 지키고 있던 B는 여유 있게 포핸드 깊은 스트로크로 반격해 포인트를 가져왔습니다.</p>
<h2>조건별 판단표</h2>
<table><caption>복식 서브 코스별 서버의 첫 발 이동 및 파트너 커버 표</caption><thead><tr><th scope="col">서브 유형 및 코스</th><th scope="col">서버의 첫 발 이동</th><th scope="col">파트너 전위의 행동</th><th scope="col">다음 3구 대비</th></tr></thead><tbody><tr><th scope="row">T존 깊은 퍼스트</th><td>코트 안쪽으로 1~2보 전진 후 스플릿</td><td>적극적 센터 포칭 찬스 모색</td><td>전위 찬스볼 처리 또는 서버 전진 발리</td></tr><tr><th scope="row">와이드 퍼스트 서브</th><td>착지 후 베이스라인 중앙 쪽 사이드 스텝</td><td>다운더라인 직선 패싱 길목 차단</td><td>상대의 깊은 크로스 앵글 리턴 스트로크</td></tr><tr><th scope="row">불안정한 세컨드 서브</th><td>베이스라인 뒤 1m 지점 수비 위치 확보</td><td>네트에서 반 보 뒤로 물러나 수비 대비</td><td>상대의 공격적 리턴에 대비한 침착한 수비 랠리</td></tr><tr><th scope="row">전위 파트너 포칭 시</th><td>전위가 비운 사이드라인 뒤쪽으로 스위치</td><td>중앙으로 대각선 45도 점프 펀치 발리</td><td>상대 다운더라인 로브나 패싱 커버</td></tr></tbody></table>
<p>서브는 공이 라켓을 떠난 순간 끝나는 것이 아니라, 다음 공을 치기 위한 위치에 도달했을 때 비로소 완성됩니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA 복식 커리큘럼, USTA 넷 제너레이션 훈련 계획서 및 ITF Rule 5, 8, 14–17 규정을 참조했습니다. 이 가이드는 복식 기본 전술을 설명하며 특정 포지션이 모든 경기 상황의 승리를 보장하는 것은 아닙니다.</p>
<ul><li><a href="https://www.usta.com/content/dam/usta/pdfs/20180302_WoundedWarriorCurricula.pdf" target="_blank" rel="noopener noreferrer">USTA: Warrior Tennis All Positions Doubles (p.40)</a></li><li><a href="https://www.usta.com/en/home/stay-current/texas/ask-a-coach-brandi-bratek.html" target="_blank" rel="noopener noreferrer">USTA Texas: Ask a Coach 복식 파트너십 조언</a></li><li><a href="https://www.usta.com/content/dam/usta/content-fragments/tennis-service-center/assets/pdfs/Net-Generation-Practice-Plan-Yellow.pdf" target="_blank" rel="noopener noreferrer">USTA Net Generation: Yellow Ball Practice Plan</a></li><li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (서브 및 인플레이 규정)</a></li></ul>
<h2>자주 묻는 질문</h2>
<details><summary>동호인 복식에서도 첫 서브 후 무조건 서브앤발리로 들어가야 하나요?</summary><p>그렇지 않습니다. 서브의 속도와 스핀이 충분하지 않은 상태에서 무작정 네트로 들어가면 상대의 빠른 리턴에 발밑을 공격당하기 쉽습니다. T존으로 예리하게 들어갔을 때 선택적으로 시도하는 것이 안전합니다.</p></details>
<details><summary>서브 후 착지할 때 베이스라인을 밟으면 폴트인가요?</summary><p>임팩트 순간 발이 베이스라인을 밟거나 넘어가면 '풋폴트(Foot fault)'이지만, 임팩트가 끝난 직후 착지하면서 코트 안으로 들어가는 것은 완전히 정상적인 플레이입니다.</p></details>
<details><summary>와이드 서브 후 왜 중앙으로 돌아와야 하나요?</summary><p>서버가 와이드 서브를 넣은 후 사이드에 그대로 서 있으면, 코트 한가운데와 반대편 코너가 완전히 비게 됩니다. 상대의 가장 자연스러운 크로스 리턴 각도를 막기 위해 중앙으로 회복해야 합니다.</p></details>
</article>`,
      tags: [
        "복식 서브",
        "서버 포지셔닝",
        "서브 후 첫발",
        "복식 전술"
      ],
      summary: "복식 서브 후 제자리에 멈춰 서 있으면 가장 위험합니다. T존 서브 때는 반 보 전진 체중 이동, 와이드 서브나 세컨드 서브 때는 베이스라인 중앙으로 빠르게 복귀해 파트너의 비운 공간을 커버하세요.",
      highlight: "서브의 완성은 에이스가 아니라, 서브 직후 내가 어디로 첫 발을 디뎌 코트를 지키느냐에 달려 있습니다.",
      faq: [
        {
          question: "동호인 복식에서도 첫 서브 후 무조건 서브앤발리로 들어가야 하나요?",
          answer: "그렇지 않습니다. 서브의 속도와 스핀이 충분하지 않은 상태에서 무작정 네트로 들어가면 상대의 빠른 리턴에 발밑을 공격당하기 쉽습니다. T존으로 예리하게 들어갔을 때 선택적으로 시도하는 것이 안전합니다."
        },
        {
          question: "서브 후 착지할 때 베이스라인을 밟으면 폴트인가요?",
          answer: "임팩트 순간 발이 베이스라인을 밟거나 넘어가면 '풋폴트(Foot fault)'이지만, 임팩트가 끝난 직후 착지하면서 코트 안으로 들어가는 것은 완전히 정상적인 플레이입니다."
        },
        {
          question: "와이드 서브 후 왜 중앙으로 돌아와야 하나요?",
          answer: "서버가 와이드 서브를 넣은 후 사이드에 그대로 서 있으면, 코트 한가운데와 반대편 코너가 완전히 비게 됩니다. 상대의 가장 자연스러운 크로스 리턴 각도를 막기 위해 중앙으로 회복해야 합니다."
        }
      ]
    }
  }
];

const packet = {
  purpose: "candidate-scope-proposals-content90",
  createdAt: "2026-10-22T00:15:00Z",
  sourcePacket: {
    path: sourcePacketPath,
    sha256: sourcePacketSha
  },
  items
};

fs.writeFileSync(
  ".goal-harness/content-90-20261020/next-court-club-proposals.json",
  JSON.stringify(packet, null, 2) + "\n"
);
console.log("Successfully generated .goal-harness/content-90-20261020/next-court-club-proposals.json with 5 articles.");
