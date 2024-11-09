const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cloud.appwrite.io',
          pathname: '**',
        },
      ],
    },
  };
  
  export default nextConfig;
