export function fileKind(rel: string): "markdown" | "yaml" | "json" | "code" | "text" {
  const ext = rel.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "md") return "markdown";
  if (ext === "yml" || ext === "yaml") return "yaml";
  if (ext === "json") return "json";
  if (["py", "rego", "ts", "js"].includes(ext)) return "code";
  return "text";
}
