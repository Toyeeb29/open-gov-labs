# Reviewer notes — GRC-AUD-001

Not a single correct essay.

## Issues a competent user should find

| Issue | Where | Why it matters |
| --- | --- | --- |
| Population incomplete (~40 claimed, 8 rows, untagged missing) | deploy sample, control notes | Cannot support a clean sample conclusion |
| Author = reviewer (Noah 11 Jun) | deploy sample | Policy §1 failed |
| Blank reviewers (several rows) | deploy sample | No recorded independent review |
| Dominic listed Apr 2026 before start date | deploy sample, people.yml | Export integrity question |
| 15 Aug hotfix, CI forced, Slack "ship it", ticket after the fact | CHG-880 | Emergency process not used |
| 16 Sep CloudTrail disabled ~4h, no Security ack, ticket two days later | CHG-881, cloudtrail gap note | Policy §5; monitoring gap in Type II period |
| 2 Sep tag same day as break-glass | deploy sample, break-glass.md | Context — not automatically a fail, but look |
| Type I test was inquiry only | control record, test plan | This is the first inspection |
| After-the-fact tickets are not the control | CHG-880/881 | Do not treat them as operating evidence |

## Operating effectiveness

A defensible conclusion is **not operating effectively** or **operating with material exceptions**.  
**Effective** is not defensible on this file.

## Population / sample

Competent users state they **do not have a complete population** and that n=8 is "items provided," not a statistical sample of ~40.

## Acceptable variation

Users may still test all 8 plus the CloudTrail gap as additional items. They may recommend a Type II conversation on CC8.1. They should not invent post-implementation reviews or a weekend export Noah never produced.
