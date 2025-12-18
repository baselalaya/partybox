import configPromise from '@payload-config'
import { getPayload } from 'payload'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const mockBooths = [
    {
        slug: 'partybox-retro-photo-booth',
        title: 'Partybox Retro Photo Booth',
        excerpt: 'Retro strips. Advanced tech.',
        content: `<p>Partybox Retro brings timeless photo strips into the modern era. With integrated AI, professional lighting, and sleek branding options, it captures nostalgia while delivering studio-quality engagement at every event.</p>
<h3>Key Features</h3>
<ul>
<li>Timeless retro design with modern AI integration</li>
<li>Compact, event-ready build</li>
<li>Large touchscreen interface for smooth interaction</li>
<li>Customizable branding panels</li>
<li>Fast, share-ready photo output</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H175cm × W70cm × D70cm</li>
<li>Power Requirements: 13 Amp, 220V AC</li>
<li>Capacity: Up to 100 guests per hour</li>
<li>Technology: AI photo enhancement with vintage-style filters</li>
<li>Support: 24/7 online support / On-site setup available</li>
<li>Setup Time: 1–2 hours with power ready on site</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Retro-themed activations</li>
<li>Lifestyle & fashion campaigns</li>
<li>Mall & retail engagements</li>
<li>Heritage or nostalgia-driven brand events</li>
</ul>
<h3>Key Technology</h3>
<p>Built-in AI enhancement that blends retro style with modern precision.</p>
<p>Built for strong brand engagement within a practical budget.</p>`,
        boothType: 'Photo Booth',
        startingPrice: 0,
        isFeatured: true,
        thumbnailImage: '/images/retro.jpg',
        features: [
            { icon: 'Sparkles', text: 'Timeless' },
            { icon: 'Share2', text: 'Shareable' },
            { icon: 'PanelsTopLeft', text: 'Brand-Ready' },
        ],
    },
    {
        slug: 'partybox-classic-photo-booth',
        title: 'Partybox Classic Photo Booth',
        excerpt: 'Clean setup. Branded output.',
        content: `<p>Partybox Classic is our signature photo booth — sleek, versatile, and built for brand impact. Designed for high-traffic events, it delivers professional-quality photos with clean aesthetics and full branding flexibility.</p>
<h3>Key Features</h3>
<ul>
<li>Modern minimalist design with AI integration</li>
<li>Professional lighting and camera system</li>
<li>Large, intuitive touchscreen interface</li>
<li>Fully brandable exterior panels</li>
<li>Fast, share-ready digital or printed results</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H180cm × W75cm × D70cm</li>
<li>Power Requirements: 13 Amp, 220V AC</li>
<li>Capacity: Up to 120 guests per hour</li>
<li>Technology: AI photo enhancement and automatic background optimization</li>
<li>Support: 24/7 online support / On-site setup available</li>
<li>Setup Time: 1–2 hours with power ready on site</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Corporate events & conferences</li>
<li>Product launches & marketing activations</li>
<li>Weddings & private celebrations</li>
<li>Retail & mall campaigns</li>
</ul>
<h3>Key Technology</h3>
<p>AI-supported features and lighting adjustments ensure consistent, studio-grade results.</p>
<p>Built for strong brand engagement within a practical budget.</p>`,
        boothType: 'Photo Booth',
        startingPrice: 2000,
        isFeatured: true,
        thumbnailImage: '/images/original.jpg',
        features: [
            { icon: 'Sparkles', text: 'Sleek' },
            { icon: 'ShieldCheck', text: 'Reliable' },
            { icon: 'PanelsTopLeft', text: 'Versatile' },
        ],
    },
    {
        slug: 'partybox-360-video-booth',
        title: 'Partybox 360 Video Booth',
        excerpt: '360 spins. Viral content.',
        content: `<p>Partybox 360 captures cinematic spins that put your brand in motion. With AI-powered effects, smooth rotation, and fully customizable branding, it transforms every moment into dynamic, share-ready content.</p>
<h3>Key Features</h3>
<ul>
<li>Automated 360° rotating arm</li>
<li>AI-powered effects included</li>
<li>Cinematic slow-motion effects</li>
<li>Customizable overlays and branding</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H33cm × ⌀80cm</li>
<li>Power: 13 Amp, 220V AC</li>
<li>Capacity: 100+ guests per hour</li>
<li>Technology: 360° rotation platform with HD video capture and AI motion effects</li>
<li>Support: 24/7 online / On-site assistance</li>
<li>Setup: 1 hour (power ready)</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Social media campaigns</li>
<li>Influencer & lifestyle events</li>
<li>Product showcases</li>
<li>Entertainment & nightlife venues</li>
</ul>
<h3>Customization Options</h3>
<p>Full software and hardware customization available — from branded overlays to event-specific effects and interactive workflows.</p>`,
        boothType: 'Video Booth',
        startingPrice: 2000,
        isFeatured: true,
        thumbnailImage: '/images/rotating.jpg',
        features: [
            { icon: 'Clapperboard', text: 'Cinematic' },
            { icon: 'Sparkles', text: 'Viral-Ready' },
            { icon: 'RotateCcw', text: 'Immersive' },
        ],
    },
    {
        slug: 'partybox-mirror-photo-booth',
        title: 'Partybox Mirror Photo Booth',
        excerpt: 'Full mirror. Premium feel.',
        content: `<p>Partybox Mirror combines sleek design with interactive technology to deliver a glamorous, high-engagement photo experience. With AI integration, touch-interactive animations, and full branding options, it’s built to impress and designed to perform.</p>
<h3>Key Features</h3>
<ul>
<li>Full-length interactive mirror display</li>
<li>AI-supported beauty enhancement & lighting</li>
<li>Touch-screen animations and prompts</li>
<li>Customizable frames, overlays, and branding</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H165cm × W80cm × D60cm</li>
<li>Power: 13 Amp, 220V AC</li>
<li>Capacity: Up to 100 guests per hour</li>
<li>Technology: AI photo enhancement with interactive mirror interface</li>
<li>Support: 24/7 online / On-site assistance</li>
<li>Setup: 1–2 hours (power ready)</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Fashion & beauty events</li>
<li>Product launches</li>
<li>Corporate brand activations</li>
<li>Weddings & luxury gatherings</li>
</ul>
<h3>Customization Options</h3>
<p>Interactive animations and photo flows fully customizable to match your event theme and brand identity.</p>`,
        boothType: 'Photo Booth',
        startingPrice: 2000,
        isFeatured: true,
        thumbnailImage: '/images/mirror.jpg',
        features: [
            { icon: 'Sparkles', text: 'Interactive' },
            { icon: 'Star', text: 'Glam' },
            { icon: 'Frames', text: 'Stylish' },
        ],
    },
    {
        slug: 'partybox-mini-photo-booth',
        title: 'Partybox Mini Photo Booth',
        excerpt: 'Compact booth. AI powered.',
        content: `<p>Partybox Mini combines simplicity and performance in one reliable setup. Compact yet powerful, it’s designed for events that demand efficiency, quality, and effortless engagement — without the premium price tag.</p>
<h3>Key Features</h3>
<ul>
<li>Clean, all-in-one booth design</li>
<li>Bright LED lighting for perfect portraits</li>
<li>Fast setup and easy operation</li>
<li>Seamless AI photo processing</li>
<li>Compact footprint ideal for indoor venues</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H170cm × W65cm × D60cm</li>
<li>Power Requirements: 13 Amp, 220V AC</li>
<li>Capacity: Up to 90 guests per hour</li>
<li>Technology: AI-powered image enhancement with instant sharing options</li>
<li>Support: 24/7 online support / On-site setup available</li>
<li>Setup Time: 45–60 minutes with power ready on site</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Corporate gatherings</li>
<li>Retail activations</li>
<li>Weddings & social events</li>
<li>Small-scale promotional campaigns</li>
</ul>
<h3>Key Technology</h3>
<p>AI-supported features for crisp, share-ready photos that elevate every moment.</p>
<p>Partybox Mini proves that high-quality engagement doesn’t have to come at a high cost.</p>`,
        boothType: 'Photo Booth',
        startingPrice: 1700,
        isFeatured: true,
        thumbnailImage: '/images/mini.jpg',
        features: [
            { icon: 'Sparkles', text: 'Compact' },
            { icon: 'Star', text: 'Efficient' },
            { icon: 'Share2', text: 'AI-Ready' },
        ],
    },
    {
        slug: 'scribble-booth',
        title: 'Scribble Booth',
        excerpt: 'Draw on screen. Share instantly.',
        content: `<p>The Scribble Booth transforms creativity into branded engagement. Guests draw, write, or leave messages directly on a glass screen while a hidden camera captures every stroke live. The result: personalized videos that merge creativity, interaction, and your brand story.</p>
<h3>Key Features</h3>
<ul>
<li>Creative drawing interface with stylus or touch</li>
<li>Live capture through concealed camera</li>
<li>AI-supported video output</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H200cm × W100cm × D100cm</li>
<li>Power: 13 Amp, 220V AC</li>
<li>Capacity: 100+ guests per hour</li>
<li>Technology: Interactive drawing and AI-powered video processing</li>
<li>Support: 24/7 online / On-site assistance</li>
<li>Setup: 1–2 hours (power ready)</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Creative brand activations</li>
<li>Mall & retail experiences</li>
<li>Art-inspired campaigns</li>
<li>Experiential marketing events</li>
</ul>
<h3>Customization Options</h3>
<p>Software and hardware customization available. Branding, animation flows, and integrations tailored to your event.</p>`,
        boothType: 'Video Booth',
        startingPrice: 2000,
        isFeatured: false,
        thumbnailImage: '/images/scribble.jpg',
        features: [
            { icon: 'PenTool', text: 'Interactive' },
            { icon: 'Sparkles', text: 'Artistic' },
            { icon: 'Share2', text: 'Social-Ready' },
        ],
    },
    {
        slug: 'catch-the-baton',
        title: 'Catch The Baton',
        excerpt: 'Quick game. Crowd magnet.',
        content: `<p>Catch The Baton combines gaming and engagement in one powerful unit. With an interactive touchscreen and a reflex-testing challenge, guests compete, connect, and generate valuable data — making every interaction both fun and measurable.</p>
<h3>Key Features</h3>
<ul>
<li>Interactive touchscreen with real-time gameplay</li>
<li>Reflex-based challenge for audience engagement</li>
<li>Integrated data capture and leaderboard system</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: Top ⌀72.5cm × Body H192cm × W10cm</li>
<li>Power: 13 Amp, 220V AC</li>
<li>Capacity: 100+ interactions per hour</li>
<li>Technology: Interactive gaming with AI-supported scoring</li>
<li>Support: 24/7 online / On-site assistance</li>
<li>Setup: 1–2 hours (power ready)</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Gaming events & tournaments</li>
<li>Youth activations</li>
<li>Interactive marketing campaigns</li>
<li>Entertainment & brand venues</li>
</ul>
<h3>Customization Options</h3>
<p>Software and hardware customization available. Branding, game logic, data flows, and integrations tailored to your event.</p>`,
        boothType: 'Engagement Tech',
        startingPrice: 2000,
        isFeatured: false,
        thumbnailImage: '/images/catch.jpg',
        features: [
            { icon: 'Zap', text: 'Fast-Paced' },
            { icon: 'Megaphone', text: 'Attention-Grabbing' },
            { icon: 'Gamepad2', text: 'Engagement-Driven' },
        ],
    },
]

