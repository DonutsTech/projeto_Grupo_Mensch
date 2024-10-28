import type { NextConfig } from "next";
import path from "path";


const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/style')],
  },
  images: {
    domains: [],
  },
  
};

export default nextConfig;
