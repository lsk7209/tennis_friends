import { ImageResponse } from "next/og";

export const runtime = "edge";
export const revalidate = false;

// Noto Sans KR 폰트 로드 (한글 지원)
async function loadKoreanFont(): Promise<ArrayBuffer | null> {
  try {
    const res = await fetch(
      "https://fonts.gstatic.com/s/notosanskr/v36/PbyxFmXiEBPT4ITbgNA5Cgms3iLIm13lTS1-7wl2A47.woff2",
      { next: { revalidate: 86400 } }, // 1일 캐시
    );
    if (!res.ok) return null;
    return res.arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "TennisFriends";
  const sub = searchParams.get("sub") ?? "테니스 실력 향상 플랫폼";

  const fontData = await loadKoreanFont();

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e40af 0%, #065f46 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        fontFamily: fontData ? '"Noto Sans KR", sans-serif' : "sans-serif",
      }}
    >
      {/* 로고 */}
      <div
        style={{
          fontSize: 28,
          color: "#86efac",
          marginBottom: 24,
          letterSpacing: 0,
        }}
      >
        🎾 TennisFriends
      </div>

      {/* 제목 */}
      <div
        style={{
          fontSize: title.length > 30 ? 44 : 56,
          fontWeight: "bold",
          color: "white",
          textAlign: "center",
          lineHeight: 1.25,
          maxWidth: "900px",
        }}
      >
        {title}
      </div>

      {/* 서브타이틀 */}
      <div
        style={{
          fontSize: 24,
          color: "#bfdbfe",
          marginTop: 24,
          textAlign: "center",
        }}
      >
        {sub}
      </div>

      {/* 하단 URL */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          right: 60,
          fontSize: 18,
          color: "#6ee7b7",
          opacity: 0.8,
        }}
      >
        tennisfrens.com
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      ...(fontData && {
        fonts: [
          {
            name: "Noto Sans KR",
            data: fontData,
            style: "normal",
            weight: 400,
          },
        ],
      }),
    },
  );
}
