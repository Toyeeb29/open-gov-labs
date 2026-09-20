import path from "path";
import type { NextConfig } from "next";

const repo = "open-gov-labs";
const pages = process.env.GITHUB_PAGES === "1";
const basePath = pages ? `/${repo}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: pages ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  serverExternalPackages: ["js-yaml"],
  outputFileTracingRoot: path.join(__dirname),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
