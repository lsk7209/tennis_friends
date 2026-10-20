"""Read-only metadata and project-only billing; never persist env values."""
import datetime as dt
import json
from pathlib import Path
import urllib.request
import urllib.error

OUT = Path(__file__).resolve().parents[2] / 'docs/vps-migration/tennisfriends/evidence'
TEAM = 'team_pJUFd9yEIbdAXHsV2rtMDrEb'

def main():
    token = json.loads(Path('C:/Users/dlatj/AppData/Roaming/com.vercel.cli/Data/auth.json').read_text())['token']
    def api(path):
        request = urllib.request.Request('https://api.vercel.com' + path + ('&' if '?' in path else '?') + 'teamId=' + TEAM, headers={'Authorization': 'Bearer ' + token})
        with urllib.request.urlopen(request, timeout=60) as response:
            return response.read()
    project = json.loads(api('/v9/projects/tennis-friends'))
    assert project['name'] == 'tennis-friends'
    pid = project['id']
    prod = project.get('targets', {}).get('production', {})
    deployment = json.loads(api('/v13/deployments/' + prod['id']))
    envs = json.loads(api('/v9/projects/' + pid + '/env')).get('envs', [])
    domains = json.loads(api('/v9/projects/' + pid + '/domains')).get('domains', [])
    result = {'checkedAtUtc': dt.datetime.now(dt.timezone.utc).isoformat(), 'projectId': pid,
        'production': {k: deployment.get(k) for k in ['id','url','readyState','regions','createdAt','target']},
        'productionSha': deployment.get('meta', {}).get('githubCommitSha'),
        'repository': {k: project.get('link', {}).get(k) for k in ['type','org','repo','productionBranch']},
        'gitProviderOptions': project.get('gitProviderOptions'), 'paused': project.get('paused'),
        'crons': project.get('crons'), 'environment': [{'name': e['key'], 'targets': e.get('target')} for e in envs],
        'domains': [{k: d.get(k) for k in ['name','redirect','redirectStatusCode','verified']} for d in domains],
        'functions': [{'path': f.get('path'), 'runtime': f.get('runtime'), 'regions': f.get('regions')} for f in (deployment.get('functions') or [])],
        'recentErrors': 'Not verified: runtime logs require separate query; no absence-of-errors claim'}
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT/'vercel-current.json').write_text(json.dumps(result, indent=2)+'\n')
    print(json.dumps(result))
    now = dt.datetime.now(dt.timezone.utc)
    start = now - dt.timedelta(days=30)
    try:
        raw = api('/v1/billing/charges?from=' + start.strftime('%Y-%m-%dT%H:%M:%SZ') + '&to=' + now.strftime('%Y-%m-%dT%H:%M:%SZ'))
        rows = [json.loads(line) for line in raw.decode().splitlines() if line.strip()]
        selected = [r for r in rows if r.get('Tags', {}).get('ProjectId') == pid]
        periods = {}
        for days in [7,30]:
            cutoff = (now-dt.timedelta(days=days)).isoformat()[:19]
            subset = [r for r in selected if str(r.get('ChargePeriodStart',''))[:19] >= cutoff]
            groups = {}
            for row in subset:
                group = groups.setdefault(row['SkuId'], {'billedCost':0., 'effectiveCost':0., 'quantity':0., 'unit': row.get('ConsumedUnit'), 'currency':row.get('BillingCurrency')})
                for target, source in [('billedCost','BilledCost'),('effectiveCost','EffectiveCost'),('quantity','ConsumedQuantity')]:
                    group[target] += float(row.get(source) or 0)
            periods[str(days)] = {'from':cutoff+'Z', 'to':now.isoformat(), 'rows':len(subset), 'bySku':groups, 'billedCost':sum(g['billedCost'] for g in groups.values()), 'effectiveCost':sum(g['effectiveCost'] for g in groups.values())}
        billing = {'projectId':pid, 'periods':periods, 'scope':'Historical project usage export, not monthly savings or subscription invoice; export latency unverified'}
    except urllib.error.HTTPError as error:
        billing = {'status':'UNVERIFIED', 'httpStatus':error.code}
    (OUT/'billing-project.json').write_text(json.dumps(billing, indent=2)+'\n')
    print(json.dumps(billing))

if __name__ == '__main__':
    main()
