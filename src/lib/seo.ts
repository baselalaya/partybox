import type { Metadata } from 'next';
import type { SEO } from '@/types';

const SITE_NAME = 'Dubai Booths';
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://dubaibooths.com';
const SITE_DESCRIPTION = 'Premium photo booth rentals in Dubai & Abu Dhabi. We offer AI, 360, and Mirror booths for weddings, corporate events, and parties. Get an instant quote!';
const OG_IMAGE_DEFAULT = `${SITE_URL}/og-default.jpg`;

type GenerateMetadataProps = {
  seo?: SEO;
  title?: string;
  description?: string;
  path: string;
  image?: string;
};

export function generateSeoMetadata({
  seo,
  title,
  description,
  path,
  image,
}: GenerateMetadataProps): Metadata {
  const pageTitle = seo?.title || title || SITE_NAME;
  const pageDescription = seo?.metaDescription || description || SITE_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = seo?.ogImage || image || OG_IMAGE_DEFAULT;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImage],
    },
    // More metadata can be added here
  };
}