const mockGallery = [
    { src: "/gallery/partybox-gallery-1.jpg", alt: "Partybox moment 1" },
    { src: "/gallery/partybox-gallery-2.jpg", alt: "Partybox moment 2" },
    { src: "/gallery/partybox-gallery-3.jpg", alt: "Partybox moment 3" },
    { src: "/gallery/partybox-gallery-4.jpg", alt: "Partybox moment 4" },
    { src: "/gallery/partybox-gallery-5.jpg", alt: "Partybox moment 5" },
    { src: "/gallery/partybox-gallery-6.jpg", alt: "Partybox moment 6" },
    { src: "/gallery/partybox-gallery-7.jpg", alt: "Partybox moment 7" },
    { src: "/gallery/partybox-gallery-8.jpg", alt: "Partybox moment 8" },
    { src: "/gallery/partybox-gallery-9.jpg", alt: "Partybox moment 9" },
    { src: "/gallery/partybox-gallery-10.jpeg", alt: "Partybox moment 10" },
    { src: "/gallery/partybox-gallery-11.jpeg", alt: "Partybox moment 11" },
    { src: "/gallery/partybox-gallery-12.jpg", alt: "Partybox moment 12" },
    { src: "/gallery/partybox-gallery-12.png", alt: "Partybox moment 13" },
    { src: "/gallery/partybox-gallery-13.jpeg", alt: "Partybox moment 14" },
    { src: "/gallery/partybox-gallery-14.jpg", alt: "Partybox moment 15" },
    { src: "/gallery/partybox-gallery-15.jpg", alt: "Partybox moment 16" },
    { src: "/gallery/partybox-gallery-16.jpg", alt: "Partybox moment 17" },
    { src: "/gallery/partybox-gallery-17.jpg", alt: "Partybox moment 18" },
];

