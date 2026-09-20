# Reviewer notes — AIGOV-INT-001

## Issues a competent user should find

| Issue | Path |
| --- | --- |
| Intake incomplete; "just resumes" understates applicant PII and EU hiring | `ai-systems/hireai-intake.md`, `privacy/candidate-data-note.md` |
| Ranking plus reject mail from the tool; human review only "if someone complains" | intake |
| Privacy notice does not describe automated rejection | privacy note |
| No approved AI policy; draft would require inventory + committee for HR impact | `policies/POL-AI-001-draft.md` |
| Lumen may train on inputs unless an add-on is bought; no Acme–Lumen contract | `vendors/lumen-models.yml` |
| Legal already refused post-hoc review | PROD-221 |
| Inventory row is stub; SupportReply is unrelated production AI | `ai-systems/inventory.yml` |
| Go-live date is before any impact assessment | intake |

## Classification

A reasoned **high / high-impact HR** (or equivalent) classification is expected. Minimal/low is not defensible. Users should mention employment/candidate effects and possible automated adverse action **in their own words**. They should cite `frameworks/catalog.yml` URLs rather than quoting or inventing regulation text.

## Decision range

**Hold** or **pilot with no automated reject and no production careers-page integration** until Legal, a completed impact assessment, contractual no-train, and human review before any adverse action.  
**Go live this sprint** is not defensible.

The briefing asks a committee to decide. It does not announce that AI or GRC already approved.
