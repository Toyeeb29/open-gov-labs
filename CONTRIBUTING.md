# Contributing

Thanks for helping build a workplace simulator, not a quiz site.

## What to contribute

- New lab (`docs/templates/lab.yml`)
- Company records under `companies/`
- Framework metadata under `frameworks/`
- Rubric under `scoring/`
- Automation used by a GRC engineering lab
- Job-intelligence mappings that do **not** include copyrighted posting text

## Process

```
contributor → template → files in the right folder → sanity check → pull request → review → merge
```

Sanity check (until CI exists):

1. Lab path matches `domain` + `category`.
2. `company` folder exists.
3. Framework ids are listed or added in `frameworks/`.
4. Brief reads like a manager assignment.
5. Evidence is incomplete enough that the user must investigate.
6. Rubric assesses artifacts, not trivia.
7. [docs/ethics.md](docs/ethics.md) is respected.

## Lab review questions

- Would this happen in a real GRC team?
- Is there a defensible deliverable?
- Did we avoid one-true-answer grading?

## Code of conduct (short)

Be precise. Be kind. Do not submit scraped proprietary content.
