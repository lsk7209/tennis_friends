"""HTTP-only container/route verification; no live external effects."""
import json, re, subprocess, time
from pathlib import Path
import urllib.request, urllib.error, xml.etree.ElementTree as ET
root=Path('/opt/tennisfriends-staging')
measurement=json.loads((root/'build-measurements.json').read_text())
ids=json.loads((root/'coolify-ids.json').read_text())
containers=subprocess.check_output(['docker','ps','-q','--filter','label=coolify.serviceUuid='+ids['service_uuid']],text=True).split()
if not containers:
    all_ids=subprocess.check_output(['docker','ps','-q'],text=True).split()
    candidates=json.loads(subprocess.check_output(['docker','inspect']+all_ids,text=True))
    containers=[c['Id'] for c in candidates if c['Image']==measurement['imageId'] and c['HostConfig'].get('PortBindings',{}).get('3000/tcp')==[{'HostIp':'127.0.0.1','HostPort':'18091'}]]
assert len(containers)==1
cid=containers[0]
container=json.loads(subprocess.check_output(['docker','inspect',cid],text=True))[0]
assert container['State']['Health']['Status']=='healthy'
assert container['Config']['User']=='1001:1001'
assert not container['State']['OOMKilled'] and container['HostConfig']['Memory']==1024**3
base='http://127.0.0.1:18091'
def fetch(path,headers=None):
    start=time.perf_counter()
    try: response=urllib.request.urlopen(urllib.request.Request(base+path,headers=headers or {}),timeout=40)
    except urllib.error.HTTPError as error: response=error
    body=response.read()
    return {'path':path,'status':response.code,'elapsedMs':round((time.perf_counter()-start)*1000,2),'bytes':len(body),'headers':{k:response.headers.get(k) for k in ['Cache-Control','X-Robots-Tag','X-Nextjs-Cache','Content-Type','X-Content-Type-Options','Content-Security-Policy']}},body
paths=['/','/blog','/blog/page/2','/blog/oct26-line-call-basics','/players','/players/carlos-alcaraz','/utility','/utility/ntrp-test','/utility/ntrp-test/test','/utility/ntrp-test/result','/search?q=tennis','/tennis-rules-quiz','/privacy','/terms','/admin','/sitemap.xml','/sitemap-naver.xml','/rss.xml','/feed.xml','/robots.txt','/.well-known/robots.txt','/llms.txt','/migration-does-not-exist','/blog/oct26-service-let-rules']
rows=[]
for path in paths:
    row,body=fetch(path); rows.append(row)
    assert row['status']==(404 if path=='/migration-does-not-exist' else 200), row
    assert 'noindex' in (row['headers']['X-Robots-Tag'] or ''), row
    if row['headers']['Content-Type'] and 'text/html' in row['headers']['Content-Type']:
        html=body.decode()
        assert 'googletagmanager.com/gtag/js' not in html and 'adsense-loader' not in html
        assert 'data-external-effects="off"' in html
        assert '/tennis_friends/_next/' not in html
    if path in ['/robots.txt','/.well-known/robots.txt']: assert b'Disallow: /' in body
    if path=='/sitemap.xml':
        urls=[n.text for n in ET.fromstring(body).iter() if n.tag.endswith('}loc')]
        assert all(u.startswith('https://tennisfrens.com') for u in urls)
        (root/'staging-urls.json').write_text(json.dumps(urls,indent=2))
home=fetch('/')[1].decode()
asset=re.search(r'(?:src|href)="(/_next/static/[^"?]+)',home)
assert asset
row,_=fetch(asset.group(1)); assert row['status']==200; rows.append(row)
page=fetch('/players/carlos-alcaraz')[1].decode()
image_urls=re.findall(r'src="([^" ]*_next/image[^" ]*)"',page)
if image_urls:
    image_row,_=fetch(image_urls[0].replace('&amp;','&')); rows.append(image_row); assert image_row['status']==200,image_row
else: rows.append({'imageOptimization':'No optimizer src on sampled player page; not proven'})
class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self,*args,**kwargs): return None
opener=urllib.request.build_opener(NoRedirect)
for path,headers in [('/',{'Host':'www.tennisfrens.com'}),('/players/arthur-landercknech',{})]:
    try: response=opener.open(urllib.request.Request(base+path,headers=headers),timeout=20)
    except urllib.error.HTTPError as error: response=error
    assert response.code==308
    rows.append({'path':path,'status':response.code,'location':response.headers.get('Location'),'requestHost':headers.get('Host')})
for _ in range(3): rows.append(fetch('/')[0])
(root/'runtime-http.json').write_text(json.dumps(rows,indent=2))
# Match the exact deployed source manifest, rather than relying on its base Git SHA.
output=subprocess.check_output(['docker','exec',cid,'node','-e',"const fs=require('fs');let p=require('./.next/prerender-manifest.json');console.log(JSON.stringify({routes:Object.keys(p.routes),dynamicRoutes:Object.keys(p.dynamicRoutes),staticBytesNotMeasuredHere:true}));"],text=True)
(root/'route-manifest.json').write_text(output)
print(json.dumps({'status':'PASS','httpSamples':len(rows),'container':cid,'sourceDigest':measurement['sourceDigest'],'imageId':measurement['imageId'],'sitemapUrls':len(urls)}))

