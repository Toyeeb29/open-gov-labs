export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function contentUrl(rel: string): string {
  const encoded = rel
    .replace(/\\/g, "/")
    .replace(/^\/+/, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/");
  return `${BASE_PATH}/content/${encoded}`;
}
