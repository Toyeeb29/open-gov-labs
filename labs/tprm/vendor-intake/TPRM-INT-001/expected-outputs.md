# Reviewer notes — TPRM-INT-001

## Issues a competent user should find

| Issue | Where | Why |
| --- | --- | --- |
| Script on logged-in product, not marketing site | ticket | Higher data exposure |
| Payload has tenant, email hash, billing path, DE | sample payload | Identifiable / linkable; not anonymous |
| US storage claim; no DPA; no subprocessors; no SOC | payload note, vendor yml | Intake incomplete for personal data |
| Sasha asked for a Low stamp to buy | ticket, Slack | Process abuse |
| Trial key already in DMs | Slack | Shadow IT starting |

## Classification

Defensible inherent risk: **Medium or High** (personal data + product surface + no contract).  
**Low** is not defensible.

## Routing

Hold or reject for `app.acmecloud` until data map, DPA, subprocessors, and a real assessment. Marketing-site-only might be a later conversation — not required.

Do not send this to Procurement as approved.
