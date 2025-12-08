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
         * 예: '상대를 질식시키는 "코트 위의 체스 마스터", 빅3 시대를 끝낸 가장 지능적인 승부사.'
         */
        oneLineSummary: string;

        /**
         * 왜 주목해야 하는가? (HTML)
         * - Highlight Box 사용 권장
         * - 예시:
         * <div class="highlight-box">
         *     <div class="highlight-box-title">🏆 타이틀</div>
         *     <p>내용...</p>
         * </div>
         */
        whyNotable: string;

        /**
         * 플레이 스타일 (HTML)
         * - "별명/정의" 강조
         * - Highlight Box 내 리스트 사용 권장
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
         * - 주요 키워드 색상 강조 (text-blue-700 등)
         * - 인용구 (<blockquote>) 활용
         */
        growthStory: string;

        /**
         * 대표 경기 (Signature Match)
         */
        signatureMatch: {
            title: string;
            date: string;
            description: string; // <strong> 등으로 점수나 핵심 내용 강조
        };

        /**
         * 팬 어필 / 입덕 포인트 (New Standard)
         * - Highlight Box 사용 권장
         * - 선수의 반전 매력, 성격, 에피소드 등
         */
        fanAppeal?: string;

        /**
         * 최근 폼 / 관전 포인트 (HTML)
         * - <p><strong>"키워드"</strong></p>
         * - 설명 문단
         */
        recentForm: string;

        /**
         * 자주 묻는 질문 (AEO/Voice Search 최적화)
         * - 구체적이고 대화체인 질문 권장
         * - 답변은 3-4문장 내외, 두괄식 구성
         */
        faq?: Array<{
            question: string;
            answer: string;
        }>;
    };
}

/**
 * [템플릿 가이드 - The "Gold Standard"]
 * - 톤앤매너: 전문적이지만 읽기 쉬운 한국어. '해요'체 보다는 '합니다'체 사용.
 * - 시각화: 
 *   - Highlight Box: <div class="highlight-box"><div class="highlight-box-title">...</div>...</div>
 *   - Blockquote: <blockquote>...</blockquote>
 *   - 강조: <span class="font-semibold text-blue-700">...</span>, <span class="underline decoration-wavy ...">...</span>
 * - AEO: FAQ 질문은 구체적으로 ("~는 언제인가요?" X -> "~가 세계 1위가 된 시점과 기간은?" O)
 */

