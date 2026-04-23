import React from "react";

interface YmylDisclaimerProps {
  /**
   * YMYL 주제 분류
   * - medical: 부상·건강·의료
   * - nutrition: 영양·식단
   * - fitness: 운동·훈련 강도
   */
  topic?: "medical" | "nutrition" | "fitness";
  className?: string;
}

const MESSAGES: Record<NonNullable<YmylDisclaimerProps["topic"]>, string> = {
  medical:
    "이 글의 부상 관련 정보는 일반적인 참고 자료입니다. 통증·부상이 의심되면 반드시 정형외과·재활의학과 전문의와 상담하세요. 자가 진단·자가 치료는 증상을 악화시킬 수 있습니다.",
  nutrition:
    "이 글의 영양·식단 정보는 일반적인 참고 자료입니다. 지병·알러지·특수 식이 요법 중이라면 반드시 의사 또는 영양사와 상담 후 적용하세요.",
  fitness:
    "이 글의 훈련 강도는 일반적인 참고 자료입니다. 기저질환이 있거나 고강도 운동 경험이 적다면 반드시 지도자·의료진과 상담 후 진행하세요.",
};

const YmylDisclaimer: React.FC<YmylDisclaimerProps> = ({
  topic = "medical",
  className = "",
}) => {
  return (
    <aside
      className={`my-6 rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4 text-sm leading-relaxed text-amber-950 dark:bg-amber-950/30 dark:text-amber-100 ${className}`}
      role="note"
      aria-label="전문가 상담 권장 고지"
    >
      <strong className="mr-1 font-semibold">⚠️ 전문가 상담 권장:</strong>
      {MESSAGES[topic]}
    </aside>
  );
};

export default YmylDisclaimer;
