import { ImageResponse } from 'next/og'
import { site } from '@/content/config/site'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0B0F15',
          color: 'white',
          fontSize: 64
        }}
      >
        {site.brandName}
      </div>
    )
  )
}
