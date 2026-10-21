export type BlogVisual = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

const blogVisuals: Record<string, BlogVisual> = {
  "t09-20-minute-wall-practice-log": {
    src: "/images/blog/20-minute-wall-practice.webp",
    alt: "야외 연습 코트에서 벽을 향해 포핸드 벽치기를 하는 테니스 동호인",
    caption:
      "벽치기는 강한 공을 오래 치는 훈련보다 안전한 거리와 일정한 접촉을 확인하는 짧은 루틴으로 활용합니다.",
    width: 1600,
    height: 900,
  },
  "oct26-pre-serve-routine": {
    src: "/images/blog/tennis-serve-routine.jpg",
    alt: "베이스라인에서 서브를 준비하며 프리서브 루틴을 실행하는 테니스 선수",
    caption:
      "프리서브 루틴은 중요한 포인트에서 일정한 호흡과 3회의 공 바운드로 심박수를 안정시키고 타깃 집중력을 높입니다.",
    width: 1376,
    height: 768,
  },
  "nov26-forehand-direction-selection": {
    src: "/images/blog/forehand-crosscourt.jpg",
    alt: "베이스라인에서 크로스코트 방향으로 날카로운 포핸드 스트로크를 구사하는 테니스 선수",
    caption:
      "네트 중앙 높이 0.914m와 대각선 비거리 25.14m의 안전 마진을 이해하면 포핸드 랠리의 안정감이 극대화됩니다.",
    width: 1376,
    height: 768,
  },
  "racket-grip-size-and-overgrip-guide": {
    src: "/images/blog/racket-grip-measurement.jpg",
    alt: "테니스 라켓 그립을 쥐고 적정 그립 사이즈와 오버그립 상태를 점검하는 손",
    caption:
      "손가락 끝과 손바닥 사이의 적정 간격(검지 하나 폭)과 밀착력 높은 오버그립은 임팩트 시 라켓 회전을 방지하고 엘보 충격을 줄여줍니다.",
    width: 1376,
    height: 768,
  },
  "nov26-winter-string-tension-guide": {
    src: "/images/blog/tennis-string-tension-guide.jpg",
    alt: "전문 테니스 스트링 머신에서 정밀하게 스트링을 작업하며 텐션을 점검하는 모습",
    caption:
      "기온이 급감하는 늦가을과 겨울철에는 스트링 탄성이 굳고 공 내부 압력이 떨어지므로 텐션을 2~5파운드 낮추어야 스윗스팟과 팔꿈치를 지킬 수 있습니다.",
    width: 1376,
    height: 768,
  },
  "nov26-doubles-deep-cross-return": {
    src: "/images/blog/doubles-cross-return.jpg",
    alt: "코트 베이스라인에서 상대 서버의 공을 향해 컴팩트한 양손 백핸드 크로스 리턴을 구사하는 테니스 선수",
    caption:
      "복식 리턴의 핵심은 풀 스윙이 아니라 컴팩트한 테이크백으로 네트 위 30cm를 통과시켜 상대 전위의 포칭을 피하고 서버의 발밑에 떨어뜨리는 것입니다.",
    width: 1376,
    height: 768,
  },
};

export function getBlogVisual(slug: string): BlogVisual | undefined {
  return blogVisuals[slug];
}
