/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        // Apply security headers to every route
        source: '/(.*)',
        headers: [
          // ── CRITICAL FOR DV SITES ──────────────────────────────────────────
          // Prevents 'gabrielfoundation.org' appearing in the Referer header
          // when a survivor clicks an outbound link (legal aid, hotlines, etc.)
          {
            key: 'Referrer-Policy',
            value: 'no-referrer',
          },
          // Prevents the site being embedded in an iframe (clickjacking)
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // ── STANDARD SECURITY HEADERS ──────────────────────────────────────
          // Prevents MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Enforce HTTPS for 2 years; include subdomains
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          // Disable geolocation, camera, microphone — protect survivor location
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(), camera=(), microphone=(), payment=()',
          },
          // Cross-origin resource policy
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          // Content Security Policy — allow trusted origins only
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next.js inline scripts + Supabase
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              // Inline styles + Google Fonts
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              // Google Fonts files
              "font-src 'self' https://fonts.gstatic.com",
              // Images: self, Supabase storage, and common image CDNs used in siteData
              "img-src 'self' data: blob: https://*.supabase.co https://images.unsplash.com",
              // Supabase API connections
              "connect-src 'self' https://*.supabase.co wss://*.supabase.co",
              // Prevent framing anywhere
              "frame-ancestors 'none'",
              // No plugins (Flash etc.)
              "object-src 'none'",
              // Upgrade any accidental HTTP sub-requests to HTTPS
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
