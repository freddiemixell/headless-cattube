/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
                pathname: '/media/images/*'
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
                port: '',
                pathname: '/random/*'
            },
            {
                protocol: 'https',
                hostname: 'storage.googleapis.com',
                port: '',
            }
        ]
    },
    transpilePackages: ['react-lite-yt-embed']
};

export default nextConfig;
