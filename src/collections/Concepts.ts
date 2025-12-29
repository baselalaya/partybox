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
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.title) {
                            return data.title
                                .toLowerCase()
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
            type: 'richText', // Using Lexical editor by default in Payload 3.0, allows HTML output
            label: 'Page Content',
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
