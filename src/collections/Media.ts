import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
    slug: 'media',
    upload: true,
    access: {
        read: () => true,
    },
    hooks: {
        afterRead: [
            ({ doc }) => {
                // Force S3 URL if S3 is configured (even if Payload generated a local URL)
                if (process.env.S3_BUCKET_NAME) {
                    const region = process.env.AWS_REGION || 'eu-central-1'
                    const bucket = process.env.S3_BUCKET_NAME
                    doc.url = `https://s3.${region}.amazonaws.com/${bucket}/${doc.filename}`
                }
                return doc
            }
        ]
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true,
        },
    ],
}
