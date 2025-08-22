import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { Mdx } from '@/components/Mdx'

interface Props { params: { slug: string } }

export default function BlogPostPage({ params }: Props) {
  const post = allPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  return (
    <article className="prose prose-invert max-w-none">
      <h1>{post.title}</h1>
      <Mdx code={post.body.code} />
    </article>
  )
}
