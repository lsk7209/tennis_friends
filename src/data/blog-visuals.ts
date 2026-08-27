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
};

export function getBlogVisual(slug: string): BlogVisual | undefined {
  return blogVisuals[slug];
}
