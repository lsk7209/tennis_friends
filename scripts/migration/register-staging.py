"""Reuse audited exact-scope Coolify registrar; no shared-service restart."""
import json
from pathlib import Path
import subprocess
import tempfile
ROOT=Path(__file__).resolve().parents[2]
SSH=['ssh','-F','C:/Users/dlatj/.ssh/ovh1_config','ovh1']
REMOTE='/opt/tennisfriends-staging'
def run(command,**kwargs): return subprocess.run(command,check=True,**kwargs)
def main():
    measurement=json.loads(subprocess.check_output(SSH+['sudo -n cat '+REMOTE+'/build-measurements.json'],text=True))
    assert measurement['exit']==0 and measurement.get('imageId')
    out=ROOT/'docs/vps-migration/tennisfriends/evidence'
    (out/'build-measurements.json').write_text(json.dumps(measurement,indent=2))
    template=ROOT.parent/'petjigi-ovh/scripts/vps'
    code=(template/'register-coolify.remote.py').read_text()
    replacements={'petjigi':'tennisfriends','Petjigi':'TennisFriends','18087':'18091','1536m':'1024m','1610612736':'1073741824','1.5':'1.0','1500000000':'1000000000'}
    for old,new in replacements.items(): code=code.replace(old,new)
    code=code.replace("IMAGE = 'ovh-tennisfriends-staging:e9deaf4-20261013-v1'",'IMAGE = '+repr(measurement['image']))
    code=code.replace("IMAGE_ID = 'sha256:562e49f7c38ca9363aa5e10370ce8ebf409e47c7d0ecc921f9420feb1c997f31'",'IMAGE_ID = '+repr(measurement['imageId']))
    code=code.replace("    old_id = temporary_container()\n    command('docker', 'stop', '--time', '20', old_id)","    old_id = None  # First dedicated Coolify deployment; no predecessor to stop.")
    assert "command('docker', 'stop'" not in code
    compile(code,'register-staging.remote.py','exec')
    target=ROOT/'scripts/migration/register-staging.remote.py'
    target.write_text(code)
    session=(template/'coolify-session.php').read_text().replace('petjigi','tennisfriends')
    session_target=ROOT/'scripts/migration/coolify-session.php';session_target.write_text(session)
    for file in [target,session_target]: run(['scp','-F','C:/Users/dlatj/.ssh/ovh1_config',str(file),'ovh1:'+REMOTE+'/'+file.name])
    run(SSH+['sudo -n docker cp '+REMOTE+'/coolify-session.php coolify:/tmp/tennisfriends-coolify-session.php'])
    started=False
    try:
        run(SSH+['sudo -n docker exec coolify php /tmp/tennisfriends-coolify-session.php']); started=True
        run(SSH+['sudo -n docker cp coolify:/tmp/tennisfriends-api-token '+REMOTE+'/api-token'])
        run(SSH+['sudo -n chmod 600 '+REMOTE+'/api-token'])
        runtime='NODE_ENV=production\nNEXT_PUBLIC_SITE_URL=https://tennisfrens.com\nNEXT_PUBLIC_EXTERNAL_EFFECTS=disabled\nNEXT_PUBLIC_DEPLOYMENT_STAGE=staging\nNEXT_PUBLIC_ADS_CONSENT_READY=unverified\n'
        run(SSH+['sudo -n tee '+REMOTE+'/runtime.env >/dev/null'],input=runtime.encode())
        run(SSH+['sudo -n chmod 600 '+REMOTE+'/runtime.env'])
        run(SSH+['sudo -n python3 '+REMOTE+'/register-staging.remote.py --inspect'])
        run(SSH+['sudo -n python3 '+REMOTE+'/register-staging.remote.py --create --server-uuid nuwltz1ql1nzzkwdj1l844l1'])
        run(SSH+['sudo -n python3 '+REMOTE+'/register-staging.remote.py --start'])
        ids=subprocess.check_output(SSH+['sudo -n cat '+REMOTE+'/coolify-ids.json'],text=True)
        (out/'coolify-ids.json').write_text(ids)
    finally:
        if started:
            run(SSH+['sudo -n docker exec coolify php /tmp/tennisfriends-coolify-session.php cleanup'])
            run(SSH+['sudo -n rm -f '+REMOTE+'/api-token'])

if __name__=='__main__': main()
