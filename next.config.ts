import path from "path";
//@ts-expect-error @ts-ignore
import withVideos from "next-videos";
import { NextConfig } from "next";
// import sass from "sass";

/**@type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/styles')],
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    domains: ['prdcuscmscdn01.azureedge.net'],
  },
};

export default withVideos(nextConfig, {
  assetsPrefix: '/assets/videos',
});
