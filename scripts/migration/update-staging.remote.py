#!/usr/bin/env python3
"""Update only the existing TennisFriends Coolify staging service on ovh1.

Requires the temporary API token from coolify-session.php. Run only after the
new /opt/tennisfriends-staging/build-measurements.json is complete.
"""
import argparse
import base64
import hashlib
import json
import os
from pathlib import Path
import re
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request

ROOT = Path('/opt/tennisfriends-staging')
SERVICE = 'lyal757eaqr0vxhthel4svmw'
PROJECT = 'oppwkwe7n6bexhfu09vg3fzh'
ENVIRONMENT_ID = 8
SERVER_ID = 0
OLD_IMAGE_ID = 'sha256:2149c1d5c92fef715f590aaed2a3114cb4c42ee70a337dd8bb5782ba5a280353'
PRIVATE = 'tennisfriends-coolify-staging-private'
API = 'http://127.0.0.1:8000/api/v1'


def rollback_path(parent_image_id):
    if parent_image_id == OLD_IMAGE_ID:
        return ROOT / 'update-staging-rollback.json'
    return ROOT / ('update-staging-rollback-' + parent_image_id[7:19] + '.json')


def fail(message):
    raise RuntimeError(message)


def command(*args):
    result = subprocess.run(args, capture_output=True, text=True, timeout=40)
    if result.returncode:
        fail(f'{args[0]} {args[1] if len(args) > 1 else ""} failed ({result.returncode})')
    return result.stdout.strip()


