# Change Management Policy

| | |
| --- | --- |
| ID | POL-CHG-001 |
| Owner | Director of Engineering |
| Approved | 18 November 2025 |
| Next review | 18 November 2026 |

## Requirements

1. Production changes go through GitHub pull request. At least one reviewer who is not the author.
2. CI must be green on the merge commit unless an **emergency change** is opened.
3. Emergency changes: incident ticket, post-change review within two business days, still a PR (review may be after merge).
4. Slack or hallway conversation is not the change record.
5. Changes that disable or reduce logging, encryption, or authentication require Security & Compliance acknowledgment **before** merge.
6. A weekly change population is exported from GitHub Actions / deploy tags for audit sampling.

## Related

- Control CTL-CHG-01 (SOC 2 CC8.1 theme)
- Access Control Policy for who may deploy
