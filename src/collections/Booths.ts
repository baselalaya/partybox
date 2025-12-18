import type { CollectionConfig } from 'payload'

export const Booths: CollectionConfig = {
    slug: 'booths',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'boothType', 'isFeatured', 'startingPrice'],
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
        },
        {
            name: 'content',
            type: 'textarea',
            label: 'Content (HTML/String)',
        },
        {
            name: 'boothType',
            type: 'select',
            options: [
                { label: 'Photo Booth', value: 'Photo Booth' },
                { label: 'Video Booth', value: 'Video Booth' },
                { label: 'Engagement Tech', value: 'Engagement Tech' },
            ],
            required: true,
        },
        {
            name: 'thumbnailImage',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'galleryImages',
            type: 'array',
            fields: [
                {
                    name: 'image',
                    type: 'upload',
                    relationTo: 'media',
                },
            ],
        },
        {
            name: 'startingPrice',
            type: 'number',
            min: 0,
        },
        {
            name: 'isFeatured',
            type: 'checkbox',
            defaultValue: false,
        },
        {
            name: 'features',
            type: 'array',
            fields: [
                {
                    name: 'icon',
                    type: 'text',
                    label: 'Icon Name (Lucide)',
                },
                {
                    name: 'text',
                    type: 'text',
                },
            ],
        },
        {
            name: 'faqs',
            type: 'array',
            fields: [
                {
                    name: 'question',
                    type: 'text',
                },
                {
                    name: 'answer',
                    type: 'textarea',
                },
            ],
        },
        {
            name: 'seo',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'metaDescription',
                    type: 'textarea',
                },
            ],
        },
    ],
}
