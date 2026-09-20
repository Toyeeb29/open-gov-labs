# Reviewer notes — GRC-POL-001

Not a single correct essay.

## Issues a competent user should find

| Issue | Where | Why it matters |
| --- | --- | --- |
| Bypass already applied at 02:04; Reese connected 02:11 | Slack #prod-oncall | After-the-fact paper; live control deviation |
| Chris told Reese not to tell Priya until morning | Slack | Circumvention of GRC |
| Duration requested is open-ended | Ticket, Noah comment | Draft (even if it were approved) caps 90 days and rejects open-ended |
| Exception procedure is draft / not approved | POL-EXC-001 | There is no official chain to "stamp" |
| POL-ACCESS-001 still requires MFA and a logged exception | policy §3.4, §3.7 | Contractor = same control |
| SOW requires MFA; laptop not in MDM; Reese cannot approve exceptions | SOW | Contract already answers part of this |
| Reese added to prod admins | Ticket | Privilege expansion plus MFA hole |
| Same pattern as HelioFix contractor MFA exclusion | slack-notes-identity.md | Repeat exception, still unlogged |
| Noah's Slack "I approve" is not a dual approval record | policy §3.1–3.2 | Slack is not the record |

## Recommendation

A defensible recommendation is **deny** the standing exception and **reverse the bypass today**, with a time-boxed break-glass path if the customer is still down (named incident, MFA restored, session recorded, expiry in hours not quarters).

A **24-hour** exception with CISO + Priya, compensating controls (supervised session, no standing prod-admin, restore MFA at expiry) can be competent if residual and expiry are explicit.

Approving **until we hire** or treating Slack as the log is not defensible.

## Human gate

Jordan recommends. Alex (and Priya) decide. Chris reverses the IdP change unless they decide otherwise.

## Acceptable variation

Users may file this as an incident plus exception. They may link RSK-014 / CC6.1. They should not invent an approved POL-EXC-001.
