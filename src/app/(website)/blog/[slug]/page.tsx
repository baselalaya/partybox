import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/payload';
import { generateSeoMetadata } from '@/lib/seo';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import PostCard from '@/components/content/PostCard';
import TableOfContents from '@/components/content/TableOfContents';
import JsonLd from '@/components/seo/JsonLd';

type Props = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  const { posts } = await getAllPosts(1, 1000);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {};
  }
  return generateSeoMetadata({
    seo: post.seo,
    path: routes.blog.detail(post.slug),
    image: post.featuredImage.url,
  });
}

function calculateReadingTime(content: string) {
  const wordsPerMinute = 200;
  const text = content.replace(/<[^>]*>/g, ''); // strip html tags
  const wordCount = text.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export default async function PostDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post.id);
  const readingTime = calculateReadingTime(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": [post.featuredImage.url],
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "author": [{
      "@type": "Organization",
      "name": "Party Box",
      "url": process.env.NEXT_PUBLIC_SITE_URL
    }]
  };


  return (
    <>
      <JsonLd data={articleSchema} />
      <div className="relative w-full overflow-hidden bg-slate-950">
        <Image
          src={post.featuredImage.url}
          alt={post.featuredImage.alt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        <div className="relative mx-auto flex max-w-4xl flex-col gap-4 px-6 pb-16 pt-20 text-white md:pb-20 md:pt-24">
          <Breadcrumbs
            items={[
              { name: 'Blog', href: routes.blog.list },
              { name: post.title, href: routes.blog.detail(post.slug) },
            ]}
            className="text-slate-200 [&_a]:text-slate-200 [&_svg]:text-slate-200"
          />
          <div className="mt-2 flex flex-wrap items-center gap-3 text-[11px] text-white/90">
            {post.categories[0] && (
              <Badge className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                {post.categories[0].name}
              </Badge>
            )}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-white" />
                <time className="text-white" dateTime={post.publishedAt}>
                  {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                </time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-white" />
                <span className="text-white">{readingTime} min read</span>
              </span>
            </div>
          </div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm md:text-base text-slate-100/85">
            {post.excerpt}
          </p>
        </div>
      </div>

      <Section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-4">
          <aside className="hidden lg:block">
            <TableOfContents contentSelector="#article-content" />
          </aside>
          <article id="article-content" className="lg:col-span-3 prose max-w-none text-slate-700 prose-h2:font-headline prose-h2:text-slate-900 prose-h3:font-headline prose-h3:text-slate-900 prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-slate-900">
            <p className="lead">{post.excerpt}</p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
        </div>
      </Section>

      {relatedPosts.length > 0 && (
        <Section id="related-posts" className="bg-slate-50">
          <h2 className="mb-8 text-center text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Related Posts
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <PostCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