/* 예시 데이터 (Daniil Medvedev - The Gold Standard) */
export const EXAMPLE_PLAYER: PlayerTemplate = {
    name: '다닐 메드베데프', nameEn: 'Daniil Medvedev', country: 'Russia', countryFlag: '🇷🇺', image: '/images/players/daniil-medvedev.png', gender: 'male', plays: 'Right-handed', backhand: 'Two-handed',
    longBio: '코트 위의 체스 마스터. 198cm의 장신에서 나오는 강력한 서브와 투어 최고의 수비력, 그리고 상대를 질식시키는 지능적인 경기 운영으로 빅3의 독주를 막아선 차세대 황제입니다.',
    detailedProfile: {
        oneLineSummary: '상대를 질식시키는 "코트 위의 체스 마스터", 빅3 시대를 끝낸 가장 지능적인 승부사.',
        whyNotable: `
            <div class="highlight-box">
                <div class="highlight-box-title">🏆 빅3의 독주를 멈춰 세운 난공불락의 벽</div>
                <p>다닐 메드베데프는 2021년 <strong>US 오픈 결승에서 노박 조코비치를 3-0으로 완파</strong>하며, 조코비치의 '캘린더 그랜드슬램' 대기록 달성을 저지한 주인공입니다. 이는 2000년대 이후 테니스 역사상 가장 충격적인 결승전 중 하나로 꼽힙니다.</p>
            </div>
            <p>그는 단순히 공을 세게 치는 것이 아니라, <span class="px-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 font-bold">'코트 위의 체스 마스터'</span>라는 별명처럼 상대의 수를 미리 읽고 가장 까다로운 코스로 공을 보내 실수를 유발합니다.</p>
        `,
        playStyle: `
            <p><strong>"비정통적 수비형 카운터 펀처 (Unorthodox Counter Puncher)"</strong></p>
            <p>메드베데프의 테니스는 교과서와는 거리가 멉니다. 하지만 그 **비정통성(Unorthodox)**이 바로 그의 가장 큰 무기입니다.</p>
            <div class="highlight-box">
                <div class="highlight-box-title">🐙 메드베데프의 3가지 "사기 유닛" 기술</div>
                <ul class="list-disc pl-5 my-0 space-y-2">
                    <li><strong>딥 리턴 포지션:</strong> 중계 화면 밖으로 나갈 정도로 뒤에서 리턴을 준비합니다.</li>
                    <li><strong>문어 (The Octopus):</strong> 긴 팔다리로 코트 구석구석을 커버하는 능력입니다.</li>
                    <li><strong>초저공 플랫 스트로크:</strong> 네트를 스치듯 낮게 깔리는 '레이저 샷'을 구사합니다.</li>
                </ul>
            </div>
        `,
        hexagonStats: [
            { name: '수비 (Defense)', score: 10, description: '투어 역사상 가장 넓은 수비 범위를 자랑하는 통곡의 벽.' },
            { name: '전술 (Tactics)', score: 10, description: '상대의 멘탈과 전략을 완전히 무너뜨리는 두뇌 플레이.' },
            { name: '서브 (Serve)', score: 9.5, description: '200km/h를 쉽게 넘기는 플랫 서브.' },
            { name: '백핸드 (Backhand)', score: 9.5, description: '공격과 수비 밸런스가 완벽한 무기.' },
            { name: '포핸드 (Forehand)', score: 8.5, description: '폼은 특이하지만 타점 잡기가 까다로움.' },
            { name: '멘탈 (Mental)', score: 9, description: '관중의 야유조차 에너지로 바꾸는 강철 멘탈.' }
        ],
        growthStory: `
            <p>러시아 모스크바 태생으로 <span class="font-semibold text-blue-700 dark:text-blue-400">수학 영재 학교</span> 출신입니다.</p>
            <blockquote>
                "나는 재능이 없었다. 그래서 머리를 써야만 했다."
            </blockquote>
            <p>프랑스로 건너가 <strong>질 세바라</strong> 코치를 만나 독특한 폼을 장점으로 승화시켰고, 결국 <span class="bg-yellow-100 dark:bg-yellow-900/30 px-1 rounded">세계 1위</span>까지 올랐습니다.</p>
        `,
        signatureMatch: {
            title: '2021 US 오픈 결승 vs 노박 조코비치',
            date: '2021. 09. 12',
            description: '전 세계의 예상을 뒤엎고 <strong>세트 스코어 3-0</strong>으로 완승을 거두며 생애 첫 메이저 타이틀을 획득했습니다.'
        },
        fanAppeal: `
            <div class="highlight-box">
                <div class="highlight-box-title">😈 미워할 수 없는 "솔직한 빌런"</div>
                <p>코트 위에서는 관중과 싸우지만 경기 후엔 쿨하게 인정하는 반전 매력의 소유자입니다.</p>
            </div>
        `,
        recentForm: `
            <p><strong>"하드 코트의 지배자"</strong></p>
            <p>여전히 <span class="font-bold text-indigo-600 dark:text-indigo-400">강력한 우승 후보</span>이며, 클레이/잔디 코트에서도 성적을 내며 <span class="underline decoration-2 decoration-green-400 underline-offset-2">'올라운더'</span>로 진화 중입니다.</p>
        `,
        faq: [
            {
                question: '다닐 메드베데프는 언제, 얼마나 오랫동안 세계 랭킹 1위를 유지했나요?',
                answer: '2022년 2월 28일, "빅4" 체제를 깨고 1위에 등극하여 총 16주간 유지했습니다.'
            }
        ]
    }
};
