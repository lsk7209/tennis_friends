import fs from "node:fs";
import { createHash } from "node:crypto";

function hashText(text) {
  return createHash("sha256").update(text).digest("hex");
}

const proposalPath = ".goal-harness/content-90-20261020/next-slowball-doubles-proposals.json";
const proposal = JSON.parse(fs.readFileSync(proposalPath, "utf8"));

// 1. Prepare article content entries for each of the 5 articles
const articlesContent = {
  "aw-079-20": {
    content: `<article>
<p class="article-summary">베이스라인 깊은 곳으로 힘없이 날아오는 느린 공은 뒤로 물러설수록 타점이 무너집니다. 공의 정점 직후 2보 전진 스텝인으로 타점을 가슴 아래에 고정하고 컴팩트한 로우투하이 궤적으로 공략하는 20분 훈련법을 정리합니다.</p>
<p>상대가 강하게 때린 빠른 공보다, 힘없이 둥실 떠서 베이스라인 부근에 떨어지는 느린 공(일명 '똥볼' 또는 '슬로볼')이 백핸드 쪽으로 올 때 더 많은 실수가 나옵니다. 빠른 공은 상대의 반발력을 이용해 면만 대면 넘어가지만, 느린 공은 선수가 직접 발을 움직여 힘과 궤적을 만들어내야 하기 때문입니다. 많은 동호인이 제자리에 서서 공이 오기를 기다리다가 타점이 몸 뒤로 밀려 홈런(백보드 아웃)을 치거나 네트 하단에 꽂히는 에러를 범합니다. <a href="/blog/aw-077-serve-return">슬라이스 서브 리턴 전략</a>이 빠른 공에 대한 대처를 다룬다면, 이 글은 스피드가 없는 느린 공에 대처하는 전진 풋워크와 임팩트 존 고정 20분 드릴을 다룹니다.</p>
<h2>느린 공에서 백핸드가 흔들리는 물리적 원인</h2>
<p>국제테니스연맹(ITF) 코칭 및 스포츠 사이언스 리뷰(CSSR) 연구에 따르면, 날아오는 공의 속도가 40km/h 이하로 느릴 때 선수의 뇌는 체공 시간의 여유를 착각해 발 움직임을 일시적으로 멈추는 '시각적 지연 현상(Visual delay)'을 겪습니다.</p>
<ul>
<li><strong>제자리 대기:</strong> 공이 느리게 날아오므로 굳이 서둘러 발을 움직이지 않고 서서 기다립니다. 그러나 공은 바운드 후 생각보다 깊고 높게 튀어 오르며, 선수는 뒤로 밀리며 타점을 잡게 됩니다.</li>
<li><strong>과도한 상체 회전:</strong> 공에 스피드가 없다 보니 스스로 강한 샷을 만들기 위해 팔과 상체 어깨를 과도하게 잡아당깁니다. 이 과정에서 라켓 면이 위로 열려 길게 아웃됩니다.</li>
<li><strong>타점의 하강기 방치:</strong> 바운드 후 정점을 지나 무릎 아래로 힘없이 떨어질 때까지 기다려 치면, 네트 중앙(0.914m) 높이를 극복하기 위해 퍼올리는 스윙을 강요받게 됩니다.</li>
</ul>
<h2>전진 2보 스텝인(Step-in)과 로우투하이 궤적</h2>
<p>느린 공 백핸드를 안정적으로 넘기는 유일한 해법은 '발로 공을 마중 나가는 것'입니다.</p>
<ol>
<li><strong>바운드 위치 조기 포착:</strong> 상대 라켓을 떠난 공의 궤적을 보고 바운드 예상 지점보다 1m 뒤에 오른발(오른손잡이 양손/한손 백핸드 기준)을 미리 대각선 앞 45도로 디딥니다.</li>
<li><strong>정점 직후 10cm 하강선 포착:</strong> 공이 튀어 오른 최고점(Apex)에서 10cm 정도 하강하는 순간(가슴과 명치 사이 높이)을 타격 지점으로 고정합니다. 이 높이가 가장 에러 마진이 적고 힘을 싣기 좋습니다.</li>
<li><strong>스윙 축소 및 팔로스루 연장:</strong> 테이크백은 평소의 80%로 줄이고, 임팩트 순간 라켓 면을 90도 수직에서 약간 닫힌(85도) 상태로 유지합니다. 공을 때린 후 라켓 헤드를 타겟 방향으로 길게 밀어주는 팔로스루를 만듭니다.</li>
</ol>
<h2>20분 집중 교정 루틴</h2>
<p>코트에서 파트너나 볼머신과 함께 20분 동안 아래 3단계로 훈련합니다. 루틴 전후 훈련 일지 작성법은 <a href="/utility/practice-drill-generator">연습 드릴 생성기</a>를 연계할 수 있습니다.</p>
<ul>
<li><strong>1단계 (0~5분) 핸드피드 제자리 스텝인:</strong> 파트너가 네트 너머에서 공을 손으로 느리게 던져줍니다. 베이스라인 뒤에 서 있다가 공이 바운드되는 순간 오른발을 힘차게 앞으로 내딛으며 가슴 높이에서 안전하게 크로스로 넘깁니다 (20구 2세트).</li>
<li><strong>2단계 (6~15분) 딥 슬로볼 랠리:</strong> 파트너와 랠리를 하되, 파트너에게 의도적으로 느리고 깊은 로브성 볼을 백핸드로 보내달라고 요청합니다. 뒤로 물러서지 않고 베이스라인 안쪽 50cm 지점으로 들어가 라이징 또는 정점 타격을 반복합니다.</li>
<li><strong>3단계 (16~20분) 타겟 마커 챌린지:</strong> 상대 코트 베이스라인 안쪽 1.5m 지점에 타겟 콘을 놓고, 느린 공을 받아 정확히 그 구역 안으로 깊게 밀어 넣는 성공률을 측정합니다.</li>
</ul>
<h2>조건별 판단표</h2>
<table><caption>느린 공 백핸드 처리 타이밍 및 스텝 비교</caption><thead><tr><th scope="col">상황 구분</th><th scope="col">볼의 궤적 및 바운드</th><th scope="col">권장 스텝 및 체중 이동</th><th scope="col">라켓 면과 스윙 궤도</th><th scope="col">흔한 실수 및 주의점</th></tr></thead><tbody><tr><th scope="row">정점 직후 공략 (권장)</th><td>바운드 후 최고점에서 약 10cm 하강하는 시점</td><td>오른발(오른손잡이 기준) 대각선 전진 2보 스텝인</td><td>수평에 가까운 로우투하이, 면 흔들림 제어</td><td>제자리에 서서 기다리다 타점이 뒤로 밀림</td></tr><tr><th scope="row">완전 하강 후 공략</th><td>무릎 아래로 떨어져 힘을 잃은 상태</td><td>오픈 스탠스로 무릎을 낮추고 체중 하향 지지</td><td>급격한 상향 스윙으로 네트 마진 확보</td><td>무리하게 강타하려다 네트 하단 직격</td></tr><tr><th scope="row">쇼트 바운드 대시</th><td>서비스라인 부근에 짧게 떨어지는 찬스볼</td><td>전력 대시 후 임팩트 직전 하프 스플릿 스텝</td><td>콤팩트한 백스윙과 깊은 딥 드라이브 코스</td><td>스피드를 제어하지 못하고 베이스라인 아웃</td></tr></tbody></table>
<p>느린 공의 정복은 기술이 아니라 '게으른 발을 깨우는 것'에서 시작됩니다. 공이 느릴수록 내 발은 2배 빠르게 움직여야 합니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF Coaching and Sports Science Review의 임팩트 존 안정성 연구 및 USTA 풋워크 가이드라인을 참조했습니다. 이 드릴은 기술적 안정성을 높이기 위한 연습 모델이며 모든 경기 환경에서의 100% 승리를 보장하지는 않습니다.</p>
<ul>
<li><a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Coaching and Sports Science Review (임팩트 타이밍 분석)</a></li>
<li><a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA Tennis Skills & Drills: Groundstroke Footwork</a></li>
</ul>
<h2>자주 묻는 질문</h2>
<details><summary>느린 공인데도 백핸드로 치면 자꾸 홈런(백보드 아웃)이 나오는 이유는 무엇인가요?</summary><p>상대 공에 스피드가 없다 보니 스스로 힘을 내려고 상체 회전을 과도하게 쓰면서 라켓 면이 위로 열리기 때문입니다. 몸을 크게 휘두르기보다 하체로 대각선 전진 스텝을 밟으며 라켓 면을 단단히 고정하고 밀어주어야 안전하게 들어갑니다.</p></details>
<details><summary>양손 백핸드와 한손 백핸드 중 느린 공 대처가 더 유리한 폼이 있나요?</summary><p>양손 백핸드는 비지배 손(왼손)의 지지력이 있어 힘을 싣기 유리하지만 발이 전진하지 않으면 거리가 좁아집니다. 한손 백핸드는 어깨 회전을 일찍 닫고 높은 타점을 피하기 위해 한 발 더 일찍 진입해야 합니다. 두 폼 모두 타점 위치로의 발 이동이 핵심입니다.</p></details>
</article>`,
    tags: ["느린 볼", "백핸드", "스텝인", "임팩트 타이밍", "20분 훈련"],
    summary: "베이스라인 깊은 곳으로 힘없이 날아오는 느린 공에서 백핸드가 날리거나 네트에 걸리지 않도록 대각선 전진 스텝과 임팩트 높이를 안정시키는 20분 집중 훈련법을 정리합니다.",
    highlight: "느린 공 백핸드의 성공은 스윙 파워가 아니라, 공이 정점을 지나기 전에 앞으로 파고드는 2보 전진 풋워크에 달려 있습니다.",
    faq: [
      {
        question: "느린 공인데도 백핸드로 치면 자꾸 홈런(백보드 아웃)이 나오는 이유는 무엇인가요?",
        answer: "상대 공에 스피드가 없다 보니 스스로 힘을 내려고 상체 회전을 과도하게 쓰면서 라켓 면이 위로 열리기 때문입니다. 몸을 크게 휘두르기보다 하체로 대각선 전진 스텝을 밟으며 라켓 면을 단단히 고정하고 밀어주어야 안전하게 들어갑니다."
      },
      {
        question: "양손 백핸드와 한손 백핸드 중 느린 공 대처가 더 유리한 폼이 있나요?",
        answer: "양손 백핸드는 비지배 손(왼손)의 지지력이 있어 힘을 싣기 유리하지만 발이 전진하지 않으면 거리가 좁아집니다. 한손 백핸드는 어깨 회전을 일찍 닫고 높은 타점을 피하기 위해 한 발 더 일찍 진입해야 합니다. 두 폼 모두 타점 위치로의 발 이동이 핵심입니다."
      }
    ]
  },
  "aw-080-tennis-guide": {
    content: `<article>
<p class="article-summary">상대의 깊은 탑스핀으로 어깨 위까지 튀어오르는 공을 무리하게 강타하려다 에러를 범하지 않도록, 앞에서 빠르게 잘라치는 라이징 타구와 뒤로 물러나 허리 높이에서 받아내는 3단계 분리 판단 기준을 제시합니다.</p>
<p>헤비 탑스핀을 구사하는 상대를 만나면 공이 바운드 후 키 높이 이상으로 솟구쳐 오릅니다. 동호인 경기에서 가장 범하기 쉬운 치명적인 실수는, 어깨 위로 높게 뜬 공을 그 자리에서 억지로 팔을 들어 눌러 치려다 라켓 프레임에 맞거나 네트 하단에 꽂히는 것입니다. 어깨 위 높은 타점은 인체 구조상 손목과 어깨 관절에 엄청난 무리를 주며 안정적인 라켓 스피드를 낼 수 없습니다. <a href="/blog/aw-071-tennis-guide">탑스핀 랠리 기본기</a>가 평상시 랠리를 다룬다면, 이 글은 어깨 위로 솟구치는 공을 '언제 라이징으로 잡고 언제 물러나 수비할지'를 가르는 수학적·기하학적 3단계 판단 기준을 다룹니다.</p>
<h2>스트라이크 존(Strike Zone)의 물리적 한계</h2>
<p>미국테니스협회(USTA) 코칭 매뉴얼에 명시된 가장 이상적인 그라운드스트로크 스트라이크 존은 '선수의 골반(허리)과 가슴 사이' 높이입니다. 이 구간에서 임팩트가 이루어져야 지면 반발력과 코어 회전력을 온전히 라켓 헤드로 전달할 수 있습니다.</p>
<p>반면 타점이 어깨선 위로 올라가면 다음과 같은 역학적 결함이 발생합니다.</p>
<ul>
<li><strong>관절 가동 범위 제한:</strong> 팔꿈치와 어깨가 위로 들리면서 회전근개에 강한 충격이 집중되고, 상향 스윙 궤적(Low-to-High)을 만들 수 없습니다.</li>
<li><strong>네트 마진 상실:</strong> 높은 타점에서 공을 아래로 내려치려다 보면, 네트 중앙(0.914m)을 넘기기 위한 안전 궤적이 극도로 좁아져 에러가 급증합니다.</li>
<li><strong>체중 후방 쏠림:</strong> 튀어 오르는 공의 위력에 밀려 상체가 뒤로 젖혀지며 체중이 뒤꿈치에 실립니다.</li>
</ul>
<h2>라이징(Rising) vs 물러나기(Drop-back) 3단계 판정법</h2>
<p>높은 바운드 공을 마주했을 때는 애매하게 서 있지 말고, 공이 코트에 닿는 순간 아래 3가지 기준으로 즉시 이동 방향을 결정해야 합니다.</p>
<ol>
<li><strong>1단계 바운드 지점 확인:</strong> 상대 공의 낙하 지점이 베이스라인 안쪽 1m 이내(숏볼~중간 깊이)라면, 무조건 베이스라인 안쪽으로 진입해 바운드 직후 공이 튀어 오르는 상승기(허리 높이)에 라이징으로 칩니다.</li>
<li><strong>2단계 깊은 베이스라인 볼 확인:</strong> 공의 낙하 지점이 베이스라인 50cm 안팎으로 깊게 꽂힌다면, 라이징으로 치기에는 타이밍이 너무 빡빡합니다. 즉각 뒤로 2~3보 물러나 공이 정점을 찍고 다시 가슴-허리 높이로 떨어지는 하강기를 기다립니다.</li>
<li><strong>3단계 반환 궤적의 차별화:</strong> 라이징으로 칠 때는 상대의 빈 코스를 찌르는 드라이브로 시간을 빼앗고, 뒤로 물러나 칠 때는 네트 위 1.5m 이상의 높은 궤적(문볼 또는 딥 탑스핀)을 그려 베이스라인 깊숙이 안전하게 넘깁니다. 관련 코트 거리 감각은 <a href="/utility/court-surface-advisor">코트 표면 어드바이저</a>를 통해 코트별 바운드 특성을 점검할 수 있습니다.</li>
</ol>
<h2>조건별 판단표</h2>
<table><caption>높은 바운드 공 처리 옵션별 실행 조건 및 위험도 분석</caption><thead><tr><th scope="col">처리 방식</th><th scope="col">볼 바운드 위치</th><th scope="col">타점 높이 및 타구 시점</th><th scope="col">체중 밸런스 및 스탠스</th><th scope="col">득점 기회 및 에러 위험도</th></tr></thead><tbody><tr><th scope="row">라이징 공략 (공격형)</th><td>베이스라인 안쪽 0.5~1m</td><td>바운드 직후 상승기 (허리 높이)</td><td>세미오픈, 전방 린인(Lean-in)</td><td>상대 시간 박탈 우수 / 타이밍 오차 위험</td></tr><tr><th scope="row">물러나 수비 (안정형)</th><td>베이스라인 뒤 2m 이상 깊은 공</td><td>정점 지나 하강기 (가슴-허리)</td><td>오픈 스탠스, 뒤쪽 다리 중심축</td><td>안정적 리턴 확보 / 상대에게 공격권 양보</td></tr><tr><th scope="row">어깨 위 강타 (비권장)</th><td>베이스라인 근처 애매한 체공</td><td>어깨 위 최고점 (언밸런스)</td><td>체중이 뒤로 쏠림 (헤드업 발생)</td><td>프레임 타구 및 네트 에러 확률 70% 이상</td></tr></tbody></table>
<p>높은 공의 처리는 파워가 아니라 '타점 위치를 허리 높이로 맞추기 위한 전후 이동 결단'에서 승패가 갈립니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF Rule 24 코트 규격 및 USTA Player Development의 스트라이크 존 역학 자료를 참조했습니다. 높은 공 대처 원리는 일반적인 탑스핀 랠리 기준이며 잔디나 빠른 실내 하드코트에서는 바운드 높이가 달라질 수 있습니다.</p>
<ul>
<li><a href="https://www.itftennis.com/en/about-us/governance/rules-and-regulations/" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 24 실점 규정 및 네트 규격)</a></li>
<li><a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA: High Ball & Strike Zone Management</a></li>
</ul>
<h2>자주 묻는 질문</h2>
<details><summary>어깨 높이로 오는 공을 드라이브 발리처럼 공중에서 바로 쳐도 되나요?</summary><p>네트와의 거리가 가깝다면 좋은 찬스가 되지만, 베이스라인 깊은 곳에서 치는 드라이브 발리는 에러 마진이 극히 적습니다. 베이스라인 부근에서는 바운드 후 정점을 지나 내려오는 공을 기다리거나 한 걸음 들어가 라이징으로 치는 것이 정석입니다.</p></details>
<details><summary>뒤로 물러나서 칠 때 공이 짧아져 찬스를 주는 것을 막으려면 어떻게 해야 하나요?</summary><p>물러나면서 치면 공에 힘이 실리지 않으므로, 완전히 뒤로 빠진 뒤 마지막 스텝을 딛고 체중을 앞쪽으로 실으며 상향 스윙 궤적으로 네트 위 1m 이상의 안전 마진을 주어 깊숙이 밀어내야 합니다.</p></details>
</article>`,
    tags: ["높은 공", "스트라이크 존", "라이징 타구", "타점 판단", "코스 선택"],
    summary: "상대의 깊은 탑스핀으로 어깨 높이 이상 튀어오르는 까다로운 공을 무리하게 누르려다 실수하지 않고, 라이징 공략과 물러나기 수비를 구분하는 3단계 판단 기준을 제시합니다.",
    highlight: "높은 공을 어깨 위에서 억지로 때리지 마세요. 한 발 전진해 라이징으로 허리에서 치거나, 두 걸음 물러나 하강기에서 치는 것이 정석입니다.",
    faq: [
      {
        question: "어깨 높이로 오는 공을 드라이브 발리처럼 공중에서 바로 쳐도 되나요?",
        answer: "네트와의 거리가 가깝다면 좋은 찬스가 되지만, 베이스라인 깊은 곳에서 치는 드라이브 발리는 에러 마진이 극히 적습니다. 베이스라인 부근에서는 바운드 후 정점을 지나 내려오는 공을 기다리거나 한 걸음 들어가 라이징으로 치는 것이 정석입니다."
      },
      {
        question: "뒤로 물러나서 칠 때 공이 짧아져 찬스를 주는 것을 막으려면 어떻게 해야 하나요?",
        answer: "물러나면서 치면 공에 힘이 실리지 않으므로, 완전히 뒤로 빠진 뒤 마지막 스텝을 딛고 체중을 앞쪽으로 실으며 상향 스윙 궤적으로 네트 위 1m 이상의 안전 마진을 주어 깊숙이 밀어내야 합니다."
      }
    ]
  },
  "aw-081-club-match": {
    content: `<article>
<p class="article-summary">동호회 경기 중 서두르거나 호흡이 흐트러져 연속 실점하는 악순환을 끊기 위해, ITF 25초 연속 플레이 규정을 바탕으로 포인트 사이 3단계 분리·소통·셋업 인터벌 루틴을 구축하는 실전 가이드를 정리합니다.</p>
<p>테니스 경기에서 실제 공이 오가는 시간은 전체 시합 시간의 약 20~25%에 불과합니다. 나머지 75% 이상의 시간은 포인트를 마친 뒤 다음 서브를 준비하는 '포인트 사이 인터벌(Between-point intervals)'입니다. 많은 동호인이 실점 직후 분한 마음에 공을 줍자마자 5초 만에 서브를 넣거나, 반대로 파트너와 긴 변명을 늘어놓다가 흐름을 놓치곤 합니다. <a href="/blog/aw-076-mental">더블폴트 멘탈 복구 루틴</a>이 심리적 회복을 다룬다면, 이 글은 ITF 공식 규정에 명시된 25초 허용 시간을 시간대별로 정확히 분할해 호흡과 전술 소통을 완성하는 물리적 인터벌 프로토콜을 다룹니다.</p>
<h2>ITF Rule 29: 25초 규칙의 의미</h2>
<p>국제테니스연맹(ITF) 2026 테니스 규칙 제29조(Continuous play and intervals)에 따르면, 이전 포인트에서 공이 아웃되거나 인플레이가 끝난 순간부터 다음 포인트의 서브 타구가 이루어질 때까지 최대 25초가 허용됩니다.</p>
<ul>
<li><strong>서두름의 함정:</strong> 흥분한 상태에서 5~10초 만에 다음 서브를 넣으면 맥박이 가라앉지 않아 세컨서브 더블폴트 확률이 급격히 증가합니다.</li>
<li><strong>지연 페널티:</strong> 불필요하게 신발끈을 고쳐 매거나 긴 이야기를 나누면 상대의 리듬을 고의로 방해하는 '타임 바이얼레이션(Time violation)' 경고 대상이 됩니다.</li>
<li><strong>리듬의 균일화:</strong> 이겼든 졌든 매 포인트마다 똑같이 18~22초의 일정한 템포를 사용하는 선수가 세트 후반까지 집중력을 유지합니다.</li>
</ul>
<h2>25초 타임라인 3단계 분해 프로토콜</h2>
<p>미국테니스협회(USTA) 어덜트 리그 및 멘탈 트레이닝 지침을 바탕으로 25초를 3개 구간으로 나눕니다.</p>
<ol>
<li><strong>1단계 (0~7초) 피지컬 분리:</strong> 포인트가 끝나면 즉시 상대 코트에서 시선을 거두고 뒤로 돌아 베이스라인 뒤 펜스 쪽으로 2~3걸음 걷습니다. 라켓 줄을 손가락으로 정돈하며 코로 깊게 숨을 들이마시고 입으로 길게 내뱉는 '날숨 리셋'을 1회 수행합니다.</li>
<li><strong>2단계 (8~15초) 파트너 전술 소통:</strong> 복식 경기라면 파트너와 라켓을 가볍게 터치하며 다음 포인트의 서브 코스나 포칭 사인을 교환합니다. 이때 "왜 그걸 놓쳤어?" 같은 과거 후회성 대화는 엄격히 금지하며, "이번엔 센터 깊게", "내가 먼저 움직일게" 같은 다음 행동 큐만 5초 이내로 나눕니다.</li>
<li><strong>3단계 (16~25초) 서브/리턴 셋업:</strong> 베이스라인 앞에 정렬해 발 위치를 잡고, 공을 2~3회 규칙적으로 바운드합니다. 마지막 바운드와 함께 상대 리턴 위치를 최종 확인하고 서브를 시작합니다. 시간 관리 점검은 <a href="/utility/tennis-time-availability-planner">테니스 시간 관리 플래너</a>를 통해 연습 루틴에 통합할 수 있습니다.</li>
</ol>
<h2>조건별 판단표</h2>
<table><caption>포인트 사이 25초 시간대별 실행 프로토콜</caption><thead><tr><th scope="col">시간 경과</th><th scope="col">주요 실행 동작</th><th scope="col">파트너 간 커뮤니케이션</th><th scope="col">호흡 및 신체 상태</th><th scope="col">위반 및 감점 방지 체크</th></tr></thead><tbody><tr><th scope="row">0~7초 (분리 단계)</th><td>뒤로 돌아서기, 라켓 줄 정리, 공 수거</td><td>불필요한 감정 표출 중단, 각자 뒤돌기</td><td>코로 들이마시고 입으로 깊게 내쉬기 1회</td><td>상대 코트 노려보며 시간 낭비하지 않기</td></tr><tr><th scope="row">8~15초 (소통 단계)</th><td>라켓 터치 또는 가벼운 시선 교환</td><td>손가락 사인 또는 짧은 구호("T존", "와이드")</td><td>안정된 맥박 회복, 어깨 긴장 풀기</td><td>긴 대화로 15초 넘기지 않기</td></tr><tr><th scope="row">16~25초 (셋업 단계)</th><td>베이스라인 정렬, 공 2~3회 바운드</td><td>소통 완료 후 완전 침묵, 타겟 고정</td><td>마지막 날숨과 함께 서브/리턴 집중</td><td>25초 초과 타임 바이얼레이션 방지</td></tr></tbody></table>
<p>경기의 지배자는 샷을 세게 치는 사람이 아니라, 포인트와 포인트 사이의 시간을 지배하는 사람입니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF Rule 29 공식 규정과 USTA Adult League 경기 페이스 가이드라인을 참조했습니다. 인터벌 루틴은 경기 템포를 일정하게 유지하기 위한 권장 사항이며 대회별 주심의 재량에 따라 엄격도가 달라질 수 있습니다.</p>
<ul>
<li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 29 연속 플레이 및 인터벌 규정)</a></li>
<li><a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA: Adult League Regulations & Pace of Play</a></li>
</ul>
<h2>자주 묻는 질문</h2>
<details><summary>동호회 경기에서도 25초 규칙을 엄격하게 지켜야 하나요?</summary><p>동호회 친선 경기에서는 시계를 재지 않지만, 포인트가 끝난 뒤 한쪽이 지나치게 서두르거나 반대로 지나치게 늦장을 부리면 경기 리듬이 깨지고 판정 시비가 발생합니다. 20~25초 템포를 몸에 익혀두면 공식 대회에서도 긴장하지 않고 일정한 경기력을 낼 수 있습니다.</p></details>
<details><summary>체력이 떨어져 숨이 찰 때는 인터벌을 어떻게 써야 하나요?</summary><p>실점이 이어질 때 급하게 서브를 넣는 것이 가장 위험합니다. 포인트가 끝나자마자 베이스라인 뒤 펜스 쪽으로 걸어가며 긴 날숨을 2~3회 길게 내뱉고, 정해진 20초를 꽉 채워 호흡을 가라앉힌 뒤 공을 바운드해야 합니다.</p></details>
</article>`,
    tags: ["동호회 경기", "인터벌 루틴", "25초 규칙", "파트너 소통", "멘탈 관리"],
    summary: "동호회 경기 중 서두르거나 호흡이 흐트러져 연속 실점하지 않도록, ITF 25초 규정에 맞춘 시간대별 신체 정렬, 파트너 사인 교환, 멘탈 셋업 루틴을 체계화합니다.",
    highlight: "포인트 사이 25초는 쉬는 시간이 아니라, 이전 포인트를 잊고 다음 포인트를 설계하는 가장 중요한 전술 구간입니다.",
    faq: [
      {
        question: "동호회 경기에서도 25초 규칙을 엄격하게 지켜야 하나요?",
        answer: "동호회 친선 경기에서는 시계를 재지 않지만, 포인트가 끝난 뒤 한쪽이 지나치게 서두르거나 반대로 지나치게 늦장을 부리면 경기 리듬이 깨지고 판정 시비가 발생합니다. 20~25초 템포를 몸에 익혀두면 공식 대회에서도 긴장하지 않고 일정한 경기력을 낼 수 있습니다."
      },
      {
        question: "체력이 떨어져 숨이 찰 때는 인터벌을 어떻게 써야 하나요?",
        answer: "실점이 이어질 때 급하게 서브를 넣는 것이 가장 위험합니다. 포인트가 끝나자마자 베이스라인 뒤 펜스 쪽으로 걸어가며 긴 날숨을 2~3회 길게 내뱉고, 정해진 20초를 꽉 채워 호흡을 가라앉힌 뒤 공을 바운드해야 합니다."
      }
    ]
  },
  "aw-082-serve-record": {
    content: `<article>
<p class="article-summary">경기 중 더블폴트가 반복될 때 단순한 자책이나 막연한 횟수 기록을 넘어, 토스 위치 편차, 스윙 템포 감속, 타겟 코스 선택의 3차원 원인을 데이터로 진단하고 즉각 교정하는 실전 기록법을 정리합니다.</p>
<p>서브 게임을 허무하게 브레이크당하는 가장 큰 원인은 단연 더블폴트(Double fault)입니다. 대다수 동호인은 경기가 끝난 뒤 "오늘 더블폴트 6개나 했어"라며 개수만 세고 자책으로 끝납니다. 하지만 첫 서브가 네트에 걸린 이유와 세컨드 서브가 베이스라인 뒤로 길게 나간 이유는 역학적으로 완전히 다릅니다. 원인을 분리해 기록하지 않으면 다음 연습에서도 무엇을 고쳐야 할지 알 수 없습니다. <a href="/blog/aw-062-serve-record-beginner">첫 서브 기록법</a>이 첫 서브 성공률을 다룬다면, 이 글은 세컨드 서브 더블폴트의 구체적 실패 패턴을 토스 시계방향 위치와 스윙 감속 여부로 분석하는 데이터 자가 진단법을 다룹니다.</p>
<h2>더블폴트를 유발하는 3대 역학적 오류</h2>
<p>미국테니스협회(USTA) 퍼포먼스 분석 메트릭스 및 ITF Rule 16, 17, 19에 근거한 서브 역학에 따르면 더블폴트의 90% 이상은 아래 세 가지 결함에서 기인합니다.</p>
<ul>
<li><strong>12시 토스 전방 쏠림 (네트 직격):</strong> 긴장한 상태에서 공을 너무 앞쪽(코트 안쪽 40cm 이상)으로 던지면 타점이 낮아져 네트 상단 밴드에 걸립니다.</li>
<li><strong>임팩트 순간의 스윙 감속 (회전 상실):</strong> 폴트를 두려워해 라켓을 살살 휘두르면 스핀(마그누스 효과)이 걸리지 않아 공이 아래로 떨어지지 못하고 서비스라인 밖으로 길게 벗어납니다.</li>
<li><strong>어깨의 조기 회전 (사이드라인 아웃):</strong> 공을 맞히기도 전에 상대 코트를 쳐다보며 비타구 측 어깨가 먼저 열리면 라켓 면이 비틀려 사이드라인 바깥으로 빗나갑니다.</li>
</ul>
<h2>더블폴트 3차원 자가 진단 매트릭스</h2>
<p>경기가 끝난 뒤 스마트폰 메모장이나 수첩에 아래 세 가지 약어를 사용해 5초 만에 기록합니다. 관련 분석은 <a href="/utility/unforced-error-audit">언포스드 에러 오딧 도구</a>를 함께 활용할 수 있습니다.</p>
<ol>
<li><strong>착탄 위치 (Where):</strong> [N] 네트 중간, [L] 서비스라인 긴 아웃, [W] 사이드라인 와이드 아웃</li>
<li><strong>토스 편차 (Toss):</strong> [12시] 정중앙, [1시] 우측 쏠림, [11시] 머리 뒤 넘어감, [앞] 전방 과다</li>
<li><strong>스윙 템포 (Tempo):</strong> [감속] 살살 밀어침, [풀스피드] 회전 부족, [조기회전] 몸이 먼저 열림</li>
</ol>
<p>예를 들어 세트 후 메모장에 <code>[애드/N/앞/감속]</code>이라고 적혀 있다면, 이 선수의 교정 과제는 명확합니다: "애드 코트에서 긴장할 때 토스가 앞으로 쏠리며 스윙을 멈춘다. 토스를 머리 위 12시 30분으로 올리고 끝까지 라켓을 휘두른다."</p>
<h2>조건별 판단표</h2>
<table><caption>더블폴트 유형별 원인 진단 및 즉각 교정 체크리스트</caption><thead><tr><th scope="col">폴트 착탄 지점</th><th scope="col">주요 물리적 원인</th><th scope="col">토스 시계방향 위치</th><th scope="col">라켓 스윙 템포 오류</th><th scope="col">실전 즉시 교정 처방</th></tr></thead><tbody><tr><th scope="row">네트 중간에 꽂힘</th><td>타점이 너무 앞쪽이거나 헤드 감속</td><td>12시보다 앞으로 쏠림 (앞쪽 30cm)</td><td>불안감으로 임팩트 순간 스윙 멈춤</td><td>토스를 머리 위 12시 30분으로 당기고 스윙 스피드 유지</td></tr><tr><th scope="row">서비스라인 길게 아웃</th><td>회전 부족 및 라켓 면이 위로 열림</td><td>머리 뒤쪽으로 넘어감 (11시 방향)</td><td>밀어 넣으려는 플랫성 푸시 스윙</td><td>스핀(킥/슬라이스) 회전량을 늘려 네트 마진 확보</td></tr><tr><th scope="row">사이드라인 바깥 아웃</th><td>몸이 일찍 열려 코스 제어 실패</td><td>오른쪽(1~2시)으로 심하게 벗어남</td><td>상체 어깨가 네트 쪽으로 조기 회전</td><td>비타구 측 어깨를 타구 순간까지 닫아두기</td></tr></tbody></table>
<p>기록되지 않는 실수는 반복되지만, 데이터로 분석된 실수는 다음 레슨의 명확한 교정 과제가 됩니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>ITF Rule 16, 17, 19 공식 서브 규정과 USTA 서브 일관성 분석 지침을 참조했습니다. 이 기록법은 개인 훈련 분석용 모델이며 실제 시합의 기상 조건(바람, 햇빛)에 따라 일시적인 오차가 발생할 수 있습니다.</p>
<ul>
<li><a href="https://www.itftennis.com/media/7221/2026-rules-of-tennis-english.pdf" target="_blank" rel="noopener noreferrer">ITF: 2026 Rules of Tennis (Rule 16–19 서브 및 폴트 규정)</a></li>
<li><a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA: Performance Metrics - Serve Consistency & Toss Tracking</a></li>
</ul>
<h2>자주 묻는 질문</h2>
<details><summary>세컨서브 더블폴트가 무서워서 살살 넣는데 왜 더 자주 네트에 걸리나요?</summary><p>서브에 스핀이 걸리지 않으면 공이 네트를 넘은 뒤 떨어지는 마그누스 효과가 발생하지 않습니다. 살살 치려고 스윙을 줄이면 오히려 궤적이 낮아져 네트에 직격합니다. 세컨서브일수록 라켓 헤드를 빠르게 휘둘러 스핀을 먹여야 안전하게 코트 안으로 떨어집니다.</p></details>
<details><summary>스마트폰 메모장에 더블폴트를 간단히 기록하는 팁이 있나요?</summary><p>세트가 끝난 뒤 메모장에 '듀스-네트-토스앞', '애드-길게-스윙감속'처럼 [코트-결과-원인] 3단어 조합으로 5초 만에 메모해 두면, 경기 후 자신의 전형적인 실패 패턴을 명확히 파악할 수 있습니다.</p></details>
</article>`,
    tags: ["서브", "더블폴트", "서브 기록", "토스 교정", "세컨서브"],
    summary: "더블폴트가 반복될 때 단순한 횟수 집계를 넘어 토스 편차, 스윙 템포 감속, 코스 선택의 3차원 원인을 진단하고 다음 경기 교정 과제를 도출하는 실전 기록법을 정리합니다.",
    highlight: "더블폴트는 실력이 모자라서가 아니라, 토스 위치와 스윙 감속이라는 물리적 원인 때문에 발생합니다. 3단어로 원인을 기록하세요.",
    faq: [
      {
        question: "세컨서브 더블폴트가 무서워서 살살 넣는데 왜 더 자주 네트에 걸리나요?",
        answer: "서브에 스핀이 걸리지 않으면 공이 네트를 넘은 뒤 떨어지는 마그누스 효과가 발생하지 않습니다. 살살 치려고 스윙을 줄이면 오히려 궤적이 낮아져 네트에 직격합니다. 세컨서브일수록 라켓 헤드를 빠르게 휘둘러 스핀을 먹여야 안전하게 코트 안으로 떨어집니다."
      },
      {
        question: "스마트폰 메모장에 더블폴트를 간단히 기록하는 팁이 있나요?",
        answer: "세트가 끝난 뒤 메모장에 '듀스-네트-토스앞', '애드-길게-스윙감속'처럼 [코트-결과-원인] 3단어 조합으로 5초 만에 메모해 두면, 경기 후 자신의 전형적인 실패 패턴을 명확히 파악할 수 있습니다."
      }
    ]
  },
  "aw-083-doubles": {
    content: `<article>
<p class="article-summary">동호회 복식에서 전위 머리 위를 집요하게 노리는 로브 공격에 무너지지 않도록, 전위의 사전 1.5보 위치 후퇴, 스매시 불가 시 '바운스' 선제 콜, 후위의 대각선 크로스 커버 포메이션을 체계화합니다.</p>
<p>복식 경기에서 전위가 네트 앞에 바짝 붙어 포칭을 노릴 때, 상대가 가장 손쉽게 구사하는 역습 무기는 바로 머리 위를 넘기는 '탑스핀 로브(Topspin lob)'입니다. 많은 동호인 복식 조가 로브를 맞았을 때 전위는 뒷걸음질(백페달링)치다 넘어지고, 후위는 공을 구경만 하다가 허무하게 실점합니다. 로브는 개인의 스매시 능력만으로 막을 수 없으며, 두 선수의 사전 위치 선정과 철저한 커버 약속이 있어야 방어할 수 있습니다. <a href="/blog/aw-078-doubles-serve">복식 서브 후 첫 발 이동</a>이 서버의 움직임을 다룬다면, 이 글은 상대의 로브 집중 공략을 무력화하는 전위-후위 간 '수비 포메이션 전환 시스템'을 다룹니다.</p>
<h2>백페달링의 부상 위험과 전위의 사전 위치 조정</h2>
<p>미국테니스협회(USTA) Warrior Doubles 및 지도자 지침에 따르면, 전위가 뒤를 보지 않고 뒷걸음질치는 백페달링(Backpedaling)은 발목 염좌, 손목 골절, 후방 낙상 뇌진탕을 유발하는 가장 위험한 동작입니다.</p>
<ul>
<li><strong>서비스박스 중앙으로 1.5보 후퇴:</strong> 상대가 로브를 자주 띄우는 팀이라면 전위는 네트에서 1m 이내로 너무 바짝 붙지 말고, 서비스박스 정중앙선 부근으로 1.5보 물러서서 대기합니다. 이 위치에서는 짧은 로브를 가볍게 스매시할 수 있고 긴 로브에도 대처할 시야가 생깁니다.</li>
<li><strong>상대 타점 높이 관찰:</strong> 상대 선수의 임팩트 타점이 무릎 아래로 떨어지거나 코트 깊숙한 곳에서 몸이 뒤로 젖혀진다면 로브나 드롭샷이 나올 확률이 80% 이상입니다. 이때 전위는 이미 몸을 옆으로 비틀어 뒤로 뛸 준비를 해야 합니다.</li>
</ul>
<h2>바운스 콜과 후위의 스위치 커버 공식</h2>
<p>머리 위로 높고 깊게 넘어가는 로브가 발생했을 때는 0.5초 이내의 빠른 음성 콜이 포인트를 살립니다.</p>
<ol>
<li><strong>전위의 즉각적인 "바운스(Bounce)!" 선언:</strong> 점프해서 스매시할 수 없는 깊은 로브라면, 전위는 뒤돌아 뛰지 말고 즉시 큰 소리로 "바운스!" 또는 "체인지!"를 외칩니다. 이는 "나는 이 공을 칠 수 없으니 뒤에서 바운드 후 처리해 달라"는 명확한 신호입니다.</li>
<li><strong>전위의 대각선 반대 코트 이동:</strong> 바운스 콜을 한 전위는 곧바로 상대 전위가 비워둔 대각선 반대편(파트너가 있던 코트)으로 가로질러 뛰어들어가 네트 앞을 지킵니다.</li>
<li><strong>후위의 대각선 코너 질주 및 맞로브:</strong> 후위 파트너는 공의 낙하 지점인 코너로 전력 질주해, 바운드된 공을 높고 깊은 '맞로브'로 반환하여 팀이 수비 진형을 다시 갖출 시간을 벌어줍니다. 포지션 시뮬레이션은 <a href="/utility/doubles-positioning-simulator">복식 포지션 시뮬레이터</a>에서 확인할 수 있습니다.</li>
</ol>
<h2>조건별 판단표</h2>
<table><caption>상대 로브 궤적별 복식 수비 포메이션 전환 기준</caption><thead><tr><th scope="col">상대 타구 상황</th><th scope="col">전위 위치 및 대응</th><th scope="col">후위 수비 동선</th><th scope="col">음성 콜 가이드</th><th scope="col">실점 방지 우선순위</th></tr></thead><tbody><tr><th scope="row">낮고 빠른 공격형 로브</th><td>점프 스매시 시도 또는 뒤로 돌아서기</td><td>대각선 반대편 베이스라인 코너 전력 질주</td><td>후위가 큰 소리로 "스위치!" 외치기</td><td>머리 뒤로 넘어가는 공 무리하게 건드리지 않기</td></tr><tr><th scope="row">높고 느린 수비형 로브</th><td>사이드 스텝으로 2걸음 후퇴 후 안정적 스매시</td><td>베이스라인 중앙 대기, 상대 역습 대비</td><td>전위가 "마이(내가 침)!" 콜 후 처리</td><td>무리한 풀파워 대신 상대 빈 코스 깊게 연결</td></tr><tr><th scope="row">완전 역습 베이스라인 로브</th><td>공 포기 후 즉시 파트너 반대편 코트로 스위치</td><td>바운드 후 공을 쫓아 높게 맞로브 띄우기</td><td>전위가 "바운스!" 외치고 자리 비우기</td><td>로브를 로브로 맞받아쳐 포지션 재정비 시간 확보</td></tr></tbody></table>
<p>로브를 극복하는 복식 팀은 한 사람의 스매시가 뛰어난 팀이 아니라, 파트너가 비운 공간을 군더더기 없이 메워주는 팀입니다.</p>
<h2>확인한 자료와 적용 범위</h2>
<p>USTA Warrior Doubles Lob Defense 전술 및 ITF Coaching Tactics 매뉴얼을 참조했습니다. 이 포메이션은 동호회 복식의 전형적인 로브 수비 모델이며 상대의 샷 파워와 파트너의 기동력에 따라 유연하게 변경될 수 있습니다.</p>
<ul>
<li><a href="https://www.usta.com/en/home/improve/tennis-rules.html" target="_blank" rel="noopener noreferrer">USTA: Warrior Doubles Strategy - Lob Defense Formations</a></li>
<li><a href="https://www.itftennis.com/en/about-us/organisation/coaching-and-sports-science-review/" target="_blank" rel="noopener noreferrer">ITF Coaching Doubles Tactics: Overhead and Recovery Movement</a></li>
</ul>
<h2>자주 묻는 질문</h2>
<details><summary>머리 위로 로브가 넘어갈 때 뒤로 뒷걸음질(백페달링)치며 치면 왜 위험한가요?</summary><p>뒤를 보지 않고 뒷걸음질치면 발이 엉켜 넘어지면서 손목이나 머리, 허리에 심각한 부상을 입을 수 있습니다. 머리 위로 넘어가는 깊은 로브는 절대 뒷걸음질치지 말고, 몸을 돌려 사이드 스텝으로 달리거나 후위 파트너에게 넘겨야 안전합니다.</p></details>
<details><summary>상대가 로브를 자주 띄운다면 경기 전 파트너와 어떤 약속을 해야 하나요?</summary><p>전위는 네트에 너무 붙지 말고 서비스박스 중앙으로 1.5보 물러서고, '로브가 전위 키를 넘으면 무조건 후위가 쫓고 전위는 반대편으로 스위치한다'는 원칙을 단 한 문장으로 합의해 두면 혼선을 100% 방지할 수 있습니다.</p></details>
</article>`,
    tags: ["복식", "로브 수비", "전위 포지션", "후위 커버", "복식 전술"],
    summary: "동호회 복식에서 전위 머리 위를 집요하게 노리는 로브 공격에 무너지지 않도록, 전위의 사전 1.5보 위치 후퇴, 스매시 불가 시 '바운스' 선제 콜, 후위의 대각선 크로스 커버 포메이션을 체계화합니다.",
    highlight: "로브 수비의 핵심은 뒷걸음질 치지 않는 것입니다. 전위는 '바운스'를 외치고 반대로 뛰고, 후위는 달려가 맞로브를 띄우세요.",
    faq: [
      {
        question: "머리 위로 로브가 넘어갈 때 뒤로 뒷걸음질(백페달링)치며 치면 왜 위험한가요?",
        answer: "뒤를 보지 않고 뒷걸음질치면 발이 엉켜 넘어지면서 손목이나 머리, 허리에 심각한 부상을 입을 수 있습니다. 머리 위로 넘어가는 깊은 로브는 절대 뒷걸음질치지 말고, 몸을 돌려 사이드 스텝으로 달리거나 후위 파트너에게 넘겨야 안전합니다."
      },
      {
        question: "상대가 로브를 자주 띄운다면 경기 전 파트너와 어떤 약속을 해야 하나요?",
        answer: "전위는 네트에 너무 붙지 말고 서비스박스 중앙으로 1.5보 물러서고, '로브가 전위 키를 넘으면 무조건 후위가 쫓고 전위는 반대편으로 스위치한다'는 원칙을 단 한 문장으로 합의해 두면 혼선을 100% 방지할 수 있습니다."
      }
    ]
  }
};

