'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { site } from '@/content/config/site'

export default function Navbar() {
  const pathname = usePathname()
  const links = [
    { href: '/', label: '홈' },
    { href: '/about', label: '소개' },
    { href: '/blog', label: '블로그' },
    { href: '/cases', label: '케이스' },
    { href: '/contact', label: '문의' }
  ]
  return (
    <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold">{site.brandName}</Link>
        <ul className="flex gap-4 text-sm">
          {links.map(link => (
            <li key={link.href}>
              <Link href={link.href} className={pathname === link.href ? 'text-primary' : ''}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
