# GA4 자동 수집·URL 개인정보 경계 조사 (TF-D07)

- 작성: 2026-09-30, 브랜치 `improve/codex-spec-20260930` (baseline `38d47d9`)
- 상태: **VERIFY_FIRST.** 소스 분석만 수행했다. 운영 네트워크 payload, GA4 데이터 스트림의 Enhanced Measurement 설정, 데이터 redaction 설정은 확인하지 않았다.
- 운영 GA4로 테스트 이벤트를 보내지 않았다. 이 문서에는 계정 수치·식별자·원본 분석 출력이 없다.

## 소스에서 확인한 사실

| 항목 | 위치 | 확인 내용 |
|---|---|---|
| 초기화 | `src/components/analytics/GAProvider.tsx` | `gtag('config', id, { send_page_view: false, anonymize_ip: true })` |
| 수동 page_view | `src/lib/analytics.ts` `trackPageView` | `page_location = origin + pathname` (쿼리 제외), 경로 변경마다 1회 |
| 관리 경로 | `GAProvider.tsx` | `/admin`에서는 로더·page_view 모두 미실행 |
| 커스텀 이벤트 | `analytics.ts` allowlist | 이벤트별 허용 파라미터만 전송, `@`·휴대전화 패턴 값 제거 |
| 사이트 검색 | `src/app/search/SearchClient.tsx` | `GET /search?q=` 폼. 커스텀 `search_performed`는 `query_length`만 전송 |
| 문의 | `src/app/contact/page.tsx` | `<form onSubmit>`에서 `preventDefault` 후 `mailto:` 열기. 서버 전송 없음 |
| NTRP 결과 URL | `/utility/ntrp-test/result?score=&q13=&completion=` | 쿼리는 수동 page_view에 포함되지 않음 |
| 로드 조건 | `src/app/layout.tsx` | `NEXT_PUBLIC_EXTERNAL_EFFECTS=production` 또는 Vercel production일 때만 GAProvider 렌더 |

## 검증 매트릭스

| 화면/행동 | 검사할 필드 | 소스 기준 판단 | 상태 |
|---|---|---|---|
| 최초 랜딩·내부 이동 | page_view 수, page_location | 수동 page_view는 경로당 1회·쿼리 제외 | 확인(소스) |
| 뒤로/앞으로 | page_view 중복 | Enhanced Measurement의 "브라우저 기록 기반 페이지 변경"이 켜져 있으면 자동 page_view가 추가될 수 있음 (Google 문서 R02) | 미확인 · 관리자 확인 필요 |
| 사이트 검색 `?q=` | view_search_results, search_term | 수동 page_view에는 `q`가 없음. 그러나 GA4 집계에 `view_search_results`가 관측됐으므로 자동 경로(기록 기반 page_view 등)가 전체 URL을 볼 가능성이 있음 | 미확인 · 관리자 확인 필요 |
| 검색어에 이메일/전화 입력 | search_term, page_location | 커스텀 이벤트는 길이만 전송. 자동 수집 경로는 스트림 redaction 설정에 좌우됨 | 미확인 |
| 결과 URL(score/q13/completion) | page_location, page_referrer | 수동 page_view는 제외. 자동 page_view·page_referrer는 전체 URL을 포함할 수 있음 | 미확인 |
| 문의 → 메일 앱 | form_submit, form_destination | Enhanced Measurement 양식 상호작용이 켜져 있으면 `form_submit`이 수집될 수 있음. 입력값은 GA4가 수집하지 않으나 문의 성공으로 해석하면 안 됨 | 미확인 · 해석 주의 |
| 공유 버튼 | link_url(외부 클릭) | 공유 URL에는 score/style/버전만 포함(completion 없음, audit:ntrp-result-contract) | 확인(소스) |
| 공개 페이지 → /admin | 자동 이벤트 | 클라이언트 이동 시 GAProvider가 null을 반환하지만 이미 로드된 gtag.js의 자동 수집이 멈추는지는 미확인 | 미확인 |

## 관리자 승인이 필요한 권장 확인 (계정 변경 없음)

1. GA4 데이터 스트림 → Enhanced Measurement에서 "페이지 조회 → 브라우저 기록 기반 페이지 변경" 상태 확인. 켜져 있으면 수동 page_view와 중복되므로 한쪽으로 단일화 결정.
2. 사이트 검색 설정의 검색어 파라미터(`q`) 수집 여부와 필요성 결정.
3. 데이터 스트림 → 데이터 삭제(redaction)에서 이메일 및 쿼리 파라미터(`completion`, `q13`, `score`, `q`) 삭제 설정 검토. 이메일 기본 redaction만으로 모든 개인정보가 제거된다고 보지 않는다(R03).
4. 양식 상호작용(`form_submit`)을 문의 성공 지표로 쓰지 않도록 보고서 정의 확인.
5. UTM 등 정상 캠페인 파라미터는 유입 분석에 필요하므로 일괄 삭제하지 않는다.

## 코드 측 조건부 개선안 (미적용)

- `gtag('config', id, { page_location: origin + pathname })` 및 경로 변경 시 `gtag('set', { page_location, page_referrer })`로 자동 이벤트의 기준 URL도 정리하는 방안. 다만 UTM 유실·사이트 검색 보고서 영향이 있어 위 관리자 확인 결과를 본 뒤 결정한다. 재현 없이 적용하지 않았다.

## 확인 방법 (별도 승인 시)

로컬에서 가짜 `window.gtag`/`dataLayer`로 호출을 가로채거나, 승인된 테스트 속성 + DebugView에서 확인한다. HAR·로그에 쿠키·토큰·개인정보를 저장하지 않는다.
