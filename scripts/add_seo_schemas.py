"""
SEO 스키마 자동 추가 스크립트
각 선수 페이지에 PersonSchema와 FAQSchema를 자동으로 추가합니다.
"""

import os
import re
from player_metadata import PLAYER_METADATA

def add_seo_schemas_to_player_page(slug, file_path):
    """선수 페이지에 PersonSchema와 FAQSchema를 추가합니다."""
    
    # 선수 메타데이터 가져오기
    if slug not in PLAYER_METADATA:
        print(f"⚠️  {slug}: 메타데이터 없음, 스킵")
        return False
    
    metadata = PLAYER_METADATA[slug]
    
    # 파일 읽기
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # 이미 PersonSchema가 있는지 확인
    if 'PersonSchema' in content:
        print(f"✓ {slug}: 이미 스키마 적용됨, 스킵")
        return False
    
    # 1. import 문 추가
    import_pattern = r"(import { Metadata } from 'next';[\r\n]+import .* from 'lucide-react';)"
    import_replacement = r"\1\nimport PersonSchema from '@/components/seo/PersonSchema';\nimport FAQSchema from '@/components/seo/FAQSchema';"
    
    content = re.sub(import_pattern, import_replacement, content)
    
    # 2. PersonSchema와 FAQSchema 컴포넌트 추가
    # Article 태그 뒤에 추가 (closing > 이후)
    article_pattern = r'(image="[^"]+"\s+>\s*)\n\s*(<div className="max-w-7xl)'
    
    # PersonSchema와 FAQSchema 생성
    person_schema = f'''<PersonSchema
          name="{metadata['name']}"
          nameKo="{metadata['nameKo']}"
          description="{metadata['description']}"
          image="/images/players/{slug}.png"
          nationality="{metadata['nationality']}"
          birthDate="{metadata['birthDate']}"
          height="{metadata['height']}"
          jobTitle="Professional Tennis Player"
          award={{[
            {', '.join([f"'{award}'" for award in metadata['awards']])}
          ]}}
          url="https://tennisfriends.co.kr/players/{slug}"
        />
        <FAQSchema faqs={{faqs}} />
        '''
    
    article_replacement = rf'\1{person_schema}\2'
    

    content = re.sub(article_pattern, article_replacement, content, flags=re.DOTALL)
    
    # 3. 파일 저장
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✓ {slug}: SEO 스키마 추가 완료")
    return True

def main():
    """메인 함수"""
    import os
    script_dir = os.path.dirname(os.path.abspath(__file__))
    base_dir = os.path.join(script_dir, '..', 'src', 'app', 'players')
    updated_count = 0
    
    # novak-djokovic는 이미 완료되었으므로 제외
    processed_slugs = ['novak-djokovic']
    
    for slug in PLAYER_METADATA.keys():
        if slug in processed_slugs:
            continue
            
        file_path = os.path.join(base_dir, slug, 'page.tsx')
        
        if not os.path.exists(file_path):
            print(f"⚠️  {slug}: 파일 없음 ({file_path})")
            continue
        
        if add_seo_schemas_to_player_page(slug, file_path):
            updated_count += 1
    
    print(f"\n총 {updated_count}개 페이지 업데이트 완료!")

if __name__ == '__main__':
    main()
