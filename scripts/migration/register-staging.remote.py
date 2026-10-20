#!/usr/bin/env python3
"""Register and start only the private TennisFriends staging service on the verified VPS.

Run on the VPS with --inspect, --create --server-uuid UUID, or --start.
The Coolify token and API responses are never printed.
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
import tempfile
import time
import urllib.error
import urllib.request


ROOT = Path('/opt/tennisfriends-staging')
IDS = ROOT / 'coolify-ids.json'
COMPOSE = ROOT / 'coolify-compose.yaml'
TOKEN = Path('/opt/tennisfriends-staging/api-token')
API = 'http://127.0.0.1:8000/api/v1'
PROJECT = 'TennisFriends migration'
ENVIRONMENT = 'staging'
SERVICE = 'tennisfriends-staging'
HOST = 'vps-ce781f0f'
SERVER_IP = '51.79.206.71'
IMAGE = 'ovh-tennisfriends-staging:caecd5f-fdc88af495c5'
IMAGE_ID = 'sha256:2149c1d5c92fef715f590aaed2a3114cb4c42ee70a337dd8bb5782ba5a280353'
PRIVATE_NETWORK = 'tennisfriends-coolify-staging-private'
UUID = re.compile(r'^[a-zA-Z0-9-]{8,64}$')

RAW_COMPOSE = f'''services:
  web:
    image: {IMAGE}
    restart: unless-stopped
    init: true
    env_file:
      - {ROOT}/runtime.env
    environment:
      NODE_ENV: production
      PORT: "3000"
    ports:
      - "127.0.0.1:18091:3000"
    mem_limit: 1024m
    cpus: 1.0
    pids_limit: 128
    cap_drop: [ALL]
    security_opt: [no-new-privileges:true]
    logging:
      driver: json-file
      options: {{max-size: 5m, max-file: "3"}}
    healthcheck:
      test: [CMD, node, /app/healthcheck.cjs]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s
    networks: [private]
networks:
  private:
    name: {PRIVATE_NETWORK}
'''


def fail(message):
    raise RuntimeError(message)


def identity(value, label):
    if not isinstance(value, str) or not UUID.fullmatch(value):
        fail(f'invalid {label}')
    return value


def command(*args, input_text=None):
    try:
        return subprocess.check_output(args, input=input_text, text=True, stderr=subprocess.DEVNULL, timeout=30).strip()
    except (subprocess.CalledProcessError, subprocess.TimeoutExpired):
        fail(f'local command failed: {args[0]} {args[1] if len(args) > 1 else ""}')


def api(method, path, token, body=None):
    request = urllib.request.Request(
        API + path,
        data=json.dumps(body).encode() if body is not None else None,
        headers={'Authorization': 'Bearer ' + token, 'Accept': 'application/json',
                 'Content-Type': 'application/json'}, method=method)
    try:
        with urllib.request.urlopen(request, timeout=30) as response:
            body_bytes = response.read()
            return json.loads(body_bytes) if body_bytes else {}
    except urllib.error.HTTPError as error:
        fail(f'Coolify {method} {path} returned HTTP {error.code}')
    except (urllib.error.URLError, ValueError, TimeoutError):
        fail(f'Coolify {method} {path} failed')


def rows(value, label):
    if not isinstance(value, list) or not all(isinstance(row, dict) for row in value):
        fail(f'unexpected {label} response')
    return value


def unique(items, name, label):
    matches = [item for item in items if item.get('name') == name]
    if len(matches) > 1:
        fail(f'duplicate {label} name')
    return matches[0] if matches else None


def model_ids(model):
    if model not in ('Server', 'Environment'):
        fail('invalid model lookup')
    php = ("require '/var/www/html/vendor/autoload.php';"
           "$app=require '/var/www/html/bootstrap/app.php';"
           "$app->make(Illuminate\\Contracts\\Console\\Kernel::class)->bootstrap();"
           f"echo App\\Models\\{model}::get(['id','uuid'])->toJson();")
    result = rows(json.loads(command('docker', 'exec', 'coolify', 'php', '-r', php)), model)
    return {item['uuid']: item['id'] for item in result}


def inventory(token):
    projects = rows(api('GET', '/projects', token), 'projects')
    servers = rows(api('GET', '/servers', token), 'servers')
    services = rows(api('GET', '/services', token), 'services')
    ids = model_ids('Server')
    for server in servers:
        server['id'] = ids.get(server.get('uuid'))
    return projects, servers, services


def verified_server(servers, uuid):
    matches = [server for server in servers if server.get('uuid') == uuid]
    if len(matches) != 1 or matches[0].get('id') is None:
        fail('server UUID does not select one existing server')
    server = matches[0]
    address = server.get('ip') or server.get('ip_address')
    local_server = (address == 'host.docker.internal' and server.get('id') == 0
                    and server.get('name') == 'localhost'
                    and server.get('uuid') == 'nuwltz1ql1nzzkwdj1l844l1')
    if address != SERVER_IP and not local_server:
        fail('Coolify server IP does not match the expected VPS')
    return server


def verify_host():
    if socket.gethostname() != HOST:
        fail('unexpected VPS hostname')
    if not ROOT.is_dir() or not (ROOT / 'runtime.env').is_file():
        fail('staging runtime file is unavailable')
    if not TOKEN.is_file():
        fail('existing Coolify token file is unavailable')


def verify_image():
    data = json.loads(command('docker', 'image', 'inspect', IMAGE))
    if len(data) != 1 or data[0].get('Id') != IMAGE_ID:
        fail('staging image ID differs from the verified build')


def write_record(record):
    ROOT.mkdir(parents=True, exist_ok=True)
    fd, name = tempfile.mkstemp(prefix='.coolify-ids-', dir=ROOT)
    temporary = Path(name)
    try:
        with os.fdopen(fd, 'w', encoding='utf-8') as output:
            json.dump(record, output, indent=2)
            output.write('\n')
            output.flush()
            os.fsync(output.fileno())
        os.replace(temporary, IDS)
    finally:
        if temporary.exists():
            temporary.unlink()
    IDS.chmod(0o600)


def read_record():
    if not IDS.is_file():
        fail('Coolify identity file is absent; run --create first')
    record = json.loads(IDS.read_text(encoding='utf-8'))
    if record.get('project_name') != PROJECT or record.get('environment_name') != ENVIRONMENT or record.get('service_name') != SERVICE:
        fail('saved identity names differ from this staging tool')
    if record.get('image_id') != IMAGE_ID or record.get('compose_sha256') != hashlib.sha256(RAW_COMPOSE.encode()).hexdigest():
        fail('saved image or Compose identity changed')
    return record


def compose_config(content, service_uuid=None):
    output = command('docker', 'compose', '-f', '-', 'config', '--no-env-resolution', '--format', 'json', input_text=content)
    config = json.loads(output)
    services = config.get('services')
    networks = config.get('networks')
    if not isinstance(services, dict) or set(services) != {'web'}:
        fail('Compose must contain only web')
    allowed = {'private'} | ({service_uuid} if service_uuid else set())
    if not isinstance(networks, dict) or not set(networks).issubset(allowed) or 'private' not in networks:
        fail('Compose contains an unexpected network')
    if networks['private'].get('name') != PRIVATE_NETWORK:
        fail('Compose private network name changed')
    web = services['web']
    if web.get('image') != IMAGE or web.get('build') or web.get('network_mode') or web.get('extra_hosts'):
        fail('Compose image/build/network settings changed')
    attached = web.get('networks', {})
    if not isinstance(attached, dict) or set(attached) != set(networks):
        fail('web is attached to an unexpected network')
    ports = web.get('ports')
    if ports != [{'mode': 'ingress', 'target': 3000, 'published': '18091', 'protocol': 'tcp', 'host_ip': '127.0.0.1'}]:
        fail('Compose does not bind only private loopback port 18091')
    if int(web.get('mem_limit', 0)) != 1073741824 or float(web.get('cpus', 0)) != 1.0 or int(web.get('pids_limit', 0)) != 128:
        fail('Compose resource limits changed')
    if web.get('cap_drop') != ['ALL'] or 'no-new-privileges:true' not in web.get('security_opt', []):
        fail('Compose security limits changed')
    logging = web.get('logging') or {}
    if logging.get('driver') != 'json-file' or logging.get('options') != {'max-size': '5m', 'max-file': '3'}:
        fail('Compose log rotation changed')
    health = web.get('healthcheck') or {}
    if health.get('test') != ['CMD', 'node', '/app/healthcheck.cjs']:
        fail('Compose healthcheck changed')
    env_files = web.get('env_file') or []
    if not any(str(ROOT / 'runtime.env') in str(item) for item in env_files):
        fail('Compose runtime env file changed')
    labels = web.get('labels') or {}
    if not isinstance(labels, dict) or any(str(key).startswith(('traefik.', 'caddy.')) for key in labels):
        fail('Compose has proxy routing labels')
    if service_uuid and not any(str(key).startswith('coolify.') and value == service_uuid for key, value in labels.items()):
        fail('rendered Compose has no exact service identity label')
    for network in networks.values():
        name = network.get('name')
        if not isinstance(name, str) or name in ('coolify', 'proxy', 'traefik'):
            fail('Compose network is not private to this service')
        probe = subprocess.run(['docker', 'network', 'inspect', name], capture_output=True, text=True, timeout=20)
        if probe.returncode == 0:
            details = json.loads(probe.stdout)[0]
            if details.get('Containers'):
                fail('Compose network is already shared with another container')
    return config


def stored_compose(service_uuid):
    php = ("require '/var/www/html/vendor/autoload.php';"
           "$app=require '/var/www/html/bootstrap/app.php';"
           "$app->make(Illuminate\\Contracts\\Console\\Kernel::class)->bootstrap();"
           f"$s=App\\Models\\Service::where('uuid','{service_uuid}')->firstOrFail();"
           "echo json_encode(['raw'=>$s->docker_compose_raw,'rendered'=>$s->docker_compose]);")
    return json.loads(command('docker', 'exec', 'coolify', 'php', '-r', php))


def verify_service(token, record, server):
    service_uuid = identity(record.get('service_uuid'), 'service UUID')
    detail = api('GET', f'/services/{service_uuid}', token)
    if not isinstance(detail, dict) or detail.get('uuid') != service_uuid or detail.get('name') != SERVICE:
        fail('Coolify service identity changed')
    if detail.get('server_id') != server['id'] or detail.get('environment_id') != record.get('environment_id'):
        fail('Coolify service association changed')
    if detail.get('connect_to_docker_network') is not False or detail.get('domains') not in (None, []):
        fail('Coolify service has shared network or public domain')
    stored = stored_compose(service_uuid)
    if stored.get('raw') != RAW_COMPOSE:
        fail('Coolify raw Compose differs from verified source')
    rendered = stored.get('rendered')
    if not isinstance(rendered, str) or not rendered.strip():
        fail('Coolify rendered Compose is unavailable')
    config = compose_config(rendered, service_uuid)
    labels = config['services']['web'].get('labels') or {}
    label = next(key for key, value in labels.items() if key.startswith('coolify.') and value == service_uuid)
    network_names = {network['name'] for network in config['networks'].values()}
    return label, network_names


def inspect(token):
    projects, servers, services = inventory(token)
    project = unique(projects, PROJECT, 'project')
    service = unique(services, SERVICE, 'service')
    print(json.dumps({'host': socket.gethostname(), 'project_uuid': project.get('uuid') if project else None,
                      'service_uuid': service.get('uuid') if service else None,
                      'servers': [{'uuid': row.get('uuid'), 'ip': row.get('ip') or row.get('ip_address')} for row in servers]}))


def create(token, server_uuid):
    verify_image()
    compose_config(RAW_COMPOSE)
    if not COMPOSE.exists():
        fd = os.open(COMPOSE, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
        with os.fdopen(fd, 'w', encoding='utf-8') as output:
            output.write(RAW_COMPOSE)
    elif COMPOSE.read_text(encoding='utf-8') != RAW_COMPOSE:
        fail('existing Coolify Compose differs from this tool')
    projects, servers, services = inventory(token)
    server = verified_server(servers, server_uuid)
    existing_project = unique(projects, PROJECT, 'project')
    existing_service = unique(services, SERVICE, 'service')
    if IDS.exists():
        record = read_record()
        if record.get('server_uuid') != server_uuid or record.get('server_id') != server['id']:
            fail('saved server identity changed')
        if not existing_project or existing_project.get('uuid') != record.get('project_uuid'):
            fail('saved project identity changed')
    else:
        if existing_project or existing_service:
            fail('named project or service exists without this tool identity; refusing adoption')
        record = {'project_name': PROJECT, 'environment_name': ENVIRONMENT,
                  'service_name': SERVICE, 'server_uuid': server_uuid, 'server_id': server['id'],
                  'image_id': IMAGE_ID, 'compose_sha256': hashlib.sha256(RAW_COMPOSE.encode()).hexdigest()}
    if not record.get('project_uuid'):
        project = api('POST', '/projects', token, {'name': PROJECT, 'description': 'Private TennisFriends staging migration'})
        record['project_uuid'] = identity(project.get('uuid'), 'created project UUID')
        write_record(record)
    project_uuid = identity(record['project_uuid'], 'project UUID')
    environments = rows(api('GET', f'/projects/{project_uuid}/environments', token), 'environments')
    existing_environment = unique(environments, ENVIRONMENT, 'environment')
    if not record.get('environment_uuid'):
        if existing_environment:
            fail('named environment exists without saved identity')
        environment = api('POST', f'/projects/{project_uuid}/environments', token, {'name': ENVIRONMENT})
        record['environment_uuid'] = identity(environment.get('uuid'), 'created environment UUID')
        write_record(record)
        environments = rows(api('GET', f'/projects/{project_uuid}/environments', token), 'environments')
        existing_environment = unique(environments, ENVIRONMENT, 'environment')
    if not existing_environment or existing_environment.get('uuid') != record['environment_uuid']:
        fail('saved environment identity changed')
    # The API omits numeric IDs. Refresh the local model after POST so a newly
    # created environment is included in the UUID-to-ID map.
    record['environment_id'] = model_ids('Environment').get(record['environment_uuid'])
    if record['environment_id'] is None:
        fail('Coolify environment numeric ID is unavailable')
    write_record(record)
    if not record.get('service_uuid'):
        if existing_service:
            fail('named service exists without saved identity')
        service = api('POST', '/services', token, {
            'name': SERVICE, 'description': 'Loopback-only TennisFriends staging',
            'project_uuid': project_uuid, 'environment_uuid': record['environment_uuid'],
            'server_uuid': server_uuid, 'instant_deploy': False,
            'docker_compose_raw': base64.b64encode(RAW_COMPOSE.encode()).decode(), 'urls': [],
        })
        record['service_uuid'] = identity(service.get('uuid'), 'created service UUID')
        write_record(record)
    if not existing_service:
        services = rows(api('GET', '/services', token), 'services')
        existing_service = unique(services, SERVICE, 'service')
    if not existing_service or existing_service.get('uuid') != record['service_uuid']:
        fail('saved service identity changed')
    label, _ = verify_service(token, record, server)
    print(json.dumps({'registered': True, 'project_uuid': project_uuid,
                      'environment_uuid': record['environment_uuid'],
                      'service_uuid': record['service_uuid'], 'service_label': label}))


def temporary_container():
    data = json.loads(command('docker', 'inspect', 'tennisfriends-staging-web-1'))
    if len(data) != 1:
        fail('temporary staging container is absent')
    container = data[0]
    labels = container.get('Config', {}).get('Labels') or {}
    if labels.get('com.docker.compose.project') != 'tennisfriends-staging' or labels.get('com.docker.compose.service') != 'web':
        fail('temporary staging container labels changed')
    if container.get('Image') != IMAGE_ID:
        fail('temporary staging container image changed')
    if container.get('State', {}).get('Health', {}).get('Status') != 'healthy':
        fail('temporary staging container is not healthy')
    return container['Id']


def matching_containers(label, service_uuid):
    ids = command('docker', 'ps', '-aq', '--filter', f'label={label}={service_uuid}').split()
    if not ids:
        return []
    return json.loads(command('docker', 'inspect', *ids))


def verify_running_container(container, network_names):
    if container.get('Image') != IMAGE_ID:
        fail('Coolify container runs an unexpected image')
    host = container.get('HostConfig') or {}
    if (host.get('PortBindings') or {}) != {'3000/tcp': [{'HostIp': '127.0.0.1', 'HostPort': '18091'}]}:
        fail('Coolify container is not bound to private loopback port 18091')
    if host.get('Memory') != 1073741824 or host.get('NanoCpus') != 1000000000 or host.get('PidsLimit') != 128:
        fail('Coolify container resource limits changed')
    if 'ALL' not in [str(cap).upper() for cap in (host.get('CapDrop') or [])]:
        fail('Coolify container capabilities changed')
    actual_networks = set((container.get('NetworkSettings') or {}).get('Networks') or {})
    if actual_networks != network_names:
        fail('Coolify container attached to an unexpected network')
    for name in actual_networks:
        network = json.loads(command('docker', 'network', 'inspect', name))[0]
        members = network.get('Containers') or {}
        if set(members) != {container['Id']}:
            fail('Coolify container network is shared')


def start(token):
    verify_image()
    record = read_record()
    projects, servers, services = inventory(token)
    project = unique(projects, PROJECT, 'project')
    service = unique(services, SERVICE, 'service')
    server = verified_server(servers, identity(record.get('server_uuid'), 'server UUID'))
    if not project or project.get('uuid') != record.get('project_uuid') or not service or service.get('uuid') != record.get('service_uuid'):
        fail('saved Coolify project or service identity changed')
    environments = rows(api('GET', f"/projects/{record['project_uuid']}/environments", token), 'environments')
    environment = unique(environments, ENVIRONMENT, 'environment')
    if not environment or environment.get('uuid') != record.get('environment_uuid'):
        fail('saved Coolify environment identity changed')
    if model_ids('Environment').get(environment['uuid']) != record.get('environment_id'):
        fail('saved Coolify environment numeric ID changed')
    label, network_names = verify_service(token, record, server)
    if matching_containers(label, record['service_uuid']):
        fail('service-labelled container already exists; inspect before a new start')
    old_id = None  # First dedicated Coolify deployment; no predecessor to stop.
    try:
        api('POST', f"/services/{record['service_uuid']}/start", token)
    except RuntimeError:
        # The old container remains available for an operator-controlled recovery.
        fail('Coolify start failed after verified temporary staging stop')
    for _ in range(40):
        containers = matching_containers(label, record['service_uuid'])
        if len(containers) > 1:
            fail('multiple containers share the exact Coolify service label')
        if containers:
            container = containers[0]
            verify_running_container(container, network_names)
            status = container.get('State', {}).get('Health', {}).get('Status')
            if status == 'healthy':
                print(json.dumps({'status': 'PRIVATE_STAGING_HEALTHY', 'service_uuid': record['service_uuid'],
                                  'container_id': container['Id'], 'image_id': container['Image'],
                                  'temporary_container_stopped': old_id}))
                return
            if status == 'unhealthy':
                fail('Coolify service healthcheck is unhealthy')
        time.sleep(3)
    fail('Coolify service did not become healthy within 120 seconds')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument('--inspect', action='store_true')
    action.add_argument('--create', action='store_true')
    action.add_argument('--start', action='store_true')
    parser.add_argument('--server-uuid')
    args = parser.parse_args()
    if bool(args.server_uuid) != args.create:
        parser.error('--server-uuid is required only with --create')
    verify_host()
    token = TOKEN.read_text(encoding='utf-8').strip()
    if not token:
        fail('Coolify token is empty')
    if args.inspect:
        inspect(token)
    elif args.create:
        create(token, identity(args.server_uuid, 'server UUID'))
    else:
        start(token)


if __name__ == '__main__':
    try:
        main()
    except (RuntimeError, OSError, KeyError, TypeError, ValueError, json.JSONDecodeError, subprocess.TimeoutExpired) as error:
        print(f'ERROR: {error}', file=sys.stderr)
        sys.exit(1)
