import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const dynamic = 'force-static'
export const revalidate = false

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Supabase 클라이언트 초기화 (환경 변수가 없어도 빌드 오류 방지)
let supabase: any = null;
if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function POST(request: NextRequest) {
  try {
    // Supabase가 설정되지 않은 경우 처리
    if (!supabase) {
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/service-unavailable',
          title: 'Service Unavailable',
          detail: 'Database service is not configured',
          status: 503
        },
        { status: 503 }
      );
    }

    const body = await request.json();
    const {
      device_id,
      head_size,
      string_type,
      play_style,
      environment,
      feel_preference,
      ntrp_level,
      tension_lb,
      tension_kg,
      tension_range
    } = body;

    // 필수 필드 검증
    if (!device_id || !head_size || !string_type || !play_style || !environment || !feel_preference || !tension_lb || !tension_kg || !tension_range) {
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/validation-error',
          title: 'Validation Error',
          detail: 'Required fields are missing',
          status: 400
        },
        { status: 400 }
      );
    }

    // Supabase에 데이터 삽입
    const { data, error } = await supabase
      .from('tension_results')
      .insert([
        {
          device_id,
          head_size,
          string_type,
          play_style,
          environment,
          feel_preference,
          ntrp_level,
          tension_lb,
          tension_kg,
          tension_range
        }
      ])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/database-error',
          title: 'Database Error',
          detail: 'Failed to save tension result',
          status: 500
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        data: data[0],
        message: 'Tension result saved successfully'
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        type: 'https://tennisfriends.co.kr/problems/internal-error',
        title: 'Internal Server Error',
        detail: 'An unexpected error occurred',
        status: 500
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Supabase가 설정되지 않은 경우 처리
    if (!supabase) {
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/service-unavailable',
          title: 'Service Unavailable',
          detail: 'Database service is not configured',
          status: 503
        },
        { status: 503 }
      );
    }

    const { searchParams } = new URL(request.url);
    const device_id = searchParams.get('device_id');
    const limit = parseInt(searchParams.get('limit') || '10');

    if (!device_id) {
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/validation-error',
          title: 'Validation Error',
          detail: 'device_id is required',
          status: 400
        },
        { status: 400 }
      );
    }

    // 사용자의 최근 텐션 결과 조회
    const { data, error } = await supabase
      .from('tension_results')
      .select('*')
      .eq('device_id', device_id)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { 
          type: 'https://tennisfriends.co.kr/problems/database-error',
          title: 'Database Error',
          detail: 'Failed to fetch tension results',
          status: 500
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { 
        success: true,
        data: data || [],
        count: data?.length || 0
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { 
        type: 'https://tennisfriends.co.kr/problems/internal-error',
        title: 'Internal Server Error',
        detail: 'An unexpected error occurred',
        status: 500
      },
      { status: 500 }
    );
  }
}
