import Link from "next/link";
import { Rail } from "@/components/Rail";

export default function ClockIn() {
  return (
    <>
      <Rail />
      <main className="page">
        <p className="kicker">Security &amp; Compliance · Acme Cloud</p>
        <h1>Priya already assigned you. Clock in.</h1>
        <p className="lede">
          This is a desk, not a course. You are Jordan Hale, GRC Analyst. It is Monday 21 September
          2026. The Type II period is still open. Tickets are already in the queue — some of them
          already happened over the weekend.
        </p>
        <div className="clock-actions">
          <Link className="btn teal" href="/desk">
            Open work queue
          </Link>
          <Link className="btn ghost" href="/lab/GRC-POL-001">
            Open first high ticket
          </Link>
        </div>
        <div className="meta-row">
          <div>
            <span>Role</span>
            GRC Analyst
          </div>
          <div>
            <span>Manager</span>
            Priya Shah
          </div>
          <div>
            <span>Fieldwork</span>
            6 October 2026
          </div>
          <div>
            <span>Rule</span>
            Investigate. Do not invent evidence.
          </div>
        </div>
        <p className="note">
          Complete GRC tickets first, then TPRM, then engineering, then AI governance. Reviewer
          notes stay hidden until you write. Simulated work is not employment experience.
        </p>
      </main>
    </>
  );
}
