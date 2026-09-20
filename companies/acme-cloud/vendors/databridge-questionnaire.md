# DataBridge — security questionnaire (returned 11 September 2026)

Completed by: Casey Nguyen, Head of Trust, DataBridge Analytics, Inc.

| Question | Vendor answer |
| --- | --- |
| Do you process production customer data? | No. We only receive aggregated metrics. |
| Do you use AI / machine learning on customer data? | No. |
| SOC 2 Type II available? | We have SOC 2. Report attached (link in email). |
| Encryption at rest | Yes, except the matching cache described in the SOC exception. |
| Subprocessors | AWS us-east-1. We do not use other subprocessors. |
| Data residency | United States |
| Incident in last 12 months | No |
| Penetration test | Annual. Executive summary available on request. |
| MFA for DataBridge staff with customer access | Yes |

The Snowflake share request from Amir says the share includes `prod_app.public.accounts` and `prod_app.public.events` — production replicas, not aggregates.

A DataBridge marketing page (not in this packet) mentions "ML-assisted identity resolution." The draft order form mentions "matching models."
