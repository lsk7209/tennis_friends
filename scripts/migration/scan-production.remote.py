"""Bounded image archive scan: no Docker socket/credentials given to scanner."""
import json, subprocess, shutil, time
from pathlib import Path
root=Path('/opt/tennisfriends-production')
measurement=json.loads((root/'build-measurements.json').read_text())
assert shutil.disk_usage(root).free>8*1024**3
scan=root/'image-scan'; scan.mkdir(mode=0o700,exist_ok=True)
archive=scan/('production-image-'+measurement['imageId'].split(':')[1][:12]+'.tar')
if not archive.exists():
    subprocess.run(['docker','save','-o',str(archive),measurement['imageId']],check=True)
subprocess.run(['docker','pull','aquasec/trivy:0.75.0'],check=True)
scanner=json.loads(subprocess.check_output(['docker','image','inspect','aquasec/trivy:0.75.0'],text=True))[0]['RepoDigests'][0]
start=time.monotonic()
result=subprocess.run(['docker','run','--rm','--label','tennisfriends.verification=image-scan','--memory','1536m','--cpus','1','--pids-limit','128','--cap-drop','ALL','--security-opt','no-new-privileges:true','--mount','type=bind,src='+str(scan)+',dst=/scan',scanner,'image','--input','/scan/'+archive.name,'--cache-dir','/scan/cache','--scanners','vuln','--format','json','--output','/scan/report.json','--timeout','10m'],timeout=660)
summary={'exit':result.returncode,'imageId':measurement['imageId'],'scannerDigest':scanner,'elapsedSeconds':round(time.monotonic()-start,2)}
if result.returncode==0:
    report=json.loads((scan/'report.json').read_text())
    rows=[{'target':r.get('Target'),'class':r.get('Class'),'id':v['VulnerabilityID'],'package':v['PkgName'],'packagePath':v.get('PkgPath'),'installed':v['InstalledVersion'],'fixed':v.get('FixedVersion'),'severity':v['Severity'],'status':v.get('Status')} for r in report.get('Results',[]) for v in r.get('Vulnerabilities',[])]
    summary.update({'findings':rows,'counts':{s:sum(r['severity']==s for r in rows) for s in ['CRITICAL','HIGH','MEDIUM','LOW','UNKNOWN']}})
(root/'image-scan-summary.json').write_text(json.dumps(summary,indent=2))
print(json.dumps({k:v for k,v in summary.items() if k!='findings'}))
