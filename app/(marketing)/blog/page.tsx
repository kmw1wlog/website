import Link from 'next/link'
import { allPosts } from 'contentlayer/generated'

export default function BlogPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold">블로그</h1>
      <ul className="space-y-4">
        {allPosts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-primary">{post.title}</Link>
            <p className="text-sm text-gray-400">{post.summary}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
