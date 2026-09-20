"use client";

import { useEffect, useMemo, useState } from "react";
import { Markdown } from "@/components/Markdown";
import type { Lab } from "@/lib/content";
import { expandInputs } from "@/lib/expandInputs";
import { fileKind } from "@/lib/fileKind";
import { contentUrl } from "@/lib/publicPath";

type FilePayload = { path: string; kind: string; text: string; error?: string };

export function DeskClient({
  lab,
  files,
  ticket,
}: {
  lab: Lab;
  files: string[];
  ticket: string;
}) {
  const starters = useMemo(() => expandInputs(lab.inputs, files), [lab.inputs, files]);
  const [pane, setPane] = useState<"queue" | "files" | "work">("files");
  const [activePath, setActivePath] = useState(starters[0] ?? files[0] ?? "");
  const [file, setFile] = useState<FilePayload | null>(null);
  const [tab, setTab] = useState<"brief" | "paper" | "review">("brief");
  const [paperIndex, setPaperIndex] = useState(0);
  const [drafts, setDrafts] = useState<Record<string, string>>({});
  const [showKey, setShowKey] = useState(false);
  const [review, setReview] = useState<string>("");

  useEffect(() => {
    const next: Record<string, string> = {};
    for (const wp of lab.workpapers) {
      const key = `ogl:${lab.id}:${wp.name}`;
      next[wp.name] = localStorage.getItem(key) ?? wp.body;
    }
    setDrafts(next);
  }, [lab]);

  useEffect(() => {
    if (!activePath) return;
    let cancelled = false;
    fetch(contentUrl(activePath))
      .then(async (r) => {
        if (!r.ok) throw new Error(`Missing file: ${activePath}`);
        const text = await r.text();
        if (!cancelled) setFile({ path: activePath, kind: fileKind(activePath), text });
      })
      .catch((err: unknown) => {
        const message = err instanceof Error ? err.message : "Not found";
        if (!cancelled) setFile({ path: activePath, kind: "text", text: "", error: message });
      });
    return () => {
      cancelled = true;
    };
  }, [activePath]);

  function save(name: string, value: string) {
    setDrafts((d) => ({ ...d, [name]: value }));
    localStorage.setItem(`ogl:${lab.id}:${name}`, value);
  }

  function download() {
    const wp = lab.workpapers[paperIndex];
    if (!wp) return;
    const blob = new Blob([drafts[wp.name] ?? ""], { type: "text/markdown" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${lab.id}-${wp.name}`;
    a.click();
  }

  async function reveal() {
    const path = `${lab.folder}/expected-outputs.md`;
    try {
      const res = await fetch(contentUrl(path));
      setReview(res.ok ? await res.text() : "Reviewer notes are not in this pack.");
    } catch {
      setReview("Reviewer notes could not be loaded.");
    }
    setShowKey(true);
    setTab("review");
  }

  const current = lab.workpapers[paperIndex];

  return (
    <div>
      <div className="mobile-tabs">
        {(["queue", "files", "work"] as const).map((id) => (
          <button key={id} className={`tab ${pane === id ? "on" : ""}`} onClick={() => setPane(id)}>
            {id}
          </button>
        ))}
      </div>
      <div className="desk">
        <section className={`col ${pane === "queue" ? "show" : ""}`}>
          <div className="col-head">{ticket} · {lab.priority ?? "queued"}</div>
          <div className="col-body">
            <p className="kicker">{lab.domain}</p>
            <h3>{lab.title}</h3>
            <p className="note">
              {lab.requestor ?? "Manager"} · due {lab.due ?? "this week"} · {lab.estimated_time_minutes} min
            </p>
            <p className="kicker">Do</p>
            <ul>
              {lab.tasks.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="kicker">Do not</p>
            <ul>
              {lab.constraints.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <p className="kicker">Human gate</p>
            <ul>
              {lab.human_gates.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`col ${pane === "files" ? "show" : ""}`}>
          <div className="col-head">Acme Cloud intranet</div>
          <div className="col-body" style={{ display: "grid", gridTemplateRows: "auto 1fr", gap: 8, padding: 0 }}>
            <div style={{ overflow: "auto", maxHeight: 180, padding: 8, borderBottom: "1px solid var(--line)" }}>
              {starters.length > 0 && (
                <>
                  <p className="kicker">Start here — then keep looking</p>
                  {starters.map((p) => (
                    <button key={p} className={`file ${activePath === p ? "on" : ""}`} onClick={() => setActivePath(p)}>
                      {p.replace(/^companies\/acme-cloud\//, "")}
                    </button>
                  ))}
                </>
              )}
              <details>
                <summary className="kicker" style={{ cursor: "pointer" }}>
                  All intranet files
                </summary>
                {files.map((p) => (
                  <button key={p} className={`file ${activePath === p ? "on" : ""}`} onClick={() => setActivePath(p)}>
                    {p.replace(/^companies\/acme-cloud\//, "")}
                  </button>
                ))}
              </details>
            </div>
            <div style={{ overflow: "auto", padding: 12 }}>
              <p className="kicker">{activePath}</p>
              {file?.error && <p className="warn">{file.error}</p>}
              {file && !file.error &&
                (file.kind === "markdown" ? (
                  <Markdown key={file.path} source={file.text} />
                ) : (
                  <pre className="code">{file.text}</pre>
                ))}
            </div>
          </div>
        </section>

        <section className={`col ${pane === "work" ? "show" : ""}`}>
          <div className="col-head">Workpapers · simulated</div>
          <div className="col-body">
            <div className="tabs">
              <button className={`tab ${tab === "brief" ? "on" : ""}`} onClick={() => setTab("brief")}>
                Manager brief
              </button>
              <button className={`tab ${tab === "paper" ? "on" : ""}`} onClick={() => setTab("paper")}>
                Write
              </button>
              <button className={`tab ${tab === "review" ? "on" : ""}`} onClick={() => (showKey ? setTab("review") : reveal())}>
                Reviewer notes
              </button>
            </div>
            {tab === "brief" && <Markdown source={lab.brief} />}
            {tab === "paper" && current && (
              <>
                <div className="tabs">
                  {lab.workpapers.map((wp, i) => (
                    <button key={wp.name} className={`tab ${i === paperIndex ? "on" : ""}`} onClick={() => setPaperIndex(i)}>
                      {wp.name.replace(/^\d+-/, "").replace(".md", "")}
                    </button>
                  ))}
                </div>
                <textarea
                  className="paper"
                  value={drafts[current.name] ?? ""}
                  onChange={(e) => save(current.name, e.target.value)}
                />
                <div className="clock-actions">
                  <button className="btn" type="button" onClick={download}>
                    Download this workpaper
                  </button>
                </div>
                <p className="note">Saved in this browser. Label exports Simulated Enterprise Project.</p>
              </>
            )}
            {tab === "review" && (
              <>
                <div className="warn">
                  Reviewer key — not the assignment. Only use this after you have written.
                </div>
                <Markdown source={review} />
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
