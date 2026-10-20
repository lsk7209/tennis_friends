# OVH 운영 및 추가 개선 상태 — 2026-10-20

실제 서비스는 OVH/Coolify의 Tennisfriends production 서비스다. GitHub main은 검토한 소스의 기준이고 main push 자체는 OVH 배포가 아니다. Vercel Git 자동 배포는 vercel.json으로 비활성화하고 GitHub Pages는 실행되지 않도록 잠갔다.

## 검증된 변경

- 본문 링크 전용 색상을 밝은/어두운 테마로 분리했다. 본문 FAQ가 있으면 별도 FAQ와 일치가 확인되지 않은 메타데이터 FAQ 스키마를 출력하지 않는다.
- baseline-browser-mapping을 2.11.30으로 갱신했다. 새 앱 이미지는 별도 CI에서 빌드와 smoke 검증을 통과했다.
- 주간 점검은 월요일 00:17 UTC (09:17 KST)에 예약 대기열 14일 여유, 공개/예약 경계, 두 사이트맵과 모든 URL 상태를 확인한다. GitHub 스케줄은 지연될 수 있다. AI 글의 정기 생성은 별도의 검토/발행 절차이며 이 워크플로는 생성하지 않는다.
- 새 이미지에는 /.well-known/release.json sourceDigest가 포함된다. 배포 전 기존 운영 이미지에는 이 경로가 없으므로 주간 작업은 아직 --check-release를 사용하지 않는다. 새 이미지 배포와 해당 응답의 digest 일치를 확인한 뒤 이 플래그를 활성화한다. 코드의 비교 검사는 불일치/404/통신 오류에 실패하도록 테스트했다.
- GA4 534356101에서 naver_cafe_visit을 ONCE_PER_SESSION 핵심 이벤트로 등록하고 API로 재조회했다. 이것은 카페 이동 측정이며 가입 완료가 아니다. 과거 데이터가 소급 전환된다는 뜻도 아니다.

## 소스와 이미지

CI: https://github.com/lsk7209/tennis_friends/actions/runs/39357910165 (SUCCESS)
릴리스 소스: 3e9657d8e7ace2e190f67dabab636d40802cd530
sourceDigest: 32c08cd3719946bf9fae6a385c3f60011585fbb98f9c90751001f68fe316296d
기존 운영 digest: 479f0bdd2e4f8928241b9020b6fce59ee32e9cc6a7de1818bfa6e2a9d37e2383

현재 새 이미지의 OVH 적용은 자원 게이트 대기다. 15 GiB 디스크/3 GiB 가용 메모리 조건을 낮추지 않는다. 원본 소스와 이전 이미지 보관본은 로컬에서 SHA256을 확인하고 보존했다. 현재 운영 이미지 및 바로 이전으로 되돌릴 아카이브는 서버에 유지했다. 다른 서비스/빌더는 중단하지 않았다.

## 보안 검토의 한계

기존 이미지 스캔에는 OS critical 1/high 56 및 JS medium 1이 있었다. JS baseline-browser-mapping 수정은 새 이미지에 반영했고 OS 전체가 해결됐다고 판단하지 않는다. Debian 공식 추적기는 여러 항목을 postponed/no-dsa로 분류한다. CVE-2023-45853은 Debian zlib의 contrib/minizip 범위 문제로, 운영 컨테이너 패키지/라이브러리 경로 조회에서 minizip은 발견되지 않았다. 이 조회만으로 모든 앱 내장 코드의 부재를 보장하지는 않는다. 원본 스캔 결과는 삭제하거나 억제하지 않았다.

참조: https://security-tracker.debian.org/tracker/CVE-2023-45853
https://security-tracker.debian.org/tracker/source-package/util-linux
https://security-tracker.debian.org/tracker/CVE-2026-9538
https://security-tracker.debian.org/tracker/CVE-2026-54369
https://vercel.com/docs/project-configuration/git-configuration
https://developers.google.com/analytics/devguides/config/admin/v1/rest/v1beta/properties.keyEvents/create

## 다음 검증

신선한 자원 게이트가 통과하면 보관된 CI 아카이브의 SHA/커밋/manifest를 다시 확인하고 exact-parent OCI import → 기존 Coolify updater → 공개 HTTP/SEO/모든 사이트맵 URL → 다른 컨테이너 보존을 확인한다. 이후 주간 점검에 --check-release를 추가한다. 운영 환경의 새 UI/보안 수정은 그때 완료로 판정한다. 검색 순위와 CTR은 현재 GSC 기준선과 배포 이후 충분한 기간을 비교해야 한다. 건강 글 후보 228건은 검토 대상 수이며 확인된 오류 수가 아니다.
