import type { CollectionConfig } from 'payload'

export const Gallery: CollectionConfig = {
    slug: 'gallery',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'type', 'image', 'category', 'featured'],
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
            name: 'type',
            type: 'select',
            options: [
                { label: 'Image', value: 'image' },
                { label: 'Video', value: 'video' },
            ],
            defaultValue: 'image',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Media File (Image/Video)',
        },
        {
            name: 'alt',
            type: 'text',
            label: 'Alt Text (SEO)',
        },
        {
            name: 'category',
            type: 'select',
            options: [
                { label: 'Corporate', value: 'Corporate' },
                { label: 'Wedding', value: 'Wedding' },
                { label: 'Social', value: 'Social' },
                { label: 'Other', value: 'Other' },
            ],
            defaultValue: 'Other',
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Show in Home/Teaser',
            defaultValue: true,
        },
    ],
}
