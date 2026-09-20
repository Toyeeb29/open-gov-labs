# Automation

Code used by GRC engineering labs:

- evidence collectors (against fixtures or documented APIs)
- validators
- OPA/Rego policies
- CI examples
- workflow stubs

Keep scripts small and reviewed. A lab's `brief.md` explains the governance problem; this folder holds the engineering solution.

| Path | Used by |
| --- | --- |
| `evidence_collect/collect.py` | GRCENG-EVD-001 |
| `policies/s3_encryption.rego` | GRCENG-CAC-001 |
| `github_monitor/check.py` | GRCENG-CLD-001 |
| `workflows/evidence-request.workflow.yml` | GRCENG-WF-001 |

Do not add malware, exploit PoCs, or credential-stealing examples. Unsafe-to-automate decisions stay with a human gate.
