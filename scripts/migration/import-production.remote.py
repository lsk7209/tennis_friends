"""Load one measured local image on ovh1 without changing any service."""

import fcntl
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess

ROOT = Path('/opt/tennisfriends-production')
OLD_IMAGE_ID = 'sha256:5783f99c7a9e0c920e4033958fc41090112a90e1981537b9999934ee0a0fbb73'
SERVICE = 'mwxmq0l7dn5wwqexrueyevgt'
assert os.uname().nodename == 'vps-ce781f0f'

request = json.loads((ROOT / 'import-request.json').read_text())
tag, image_id, digest = request['image'], request['imageId'], request['sourceDigest']
if tag != 'ovh-tennisfriends-production:caecd5f-' + digest[:12]:
    raise RuntimeError('image tag and source digest differ')
if not image_id.startswith('sha256:') or len(image_id) != 71:
    raise RuntimeError('invalid image ID')
archive = ROOT / ('image-' + digest[:12] + '.tar.gz')
if archive.stat().st_size != request['archiveBytes']:
    raise RuntimeError('archive size differs')
with archive.open('rb') as handle:
    hasher = hashlib.file_digest(handle, 'sha256')
if hasher.hexdigest() != request['archiveSha256']:
    raise RuntimeError('archive hash differs')

locks = ['/run/lock/tennisfriends-build.lock', '/run/lock/localgeo-build.lock',
         '/run/lock/temon-build.lock', '/run/lock/localgeo-deploy.lock',
         '/run/lock/todaypharm-deploy.lock', '/run/ovh-petjigi-build.lock',
         '/run/temon-production-deploy.lock', '/run/lock/tennisfriends-production-import.lock']
for config in Path('/etc/ovh-auto-deploy').glob('*.json'):
    for key, value in json.loads(config.read_text()).items():
        if 'lock' in key.lower():
            if isinstance(value, str): locks.append(value)
            elif isinstance(value, list): locks.extend(value)
handles = []
for name in sorted(set(locks)):
    handle = os.open(name, os.O_CREAT | os.O_RDWR, 0o600)
    fcntl.flock(handle, fcntl.LOCK_EX | fcntl.LOCK_NB)
    handles.append(handle)
available = int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines()
                     if line.startswith('MemAvailable:')))
if available < 3 * 1024 * 1024 or shutil.disk_usage(ROOT).free < 15 * 1024**3:
    raise RuntimeError('image import requires 3 GiB available RAM and 15 GiB free disk')


def output(*args):
    return subprocess.check_output(args, text=True).strip()


old = json.loads(output('docker', 'image', 'inspect', 'ovh-tennisfriends-production:caecd5f-ae46d86f3366'))[0]
if old['Id'] != OLD_IMAGE_ID:
    raise RuntimeError('prior production rollback image differs')
previous = json.loads((ROOT / 'build-measurements.json').read_text())
parent_tag, parent_id = previous.get('image'), previous.get('imageId')
if (previous.get('exit') != 0 or not isinstance(parent_tag, str)
        or not isinstance(parent_id, str) or parent_id == image_id):
    raise RuntimeError('current production measurement is unavailable')
if json.loads(output('docker', 'image', 'inspect', parent_tag))[0]['Id'] != parent_id:
    raise RuntimeError('current production image tag differs from measurement')
service_ids = output('docker', 'ps', '-q', '--filter', 'label=coolify.serviceUuid=' + SERVICE).split()
if len(service_ids) != 1:
    raise RuntimeError('existing production service has no unique running container')
current = json.loads(output('docker', 'inspect', service_ids[0]))[0]
if current['Image'] != parent_id or current['State'].get('Health', {}).get('Status') != 'healthy':
    raise RuntimeError('current production image/health changed')
if subprocess.run(['docker', 'image', 'inspect', tag], capture_output=True).returncode == 0:
    raise RuntimeError('target tag already exists; inspect before retry')
ids = output('docker', 'ps', '-q').split()
before = json.loads(output('docker', 'inspect', *ids))
with (ROOT / 'image-import.log').open('w') as log:
    subprocess.run(['docker', 'load', '--input', str(archive)], stdout=log,
                   stderr=subprocess.STDOUT, timeout=600, check=True)
details = json.loads(output('docker', 'image', 'inspect', tag))[0]
if details['Id'] != image_id:
    raise RuntimeError('imported image ID differs from local build')
if json.loads(output('docker', 'image', 'inspect', 'ovh-tennisfriends-production:caecd5f-ae46d86f3366'))[0]['Id'] != OLD_IMAGE_ID:
    raise RuntimeError('prior rollback image changed during import')
if json.loads(output('docker', 'image', 'inspect', parent_tag))[0]['Id'] != parent_id:
    raise RuntimeError('current rollback image changed during import')
by_id = {}
for container_id in ids:
    probe = subprocess.run(['docker', 'inspect', container_id], capture_output=True, text=True)
    if probe.returncode == 0:
        inspected = json.loads(probe.stdout)[0]
        by_id[inspected['Id']] = inspected
changes = [{'name': item['Name'], 'id': item['Id']} for item in before
           if item['Id'] not in by_id or
           item['State']['StartedAt'] != by_id[item['Id']]['State']['StartedAt'] or
           item['RestartCount'] != by_id[item['Id']]['RestartCount']]
measurement = request['measurement']
if measurement['image'] != tag or measurement['imageId'] != image_id or measurement['exit'] != 0:
    raise RuntimeError('local build measurement differs from imported image')
measurement.update({'parentImageId': parent_id, 'importArchiveSha256': request['archiveSha256'],
                    'importAvailableKiB': available, 'containerChangesDuringImport': changes})
temporary = ROOT / 'build-measurements-imported.json'
temporary.write_text(json.dumps(measurement, indent=2) + '\n')
os.replace(temporary, ROOT / 'build-measurements.json')
print(json.dumps({'status': 'IMPORTED', 'image': tag, 'imageId': image_id,
                  'sourceDigest': digest, 'availableKiB': available,
                  'containerChanges': changes}))
