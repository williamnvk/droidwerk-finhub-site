/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações de SEO e Performance
  experimental: {
    optimizeCss: true,
  },
  
  // Compressão
  compress: true,
  
  // Headers de segurança e SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)',
          },
        ],
      },
    ];
  },
  
  // Redirects para SEO
  async redirects() {
    return [
      {
        source: '/servicos',
        destination: '/#solucoes',
        permanent: true,
      },
      {
        source: '/captacao',
        destination: '/servicos/captacao-de-recursos',
        permanent: true,
      },
      {
        source: '/valuation',
        destination: '/servicos/valuation-ma',
        permanent: true,
      },
    ];
  },
  
  // Otimizações de imagem
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 ano
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Configurações de build
  poweredByHeader: false,
  reactStrictMode: true,
  
  // Trailing slash
  trailingSlash: false,
};

export default nextConfig;