def api(method, path, token, payload=None):
    request = urllib.request.Request(API + path, method=method,
             data=json.dumps(payload).encode() if payload is not None else None,
             headers={'Authorization': 'Bearer ' + token, 'Accept': 'application/json',
                      'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(request, timeout=40) as response:
            data = response.read()
            return json.loads(data) if data else {}
    except urllib.error.HTTPError as error:
        fail(f'Coolify {method} {path} HTTP {error.code}')


def current_service(token):
    detail = api('GET', '/services/' + SERVICE, token)
    if (detail.get('uuid') != SERVICE or detail.get('name') != 'tennisfriends-staging'
            or detail.get('server_id') != SERVER_ID or detail.get('environment_id') != ENVIRONMENT_ID
            or detail.get('connect_to_docker_network') is not False
            or detail.get('domains') not in (None, [])):
        fail('existing Coolify service identity or isolation changed')
    return detail


def stored_compose():
    php = ("require '/var/www/html/vendor/autoload.php';"
           "$app=require '/var/www/html/bootstrap/app.php';"
           "$app->make(Illuminate\\Contracts\\Console\\Kernel::class)->bootstrap();"
           f"$s=App\\Models\\Service::where('uuid','{SERVICE}')->firstOrFail();"
           "echo json_encode(['raw'=>$s->docker_compose_raw,'rendered'=>$s->docker_compose]);")
    result = json.loads(command('docker', 'exec', 'coolify', 'php', '-r', php))
    if not isinstance(result.get('raw'), str) or not isinstance(result.get('rendered'), str):
        fail('Coolify Compose fields unavailable')
    return result


def image_from_raw(raw):
    matches = re.findall(r'^    image: ([^\r\n]+)$', raw, re.M)
    if len(matches) != 1:
        fail('expected exactly one web image in raw Compose')
    return matches[0]


def containers():
    ids = command('docker', 'ps', '-aq', '--filter', 'label=coolify.serviceUuid=' + SERVICE).split()
    return json.loads(command('docker', 'inspect', *ids)) if ids else []


def running(expected_image_id):
    active = [item for item in containers() if item['State']['Running']]
    if len(active) != 1:
        fail('expected one running container for own service')
    item = active[0]
    labels = item['Config']['Labels']
    if (labels.get('com.docker.compose.project') != SERVICE or
            labels.get('com.docker.compose.service') != 'web' or
            item['Image'] != expected_image_id):
        fail('own service container identity or image differs')
    host = item['HostConfig']
    if (host.get('PortBindings') != {'3000/tcp': [{'HostIp': '127.0.0.1', 'HostPort': '18091'}]}
            or host.get('Memory') != 1073741824 or host.get('NanoCpus') != 1000000000
            or host.get('PidsLimit') != 128):
        fail('own service port or resource limits changed')
    if set(item['NetworkSettings']['Networks']) != {SERVICE, PRIVATE}:
        fail('own service networks changed')
    return item


def wait_healthy(image_id):
    deadline = time.monotonic() + 180
    while time.monotonic() < deadline:
        try:
            item = running(image_id)
            if item['State']['Health']['Status'] == 'healthy':
                with urllib.request.urlopen('http://127.0.0.1:18091/', timeout=15) as response:
                    if response.status == 200:
                        return item
        except (RuntimeError, urllib.error.URLError, TimeoutError):
            pass
        time.sleep(3)
    fail('own service did not become healthy on the new image')


def patch_and_restart(token, raw):
    api('PATCH', '/services/' + SERVICE, token,
        {'docker_compose_raw': base64.b64encode(raw.encode()).decode()})
    if stored_compose()['raw'] != raw:
        fail('Coolify did not persist exact intended Compose')
    api('POST', '/services/' + SERVICE + '/restart', token)


def persist_rollback(path, old_raw, old_image_id, old_container_id, target_raw, target_image_id):
    record = {'serviceUuid': SERVICE, 'oldRawCompose': old_raw, 'oldImageId': old_image_id,
              'oldContainerId': old_container_id, 'oldImageTag': image_from_raw(old_raw),
              'oldRawSha256': hashlib.sha256(old_raw.encode()).hexdigest(),
              'targetRawSha256': hashlib.sha256(target_raw.encode()).hexdigest(),
              'targetImageId': target_image_id, 'targetImageTag': image_from_raw(target_raw)}
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    with os.fdopen(fd, 'w') as output:
        json.dump(record, output, indent=2)
        output.write('\n')
        output.flush()
        os.fsync(output.fileno())
    return record


def deploy(token):
    measurement = json.loads((ROOT / 'build-measurements.json').read_text())
    target_tag, target_id = measurement.get('image'), measurement.get('imageId')
    old_id = measurement.get('parentImageId', OLD_IMAGE_ID)
    rollback_file = rollback_path(old_id)
    if (measurement.get('exit') != 0 or not isinstance(target_tag, str) or
            not isinstance(target_id, str) or not re.fullmatch(r'sha256:[0-9a-f]{64}', target_id)
            or not re.fullmatch(r'ovh-tennisfriends-staging:[a-zA-Z0-9_.-]+', target_tag)
            or target_id == old_id or not re.fullmatch(r'sha256:[0-9a-f]{64}', old_id)):
        fail('new successful build measurement with a distinct image is required')
    image = json.loads(command('docker', 'image', 'inspect', target_tag))[0]
    if image['Id'] != target_id:
        fail('local target image tag does not point at measured image ID')
    current_service(token)
    stored = stored_compose()
    old_raw = stored['raw']
    old = running(old_id)
    if old['State']['Health']['Status'] != 'healthy':
        fail('current staging container/tag is not the healthy initial deployment')
    if rollback_file.exists():
        record = json.loads(rollback_file.read_text())
        if (record.get('serviceUuid') != SERVICE or record.get('oldImageId') != old_id
                or record.get('oldContainerId') != old['Id']
                or record.get('targetImageId') != target_id
                or record.get('targetImageTag') != target_tag
                or hashlib.sha256(old_raw.encode()).hexdigest() != record.get('targetRawSha256')):
            fail('existing rollback snapshot does not exactly match pending update')
        target_raw = old_raw
        if old['Config']['Image'] != record['oldImageTag']:
            fail('old running container tag differs from rollback snapshot')
        api('POST', '/services/' + SERVICE + '/restart', token)
    else:
        old_tag = image_from_raw(old_raw)
        if old['Config']['Image'] != old_tag:
            fail('old running container tag differs from Coolify Compose')
        target_raw = old_raw.replace('    image: ' + old_tag, '    image: ' + target_tag, 1)
        if target_raw == old_raw:
            fail('target Compose did not change')
        record = persist_rollback(rollback_file, old_raw, old_id, old['Id'], target_raw, target_id)
        patch_and_restart(token, target_raw)
    new = wait_healthy(target_id)
    current_service(token)
    print(json.dumps({'result': 'PASS', 'serviceUuid': SERVICE, 'oldContainerId': old['Id'],
                      'newContainerId': new['Id'], 'oldImageId': old_id,
                      'newImageId': target_id, 'newImageTag': target_tag,
                      'rollbackFile': str(rollback_file), 'oldRawSha256': record['oldRawSha256'],
                      'targetRawSha256': record['targetRawSha256']}))


def rollback(token):
    measurement = json.loads((ROOT / 'build-measurements.json').read_text())
    old_id = measurement.get('parentImageId', OLD_IMAGE_ID)
    record = json.loads(rollback_path(old_id).read_text())
    if record['serviceUuid'] != SERVICE or record['oldImageId'] != old_id:
        fail('rollback snapshot identity changed')
    if hashlib.sha256(record['oldRawCompose'].encode()).hexdigest() != record['oldRawSha256']:
        fail('rollback Compose hash changed')
    raw = stored_compose()['raw']
    if hashlib.sha256(raw.encode()).hexdigest() != record['targetRawSha256']:
        fail('current Compose is not the exact target; refusing rollback')
    current_service(token)
    patch_and_restart(token, record['oldRawCompose'])
    old = wait_healthy(old_id)
    print(json.dumps({'result': 'ROLLBACK_PASS', 'serviceUuid': SERVICE,
                      'containerId': old['Id'], 'imageId': old_id,
                      'rawSha256': record['oldRawSha256']}))


def main():
    parser = argparse.ArgumentParser()
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument('--deploy', action='store_true')
    group.add_argument('--rollback', action='store_true')
    args = parser.parse_args()
    if socket.gethostname() != 'vps-ce781f0f':
        fail('unexpected host')
    ids = json.loads((ROOT / 'coolify-ids.json').read_text())
    if ids.get('service_uuid') != SERVICE or ids.get('project_uuid') != PROJECT or ids.get('image_id') != OLD_IMAGE_ID:
        fail('saved staging identity changed')
    token = (ROOT / 'api-token').read_text().strip()
    if not token:
        fail('temporary Coolify token unavailable')
    rollback(token) if args.rollback else deploy(token)


if __name__ == '__main__':
    try:
        main()
    except (RuntimeError, OSError, KeyError, ValueError, TypeError, IndexError,
            subprocess.TimeoutExpired, urllib.error.URLError) as error:
        print(f'ERROR: {error}', file=sys.stderr)
        sys.exit(1)
