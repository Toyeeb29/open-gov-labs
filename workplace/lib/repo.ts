import fs from "fs";
import path from "path";

export function repoRoot(): string {
  return path.resolve(process.cwd(), "..");
}

const ALLOWED = new Set([
  "labs",
  "companies",
  "datasets",
  "automation",
  "scoring",
  "docs",
  "frameworks",
  "job-intelligence",
]);

export function resolveRepoFile(rel: string): string {
  const clean = rel.replace(/\\/g, "/").replace(/^\/+/, "");
  const top = clean.split("/")[0];
  if (!ALLOWED.has(top)) {
    throw new Error("Path not allowed");
  }
  const abs = path.resolve(repoRoot(), clean);
  const root = repoRoot();
  if (!abs.startsWith(root)) {
    throw new Error("Path escapes repository");
  }
  return abs;
}

export function readRepoText(rel: string): string {
  return fs.readFileSync(resolveRepoFile(rel), "utf8");
}

export function listDir(rel: string): { name: string; path: string; dir: boolean }[] {
  const abs = resolveRepoFile(rel);
  return fs
    .readdirSync(abs, { withFileTypes: true })
    .filter((e) => !e.name.startsWith("."))
    .map((e) => ({
      name: e.name,
      path: `${rel.replace(/\\/g, "/")}/${e.name}`,
      dir: e.isDirectory(),
    }))
    .sort((a, b) => Number(b.dir) - Number(a.dir) || a.name.localeCompare(b.name));
}

export function walkFiles(rel: string, acc: string[] = []): string[] {
  for (const entry of listDir(rel)) {
    if (entry.dir) walkFiles(entry.path, acc);
    else acc.push(entry.path);
  }
  return acc;
}
