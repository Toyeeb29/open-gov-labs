import Link from "next/link";
import { Rail } from "@/components/Rail";

export default function NotFound() {
  return (
    <>
      <Rail />
      <main className="page">
        <p className="kicker">404</p>
        <h1>That ticket is not on the queue.</h1>
        <p className="lede">The desk only has the published Acme Cloud labs.</p>
        <div className="clock-actions">
          <Link className="btn teal" href="/desk">
            Back to work queue
          </Link>
        </div>
      </main>
    </>
  );
}
