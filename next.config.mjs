/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'linked-posts.routemisr.com',
            port: '',
            pathname: '/uploads/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
