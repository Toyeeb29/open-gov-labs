# Reviewer notes — GRC-COMP-001

Not a single correct essay. A competent practitioner should catch the material items below. Wording may differ. Treatment can differ if residual risk and next actions are defensible.

## Issues a competent user should find

| Issue | Where it lives | Why it matters |
| --- | --- | --- |
| Type II period is 1 Jan–30 Sep 2026; MFA memo is 3 Oct 2025 | `evidence/EVD-2025-10-okta-mfa-memo.md`, `audits/type2-planning.md` | Out of period; point-in-time; employees only |
| SEC-441 closed with no attachment | `tickets/SEC-441-mfa-rollout.md` | Not evidence of operating effectiveness |
| Contractor MFA exclusion, no exception record | `security/slack-notes-identity.md`, policy §3.4 | Policy deviation |
| Only Q4 2025 privileged review exists (signed Jan 2026); Q1–Q3 2026 missing | `evidence/EVD-2026-01-privileged-access-review.md` | Policy requires quarterly |
| Q2 review link broken | `evidence/broken-link-q2-access-review.md`, control record | Claimed evidence is not inspectable |
| Control owner is "IT", not a person; last test is Type I | `controls/CTL-IAM-01.yml` | Record is not Type II ready |
| Maya Chen terminated 31 Jul 2026; still ACTIVE in prod admins as of 12 Sep | `tickets/HR-208-…`, `org/people.yml`, Okta export | Live privileged access after leaver; HR ticket closed incomplete |
| Dominic Ruiz granted prod admin via Slack; ticket still To Do | `tickets/ENG-912-…`, Slack notes | Joiner control not followed |
| Riley Cho still Okta admin after internship ended | Okta export, org chart | Stale privileged role |
| Break-glass used 2 Sep; no incident ticket; secret not rotated since 14 Mar | `security/break-glass.md` | Policy §3.6 failed |
| Population incomplete (41 claimed, partial paste) | Okta export | Cannot satisfy PBC item 1 as-is |
| GitHub SSO is good and in-period but does not answer the PBC | `evidence/EVD-2026-09-github-sso.md` | Relevance — do not over-claim |
| Priya listed as AWS prod admin; leftover exception | Jan access review | Least privilege question |

## Operating effectiveness

A defensible conclusion is **not operating effectively** (or **operating with material exceptions**) for the period.  
A conclusion of **effective** is not defensible on this file.

## Escalation (same day)

Maya Chen's still-active privileged access should be escalated for immediate revocation (Chris + Noah + Priya/Alex). Waiting for Friday's PBC is not defensible. Riley's Okta admin is also urgent. Dominic's access should be reviewed, not silently left.

## Evidence requests (examples)

- Chris: full privileged population for the period; current MFA policy export including contractor apps; confirm Maya/Riley deprovision.
- Noah: Q1–Q3 2026 access reviews or a written statement they were not done; break-glass incident + rotation proof or admission they do not exist.
- Samira: leaver timestamp vs IdP; confirmation of last day.
- Luis: documented approval or rollback for Dominic.

## Acceptable variation

Users may combine Riley and Maya in one escalation. They may rate residual risk High or Critical. They may recommend a Type II scope conversation if leadership wants an unmodified report. They should not invent a completed Q2 review.
