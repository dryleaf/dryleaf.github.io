const isProd = process.env.NODE_ENV === 'production'

console.log('Environment:', isProd);

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://dcdpavif86wt9.cloudfront.net' : '',
}