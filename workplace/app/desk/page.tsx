import Link from "next/link";
import { Rail } from "@/components/Rail";
import { QUEUE, listLabs } from "@/lib/content";

const ORDER = ["grc", "tprm", "grc-engineering", "ai-governance"] as const;
const LABELS: Record<string, string> = {
  grc: "GRC — do these first",
  tprm: "TPRM",
  "grc-engineering": "GRC engineering",
  "ai-governance": "AI governance",
};

export default function Desk() {
  const labs = listLabs();
  return (
    <>
      <Rail />
      <main className="page">
        <p className="kicker">Inbox · 16 open</p>
        <h1>Work queue</h1>
        <p className="lede">
          Same tickets as the company file. Click a row to sit the desk: queue, intranet, and
          workpapers together.
        </p>
        {ORDER.map((domain) => (
          <section key={domain}>
            <div className="band">{LABELS[domain]}</div>
            {QUEUE.filter((q) => q.domain === domain).map((q) => {
              const lab = labs.find((l) => l.id === q.labId);
              return (
                <Link className="ticket" key={q.labId} href={`/lab/${q.labId}`}>
                  <span className={`pri ${q.priority}`}>{q.priority}</span>
                  <span className="tid">{q.ticket}</span>
                  <span>{q.title}</span>
                  <span className="note" style={{ margin: 0 }}>
                    {lab?.estimated_time_minutes ?? "—"} min
                  </span>
                </Link>
              );
            })}
          </section>
        ))}
      </main>
    </>
  );
}