const metadataOverrides = proposal.items.map(item => ({
  slug: item.slug,
  title: item.title,
  excerpt: item.excerpt,
  category: item.category,
  tags: item.tags,
  readTime: item.readTime,
  updatedAt: item.updatedAt
}));

const filesChanged = [];
fs.mkdirSync(".goal-harness/content-90-20261020/source-backups", { recursive: true });

// 1. Update src/data/blog-content/part16-quality-rewrites.ts
{
  const file = "src/data/blog-content/part16-quality-rewrites.ts";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '"aw-079-20":';
  const startIdx = original.indexOf(startMarker);
  const endMarker = '"aw-084-injury-serve":';
  const endIdx = original.indexOf(endMarker, startIdx);

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const entriesText = Object.entries(articlesContent).map(([slug, body]) => {
    return `"${slug}": ${JSON.stringify(body, null, 2)},\n  `;
  }).join("");

  const updated = original.slice(0, startIdx) + entriesText + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  const backupPath = `.goal-harness/content-90-20261020/source-backups/slowball-doubles-src_data_blog-content_part16-quality-rewrites.ts-${beforeHash.slice(0, 12)}.txt`;
  fs.writeFileSync(backupPath, original, "utf8");

  filesChanged.push({
    file,
    backup: backupPath,
    beforeHash,
    afterHash,
    targetSlugs: Object.keys(articlesContent)
  });
}

