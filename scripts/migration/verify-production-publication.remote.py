"""Disposable clock-controlled container; never change VPS or staging clock."""
import json, re, subprocess, time
from pathlib import Path
import urllib.request, urllib.error
root=Path('/opt/tennisfriends-production')
measurement=json.loads((root/'build-measurements.json').read_text())
fixture=root/'publication-verification'; fixture.mkdir(exist_ok=True)
clock=fixture/'clock.txt'; clock.write_text('2026-10-14T08:59:59+09:00')
(fixture/'fake-clock.cjs').write_text((root/'fake-clock.cjs').read_text())
source=root/('source-'+measurement['sourceDigest'][:12])
posts=json.loads('['+(source/'src/data/blog-posts-october-2026.js').read_text().split('[',1)[1].rsplit(']',1)[0]+']')
post=next(p for p in posts if p['scheduledAt']=='2026-10-14T09:00:00+09:00')
slug=post['slug']
name='tennisfriends-production-publication-verification'
existing=subprocess.run(['docker','inspect',name],capture_output=True)
assert existing.returncode!=0, 'Existing fixture container: inspect before retry'
cid=subprocess.check_output(['docker','run','-d','--name',name,'--label','tennisfriends.verification=publication','--memory','1g','--cpus','1','--pids-limit','128','--cap-drop','ALL','--security-opt','no-new-privileges:true','--publish','127.0.0.1:18093:3000','--mount','type=bind,src='+str(fixture)+',dst=/verification,readonly','--env','NODE_OPTIONS=--require=/verification/fake-clock.cjs',measurement['imageId']],text=True).strip()
base='http://127.0.0.1:18093'
def get(path):
    try: response=urllib.request.urlopen(base+path,timeout=30)
    except urllib.error.HTTPError as error: response=error
    return response.code,response.read().decode(errors='replace'),response.headers.get('X-Nextjs-Cache')
def await_body(path,expected):
    for attempt in range(15):
        status,body,cache=get(path)
        if expected in body: return {'path':path,'status':status,'cache':cache,'attempts':attempt+1}
        time.sleep(1)
    raise AssertionError('Publication propagation failed: '+path)
results=[]
try:
    for _ in range(30):
        try:
            if get('/')[0]==200: break
        except (urllib.error.URLError,TimeoutError,ConnectionResetError): pass
        time.sleep(1)
    before=get('/blog/'+slug); assert before[0]==404, {"status":before[0],"body":before[1][:400],"slug":slug}
    utility_urls=set(re.findall(r'<loc>(https://tennisfrens.com/utility/[^<]+)</loc>',get('/sitemap.xml')[1]))
    assert len(utility_urls)>=60
    assert slug not in get('/blog')[1]
    results.append({'case':'pre-release','clock':clock.read_text(),'slug':slug,'detailStatus':before[0]})
    clock.write_text('2026-10-14T09:00:00+09:00')
    after=get('/blog/'+slug); assert after[0]==200
    results.append({'case':'release-boundary','clock':clock.read_text(),'detailStatus':after[0]})
    # Advance beyond the 60-second blog TTL without touching real time.
    clock.write_text('2026-10-14T09:02:00+09:00')
    results.append(await_body('/blog',slug))
    results.append(await_body('/sitemap-naver.xml',slug))
    # Daily discovery TTL is intentionally preserved; verify once it expires.
    clock.write_text('2026-10-15T12:00:00+09:00')
    for path in ['/sitemap.xml','/rss.xml','/feed.xml']: results.append(await_body(path,slug))
    for path in ['/sitemap.xml','/sitemap-naver.xml']:
        body=get(path)[1]
        assert all(url in body for url in utility_urls), 'Utility URL missing after ISR: '+path
    results.append({'case':'utility-URLs-after-ISR','preservedURLs':len(utility_urls)})
    subprocess.run(['docker','restart',cid],check=True,stdout=subprocess.DEVNULL)
    for _ in range(30):
        try:
            if get('/blog/'+slug)[0]==200: break
        except (urllib.error.URLError,TimeoutError,ConnectionResetError): pass
        time.sleep(1)
    assert get('/blog/'+slug)[0]==200
    results.append({'case':'same-container-restart','detailStatus':200})
    (root/'publication-runtime.json').write_text(json.dumps({'status':'PASS','imageId':measurement['imageId'],'fixtureOnly':True,'realClockChanged':False,'cases':results},indent=2))
    print(json.dumps({'status':'PASS','cases':len(results),'slug':slug}))
finally:
    print(subprocess.check_output(['docker','logs','--tail','35',cid],stderr=subprocess.STDOUT,text=True))
    # Remove only this disposable fixture after confirming its exact label and ID.
    record=json.loads(subprocess.check_output(['docker','inspect',cid],text=True))[0]
    assert record['Id']==cid and record['Config']['Labels'].get('tennisfriends.verification')=='publication'
    subprocess.run(['docker','rm','-f',cid],check=True,stdout=subprocess.DEVNULL)



