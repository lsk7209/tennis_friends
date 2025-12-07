export interface PlayerTemplate {
    /**
     * 선수 이름 (한글)
     * 예: "노박 조코비치"
     */
    name: string;

    /**
     * 선수 이름 (영문)
     * 예: "Novak Djokovic"
     */
    nameEn: string;

    /**
     * 국가
     * 예: "Serbia"
     */
    country: string;

    /**
     * 국기 이모지
     * 예: "🇷🇸"
     */
    countryFlag: string;

    /**
     * 이미지 경로
     * 예: "/images/players/novak-djokovic.png"
     */
    image: string;

    /**
     * 성별
     */
    gender: 'male' | 'female';

    /**
     * 주로 사용하는 손
     * 예: "Right-handed"
     */
    plays: string;

    /**
     * 백핸드 스타일
     * 예: "Two-handed", "One-handed"
     */
    backhand: string;

    /**
     * 짧은 소개글 (카드 등에 표시)
     */
    longBio: string;

    /**
     * 상세 프로필 (본문 페이지용) - Rich Content
     */
    detailedProfile: {
        /**
         * 한 줄 요약 (H2 아래 들어갈 핵심 문구)
         * 예: '기록 파괴자이자 살아있는 전설, 테니스의 모든 역사를 새로 쓴 "무결점의 GOAT".'
         */
        oneLineSummary: string;

        /**
         * 왜 주목해야 하는가? (HTML)
         * - <p><strong>"핵심 키워드/별명"</strong></p>
         * - <p>설명 문단 1</p>
         * - <p>설명 문단 2 (선택)</p>
         */
        whyNotable: string;

        /**
         * 플레이 스타일 (HTML)
         * - <p><strong>"스타일 정의 (예: 공격적 베이스라이너)"</strong></p>
         * - <p>설명 문단</p>
         * - <ul class="list-disc pl-5 my-4 space-y-2">
         * -     <li><strong>강점 1:</strong> 설명</li>
         * -     <li><strong>강점 2:</strong> 설명</li>
         * -     <li><strong>강점 3:</strong> 설명</li>
         * - </ul>
         */
        playStyle: string;

        /**
         * 육각형 스탯 (6개 필수)
         * - score: 1~10 (0.5 단위)
         */
        hexagonStats: [
            { name: string; score: number; description: string },
            { name: string; score: number; description: string },
            { name: string; score: number; description: string },
            { name: string; score: number; description: string },
            { name: string; score: number; description: string },
            { name: string; score: number; description: string }
        ];

        /**
         * 성장 스토리 (HTML)
         * - <p>문단 1 (출신, 배경)</p>
         * - <p>문단 2 (주요 성과, 현재 위치)</p>
         */
        growthStory: string;

        /**
         * 대표 경기 (Signature Match)
         */
        signatureMatch: {
            title: string; // 예: "2019 윔블던 결승 vs 로저 페더러"
            date: string;  // 예: "2019. 07. 14"
            description: string; // 경기 내용 및 의미 설명
        };

        /**
         * 최근 폼 / 관전 포인트 (HTML)
         * - <p><strong>"키워드"</strong></p>
         * - <p>설명 문단</p>
         */
        recentForm: string;

        /**
         * 자주 묻는 질문 (AEO 최적화)
         * - 3-5개의 핵심 질문과 답변
         */
        faq?: Array<{
            question: string;
            answer: string;
        }>;
    };
}

/**
 * [템플릿 가이드]
 * - 톤앤매너: 전문적이지만 읽기 쉬운 한국어. '해요'체 보다는 '합니다'체 권장.
 * - 강조: 핵심 키워드나 문장은 <strong> 태그나 ** (마크다운) 사용 가능하나, HTML 문자열 내에서는 <strong> 권장.
 * - 길이: 모바일 가독성을 위해 문단은 3-4줄을 넘지 않도록 구성.
 */

