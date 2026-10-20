"""Trusted HTTPS checks with an explicit VPS DNS override, no JS execution."""
import argparse,json,subprocess,tempfile,time,datetime,re
parser=argparse.ArgumentParser()
parser.add_argument("--public-dns",action="store_true")
args=parser.parse_args()
from pathlib import Path
root=Path(__file__).resolve().parents[2]/'docs/vps-migration/tennisfriends/evidence/production'
private=json.loads((root/'runtime-http.json').read_text(encoding='utf-8'))
rows=[]
for item in private:
 if not item.get('path'): continue
 host=item.get('requestHost') or 'tennisfrens.com'; path=item['path']
 with tempfile.TemporaryDirectory() as tmp:
  body=Path(tmp)/'body'; headers=Path(tmp)/'headers'
  cmd=['curl.exe','--silent','--show-error','--max-time','45','--resolve',host+':443:51.79.206.71','--dump-header',str(headers),'--output',str(body),'--write-out','%{http_code} %{ssl_verify_result} %{remote_ip} %{time_starttransfer}','https://'+host+path]
  if args.public_dns:
   index=cmd.index('--resolve'); del cmd[index:index+2]
  r=subprocess.run(cmd,capture_output=True,text=True)
  assert r.returncode==0,(path,r.stderr)
  status,tls,ip,ttfb=r.stdout.split(); h=headers.read_text(encoding='utf-8'); b=body.read_bytes()
  row={'host':host,'path':path,'status':int(status),'tlsVerify':int(tls),'remoteIP':ip,'ttfbSeconds':float(ttfb),'bytes':len(b),'location':next((s.split(':',1)[1].strip() for s in h.splitlines() if s.lower().startswith('location:')),None)}
  assert row['status']==item['status'],row
  assert tls=='0' and ip=='51.79.206.71',row
  if path=='/':
   assert 'adsense-loader' not in b.decode()
   if host=='tennisfrens.com': assert 'data-external-effects="production"' in b.decode()
  rows.append(row)
result={'observedAtUtc':datetime.datetime.now(datetime.timezone.utc).isoformat(),'status':'PASS','dnsOverride':not args.public_dns,'rows':rows}
(root/('public-dns-http.json' if args.public_dns else 'public-https-http.json')).write_text(json.dumps(result,indent=2),encoding='utf-8')
print('PASS trusted VPS HTTPS checks',len(rows))
