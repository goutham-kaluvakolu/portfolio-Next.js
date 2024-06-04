/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: () => {
    try {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-store',
            },
          ],
        },
      ];
    } catch (error) {
      console.error('Error generating headers:', error);
      return [];
    }
  },
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'avatars.githubusercontent.com',
              port: '',
              pathname: '/u/**',
            }]
    }
};

export default nextConfig;
