import collections,json,subprocess
from pathlib import Path
result=subprocess.run(['vercel.cmd','logs','--project','tennis-friends','--scope','limsubs-projects','--environment','production','--level','error','--since','7d','--limit','100','--no-branch','--no-follow','--json'],capture_output=True,text=True)
rows=[]
for line in result.stdout.splitlines():
    try: row=json.loads(line)
    except ValueError: continue
    rows.append({k:row.get(k) for k in ['level','statusCode','source','timestamp']})
out={'exit':result.returncode,'window':'7d','limit':100,'rows':rows,'note':'Messages, query strings, headers and identifiers discarded. Empty rows do not prove absence of all errors.'}
Path('docs/vps-migration/tennisfriends/evidence/vercel-errors.json').write_text(json.dumps(out,indent=2))
print(json.dumps({'exit':result.returncode,'returnedRows':len(rows)}))
