const fs = require('fs');
const path = require('path');

// 1. Get new posts from scaffold_posts.js
const scaffoldPath = path.join(__dirname, 'scaffold_posts.js');
const scaffoldContent = fs.readFileSync(scaffoldPath, 'utf8');

// Simple regex to extract the posts array
const postsMatch = scaffoldContent.match(/const posts = (\[[\s\S]*?\]);/);
if (!postsMatch) {
    console.error('Could not find posts array in scaffold_posts.js');
    process.exit(1);
}

// We can't easily eval because of potential imports or complex structures, 
// but in this case, it's a simple JSON-like array.
// Let's use a safer way to parse if possible, or just extract what we need.
// For now, I'll assume it's clean enough to parse after some sanitization 
// or I'll just manually define them since I know them.

// Actually, I have the list from my previous steps. Let's just use it here.
const newPostsMetadata = [
    { slug: 'iga-swiatek', title: '이가 시비옹테크: 무결점의 테니스 여제', category: '선수 프로필', description: '강력한 탑스핀 포핸드와 압도적인 멘탈로 WTA를 지배하는 이가 시비옹테크의 경기 스타일, 성장 과정, 그리고 그녀가 이룬 기록들을 분석합니다.' },
    { slug: 'aryna-sabalenka', title: '아리나 사발렌카: 파워 테니스의 정점', category: '선수 프로필', description: '폭발적인 서브와 그라운드 스트로크로 코트를 장악하는 아리나 사발렌카. 그녀의 공격적인 스타일과 멘탈 극복 스토리를 다룹니다.' },
    { slug: 'coco-gauff', title: '코코 고프: 미국의 차세대 슈퍼스타', category: '선수 프로필', description: '10대 시절부터 천재성을 증명한 코코 고프. 놀라운 코트 커버리지와 강력한 백핸드, 그리고 끊임없이 진화하는 그녀의 테니스 세계를 조명합니다.' },
    { slug: 'elena-rybakina', title: '엘레나 리바키나: 차가운 아이스 퀸의 플레이', category: '선수 프로필', description: '감정을 드러내지 않는 포커페이스와 우아한 위너. 엘레나 리바키나의 간결한 스윙 메커니즘과 강력한 서브의 비결을 파헤칩니다.' },
    { slug: 'nick-kyrgios', title: '닉 키리오스: 코트 위의 악동이자 천재', category: '선수 프로필', description: '예측 불가능한 플레이와 쇼맨십. 닉 키리오스의 천재적인 감각과 그 뒤에 숨겨진 테니스 철학, 그리고 논란과 매력을 동시에 탐구합니다.' },
    { slug: 'alexander-bublik', title: '알렉산더 부블릭: 언더암 서브와 창의성', category: '선수 프로필', description: '테니스를 즐기는 방식이 남다른 알렉산더 부블릭. 언더암 서브, 변칙 플레이, 그리고 그가 추구하는 창의적인 테니스의 세계.' },
    { slug: 'felix-auger-aliassime', title: '펠릭스 오제-알리아심: 캐나다의 테니스 희망', category: '선수 프로필', description: '성실함과 운동 능력을 겸비한 펠릭스 오제-알리아심. 그의 강력한 포핸드와 서비스 게임, 그리고 그랜드 슬램을 향한 도전을 정리합니다.' },
    { slug: 'denis-shapovalov', title: '데니스 샤포발로프: 왼손 원핸드 백핸드의 낭만', category: '선수 프로필', description: '폭발적인 점프 원핸드 백핸드의 소유자 데니스 샤포발로프. 공격적인 스타일과 화려한 샷 메이킹, 그가 보여주는 낭만 테니스.' },
    { slug: 'ons-jabeur', title: '온스 자베르: 튀니지의 마법사', category: '선수 프로필', description: '다양한 슬라이스와 드롭샷으로 상대를 현혹하는 온스 자베르. 아랍 테니스의 역사를 쓰고 있는 그녀의 창의적인 전술을 분석합니다.' },
    { slug: 'emma-raducanu', title: '엠마 라두카누: 신데렐라 스토리 그 후', category: '선수 프로필', description: '예선 통과자 최초의 US 오픈 우승 기적. 엠마 라두카누의 스타일과 부상 극복, 그리고 다시 정상에 도전하는 여정을 다룹니다.' },

    { slug: 'tennis-strategy-beat-pusher', title: "일명 '푸셔(Pusher)'를 이기는 5가지 전략", category: '테니스 전술', description: '실수 없이 넘기기만 하는 상대에게 말려들지 않는 법. 인내심을 유지하며 결정적인 찬스를 만드는 푸셔 공략 가이드.' },
    { slug: 'tennis-strategy-vs-lefty', title: '왼손잡이 상대 공략법 (Lefty 대응 전술)', category: '테니스 전술', description: '반대 회전 서브와 낯선 각도. 왼손잡이(Lefty) 선수를 상대로 당황하지 않고 유리한 고지를 점하는 전술적 팁.' },
    { slug: 'tennis-windy-condition-tips', title: '바람 부는 날 테니스 잘 치는 법', category: '테니스 전술', description: '불규칙한 바람은 누구에게나 fair하지 않습니다. 바람을 이용하는 풋워크, 타점 조절, 그리고 심리적 우위를 점하는 방법.' },
    { slug: 'tennis-drop-shot-mastery', title: '드롭샷 마스터하기: 타이밍과 위장술', category: '테니스 전술', description: '상대의 허를 찌르는 드롭샷. 성공률을 높이는 그립, 터치 감각, 그리고 무엇보다 중요한 타이밍과 위장(Disguise) 기술.' },
    { slug: 'tennis-lob-defense-offense', title: '로브(Lob)의 기술: 수비형 로브와 공격형 탑스핀 로브', category: '테니스 기술', description: '위기 탈출용 높은 로브부터, 네트 대시한 상대를 넘기는 공격적인 탑스핀 로브까지. 로브의 모든 것을 파헤칩니다.' },
    { slug: 'tennis-overhead-smash-guide', title: '스매싱 실수 줄이는 법 (오버헤드 스매시 가이드)', category: '테니스 기술', description: '가장 강력하지만 가장 실수하기 쉬운 샷. 스매싱의 타점 잡기, 왼손의 역할, 그리고 자신감 있게 마무리하는 비결.' },
    { slug: 'tennis-slice-backhand-mastery', title: '슬라이스 백핸드 제대로 구사하기 (방어와 리듬 뺏기)', category: '테니스 기술', description: '낮게 깔리는 슬라이스는 최고의 수비이자 공격의 발판입니다. 언더스핀을 거는 요령과 체공 시간을 조절하는 노하우.' },
    { slug: 'tennis-return-of-serve-strategy', title: '서브 리턴 전략: 서버의 구질 읽는 법', category: '테니스 전술', description: '게임의 시작은 서브지만, 브레이크의 시작은 리턴입니다. 스플릿 스텝 타이밍, 그립 전환, 그리고 서버의 루틴을 읽는 법.' },
    { slug: 'tennis-net-play-positioning', title: '네트 플레이의 정석: 어프로치 샷과 위치 선정', category: '테니스 전술', description: '발리는 손이 아닌 발로 합니다. 네트 점령을 위한 어프로치 샷의 선택과, 앵글을 차단하는 최적의 포지셔닝 가이드.' },
    { slug: 'tennis-court-surfaces-explained', title: '클레이 코트 vs 하드 코트: 움직임과 전략의 차이', category: '테니스 상식', description: '바운드와 속도가 다른 코트 표면. 하드, 클레이, 잔디 코트 각각에 맞는 풋워크와 전술적 변화를 이해합니다.' },

    { slug: 'tennis-string-tension-guide', title: '스트링 텐션의 비밀: 높게? 낮게?', category: '테니스 장비', description: '텐션이 높으면 컨트롤, 낮으면 파워? 반은 맞고 반은 틀립니다. 나에게 맞는 적정 텐션을 찾는 과학적인 접근법.' },
    { slug: 'tennis-hybrid-string-setup', title: '하이브리드 스트링 셋업 가이드 (폴리 vs 인조쉽)', category: '테니스 장비', description: '선수들이 사랑하는 믹스 앤 매치. 폴리 스트링과 인조쉽/천연쉽을 조합하여 내구성, 스핀, 타구감을 모두 잡는 하이브리드 세팅법.' },
    { slug: 'tennis-grip-size-selection', title: '그립 두께와 사이즈 선택의 중요성', category: '테니스 장비', description: '너무 얇으면 라켓이 돌고, 너무 두꺼우면 손목이 아픕니다. 정확한 그립 사이즈 측정법과 튜닝 팁.' },
    { slug: 'tennis-overgrip-guide', title: '오버그립 교체 주기와 종류(건식/습식) 추천', category: '테니스 장비', description: '손에 땀이 많다면? 쫀쫀한 그립감을 원한다면? 건식(Dry)과 습식(Tacky) 오버그립의 차이와 최적의 교체 타이밍.' },
    { slug: 'tennis-dampener-effectiveness', title: '댐퍼(Dampener)의 효과: 진동 감소와 타구감', category: '테니스 장비', description: '작은 고무 조각 하나가 타구감을 바꿉니다. 엘보 방지 효과에 대한 진실과 다양한 댐퍼 종류 비교.' },
    { slug: 'tennis-mental-closing-matches', title: '매치 포인트 공포증 극복하기 (Choking 방지)', category: '테니스 멘탈', description: '다 이긴 게임을 뒤집히는 \'초킹(Choking)\'. 긴장되는 순간에 팔이 굳는 현상을 극복하고 경기를 마무리하는 멘탈 루틴.' },
    { slug: 'tennis-wrist-knee-pain-care', title: '테니스 엘보 외의 부상: 손목 및 무릎 통증 관리', category: '테니스 건강', description: 'TFCC 손상부터 슬개건염까지. 테니스 동호인을 괴롭히는 손목과 무릎 통증의 원인과 예방 스트레칭.' },
    { slug: 'tennis-nutrition-pre-match', title: '경기 전 최고의 식단과 에너지 보충', category: '테니스 건강', description: '경기 2시간 전 무엇을 먹어야 할까요? 탄수화물 로딩부터 수분 보충, 경기 중 바나나 섭취의 과학적 이유.' },
    { slug: 'history-of-tennis-scoring', title: '테니스 점수(0, 15, 30, 40)의 유래와 역사', category: '테니스 역사', description: '왜 1, 2, 3이 아닐까요? 러브(Love)는 어디서 왔을까요? 중세 프랑스 귀족 놀이에서 유래한 독특한 점수 체계의 비밀.' },
    { slug: 'tennis-bag-essentials-checklist', title: '테니스 가방(라켓백) 필수 아이템 체크리스트', category: '테니스 용품', description: '고수들의 가방에는 무엇이 들어있을까요? 그립 파우더, 여분 양말, 비상약 등 코트 나갈 때 꼭 챙겨야 할 준비물 리스트.' }
];

