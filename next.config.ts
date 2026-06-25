import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repo = "nbaguide";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? `/${repo}` : "",
  assetPrefix: isGithubPages ? `/${repo}/` : undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.nba.com",
        pathname: "/headshots/**",
      },
    ],
  },
};

export default nextConfig;
