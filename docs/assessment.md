# Assessment model

Primary assessment is the **artifact**, not a multiple-choice score.

## Criteria (default)

| Criterion | Question |
| --- | --- |
| Completeness | Are required outputs present? |
| Evidence usage | Did they cite what they actually opened? |
| Risk identification | Did they notice the material issues? |
| Control mapping | Did they connect work to the right control/framework ids? |
| Consistency | Do register, ticket, and summary agree? |
| Professional quality | Would a manager send this onward? |
| Escalation judgment | Did they escalate (or not) for defensible reasons? |
| Human gate | Did they keep AI/automation from "approving"? |

Each criterion: `competent` | `developing` | `needs_work` | `not_applicable`.

## Deterministic checks (safe to automate)

- Required output files/fields exist
- Cited evidence ids exist in the company/dataset
- Forbidden actions were not taken (e.g. production access granted)
- Human approval field is a person, not `ai`

## Judgment (not a single gold essay)

`expected-outputs.md` lists issues a competent practitioner should catch and acceptable treatment options. Two users can both be competent with different wording.

## AI review (optional, later)

AI may comment on clarity and missed evidence. AI may not be the pass/fail authority and may not invent a legal requirement that is not in `frameworks/`.
