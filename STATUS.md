# Status | 마지막: 2026-05-13
## 현재 작업
Vercel 자동 배포 미작동 원인 점검 중. Vercel CLI 업로드 산출물 제외 설정 추가.
## 최근 변경 (최근 5개만)
- 05-13: .vercelignore 추가로 .next/out 로컬 산출물 업로드 제외
- 05-13: grid.svg 배경을 bg-grid-pattern 전역 클래스로 변경해 Vercel CSS 파싱 오류 방지
- 05-13: GitHub Pages public 전환 후 workflow 배포 성공 확인
- 05-13: 테니스마 블로그 113개를 목록/RSS/사이트맵/AI 인덱스에서 제외하고 noindex 적용
- 05-13: 깨진 내부링크 5개를 현재 존재하는 /blog 경로로 수정
## TODO
- [ ] git push 후 Vercel 자동 배포 트리거 여부 확인
- [ ] 자동 배포가 안 돌면 Vercel Git 연결 재설정 필요
- [ ] www.tennisfrens.com production 응답 확인
## 결정사항
- grid.svg 배경: Tailwind arbitrary url 대신 전역 CSS 클래스 사용
## 주의
- lint/type-check/build 통과. lint는 기존 경고 77개 유지.
- .omx 로컬 로그 변경은 배포 커밋에서 제외.
