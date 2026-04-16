# Status | 마지막: 2026-04-17
## 현재 작업
GSC 기반 SEO 개선 완료

## 최근 변경 (최근 5개)
- 04-17: 동적 player route 메타 개선 — 163개 선수 페이지 CTR 최적화
- 04-17: xinyu-wang 중복 페이지 제거 (duplicate content), martin-landaluce male.ts로 이동
- 04-17: 정적 선수 페이지 23개 "세계랭킹 N위" 일괄 제거 + NTRP 메타 강화
- 04-17: vercel.json — www→non-www 301 리다이렉트
- 04-17: GSC 연동 + 알카라스 긴급 메타 수정

## TODO
- [ ] 자동 콘텐츠 파이프라인 (GitHub Actions 크론) 구현
- [ ] scripts/ 추가 정리 — maintenance/ 하위 중복 체크 스크립트 제거 검토

## 결정사항
- next 16.0.7: 정상 설치·작동 확인, 문제 없음
- players.ts → male/female/index.ts (import 경로 무변경)
- blog-content.ts → part1/part2/part3/index.ts (import 경로 무변경)

## 주의
- aggregateRating: 실제 리뷰 없이 구조화 데이터 평점 넣으면 Google 페널티
- seo-safeguard.yml: PR마다 robots·llms·aggregateRating 자동 검사

## 결정사항
- players.ts 분리: gender 기준으로 male.ts / female.ts 분리 → index.ts에서 merge
- 기존 import 경로 (@/data/players) 유지: TS가 index.ts 자동 resolve

## 주의
- aggregateRating 제거: 실제 리뷰 시스템 없이 구조화 데이터에 평점 넣으면 Google 페널티 위험
- next 16은 아직 실험적 버전 — Vercel 배포 시 호환성 주의
