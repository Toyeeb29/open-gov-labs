# Open Gov Labs

Working name. The product name can change later without renaming every lab.

**Practice the work before you get the job.**

**Use it here: [https://toyeeb29.github.io/open-gov-labs/](https://toyeeb29.github.io/open-gov-labs/)**

An open-source workplace simulator for GRC, security compliance, IT risk, TPRM, internal audit, GRC engineering, and AI governance.

This is not a certification course. Users receive realistic assignments, inspect a simulated company, make assessments, produce professional artifacts, and get structured feedback.

```
JOB → RESPONSIBILITY → TASK → ENVIRONMENT → EVIDENCE → DECISION → ARTIFACT → REVIEW → COMPETENCY
```

## Current status

Sixteen practice labs run inside Acme Cloud. The hosted desk is a static GitHub Pages site — no login, workpapers stay in your browser.

Open [https://toyeeb29.github.io/open-gov-labs/](https://toyeeb29.github.io/open-gov-labs/), clock in, then work the queue. GRC tickets first.

To run the same desk locally from `workplace/`:

```bash
cd workplace
npm install
npm run dev
```

Then open http://localhost:3456. You can still complete labs in the repo: [docs/how-to-practice.md](docs/how-to-practice.md).

If you are returning to this repo with Cursor: this file, then [docs/README.md](docs/README.md).

## Repository map

| Path | What lives here |
| --- | --- |
| [labs/](labs/README.md) | Practice assignments, grouped by domain |
| [companies/](companies/README.md) | Fictional organizations users work inside |
| [frameworks/](frameworks/README.md) | Framework metadata and control mappings |
| [job-intelligence/](job-intelligence/README.md) | Generalized job-to-lab mappings (never full job descriptions) |
| [datasets/](datasets/README.md) | Simulated evidence, questionnaires, logs, and tickets |
| [automation/](automation/README.md) | Scripts and policy-as-code used by GRC engineering labs |
| [scoring/](scoring/README.md) | Rubrics and assessment criteria |
| [docs/](docs/README.md) | Architecture, schemas, contribution guide, ethics |

## How a lab is supposed to feel

Not: "Learn SOC 2 CC6.1."

Instead: you joined the Security & Compliance team. The company is preparing for a SOC 2 Type II audit. Your manager assigned you CC6.1. Review the evidence, decide whether the control is operating, identify gaps, request missing artifacts, and write an audit-ready summary.

## MVP scope

Three career tracks:

1. GRC Analyst
2. GRC Engineer
3. AI Governance Analyst

Four simulated companies (folders exist; content comes next):

- Acme Cloud (SaaS)
- Healthtech
- Fintech
- Retail

Written labs (Acme Cloud, simulation date 21 September 2026) are listed in [docs/how-to-practice.md](docs/how-to-practice.md). Start with the four GRC labs.

## Principles

- Users discover information. Do not hand them every answer.
- Evidence should be incomplete, stale, or conflicting when that is realistic.
- GRC requires defensible judgment. Rubrics describe a defensible range, not one perfect answer.
- AI may assist. AI must not silently approve, treat, or invent regulatory requirements.
- Simulated work is labeled simulated. It is not employment experience.
- Do not copy proprietary training materials or copyrighted job descriptions.

## License

Open-source license is not selected yet. Do not treat this repository as licensed for reuse until a `LICENSE` file is added.
