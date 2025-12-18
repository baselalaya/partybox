import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({ path: path.resolve(dirname, '../.env') })

function getMimeType(filename: string) {
    const ext = path.extname(filename).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
    if (ext === '.png') return 'image/png';
    if (ext === '.gif') return 'image/gif';
    if (ext === '.mp4') return 'video/mp4';
    return 'application/octet-stream';
}

const seedGallery = async () => {
    if (!process.env.S3_BUCKET && !process.env.S3_BUCKET_NAME) {
        console.warn('WARNING: S3 Environment variables missing.');
    } else {
        console.log(`Seeding Gallery to Bucket: ${process.env.S3_BUCKET || process.env.S3_BUCKET_NAME}`);
    }

    const { getPayload } = await import('payload')
    const { default: config } = await import('./payload.config')
    const payload = await getPayload({ config })

    const galleryDir = path.resolve(dirname, '../public/images/gallery');
    const files = fs.readdirSync(galleryDir);
    let createdCount = 0;
    let skippedCount = 0;

    for (const file of files) {
        if (file.startsWith('.')) continue; // Skip .DS_Store

        console.log(`Processing ${file}...`);

        try {
            const existingMedia = await payload.find({
                collection: 'media',
                where: { filename: { equals: file } },
                limit: 1
            });

            let mediaId;
            const filePath = path.join(galleryDir, file);
            const buffer = fs.readFileSync(filePath);
            const mimeType = getMimeType(file);

            if (existingMedia.totalDocs > 0) {
                console.log(`   Media "${file}" exists. Updating file to force S3 upload...`);
                // Update media file (overwrites S3/Local)
                const updatedMedia = await payload.update({
                    collection: 'media',
                    id: existingMedia.docs[0].id,
                    data: { alt: file },
                    file: {
                        data: buffer,
                        name: file,
                        mimetype: mimeType,
                        size: buffer.length
                    }
                });
                mediaId = updatedMedia.id;
                console.log(`   Updated Media (ID: ${mediaId})`);
            } else {
                const media = await payload.create({
                    collection: 'media',
                    data: { alt: file },
                    file: {
                        data: buffer,
                        name: file,
                        mimetype: mimeType,
                        size: buffer.length
                    }
                });
                mediaId = media.id;
                console.log(`   Created Media (ID: ${mediaId})`);
            }

            // Gallery Item
            const rawName = path.parse(file).name;
            const title = rawName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

            const existingGallery = await payload.find({
                collection: 'gallery',
                where: { title: { equals: title } }
            });

            if (existingGallery.totalDocs > 0) {
                await payload.update({
                    collection: 'gallery',
                    id: existingGallery.docs[0].id,
                    data: { image: mediaId }
                });
                console.log(`   Updated Gallery Item "${title}".`);
                skippedCount++;
            } else {
                await payload.create({
                    collection: 'gallery',
                    data: {
                        title: title,
                        type: mimeType.startsWith('video') ? 'video' : 'image',
                        image: mediaId,
                        category: 'Social',
                        featured: true,
                        alt: title
                    }
                });
                console.log(`   Created Gallery Item "${title}".`);
                createdCount++;
            }

        } catch (err) {
            console.error(`   Error processing ${file}:`, err);
        }
    }

    console.log(`Seeding Complete. Created: ${createdCount}, Updated: ${skippedCount}`);
    process.exit(0);
}

seedGallery();
