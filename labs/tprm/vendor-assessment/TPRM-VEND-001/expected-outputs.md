# Reviewer notes — TPRM-VEND-001

## Issues a competent user should find

| Issue | Path | Why it matters |
| --- | --- | --- |
| Share is production replicas, not aggregates | questionnaire vs `assets/systems.yml` vs PROC-088 | Inherent risk is higher than vendor claims |
| Questionnaire denies production data and AI; order form says ML-assisted matching on production event data | `vendors/databridge-questionnaire.md`, `contracts/databridge-order-form-excerpt.md` | Integrity of vendor answers |
| SOC is Type I, as-of 12 Jul 2025, stale, encryption exception on matching cache | `evidence/EVD-databridge-soc2-cover.md` | Does not show operating effectiveness over time |
| No DPA, no subprocessor list, vague deletion | order form | GDPR Art. 28 if personal data is in those tables |
| CUECs say Acme must control who can grant shares | SOC cover | Approving via Slack would fail our complementary control |
| Vendor already in Slack as guest | `vendors/databridge.yml` | Informal access before assessment |
| Legal has not reviewed | order form, PROC-088 | Cannot treat Security as contracting authority |

## Decision range that is defensible

**Hold** or **deny** production share until: current Type II or bridge letter, written remediation of encryption exception, signed DPA + subprocessors, questionnaire corrected, least-privilege share (not raw prod tables) if business still needs it.

**Approve with conditions** can be competent only if conditions **block the share** until the same artifacts exist (conditions are gates, not hope). Immediate unconditional approve is not defensible.

Residual risk should be **High** (or Critical) on the current file.

## Human gate

Access decision field is a named person. "AI reviewed, approved" fails the lab.
