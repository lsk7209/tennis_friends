import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://dummy.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "dummy-key-for-development";

// 환경 변수가 설정되지 않은 경우 더미 클라이언트 생성
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Supabase 연결 상태 확인 함수
export const isSupabaseConfigured = () => {
  return process.env.NEXT_PUBLIC_SUPABASE_URL && 
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
         process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://dummy.supabase.co" &&
         process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== "dummy-key-for-development";
};

// DB 스키마 (참고용)
/*
create table if not exists ntrp_results (
  id uuid default gen_random_uuid() primary key,
  device_id text,
  score int not null,
  level text not null,
  character text,
  created_at timestamp with time zone default now()
);

create materialized view if not exists ntrp_top7d as
select id, score, level, character, created_at
from ntrp_results
where created_at >= now() - interval '7 days'
order by score desc
limit 50;
*/
