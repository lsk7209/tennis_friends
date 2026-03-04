# 선수 컨텐츠 전수 점검 리포트 (2026-03-04)

## 점검 범위
- 데이터 소스: `src/data/players.ts`
- 정적 선수 페이지: `src/app/players/*/page.tsx` (동적 `[slug]` 제외)
- SEO/라우팅: `next.config.ts`, `src/app/players/[slug]/page.tsx`

## 요약 결과
- 전체 선수 데이터 엔트리: **173개**
- 정적 선수 페이지: **53개**
- 레거시 오탈자 slug 데이터키 잔존: **0건**
  - `linner-tien`: 없음
  - `arthur-landercknech`: 없음
- 정식 slug 데이터키 반영: **완료**
  - `lerner-tien`: 있음
  - `arthur-rinderknech`: 있음
- 레거시 경로 301 리다이렉트: **2건 반영**
- 정적 선수 페이지 내 반복 템플릿 문구(콘텐츠 차별성 저하): **0페이지** (후속 보완 완료)

## 이번 보완 사항
1. 선수 데이터 slug 키 정규화
   - `linner-tien` -> `lerner-tien`
   - `arthur-landercknech` -> `arthur-rinderknech`
2. 레거시 URL 301 리다이렉트 추가
   - `/players/linner-tien` -> `/players/lerner-tien`
   - `/players/arthur-landercknech` -> `/players/arthur-rinderknech`
3. 레거시 정적 페이지는 리다이렉트 전용 처리 (중복 콘텐츠 방지)
4. 동적 프로필 schema URL의 환경변수 기반 유지
5. 선수 이미지 파일명도 정식 slug 기준 파일 추가 및 데이터 경로 정리
   - `/images/players/lerner-tien.png`
   - `/images/players/arthur-rinderknech.png`

## 남은 개선 백로그 (우선순위)
### P1. 콘텐츠 품질/차별성 강화
- 선수별로 아래 3개 섹션을 최소 기준으로 강제:
  1) 최근 12개월 폼 변화
  2) 코트 타입별 승부 패턴
  3) 전술 키포인트(서브+1/리턴 포지션/랠리 길이)

### P1. 데이터 최신성 표기
- 랭킹/폼 관련 문구가 하드코딩인 페이지에 `업데이트 기준일` 명시 필요.

### P2. 라우팅 구조 단일화 검토
- 정적 선수 페이지(53개)와 동적 페이지(`[slug]`) 병행 운영으로 인한 유지보수 비용이 큼.
- 중장기적으로 데이터 기반 동적 단일 렌더링으로 통합 검토.

## 점검 명령
```bash
python - <<'PY'
import re, pathlib
players=pathlib.Path('src/data/players.ts').read_text(encoding='utf-8')
keys=re.findall(r"\n\s*'([^']+)':\s*\{",players)
print('total_players',len(keys))
print('has_legacy_slug_linner', 'linner-tien' in keys)
print('has_legacy_slug_lander', 'arthur-landercknech' in keys)
print('has_new_slug_lerner','lerner-tien' in keys)
print('has_new_slug_rinder','arthur-rinderknech' in keys)
base=pathlib.Path('src/app/players')
static=[p for p in base.glob('*/page.tsx') if p.parent.name!='[slug]']
print('static_pages',len(static))
phrase='세계 상위권을 유지하는 힘은'
print('repeated_phrase_pages',sum(phrase in p.read_text(encoding='utf-8') for p in static))  # 현재 0 예상
PY
```
