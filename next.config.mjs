/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'es',
    localeDetection: false,
  },
};

export default nextConfig;
