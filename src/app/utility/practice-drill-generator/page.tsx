'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ────────────────────────────────────────────
   Types
   ──────────────────────────────────────────── */

type Goal = '포핸드 안정성' | '백핸드 강화' | '서브 정확도' | '발리 감각' | '풋워크' | '랠리 일관성';
type Level = '초급' | '중급' | '상급';
type Duration = 20 | 30 | 45 | 60;
type Partner = '혼자' | '파트너 있음';

interface Drill {
  name: string;
  duration: number; // minutes
  description: string;
  reps: string;
  tips: string;
}

/* ────────────────────────────────────────────
   Drill database
   ──────────────────────────────────────────── */

const DRILLS: Record<Goal, Record<Level, Record<Partner, Drill[]>>> = {
  '포핸드 안정성': {
    '초급': {
      '혼자': [
        { name: '벽치기 연속 랠리', duration: 8, description: '벽에서 2m 거리에서 포핸드만 사용해 연속으로 공을 보냅니다. 일정한 리듬을 유지하세요.', reps: '50개 × 2세트', tips: '손목을 고정하고, 라켓 면이 수직을 유지하도록 합니다.' },
        { name: '셀프 토스 포핸드', duration: 6, description: '공을 스스로 올려 포핸드 그립 확인 후 네트 위 1m를 목표로 보냅니다.', reps: '20개 × 3세트', tips: '준비 자세에서 유닛턴까지 천천히 반복하세요.' },
        { name: '타겟 포핸드 드릴', duration: 6, description: '코트 반대편 코너에 콘이나 수건을 놓고 그 근처로 보내는 연습입니다.', reps: '15개 × 3세트', tips: '속도보다 방향 정확성에 집중하세요.' },
        { name: '그립 체크 & 섀도 스윙', duration: 5, description: '거울 또는 영상 촬영으로 세미웨스턴 그립과 스윙 궤적을 점검합니다.', reps: '30회 섀도 스윙', tips: '팔로스루가 왼쪽 어깨 위로 올라가는지 확인하세요.' },
      ],
      '파트너 있음': [
        { name: '크로스 코트 랠리', duration: 8, description: '파트너와 포핸드 크로스코트만 사용해 랠리합니다. 네트 1m 위를 목표로 하세요.', reps: '50개 랠리 × 2세트', tips: '볼이 깊이 들어가도록 바운스 후 정점에서 칩니다.' },
        { name: '미니 랠리 → 풀코트 랠리', duration: 7, description: '서비스 박스 안에서 미니 랠리 20개 후, 그대로 베이스라인으로 물러나 풀 랠리로 전환합니다.', reps: '3세트', tips: '미니 랠리에서 익힌 터치 감각을 풀 스윙에도 유지하세요.' },
        { name: '드롭 피드 포핸드', duration: 6, description: '파트너가 공을 손으로 떨어뜨려 주면 포핸드로 크로스 방향에 보냅니다.', reps: '20개 × 3세트', tips: '발의 위치를 먼저 잡은 뒤 스윙을 시작하세요.' },
        { name: '짧은 공 어프로치 → 포핸드 위너', duration: 6, description: '파트너가 짧은 공을 보내면 진입해서 포핸드 위너를 시도합니다.', reps: '15개 × 2세트', tips: '스플릿 스텝 후 빠르게 진입하고 오픈 스탠스를 활용하세요.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '벽치기 100개 연속', duration: 8, description: '벽 앞에서 포핸드만 사용해 100개 연속을 목표로 합니다. 리듬 일정하게 유지하세요.', reps: '100개 연속 × 2세트', tips: '20개마다 높이와 속도를 의식적으로 확인하세요.' },
        { name: '인사이드아웃 포핸드', duration: 7, description: '백핸드 코너에서 회전하며 인사이드아웃 포핸드를 연습합니다. 셀프 토스 활용.', reps: '20개 × 3세트', tips: '상체 회전을 충분히 만든 뒤 언와인드 합니다.' },
        { name: '헤비 탑스핀 포핸드', duration: 6, description: '무릎을 낮추고 아래에서 위로 긁어올리는 탑스핀을 의식적으로 연습합니다.', reps: '30개 × 2세트', tips: '라켓 헤드 스피드를 올리되 팔에 힘을 빼세요.' },
        { name: '풋워크 + 포핸드 콤보', duration: 6, description: '사이드 스텝으로 이동 후 포핸드, 복귀를 반복합니다.', reps: '좌우 각 15개 × 2세트', tips: '마지막 스텝에서 체중이 앞발에 실리도록 합니다.' },
      ],
      '파트너 있음': [
        { name: '크로스 코트 랠리 50개', duration: 8, description: '포핸드 크로스코트로 50개 이상 유지를 목표로 합니다. 네트 1m 위 통과 필수.', reps: '50개 랠리 × 3세트', tips: '깊은 볼과 높은 탄도를 유지하세요.' },
        { name: '인사이드아웃 → 인사이드인', duration: 7, description: '파트너가 백핸드 쪽으로 보내면 돌아가서 인사이드아웃과 인사이드인을 번갈아 칩니다.', reps: '각 10개 × 3세트', tips: '피벗 풋 위치에 집중하세요.' },
        { name: '짧은 공 어프로치 → 포핸드 위너', duration: 6, description: '파트너가 짧은 공을 보내면 어프로치로 진입해 포핸드 위너를 시도합니다.', reps: '15개 × 3세트', tips: '어프로치 샷은 깊게, 위너는 각도를 만들어야 합니다.' },
        { name: '포핸드 압박 랠리', duration: 6, description: '파트너가 다양한 방향으로 보내는 공을 전부 포핸드로 처리합니다.', reps: '3분 × 3세트', tips: '빠른 풋워크로 공을 항상 포핸드 존에서 처리하세요.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '벽치기 고속 랠리', duration: 7, description: '벽 가까이 서서 빠른 템포로 포핸드 100개를 연속으로 합니다. 빈틈 없이.', reps: '100개 연속 × 3세트', tips: '백스윙을 콤팩트하게 줄이고 타이밍에 집중하세요.' },
        { name: '인사이드아웃 풀 파워', duration: 7, description: '풀 파워 인사이드아웃 포핸드를 타겟 방향으로 쏩니다.', reps: '20개 × 4세트', tips: '로드 → 언로드 과정에서 고관절 회전을 극대화하세요.' },
        { name: '디펜시브 → 오펜시브 전환', duration: 7, description: '수비적 달리기 후 즉시 공격적 포핸드로 전환하는 패턴을 훈련합니다.', reps: '10회 × 4세트', tips: '전환 시 몸 밸런스가 무너지지 않도록 합니다.' },
        { name: '멘탈 프레셔 벽치기', duration: 6, description: '50개 연속 성공해야 끝나는 조건으로 벽치기합니다. 실패 시 처음부터.', reps: '50개 연속 성공', tips: '압박 상황에서 호흡과 리듬을 유지하는 연습입니다.' },
      ],
      '파트너 있음': [
        { name: '크로스 코트 50개 + 다운더라인 위너', duration: 8, description: '크로스 50개 유지 후 기회 볼에 다운더라인 위너를 시도합니다.', reps: '5세트', tips: '위너 타이밍을 읽는 것이 핵심입니다.' },
        { name: '인사이드아웃 → 3구 공격 패턴', duration: 7, description: '인사이드아웃으로 상대를 밀어낸 뒤 3구째에 위너를 마무리합니다.', reps: '15 패턴 × 3세트', tips: '1구로 공간을 만들고 3구로 마무리하는 구조를 체화하세요.' },
        { name: '짧은 공 → 어프로치 → 패싱 대응', duration: 7, description: '짧은 공으로 진입 후 상대 패싱을 예상해 포지션을 잡습니다.', reps: '10 패턴 × 3세트', tips: '어프로치 후 바로 스플릿 스텝을 밟아야 합니다.' },
        { name: '포인트 플레이 (포핸드 우선)', duration: 8, description: '실전 포인트를 진행하되 가능하면 포핸드로 공격적인 선택을 합니다.', reps: '10점 × 3게임', tips: '의식적으로 포핸드를 치되 무리한 런어라운드는 금물입니다.' },
      ],
    },
  },
  '백핸드 강화': {
    '초급': {
      '혼자': [
        { name: '백핸드 그립 & 섀도 스윙', duration: 7, description: '양손/한손 백핸드 그립을 확인하고 섀도 스윙으로 궤적을 체화합니다.', reps: '40회 섀도 스윙', tips: '양손 백핸드는 왼손(비우세손)이 주도해야 합니다.' },
        { name: '벽치기 백핸드', duration: 8, description: '벽 앞에서 백핸드만 사용해 연속 볼을 이어갑니다.', reps: '30개 × 3세트', tips: '임팩트 포인트를 앞에서 잡으세요.' },
        { name: '셀프 토스 백핸드', duration: 6, description: '공을 스스로 올려 백핸드로 크로스 방향에 보냅니다.', reps: '15개 × 3세트', tips: '유닛턴(상체 회전)을 충분히 만들고 치세요.' },
      ],
      '파트너 있음': [
        { name: '백핸드 크로스 랠리', duration: 8, description: '백핸드 크로스코트만 사용해 랠리를 이어갑니다.', reps: '30개 랠리 × 3세트', tips: '볼을 깊게 보내는 것에 집중하세요.' },
        { name: '드롭 피드 백핸드', duration: 7, description: '파트너가 공을 떨어뜨려 주면 백핸드로 방향을 잡아 보냅니다.', reps: '20개 × 3세트', tips: '발 세팅을 먼저 하고 스윙합니다.' },
        { name: '미니 코트 백핸드 랠리', duration: 6, description: '서비스 박스 안에서 백핸드만 사용해 터치 감각을 기릅니다.', reps: '2분 × 4세트', tips: '손목을 부드럽게 유지하세요.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '벽치기 백핸드 70개 연속', duration: 8, description: '백핸드만으로 벽치기 70개 연속을 목표로 합니다.', reps: '70개 × 2세트', tips: '높이와 깊이를 일정하게 유지하세요.' },
        { name: '백핸드 다운더라인 타겟', duration: 7, description: '셀프 토스 후 다운더라인 방향으로 정확히 보냅니다.', reps: '20개 × 3세트', tips: '체중 이동 방향이 타겟을 향해야 합니다.' },
        { name: '백핸드 슬라이스 연습', duration: 7, description: '낮고 미끄러지는 슬라이스를 연습합니다.', reps: '25개 × 3세트', tips: '라켓을 열고 위에서 아래로 부드럽게 깎아내세요.' },
      ],
      '파트너 있음': [
        { name: '백핸드 크로스 50개 유지', duration: 8, description: '크로스코트 백핸드로 50개 이상 유지를 목표합니다.', reps: '50개 × 2세트', tips: '높은 탄도로 깊게 보내세요.' },
        { name: '백핸드 → 다운더라인 전환', duration: 7, description: '크로스 랠리 중 기회 볼에 다운더라인으로 전환합니다.', reps: '크로스 5개 + 다운 1개 × 10세트', tips: '다운더라인 시 타이밍을 약간 앞으로 잡으세요.' },
        { name: '랜덤 방향 백핸드 대응', duration: 7, description: '파트너가 다양한 방향으로 보내는 공을 백핸드로 처리합니다.', reps: '3분 × 3세트', tips: '준비 자세 복귀를 빠르게 하세요.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '파워 백핸드 벽치기', duration: 7, description: '빠른 속도로 백핸드 100개를 연속으로 합니다.', reps: '100개 연속 × 2세트', tips: '백스윙을 줄이고 체중으로 치세요.' },
        { name: '백핸드 위너 타겟', duration: 8, description: '다운더라인과 크로스 코너를 번갈아 정확히 노립니다.', reps: '각 15개 × 3세트', tips: '마지막 순간까지 방향을 숨기세요.' },
        { name: '드롭샷 ↔ 드라이브 전환', duration: 7, description: '같은 준비 자세에서 드롭샷과 드라이브를 번갈아 칩니다.', reps: '교대 20개 × 2세트', tips: '팔 동작을 최대한 비슷하게 가져가세요.' },
      ],
      '파트너 있음': [
        { name: '백핸드 크로스 → 다운더라인 위너', duration: 8, description: '크로스 랠리 중 타이밍을 잡아 다운더라인 위너를 시도합니다.', reps: '10 패턴 × 3세트', tips: '상대 포지션을 읽고 타이밍을 결정하세요.' },
        { name: '백핸드 디펜스 → 카운터', duration: 7, description: '깊고 강한 볼을 받아낸 뒤 카운터 어택으로 전환합니다.', reps: '10 패턴 × 3세트', tips: '수비 시 슬라이스로 시간을 벌고 전환하세요.' },
        { name: '포인트 플레이 (백핸드 위주)', duration: 8, description: '실전 포인트에서 백핸드를 적극 활용합니다.', reps: '10점 × 3게임', tips: '백핸드를 피하지 않는 것이 훈련의 핵심입니다.' },
      ],
    },
  },
  '서브 정확도': {
    '초급': {
      '혼자': [
        { name: '토스 연습', duration: 6, description: '라켓 없이 토스만 반복합니다. 같은 높이, 같은 위치에 올리는 것이 목표입니다.', reps: '30개 × 3세트', tips: '손바닥으로 공을 올리고, 손가락으로 던지지 마세요.' },
        { name: '플랫 서브 타겟', duration: 8, description: '듀스 사이드에서 센터 T 방향으로 플랫 서브를 연습합니다.', reps: '20개 × 3세트', tips: '임팩트 포인트를 최대한 높이 잡으세요.' },
        { name: '서브 루틴 만들기', duration: 5, description: '볼 바운스 → 호흡 → 토스 → 스윙 순서를 일정하게 반복합니다.', reps: '20회 루틴 반복', tips: '루틴의 속도와 순서를 매번 동일하게 유지하세요.' },
      ],
      '파트너 있음': [
        { name: '서브 → 리턴 연습', duration: 8, description: '서브를 넣고 파트너가 리턴하면 볼을 관찰합니다. 코스 확인용.', reps: '각 사이드 15개', tips: '리턴이 어디로 가는지 보고 서브 방향을 조정하세요.' },
        { name: '듀스/애드 사이드 교대 서브', duration: 7, description: '듀스와 애드 사이드를 번갈아 서브합니다.', reps: '각 사이드 20개', tips: '사이드 전환 시 포지션과 토스 위치를 조정하세요.' },
        { name: '서브 게임 시뮬레이션', duration: 6, description: '0-0부터 시작해 서브 게임을 진행합니다.', reps: '3게임', tips: '점수에 따른 서브 선택을 의식적으로 합니다.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '듀스사이드 와이드 서브', duration: 7, description: '듀스 사이드에서 와이드 방향으로 서브를 정확히 보냅니다.', reps: '20개 × 3세트', tips: '토스를 약간 오른쪽에 올려서 각도를 만드세요.' },
        { name: '애드사이드 바디 서브', duration: 7, description: '애드 사이드에서 바디 방향으로 서브합니다.', reps: '20개 × 3세트', tips: '상대 몸통을 향해 치면 리턴이 어려워집니다.' },
        { name: '세컨드 서브 킥 연습', duration: 8, description: '킥 서브를 연습합니다. 높은 바운스를 목표로 하세요.', reps: '30개 × 2세트', tips: '7시에서 1시 방향으로 브러시 하세요.' },
      ],
      '파트너 있음': [
        { name: '서브 + 3구 연습', duration: 8, description: '서브 후 리턴된 공의 3번째 볼을 공격적으로 처리합니다.', reps: '15 패턴 × 3세트', tips: '서브 후 바로 스플릿 스텝을 밟으세요.' },
        { name: '코스별 서브 연습', duration: 7, description: '와이드, 바디, 센터 T를 순서대로 번갈아 서브합니다.', reps: '각 코스 10개 × 2라운드', tips: '같은 토스에서 다른 방향으로 보내는 연습을 하세요.' },
        { name: '세컨드 서브 리턴 대응', duration: 7, description: '세컨드 서브를 넣고 파트너의 공격적 리턴에 대응합니다.', reps: '15 패턴 × 2세트', tips: '세컨드 서브도 깊이를 유지해야 공격을 막을 수 있습니다.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '에이스 타겟 서브', duration: 8, description: '코너에 타겟을 놓고 에이스를 노리는 서브를 연습합니다.', reps: '각 코너 20개 × 2세트', tips: '속도보다 배치에 집중하세요.' },
        { name: '킥 서브 바운스 높이 체크', duration: 7, description: '킥 서브의 바운스가 어깨 높이 이상으로 올라가도록 연습합니다.', reps: '25개 × 3세트', tips: '무릎 구부림과 등 아치를 충분히 활용하세요.' },
        { name: '서브 변형 5종 세트', duration: 8, description: '플랫, 슬라이스, 킥, 바디, 하프 서브를 순서대로 칩니다.', reps: '각 5개 × 4라운드', tips: '같은 모션에서 다양한 구질을 구사하는 것이 목표입니다.' },
      ],
      '파트너 있음': [
        { name: '서브 + 3구 위너 패턴', duration: 8, description: '서브로 유리한 위치를 만들고 3구째에 위너를 마무리합니다.', reps: '15 패턴 × 3세트', tips: '서브 방향에 따른 리턴 예측이 핵심입니다.' },
        { name: '서브 앤 발리', duration: 8, description: '서브 후 즉시 네트로 진입해 발리로 마무리합니다.', reps: '10 패턴 × 3세트', tips: '퍼스트 발리를 깊게 보내고 두번째로 결정하세요.' },
        { name: '프레셔 서브 게임', duration: 7, description: '30-40부터 시작하는 서브 게임을 반복합니다.', reps: '10게임', tips: '압박 상황에서도 루틴을 유지하는 것이 핵심입니다.' },
      ],
    },
  },
  '발리 감각': {
    '초급': {
      '혼자': [
        { name: '벽 발리 연습', duration: 7, description: '벽 가까이 서서 발리 감각을 기릅니다. 라켓 면을 세워 블록합니다.', reps: '30개 × 3세트', tips: '백스윙 없이 몸 앞에서 블록하세요.' },
        { name: '발리 그립 & 준비 자세', duration: 5, description: '컨티넨탈 그립을 확인하고, 레디 포지션에서 섀도 발리를 합니다.', reps: '40회 섀도', tips: '양손으로 라켓 목을 잡고 준비하세요.' },
        { name: '셀프 토스 발리', duration: 6, description: '공을 가볍게 위로 올려 발리로 벽에 보냅니다.', reps: '20개 × 3세트', tips: '손목을 고정하고 어깨 회전으로 치세요.' },
      ],
      '파트너 있음': [
        { name: '하이/로우 발리 교대', duration: 8, description: '파트너가 높은 공, 낮은 공을 번갈아 보내면 발리로 처리합니다.', reps: '각 15개 × 3세트', tips: '로우 발리 시 무릎을 충분히 구부리세요.' },
        { name: '발리-발리 랠리', duration: 7, description: '네트 앞에서 파트너와 발리끼리 랠리합니다.', reps: '30개 랠리 × 3세트', tips: '터치를 부드럽게, 공을 컨트롤하세요.' },
        { name: '미니 코트 발리 게임', duration: 6, description: '서비스 박스 안에서 발리 포인트 게임을 합니다.', reps: '7점 × 3게임', tips: '발을 활발하게 움직이세요.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '벽 발리 연속 50개', duration: 7, description: '벽에서 발리만으로 50개를 연속으로 이어갑니다.', reps: '50개 × 3세트', tips: '리듬을 유지하고 라켓 면 각도를 일정하게 합니다.' },
        { name: '발리 + 스매시 콤보', duration: 7, description: '발리 후 셀프 로브를 올려 스매시로 마무리합니다.', reps: '15 콤보 × 3세트', tips: '스매시 시 포인팅 핸드로 공을 가리키세요.' },
        { name: '앵글 발리 타겟', duration: 6, description: '사이드로 급각도 발리를 보내는 연습입니다.', reps: '좌우 각 15개 × 2세트', tips: '라켓 면을 열어서 각도를 만드세요.' },
      ],
      '파트너 있음': [
        { name: '하이 발리 → 로우 발리 교대', duration: 7, description: '파트너가 높낮이를 바꿔 보내면 대응합니다.', reps: '3분 × 4세트', tips: '높은 발리는 공격적으로, 낮은 발리는 안전하게.' },
        { name: '서브 앤 발리 패턴', duration: 8, description: '서브 후 네트로 진입해 퍼스트 발리를 연습합니다.', reps: '10 패턴 × 3세트', tips: '서비스 라인 근처에서 스플릿 스텝을 밟으세요.' },
        { name: '2 대 1 발리 드릴', duration: 7, description: '2명이 베이스라인, 1명이 네트에서 발리로 대응합니다.', reps: '3분 × 3세트 (로테이션)', tips: '빠른 판단과 준비가 핵심입니다.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '벽 발리 고속 100개', duration: 7, description: '빠른 속도로 벽 발리 100개를 연속으로 합니다.', reps: '100개 연속 × 2세트', tips: '반응 속도와 면 안정성에 집중하세요.' },
        { name: '드롭 발리 터치', duration: 7, description: '임팩트 순간 힘을 빼서 네트 바로 너머에 떨어뜨리는 드롭 발리를 연습합니다.', reps: '20개 × 3세트', tips: '라켓이 공 아래를 스치도록 합니다.' },
        { name: '스윙 발리 연습', duration: 7, description: '높은 볼을 스윙 발리로 공격적으로 처리합니다.', reps: '15개 × 3세트', tips: '타이밍과 풋워크가 핵심입니다.' },
      ],
      '파트너 있음': [
        { name: '발리 vs 패싱 드릴', duration: 8, description: '네트맨이 발리, 베이스라이너가 패싱을 주고받습니다.', reps: '3분 × 4세트 (로테이션)', tips: '발리어는 포지셔닝, 패서는 각도에 집중.' },
        { name: '서브 앤 발리 → 위너', duration: 8, description: '서브 앤 발리 패턴에서 2~3구 안에 위너를 마무리합니다.', reps: '10 패턴 × 3세트', tips: '퍼스트 발리는 깊게, 세컨드 발리는 각도로.' },
        { name: '프레셔 발리 포인트', duration: 7, description: '네트에서 시작하는 포인트 게임. 발리로만 점수를 냅니다.', reps: '10점 × 3게임', tips: '로브 대응도 훈련에 포함하세요.' },
      ],
    },
  },
  '풋워크': {
    '초급': {
      '혼자': [
        { name: '사이드 스텝 기본', duration: 6, description: '베이스라인에서 좌우로 사이드 스텝을 반복합니다.', reps: '왕복 20개 × 3세트', tips: '발이 교차되지 않도록 합니다.' },
        { name: '스플릿 스텝 연습', duration: 5, description: '제자리에서 스플릿 스텝을 반복하며 타이밍을 익힙니다.', reps: '30회 × 3세트', tips: '상대가 치는 순간 양발이 동시에 착지해야 합니다.' },
        { name: '전후 이동 드릴', duration: 6, description: '서비스 라인과 베이스라인 사이를 전후로 이동합니다.', reps: '왕복 15개 × 3세트', tips: '후퇴 시 사이드 스텝을 사용하세요.' },
        { name: '코트 라인 따라 달리기', duration: 5, description: '코트 라인을 따라 다양한 방향으로 이동합니다.', reps: '3바퀴 × 2세트', tips: '방향 전환 시 무릎을 낮추세요.' },
      ],
      '파트너 있음': [
        { name: '볼 보내기 + 이동', duration: 7, description: '파트너가 좌우로 보내면 이동해서 치고 복귀합니다.', reps: '좌우 10개 × 3세트', tips: '복귀 스텝을 습관화하세요.' },
        { name: '짧은 공 → 복귀 드릴', duration: 7, description: '짧은 공을 처리하고 베이스라인으로 복귀하는 것을 반복합니다.', reps: '15개 × 3세트', tips: '진입은 빠르게, 복귀도 빠르게.' },
        { name: '미니 코트 이동 게임', duration: 6, description: '서비스 박스에서 빠른 이동과 터치를 연습합니다.', reps: '2분 × 4세트', tips: '작은 스텝으로 미세 조정하세요.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '캐리오카 스텝', duration: 6, description: '옆으로 이동하며 발을 교차하는 캐리오카 스텝을 연습합니다.', reps: '왕복 15개 × 3세트', tips: '상체는 네트를 향한 채 하체만 이동합니다.' },
        { name: '셔틀런', duration: 7, description: '코트 라인을 기준으로 셔틀런을 합니다.', reps: '5회 × 3세트', tips: '방향 전환 시 무게 중심을 낮추세요.' },
        { name: '대각선 이동 + 섀도 스윙', duration: 7, description: '대각선으로 이동한 뒤 섀도 스윙을 하고 복귀합니다.', reps: '각 방향 10개 × 3세트', tips: '이동 후 밸런스를 잡은 뒤 스윙하세요.' },
      ],
      '파트너 있음': [
        { name: '랜덤 방향 볼 대응', duration: 8, description: '파트너가 랜덤 방향으로 보내면 이동해 처리하고 복귀합니다.', reps: '3분 × 4세트', tips: '항상 스플릿 스텝부터 시작합니다.' },
        { name: '짧은 공 → 깊은 공 교대', duration: 7, description: '짧은 공과 깊은 공을 번갈아 보내 전후 이동을 강제합니다.', reps: '20개 × 3세트', tips: '전환 속도를 점점 올려가세요.' },
        { name: '좌우 풀코트 랠리', duration: 7, description: '파트너가 좌우 끝으로 보내면 풀 스트레치로 처리합니다.', reps: '3분 × 3세트', tips: '무리한 자세에서도 복귀 스텝을 유지하세요.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '스프린트 + 방향 전환', duration: 7, description: '전력 질주 후 급격한 방향 전환을 반복합니다.', reps: '10회 × 4세트', tips: '발목과 무릎 안정성에 주의하세요.' },
        { name: '어질리티 래더', duration: 7, description: '래더를 활용해 빠른 발놀림을 훈련합니다.', reps: '5패턴 × 3세트', tips: '발이 래더에 걸리지 않도록 정확하게.' },
        { name: '360도 이동 드릴', duration: 7, description: '센터에서 4방향으로 이동 후 복귀하는 것을 반복합니다.', reps: '8회 × 3세트', tips: '모든 방향에서 밸런스를 유지하세요.' },
      ],
      '파트너 있음': [
        { name: '코트 커버리지 극한 드릴', duration: 8, description: '파트너가 의도적으로 양쪽 끝과 드롭을 섞어 보냅니다.', reps: '3분 × 4세트', tips: '포기하지 않고 모든 공에 도달하려 하세요.' },
        { name: '공격 → 수비 전환 드릴', duration: 8, description: '공격적 위치에서 갑자기 수비해야 하는 상황을 만듭니다.', reps: '10 패턴 × 3세트', tips: '전환 시 스플릿 스텝이 핵심입니다.' },
        { name: '풋워크 포인트 플레이', duration: 7, description: '실전 포인트를 하되 풋워크 점수를 따로 체크합니다.', reps: '10점 × 3게임', tips: '결과보다 이동의 질에 집중하세요.' },
      ],
    },
  },
  '랠리 일관성': {
    '초급': {
      '혼자': [
        { name: '벽치기 포핸드/백핸드 교대', duration: 8, description: '포핸드와 백핸드를 번갈아 벽치기합니다.', reps: '각 20개 교대 × 3세트', tips: '그립 체인지를 자연스럽게 하세요.' },
        { name: '셀프 랠리 (바닥 바운스)', duration: 6, description: '라켓 위에서 공을 바운스하며 컨트롤 감각을 기릅니다.', reps: '50개 연속 × 3세트', tips: '라켓 면의 중앙에 맞추세요.' },
        { name: '타겟 깊이 연습', duration: 6, description: '베이스라인 1m 안쪽에 타겟을 놓고 깊이를 맞춥니다.', reps: '20개 × 3세트', tips: '네트 높이 위 1~1.5m를 넘기는 것을 기준으로 합니다.' },
      ],
      '파트너 있음': [
        { name: '크로스 랠리 20개 유지', duration: 8, description: '크로스코트로 20개를 끊기지 않고 유지합니다.', reps: '포/백 각 3세트', tips: '속도를 낮추고 일관성에 집중하세요.' },
        { name: '하프 코트 랠리', duration: 7, description: '코트 반쪽만 사용해 방향 일관성을 기릅니다.', reps: '3분 × 4세트', tips: '같은 코스에 반복적으로 보내세요.' },
        { name: '카운트 랠리 게임', duration: 6, description: '랠리 횟수를 세며 최고 기록을 갱신합니다.', reps: '5라운드', tips: '경쟁 요소가 집중력을 높여줍니다.' },
      ],
    },
    '중급': {
      '혼자': [
        { name: '벽치기 100개 포/백 교대', duration: 8, description: '포핸드와 백핸드를 교대하며 100개를 목표로 합니다.', reps: '100개 × 2세트', tips: '전환 시 밸런스를 유지하세요.' },
        { name: '깊이 & 높이 컨트롤', duration: 7, description: '벽에 높이 표시를 하고 일정 높이 이상으로만 보냅니다.', reps: '50개 × 3세트', tips: '탄도가 높을수록 깊이가 유지됩니다.' },
        { name: '방향 전환 벽치기', duration: 7, description: '크로스와 다운더라인을 번갈아 상상하며 벽치기합니다.', reps: '각 20개 교대 × 3세트', tips: '몸의 방향을 의식적으로 바꿔주세요.' },
      ],
      '파트너 있음': [
        { name: '크로스 50개 → 다운 10개', duration: 8, description: '크로스 50개 후 다운더라인 10개를 깔끔하게 이어갑니다.', reps: '3세트', tips: '전환 시 발 위치를 조정하세요.' },
        { name: '2방향 랠리', duration: 7, description: '한 명은 크로스만, 한 명은 다운더라인만 치며 랠리합니다.', reps: '포지션 교대 × 3세트', tips: '방향이 다른 사람 역할이 더 어렵습니다.' },
        { name: '속도 변환 랠리', duration: 7, description: '느린 공 → 빠른 공을 번갈아 보내며 적응력을 기릅니다.', reps: '3분 × 3세트', tips: '느린 공에서 풋워크를 더 신경 쓰세요.' },
      ],
    },
    '상급': {
      '혼자': [
        { name: '벽치기 200개 연속', duration: 8, description: '포핸드/백핸드 자유롭게 섞어 200개를 연속으로 합니다.', reps: '200개 연속', tips: '일정한 리듬과 깊이 유지가 핵심입니다.' },
        { name: '구질 변환 벽치기', duration: 8, description: '탑스핀, 플랫, 슬라이스를 번갈아 벽치기합니다.', reps: '각 구질 30개 교대 × 2세트', tips: '구질 전환 시 그립과 스윙 궤적을 정확히 바꾸세요.' },
        { name: '멘탈 프레셔 벽치기', duration: 7, description: '100개 연속 성공 조건. 실패 시 처음부터.', reps: '100개 연속 성공', tips: '후반부 집중력 유지 훈련입니다.' },
      ],
      '파트너 있음': [
        { name: '풀코트 랠리 100개', duration: 8, description: '방향 자유로 100개 이상 랠리를 유지합니다.', reps: '3세트', tips: '깊이와 높이를 의식적으로 컨트롤하세요.' },
        { name: '패턴 플레이', duration: 8, description: '크로스-크로스-다운 같은 패턴을 정해놓고 실행합니다.', reps: '10패턴 × 3세트', tips: '패턴을 체화해 실전에서 자동으로 나오게 합니다.' },
        { name: '프레셔 랠리 게임', duration: 7, description: '15개 이상 랠리 후 포인트 시작. 긴 랠리에서의 일관성 테스트.', reps: '10점 × 2게임', tips: '체력과 집중력 모두 시험하는 드릴입니다.' },
      ],
    },
  },
};

/* ────────────────────────────────────────────
   Helper – pick drills for the given time budget
   ──────────────────────────────────────────── */

function pickDrills(goal: Goal, level: Level, partner: Partner, totalMinutes: Duration): Drill[] {
  const pool = DRILLS[goal]?.[level]?.[partner] ?? [];
  if (pool.length === 0) return [];

  // Warmup & cooldown reserves
  const warmupCooldown = 5;
  let remaining = totalMinutes - warmupCooldown;
  const selected: Drill[] = [];

  // Shuffle pool for variety on regenerate
  const shuffled = [...pool].sort(() => Math.random() - 0.5);

  for (const drill of shuffled) {
    if (remaining <= 0) break;
    selected.push({ ...drill, duration: Math.min(drill.duration, remaining) });
    remaining -= drill.duration;
  }

  // If we still have time, repeat from the beginning with adjusted durations
  if (remaining > 2 && selected.length > 0) {
    let idx = 0;
    while (remaining > 2) {
      const bonus = Math.min(remaining, 5);
      const extra = { ...shuffled[idx % shuffled.length] };
      extra.duration = bonus;
      extra.name = extra.name + ' (추가)';
      selected.push(extra);
      remaining -= bonus;
      idx++;
    }
  }

  return selected;
}

/* ────────────────────────────────────────────
   Options
   ──────────────────────────────────────────── */

const GOALS: Goal[] = ['포핸드 안정성', '백핸드 강화', '서브 정확도', '발리 감각', '풋워크', '랠리 일관성'];
const LEVELS: Level[] = ['초급', '중급', '상급'];
const DURATIONS: Duration[] = [20, 30, 45, 60];
const PARTNERS: Partner[] = ['혼자', '파트너 있음'];

const GOAL_ICONS: Record<Goal, string> = {
  '포핸드 안정성': '💪',
  '백핸드 강화': '🔄',
  '서브 정확도': '🎯',
  '발리 감각': '⚡',
  '풋워크': '👟',
  '랠리 일관성': '🔁',
};

const LEVEL_COLORS: Record<Level, string> = {
  '초급': 'bg-green-100 text-green-700 border-green-200',
  '중급': 'bg-yellow-100 text-yellow-700 border-yellow-200',
  '상급': 'bg-red-100 text-red-700 border-red-200',
};

/* ────────────────────────────────────────────
   Component
   ──────────────────────────────────────────── */

export default function PracticeDrillGeneratorPage() {
  const [goal, setGoal] = useState<Goal>('포핸드 안정성');
  const [level, setLevel] = useState<Level>('중급');
  const [duration, setDuration] = useState<Duration>(30);
  const [partner, setPartner] = useState<Partner>('혼자');
  const [drills, setDrills] = useState<Drill[] | null>(null);
  const [genKey, setGenKey] = useState(0);

  function generate() {
    setDrills(pickDrills(goal, level, partner, duration));
    setGenKey((k) => k + 1);
  }

  const totalDrillMinutes = drills?.reduce((s, d) => s + d.duration, 0) ?? 0;

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_#eef2ff,_#f5f3ff_40%,_#ffffff_70%)]">
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <section className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-md">
            🎾 연습 드릴 생성기
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            나만의{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
              맞춤 드릴 세션
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            목표·난이도·시간·파트너 유무를 선택하면 집중 훈련 세션을 자동으로 구성해 드립니다.
          </p>
        </section>

        {/* ── Selection form ── */}
        <section className="mt-12 rounded-3xl border border-purple-100 bg-white/80 p-6 shadow-lg backdrop-blur sm:p-8">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Goal */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">훈련 목표</label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                      goal === g
                        ? 'border-purple-400 bg-purple-50 text-purple-700 shadow-sm ring-2 ring-purple-200'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50/50'
                    }`}
                  >
                    <span className="mr-1">{GOAL_ICONS[g]}</span>
                    {g}
                  </button>
                ))}
              </div>
            </div>

            {/* Level */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">난이도</label>
              <div className="flex gap-2">
                {LEVELS.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLevel(l)}
                    className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                      level === l
                        ? 'border-purple-400 bg-purple-50 text-purple-700 shadow-sm ring-2 ring-purple-200'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50/50'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">훈련 시간</label>
              <div className="flex gap-2">
                {DURATIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                      duration === d
                        ? 'border-purple-400 bg-purple-50 text-purple-700 shadow-sm ring-2 ring-purple-200'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50/50'
                    }`}
                  >
                    {d}분
                  </button>
                ))}
              </div>
            </div>

            {/* Partner */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-slate-700">파트너 유무</label>
              <div className="flex gap-2">
                {PARTNERS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setPartner(p)}
                    className={`flex-1 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                      partner === p
                        ? 'border-purple-400 bg-purple-50 text-purple-700 shadow-sm ring-2 ring-purple-200'
                        : 'border-slate-200 bg-white text-slate-600 hover:border-purple-200 hover:bg-purple-50/50'
                    }`}
                  >
                    {p === '혼자' ? '🧍 혼자' : '🤝 파트너 있음'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Generate button */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={generate}
              className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-all hover:from-purple-700 hover:to-indigo-700 hover:shadow-xl sm:w-auto"
            >
              🎾 드릴 생성
            </button>
            {drills && (
              <button
                onClick={generate}
                className="w-full rounded-2xl border border-purple-300 px-8 py-3.5 text-base font-bold text-purple-700 transition-all hover:bg-purple-50 sm:w-auto"
              >
                🔄 새로 생성
              </button>
            )}
          </div>
        </section>

        {/* ── Generated session ── */}
        {drills && (
          <section key={genKey} className="mt-12 animate-[fadeIn_0.4s_ease-out]">
            {/* Summary bar */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <h2 className="text-2xl font-bold text-slate-900">드릴 세션</h2>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${LEVEL_COLORS[level]}`}>
                {level}
              </span>
              <span className="rounded-full border border-purple-200 bg-purple-50 px-3 py-1 text-xs font-semibold text-purple-700">
                {goal}
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                총 {totalDrillMinutes + 5}분 (워밍업 포함)
              </span>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
                {partner}
              </span>
            </div>

            {/* Warm-up card */}
            <div className="mb-4 rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-200 text-lg font-bold text-amber-800">
                  0
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-900">워밍업 & 동적 스트레칭</h3>
                    <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-700">
                      ⏱ 5분
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    가벼운 조깅, 옆걸음, 팔 돌리기, 고관절 열기. 점차 강도를 높이며 몸을 준비합니다.
                  </p>
                  <p className="mt-2 text-xs font-medium text-amber-700">
                    💡 TIP: 급하게 시작하면 부상 위험이 높아집니다. 반드시 워밍업부터 시작하세요.
                  </p>
                </div>
              </div>
            </div>

            {/* Drill cards */}
            <div className="space-y-4">
              {drills.map((drill, i) => {
                const cumulativeBefore = drills.slice(0, i).reduce((s, d) => s + d.duration, 0) + 5;
                return (
                  <div
                    key={`${genKey}-${i}`}
                    className="group rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition-all hover:border-purple-200 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      {/* Step number */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 text-lg font-bold text-white shadow-sm">
                        {i + 1}
                      </div>

                      <div className="flex-1">
                        {/* Title + time */}
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-lg font-bold text-slate-900">{drill.name}</h3>
                          <span className="rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-semibold text-purple-700">
                            ⏱ {drill.duration}분
                          </span>
                          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                            {cumulativeBefore}분~{cumulativeBefore + drill.duration}분
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-2 text-sm leading-6 text-slate-600">{drill.description}</p>

                        {/* Reps & Tips */}
                        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:gap-6">
                          <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-indigo-100 text-xs">
                              🔢
                            </span>
                            <span className="text-sm font-medium text-slate-700">{drill.reps}</span>
                          </div>
                        </div>
                        <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-5 text-slate-600">
                          <span className="font-semibold text-purple-600">💡 TIP:</span> {drill.tips}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cool-down card */}
            <div className="mt-4 rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 to-cyan-50 p-5 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-200 text-lg font-bold text-sky-800">
                  ✓
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-bold text-slate-900">쿨다운 & 정적 스트레칭</h3>
                    <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-sky-700">
                      ⏱ 3~5분
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    가벼운 걷기 후 어깨, 손목, 고관절, 햄스트링 스트레칭. 오늘 세션 느낀 점을 메모하세요.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom actions */}
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                onClick={generate}
                className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg sm:w-auto"
              >
                🔄 새로 생성
              </button>
              <Link
                href="/utility/training-planner"
                className="w-full rounded-2xl border border-purple-300 px-8 py-3 text-center text-sm font-bold text-purple-700 transition-all hover:bg-purple-50 sm:w-auto"
              >
                📋 훈련 플래너와 연결
              </Link>
              <Link
                href="/utility/practice-wall-drill-planner"
                className="w-full rounded-2xl border border-slate-300 px-8 py-3 text-center text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 sm:w-auto"
              >
                🧱 벽치기 드릴 보기
              </Link>
            </div>
          </section>
        )}

        {/* ── Empty state hint ── */}
        {!drills && (
          <section className="mt-16 text-center">
            <div className="mx-auto max-w-md rounded-3xl border border-dashed border-purple-200 bg-purple-50/50 p-10">
              <p className="text-5xl">🎾</p>
              <p className="mt-4 text-lg font-semibold text-slate-700">
                위에서 옵션을 선택하고
              </p>
              <p className="mt-1 text-lg font-semibold text-purple-600">
                &ldquo;드릴 생성&rdquo; 버튼을 눌러 보세요!
              </p>
              <p className="mt-3 text-sm text-slate-500">
                목표·난이도·시간·파트너에 맞춘 훈련 세션이 자동으로 만들어집니다.
              </p>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