const mockPosts = [
    {
        slug: '5-reasons-your-wedding-needs-a-photo-booth',
        title: '5 Reasons Your Wedding Needs a Photo Booth',
        excerpt: 'Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it\'s a fantastic idea.',
        content: '<h2>1. Entertainment for All Ages</h2><p>From your youngest cousins to your great-aunt, everyone loves a photo booth...</p><h2>2. A Perfect Icebreaker</h2><p>It gets guests mingling and laughing...</p><h2>3. Instant Party Favors</h2><p>Guests leave with a personalized memento...</p><h2>4. Create a Unique Guestbook</h2><p>Have guests stick a copy of their photo strip in a book and write a message...</p><h2>5. Captures Fun, Candid Moments</h2><p>While your photographer captures the formal shots, the booth captures the silly, candid moments...</p>',
        featuredImage: null,
        publishedAt: '2023-10-26T10:00:00Z',
        categories: [{ name: 'Weddings', slug: 'weddings' }],
        tags: [{ name: 'Wedding Planning', slug: 'wedding-planning' }]
    },
    {
        slug: 'how-to-use-a-photo-booth-for-brand-activation',
        title: 'How to Use a Photo Booth for Brand Activation',
        excerpt: 'A photo booth is more than just fun; it\'s a powerful tool for marketing. Here\'s how to maximize its potential.',
        content: '<h2>1. Branded Everything</h2><p>Custom backdrops, branded photo overlays, and a custom-wrapped booth...</p><h2>2. Social Media Integration</h2><p>Encourage sharing with a custom hashtag and instant social uploads...</p><h2>3. Data Capture</h2><p>Collect emails or survey responses in a fun, non-intrusive way...</p>',
        featuredImage: null,
        publishedAt: '2023-10-20T10:00:00Z',
        categories: [{ name: 'Corporate Events', slug: 'corporate-events' }],
        tags: [{ name: 'Marketing', slug: 'marketing' }, { name: 'Branding', slug: 'branding' }]
    },
];

