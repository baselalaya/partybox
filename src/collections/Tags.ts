import type { CollectionConfig } from 'payload'

export const Tags: CollectionConfig = {
    slug: 'tags',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (!value && data?.name) {
                            return data.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
                        }
                        return value;
                    },
                ],
            },
            admin: {
                position: 'sidebar',
            },
        },
    ],
}
