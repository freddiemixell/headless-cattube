/** @type {import('next').NextConfig} */
const nextConfig = {
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/v2/:path*',
    //             destination: 'http://localhost:8000/api/v2/:path*'
    //         }
    //     ]
    // },
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
            }
        ]
    }
};

export default nextConfig;
