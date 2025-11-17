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
      <Section className="bg-gradient-to-b from-white via-[#FFF6EC] to-white">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
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
          </div>
          <div className="mt-2 flex items-center gap-3 rounded-[999px] border border-slate-200 bg-white/80 px-4 py-3 text-xs md:text-sm text-slate-700 shadow-sm">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#FF9F6E]/10 text-[11px] font-semibold text-[#FF9F6E]">
              {total}
            </span>
            <span className="font-medium">
              {total === 1 ? 'Article' : 'Articles'} for modern brand experiences
            </span>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="mt-10">
          <Pagination baseUrl={routes.blog.list} currentPage={currentPage} totalPages={totalPages} />
        </div>
      </Section>
    </>
  );
}
