// All types are based on the assumption of a headless WordPress setup with Custom Post Types and Advanced Custom Fields (ACF).

export type SEO = {
  title: string;
  metaDescription: string;
  focusKeyword?: string;
  ogImage?: string;
  // JSON string for structured data
  schema?: string;
};

export type Image = {
  url: string;
  alt: string;
};

export type Booth = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  boothType: 'Photo Booth' | '360 Video Booth' | 'Magic Mirror' | 'Classic Booth' | 'Video Booth' | 'Engagement Tech';
  thumbnailImage: Image;
  galleryImages: Image[];
  startingPrice: number;
  isFeatured: boolean;
  features: { icon: string; text: string }[];
  faqs: { question: string; answer: string }[];
  seo: SEO;
};

export type EventType = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  eventCategory: 'Wedding' | 'Corporate' | 'Kids Birthday' | 'Private Party';
  featuredBooths: number[]; // Array of Booth IDs
  heroImage: Image;
  seo: SEO;
};

export type Location = {
  id: number;
  slug: string;
  name: string;
  description: string;
  serviceAreas: string[];
  seo: SEO;
};

export type Post = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: Image;
  publishedAt: string; // ISO 8601 date string
  categories: { name: string; slug: string }[];
  tags: { name: string; slug: string }[];
  seo: SEO;
};

export type Page = {
  id: number;
  slug: string;
  title: string;
  content: string;
  heroTitle?: string;
  heroSubtitle?: string;
  heroImage?: Image;
  // Assuming flexible content sections from ACF
  sections?: any[];
  seo: SEO;
};

export type Testimonial = {
  id: number;
  name: string;
  eventType: string;
  quote: string;
  avatarUrl: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Package = {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
};

export type PricingTier = {
  boothType: string;
  packages: Package[];
};

export type Concept = {
  id: number;
  slug: string;
  title: string;
  content: any; // Lexical RichText JSON
  seo: SEO;
};