const seed = async () => {
    const payload = await getPayload({ config: configPromise })

    // --- Seed Booths ---
    for (const booth of mockBooths) {
        const existing = await payload.find({
            collection: 'booths',
            where: { slug: { equals: booth.slug } }
        })

        let mediaId = null;
        const imagePath = path.join(process.cwd(), 'public', booth.thumbnailImage);

        if (fs.existsSync(imagePath)) {
            // Find or create media
            const existingMedia = await payload.find({
                collection: 'media',
                where: { alt: { equals: booth.title } }
            })

            if (existingMedia.totalDocs > 0) {
                mediaId = existingMedia.docs[0].id
            } else {
                console.log(`  - Uploading image: ${booth.thumbnailImage}`)
                const media = await payload.create({
                    collection: 'media',
                    data: { alt: booth.title },
                    file: {
                        data: fs.readFileSync(imagePath),
                        name: path.basename(imagePath),
                        mimetype: 'image/jpeg',
                        size: fs.statSync(imagePath).size,
                    },
                })
                mediaId = media.id
            }
        }

        const boothData = {
            title: booth.title,
            slug: booth.slug,
            excerpt: booth.excerpt,
            boothType: booth.boothType as any,
            startingPrice: booth.startingPrice,
            isFeatured: booth.isFeatured,
            features: booth.features,
            thumbnailImage: mediaId,
            content: booth.content // Using REAL CONTENT now!
        };

        if (existing.totalDocs > 0) {
            console.log(`  - Updating existing booth: ${booth.title}`)
            await payload.update({
                collection: 'booths',
                id: existing.docs[0].id,
                data: boothData
            })
        } else {
            if (mediaId) {
                console.log(`  - Creating new booth: ${booth.title}`)
                await payload.create({
                    collection: 'booths',
                    data: boothData
                })
            }
        }
    }

    // --- Seed Posts ---
    // (Kept simple to avoid re-seeding if already there, logic is fine)
    for (const post of mockPosts) {
        const existing = await payload.find({
            collection: 'posts',
            where: { slug: { equals: post.slug } }
        })

        if (existing.totalDocs > 0) {
            // Optional: Update posts too if needed, but for now focus on booths
            continue
        }

        // Categories & Tags
        let categoryIds = []
        let tagIds = []
        for (const cat of post.categories) {
            const existingCat = await payload.find({ collection: 'categories', where: { slug: { equals: cat.slug } } })
            if (existingCat.totalDocs > 0) categoryIds.push(existingCat.docs[0].id)
            else categoryIds.push((await payload.create({ collection: 'categories', data: { name: cat.name, slug: cat.slug } })).id)
        }
        for (const tag of post.tags) {
            const existingTag = await payload.find({ collection: 'tags', where: { slug: { equals: tag.slug } } })
            if (existingTag.totalDocs > 0) tagIds.push(existingTag.docs[0].id)
            else tagIds.push((await payload.create({ collection: 'tags', data: { name: tag.name, slug: tag.slug } })).id)
        }

        let mediaId = null;
        const anyMedia = await payload.find({ collection: 'media', limit: 1 });
        if (anyMedia.docs.length > 0) mediaId = anyMedia.docs[0].id

        await payload.create({
            collection: 'posts',
            data: {
                title: post.title,
                slug: post.slug,
                excerpt: post.excerpt,
                content: post.content,
                featuredImage: mediaId as any,
                publishedAt: post.publishedAt,
                categories: categoryIds,
                tags: tagIds,
                seo: { title: post.title, metaDescription: post.excerpt }
            }
        })
    }

    // --- Seed Gallery ---
    const existingGallery = await payload.find({ collection: 'gallery', limit: 0 })
    if (existingGallery.totalDocs === 0) {
        console.log('Seeding Gallery...')
        for (const img of mockGallery) {
            const imagePath = path.join(process.cwd(), 'public', img.src);
            if (!fs.existsSync(imagePath)) continue

            const mimeType = img.src.endsWith('.png') ? 'image/png' : 'image/jpeg';
            const media = await payload.create({
                collection: 'media',
                data: { alt: img.alt },
                file: {
                    data: fs.readFileSync(imagePath),
                    name: path.basename(imagePath),
                    mimetype: mimeType,
                    size: fs.statSync(imagePath).size,
                },
            })

            await payload.create({
                collection: 'gallery',
                data: {
                    title: img.alt,
                    image: media.id,
                    alt: img.alt,
                    category: 'Social',
                    featured: true,
                }
            })
        }
    }

    console.log('Seed completed!')
    process.exit(0)
}

seed()
