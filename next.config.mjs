/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*.wikiart.org',
            port: '',
            pathname: '**/images/**',
            search: '',
          },
        ],
      },
};

export default nextConfig;
