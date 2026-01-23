
export interface TennisTerm {
    id: string;
    term: string;
    category: string;
    definition: string;
    pronunciation?: string;
    examples: string[];
    relatedTerms: string[];
    difficulty: '초급' | '중급' | '고급';
}

export const tennisTerms: TennisTerm[] = [
    // === 점수 (Scoring) ===
    {
        id: 'love',
        term: '러브 (Love)',
        category: '점수',
        definition: '0점을 의미하는 테니스 용어. 프랑스어 "l\'oeuf"(달걀, 0의 모양)에서 유래했다는 설이 있습니다.',
        examples: ['러브-15 상황에서 서브를 넣었다.', '러브 게임으로 상대를 압도했다.'],
        relatedTerms: ['피프틴', '게임 포인트'],
        difficulty: '초급'
    },
    {
        id: 'deuce',
        term: '듀스 (Deuce)',
        category: '점수',
        definition: '40-40 동점 상황. 듀스에서는 2포인트를 연속으로 따야 게임을 가져갈 수 있습니다.',
        examples: ['듀스 상황이 5번이나 반복되었다.', '듀스 코트에서 회심의 서브를 넣었다.'],
        relatedTerms: ['어드밴티지', '노-에드'],
        difficulty: '초급'
    },
    {
        id: 'advantage',
        term: '어드밴티지 (Advantage)',
        category: '점수',
        definition: '듀스 상황에서 1포인트를 먼저 딴 상태. "Ad"라고 줄여 부르기도 합니다. 서브권을 가진 선수가 따면 "Ad-In", 리시버가 따면 "Ad-Out"입니다.',
        examples: ['어드밴티지 상황에서 브레이크에 성공했다.'],
        relatedTerms: ['듀스', '게임 포인트', '브레이크 포인트'],
        difficulty: '초급'
    },
    {
        id: 'tiebreak',
        term: '타이브레이크 (Tiebreak)',
        category: '점수',
        definition: '게임 스코어 6-6이 되었을 때 세트의 승자를 가리기 위해 진행하는 7점 내기(또는 10점) 미니 게임.',
        examples: ['치열한 접전 끝에 타이브레이크로 1세트를 가져갔다.'],
        relatedTerms: ['슈퍼 타이브레이크', '세트 포인트'],
        difficulty: '중급'
    },
    {
        id: 'bagel',
        term: '베이글 (Bagel)',
        category: '점수/은어',
        definition: '6-0으로 세트를 이기거나 지는 것. 0의 모양이 베이글 빵과 닮아서 붙은 이름입니다.',
        examples: ['첫 세트를 베이글 스코어로 가져왓다.'],
        relatedTerms: ['브레드스틱', '더블 베이글'],
        difficulty: '중급'
    },
    {
        id: 'breadstick',
        term: '브레드스틱 (Breadstick)',
        category: '점수/은어',
        definition: '6-1로 세트를 끝내는 것. 1의 모양이 막대 과자와 닮아서 붙은 이름입니다.',
        examples: ['상대를 압도하며 브레드스틱으로 경기를 마무리했다.'],
        relatedTerms: ['베이글'],
        difficulty: '중급'
    },

    // === 샷 (Shots) ===
    {
        id: 'ace',
        term: '에이스 (Ace)',
        category: '서브',
        definition: '상대방의 라켓에 공이 닿지 않고 그대로 득점하는 서브.',
        examples: ['강력한 센터 에이스로 게임을 끝냈다.'],
        relatedTerms: ['서비스 위너', '더블 폴트'],
        difficulty: '초급'
    },
    {
        id: 'forehand',
        term: '포핸드 (Forehand)',
        category: '타격',
        definition: '라켓을 쥔 손 쪽 방향으로 오는 공을 타격하는 기술. 테니스에서 가장 기본이 되는 공격 수단입니다.',
        examples: ['강력한 인사이드-아웃 포핸드를 구사한다.'],
        relatedTerms: ['백핸드', '탑스핀'],
        difficulty: '초급'
    },
    {
        id: 'backhand',
        term: '백핸드 (Backhand)',
        category: '타격',
        definition: '라켓을 쥔 손의 반대 방향으로 오는 공을 타격하는 기술. 한 손(원핸드) 또는 두 손(투핸드)으로 칩니다.',
        examples: ['안정적인 투핸드 백핸드로 랠리를 이어갔다.'],
        relatedTerms: ['포핸드', '슬라이스'],
        difficulty: '초급'
    },
    {
        id: 'volley',
        term: '발리 (Volley)',
        category: '네트 플레이',
        definition: '공이 바닥에 튀기기 전에 공중에서 직접 타격하는 기술. 주로 네트 앞에서 사용합니다.',
        examples: ['서브 앤 발리 전술로 득점했다.'],
        relatedTerms: ['스매시', '하프 발리'],
        difficulty: '중급'
    },
    {
        id: 'smash',
        term: '스매시 (Smash)',
        category: '네트 플레이',
        definition: '머리 위로 높게 뜬 공을 서브와 유사한 동작으로 강하게 내리꽂는 기술.',
        examples: ['상대의 로브를 강력한 스매시로 응징했다.'],
        relatedTerms: ['발리', '로브'],
        difficulty: '중급'
    },
    {
        id: 'lob',
        term: '로브 (Lob)',
        category: '타격',
        definition: '공을 높게 띄워 상대의 키를 넘겨 뒤쪽 코트로 보내는 샷. 수비용 또는 공격용(탑스핀 로브)으로 사용됩니다.',
        examples: ['네트 앞에 붙은 상대를 키 넘기는 로브로 무력화시켰다.'],
        relatedTerms: ['스매시', '드롭샷'],
        difficulty: '중급'
    },
    {
        id: 'drop-shot',
        term: '드롭 샷 (Drop Shot)',
        category: '타격',
        definition: '공에 역회전을 걸어 네트 바로 뒤에 짧게 떨어뜨리는 기술. 상대의 허를 찌를 때 사용합니다.',
        examples: ['베이스라인 뒤에 있는 상대를 보고 드롭 샷을 시도했다.'],
        relatedTerms: ['슬라이스', '발리'],
        difficulty: '고급'
    },
    {
        id: 'tweener',
        term: '트위너 (Tweener)',
        category: '트릭 샷',
        definition: '다리 사이로 라켓을 넣어 치는 샷. 주로 로브를 쫓아가서 뒤돌아선 상태에서 칩니다.',
        examples: ['관중을 열광시키는 환상적인 트위너 위너가 터졌다.'],
        relatedTerms: ['핫 샷'],
        difficulty: '고급'
    },
    {
        id: 'slice',
        term: '슬라이스 (Slice)',
        category: '타격',
        definition: '공의 아랫부분을 깎아 쳐서 역회전(백스핀)을 주는 기술. 공이 낮게 깔리고 체공 시간이 깁니다.',
        examples: ['백핸드 슬라이스로 템포를 조절했다.'],
        relatedTerms: ['탑스핀', '플랫'],
        difficulty: '중급'
    },
    {
        id: 'topspin',
        term: '탑스핀 (Topspin)',
        category: '타격',
        definition: '공의 윗부분을 쳐서 순회전을 주는 기술. 공이 급격하게 떨어지고 바운드 후 높게 튀어오릅니다.',
        examples: ['헤비 탑스핀으로 상대를 베이스라인 밖으로 밀어냈다.'],
        relatedTerms: ['슬라이스', '플랫'],
        difficulty: '중급'
    },
    {
        id: 'kick-serve',
        term: '킥 서브 (Kick Serve)',
        category: '서브',
        definition: '강한 탑스핀을 걸어 바운드 후 높게, 그리고 좌우로 튀어오르게 만드는 서브. 주로 세컨드 서브로 사용합니다.',
        examples: ['킥 서브로 상대의 백핸드 높은 타점을 공략했다.'],
        relatedTerms: ['플랫 서브', '슬라이스 서브'],
        difficulty: '고급'
    },
    {
        id: 'passing-shot',
        term: '패싱 샷 (Passing Shot)',
        category: '타격',
        definition: '네트 앞에 있는 상대를 지나쳐서(양옆으로) 득점하는 샷.',
        examples: ['절묘한 앵글의 패싱 샷으로 브레이크 포인트 위기를 넘겼다.'],
        relatedTerms: ['어프로치 샷', '발리'],
        difficulty: '중급'
    },
    {
        id: 'approach-shot',
        term: '어프로치 샷 (Approach Shot)',
        category: '전술',
        definition: '네트 앞으로 대시하기 위해 치는 공격적인 샷. 상대를 수세에 몰아넣고 발리로 마무리하기 위함입니다.',
        examples: ['깊은 어프로치 샷 후 깔끔한 발리로 마무리했다.'],
        relatedTerms: ['서브 앤 발리', '발리'],
        difficulty: '중급'
    },

    // === 코트 및 규칙 (Court & Rules) ===
    {
        id: 'baseline',
        term: '베이스라인 (Baseline)',
        category: '코트',
        definition: '코트의 가장 뒤쪽 경계선. 이 선 밖으로 나가면 아웃입니다.',
        examples: ['베이스라인 플레이어는 뒤에서 랠리를 주도한다.'],
        relatedTerms: ['서비스 라인', '사이드 라인'],
        difficulty: '초급'
    },
    {
        id: 'service-line',
        term: '서비스 라인 (Service Line)',
        category: '코트',
        definition: '서브룰 넣을 때 공이 넘어가야 하는 네트와 베이스라인 사이의 선.',
        examples: ['공이 서비스 라인을 살짝 벗어나 폴트가 선언되었다.'],
        relatedTerms: ['베이스라인', '서비스 박스'],
        difficulty: '초급'
    },
    {
        id: 'alley',
        term: '앨리 (Alley)',
        category: '코트',
        definition: '단식 라인과 복식 라인 사이의 좁은 공간. 복식 경기에서만 사용됩니다.',
        examples: ['복식에서는 앨리 공간도 인으로 간주된다.'],
        relatedTerms: ['단식', '복식'],
        difficulty: '초급'
    },
    {
        id: 'no-mans-land',
        term: '노 맨즈 랜드 (No-Man\'s Land)',
        category: '코트',
        definition: '베이스라인과 서비스 라인 사이의 공간. 공이 발 밑으로 떨어져 치기 어렵기 때문에 오래 머물지 말아야 할 곳입니다.',
        examples: ['노 맨즈 랜드에 어정쩡하게 서 있다가 발 밑 공격을 당했다.'],
        relatedTerms: ['데드 존'],
        difficulty: '중급'
    },
    {
        id: 'fault',
        term: '폴트 (Fault)',
        category: '규칙',
        definition: '서브가 서비스 박스에 들어가지 않거나 네트에 걸리는 실책.',
        examples: ['첫 서브 폴트 후 안전한 세컨드 서브를 넣었다.'],
        relatedTerms: ['더블 폴트', '렛'],
        difficulty: '초급'
    },
    {
        id: 'double-fault',
        term: '더블 폴트 (Double Fault)',
        category: '규칙',
        definition: '서브 기회 2번을 모두 실패하여 점수를 잃는 것.',
        examples: ['결정적인 순간에 더블 폴트로 게임을 내주었다.'],
        relatedTerms: ['폴트', '에이스'],
        difficulty: '초급'
    },
    {
        id: 'let',
        term: '렛 (Let)',
        category: '규칙',
        definition: '서브가 네트를 맞고 서비스 박스에 들어간 경우, 또는 경기 중 방해 요소가 발생했을 때 플레이를 다시 하는 것. 서브 렛은 횟수 제한이 없습니다.',
        examples: ['서브가 네트를 스치고 들어가 렛이 선언되었다.'],
        relatedTerms: ['폴트'],
        difficulty: '초급'
    },
    {
        id: 'foot-fault',
        term: '풋 폴트 (Foot Fault)',
        category: '규칙',
        definition: '서브 임팩트 전에 발이 베이스라인을 밟거나 넘어가는 반칙.',
        examples: ['중요한 포인트에서 풋 폴트를 범해 흔들렸다.'],
        relatedTerms: ['폴트'],
        difficulty: '중급'
    },
    {
        id: 'challenge',
        term: '챌린지 (Challenge)',
        category: '규칙',
        definition: '심판의 판정에 이의를 제기하고 비디오 판독(호크아이)을 요청하는 것.',
        examples: ['아웃 판정에 대해 챌린지를 요청했으나 원심이 유지되었다.'],
        relatedTerms: ['호크아이', '라인 콜'],
        difficulty: '중급'
    },

    // === 전술 및 기타 (Tactics & Misc) ===
    {
        id: 'serve-and-volley',
        term: '서브 앤 발리 (Serve & Volley)',
        category: '전술',
        definition: '서브를 넣은 직후 네트 앞으로 대시하여 상대의 리턴을 발리로 처리하는 공격적인 전술.',
        examples: ['서브 앤 발리로 상대의 리듬을 완전히 뺏었다.'],
        relatedTerms: ['어프로치', '베이스라이너'],
        difficulty: '중급'
    },
    {
        id: 'moonball',
        term: '문볼 (Moonball)',
        category: '전술',
        definition: '공을 매우 높고 느리게 띄워 보내는 샷. 상대의 공격 리듬을 끊거나 실수를 유도할 때 씁니다.',
        examples: ['상대의 끈질긴 문볼 작전에 말려들어 실수를 연발했다.'],
        relatedTerms: ['로브', '푸셔'],
        difficulty: '중급'
    },
    {
        id: 'pusher',
        term: '푸셔 (Pusher)',
        category: '유형',
        definition: '공격보다는 실수 없이 공을 넘기는 데 집중하는 수비적인 플레이어를 낮잡아 부르는 말.',
        examples: ['푸셔를 상대할 때는 인내심을 갖고 확실한 찬스를 기다려야 한다.'],
        relatedTerms: ['카운터 펀처', '공격형 베이스라이너'],
        difficulty: '중급'
    },
    {
        id: 'golden-set',
        term: '골든 세트 (Golden Set)',
        category: '기록',
        definition: '한 세트의 모든 포인트(24포인트)를 따내며 6-0으로 승리하는, 프로 테니스 역사상 극히 드문 기록.',
        examples: ['오늘 경기에서 기적 같은 골든 세트가 나올 뻔했다.'],
        relatedTerms: ['베이글', '퍼펙트 게임'],
        difficulty: '고급'
    },
    {
        id: 'grand-slam',
        term: '그랜드 슬램 (Grand Slam)',
        category: '대회',
        definition: '테니스 4대 메이저 대회(호주 오픈, 롤랑가로스, 윔블던, US 오픈)를 통칭하는 말. 한 해에 4개를 모두 우승하면 "캘린더 그랜드 슬램"이라 합니다.',
        examples: ['그는 커리어 그랜드 슬램을 달성한 전설적인 선수다.'],
        relatedTerms: ['마스터스 1000', 'ATP 파이널스'],
        difficulty: '초급'
    },
    {
        id: 'unforced-error',
        term: '언포스드 에러 (Unforced Error)',
        category: '기록',
        definition: '상대의 공격에 의해서가 아니라, 자신의 실수로 점수를 잃는 것. (예: 쉬운 공을 네트에 박거나 아웃시키는 경우)',
        examples: ['언포스드 에러를 줄이는 것이 승리의 열쇠다.'],
        relatedTerms: ['위너', '포스드 에러'],
        difficulty: '중급'
    },
    {
        id: 'winner',
        term: '위너 (Winner)',
        category: '기록',
        definition: '상대가 라켓을 대지 못하거나, 댔더라도 유효한 타구로 넘기지 못하게 만든 결정적인 샷.',
        examples: ['포핸드 위너가 터지면서 경기를 뒤집었다.'],
        relatedTerms: ['언포스드 에러', '에이스'],
        difficulty: '초급'
    },
    {
        id: 'inside-out',
        term: '인사이드-아웃 (Inside-Out)',
        category: '전술',
        definition: '자신의 주무기(주로 포핸드)를 치기 위해 백핸드 쪽으로 온 공을 몸을 돌아 서서 반대쪽 대각선 방향으로 치는 샷.',
        examples: ['나달의 인사이드-아웃 포핸드는 알고도 막기 힘들다.'],
        relatedTerms: ['인사이드-인', '역크로스'],
        difficulty: '고급'
    },
    {
        id: 'lucky-loser',
        term: '럭키 루저 (Lucky Loser)',
        category: '대회',
        definition: '예선 결승에서 패배했으나, 본선 진출자 중 기권자가 생겨 운 좋게 본선에 합류한 선수.',
        examples: ['럭키 루저로 본선에 올라 우승까지 차지하는 이변을 연출했다.'],
        relatedTerms: ['와일드 카드', '예선 통과자(Qualifier)'],
        difficulty: '중급'
    },
    {
        id: 'wild-card',
        term: '와일드 카드 (Wild Card)',
        category: '대회',
        definition: '랭킹이 부족하여 자력으로 출전할 수 없는 선수에게 주최 측 권한으로 부여하는 특별 출전권.',
        examples: ['부상 복귀 후 와일드 카드를 받아 대회에 출전했다.'],
        relatedTerms: ['럭키 루저', '시드'],
        difficulty: '중급'
    },
    {
        id: 'seed',
        term: '시드 (Seed)',
        category: '대회',
        definition: '대진표 작성 시 강한 선수들이 초반에 서로 만나지 않도록 분산 배치하는 시스템. 랭킹 순으로 배정됩니다.',
        examples: ['1번 시드를 받은 선수가 1회전에서 탈락하는 이변이 발생했다.'],
        relatedTerms: ['드로우', '언시드'],
        difficulty: '초급'
    },
    {
        id: 'game-point',
        term: '게임 포인트 (Game Point)',
        category: '점수',
        definition: '1포인트만 더 따면 해당 게임을 승리하게 되는 상황.',
        examples: ['40-30 게임 포인트 기회를 살리지 못하고 듀스를 허용했다.'],
        relatedTerms: ['세트 포인트', '매치 포인트', '브레이크 포인트'],
        difficulty: '초급'
    },
    {
        id: 'break-point',
        term: '브레이크 포인트 (Break Point)',
        category: '점수',
        definition: '리시버(서브를 받는 선수)가 1포인트만 더 따면 게임을 이기는 상황. 서브 게임을 뺏어올 절호의 기회입니다.',
        examples: ['트리플 브레이크 포인트 위기에서 에이스로 탈출했다.'],
        relatedTerms: ['게임 포인트', '홀드(Hold)', '브레이크(Break)'],
        difficulty: '초급'
    },
    {
        id: 'match-point',
        term: '매치 포인트 (Match Point)',
        category: '점수',
        definition: '1포인트만 더 따면 경기 전체를 승리하게 되는 상황. 가장 긴장되는 순간입니다.',
        examples: ['챔피언십 포인트(결승전 매치 포인트)를 잡았다.'],
        relatedTerms: ['세트 포인트', '게임 포인트'],
        difficulty: '초급'
    },
    {
        id: 'hold',
        term: '홀드 (Hold)',
        category: '기록',
        definition: '자신의 서브 게임을 지켜내고 승리하는 것.',
        examples: ['서브 게임을 러브 게임으로 홀드하며 분위기를 가져왔다.'],
        relatedTerms: ['브레이크'],
        difficulty: '초급'
    },
    {
        id: 'break',
        term: '브레이크 (Break)',
        category: '기록',
        definition: '상대방의 서브 게임을 이겨서 가져오는 것.',
        examples: ['첫 게임부터 브레이크에 성공하며 기선을 제압했다.'],
        relatedTerms: ['홀드', '브레이크 포인트'],
        difficulty: '초급'
    },
    {
        id: 'continental-grip',
        term: '컨티넨탈 그립 (Continental Grip)',
        category: '장비/기술',
        definition: '라켓 그립을 잡는 방법 중 하나로, 악수하듯 잡는 방식. 서브, 발리, 스매시 등 다양한 기술에 필수적입니다.',
        examples: ['서브를 잘 넣으려면 컨티넨탈 그립에 익숙해져야 한다.'],
        relatedTerms: ['이스턴 그립', '웨스턴 그립'],
        difficulty: '중급'
    },
    {
        id: 'dampener',
        term: '댐프너 (Dampener)',
        category: '장비',
        definition: '라켓 스트링에 부착하여 타구 시 발생하는 진동을 줄여주는 작은 고무 장치.',
        examples: ['댐프너를 잃어버려서 타구감이 이상했다.'],
        relatedTerms: ['엘보', '스트링'],
        difficulty: '초급'
    },
    {
        id: 'gut',
        term: '천연 거트 (Gut)',
        category: '장비',
        definition: '소의 창자로 만든 최고급 스트링. 터치감과 텐션 유지력이 뛰어나지만 가격이 비싸고 습기에 약합니다.',
        examples: ['선수들은 주로 천연 거트와 폴리 스트링을 하이브리드로 사용한다.'],
        relatedTerms: ['폴리', '인조 쉽'],
        difficulty: '고급'
    }
];
