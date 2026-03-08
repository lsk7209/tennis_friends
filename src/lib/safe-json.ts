/**
 * URL searchParams에서 JSON을 안전하게 파싱합니다.
 * 잘못된 JSON이 들어와도 크래시하지 않고 fallback 값을 반환합니다.
 */
export function safeJsonParse<T>(value: string | null, fallback: T): T {
  if (!value) return fallback;
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallback;
  }
}
