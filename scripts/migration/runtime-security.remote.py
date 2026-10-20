"""Read-only reachability indicators; not a complete CVE exploitability proof."""
import json,subprocess,re
from pathlib import Path
root=Path('/opt/tennisfriends-production')
m=json.loads((root/'build-measurements.json').read_text())
ids=json.loads((root/'coolify-ids.json').read_text())
cids=subprocess.check_output(['docker','ps','-q','--filter','label=coolify.serviceUuid='+ids['service_uuid']],text=True).split();assert len(cids)==1
c=json.loads(subprocess.check_output(['docker','inspect',cids[0]],text=True))[0]; assert c['Image']==m['imageId']
rows=subprocess.check_output(['docker','top',cids[0],'-eo','pid,comm'],text=True).splitlines()
pids=[int(r.split()[0]) for r in rows[1:] if r.split()[-1] in ('node','next-server (v1') or 'next-server' in r]
# Process command names differ across Node/Next versions; report absence explicitly.
libs=sorted(set(line.split()[-1] for pid in pids for line in Path('/proc/'+str(pid)+'/maps').read_text().splitlines() if '.so' in line))
versions=json.loads(subprocess.check_output(['docker','exec',cids[0],'node','-p','JSON.stringify(process.versions)'],text=True))
s={'imageId':m['imageId'],'runtimeUser':c['Config']['User'],'capDrop':c['HostConfig']['CapDrop'],'securityOpt':c['HostConfig']['SecurityOpt'],'privileged':c['HostConfig']['Privileged'],'nodeVersions':versions,'nodeProcessCount':len(pids),'loadedLibraries':libs,'interpretation':'Runtime snapshot only. No per-CVE reachability or full security PASS; unpatched vendor OS findings remain.'}
(root/'runtime-security.json').write_text(json.dumps(s,indent=2));print(json.dumps({k:v for k,v in s.items() if k!='loadedLibraries'}))
