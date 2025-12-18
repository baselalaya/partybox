import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'publishedAt', 'status'],
    },
    access: {
        read: () => true,
    },
    versions: {
        drafts: true,
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                        }
                        return value;
                    },
                ],
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            label: 'Excerpt (SEO Description)',
            required: true,
        },
        {
            name: 'content',
            type: 'textarea',
            label: 'Content (HTML/Lexical JSON)',
            required: true,
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'tags',
            type: 'relationship',
            relationTo: 'tags',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedAt',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'dayAndTime',
                },
            },
        },
        {
            name: 'seo',
            type: 'group',
            label: 'SEO Settings',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Meta Title (Overrides Post Title)',
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                    label: 'Meta Description (Overrides Excerpt)',
                },
                {
                    name: 'canonicalUrl',
                    type: 'text',
                    label: 'Canonical URL',
                },
                {
                    name: 'jsonLd',
                    type: 'json',
                    label: 'Structured Data (JSON-LD)',
                    admin: {
                        description: 'Custom Schema.org data for this post',
                    }
                }
            ]
        }
    ],
}
