const withNextra = require('nextra')({
  theme: './components/nextra-theme',
  unstable_staticImage: true
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'dryleaf.io', 'dcdpavif86wt9.cloudfront.net'],
    loader: 'akamai',
    path: '',
  }
}

module.exports = withNextra(nextConfig);
