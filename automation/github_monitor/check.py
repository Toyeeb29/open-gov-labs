"""Flag GitHub repos that do not meet the change-management baseline.

Reads a fixture. Does not call GitHub. Does not merge or lock branches.
"""

from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "datasets" / "github-fixtures" / "repo_settings.json"


def findings(data: dict) -> list[dict]:
    out = []
    for repo in data["repos"]:
        prot = repo.get("branch_protection")
        if not prot:
            out.append({"repo": repo["name"], "issue": "no_branch_protection", "control": "CTL-CHG-01"})
            continue
        if prot.get("required_reviews", 0) < 1:
            out.append({"repo": repo["name"], "issue": "reviews_below_1", "control": "CTL-CHG-01"})
        if not prot.get("require_ci"):
            out.append({"repo": repo["name"], "issue": "ci_not_required", "control": "CTL-CHG-01"})
        if prot.get("enforce_admins") is False:
            out.append({"repo": repo["name"], "issue": "admins_can_bypass", "control": "CTL-CHG-01"})
    return out


def main() -> None:
    data = json.loads(SRC.read_text(encoding="utf-8"))
    rows = findings(data)
    print(json.dumps({"human_gate": "Findings are not a change freeze.", "findings": rows}, indent=2))


if __name__ == "__main__":
    main()