/* 예시 데이터 (Novak Djokovic)
export const EXAMPLE_PLAYER: PlayerTemplate = {
    name: '노박 조코비치', nameEn: 'Novak Djokovic', country: 'Serbia', countryFlag: '🇷🇸', image: '/images/players/novak-djokovic.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
    longBio: '테니스 역사상 가장 위대한 선수(GOAT). 무결점의 테크닉과 불굴의 정신력, 그리고 압도적인 유연성으로 그랜드슬램 최다 우승 기록을 보유하고 있습니다.',
    detailedProfile: {
        oneLineSummary: '기록 파괴자이자 살아있는 전설, 테니스의 모든 역사를 새로 쓴 "무결점의 GOAT".',
        whyNotable: `
            <p><strong>"The Great of All Time (GOAT)"</strong></p>
            <p>노박 조코비치를 설명하는 데는 긴 말이 필요 없습니다. **그랜드슬램 최다 우승(24회), 마스터스 1000 최다 우승, ATP 파이널스 최다 우승, 역대 최장기간 세계 랭킹 1위** 등 테니스의 거의 모든 주요 기록을 보유하고 있습니다.</p>
            <p>페더러의 우아함과 나달의 투지 사이에서, 조코비치는 '완벽함'이라는 단어로 정의됩니다. 어떤 상황에서도 무너지지 않는 강철 같은 멘탈과, 신체 능력을 극한으로 끌어올린 유연성은 그를 난공불락의 요새로 만들었습니다.</p>
        `,
        playStyle: `
            <p><strong>"육각형의 정점 (Complete Player)"</strong></p>
            <p>조코비치는 뚜렷한 약점이 없는 '무결점 플레이어'입니다. 공격과 수비의 완벽한 조화, 정교한 리턴, 그리고 코트 구석구석을 찌르는 정밀함은 타의 추종을 불허합니다.</p>
            <ul class="list-disc pl-5 my-4 space-y-2">
                <li><strong>리턴:</strong> 역사상 최고의 리터너로 꼽힙니다. 상대의 강서브를 발 밑으로 떨어뜨려 공격권 자체를 무력화시킵니다.</li>
                <li><strong>유연성:</strong> '고무 인간'이라 불릴 정도로 관절 가동 범위가 넓어, 불가능해 보이는 수비 상황에서도 균형을 잃지 않고 공을 받아냅니다.</li>
                <li><strong>백핸드:</strong> 투어 역사상 가장 완벽한 투핸드 백핸드를 구사합니다. 다운더라인 샷은 그의 필살기입니다.</li>
            </ul>
        `,
        hexagonStats: [
            { name: '리턴 (Return)', score: 10, description: '역사상 최고의 리턴 능력.' },
            { name: '백핸드 (Backhand)', score: 10, description: '수비와 공격 모두 완벽한 투어 최고의 백핸드.' },
            { name: '멘탈 (Mental)', score: 10, description: '타이브레이크 승률 역대 1위. 압박감을 즐기는 강심장.' },
            { name: '체력 (Stamina)', score: 10, description: '5시간의 혈투 끝에도 지치지 않는 무한 동력.' },
            { name: '수비 (Defense)', score: 10, description: '코트의 모든 공을 받아내는 통곡의 벽.' },
            { name: '서브 (Serve)', score: 9, description: '화려하진 않지만 정교한 코스 공략으로 에이스를 양산함.' }
        ],
        growthStory: `
            <p>세르비아 베오그라드에서 태어난 조코비치는 전쟁의 포화 속에서 테니스를 배웠습니다. 이러한 성장 배경은 그에게 누구에게도 지지 않는 불굴의 정신력을 심어주었습니다.</p>
            <p>2008년 첫 호주 오픈 우승 이후, 글루텐 프리 식단 등 철저한 자기 관리를 통해 신체적 한계를 극복했습니다. 2011년 시즌 43연승이라는 대기록과 함께 페더러-나달의 양강 체제를 깨뜨리며 1인 독재 시대를 열었습니다.</p>
        `,
        signatureMatch: {
            title: '2019 윔블던 결승 vs 로저 페더러',
            date: '2019. 07. 14',
            description: '테니스 역사상 가장 위대한 결승전 중 하나. 마지막 세트 12-12 타이브레이크까지 가는 4시간 57분의 혈투 끝에 우승을 차지했습니다. 특히 매치 포인트 위기(15-40)를 두 번이나 극복하고 역전승을 일궈낸 이 경기는 그의 멘탈을 증명하는 최고의 명장면입니다.'
        },
        recentForm: `
            <p><strong>"여전히 정상에서"</strong></p>
            <p>30대 중반을 훌쩍 넘긴 나이에도 여전히 전성기 기량을 유지하고 있습니다. 2023년 그랜드슬램 3회 우승, 2024 파리 올림픽 금메달을 목표로 달리는 그는 여전히 모든 대회의 가장 강력한 우승 후보입니다.</p>
        `
    }
};
*/