// 2. Read src/data/blog-posts.js
const blogPostsPath = path.join(__dirname, '../src/data/blog-posts.js');
let blogPostsText = fs.readFileSync(blogPostsPath, 'utf8');

// 3. Find the end of the array
const arrayEndIndex = blogPostsText.lastIndexOf('];');
if (arrayEndIndex === -1) {
    console.error('Could not find end of allBlogPosts array');
    process.exit(1);
}

// 4. Generate new entries
const today = new Date().toISOString().split('T')[0];
const newEntries = newPostsMetadata.map(post => {
    return `  {
    "id": "${post.slug}",
    "slug": "${post.slug}",
    "title": "${post.title}",
    "excerpt": "${post.description}",
    "badge": "최신 글",
    "category": "${post.category}",
    "date": "${today}",
    "readTime": "10분",
    "badgeColor": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "categoryColor": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
  }`;
}).join(',\n');

// 5. Construct new content
const updatedContent = blogPostsText.substring(0, arrayEndIndex).trimEnd();
const finalContent = updatedContent + (updatedContent.endsWith('[') ? '' : ',\n') + newEntries + '\n];\n';

fs.writeFileSync(blogPostsPath, finalContent, 'utf8');
console.log(`✅ Successfully added ${newPostsMetadata.length} entries to blog-posts.js`);
