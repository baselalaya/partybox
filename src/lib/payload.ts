import { getPayload } from 'payload'
import configPromise from '@payload-config'
import type { Booth, Image, Post } from '@/types'

// Helper to map Payload Media to our Image type
const mapImage = (media: any): Image => {
    if (!media) return { url: '', alt: '' }
    if (typeof media === 'string') return { url: media, alt: '' }

    return {
        url: media.url || '',
        alt: media.alt || media.filename || '',
    }
}

export const getPayloadClient = async () => {
    return await getPayload({ config: configPromise })
}

export const getAllBooths = async (): Promise<Booth[]> => {
    try {
        const payload = await getPayloadClient()

        const { docs } = await payload.find({
            collection: 'booths',
            depth: 2,
            draft: false,
        })

        return docs.map((doc: any) => ({
            id: doc.id as number,
            slug: doc.slug,
            title: doc.title,
            excerpt: doc.excerpt || '',
            content: doc.content || '',
            boothType: doc.boothType,
            thumbnailImage: mapImage(doc.thumbnailImage),
            galleryImages: (doc.galleryImages || []).map((g: any) => mapImage(g.image)),
            startingPrice: doc.startingPrice || 0,
            isFeatured: doc.isFeatured || false,
            features: (doc.features || []).map((f: any) => ({ icon: f.icon || 'Sparkles', text: f.text })),
            faqs: doc.faqs || [],
            seo: {
                title: doc.seo?.title || doc.title,
                metaDescription: doc.seo?.metaDescription || doc.excerpt || '',
            },
        }))
    } catch (error) {
        console.error('Error in getAllBooths:', error)
        return []
    }
}

export const getBoothBySlug = async (slug: string): Promise<Booth | null> => {
    try {
        const payload = await getPayloadClient()

        const { docs } = await payload.find({
            collection: 'booths',
            where: {
                slug: {
                    equals: slug,
                }
            },
            limit: 1,
            depth: 2,
        })

        if (!docs[0]) return null

        const doc: any = docs[0]

        return {
            id: doc.id as number,
            slug: doc.slug,
            title: doc.title,
            excerpt: doc.excerpt || '',
            content: doc.content || '',
            boothType: doc.boothType,
            thumbnailImage: mapImage(doc.thumbnailImage),
            galleryImages: (doc.galleryImages || []).map((g: any) => mapImage(g.image)),
            startingPrice: doc.startingPrice || 0,
            isFeatured: doc.isFeatured || false,
            features: (doc.features || []).map((f: any) => ({ icon: f.icon || 'Sparkles', text: f.text })),
            faqs: doc.faqs || [],
            seo: {
                title: doc.seo?.title || doc.title,
                metaDescription: doc.seo?.metaDescription || doc.excerpt || '',
            },
        }
    } catch (error) {
        console.error('Error in getBoothBySlug:', error)
        return null
    }
}

export const getAllPosts = async (page = 1, limit = 10): Promise<{ posts: Post[], total: number }> => {
    try {
        const payload = await getPayloadClient()

        const { docs, totalDocs } = await payload.find({
            collection: 'posts',
            depth: 2,
            draft: false,
            page,
            limit,
            sort: '-publishedAt',
        })

        const posts = docs.map((doc: any) => ({
            id: doc.id as number,
            slug: doc.slug,
            title: doc.title,
            excerpt: doc.excerpt || '',
            content: doc.content || '',
            featuredImage: mapImage(doc.featuredImage),
            publishedAt: doc.publishedAt,
            categories: (doc.categories || []).map((c: any) => ({ name: c.name, slug: c.slug })),
            tags: (doc.tags || []).map((t: any) => ({ name: t.name, slug: t.slug })),
            seo: {
                title: doc.seo?.title || doc.title,
                metaDescription: doc.seo?.metaDescription || doc.excerpt || '',
            },
        }))

        return { posts, total: totalDocs }
    } catch (error) {
        console.error('Error in getAllPosts:', error)
        return { posts: [], total: 0 }
    }
}

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
    try {
        const payload = await getPayloadClient()

        const { docs } = await payload.find({
            collection: 'posts',
            where: {
                slug: { equals: slug },
            },
            limit: 1,
            depth: 2,
        })

        if (!docs[0]) return null
        const doc: any = docs[0]

        return {
            id: doc.id as number,
            slug: doc.slug,
            title: doc.title,
            excerpt: doc.excerpt || '',
            content: doc.content || '',
            featuredImage: mapImage(doc.featuredImage),
            publishedAt: doc.publishedAt,
            categories: (doc.categories || []).map((c: any) => ({ name: c.name, slug: c.slug })),
            tags: (doc.tags || []).map((t: any) => ({ name: t.name, slug: t.slug })),
            seo: {
                title: doc.seo?.title || doc.title,
                metaDescription: doc.seo?.metaDescription || doc.excerpt || '',
            },
        }
    } catch (error) {
        console.error('Error in getPostBySlug:', error)
        return null
    }
}

export const getRelatedPosts = async (currentPostId: number): Promise<Post[]> => {
    try {
        const payload = await getPayloadClient()

        // Simple fetch of 3 recent posts excluding current
        const { docs } = await payload.find({
            collection: 'posts',
            limit: 3,
            where: {
                id: { not_equals: currentPostId }
            },
            sort: '-publishedAt',
        })

        return docs.map((doc: any) => ({
            id: doc.id as number,
            slug: doc.slug,
            title: doc.title,
            excerpt: doc.excerpt || '',
            content: doc.content || '',
            featuredImage: mapImage(doc.featuredImage),
            publishedAt: doc.publishedAt,
            categories: (doc.categories || []).map((c: any) => ({ name: c.name, slug: c.slug })),
            tags: (doc.tags || []).map((t: any) => ({ name: t.name, slug: t.slug })),
            seo: {
                title: doc.seo?.title || doc.title,
                metaDescription: doc.seo?.metaDescription || doc.excerpt || '',
            },
        }))
    } catch (error) {
        console.error('Error in getRelatedPosts:', error)
        return []
    }
}

export const getGalleryImages = async (limit = 20): Promise<{ src: string, width: number, height: number, alt: string, type: 'image' | 'video' }[]> => {
    try {
        const payload = await getPayloadClient()

        const { docs } = await payload.find({
            collection: 'gallery',
            limit,
            where: {
                featured: { equals: true }
            },
            depth: 2,
        })

        return docs.map((doc: any) => {
            const img = doc.image; // This is a Media object
            return {
                src: img.url || '',
                width: img.width || 800,
                height: img.height || 600,
                alt: doc.alt || doc.title || (typeof img !== 'string' ? img.alt : '') || '',
                type: doc.type || 'image',
            }
        })
    } catch (error) {
        console.error('Error in getGalleryImages:', error)
        return []
    }
}


