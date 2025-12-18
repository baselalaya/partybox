import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'
import { s3Storage } from '@payloadcms/storage-s3'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Booths } from './collections/Booths'
import { Leads } from './collections/Leads'
import { Posts } from './collections/Posts'
import { Categories } from './collections/Categories'
import { Tags } from './collections/Tags'
import { Gallery } from './collections/Gallery'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

console.log('Payload Config: S3_BUCKET is', (process.env.S3_BUCKET || process.env.S3_BUCKET_NAME) ? 'SET' : 'NOT SET')
console.log('Payload Config: S3 Keys present?', (!!process.env.S3_ACCESS_KEY_ID || !!process.env.AWS_ACCESS_KEY_ID) && (!!process.env.S3_SECRET_ACCESS_KEY || !!process.env.AWS_SECRET_ACCESS_KEY))

const region = process.env.S3_REGION || process.env.AWS_REGION || 'us-east-1'
const bucket = process.env.S3_BUCKET || process.env.S3_BUCKET_NAME || ''

export default buildConfig({
    admin: {
        user: Users.slug,
        meta: {
            titleSuffix: '- Partybox Admin',
            icons: [{ rel: 'icon', url: '/favicon.ico' }],
            openGraph: {
                images: [{ url: '/logo.svg' }],
            },
        },
    },
    collections: [Users, Media, Booths, Leads, Posts, Categories, Tags, Gallery],
    editor: lexicalEditor(),
    secret: process.env.PAYLOAD_SECRET || 'YOUR_SECRET_HERE',
    typescript: {
        outputFile: path.resolve(dirname, 'payload-types.ts'),
    },
    db: postgresAdapter({
        pool: {
            connectionString: process.env.POSTGRES_URL || 'postgres://127.0.0.1:5432/partybox',
        },
    }),
    sharp,
    plugins: [
        s3Storage({
            enabled: !!bucket,
            collections: {
                media: {
                    disableLocalStorage: true
                }
            },
            bucket,
            acl: 'public-read',
            config: {
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY_ID || process.env.AWS_ACCESS_KEY_ID || '',
                    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || process.env.AWS_SECRET_ACCESS_KEY || '',
                },
                region,
                endpoint: process.env.S3_ENDPOINT || `https://s3.${region}.amazonaws.com`,
            },
        }),
    ],
})
