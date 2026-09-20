# POL-EXC-019 — MFA exception for production jump host

| | |
| --- | --- |
| Type | Policy exception request |
| Priority | High |
| Reporter | Reese Dalton (via Noah Patel) |
| Assignee | Jordan Hale |
| Opened | 21 September 2026 08:40 |
| Status | Waiting on GRC |
| Linked lab | `labs/grc/policy/GRC-POL-001` |

## Request

Reese cannot complete Okta MFA on the production DBA jump host (`bastion-prod`). Hardware token "does not work on this laptop." Customer **Northline Retail** (not our fintech folder — a fictional customer) has a lockup tonight. Reese wants MFA removed for the jump host **until we hire a full-time DBA**.

Noah commented: "Just this once. I already added Reese to `okta-group-aws-prod-admins` so they can jump if MFA is bypassed. Stamp the exception."

## Comments

**21 Sep 08:51 — Reese Dalton**  
I connected around 02:10 this morning with the temporary bypass Chris gave me on Slack. Need it formalized.

**21 Sep 09:02 — Chris Okonkwo**  
I excluded `bastion-prod` from the MFA policy for Reese's account. Same pattern as HelioFix contractors. File the paper.
