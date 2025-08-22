import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}', 'content/**/*.{mdx,md}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0F15',
        primary: {
          DEFAULT: '#0EA5E9'
        }
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      }
    }
  },
  plugins: []
}
export default config
