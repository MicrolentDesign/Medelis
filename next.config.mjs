/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false;

let repo = "";
if (isGithubActions) {
  const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "Medelis";
  repo = `/${repoName}`;
}

// In production or GitHub export, default basePath to /Medelis
const isProd = process.env.NODE_ENV === "production";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || repo || (isProd ? "/Medelis" : "");

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Emit every route as dir/index.html. On GitHub Pages this makes /products/
  // and /products/[slug]/ resolve (they 404 without it), and it fixes the
  // router's RSC prefetch for the home route, which otherwise requests
  // /Medelis.txt instead of /Medelis/index.txt.
  trailingSlash: true,
  basePath: basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
