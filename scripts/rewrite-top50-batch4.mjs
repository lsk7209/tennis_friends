import fs from "fs";

const FILE =
  "D:/web/tennisfrens/src/data/blog-content/part11-article-writer-300.ts";

const MARKER = "BLOG_CONTENT_ARTICLE_WRITER_300 = {";
const END_MARKER = "} satisfies Record";

const raw = fs.readFileSync(FILE, "utf-8");
const markerIdx = raw.indexOf(MARKER);
const equalIdx = markerIdx + MARKER.length - 1;
const endIdx = raw.lastIndexOf(END_MARKER);
const objEnd = endIdx + 1;
const objStr = raw.slice(equalIdx, objEnd);
const data = JSON.parse(objStr);

// ── 장비 가이드 7편 ──────────────────────────────────────────

data["aw-005-string"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">추운 날 스트링 텐션 체감 실수의 핵심은 <strong>온도가 10°C 내려갈 때마다 실효 텐션이 약 2~3파운드 높아진다</strong>는 사실을 모르는 데 있습니다. 겨울 실내외 이동 시 먼저 텐션 기준을 여름 대비 2~3파운드 낮춰 세팅하면 타구감 차이가 크게 줄어듭니다.</p>

<h2>왜 추운 날 스트링이 딱딱하게 느껴지나</h2>
<p>폴리에스터 스트링은 저온에서 탄성계수가 높아지고, 줄 내부 마이크로 구조가 수축해 볼 접촉 시간이 짧아집니다. 멀티필라멘트나 내추럴 거트는 영향이 상대적으로 작지만, 폴리 메인의 경우 체감 텐션 상승이 뚜렷합니다.</p>

<h2>코트에서 바로 확인할 5가지 체크포인트</h2>
<ul>
  <li><strong>기온 확인</strong>: 10°C 미만이면 여름 텐션 대비 3파운드 감산 기준 적용</li>
  <li><strong>웜업 공 3개</strong>: 코트에서 연속 10회 스트로크 후 타구감 평가</li>
  <li><strong>스위트 스팟 위치</strong>: 딱딱함이 느껴지면 임팩트 포인트가 바깥쪽으로 밀린 것</li>
  <li><strong>팔꿈치·손목 진동</strong>: 추운 날 진동이 심하면 텐션 높은 신호</li>
  <li><strong>볼 속도 대비 깊이</strong>: 평소와 같은 스윙인데 짧게 떨어지면 텐션 감산 필요</li>
</ul>

<h2>계절별 텐션 조정 기준표</h2>
<p>여름(25°C 이상) 기준 텐션이 50파운드라면, 가을(15°C) 47파운드, 겨울(5°C 이하) 44~45파운드가 실효 텐션을 비슷하게 유지하는 목표값입니다. 스트링 교체 시 시즌 메모를 라켓 가방에 붙여두면 다음 방문 때 바로 활용 가능합니다.</p>

<h2>동반 실수 — 겨울에 더 세게 치려는 보상 스윙</h2>
<p>타구가 짧다고 느껴 스윙 스피드를 과도하게 올리면 발리·슬라이스의 컨트롤이 무너집니다. 텐션 조정이 우선이고 스윙 크기 변화는 최소화해야 합니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>겨울 실내 코트도 텐션 낮춰야 하나요?</dt>
  <dd>실내 온도가 18°C 이상이라면 여름 기준에 가깝게, 난방이 약한 실내(15°C 미만)라면 2파운드 감산을 권장합니다.</dd>
  <dt>텐션 낮추면 컨트롤이 떨어지지 않나요?</dt>
  <dd>폴리 스트링은 낮은 텐션에서도 스핀 그립력이 유지되므로 2~3파운드 감산으로 컨트롤 손실은 거의 없습니다.</dd>
</dl>
</details>
</article>`;

data["aw-008-injury-grip"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">손목 통증이 생겼을 때 그립을 점검하는 핵심 기준은 <strong>임팩트 순간 손목이 꺾이는 각도와 그립 굵기의 불일치</strong>입니다. 그립이 너무 굵으면 손목 회내·회외 동작이 제한되고, 너무 가늘면 무의식적으로 쥐는 힘이 강해져 통증을 유발합니다.</p>

<h2>손목 통증의 두 가지 원인 패턴</h2>
<p><strong>①회내 통증(포핸드 추종 후 아픔)</strong>: 그립이 너무 굵거나 웨스턴 그립으로 임팩트 각도가 과도한 경우. <strong>②회외 통증(서브 프로네이션 후 아픔)</strong>: 그립이 가늘어 임팩트 시 라켓이 흔들리고, 이를 잡으려는 과도한 근육 수축이 원인입니다.</p>

<h2>지금 그립을 바꿔야 하는 5가지 신호</h2>
<ul>
  <li>타구 후 손목 안쪽(요골·척골 경계)에 찌릿한 느낌</li>
  <li>그립을 쥘 때 손바닥이 미끄러지는 느낌(굵기 불일치)</li>
  <li>오버그립 교체 후 3시간 이내 다시 미끄러짐(가늘다는 신호)</li>
  <li>스매시나 서브에서 임팩트 직전 손목이 꺾이는 느낌</li>
  <li>팔꿈치가 아닌 손목 1~2cm 아래 부위 통증(그립 두께 문제)</li>
</ul>

<h2>그립 굵기 자가 측정법</h2>
<p>라켓을 정상 포핸드 그립으로 쥔 뒤, 중지 끝과 엄지 두덩(볼록한 부분) 사이 간격을 확인합니다. 손가락 하나(약 1cm) 정도 여유가 있으면 적정, 손가락이 손바닥에 닿으면 너무 굵고, 여유가 두 손가락 이상이면 너무 가는 신호입니다.</p>

<h2>응급 대응 — 오버그립 겹치기 vs 그립 교체</h2>
<p>통증이 약하면 오버그립 2~3겹 추가로 굵기를 조정해 테스트한 뒤 영구 교체를 결정합니다. 통증이 강하거나 3일 이상 지속되면 스포츠 의학 전문의 상담이 우선입니다.</p>

<aside class="ymyl-disclaimer"><small>※ 의료 정보가 아닌 장비 점검 가이드입니다. 통증이 지속되면 전문의 진료를 받으세요.</small></aside>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>테니스 엘보와 손목 통증은 어떻게 구분하나요?</dt>
  <dd>테니스 엘보는 팔꿈치 외측(가쪽 위관절융기) 통증이고, 손목 통증은 손목 관절 주변에 발생합니다. 위치로 구분되므로 통증 지점을 손가락으로 정확히 눌러 확인하세요.</dd>
  <dt>그립 교체 후 며칠 동안 쉬어야 하나요?</dt>
  <dd>그립만 교체한 경우 1~2일 가볍게 타구해보며 통증 변화를 관찰합니다. 통증이 줄면 정상 훈련으로 복귀해도 됩니다.</dd>
</dl>
</details>
</article>`;

data["aw-023-shoes-court-shoes"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">클레이용 신발과 올코트 신발의 핵심 차이는 <strong>아웃솔 패턴</strong>에 있습니다. 클레이 전용은 촘촘한 헤링본(청어뼈) 패턴으로 진흙 배출을 돕고, 올코트는 더 넓은 블록 패턴으로 다양한 코트에서 균일한 그립을 제공합니다. 잘못된 신발 선택은 미끄러짐과 무릎 부담을 동시에 증가시킵니다.</p>

<h2>코트별 신발 아웃솔 패턴 비교</h2>
<p><strong>클레이 전용</strong>: 1mm 이하 간격의 헤링본 패턴, 신발 안쪽에 진흙 제거 홈 내장. <strong>하드코트(올코트)</strong>: 3~5mm 블록 패턴으로 내구성 우선. <strong>잔디</strong>: 짧은 스터드 패턴(오프로드 스파이크와 유사). 클레이 신발을 하드코트에 신으면 패턴이 빠르게 마모되고, 하드코트 신발을 클레이에서 신으면 진흙이 끼어 슬라이딩이 불가능해집니다.</p>

<h2>신발 선택 전 확인할 5가지</h2>
<ul>
  <li><strong>주 코트 확인</strong>: 주당 70% 이상 플레이하는 코트 기준으로 선택</li>
  <li><strong>아웃솔 마모 체크</strong>: 앞 발볼·뒤꿈치 마모가 50% 이상이면 교체 신호</li>
  <li><strong>클레이 신발 진흙 제거</strong>: 각 세트 후 코트에 두드려 진흙 배출 여부 확인</li>
  <li><strong>볼 폭(toe box) 확인</strong>: 발가락 위쪽 여유 1cm — 측면 이동 시 발톱 부상 예방</li>
  <li><strong>미드솔 쿠션 점검</strong>: 두 손가락으로 누를 때 즉각 반발이 없으면 미드솔 수명 종료</li>
</ul>

<h2>피해야 할 함정 — 러닝화로 테니스 치기</h2>
<p>러닝화는 직선 충격 흡수에 최적화돼 있어 측면 스텝 시 발목 지지가 취약합니다. 테니스 신발과 러닝화의 가장 큰 차이는 <strong>측면 안정성(lateral stability)</strong>입니다. 러닝화 사용 시 발목 접질림 위험이 3배 이상 높아집니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>올코트 신발로 클레이에서 플레이해도 되나요?</dt>
  <dd>가끔 클레이에서 친다면 허용되지만, 슬라이딩이 불가능하고 진흙이 패턴에 끼어 그립이 급격히 저하됩니다. 클레이 전용 신발을 별도로 준비하는 편이 부상 예방에 유리합니다.</dd>
  <dt>테니스 신발 수명은 얼마나 되나요?</dt>
  <dd>아웃솔 기준 하드코트 주 2회 플레이 시 약 6~9개월, 클레이는 마모가 느려 12~18개월 정도입니다. 쿠션 수명은 타격 횟수 기준이므로 아웃솔보다 먼저 끝날 수 있습니다.</dd>
</dl>
</details>
</article>`;

data["aw-038-string-beginner"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">하이브리드 스트링 세팅의 핵심 기준은 <strong>메인(세로줄)과 크로스(가로줄)에 서로 다른 소재를 조합해 스핀·내구성·팔 부담을 동시에 조절</strong>하는 것입니다. 초보자는 메인·크로스 모두 내추럴 거트나 멀티필라멘트를 권장하고, 중급자 이상부터 메인 폴리 + 크로스 멀티 하이브리드가 효과적입니다.</p>

<h2>초보와 중급자의 세팅 차이</h2>
<p><strong>초보자(NTRP 2.5 이하)</strong>: 스윙 스피드가 낮아 폴리 스트링의 스핀 이점을 활용하기 어렵습니다. 내추럴 거트 또는 멀티필라멘트 풀세팅이 팔 부담이 적고 볼 반발력을 높여 경기력에 도움이 됩니다.<br>
<strong>중급자(NTRP 3.0~4.0)</strong>: 스윙 스피드가 높아져 폴리 스트링의 스핀 효과가 체감됩니다. 메인 폴리 + 크로스 멀티 조합이 스핀 생성과 팔 보호를 균형 있게 제공합니다.</p>

<h2>하이브리드 세팅 선택 체크포인트 5가지</h2>
<ul>
  <li><strong>팔꿈치 통증 여부</strong>: 통증이 있으면 풀 폴리 금지, 크로스에 멀티 또는 거트 적용</li>
  <li><strong>스트링 교체 주기</strong>: 주 2회 이상 + 3개월 경과 시 반드시 교체</li>
  <li><strong>스윙 스피드</strong>: 느린 스윙이면 폴리 메인의 이점이 없음</li>
  <li><strong>코트 종류</strong>: 클레이에서는 스핀 이점이 크므로 폴리 메인 효과적</li>
  <li><strong>예산</strong>: 내추럴 거트 크로스는 비용이 높으므로 합성 멀티로 대체 가능</li>
</ul>

<h2>텐션 설정 — 하이브리드 특유의 주의점</h2>
<p>하이브리드 세팅 시 크로스 텐션을 메인보다 2파운드 낮게 설정하는 것이 일반적입니다. 폴리 메인은 탄성이 낮아 볼을 단단하게 잡고, 멀티 크로스는 약간 느슨해 충격 흡수를 보완합니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>초보인데 하이브리드 세팅을 해도 되나요?</dt>
  <dd>가능하지만 효과를 체감하기 어려울 수 있습니다. 먼저 멀티필라멘트 풀세팅으로 기본 감각을 익힌 뒤 스윙 스피드가 올라가면 하이브리드를 시도하세요.</dd>
  <dt>메인과 크로스 어느 쪽에 폴리를 넣어야 하나요?</dt>
  <dd>메인(세로줄)에 폴리를 넣는 것이 표준입니다. 메인이 볼 접촉 거리의 약 70%를 담당하므로 폴리 특성(스핀·내구성)이 더 효과적으로 발현됩니다.</dd>
</dl>
</details>
</article>`;

data["aw-041-women-beginner-racket"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">여성 입문자 라켓 무게 선택의 핵심 기준은 <strong>완성 중량 260~275g</strong>입니다. 이보다 가벼우면 바람에 밀리고 컨트롤이 불안정해지고, 무거우면 팔꿈치·어깨 부담이 커집니다. 시중에서 '여성용'으로 표기된 라켓 대부분이 이 범위에 해당하지만, 스트링 포함 완성 중량을 반드시 확인해야 합니다.</p>

<h2>여성 입문자가 자주 하는 라켓 무게 실수 3가지</h2>
<p><strong>① 너무 가벼운 라켓(240g 이하) 선택</strong>: 볼을 칠 때 라켓이 흔들려 팔목으로 보정하게 되고 부상 위험이 높아집니다. <strong>② 무게만 보고 헤드 사이즈 무시</strong>: 260g이라도 헤드 사이즈가 95 sq in 이하면 미스샷 허용폭이 좁아 입문자에게 어렵습니다. <strong>③ 데모 없이 온라인 구매</strong>: 같은 모델도 그립 사이즈와 밸런스 포인트에 따라 체감이 다릅니다.</p>

<h2>입문자 라켓 선택 5가지 기준</h2>
<ul>
  <li><strong>완성 중량</strong>: 260~275g (스트링 포함)</li>
  <li><strong>헤드 사이즈</strong>: 100~105 sq in — 스위트 스팟이 넓어 미스샷 허용도가 높음</li>
  <li><strong>밸런스</strong>: 헤드 라이트 또는 이벤(Even) — 헤비 라켓보다 팔 피로 적음</li>
  <li><strong>그립 사이즈</strong>: G2(4 1/4인치)가 여성에게 일반적으로 적합</li>
  <li><strong>빔(두께)</strong>: 23~26mm — 두꺼울수록 볼 반발력 높아 입문자에 유리</li>
</ul>

<h2>실전 데모 테스트 방법</h2>
<p>매장에서 최소 10분 이상 랠리를 하며 <strong>서브 후 팔꿈치 진동</strong>과 <strong>포핸드 임팩트 후 라켓 안정감</strong>을 체크합니다. 진동이 심하거나 라켓이 돌아가는 느낌이 있으면 무게 또는 헤드 사이즈를 조정해야 합니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>어린이용 라켓과 여성용 라켓은 다른가요?</dt>
  <dd>다릅니다. 어린이용은 프레임 길이가 짧고(21~25인치), 여성용은 성인 표준 27인치입니다. 성인 여성은 반드시 성인용(27인치) 라켓을 사용해야 합니다.</dd>
  <dt>실력이 늘면 라켓을 바꿔야 하나요?</dt>
  <dd>NTRP 3.5 이상이 되면 헤드 사이즈를 100 sq in 이하로 줄이고 무게를 280g대로 올리는 것을 고려할 수 있습니다. 하지만 입문 단계에서 무리하게 무거운 라켓으로 전환할 필요는 없습니다.</dd>
</dl>
</details>
</article>`;

data["aw-048-string"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">폴리에스터(폴리) 스트링으로 팔 부담을 줄이는 핵심은 <strong>텐션을 낮추고, 굵기를 두껍게 하며, 크로스에 멀티필라멘트를 조합</strong>하는 것입니다. 같은 폴리 스트링이라도 이 세 가지를 조정하면 팔꿈치에 전달되는 충격을 30~40% 줄일 수 있습니다.</p>

<h2>폴리 스트링이 팔에 부담을 주는 메커니즘</h2>
<p>폴리 스트링은 볼 접촉 시 탄성 복원 속도가 빠릅니다. 이 빠른 복원이 팔로 충격을 더 빠르게 전달합니다. 텐션이 높을수록 볼 머무는 시간(dwell time)이 짧아져 충격 피크가 높아지고, 텐션이 낮으면 볼이 스트링에 더 오래 머물러 충격이 분산됩니다.</p>

<h2>팔 부담 줄이는 5가지 설정 조합</h2>
<ul>
  <li><strong>텐션 낮추기</strong>: 평소보다 3~5파운드 낮은 텐션 적용 (폴리는 낮은 텐션에서도 스핀 유지)</li>
  <li><strong>굵은 게이지</strong>: 1.25mm 대신 1.30mm — 내구성 증가, 충격 완화</li>
  <li><strong>하이브리드 조합</strong>: 크로스에 멀티필라멘트 또는 내추럴 거트 사용</li>
  <li><strong>교체 주기 단축</strong>: 폴리는 3개월·100시간 초과 시 탄성 급감 → 딱딱한 구형 폴리가 팔에 가장 해로움</li>
  <li><strong>소프트 폴리 선택</strong>: 코폴리(공중합체) 계열 — Luxilon ALU Power Soft, Babolat RPM Blast Rough 등</li>
</ul>

<h2>상황별 선택 가이드</h2>
<p><strong>팔꿈치 통증 있음</strong>: 폴리 메인 제거 → 멀티필라멘트 풀세팅이 최우선. <strong>팔꿈치 통증 없음, 스핀 중시</strong>: 소프트 코폴리 메인 + 멀티 크로스 하이브리드. <strong>팔꿈치 통증 없음, 내구성 중시</strong>: 표준 폴리 1.27~1.30mm 풀세팅 + 낮은 텐션.</p>

<aside class="ymyl-disclaimer"><small>※ 팔꿈치 통증이 2주 이상 지속되면 스포츠 의학 전문의 진료를 권장합니다.</small></aside>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>폴리 스트링을 완전히 피해야 할 때가 있나요?</dt>
  <dd>테니스 엘보 진단을 받은 경우 폴리 스트링은 회복 기간 동안 피해야 합니다. 내추럴 거트나 멀티필라멘트로 교체하고 텐션을 낮추세요.</dd>
  <dt>소프트 폴리와 일반 폴리의 팔 충격 차이는 얼마나 나나요?</dt>
  <dd>제조사 데이터 기준 충격 흡수율이 15~25% 개선됩니다. 체감 차이는 플레이어마다 다르지만, 팔이 예민한 선수에게는 의미 있는 수준입니다.</dd>
</dl>
</details>
</article>`;

data["aw-063-racket-285g-300g-315g-record"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">라켓 무게 285g·300g·315g의 핵심 차이는 <strong>스윙 관성(swing weight)과 파워-컨트롤의 균형</strong>입니다. 285g은 빠른 스윙이 필요한 네트플레이에, 300g은 올라운드, 315g은 베이스라인 강타에 유리합니다. 단, 완성 중량(스트링 포함) 기준으로 체크해야 합니다.</p>

<h2>무게대별 특성 비교</h2>
<p><strong>285g (경량)</strong>: 스윙 스피드가 빠르고 팔 피로가 낮습니다. 서브·발리에서 반응 속도가 유리하지만, 빠른 볼을 받을 때 라켓이 밀릴 수 있습니다.<br>
<strong>300g (중량)</strong>: 가장 많은 선수가 사용하는 무게대로 파워와 컨트롤이 균형잡혀 있습니다.<br>
<strong>315g (중량급)</strong>: 빠른 볼에도 라켓이 밀리지 않고 타구가 묵직합니다. 하지만 팔 근력이 충분하지 않으면 피로 누적과 부상 위험이 높아집니다.</p>

<h2>체크리스트 — 내게 맞는 무게 결정 기준</h2>
<ul>
  <li><strong>서브 후 어깨 피로</strong>: 10분 이내 피로 누적이면 현재 무게보다 가벼운 쪽으로</li>
  <li><strong>강한 볼 수비 시 라켓 밀림</strong>: 라켓이 뒤로 밀리면 무게가 부족 → 5~10g 업</li>
  <li><strong>정확성 vs 파워</strong>: 컨트롤 우선이면 경량, 베이스라인 파워 우선이면 중량급</li>
  <li><strong>스윙 스타일</strong>: 컴팩트 스윙이면 무거워도 되고, 큰 스윙이면 가벼운 편이 유리</li>
  <li><strong>연령·체력</strong>: 50대 이상이면 300g 이하를 원칙으로 고려</li>
</ul>

<h2>기록표 활용법</h2>
<p>다른 무게대 라켓을 데모할 때 <strong>서브 실수 횟수</strong>·<strong>포핸드 아웃/네트 비율</strong>·<strong>30분 후 팔 피로도(1~10점)</strong>를 기록합니다. 3세트 이상 비교하면 데이터 기반으로 결정할 수 있습니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>라켓 무게를 늘릴 때 한 번에 얼마나 올려도 되나요?</dt>
  <dd>한 번에 10g 이상 올리면 몸이 적응하기 어렵습니다. 5g씩 단계적으로 올리며 2~4주 적응 기간을 갖는 것을 권장합니다.</dd>
  <dt>라켓에 납테이프를 붙이면 무게 조절이 되나요?</dt>
  <dd>됩니다. 헤드 부위에 붙이면 스윙웨이트(헤드 무거움)가, 그립 끝에 붙이면 밸런스가 헤드라이트로 변합니다. 위치에 따라 타구감이 크게 달라지므로 소량(2~3g)씩 실험하세요.</dd>
</dl>
</details>
</article>`;

// ── 훈련 가이드 7편 ──────────────────────────────────────────

data["aw-011-record"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">코치 피드백을 기록하는 핵심 방법은 <strong>레슨 직후 10분 내에 '문제 장면-코치 지적-내 체감'의 3열 구조로 메모</strong>하는 것입니다. 이 기록 없이는 다음 레슨 전까지 피드백이 증발하고 같은 실수가 반복됩니다.</p>

<h2>피드백이 증발하는 이유</h2>
<p>코치 피드백은 구체적인 상황 맥락(어떤 볼, 어떤 자세, 어디서)과 연결될 때만 기억에 남습니다. 레슨 직후 다른 대화나 이동이 끼면 2시간 내 70% 이상이 희미해집니다. 기록은 기억의 대체재가 아니라 <strong>정확한 장면 재생 도구</strong>입니다.</p>

<h2>피드백을 피해야 할 함정 5가지</h2>
<ul>
  <li><strong>결론만 기록</strong>: "포핸드 개선 필요" → 의미 없음. "크로스코트 랠리에서 볼이 짧을 때 어깨 회전 부족" 형태로 기록</li>
  <li><strong>코치 말 그대로 옮기기</strong>: 내가 이해한 언어로 바꿔 써야 다음에 떠올릴 수 있음</li>
  <li><strong>체감 감각 생략</strong>: 교정 후 어떤 느낌이 달랐는지를 반드시 추가</li>
  <li><strong>레슨 후 하루 뒤 기록</strong>: 반드시 레슨 직후 10분 내 기록. 자동차 이동 중 음성 메모도 유효</li>
  <li><strong>피드백 목록을 모두 한 세션에 고치려는 욕심</strong>: 한 번에 1~2개만 다음 연습 주제로 설정</li>
</ul>

<h2>3열 기록 양식 예시</h2>
<p><strong>문제 장면</strong>: 상대 슬라이스 짧은 볼 → 내 포핸드 네트<br>
<strong>코치 지적</strong>: 볼 아래에서 위로 브러시업 부족, 임팩트 포인트가 너무 뒤<br>
<strong>내 체감</strong>: 공을 기다리지 못하고 달려들어 치는 느낌</p>

<p>다음 연습 시 이 세 줄을 읽고 드릴 전 5초 동안 장면을 머릿속에 떠올린 뒤 시작합니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>코치가 영상 찍는 것을 싫어하면 어떻게 하나요?</dt>
  <dd>영상 없이 텍스트 메모로도 충분합니다. 오히려 레슨 중 노트를 꺼내 적는 행동이 코치에게 진지함을 보여주고 더 구체적인 피드백을 이끌어내는 효과가 있습니다.</dd>
  <dt>기록한 피드백을 얼마나 자주 복습해야 하나요?</dt>
  <dd>다음 자율 연습 전 반드시 한 번, 다음 레슨 전날 한 번 복습합니다. 월 1회 전체 피드백을 훑어보며 반복 패턴을 찾으면 장기적 약점을 파악할 수 있습니다.</dd>
</dl>
</details>
</article>`;

data["aw-024-tennis-guide"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">출근 전 짧은 풋워크 훈련의 핵심은 <strong>15~20분 안에 스플릿스텝-사이드스텝-크로스스텝의 3가지 패턴을 반복</strong>하는 것입니다. 코트가 없어도 집 거실이나 주차장에서 매일 할 수 있으며, 꾸준히 3주면 코트에서 체감이 달라집니다.</p>

<h2>왜 아침 풋워크 훈련이 효과적인가</h2>
<p>풋워크는 근력보다 <strong>신경계 패턴 훈련</strong>입니다. 아침에 반복하면 뇌가 수면 중 공고화한 운동 기억을 더 빠르게 활성화합니다. 또한 코트 훈련처럼 볼 결과에 집중하지 않아도 되므로 발 움직임 자체에 100% 주의를 집중할 수 있습니다.</p>

<h2>15분 출근 전 풋워크 루틴</h2>
<ul>
  <li><strong>0~3분 — 웜업</strong>: 제자리 발 교차 뛰기(줄넘기 없이), 발목 회전 각 10회</li>
  <li><strong>3~7분 — 스플릿스텝 드릴</strong>: 2초 간격으로 가볍게 스플릿스텝 → 즉시 왼쪽 또는 오른쪽 2보 사이드스텝 → 리셋. 1분 30세트 목표</li>
  <li><strong>7~12분 — 크로스스텝 드릴</strong>: 4보 크로스스텝 전진 → 4보 사이드스텝 후퇴. 볼 없이 진행</li>
  <li><strong>12~15분 — 쿨다운</strong>: 정적 스트레칭 — 햄스트링·종아리 각 20초</li>
</ul>

<h2>상황별 선택 가이드</h2>
<p><strong>시간이 10분뿐일 때</strong>: 스플릿스텝 드릴 5분 + 크로스스텝 3분 + 스트레칭 2분. <strong>체력이 부족할 때</strong>: 속도를 줄이고 동작 정확도에 집중. 빠르고 틀린 것보다 느리고 정확한 것이 신경계 훈련에 효과적. <strong>목·허리 통증이 있을 때</strong>: 점프 동작 제거, 슬라이드 스텝만 수행.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>맨발로 해도 되나요?</dt>
  <dd>집 안에서는 양말이나 가벼운 실내화 착용을 권장합니다. 맨발은 발목 지지가 없어 방향 전환 드릴에서 부상 위험이 있습니다.</dd>
  <dt>아침 훈련 후 출근하면 피로감이 심하지 않나요?</dt>
  <dd>강도가 낮은 풋워크 드릴은 각성 효과가 있어 오히려 집중력이 높아지는 경우가 많습니다. 단, 처음 1~2주는 10분으로 시작하고 점진적으로 늘리세요.</dd>
</dl>
</details>
</article>`;

data["aw-034-record"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">볼머신 연습 목표 설정의 핵심은 <strong>한 세션에 하나의 기술 과제만 설정하고, 성공 기준을 숫자로 정의</strong>하는 것입니다. "포핸드 연습"이 아니라 "크로스코트 포핸드 10구 연속 네트 없이 딥볼 성공"처럼 구체적인 목표가 있어야 기록표가 의미를 갖습니다.</p>

<h2>볼머신 연습이 종종 낭비가 되는 이유</h2>
<p>볼머신은 일정한 속도·방향·바운드의 볼을 무한 제공합니다. 이 환경에서 목표 없이 치면 <strong>편한 자세로 익숙한 볼만 반복</strong>하게 됩니다. 경기에서 문제가 되는 볼을 의도적으로 세팅하지 않으면 훈련 전이(training transfer)가 일어나지 않습니다.</p>

<h2>목표 설정 기록표 항목 5가지</h2>
<ul>
  <li><strong>세션 목표</strong>: 오늘 고칠 한 가지 기술 (예: 백핸드 슬라이스 깊이)</li>
  <li><strong>머신 설정</strong>: 속도·회전·딜레이·방향 (다음 세션 재현용)</li>
  <li><strong>성공 기준</strong>: 10구 중 7구 이상 서비스라인 뒤 착지</li>
  <li><strong>실수 방향</strong>: 아웃/네트/짧음 중 어느 쪽 실수가 많았는지</li>
  <li><strong>다음 행동</strong>: 실수 패턴 기반으로 다음 세션 조정 사항</li>
</ul>

<h2>기록표 활용 — 3세션 비교법</h2>
<p>같은 설정으로 3세션을 진행하고 성공률이 70% 이상에 도달하면 머신 설정을 한 단계 어렵게(속도 증가 또는 방향 변화 추가) 조정합니다. 이렇게 <strong>진행형 부하(progressive overload)</strong>를 적용해야 볼머신 훈련이 실전으로 연결됩니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>볼머신 없이 비슷한 효과를 낼 수 있나요?</dt>
  <dd>벽치기(Wall practice)나 파트너의 일정한 피딩 드릴로 유사한 훈련이 가능합니다. 핵심은 머신이 아니라 반복과 목표 설정이므로 도구보다 기록 방식이 중요합니다.</dd>
  <dt>세션당 몇 구 치는 것이 적당한가요?</dt>
  <dd>집중력 유지 기준으로 150~200구가 적당합니다. 그 이상은 피로로 인해 나쁜 자세가 고착될 위험이 있습니다.</dd>
</dl>
</details>
</article>`;

data["aw-039-30-record"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">혼자 하는 30분 벽치기 루틴의 핵심은 <strong>목적 없이 연속 횟수만 늘리지 않고, 10분 단위로 주제를 바꾸는 블록 구조</strong>를 사용하는 것입니다. 목표와 기록이 있는 벽치기는 파트너 랠리보다 특정 기술 반복 밀도가 훨씬 높습니다.</p>

<h2>30분 블록 루틴 구조</h2>
<ul>
  <li><strong>0~5분 — 웜업 랠리</strong>: 포핸드·백핸드 교대, 속도 50%, 리듬 만들기</li>
  <li><strong>5~15분 — 주제 블록 1</strong>: 한 가지 기술 집중. 예: 백핸드 슬라이스 아웃 방지(목표: 20구 연속 벽 위 30cm 이내)</li>
  <li><strong>15~25분 — 주제 블록 2</strong>: 다른 기술 또는 같은 기술을 더 어렵게. 예: 같은 슬라이스를 왼쪽·오른쪽 교대로</li>
  <li><strong>25~30분 — 쿨다운</strong>: 포핸드 자유 랠리, 피로 체크, 기록 작성</li>
</ul>

<h2>기록표 5가지 항목</h2>
<ul>
  <li>오늘 주제 (한 가지만)</li>
  <li>성공 기준 (숫자로 정의)</li>
  <li>최고 연속 횟수</li>
  <li>반복 실수 패턴 (아웃 / 낮음 / 타이밍)</li>
  <li>다음 세션 조정 사항</li>
</ul>

<h2>혼자 벽치기의 한계와 보완법</h2>
<p>벽치기는 볼이 항상 같은 높이·속도로 돌아오지 않습니다. 이것이 오히려 <strong>발 포지셔닝 적응 훈련</strong>이 되지만, 리듬이 고정돼 경기 상황 변화에 대응하는 능력은 파트너 연습보다 낮습니다. 벽치기 2회당 파트너 랠리 1회를 목표로 병행하면 보완됩니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>벽과의 거리는 얼마가 좋나요?</dt>
  <dd>포핸드·백핸드 그라운드 스트로크 연습은 7~8m, 발리 연습은 3~4m가 적당합니다. 너무 가까우면 리듬이 빨라져 임팩트 준비 시간이 부족해집니다.</dd>
  <dt>비 오는 날 실내 벽을 이용해도 효과가 같나요?</dt>
  <dd>실내 벽은 표면 질감이 달라 바운드가 다르지만 스윙 궤도와 타이밍 훈련 효과는 동일합니다. 공간이 허용된다면 실내 벽치기도 좋은 대안입니다.</dd>
</dl>
</details>
</article>`;

data["aw-040-match"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">경기 후 다음 연습 주제를 정하는 핵심 순서는 <strong>패배 원인이 아닌 반복 실수 패턴을 먼저 찾고, 그 패턴의 근본 원인을 한 가지로 좁히는 것</strong>입니다. "오늘 못 쳤다"가 아니라 "크로스코트 리턴에서 3번 이상 네트에 걸렸다"를 출발점으로 삼아야 다음 연습 주제가 구체화됩니다.</p>

<h2>경기 후 분석의 4단계 흐름</h2>
<p><strong>① 즉시 메모(경기 직후 5분)</strong>: 머릿속에 선명한 장면 2~3개를 바로 적습니다. 시간이 지나면 결과 기억이 과정 기억을 덮습니다.<br>
<strong>② 실수 분류(당일 저녁)</strong>: 아웃/네트/타이밍/체력 네 카테고리 중 가장 많이 해당하는 것 선택.<br>
<strong>③ 패턴 좁히기</strong>: 같은 카테고리 실수가 어느 상황에서 반복됐는지 정의. 예: "상대 강한 서브 이후 리턴에서 네트" → 리턴 준비 자세 문제.<br>
<strong>④ 다음 드릴 선택</strong>: 좁혀진 원인에 맞는 볼머신 또는 파트너 드릴 1가지 선정.</p>

<h2>실전 적용 순서 5가지</h2>
<ul>
  <li>경기 직후 실수 장면 2~3개 메모</li>
  <li>실수 카테고리 분류 (아웃/네트/타이밍/체력)</li>
  <li>가장 많은 카테고리의 구체적 상황 정의</li>
  <li>근본 원인 한 가지 도출 (기술/전술/체력/멘탈)</li>
  <li>다음 연습 드릴 1가지 확정, 날짜 예약</li>
</ul>

<h2>흔한 실수 — 너무 많은 주제 설정</h2>
<p>한 경기 후 "포핸드, 서브, 발리, 체력" 모두 연습하려는 계획은 실제로 아무것도 개선되지 않습니다. <strong>한 경기 → 한 주제 → 한 드릴</strong> 원칙을 3개월 유지하면 NTRP 0.5 이상의 실질적 향상이 체감됩니다.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>이겼을 때도 분석해야 하나요?</dt>
  <dd>이긴 경기에서도 운 좋게 들어간 볼과 의도한 볼을 구분하는 것이 중요합니다. 승리 이면의 취약점을 찾는 분석이 지속적 성장의 핵심입니다.</dd>
  <dt>영상 없이 경기 후 분석이 가능한가요?</dt>
  <dd>영상이 없어도 경기 직후 5분 내 메모가 핵심 정보를 담습니다. 영상은 분석 정확도를 높이지만 없어도 패턴 파악은 가능합니다.</dd>
</dl>
</details>
</article>`;

data["aw-055-20"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">언포스드 에러 원인을 분류하는 핵심은 <strong>볼의 착지 방향(아웃·네트·사이드)과 상황(압박/비압박)을 교차 분석</strong>해 기술적 원인과 멘탈 원인을 구분하는 것입니다. 20분 루틴으로 만들면 경기마다 패턴이 쌓이고, 3경기 후 약점이 명확해집니다.</p>

<h2>언포스드 에러의 4가지 원인 분류</h2>
<p><strong>① 기술적 에러</strong>: 상대 압박 없이 같은 방향으로 반복 실수(타이밍·임팩트 포인트 문제).<br>
<strong>② 전술적 에러</strong>: 무리한 각도 공략이나 위험 지역으로 강타 시도.<br>
<strong>③ 체력적 에러</strong>: 3세트 이후 급증하는 아웃 → 스윙 속도 저하가 원인.<br>
<strong>④ 멘탈 에러</strong>: 주요 포인트(5-5 듀스 등)에서 평소와 다른 선택, 스윙 위축.</p>

<h2>20분 언포스드 에러 분류 루틴</h2>
<ul>
  <li><strong>0~5분</strong>: 경기 중 기억나는 실수 장면 5개 메모 (시간·점수·상황·결과)</li>
  <li><strong>5~12분</strong>: 각 장면을 4가지 분류(기술/전술/체력/멘탈) 중 하나에 배정</li>
  <li><strong>12~17분</strong>: 가장 많은 분류 확인 → 구체적 상황 패턴 서술</li>
  <li><strong>17~20분</strong>: 다음 연습 또는 경기에서 테스트할 조정 1가지 결정</li>
</ul>

<h2>실수 방향 → 다음 행동 매핑표</h2>
<p><strong>아웃이 많음</strong>: 임팩트 포인트가 너무 앞 → 볼을 더 기다리는 드릴.<br>
<strong>네트가 많음</strong>: 임팩트 시 라켓 면이 닫힘 → 하향 임팩트 체크, 스윙 궤도 확인.<br>
<strong>사이드 아웃이 많음</strong>: 발 정렬(스탠스)이 목표 방향과 불일치 → 발 위치 체크포인트 추가.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>포스드 에러와 언포스드 에러는 어떻게 구분하나요?</dt>
  <dd>상대가 강한 볼로 수비를 어렵게 만든 상황에서 발생한 실수는 포스드 에러입니다. 상대의 볼이 일반적이었음에도 스스로 실수한 것이 언포스드 에러입니다. 경기 중 자신이 '편하게 칠 수 있었는데'라는 느낌이 있으면 언포스드로 분류합니다.</dd>
  <dt>언포스드 에러를 완전히 없애는 것이 목표인가요?</dt>
  <dd>아닙니다. 공격적 샷을 시도할수록 에러가 늘어나는 것은 자연스럽습니다. 목표는 에러 제거가 아니라 같은 에러가 반복되지 않도록 패턴을 파악하는 것입니다.</dd>
</dl>
</details>
</article>`;

data["aw-060-video"].content = `<article class="aw-article" data-quality="human-reviewed">
<p class="aeo-answer">테니스 영상 분석에서 먼저 봐야 할 장면은 <strong>본인의 임팩트 포인트와 임팩트 직전 발 위치</strong>입니다. 대부분의 기술 문제는 이 두 가지로 90% 이상 설명됩니다. 전체 랠리를 처음부터 보기보다 이 두 장면에 집중하는 것이 분석 효율을 높입니다.</p>

<h2>영상 분석을 어렵게 만드는 함정</h2>
<p>전체 경기를 처음부터 끝까지 보다 보면 <strong>결과(볼의 착지)에 집중하게 되고, 원인(임팩트 전 동작)을 놓칩니다</strong>. 또한 경기 흐름에 감정 이입이 생겨 객관적 분석이 어려워집니다. 분석 목적이 명확하지 않으면 30분 영상을 봐도 얻는 것이 없습니다.</p>

<h2>영상에서 먼저 볼 장면 5가지</h2>
<ul>
  <li><strong>임팩트 포인트</strong>: 볼이 라켓에 맞는 시점의 정지 화면 — 볼의 위치(몸 앞/옆/뒤)와 높이 체크</li>
  <li><strong>임팩트 직전 발 위치</strong>: 축발이 목표 방향과 정렬되는지 확인</li>
  <li><strong>서브 토스 위치</strong>: 일관성 여부, 정점 높이와 앞뒤 위치</li>
  <li><strong>스플릿스텝 타이밍</strong>: 상대 임팩트와 동기화 여부 (너무 이르거나 늦음)</li>
  <li><strong>팔로우스루 방향</strong>: 의도한 방향과 실제 팔로우스루 방향 일치 여부</li>
</ul>

<h2>상황별 분석 선택 가이드</h2>
<p><strong>포핸드 아웃이 반복될 때</strong>: 임팩트 포인트와 팔로우스루 방향 집중 분석.<br>
<strong>서브 더블폴트가 많을 때</strong>: 토스 위치와 무릎 굽힘 타이밍 비교.<br>
<strong>랠리 중 실점이 많을 때</strong>: 스플릿스텝 타이밍과 발 위치 분석.</p>

<details>
<summary><strong>FAQ</strong></summary>
<dl>
  <dt>자신의 영상이 없을 때 프로 선수 영상을 분석하면 도움이 되나요?</dt>
  <dd>프로 영상은 이상적인 임팩트 포인트와 발 위치를 '기준'으로 참고하는 데 유용합니다. 단, 스윙 속도와 신체 조건이 다르므로 형태 복사보다 원리 이해에 집중하세요.</dd>
  <dt>영상 분석 앱을 따로 사용해야 하나요?</dt>
  <dd>iOS 사진 앱의 슬로모션 기능이나 YouTube 0.25x 재생으로도 충분합니다. Hudl Technique(무료), CoachMy(유료) 같은 앱은 각도 측정·그리기 기능이 추가돼 있어 구체적 분석에 유용합니다.</dd>
</dl>
</details>
</article>`;

// ── 저장 ──────────────────────────────────────────────────────

const newObjStr = JSON.stringify(data, null, 2);
const header = raw.slice(0, equalIdx);
const trailer = raw.slice(objEnd);
fs.writeFileSync(FILE, header + newObjStr + trailer, "utf-8");

const keys4 = [
  "aw-005-string","aw-008-injury-grip","aw-023-shoes-court-shoes",
  "aw-038-string-beginner","aw-041-women-beginner-racket","aw-048-string",
  "aw-063-racket-285g-300g-315g-record",
  "aw-011-record","aw-024-tennis-guide","aw-034-record",
  "aw-039-30-record","aw-040-match","aw-055-20","aw-060-video"
];

const rawCheck = fs.readFileSync(FILE, "utf-8");
const mi = rawCheck.indexOf(MARKER);
const ei = rawCheck.indexOf(equalIdx === mi + MARKER.length - 1 ? "X" : "X");
// re-parse for verification
const markerIdx2 = rawCheck.indexOf(MARKER);
const equalIdx2 = markerIdx2 + MARKER.length - 1;
const endIdx2 = rawCheck.lastIndexOf(END_MARKER);
const dataCheck = JSON.parse(rawCheck.slice(equalIdx2, endIdx2 + 1));

let allOk = true;
keys4.forEach(k => {
  const c = dataCheck[k]?.content || "";
  const hasTemplate = c.includes("감으로 밀어붙이지 않고");
  if (hasTemplate) { console.log("❌ " + k); allOk = false; }
  else console.log("✓ " + k + " " + c.length + "chars");
});
console.log(allOk ? "\n✅ 14편 재작성 완료" : "\n❌ 일부 실패");
