// Pretendard 폰트는 CDN을 통해 로드 (최적화된 방식)
// 로컬 폰트가 필요한 경우 아래 주석을 해제하고 폰트 파일을 public/fonts에 추가
/*
import localFont from "next/font/local";

export const Pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
});
*/

// CDN 폰트 사용을 위한 더미 객체 (CSS에서 직접 로드)
export const Pretendard = {
  variable: "--font-pretendard",
} as const;

