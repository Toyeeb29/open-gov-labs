# GRCENG-CAC-001 — Compliance-as-code

Read [brief.md](brief.md). Inspect the Rego and fixture. Optional:

```
opa eval -d automation/policies/s3_encryption.rego -i datasets/iac-fixtures/s3_buckets.json "data.acme.s3.deny"
```

Fill [workpapers/01-policy-review.md](workpapers/01-policy-review.md). Then [expected-outputs.md](expected-outputs.md).
