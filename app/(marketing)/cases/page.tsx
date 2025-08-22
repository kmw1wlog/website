import Link from 'next/link'
import { allCases } from 'contentlayer/generated'

export default function CasesPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">케이스 스터디</h1>
      <ul className="space-y-4">
        {allCases.map(cs => (
          <li key={cs.slug}>
            <Link href={`/cases/${cs.slug}`} className="text-primary">{cs.title}</Link>
            <p className="text-sm text-gray-400">{cs.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
