# Architecture (proposal)

Status: directory layout is in use. Sixteen Acme Cloud labs are written (one per GRC/TPRM/engineering/AI folder, plus the original three). Application code is not started.

Working name: **Open Gov Labs**. Branding should stay easy to change (`README.md` title and this sentence).

## What already existed

The workspace was empty. Sibling folders under `GRC ENGINEERING` (for example Azure pipeline labs, Argus, OSCAL workshop) are separate projects. They are not imported here. This repository is a workplace simulator, not a live-cloud course.

## Design rule

Content is the product. The folder tree *is* the architecture for MVP:

```
open-gov-labs/
├── labs/                 # assignments
├── companies/            # environments
├── frameworks/           # cited control catalogs
├── job-intelligence/     # generalized JD → lab maps
├── datasets/             # shared simulated artifacts
├── automation/           # GRC engineering code
├── scoring/              # rubrics
└── docs/                 # human documentation
```

A workplace UI, if added later, should read these folders. Do not invent a second content model inside an app.

## Core loop

```
JOB → RESPONSIBILITY → TASK → ENVIRONMENT → EVIDENCE → DECISION → ARTIFACT → REVIEW → COMPETENCY
```

- **Job / responsibility:** from [job-intelligence/](../job-intelligence/README.md), generalized.
- **Task:** a lab under [labs/](../labs/README.md).
- **Environment:** a company under [companies/](../companies/README.md).
- **Evidence:** company files plus [datasets/](../datasets/README.md).
- **Decision / artifact:** what the user writes.
- **Review:** [scoring/](../scoring/README.md).
- **Competency:** listed on the lab and career path docs.

## Product layers (when we write code)

1. **Content** — YAML + Markdown in this tree (now).
2. **Loader / validator** — check `lab.yml` and `company.yml` against schemas.
3. **Thin workplace** — work queue, company file browser, artifact forms. Not a course player.
4. **Assessment** — rubric + required-field checks. Optional AI comments later, never silent approval.
5. **Governance kernel** — label AI output, require human gates, block invented legal claims.

MVP should run without an LLM and without PostgreSQL.

## MVP slice

| Track | First labs land under |
| --- | --- |
| GRC Analyst | `labs/grc/` |
| GRC Engineer | `labs/grc-engineering/` |
| AI Governance Analyst | `labs/ai-governance/` |

Companies: `acme-cloud` first (deep), then `healthtech`, `fintech`, `retail`.

Labs are listed in [how-to-practice.md](how-to-practice.md). Practice GRC first, then the next domain folder.

## What we are not building in MVP

- Video/quiz LMS
- Microservices
- Required cloud accounts
- Auth, billing, or a hosted multi-tenant GRC tool clone
- LLM as the grader of record

## Technology (when implementation starts)

| Need | Choice |
| --- | --- |
| Lab / company / framework files | YAML + Markdown |
| Validation | JSON Schema in `docs/templates/` plus a small TypeScript or Python checker |
| Workplace UI (later) | TypeScript + React / Next.js |
| GRC engineering labs | Python and/or Rego in `automation/` |
| User progress (later) | local JSON or SQLite first; PostgreSQL only if we host multi-user |
| CI | GitHub Actions that validate YAML |

## Data provenance

Framework claims need an authoritative publisher URL in `frameworks/`. Job research stores URL + date + our paraphrase, never the posting text. See [ethics.md](ethics.md).

## Overengineering traps

- Building the website before one excellent lab
- Three shallow companies instead of one navigable company
- Scoring that pretends there is a single correct GRC answer
- Copying ServiceNow/Vanta as a product instead of simulating records as files
- Live Azure/AWS subscriptions as a default (that is a different project)
