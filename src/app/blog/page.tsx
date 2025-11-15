import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PostCard from '@/components/content/PostCard';
import Pagination from '@/components/content/Pagination';

export const revalidate = 60;

const POSTS_PER_PAGE = 6;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Blog | Photo Booth Tips, Ideas & News";
  const description = "Read the Party Box blog for expert tips, creative ideas for your event, and the latest news on photo booth technology.";
  return generateSeoMetadata({ title, description, path: routes.blog.list });
}

type BlogPageProps = {
  searchParams?: {
    page?: string;
  };
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const { posts, total } = await getAllPosts(currentPage, POSTS_PER_PAGE);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <>
      <Section className="bg-white">
        <Breadcrumbs items={[{ name: 'Blog', href: routes.blog.list }]} />
        <div className="mt-6 max-w-2xl">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
            Insights
          </p>
          <h1 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            From the Blog
          </h1>
          <p className="mt-3 text-sm md:text-base text-slate-600">
            Event planning tips, photo booth ideas, and inspiration for unforgettable brand experiences in Dubai and Abu Dhabi.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination baseUrl={routes.blog.list} currentPage={currentPage} totalPages={totalPages} />
      </Section>
    </>
  );
}
