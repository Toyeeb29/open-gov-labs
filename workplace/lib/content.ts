import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { fileKind } from "./fileKind";
import { listDir, readRepoText, repoRoot, walkFiles } from "./repo";

export { fileKind };

export type Lab = {
  id: string;
  title: string;
  domain: string;
  category: string;
  roles: string[];
  company: string;
  requestor?: string;
  priority?: string;
  due?: string;
  simulation_date?: string;
  estimated_time_minutes?: number;
  difficulty?: string;
  tasks: string[];
  inputs: string[];
  outputs: string[];
  constraints: string[];
  human_gates: string[];
  frameworks: { id: string; control_ids?: string[] }[];
  folder: string;
  brief: string;
  workpapers: { name: string; path: string; body: string }[];
};

export type QueueItem = {
  priority: "high" | "medium" | "low";
  ticket: string;
  title: string;
  labId: string;
  domain: string;
};

export const QUEUE: QueueItem[] = [
  { priority: "high", ticket: "POL-EXC-019", title: "Contractor MFA bypass already applied", labId: "GRC-POL-001", domain: "grc" },
  { priority: "high", ticket: "RSK-024", title: "Production customer data already copied off-platform", labId: "GRC-RISK-001", domain: "grc" },
  { priority: "high", ticket: "AUD-011", title: "SOC 2 evidence request — CC6.1", labId: "GRC-COMP-001", domain: "grc" },
  { priority: "medium", ticket: "IA-033", title: "Test CTL-CHG-01 before Dana samples it", labId: "GRC-AUD-001", domain: "grc" },
  { priority: "high", ticket: "PROC-088", title: "DataBridge wants Snowflake production access", labId: "TPRM-VEND-001", domain: "tprm" },
  { priority: "medium", ticket: "MKT-104", title: "PixelNorth marketing pixel intake", labId: "TPRM-INT-001", domain: "tprm" },
  { priority: "medium", ticket: "VND-MON-007", title: "CloudMail SOC expired; Sketchboard still has SSO", labId: "TPRM-MON-001", domain: "tprm" },
  { priority: "medium", ticket: "ENG-GRC-041", title: "Collect Okta vs HR leavers (do not revoke)", labId: "GRCENG-EVD-001", domain: "grc-engineering" },
  { priority: "medium", ticket: "ENG-GRC-042", title: "Rego gate for public/unencrypted S3", labId: "GRCENG-CAC-001", domain: "grc-engineering" },
  { priority: "medium", ticket: "ENG-GRC-043", title: "GitHub monitor vs CTL-CHG-01", labId: "GRCENG-CLD-001", domain: "grc-engineering" },
  { priority: "low", ticket: "ENG-GRC-044", title: "Evidence workflow with human gates", labId: "GRCENG-WF-001", domain: "grc-engineering" },
  { priority: "high", ticket: "INC-014", title: "HireAI reject mail already sent", labId: "AIGOV-INC-001", domain: "ai-governance" },
  { priority: "high", ticket: "PROD-221", title: "HireAI go-live this sprint", labId: "AIGOV-INT-001", domain: "ai-governance" },
  { priority: "high", ticket: "AIGOV-RSK", title: "HireAI risk rating", labId: "AIGOV-RSK-001", domain: "ai-governance" },
  { priority: "medium", ticket: "AIGOV-VND", title: "Lumen Models via HireAI", labId: "AIGOV-VND-001", domain: "ai-governance" },
  { priority: "medium", ticket: "AIGOV-IMP", title: "HireAI impact assessment", labId: "AIGOV-IMP-001", domain: "ai-governance" },
];

function findLabYaml(): string[] {
  const labsRoot = path.join(repoRoot(), "labs");
  const out: string[] = [];
  function walk(dir: string) {
    for (const name of fs.readdirSync(dir)) {
      const full = path.join(dir, name);
      if (fs.statSync(full).isDirectory()) walk(full);
      else if (name === "lab.yml") out.push(full);
    }
  }
  walk(labsRoot);
  return out;
}

export function listLabs(): Lab[] {
  return findLabYaml()
    .map((abs) => loadLabFromAbs(abs))
    .sort((a, b) => a.id.localeCompare(b.id));
}

export function getLab(id: string): Lab | null {
  return listLabs().find((l) => l.id === id) ?? null;
}

function loadLabFromAbs(abs: string): Lab {
  const raw = yaml.load(fs.readFileSync(abs, "utf8")) as Record<string, unknown>;
  const folder = path.relative(repoRoot(), path.dirname(abs)).replace(/\\/g, "/");
  const briefPath = path.join(path.dirname(abs), "brief.md");
  const wpDir = path.join(path.dirname(abs), "workpapers");
  const workpapers = fs.existsSync(wpDir)
    ? fs
        .readdirSync(wpDir)
        .filter((n) => n.endsWith(".md"))
        .sort()
        .map((name) => ({
          name,
          path: `${folder}/workpapers/${name}`,
          body: fs.readFileSync(path.join(wpDir, name), "utf8"),
        }))
    : [];
  return {
    id: String(raw.id),
    title: String(raw.title),
    domain: String(raw.domain),
    category: String(raw.category),
    roles: (raw.roles as string[]) ?? [],
    company: String(raw.company ?? "acme-cloud"),
    requestor: raw.requestor ? String(raw.requestor) : undefined,
    priority: raw.priority ? String(raw.priority) : undefined,
    due: raw.due ? String(raw.due) : undefined,
    simulation_date: raw.simulation_date ? String(raw.simulation_date) : undefined,
    estimated_time_minutes: Number(raw.estimated_time_minutes ?? 60),
    difficulty: raw.difficulty ? String(raw.difficulty) : undefined,
    tasks: (raw.tasks as string[]) ?? [],
    inputs: (raw.inputs as string[]) ?? [],
    outputs: (raw.outputs as string[]) ?? [],
    constraints: (raw.constraints as string[]) ?? [],
    human_gates: (raw.human_gates as string[]) ?? [],
    frameworks: (raw.frameworks as Lab["frameworks"]) ?? [],
    folder,
    brief: fs.existsSync(briefPath) ? fs.readFileSync(briefPath, "utf8") : "",
    workpapers,
  };
}

export function companyFiles(company = "acme-cloud"): string[] {
  return intranetFiles(company).filter((p) => p.startsWith(`companies/${company}/`));
}

export function intranetFiles(company = "acme-cloud"): string[] {
  const roots = [`companies/${company}`, "datasets", "automation"];
  const out: string[] = [];
  for (const root of roots) {
    try {
      out.push(...walkFiles(root).filter((p) => !p.endsWith("/README.md")));
    } catch {
      // folder missing in this checkout
    }
  }
  return out;
}

export { expandInputs } from "./expandInputs";

export function readFileSafe(rel: string): string {
  return readRepoText(rel);
}

export function starterFiles(lab: Lab): string[] {
  const fromInputs = lab.inputs.filter((p) => p.startsWith("companies/") || p.startsWith("datasets/") || p.startsWith("automation/"));
  if (fromInputs.length) return fromInputs;
  return [`companies/${lab.company}/tickets/work-queue.md`];
}

export { listDir };
