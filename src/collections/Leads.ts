import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
    slug: 'leads',
    admin: {
        useAsTitle: 'email',
        defaultColumns: ['name', 'email', 'createdAt'],
    },
    access: {
        create: () => true, // Allow public submission
        read: () => true, // Restrict to admin in real app, strictly
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'email',
            type: 'email',
            required: true,
        },
        {
            name: 'phone',
            type: 'text',
        },
        {
            name: 'message',
            type: 'textarea',
        },
        {
            name: 'boothInterest',
            type: 'text',
        },
        {
            name: 'utm_source',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
        {
            name: 'utm_medium',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
        {
            name: 'utm_campaign',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
        {
            name: 'utm_term',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
        {
            name: 'utm_content',
            type: 'text',
            admin: {
                position: 'sidebar',
                readOnly: true,
            }
        },
    ],
}
