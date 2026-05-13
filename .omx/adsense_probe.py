import json
import re
from pathlib import Path
from urllib.parse import urlencode

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
import requests


SCOPE = ["https://www.googleapis.com/auth/adsense.readonly"]
KEY_FILE = Path(r"D:\env\키파일.txt")
OAUTH_CLIENT_FILE = Path(r"D:\env\adsense_oauth_client.json")
TOKEN_FILE = Path(r"D:\env\adsense_token.json")
API_BASE = "https://adsense.googleapis.com/v2"
AUTH_URL_FILE = Path(".omx/adsense_auth_url.txt")


def read_oauth_client() -> dict:
    if OAUTH_CLIENT_FILE.exists():
        return json.loads(OAUTH_CLIENT_FILE.read_text(encoding="utf-8"))

    text = KEY_FILE.read_text(encoding="utf-8", errors="ignore")
    client_id = re.search(r"Client ID\s*:\s*(\S+)", text, re.I)
    client_secret = re.search(r"Client Secret\s*:\s*(\S+)", text, re.I)
    if not client_id or not client_secret:
        raise RuntimeError("OAuth client ID/secret not found in key file")
    return {
        "installed": {
            "client_id": client_id.group(1),
            "client_secret": client_secret.group(1),
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "redirect_uris": ["http://localhost"],
        }
    }


def get_credentials() -> Credentials:
    creds = None
    if TOKEN_FILE.exists():
        creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPE)
    if creds and creds.expired and creds.refresh_token:
        creds.refresh(Request())
    if not creds or not creds.valid:
        flow = InstalledAppFlow.from_client_config(read_oauth_client(), SCOPE)
        auth_url, _ = flow.authorization_url(
            access_type="offline",
            include_granted_scopes="true",
            prompt="consent",
        )
        AUTH_URL_FILE.write_text(auth_url, encoding="utf-8")
        print(f"AUTH_URL_FILE {AUTH_URL_FILE}", flush=True)
        creds = flow.run_local_server(
            port=8765,
            open_browser=False,
            authorization_prompt_message="AUTH_URL: {url}",
            success_message="AdSense OAuth 승인 완료. 이 창은 닫아도 됩니다.",
        )
    TOKEN_FILE.write_text(creds.to_json(), encoding="utf-8")
    return creds


def request_json(creds: Credentials, path: str, params: dict | None = None) -> dict:
    headers = {"Authorization": f"Bearer {creds.token}"}
    response = requests.get(f"{API_BASE}{path}", params=params, headers=headers, timeout=30)
    if response.status_code >= 400:
        raise RuntimeError(f"GET {path} failed {response.status_code}: {response.text[:500]}")
    return response.json()


def report(creds: Credentials, account: str, dimensions: list[str], metrics: list[str]) -> dict:
    params = []
    for dimension in dimensions:
        params.append(("dimensions", dimension))
    for metric in metrics:
        params.append(("metrics", metric))
    params.extend(
        [
            ("dateRange", "LAST_30_DAYS"),
            ("currencyCode", "KRW"),
            ("languageCode", "ko"),
            ("limit", "50"),
        ]
    )
    query = urlencode(params)
    return request_json(creds, f"/{account}/reports:generate?{query}")


def main() -> None:
    creds = get_credentials()
    accounts = request_json(creds, "/accounts").get("accounts", [])
    summary = {"accounts": []}
    for account_obj in accounts:
        account_name = account_obj["name"]
        account_summary = {
            "name": account_name,
            "displayName": account_obj.get("displayName"),
            "state": account_obj.get("state"),
            "timeZone": account_obj.get("timeZone"),
            "sites": request_json(creds, f"/{account_name}/sites").get("sites", []),
            "adClients": request_json(creds, f"/{account_name}/adclients").get("adClients", []),
            "reports": {},
        }
        metrics = [
            "PAGE_VIEWS",
            "AD_REQUESTS",
            "MATCHED_AD_REQUESTS",
            "IMPRESSIONS",
            "CLICKS",
            "ESTIMATED_EARNINGS",
            "AD_REQUESTS_COVERAGE",
            "PAGE_VIEWS_RPM",
            "ACTIVE_VIEW_VIEWABILITY",
        ]
        for key, dims in {
            "byDomain": ["DOMAIN_NAME"],
            "byPlatform": ["PLATFORM_TYPE_NAME"],
            "byAdFormat": ["AD_FORMAT_NAME"],
            "byPlacement": ["AD_PLACEMENT_NAME"],
            "byDate": ["DATE"],
        }.items():
            try:
                account_summary["reports"][key] = report(creds, account_name, dims, metrics)
            except Exception as exc:
                account_summary["reports"][key] = {"error": str(exc)}
        summary["accounts"].append(account_summary)

    out = Path(".omx/adsense_report.json")
    out.write_text(json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"WROTE {out}")
    print(json.dumps({
        "accountCount": len(summary["accounts"]),
        "siteCounts": [len(a["sites"]) for a in summary["accounts"]],
        "adClientCounts": [len(a["adClients"]) for a in summary["accounts"]],
    }, ensure_ascii=False))


if __name__ == "__main__":
    main()
