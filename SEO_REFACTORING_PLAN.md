# SEO/AEO 리팩토링 계획서

## 📊 Step 1: 현재 상태 분석

### ✅ 이미 구현된 것들
1. **메타데이터 API**: `generateMetadata` 사용 중 (블로그, 선수 페이지)
2. **구조화된 데이터**: 
   - `BlogPostSchema` (Article + BreadcrumbList)
   - `SoftwareApplicationSchema` (유틸리티용)
   - `OrganizationSchema`, `WebSiteSchema` (전역)
   - `PersonSchema` (선수 페이지)
   - `FAQSchema` (FAQ용)
3. **JsonLd 컴포넌트**: 기본 구현 완료
4. **FAQ 컴포넌트**: `<details>` 태그 사용 중

### ⚠️ 개선이 필요한 부분

#### 1. 메타데이터 아키텍처
- ❌ **Naver 최적화 부족**: description이 80자 제한을 초과하는 경우 다수
- ❌ **일관성 부족**: 일부 페이지는 정적 메타데이터, 일부는 동적 생성
- ❌ **Title 전략**: 일부 페이지에서 "| TennisFriends" 형식 불일치

#### 2. 구조화된 데이터
- ⚠️ **JsonLd 컴포넌트**: 기본 기능만 있고 타입 안정성 부족
- ❌ **Quiz 스키마**: 테니스 규칙 퀴즈에 Quiz 스키마 미적용
- ❌ **Dataset 스키마**: 공개 데이터 페이지에 Dataset 스키마 미적용
- ⚠️ **@graph 구조**: 일부만 사용, 일관성 부족

#### 3. 시맨틱 HTML
- ❌ **제네릭 div 남용**: 많은 페이지에서 `<div>` 중심 구조
- ❌ **H1 중복**: 일부 페이지에서 H1이 여러 개
- ⚠️ **시맨틱 태그 부족**: `<main>`, `<article>`, `<section>` 사용 미흡

#### 4. FAQ 및 AI 최적화
- ⚠️ **FAQ 부족**: 유틸리티와 공개 데이터 상세 페이지에 FAQ 섹션 부족
- ❌ **AI 스니펫 최적화**: `<details>` 태그를 활용한 AI 친화적 구조 부족

#### 5. 동적 OG 이미지
- ❌ **동적 생성 없음**: 정적 이미지만 사용, 페이지별 맞춤 OG 이미지 없음

---

## 🎯 Step 2: 기반 설정 (Foundation Setup)

### 2.1 개선된 JsonLd 컴포넌트
- 타입 안정성 강화
- 다중 스키마 지원 (@graph)
- 자동 유효성 검증

### 2.2 layout.tsx 최적화
- Naver 최적화 메타 태그 강화
- AI 크롤러 최적화 헤더 추가
- 전역 구조화된 데이터 통합

---

## 🔧 Step 3: 모듈별 리팩토링

### 우선순위 1: 블로그 포스트 페이지
**파일**: `src/app/blog/[slug]/page.tsx`

**개선 사항**:
1. ✅ 메타데이터: 이미 `generateMetadata` 사용 중 → Naver 최적화만 추가
2. ✅ JSON-LD: 이미 `BlogPostSchema` 사용 중 → 개선된 버전으로 교체
3. ❌ 시맨틱 HTML: `<div>` → `<article>`, `<section>` 등으로 변경
4. ❌ FAQ: 페이지 하단에 FAQ 섹션 추가 (AI 스니펫용)

### 우선순위 2: 유틸리티 페이지 (NTRP Test)
**파일**: `src/app/utility/ntrp-test/page.tsx`

**개선 사항**:
1. ⚠️ 메타데이터: 정적 메타데이터 → 동적 생성으로 개선
2. ⚠️ JSON-LD: `SoftwareApplicationSchema` 사용 중 → Quiz 스키마 추가 검토
3. ❌ 시맨틱 HTML: 개선 필요
4. ❌ FAQ: 페이지 하단에 FAQ 섹션 추가

### 우선순위 3: 선수 정보 페이지
**파일**: `src/app/players/[slug]/page.tsx`

**개선 사항**:
1. ✅ 메타데이터: 이미 `generateMetadata` 사용 중
2. ✅ JSON-LD: 이미 `PersonSchema` 사용 중
3. ⚠️ 시맨틱 HTML: 부분적 개선 필요
4. ✅ FAQ: 이미 구현됨

---

## 📋 실행 계획

### Phase 1: 기반 설정 (현재)
- [x] 프로젝트 구조 분석
- [ ] 개선된 JsonLd 컴포넌트 생성
- [ ] layout.tsx 최적화

### Phase 2: 블로그 모듈 리팩토링
- [ ] 블로그 포스트 페이지 시맨틱 HTML 개선
- [ ] FAQ 섹션 추가
- [ ] Naver 최적화 메타데이터 적용

### Phase 3: 유틸리티 모듈 리팩토링
- [ ] NTRP Test 페이지 리팩토링
- [ ] 다른 주요 유틸리티 페이지 리팩토링

### Phase 4: 고급 기능
- [ ] 동적 OG 이미지 생성 API
- [ ] 공개 데이터 페이지 Dataset 스키마 적용

