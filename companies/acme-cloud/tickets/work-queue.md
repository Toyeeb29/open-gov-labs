# Security & Compliance — work queue

Simulation date: Monday 21 September 2026 (Jordan Hale)

Work **domain folders in order**: GRC → TPRM → GRC engineering → AI governance.

## GRC (do these first)

| Priority | Ticket | Title | Lab |
| --- | --- | --- | --- |
| High | POL-EXC-019 | Contractor MFA bypass already applied | `labs/grc/policy/GRC-POL-001` |
| High | RSK-024 | Production customer data already copied off-platform | `labs/grc/risk-management/GRC-RISK-001` |
| High | AUD-011 | SOC 2 evidence request — CC6.1 | `labs/grc/compliance/GRC-COMP-001` |
| Medium | IA-033 | Test CTL-CHG-01 before Dana samples it | `labs/grc/audit/GRC-AUD-001` |

## TPRM

| Priority | Ticket | Title | Lab |
| --- | --- | --- | --- |
| High | PROC-088 | DataBridge wants Snowflake production access | `labs/tprm/vendor-assessment/TPRM-VEND-001` |
| Medium | MKT-104 | PixelNorth marketing pixel intake | `labs/tprm/vendor-intake/TPRM-INT-001` |
| Medium | VND-MON-007 | CloudMail SOC expired; Sketchboard still has SSO | `labs/tprm/monitoring/TPRM-MON-001` |

## GRC engineering

| Priority | Ticket | Title | Lab |
| --- | --- | --- | --- |
| Medium | ENG-GRC-041 | Collect Okta vs HR leavers (do not revoke) | `labs/grc-engineering/evidence-automation/GRCENG-EVD-001` |
| Medium | ENG-GRC-042 | Rego gate for public/unencrypted S3 | `labs/grc-engineering/compliance-as-code/GRCENG-CAC-001` |
| Medium | ENG-GRC-043 | GitHub monitor vs CTL-CHG-01 | `labs/grc-engineering/cloud-controls/GRCENG-CLD-001` |
| Low | ENG-GRC-044 | Evidence workflow with human gates | `labs/grc-engineering/workflow-automation/GRCENG-WF-001` |

## AI governance

| Priority | Ticket | Title | Lab |
| --- | --- | --- | --- |
| High | INC-014 | HireAI reject mail already sent | `labs/ai-governance/ai-incidents/AIGOV-INC-001` |
| High | PROD-221 | HireAI go-live this sprint | `labs/ai-governance/ai-intake/AIGOV-INT-001` |
| High | — | HireAI risk rating | `labs/ai-governance/ai-risk/AIGOV-RSK-001` |
| Medium | — | Lumen Models via HireAI | `labs/ai-governance/ai-vendor-risk/AIGOV-VND-001` |
| Medium | — | HireAI impact assessment | `labs/ai-governance/ai-impact/AIGOV-IMP-001` |
