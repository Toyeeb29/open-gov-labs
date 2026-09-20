# Company schema

Each company is a folder under `companies/` with `company.yml` plus browsable records.

Copy [templates/company.yml](templates/company.yml).

## `company.yml` fields

| Field | Meaning |
| --- | --- |
| `id` | Folder name, e.g. `acme-cloud` |
| `name` | Display name |
| `industry` | SaaS, healthcare, fintech, retail, … |
| `employee_count` | Approximate |
| `hq_region` | Do not assume United States |
| `stack` | Systems the user will "log into" as files |
| `frameworks` | In-scope programs |
| `sensitive_data` | Categories (no real data) |
| `notes` | What makes this environment distinct |

## Record tree (target)

Users should be able to open files under:

- `org/` — people, teams, reporting
- `policies/`
- `controls/`
- `risks/`
- `assets/`
- `vendors/`
- `contracts/`
- `evidence/`
- `audits/`
- `incidents/`
- `tickets/`
- `ai-systems/`
- `security/`
- `privacy/`

Not every company needs every folder on day one. Add records when a lab requires them. Intentionally omit or stale-date files when the task is to find gaps.
