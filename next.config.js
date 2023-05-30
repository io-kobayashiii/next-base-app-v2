/** @type {import('next').NextConfig} */
const withInterceptStdout = require('next-intercept-stdout');
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: false,
  },
  (text) => (text.includes('Duplicate atom key') ? '' : text)
);

module.exports = nextConfig;
