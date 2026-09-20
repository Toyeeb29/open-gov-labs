# Lab schema

Every lab is a folder containing `lab.yml` plus a human brief.

Copy [templates/lab.yml](templates/lab.yml).

## Required fields

| Field | Meaning |
| --- | --- |
| `id` | Stable id, e.g. `GRC-COMP-001` |
| `title` | Manager-style title |
| `domain` | `grc` \| `tprm` \| `grc-engineering` \| `ai-governance` |
| `category` | Folder name under that domain |
| `roles` | Who would receive this at work |
| `seniority` | `junior` \| `mid` \| `senior` |
| `company` | Folder name under `companies/` |
| `frameworks` | Ids from `frameworks/` |
| `tasks` | Work steps, not quiz topics |
| `inputs` | What exists at start |
| `outputs` | Artifacts the user must produce |
| `competencies` | What this lab practices |
| `estimated_time_minutes` | Honest completion time |
| `difficulty` | `intro` \| `intermediate` \| `advanced` |

## Recommended fields

- `requestor` — simulated manager or stakeholder
- `priority` — `high` \| `medium` \| `low`
- `due` — relative, e.g. `end of week`
- `evidence` — paths under `companies/` or `datasets/`
- `constraints` — what the user must not do (e.g. grant production access)
- `human_gates` — decisions that remain with a person
- `rubric` — path under `scoring/`
- `portfolio` — whether a sanitized write-up may be exported, labeled simulated

## File layout for one lab

```
labs/<domain>/<category>/<lab-id>/
  lab.yml
  brief.md
  expected-outputs.md    # reviewer notes, not a single golden essay
  README.md              # optional, for contributors
```
