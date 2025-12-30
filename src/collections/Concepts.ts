import type { CollectionConfig } from 'payload'

export const Concepts: CollectionConfig = {
    slug: 'concepts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    access: {
        read: () => true,
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
                components: {
                    Field: '@/components/cms/SlugField#SlugField',
                },
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        // If a value is provided (custom slug), format it.
                        // If no value is provided, fallback to formatting the title.
                        const source = value || data?.title;

                        if (source) {
                            return source
                                .toLowerCase()
                                .trim()
                                .replace(/ /g, '-')
                                .replace(/[^\w-]+/g, '');
                        }

                        return value;
                    },
                ],
            },
        },
        {
            name: 'content',
            type: 'code',
            admin: {
                language: 'html',
                description: 'Enter raw HTML here. Use standard Tailwind classes. Do NOT include <html>, <head>, or <body> tags. The content is already wrapped in a standard container.',
            },
            label: 'Page Content (HTML)',
            required: true,
        },
        {
            name: 'seo',
            type: 'group',
            label: 'SEO Settings',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                    label: 'Meta Title',
                    minLength: 1,
                    maxLength: 60,
                },
                {
                    name: 'description',
                    type: 'textarea',
                    label: 'Meta Description',
                    minLength: 1,
                    maxLength: 160,
                },
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                    label: 'OG Image',
                }
            ],
        },
    ],
}
