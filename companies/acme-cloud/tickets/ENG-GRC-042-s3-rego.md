# ENG-GRC-042 — Gate the scratch bucket pattern in CI

| | |
| --- | --- |
| Type | GRC engineering |
| Reporter | Priya Shah |
| Assignee | Jordan Hale |
| Linked lab | `labs/grc-engineering/compliance-as-code/GRCENG-CAC-001` |

RSK-024 showed a public, unencrypted bucket. Write/confirm a policy that would have failed that config in CI. Do not apply it to live AWS. Fixture: `datasets/iac-fixtures/s3_buckets.json`.
