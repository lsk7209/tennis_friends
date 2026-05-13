# Status | 마지막: 2026-05-13
## 현재 작업
저품질 블로그 색인 보호 구현 및 GitHub 배포 진행 완료 대기.
## 최근 변경 (최근 5개만)
- 05-13: 저품질 블로그 113개를 목록/RSS/사이트맵에서 제외하고 noindex 적용
- 05-13: 테스트 답변 클릭 시 자동 다음 문항 이동 구현 및 브라우저 검증
- 05-13: persona.yml 자동 생성
- 05-13: titles.json 293개 제목 생성
- 05-13: research_cache 5개 생성
## TODO
- [ ] 저품질 글은 재작성 후 품질 기준 통과 시 색인 복구
- [ ] 로컬 실행 오류 해결 후 node tools/generate_remaining_articles.mjs 실행
- [ ] 50/293, 150/293 진행 보고
## 결정사항
- 저품질 대응: 즉시 삭제가 아니라 noindex + 목록/RSS/사이트맵 제외로 검색 품질 리스크를 먼저 차단
- 배포 방식: GitHub push로 원격 배포 파이프라인을 트리거
## 주의
- lint/type-check/build 통과. lint는 기존 경고 77개 유지.
- dev 서버 http://localhost:3004 에서 noindex 헤더와 sitemap 제외 확인.
