"""Archive initial production evidence and promote the measured final image."""
import json
from pathlib import Path
import shutil

ROOT = Path(__file__).resolve().parents[2]
SOURCE = ROOT / 'scripts/migration/production-evidence'
TARGET = ROOT / 'docs/vps-migration/tennisfriends/evidence/production'
SUFFIX = 'ad682d566552'
INITIAL = '5783f99c7a9e'
IMAGE = 'sha256:125cf96a88690fc2fbb1f4fa136d1df595e16e5ec4d272556ce823d530395e5b'


def read(path):
    return json.loads(path.read_text(encoding='utf-8-sig'))


measurement = read(SOURCE / f'build-measurements-{SUFFIX}.json')
assert measurement['exit'] == 0 and measurement['imageId'] == IMAGE
assert measurement['sourceDigest'].startswith(SUFFIX)
files = {
    'build-measurements.json': f'build-measurements-{SUFFIX}.json',
    'source-manifest.json': f'source-manifest-local-{SUFFIX}.json',
    'runtime-http.json': f'runtime-http-{SUFFIX}.json',
    'publication-runtime.json': f'publication-runtime-{SUFFIX}.json',
    'runtime-security.json': f'runtime-security-{SUFFIX}.json',
    'protected-resources.json': f'protected-resources-reconciled-{SUFFIX}.json',
    'image-scan-summary.json': f'image-scan-summary-{SUFFIX}.json',
    'route-manifest.json': f'route-manifest-{SUFFIX}.json',
    'production-urls.json': f'production-urls-{SUFFIX}.json',
}
for canonical, captured in files.items():
    source = SOURCE / captured
    target = TARGET / canonical
    assert source.exists() and target.exists()
    if canonical not in ('route-manifest.json', 'production-urls.json'):
        value = read(source)
        identity = (value.get('imageId') or value.get('appImageId')) if isinstance(value, dict) else None
        if identity:
            assert identity == IMAGE, canonical
    old = TARGET / canonical.replace('.json', f'-{INITIAL}.json')
    if old.exists():
        assert (old.read_bytes() == target.read_bytes() or
                source.read_bytes() == target.read_bytes()), f'prior archive differs: {old}'
    else:
        shutil.copyfile(target, old)
    shutil.copyfile(source, target)

ids = TARGET / 'coolify-ids.json'
old_ids = TARGET / f'coolify-ids-{INITIAL}.json'
if old_ids.exists():
    assert old_ids.read_bytes() == ids.read_bytes(), 'prior Coolify ID archive differs'
else:
    shutil.copyfile(ids, old_ids)
current = read(old_ids)
assert current['image_id'].endswith('5783f99c7a9e0c920e4033958fc41090112a90e1981537b9999934ee0a0fbb73')
current['registration_image_id'] = current['image_id']
current['registration_compose_sha256'] = current['compose_sha256']
current['image_id'] = IMAGE
current['compose_sha256'] = 'a1b2f4969e3c9890b44a5ef04de935317a94f58faf69a0dc685fbcd37375fc9e'
current['image_tag'] = measurement['image']
current['container_id'] = read(SOURCE / f'protected-resources-{SUFFIX}.json')['containerId']
current['immediate_rollback_image_id'] = measurement['parentImageId']
current['immediate_rollback_snapshot'] = '/opt/tennisfriends-production/update-production-rollback-60ddf3010574.json'
ids.write_text(json.dumps(current, indent=2) + '\n')
print(json.dumps({'imageId': IMAGE, 'promotedFiles': len(files) + 1,
                  'archivedInitialFiles': len(files) + 1}))
