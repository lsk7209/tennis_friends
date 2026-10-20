"""HTTP only: no analytics JavaScript, indexing, generation or writes."""
import json
from pathlib import Path
import time
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET

OUT = Path(__file__).resolve().parents[2]/'docs/vps-migration/tennisfriends/evidence'
ROOT = 'https://tennisfrens.com'
paths = ['/', '/blog', '/blog/page/2', '/players', '/utility', '/search', '/tennis-rules-quiz', '/privacy', '/terms', '/admin', '/sitemap.xml', '/sitemap-naver.xml', '/rss.xml', '/feed.xml', '/robots.txt', '/llms.txt', '/migration-does-not-exist']
def fetch(url):
    start = time.perf_counter()
    try:
        response = urllib.request.urlopen(urllib.request.Request(url, headers={'User-Agent':'TennisFriends-Migration-ReadOnly/1.0'}),timeout=45)
    except urllib.error.HTTPError as error:
        response = error
    body = response.read()
    return {'url':url,'finalUrl':response.geturl(),'status':response.code,'elapsedMs':round((time.perf_counter()-start)*1000,2),'bytes':len(body),'headers':{k:response.headers.get(k) for k in ['Cache-Control','Content-Type','X-Robots-Tag','X-Vercel-Cache','X-Nextjs-Cache','Location']}},body
OUT.mkdir(parents=True,exist_ok=True)
rows = []
for path in paths:
    row,body=fetch(ROOT+path)
    rows.append(row)
    if path=='/sitemap.xml':
        urls=[node.text for node in ET.fromstring(body).iter() if node.tag.endswith('}loc')]
        (OUT/'live-urls.json').write_text(json.dumps(urls,indent=2))
        for prefix in ['/blog/','/players/','/utility/']:
            sample=next((u for u in urls if u.startswith(ROOT+prefix)),None)
            if sample: rows.append(fetch(sample)[0])
(OUT/'live-http.json').write_text(json.dumps(rows,indent=2))
print(json.dumps({'rows':len(rows),'statuses':{r['url']:r['status'] for r in rows}}))
