# Status | 마지막: 2026-04-17
## 현재 작업
3단계 심층 개선 완료 (선수 페이지 + 자동화 파이프라인 + 스크립트 정리)

## 최근 변경 (최근 5개)
- 04-17: 저CTR 선수 5명 전용 정적 페이지 생성 (케크마노비치·오프너·부즈코바·왕신유·란달루세)
- 04-17: auto-content.js + GitHub Actions cron 자동 콘텐츠 파이프라인 구축
- 04-17: scripts/maintenance/ 일회성 스크립트 9개 삭제
- 04-17: 정적 선수 페이지 23개 stale 랭킹 제거 + www→non-www 리다이렉트
- 04-17: players.ts/blog-content.ts 분리 + GEO 파일 생성

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
