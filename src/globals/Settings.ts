import { GlobalConfig } from 'payload'

export const Settings: GlobalConfig = {
    slug: 'settings',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'gtmId',
            type: 'text',
            label: 'Google Tag Manager ID',
            admin: {
                description: 'Format: GTM-XXXXXXX',
            },
        },
    ],
}
