# 선수 이미지 소싱 가이드 (6명)

## 현재 상태
- 전체 선수 213명 중 **207명** 이미지 완료
- **6명만** 플레이스홀더 (`placeholder-tennis-player.svg`) 사용 중

---

## 이미지가 필요한 선수 6명

| # | 슬러그 | 한국명 | 영문명 | 성별 | 국적 |
|---|--------|--------|--------|------|------|
| 1 | `narae-han` | 한나래 | Narae Han | 여 | 한국 |
| 2 | `seongchan-hong` | 홍성찬 | Seongchan Hong | 남 | 한국 |
| 3 | `sujeong-jang` | 장수정 | Sujeong Jang | 여 | 한국 |
| 4 | `duckhee-lee` | 이덕희 | Duckhee Lee | 남 | 한국 |
| 5 | `diana-shnaider` | 다이아나 슈나이더 | Diana Shnaider | 여 | 러시아 |
| 6 | `katie-boulter` | 케이티 볼터 | Katie Boulter | 여 | 영국 |

---

## 이미지 규격

| 항목 | 값 |
|------|-----|
| **파일 형식** | PNG (투명 배경 또는 흰색 배경) |
| **파일명 규칙** | `{slug}.png` (예: `narae-han.png`) |
| **저장 경로** | `public/images/players/` |
| **권장 크기** | 400x500px ~ 600x800px (세로형 상반신) |
| **최대 파일 크기** | 200KB 이하 (웹 최적화) |

---

## 이미지 소싱 방법

### 방법 1: 공식 소스 (권장)
- **ATP 공식**: `atptour.com` → 선수 프로필 → 프로필 사진
- **WTA 공식**: `wtatennis.com` → 선수 프로필
- **대한테니스협회**: `koreantennis.co.kr` → 선수 정보
- **ITF**: `itftennis.com` → 선수 검색

### 방법 2: 검색 키워드

| 선수 | 추천 검색어 |
|------|-----------|
| 한나래 | `"한나래 테니스" site:koreantennis.co.kr` 또는 `"Narae Han tennis"` |
| 홍성찬 | `"홍성찬 테니스" OR "Seongchan Hong tennis ATP"` |
| 장수정 | `"장수정 테니스" OR "Sujeong Jang tennis ITF"` |
| 이덕희 | `"이덕희 테니스" OR "Duckhee Lee tennis ATP"` (유명 선수라 많음) |
| Diana Shnaider | `"Diana Shnaider tennis WTA profile photo"` |
| Katie Boulter | `"Katie Boulter tennis WTA profile photo"` |

### 방법 3: AI 이미지 생성 (차선책)
공식 사진을 구할 수 없는 경우, 일러스트/아바타 스타일로 대체 가능

---

## 적용 방법

### 1단계: 이미지 저장

다운로드한 이미지를 아래 경로에 저장:

```
public/images/players/narae-han.png
public/images/players/seongchan-hong.png
public/images/players/sujeong-jang.png
public/images/players/duckhee-lee.png
public/images/players/diana-shnaider.png
public/images/players/katie-boulter.png
```

### 2단계: 코드 수정

`src/data/players.ts` 에서 해당 선수의 `image` 필드 변경:

```typescript
// 변경 전
image: '/images/players/placeholder-tennis-player.svg'

// 변경 후
image: '/images/players/narae-han.png'
```

6명 모두 동일 패턴으로 수정.

### 3단계: 확인

```bash
grep "placeholder-tennis-player" src/data/players.ts
```

결과가 0건이면 완료!
