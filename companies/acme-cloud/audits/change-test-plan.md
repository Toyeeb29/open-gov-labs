# Test plan — CTL-CHG-01 (internal)

Designer: Priya Shah  
Tester: Jordan Hale  
Period: 1 January 2026 – 21 September 2026  
Objective: Determine whether production changes were reviewed and recorded as POL-CHG-001 requires.

## Steps

1. Obtain the production deploy population for the period (GitHub merge-to-main / prod tags).
2. Inspect the control record and policy.
3. Select a sample. If the population is incomplete, say so and still test what you have plus any deploys you discover outside the list.
4. For each sample item: author ≠ reviewer? CI green or emergency ticket? Logging/auth changes acknowledged?
5. Inquire with Noah only after you have looked at files.
6. Conclude operating effectiveness for our internal file. Dana will still do her own test.

## Sample size note

Type I used inquiry only (n=0). For this internal test, plan n=8 if the population is complete. If it is not, do not pretend it is.
