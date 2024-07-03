/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    images: {
        domains: ['github.com']
    }
}

export default nextConfig;
