"""Read-only resource and protected-container reconciliation."""
import json, subprocess, shutil
from pathlib import Path
root=Path('/opt/tennisfriends-staging')
def run(args): return subprocess.check_output(args,text=True)
current=json.loads(run(['docker','inspect']+run(['docker','ps','-q']).split()))
before=json.loads((root/'containers-before.json').read_text())
by_id={c['Id']:c for c in current}
rows=[]
for item in before:
    if item['name']=='/web-'+json.loads((root/'coolify-ids.json').read_text())['service_uuid']:
        continue  # Only our dedicated staging was deliberately replaced.
    c=by_id.get(item['id'])
    rows.append({'name':item['name'],'sameContainer':bool(c),'sameStartedAt':bool(c and c['State']['StartedAt']==item['startedAt']),'beforeRestarts':item['restarts'],'afterRestarts':c['RestartCount'] if c else None,'health':c['State'].get('Health',{}).get('Status') if c else None})
own=next(c for c in current if c['Config'].get('Labels',{}).get('coolify.serviceUuid')==json.loads((root/'coolify-ids.json').read_text())['service_uuid'])
sizes=json.loads(run(['docker','exec',own['Id'],'node','-e',"const fs=require('fs'),p=require('path');function size(d){return fs.readdirSync(d,{withFileTypes:true}).reduce((n,e)=>n+(e.isDirectory()?size(p.join(d,e.name)):fs.statSync(p.join(d,e.name)).size),0)}console.log(JSON.stringify({staticBytes:size('.next/static'),publicBytes:size('public'),nextBytes:size('.next')}))"]))
result={'protectedContainers':rows,'allSameContainerAndStart':all(r['sameContainer'] and r['sameStartedAt'] for r in rows),'resources':{'memAvailableKiB':int(next(s.split()[1] for s in Path('/proc/meminfo').read_text().splitlines() if s.startswith('MemAvailable:'))),'diskFreeBytes':shutil.disk_usage(root).free,'appStats':json.loads(run(['docker','stats','--no-stream','--format','{{json .}}',own['Id']]))},'assetSizes':sizes,'appImageId':own['Image'],'appStartedAt':own['State']['StartedAt']}
(root/'runtime-resources.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result))
