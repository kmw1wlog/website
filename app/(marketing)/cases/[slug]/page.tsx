import { notFound } from 'next/navigation'
import { allCases } from 'contentlayer/generated'
import { Mdx } from '@/components/Mdx'

interface Props { params: { slug: string } }

export default function CasePage({ params }: Props) {
  const cs = allCases.find(c => c.slug === params.slug)
  if (!cs) return notFound()
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{cs.title}</h1>
      <Mdx code={cs.body.code} />
    </article>
  )
}
