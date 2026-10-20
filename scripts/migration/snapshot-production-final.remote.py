"""Read-only resource snapshot for the measured production image."""
import json
from pathlib import Path
import shutil
import subprocess

ROOT = Path('/opt/tennisfriends-production')
measurement = json.loads((ROOT / 'build-measurements.json').read_text())
service = json.loads((ROOT / 'coolify-ids.json').read_text())['service_uuid']


def output(*args):
    return subprocess.check_output(args, text=True).strip()


ids = output('docker', 'ps', '-q', '--filter', 'label=coolify.serviceUuid=' + service).split()
assert len(ids) == 1
container = json.loads(output('docker', 'inspect', ids[0]))[0]
assert container['Image'] == measurement['imageId']
assert container['State']['Health']['Status'] == 'healthy'
sizes = json.loads(output('docker', 'exec', ids[0], 'node', '-e',
    "const fs=require('fs'),p=require('path');function size(d){return fs.readdirSync(d,{withFileTypes:true}).reduce((n,e)=>n+(e.isDirectory()?size(p.join(d,e.name)):fs.statSync(p.join(d,e.name)).size),0)}const maybe=d=>fs.existsSync(d)?size(d):null;console.log(JSON.stringify({staticBytes:size('.next/static'),publicBytes:size('public'),nextBytes:size('.next'),isrCacheBytes:maybe('.next/cache'),nodeModulesBytes:maybe('node_modules'),npmCachePresent:fs.existsSync('/root/.npm')||fs.existsSync('/home/nextjs/.npm')}))"))
result = {
    'imageId': measurement['imageId'],
    'containerId': container['Id'],
    'startedAt': container['State']['StartedAt'],
    'health': container['State']['Health']['Status'],
    'oomKilled': container['State']['OOMKilled'],
    'runtimeUser': container['Config']['User'],
    'memoryBytes': container['HostConfig']['Memory'],
    'nanoCpus': container['HostConfig']['NanoCpus'],
    'pidsLimit': container['HostConfig']['PidsLimit'],
    'portBindings': container['HostConfig']['PortBindings'],
    'networks': sorted(container['NetworkSettings']['Networks']),
    'capDrop': container['HostConfig']['CapDrop'],
    'securityOpt': container['HostConfig']['SecurityOpt'],
    'privileged': container['HostConfig']['Privileged'],
    'appStats': json.loads(output('docker', 'stats', '--no-stream', '--format', '{{json .}}', ids[0])),
    'assetSizes': sizes,
    'hostAvailableKiB': int(next(line.split()[1] for line in Path('/proc/meminfo').read_text().splitlines()
                                 if line.startswith('MemAvailable:'))),
    'hostDiskFreeBytes': shutil.disk_usage(ROOT).free,
}
(ROOT / 'protected-resources.json').write_text(json.dumps(result, indent=2) + '\n')
print(json.dumps(result))
