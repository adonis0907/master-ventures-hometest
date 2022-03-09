/** @type {import('next').NextConfig} */
module.exports = {
  experimental: {
    styledComponents: true,
  },
  reactStrictMode: true,  
  async redirects() {
    return [
      {
        source: '/',
        destination: '/awards',
        permanent: true
      }
    ]
  }
}
