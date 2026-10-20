"""Reconcile a frozen production update baseline with its measured runtime."""
import argparse
import json
from pathlib import Path

EVIDENCE = Path(__file__).resolve().parent / 'production-evidence'
SERVICE = 'mwxmq0l7dn5wwqexrueyevgt'


def read(name):
    return json.loads((EVIDENCE / name).read_text(encoding='utf-8-sig'))


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('digest')
    args = parser.parse_args()
    suffix = args.digest[:12]
    before = read(f'containers-before-update-{suffix}.json')
    after = read(f'containers-after-update-{suffix}.json')
    runtime = read(f'protected-resources-{suffix}.json')
    image = read(f'build-measurements-{suffix}.json')
    current = {item['name']: item for item in after}
    protected = []
    for old in before:
        if SERVICE in old['name']:
            continue
        new = current.get(old['name'])
        protected.append({
            'name': old['name'],
            'sameContainer': bool(new and new['id'] == old['id']),
            'sameStartedAt': bool(new and new['startedAt'] == old['startedAt']),
            'sameRestartCount': bool(new and new['restartCount'] == old['restartCount']),
            'sameImage': bool(new and new['image'] == old['image']),
            'health': new['health'] if new else None,
        })
    own = [item for item in after if SERVICE in item['name']]
    assert len(own) == 1 and own[0]['id'] == runtime['containerId']
    assert runtime['imageId'] == image['imageId'] == own[0]['image']
    assert runtime['health'] == own[0]['health'] == 'healthy'
    result = {
        'sourceDigest': image['sourceDigest'],
        'appImageId': image['imageId'],
        'protectedContainers': protected,
        'allProtectedIdentitiesStable': all(
            item['sameContainer'] and item['sameStartedAt'] and
            item['sameRestartCount'] and item['sameImage'] for item in protected),
        'resources': runtime,
    }
    (EVIDENCE / f'protected-resources-reconciled-{suffix}.json').write_text(
        json.dumps(result, indent=2) + '\n')
    print(json.dumps({'protected': len(protected),
                      'allProtectedIdentitiesStable': result['allProtectedIdentitiesStable'],
                      'appImageId': result['appImageId']}))
    if not result['allProtectedIdentitiesStable']:
        raise RuntimeError('protected container identity changed')


if __name__ == '__main__':
    main()
