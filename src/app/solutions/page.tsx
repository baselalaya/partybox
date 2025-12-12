import type { Metadata } from 'next';
import Hero from '@/components/content/Hero';
import { SolutionsSection } from '@/components/content/SolutionsSection';
import { routes } from '@/lib/routes';
import { generateSeoMetadata } from '@/lib/seo';
import { getAllBooths } from '@/lib/wordpress';

export async function generateMetadata(): Promise<Metadata> {
  return generateSeoMetadata({
    title: 'Solutions | Party Box',
    description:
      'Explore Party Box photo, video, and engagement booth solutions tailored for UAE brand activations.',
    path: routes.solutions,
  });
}

export default async function SolutionsPage() {
  const booths = await getAllBooths();

  return (
    <>
      <SolutionsSection booths={booths} />
    </>
  );
}
