# Assignment

**From:** Priya Shah  
**Re:** ENG-GRC-042

The QBR copy landed in a public, unencrypted bucket. There is Rego in `automation/policies/s3_encryption.rego` and a fixture that includes `acme-scratch-qbr`.

Read the policy. Decide which buckets fail. If you have OPA/conftest, run it; if not, evaluate by hand and say so.

A failing CI gate on that bucket is a success. A green pipeline does not approve RSK-024.

Workpaper in this folder.
