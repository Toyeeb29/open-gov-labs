import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const workplace = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const repo = path.resolve(workplace, "..");
const dest = path.join(workplace, "public", "content");
const ROOTS = ["companies", "datasets", "automation", "labs"];

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, acc);
    else acc.push(full);
  }
  return acc;
}

fs.rmSync(dest, { recursive: true, force: true });
fs.mkdirSync(dest, { recursive: true });

const files = [];
for (const root of ROOTS) {
  const abs = path.join(repo, root);
  if (!fs.existsSync(abs)) continue;
  for (const full of walk(abs)) {
    const rel = path.relative(repo, full).replace(/\\/g, "/");
    const out = path.join(dest, ...rel.split("/"));
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.copyFileSync(full, out);
    files.push(rel);
  }
}

fs.writeFileSync(path.join(dest, "index.json"), `${JSON.stringify({ files }, null, 2)}\n`);
console.log(`Packed ${files.length} files into public/content`);
