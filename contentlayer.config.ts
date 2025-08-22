import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypePrettyCode from 'rehype-pretty-code'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    summary: { type: 'string' }
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, '') }
  }
}))

export const Case = defineDocumentType(() => ({
  name: 'Case',
  filePathPattern: `cases/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    summary: { type: 'string' }
  },
  computedFields: {
    slug: { type: 'string', resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx?$/, '') }
  }
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Case],
  mdx: { rehypePlugins: [rehypePrettyCode] }
})