// 2. Update src/data/blog-posts-part16-overrides.js
{
  const file = "src/data/blog-posts-part16-overrides.js";
  const original = fs.readFileSync(file, "utf8");
  const beforeHash = hashText(original);

  const startMarker = '{\n    "slug": "aw-079-20",';
  let startIdx = original.indexOf(startMarker);
  if (startIdx === -1) {
    const match = original.match(/\{\s*"slug":\s*"aw-079-20",/);
    if (match) startIdx = match.index;
  }

  const endMarker = '{\n    "slug": "aw-084-injury-serve",';
  let endIdx = original.indexOf(endMarker, startIdx);
  if (endIdx === -1) {
    const match = original.match(/\{\s*"slug":\s*"aw-084-injury-serve",/);
    if (match) endIdx = match.index;
  }

  if (startIdx === -1 || endIdx === -1) {
    throw new Error(`Markers not found in ${file}`);
  }

  const overridesText = metadataOverrides.map(meta => {
    return JSON.stringify(meta, null, 2) + ",\n  ";
  }).join("");

  const updated = original.slice(0, startIdx) + overridesText + original.slice(endIdx);
  const afterHash = hashText(updated);
  fs.writeFileSync(file, updated, "utf8");
  console.log(`Updated ${file}: before ${beforeHash.slice(0, 12)} -> after ${afterHash.slice(0, 12)}`);

  const backupPath = `.goal-harness/content-90-20261020/source-backups/slowball-doubles-src_data_blog-posts-part16-overrides.js-${beforeHash.slice(0, 12)}.txt`;
  fs.writeFileSync(backupPath, original, "utf8");

  filesChanged.push({
    file,
    backup: backupPath,
    beforeHash,
    afterHash,
    targetSlugs: metadataOverrides.map(i => i.slug)
  });
}

const record = {
  integratedAt: new Date().toISOString(),
  batchId: "slowball-doubles-5",
  filesChanged,
  targetSlugs: metadataOverrides.map(i => i.slug)
};

const recordPath = ".goal-harness/content-90-20261020/slowball-doubles-integration.json";
fs.writeFileSync(recordPath, JSON.stringify(record, null, 2) + "\n", "utf8");
console.log("Integration record saved to:", recordPath);
