# RSK-024 — Production copy for QBR churn model

| | |
| --- | --- |
| Type | Risk intake |
| Priority | High |
| Reporter | Jules Okorie |
| Assignee | Jordan Hale |
| Opened | 18 September 2026 |
| Status | Waiting on GRC |
| Linked lab | `labs/grc/risk-management/GRC-RISK-001` |

## Request

Please log this as a risk and "approve the workaround."

Sasha promised two enterprise CSMs a churn slide on 2 October. Snowflake tickets are backlogged. Dominic said he can dump `customers`, `customers.messages`, and `billing_events` into a bucket on an account he already has (`acme-scratch`, personal card — "we do this for demos").

Jules selected data class **metadata only** on the intake form.

## Comments

**18 Sep — Sasha Klein**  
Need this. Do not make it a science project.

**19 Sep — Dominic Ruiz**  
Bucket is `s3://acme-scratch-qbr`. I turned off default encryption so the CSV job would stop failing. I can share the keys in Slack.

**19 Sep — Jules Okorie**  
Also — we already pulled a two-hour sample last Saturday so we would not be starting from zero. It is on my laptop and Dominic's. We will delete it after the QBR. Filing this so we are "compliant."
