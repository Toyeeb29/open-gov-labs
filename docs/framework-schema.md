# Framework schema

Framework files live in `frameworks/`. They are metadata and mappings, not a pirate copy of a paid standard.

## Required fields

| Field | Meaning |
| --- | --- |
| `id` | `soc2`, `iso27001`, `nist-csf`, `gdpr`, `nist-ai-rmf`, `iso42001`, … |
| `name` | Official name |
| `publisher` | AICPA, ISO, NIST, EU, … |
| `version` | As published |
| `source_url` | Authoritative page |
| `jurisdictions` | e.g. `global`, `eu`, `us`, `ng` |
| `license_notes` | What we will not reproduce |

Labs reference `id` plus optional `control_ids` (e.g. `CC6.1`). Prefer identifiers over quoting long copyrighted clauses.
