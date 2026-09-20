# CHG-881 — "Disable noisy trail" (16 September 2026)

| | |
| --- | --- |
| Type | Change (opened 18 September, two days later) |
| Reporter | Noah Patel |
| Status | Done |
| Security acknowledgment | none |

## Description

CloudTrail `prod-logs` was generating volume we did not want to pay for during a load test. I turned the trail off for about four hours (`16 Sep 14:10–18:22 UTC` per my laptop notes). I did not file this beforehand. Priya asked for CC8.1 evidence so I opened the ticket.

I believe logging resumed. I do not have a screenshot of the re-enable.

## Comments

**18 Sep — Priya Shah**  
Logging changes need Security before merge. We will discuss in the control test. Do not mark this accepted.
