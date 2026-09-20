export function expandInputs(inputs: string[], files: string[]): string[] {
  const out: string[] = [];
  for (const raw of inputs) {
    const p = raw.replace(/\/$/, "");
    const kids = files.filter((f) => f === p || f.startsWith(`${p}/`));
    if (kids.length) out.push(...kids);
    else if (p.startsWith("companies/") || p.startsWith("datasets/") || p.startsWith("automation/")) {
      out.push(p);
    }
  }
  return [...new Set(out)];
}
