import SiteHeader from '/src/components/SiteHeader'
import SiteFooter from '/src/components/SiteFooter'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import { client } from '@/sanity/lib/client'
import { blogPostBySlugQuery, allBlogPostsQuery } from '@/sanity/queries/blogQuery'
import { sanityComponents } from '@/components/sanity/SanityComponents'
import { notFound } from 'next/navigation'

export const revalidate = 3600

export async function generateStaticParams() {
  try {
    const posts = (await client.fetch(allBlogPostsQuery)) || []
    return posts.filter((post) => post.slug).map((post) => ({ slug: post.slug }))
  } catch (error) {
    console.error('Error generating blog params:', error)
    return []
  }
}

export async function generateMetadata({ params }) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug }).catch(() => null)
  if (!post) {
    return { title: 'Post Not Found' }
  }
  return {
    title: post.title,
    description: post.excerpt || `News from The Ladder: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
    },
  }
}

export default async function BlogPostPage({ params }) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug }).catch(() => null)
  if (!post) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-white">
        <article className="py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-semibold text-[var(--color-primary)] hover:underline mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to news
              </Link>

              <div className="flex items-center gap-3 text-sm text-[var(--color-text-muted)] mb-4">
                <Calendar className="w-4 h-4" />
                {post.publishedAt
                  ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })
                  : 'Recently'}
                {post.category && (
                  <span className="uppercase tracking-wide text-xs font-semibold text-[var(--color-primary)]">
                    {post.category}
                  </span>
                )}
              </div>

              <h1
                className="text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-6"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {post.title}
              </h1>

              {post.author?.name && (
                <p className="text-[var(--color-text-secondary)] mb-8">By {post.author.name}</p>
              )}

              {post.mainImage?.asset?.url && (
                <div className="relative mb-10 overflow-hidden rounded-xl">
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.title}
                    width={1200}
                    height={630}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}

              {post.content ? (
                <div className="text-[var(--color-text-secondary)] leading-relaxed">
                  <PortableText value={post.content} components={sanityComponents} />
                </div>
              ) : (
                post.excerpt && (
                  <p className="text-lg text-[var(--color-text-secondary)]">{post.excerpt}</p>
                )
              )}
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
