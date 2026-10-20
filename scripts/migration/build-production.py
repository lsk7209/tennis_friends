"""Transfer exact production source; bounded build only, no deployment."""
import hashlib
import json
from pathlib import Path
import subprocess
import tarfile
import tempfile

ROOT=Path(__file__).resolve().parents[2]
SSH=['ssh','-F','C:/Users/dlatj/.ssh/ovh1_config','ovh1']
REMOTE='/opt/tennisfriends-production'

def main():
    files=[]
    for folder in ['src','public','scripts']:
        files += [p for p in (ROOT/folder).rglob('*') if p.is_file() and not p.is_symlink() and '__pycache__' not in p.parts and 'production-evidence' not in p.parts]
    for name in ['Dockerfile','.dockerignore','compose.production.yaml','package.json','package-lock.json','next.config.ts','tsconfig.json','postcss.config.mjs','eslint.config.mjs','next-env.d.ts']:
        if (ROOT/name).is_file(): files.append(ROOT/name)
    manifest={p.relative_to(ROOT).as_posix():hashlib.sha256(p.read_bytes()).hexdigest() for p in files}
    digest=hashlib.sha256(json.dumps(manifest,sort_keys=True).encode()).hexdigest()
    evidence=ROOT/'scripts/migration/production-evidence'
    evidence.mkdir(exist_ok=True)
    (evidence/'source-manifest.json').write_text(json.dumps({'baseSha':'caecd5f9a76c021d72b00910f2ae789458ac90ca','sourceDigest':digest,'files':manifest},indent=2))
    subprocess.run(SSH+['sudo -n install -d -m 700 -o ubuntu -g ubuntu '+REMOTE],check=True)
    with tempfile.TemporaryDirectory() as folder:
        archive=Path(folder)/'source.tgz'
        with tarfile.open(archive,'w:gz') as tar:
            for p in files: tar.add(p,arcname=p.relative_to(ROOT).as_posix(),recursive=False)
        subprocess.run(['scp','-F','C:/Users/dlatj/.ssh/ovh1_config',str(archive),'ovh1:'+REMOTE+'/source-'+digest[:12]+'.tgz'],check=True)
    script=(ROOT/'scripts/migration/build-production.remote.py').read_text().replace('__SOURCE_DIGEST__',digest)
    subprocess.run(SSH+['sudo -n python3 -'],input=script.encode(),check=True)

if __name__=='__main__': main()
