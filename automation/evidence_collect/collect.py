"""Collect simulated identity evidence and flag stale privileged access.

This is a teaching collector. It reads fixtures, not a live IdP.
It does not revoke access. A person still owns that decision.
"""

from __future__ import annotations

import json
from datetime import date
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OKTA = ROOT / "datasets" / "evidence-fixtures" / "okta_privileged.json"
LEAVERS = ROOT / "datasets" / "evidence-fixtures" / "hr_leavers.json"
OUT = ROOT / "automation" / "evidence_collect" / "output" / "exceptions.json"


def main() -> None:
    okta = json.loads(OKTA.read_text(encoding="utf-8"))
    leavers = {row["email"]: row for row in json.loads(LEAVERS.read_text(encoding="utf-8"))["leavers"]}
    exceptions = []
    for group in okta["groups"]:
        for member in group["members"]:
            leaver = leavers.get(member["email"])
            if leaver and member["status"] == "ACTIVE":
                exceptions.append(
                    {
                        "control": "CTL-IAM-01",
                        "group": group["name"],
                        "email": member["email"],
                        "last_day": leaver["last_day"],
                        "issue": "privileged_member_after_last_day",
                        "auto_revoked": False,
                    }
                )
    OUT.parent.mkdir(parents=True, exist_ok=True)
    pack = {
        "collected": date.today().isoformat(),
        "source_files": [str(OKTA.relative_to(ROOT)), str(LEAVERS.relative_to(ROOT))],
        "human_gate": "Do not treat this list as an approved revocation.",
        "exceptions": exceptions,
    }
    OUT.write_text(json.dumps(pack, indent=2), encoding="utf-8")
    print(f"Wrote {len(exceptions)} exception(s) to {OUT.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
