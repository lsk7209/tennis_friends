const PARTICLES = {
  "은/는": ["은", "는"],
  "이/가": ["이", "가"],
  "을/를": ["을", "를"],
  "과/와": ["과", "와"],
  "으로/로": ["으로", "로"],
};

const DIGIT_FINALS = {
  "0": "ㅇ",
  "1": "ㄹ",
  "2": "",
  "3": "ㅁ",
  "4": "",
  "5": "",
  "6": "ㄱ",
  "7": "ㄹ",
  "8": "ㄹ",
  "9": "",
};

function finalConsonant(value) {
  const normalized = String(value).trim().replace(/[)\]}'"”’.,!?]+$/u, "");
  const last = normalized.at(-1) ?? "";
  const code = last.charCodeAt(0);

  if (code >= 0xac00 && code <= 0xd7a3) {
    const jong = (code - 0xac00) % 28;
    return jong === 0 ? "" : jong === 8 ? "ㄹ" : "받침";
  }

  if (last in DIGIT_FINALS) return DIGIT_FINALS[last];
  if (/[A-Za-z]/.test(last)) return /[lmnrLMNR]/.test(last) ? "받침" : "";
  return "";
}

export function withKoreanParticle(value, pair) {
  const particles = PARTICLES[pair];
  if (!particles) throw new Error(`Unsupported Korean particle pair: ${pair}`);

  const final = finalConsonant(value);
  const particle = pair === "으로/로" && final === "ㄹ"
    ? particles[1]
    : final
      ? particles[0]
      : particles[1];
  return `${value}${particle}`;
}
