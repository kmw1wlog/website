import Link from 'next/link'
import { site } from '@/content/config/site'

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 py-8 text-sm text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} {site.brandName}</div>
        <div className="space-x-4">
          <Link href="/privacy">개인정보처리방침</Link>
          <Link href="/terms">이용약관</Link>
        </div>
      </div>
    </footer>
  )
}
