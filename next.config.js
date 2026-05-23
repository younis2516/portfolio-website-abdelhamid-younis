/** @type {import('next').NextConfig} */
const nextConfig = {
    serverExternalPackages: [
      '@react-pdf/renderer',
      '@react-pdf/font',
      '@react-pdf/pdfkit',
      '@react-pdf/render',
      'fontkit',
    ],
    images: {
        remotePatterns: [
            {
                hostname: 'images.unsplash.com',
                protocol:'https'
            }
        ]
    },
    experimental: {
        serverActions: {
            bodySizeLimit: '2mb'
        }
    }
}

module.exports = nextConfig
