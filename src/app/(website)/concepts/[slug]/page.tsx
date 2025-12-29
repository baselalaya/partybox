import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllConcepts, getConceptBySlug } from '@/lib/payload';
import Section from '@/components/ui/Section';
import Container from '@/components/layout/Container';
import { RichText } from '@payloadcms/richtext-lexical/react';

// 1. Generate Static Params for all concepts (SSG)
export async function generateStaticParams() {
    const concepts = await getAllConcepts();
    return concepts.map((concept) => ({
        slug: concept.slug,
    }));
}

export const dynamicParams = true; // Allow generating new pages on demand

// 2. Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const concept = await getConceptBySlug(slug);

    if (!concept) {
        return {
            title: 'Concept Not Found',
        };
    }

    return {
        title: concept.seo.title,
        description: concept.seo.metaDescription,
        openGraph: {
            title: concept.seo.title,
            description: concept.seo.metaDescription,
            images: concept.seo.ogImage ? [{ url: concept.seo.ogImage }] : undefined
        }
    };
}

// 3. Page Component
export default async function ConceptPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const concept = await getConceptBySlug(slug);

    if (!concept) {
        notFound();
    }

    return (
        <Section className="py-20 bg-white">
            <Container className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">{concept.title}</h1>

                <div className="prose prose-lg prose-slate max-w-none">
                    {/* Render Lexical Rich Text */}
                    {concept.content && (
                        <RichText data={concept.content} />
                    )}
                </div>
            </Container>
        </Section>
    );
}
