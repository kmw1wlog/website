import Link from 'next/link'
import { site } from '@/content/config/site'

export default function HomePage() {
  return (
    <section className="space-y-16">
      <header className="text-center space-y-4 py-20">
        <h1 className="text-4xl font-bold">결과로 말하는 컨설팅</h1>
        <p className="text-lg text-gray-400">문제의 핵심만 자르고, 실행 가능한 해법만 제시합니다.</p>
        <Link href={site.ctaLink} className="inline-block mt-4 rounded bg-primary px-4 py-2 text-white">30분 진단 받기</Link>
      </header>
      <div id="contact" className="border rounded p-8 space-y-4">
        <h2 className="text-2xl font-bold">문의</h2>
        <p>이메일: <a href={`mailto:${site.email}`} className="text-primary">{site.email}</a></p>
      </div>
    </section>
  )
}
