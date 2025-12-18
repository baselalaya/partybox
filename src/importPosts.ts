import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../.env') })

async function getOrUploadImage(payload: any, imageUrl: string, altText: string) {
    if (!imageUrl) return null;
    try {
        const urlObj = new URL(imageUrl);
        const filename = path.basename(urlObj.pathname);

        const existingMedia = await payload.find({
            collection: 'media',
            where: { filename: { equals: filename } },
            limit: 1
        });

        console.log(`   Downloading: ${filename}`);
        const response = await fetch(imageUrl);
        if (!response.ok) {
            console.error(`Failed to fetch image: ${imageUrl} (${response.status})`);
            return null;
        }

        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        let media;
        if (existingMedia.totalDocs > 0) {
            console.log(`   Media "${filename}" exists. Updating file to force S3 upload...`);
            media = await payload.update({
                collection: 'media',
                id: existingMedia.docs[0].id,
                data: { alt: altText },
                file: {
                    data: buffer,
                    name: filename,
                    mimetype: response.headers.get('content-type') || 'image/jpeg',
                    size: buffer.length,
                }
            });
            console.log(`   Updated Media (ID: ${media.id})`);
        } else {
            media = await payload.create({
                collection: 'media',
                data: { alt: altText },
                file: {
                    data: buffer,
                    name: filename,
                    mimetype: response.headers.get('content-type') || 'image/jpeg',
                    size: buffer.length,
                }
            });
            console.log(`   Created Media (ID: ${media.id})`);
        }

        return media;

    } catch (e) {
        console.error(`Error processing image ${imageUrl}:`, e);
        return null;
    }
}

async function processContentImages(payload: any, html: string, postTitle: string) {
    let newHtml = html;
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    const matches = [...newHtml.matchAll(imgRegex)];
    const urlsToProcess = new Set(matches.map(m => m[1]));

    for (const url of urlsToProcess) {
        if (url.includes('wp-content/uploads') || url.startsWith('http')) {
            if (url.includes('amazonaws.com') || url.includes('partybox-media')) {
            }

            const media = await getOrUploadImage(payload, url, `${postTitle} - Content Image`);

            if (media) {
                const region = process.env.S3_REGION || process.env.AWS_REGION || 'eu-central-1';
                const bucket = process.env.S3_BUCKET_NAME || process.env.S3_BUCKET;

                let finalUrl = media.url;
                if (bucket && (!media.url || media.url.startsWith('/api') || media.url.startsWith('/media'))) {
                    finalUrl = `https://s3.${region}.amazonaws.com/${bucket}/${media.filename}`;
                }

                newHtml = newHtml.split(url).join(finalUrl);
            }
        }
    }
    return newHtml;
}

const importPosts = async () => {
    if (!process.env.S3_BUCKET && !process.env.S3_BUCKET_NAME) {
        console.warn('WARNING: S3 bucket config missing.');
    } else {
        console.log(`Importing Posts to Bucket: ${process.env.S3_BUCKET || process.env.S3_BUCKET_NAME}`);
    }

    const { getPayload } = await import('payload')
    const { default: config } = await import('./payload.config')
    const payload = await getPayload({ config })

    const postsFilePath = path.resolve(dirname, '../posts.json')
    if (!fs.existsSync(postsFilePath)) process.exit(1)

    const postsData = JSON.parse(fs.readFileSync(postsFilePath, 'utf-8'))

    console.log(`Starting migration (Fix S3 Update) for ${postsData.length} posts...`)

    for (const post of postsData) {
        if (post.type !== 'post') continue
        console.log(`Processing "${post.title.rendered}"...`)

        // 1. Featured Image
        let featuredMediaId = null;
        let featuredImageUrl = post.yoast_head_json?.og_image?.[0]?.url;
        if (featuredImageUrl) {
            const media = await getOrUploadImage(payload, featuredImageUrl, post.title.rendered);
            if (media) featuredMediaId = media.id;
        }

        if (!featuredMediaId) {
            console.warn(`   Skipping post "${post.title.rendered}": No featured image.`);
            continue;
        }

        // 2. Content Images
        let content = await processContentImages(payload, post.content.rendered, post.title.rendered);
        let excerpt = post.excerpt.rendered.replace(/<[^>]+>/g, '');
        if (post.yoast_head_json?.description) excerpt = post.yoast_head_json.description;

        const postData = {
            title: post.title.rendered,
            content,
            excerpt,
            publishedAt: new Date(post.date).toISOString(),
            featuredImage: featuredMediaId,
            seo: {
                title: post.yoast_head_json?.title || post.title.rendered,
                metaDescription: excerpt.slice(0, 160),
            }
        };

        const existingPosts = await payload.find({
            collection: 'posts',
            where: { slug: { equals: post.slug } }
        });

        if (existingPosts.totalDocs > 0) {
            await payload.update({
                collection: 'posts',
                id: existingPosts.docs[0].id,
                data: postData
            });
            console.log(`   Updated post: ${post.slug}`);
        } else {
            await payload.create({
                collection: 'posts',
                data: { ...postData, slug: post.slug }
            });
            console.log(`   Created post: ${post.slug}`);
        }
    }
    console.log('Migration Complete.')
    process.exit(0)
}

importPosts()
