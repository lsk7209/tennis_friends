import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const read = (relativePath) =>
  readFile(new URL(`../${relativePath}`, import.meta.url), "utf8");

const [home, questions, contactLayout, contact, privacy, utility, booking, bookingTest, bookingResult, distribution, cta] =
  await Promise.all([
    read("src/app/page.tsx"),
    read("src/lib/questions.ts"),
    read("src/app/contact/layout.tsx"),
    read("src/app/contact/page.tsx"),
    read("src/app/privacy/page.tsx"),
    read("src/app/utility/page.tsx"),
    read("src/app/utility/court-booking/page.tsx"),
    read("src/app/utility/court-booking/test/page.tsx"),
    read("src/app/utility/court-booking/result/page.tsx"),
    read("src/app/_components/home/court-lines.tsx"),
    read("src/components/CTASection.tsx"),
  ]);

const questionCount = (questions.match(/\bid:\s*\d+,/g) || []).length;
assert.equal(questionCount, 15, "NTRP question inventory changed unexpectedly");
assert.match(home, new RegExp(`${questionCount}(?:개 질문|문항)`));
assert.doesNotMatch(home, /10개 질문/);
assert.doesNotMatch(cta, /10개 질문|정확한 분석/);

assert.match(contactLayout, /title:\s*["']문의하기["']/);
assert.doesNotMatch(contact, /문의가 접수되었습니다/);
assert.match(contact, /메일 앱/);
assert.match(privacy, /문의 양식/);
assert.match(privacy, /사용자의 메일 앱/);
assert.doesNotMatch(contact, /전문 코치들과 함께 개발|높은 정확도/);

assert.doesNotMatch(utility, /전국 테니스 코트를 실시간으로 예약하세요/);
assert.match(utility, /예약 흐름을 체험하는 데모/);
assert.match(booking, /데모 페이지/);
assert.match(bookingTest, /실제 예약이나 결제가 진행되지 않습니다/);
assert.doesNotMatch(bookingTest, /예약 완료하기/);
assert.match(bookingResult, /시뮬레이션 완료/);
assert.match(bookingResult, /실제 예약 번호가 아닙니다/);
assert.match(bookingResult, /실제 결제는 이루어지지 않았습니다/);
assert.doesNotMatch(bookingResult, /예약 완료!|결제 완료|영수증 다운로드|예약 공유하기|예약 관리/);
assert.doesNotMatch(distribution, /실제 테스트 응답 기반 데이터 예시/);
assert.match(distribution, /가상 분포 예시/);
assert.doesNotMatch(privacy, /본 사이트는 광고를 제공하지 않으며/);
assert.match(privacy, /Google AdSense/);

console.log(
  "Trust contract audit passed: NTRP count, contact flow, demo utilities, and synthetic distribution labels are consistent.",
);
