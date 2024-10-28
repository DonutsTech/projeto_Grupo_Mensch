import path from "path";
//@ts-expect-error @ts-ignore
import withVideos from "next-videos";
// import sass from "sass";

/**@type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  sassOptions: {
    includePaths: [path.join(process.cwd(), './src/styles')],
  },
  images: {
    domains: [],
  },

  
};

export default withVideos(nextConfig, {
  assetsPrefix: '/assets/videos',
});