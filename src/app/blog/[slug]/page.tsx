import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { format } from 'date-fns';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/wordpress';
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
  params: { slug: string };
};

export const revalidate = 60;

export async function generateStaticParams() {
  const { posts } = await getAllPosts(1, 1000);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
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
  const post = await getPostBySlug(params.slug);
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
      <div className="relative aspect-[16/7] w-full">
        <Image 
            src={post.featuredImage.url} 
            alt={post.featuredImage.alt}
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </div>

      <Section className="!pt-0">
        <div className="transform -translate-y-16">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-4xl mx-auto">
                <Breadcrumbs items={[
                    { name: 'Blog', href: routes.blog.list },
                    { name: post.title, href: routes.blog.detail(post.slug) }
                ]} />
                <div className="flex items-center gap-4 mt-4">
                    {post.categories[0] && <Badge variant="secondary">{post.categories[0].name}</Badge>}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold mt-4 font-headline">{post.title}</h1>
                <div className="flex items-center gap-6 text-sm text-slate-500 mt-4">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.publishedAt}>
                            {format(new Date(post.publishedAt), 'MMMM d, yyyy')}
                        </time>
                    </div>
                     <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{readingTime} min read</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-4 gap-12 -mt-8">
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
          <h2 className="text-center text-3xl font-bold font-headline mb-8">Related Posts</h2>
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
