import type { Metadata } from 'next';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllPosts } from '@/lib/wordpress';
import { routes } from '@/lib/routes';
import Section from '@/components/ui/Section';
import Hero from '@/components/content/Hero';
import Breadcrumbs from '@/components/content/Breadcrumbs';
import PostCard from '@/components/content/PostCard';
import Pagination from '@/components/content/Pagination';

export const revalidate = 60;

const POSTS_PER_PAGE = 6;

export async function generateMetadata(): Promise<Metadata> {
  const title = "Blog | Photo Booth Tips, Ideas & News";
  const description = "Read the Dubai Booths blog for expert tips, creative ideas for your event, and the latest news on photo booth technology.";
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
      <Hero
        title="From the Blog"
        subtitle="Your source for event planning tips, photo booth ideas, and inspiration."
      />
      <Section>
        <Breadcrumbs items={[{ name: 'Blog', href: routes.blog.list }]} />
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <Pagination baseUrl={routes.blog.list} currentPage={currentPage} totalPages={totalPages} />
      </Section>
    </>
  );
}
