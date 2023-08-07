/* eslint-disable unicorn/prefer-module */
/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
		serverActions: true,
		appDir: true
	},
	reactStrictMode: true
};

module.exports = nextConfig;
