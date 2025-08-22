import { withContentlayer } from 'next-contentlayer'

const nextConfig = {
  experimental: {
    appDir: true
  }
}

export default withContentlayer(nextConfig)
