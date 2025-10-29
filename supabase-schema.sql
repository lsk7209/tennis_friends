-- NTRP 테스트 결과 테이블
create table if not exists ntrp_results (
  id uuid default gen_random_uuid() primary key,
  device_id text,
  score int not null,
  level text not null,
  character text,
  created_at timestamp with time zone default now()
);

-- 스트링 텐션 계산기 결과 테이블
create table if not exists tension_results (
  id uuid default gen_random_uuid() primary key,
  device_id text not null,
  head_size text not null,
  string_type text not null,
  play_style text not null,
  environment text not null,
  feel_preference text not null,
  ntrp_level text,
  tension_lb int not null,
  tension_kg decimal(4,1) not null,
  tension_range text not null,
  created_at timestamp with time zone default now()
);

-- 최근 7일 상위 점수 뷰 (리더보드용)
create materialized view if not exists ntrp_top7d as
select id, score, level, character, created_at
from ntrp_results
where created_at >= now() - interval '7 days'
order by score desc
limit 50;

-- 뷰 새로고침 함수 (선택사항)
create or replace function refresh_ntrp_top7d()
returns void as $$
begin
  refresh materialized view ntrp_top7d;
end;
$$ language plpgsql;

-- 인덱스 생성 (성능 향상)
create index if not exists idx_ntrp_results_device_id on ntrp_results(device_id);
create index if not exists idx_ntrp_results_created_at on ntrp_results(created_at desc);
create index if not exists idx_ntrp_results_score on ntrp_results(score desc);

-- RLS (Row Level Security) 설정 (선택사항)
-- alter table ntrp_results enable row level security;

-- 익명 사용자도 읽기/쓰기 가능하도록 정책 설정 (개발용)
-- create policy "Allow anonymous access" on ntrp_results
--   for all using (true);
