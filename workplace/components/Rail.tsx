import Link from "next/link";

export function Rail({ right }: { right?: React.ReactNode }) {
  return (
    <header className="rail">
      <div>
        <Link href="/" className="rail-brand">
          Open Gov Labs
        </Link>
        {" · "}
        <Link href="/desk">Work queue</Link>
        {" · "}
        Mon 21 Sep 2026 · 08:41 · Acme Cloud · Jordan Hale
      </div>
      <div>{right ?? "Simulated enterprise · not employment"}</div>
    </header>
  );
}
