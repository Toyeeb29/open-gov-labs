# Access Control Policy

| | |
| --- | --- |
| ID | POL-ACCESS-001 |
| Owner | CISO |
| Approved | 3 December 2025 |
| Next review | 3 December 2026 |
| Classification | Internal |

## 1. Purpose

Limit system access to authorized workforce members and service accounts. Access follows least privilege and is reviewed on a defined cadence.

## 2. Scope

Workforce members, contractors, and break-glass accounts with access to Acme Cloud systems, including Okta, AWS, GitHub, and production datastores.

## 3. Requirements

1. Access is granted through a recorded request. Production and privileged access require manager approval **and** Security or IT Operations approval.
2. Slack or email alone is not an approval record.
3. Privileged access (production admin, identity admin, break-glass) is reviewed **at least quarterly** by the system owner. Exceptions are tracked to closure.
4. Multi-factor authentication is required for all workforce members and contractors with access to Acme Cloud systems. Exceptions require a logged policy exception.
5. Access is removed on the last working day for involuntary terminations and within one business day for voluntary terminations.
6. Break-glass accounts:
   - Named owners
   - MFA
   - Used only during a recorded incident
   - Password or secret rotated within 24 hours of use
7. Contractors follow the same control as employees unless a documented exception exists.

## 4. Related records

- Control CTL-IAM-01 (mapped to SOC 2 CC6.1)
- Exception procedure POL-EXC-001 (draft — not approved)
