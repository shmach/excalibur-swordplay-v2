import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "utfs.io",
			},
			{
				hostname: "zx6c572zd2.ufs.sh",
			},
		],
	},
};

export default nextConfig;
