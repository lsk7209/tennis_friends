import fcntl, hashlib, json, os
from pathlib import Path
import shutil, subprocess, tarfile, time
assert os.uname().nodename=='vps-ce781f0f'
root=Path('/opt/tennisfriends-staging')
digest='__SOURCE_DIGEST__'
locks=['/run/lock/tennisfriends-build.lock','/run/lock/localgeo-build.lock','/run/lock/temon-build.lock','/run/lock/localgeo-deploy.lock','/run/lock/todaypharm-deploy.lock','/run/ovh-petjigi-build.lock','/run/temon-production-deploy.lock']
for config in Path('/etc/ovh-auto-deploy').glob('*.json'):
    for key,value in json.loads(config.read_text()).items():
        if 'lock' in key.lower():
            if isinstance(value,str): locks.append(value)
            elif isinstance(value,list): locks.extend(value)
handles=[]
for name in sorted(set(locks)):
    handle=os.open(name,os.O_CREAT|os.O_RDWR,0o600)
    fcntl.flock(handle,fcntl.LOCK_EX|fcntl.LOCK_NB); handles.append(handle)
available=int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines() if line.startswith('MemAvailable:')))
assert available>=5.5*1024*1024, 'Below 5.5GiB available: do not build or stop other workloads'
assert shutil.disk_usage(root).free>=15*1024**3
def output(args): return subprocess.check_output(args,text=True).strip()
containers=json.loads(output(['docker','inspect']+output(['docker','ps','-q']).split()))
before=[{'id':c['Id'],'name':c['Name'],'startedAt':c['State']['StartedAt'],'restarts':c['RestartCount'],'health':c['State'].get('Health',{}).get('Status')} for c in containers]
(root/'containers-before.json').write_text(json.dumps(before,indent=2))
builder=json.loads(output(['docker','inspect','buildx_buildkit_ovh-autodeploy-bounded0']))[0]
assert builder['HostConfig']['Memory']==4*1024**3
source=root/('source-'+digest[:12]); assert not source.exists(), 'Existing build source: inspect checkpoint before retry'
source.mkdir()
with tarfile.open(root/('source-'+digest[:12]+'.tgz')) as tar: tar.extractall(source,filter='data')
subprocess.run(['docker','pull','node:24-bookworm-slim'],check=True,stdout=subprocess.DEVNULL)
node_image=json.loads(output(['docker','image','inspect','node:24-bookworm-slim']))[0]['RepoDigests'][0]
image='ovh-tennisfriends-staging:caecd5f-'+digest[:12]
start=time.monotonic(); peak=0; min_available=available; samples=[]
with (root/'build.log').open('w') as log:
    process=subprocess.Popen(['docker','buildx','build','--builder','ovh-autodeploy-bounded','--load','--progress','plain','--build-arg','NODE_IMAGE='+node_image,'--build-arg','REVISION=caecd5f9a76c021d72b00910f2ae789458ac90ca','--tag',image,str(source)],stdout=log,stderr=subprocess.STDOUT)
    while process.poll() is None:
        stat=output(['docker','stats','--no-stream','--format','{{json .}}','buildx_buildkit_ovh-autodeploy-bounded0'])
        memory=int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines() if line.startswith('MemAvailable:')))
        min_available=min(min_available,memory)
        samples.append({'elapsed':round(time.monotonic()-start,2),'stats':json.loads(stat),'memAvailableKiB':memory})
        time.sleep(3)
result={'exit':process.returncode,'elapsedSeconds':round(time.monotonic()-start,2),'nodeImage':node_image,'image':image,'sourceDigest':digest,'minAvailableKiB':min_available,'samples':samples}
(root/'build-measurements.json').write_text(json.dumps(result,indent=2))
assert process.returncode==0, 'Build failed: exact build log retained; no deployment attempted'
details=json.loads(output(['docker','image','inspect',image]))[0]
result.update({'imageId':details['Id'],'imageBytes':details['Size']})
(root/'build-measurements.json').write_text(json.dumps(result,indent=2))
print(json.dumps({k:v for k,v in result.items() if k!='samples'}))
