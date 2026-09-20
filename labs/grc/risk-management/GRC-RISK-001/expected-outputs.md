# Reviewer notes — GRC-RISK-001

Not a single correct essay.

## Issues a competent user should find

| Issue | Where | Why it matters |
| --- | --- | --- |
| Copy already happened (~14 GB, 13 Sep) | Slack `#revops-qbr`, ticket comment | This is an incident-shaped event, not a future workaround |
| Destination is a personal AWS account, not in Organizations | `EVD-2026-09-scratch-aws.md`, `assets/systems.yml` | No inventory, no logging, no corporate control |
| Encryption off | Ticket + Slack | Customer content unprotected at rest |
| Tables include `customers.messages` and `billing_events`; EU tenants in same tables | Ticket, Slack | Not "metadata only"; GDPR-relevant content likely |
| Keys offered in Slack | Ticket | Credential handling failure |
| Data also on Jules's and Dominic's laptops | Ticket | Uncontrolled copies |
| Jules asked GRC to stamp after the fact | Slack 19 Sep | Register is being used as a rubber stamp |
| RSK-014 residual Medium from Nov 2025 | register, RSK-014 file | Stale; leaver/privileged issues still in the company file |

## Ratings

A defensible inherent rating is **High or Critical**.  
A defensible residual rating **right now** (copies exist, no deletion proof, no encryption) is **High or Critical**.  
**Low** or treating this as a planned, controlled export is not defensible.

## Treatment

Avoid or mitigate with immediate containment: stop further copies, revoke scratch-account keys, delete or legally hold then destroy copies, inventory what left, tell Elena/Alex.  
Acceptance by Jordan or Priya alone is not allowed by the methodology for High/Critical.

## Escalation (same day)

Alex + Elena + Noah + Luis. This is not "wait for the Wednesday QBR meeting."

## Acceptable variation

Users may open a separate incident ticket number. They may keep RSK-014 Medium if they argue the 2026 leaver facts are still unconfirmed *and* they say so — weaker if they already completed GRC-COMP-001. They should not invent a signed DPA covering Dominic's personal account.
