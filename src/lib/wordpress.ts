import 'server-only';
import { cache } from 'react';
import type { Booth, EventType, Location, Post, Page, Testimonial, FAQ, PricingTier } from '@/types';

// Mock Data
// In a real application, this would fetch from process.env.NEXT_PUBLIC_WP_API_BASE_URL

const mockBooths: Booth[] = [
  {
    id: 1,
    slug: 'ai-photo-booth',
    title: 'AI Photo Booth',
    excerpt: 'Experience the future with our AI-powered photo booth. Generate stunning, artistic photos with custom AI models.',
    content: '<p>Our AI Photo Booth is a game-changer for any event. Guests can take a photo and have it transformed into a work of art by our advanced AI. Choose from styles like Picasso, Van Gogh, or even a custom model trained on your brand\'s aesthetic.</p><p>It\'s not just a photo; it\'s an interactive experience that leaves a lasting impression.</p>',
    boothType: 'AI Photo Booth',
    thumbnailImage: { url: 'https://picsum.photos/seed/101/600/400', alt: 'AI Photo Booth in action' },
    galleryImages: [
      { url: 'https://picsum.photos/seed/101-1/800/600', alt: 'AI generated image' },
      { url: 'https://picsum.photos/seed/101-2/800/600', alt: 'Guests using AI booth' },
    ],
    startingPrice: 2500,
    isFeatured: true,
    features: [
      { icon: 'Sparkles', text: 'Custom AI Models' },
      { icon: 'Share2', text: 'Instant Social Sharing' },
      { icon: 'Printer', text: 'High-Quality Prints' },
      { icon: 'Smile', text: 'On-site Attendant' },
    ],
    faqs: [
      { question: 'What kind of AI styles are available?', answer: 'We have over 20 pre-built styles and can create a custom one for your event.' },
      { question: 'Is internet required?', answer: 'Yes, a stable internet connection is needed for the AI processing.' },
    ],
    seo: { title: 'AI Photo Booth Rental in Dubai | Dubai Booths', metaDescription: 'Rent our cutting-edge AI Photo Booth in Dubai for a unique event experience. Generate artistic photos instantly.' }
  },
  {
    id: 2,
    slug: '360-video-booth',
    title: '360 Video Booth',
    excerpt: 'Capture every angle of the fun with our 360 Video Booth. Perfect for creating dynamic, shareable social media content.',
    content: '<p>Step onto the platform and let our camera spin around you, capturing a stunning 360-degree slow-motion video. Add custom overlays, effects, and music to create a viral-worthy clip in seconds. It\'s the ultimate centerpiece for any high-energy event.</p>',
    boothType: '360 Video Booth',
    thumbnailImage: { url: 'https://picsum.photos/seed/102/600/400', alt: '360 Video Booth with guests' },
    galleryImages: [
      { url: 'https://picsum.photos/seed/102-1/800/600', alt: '360 video example' },
      { url: 'https://picsum.photos/seed/102-2/800/600', alt: 'Setup of the 360 booth' },
    ],
    startingPrice: 3000,
    isFeatured: true,
    features: [
        { icon: 'Video', text: 'Slow-motion 360 Video' },
        { icon: 'Music', text: 'Custom Soundtracks' },
        { icon: 'Layers', text: 'Branded Overlays' },
        { icon: 'Instagram', text: 'Optimized for Socials' },
    ],
    faqs: [
      { question: 'How much space is needed?', answer: 'We recommend a 10x10 feet area for safe operation.' },
    ],
    seo: { title: '360 Video Booth Rental Dubai | Slow Motion Fun', metaDescription: 'Book the best 360 Video Booth in Dubai. Create amazing slow-motion videos for your wedding, corporate event, or party.' }
  },
  {
    id: 3,
    slug: 'magic-mirror-booth',
    title: 'Magic Mirror Booth',
    excerpt: 'An interactive, full-length mirror that takes amazing photos. Touch the screen, sign your name, and get instant prints.',
    content: '<p>The Magic Mirror is a stylish and interactive twist on the classic photo booth. Its full-length design lets guests capture their entire look. The touch screen interface is packed with fun animations, prompts, and even allows guests to sign their photos before printing.</p>',
    boothType: 'Magic Mirror',
    thumbnailImage: { url: 'https://picsum.photos/seed/103/600/400', alt: 'Magic Mirror Photo Booth' },
    galleryImages: [
        { url: 'https://picsum.photos/seed/103-1/800/600', alt: 'Guests signing the mirror' },
        { url: 'https://picsum.photos/seed/103-2/800/600', alt: 'Printed photo from mirror booth' },
    ],
    startingPrice: 2200,
    isFeatured: true,
    features: [
        { icon: 'Touchscreen', text: 'Interactive Touch Screen' },
        { icon: 'PenTool', text: 'On-screen Signing' },
        { icon: 'PictureInPicture', text: 'Animated GIFs' },
        { icon: 'Award', text: 'Elegant & Stylish' },
    ],
     faqs: [
      { question: 'Can we customize the animations?', answer: 'Yes, we can add your event logo or custom messages to the animations.' },
    ],
    seo: { title: 'Magic Mirror Booth Rental in Dubai', metaDescription: 'Rent the interactive Magic Mirror Photo Booth in Dubai. Perfect for elegant events, weddings, and brand activations.' }
  },
    {
    id: 4,
    slug: 'classic-photo-booth',
    title: 'Classic Photo Booth',
    excerpt: 'The timeless appeal of a traditional photo booth. Hop in, close the curtain, and strike a pose for a classic photo strip.',
    content: '<p>Sometimes, you just can\'t beat a classic. Our enclosed photo booth provides an intimate setting for guests to have fun. It delivers high-quality, retro-style photo strips in seconds. It\'s a nostalgic experience that everyone loves.</p>',
    boothType: 'Classic Booth',
    thumbnailImage: { url: 'https://picsum.photos/seed/104/600/400', alt: 'Classic enclosed photo booth' },
    galleryImages: [],
    startingPrice: 1800,
    isFeatured: false,
    features: [
        { icon: 'Camera', text: 'Traditional Photo Strips' },
        { icon: 'Users', text: 'Private/Enclosed Booth' },
        { icon: 'ToyBrick', text: 'Fun Prop Box' },
        { icon: 'Clock', text: 'Unlimited Sessions' },
    ],
    faqs: [],
    seo: { title: 'Classic Photo Booth Rental in Dubai', metaDescription: 'Rent a traditional enclosed photo booth in Dubai. Get classic photo strips instantly. Perfect for any party.' }
  },
];

const mockEvents: EventType[] = [
    { id: 1, slug: 'weddings', title: 'Weddings', excerpt: 'Create unforgettable memories for you and your guests on your special day.', content: '<p>A photo booth is a must-have for any modern wedding. It\'s the perfect ice-breaker and provides guests with a personalized wedding favor to take home.</p>', eventCategory: 'Wedding', featuredBooths: [3, 1], heroImage: { url: 'https://picsum.photos/seed/201/800/600', alt: 'Wedding photo booth fun' }, seo: { title: 'Wedding Photo Booth Rental Dubai', metaDescription: 'Make your wedding unforgettable with a photo booth rental in Dubai. Fun for all ages.' } },
    { id: 2, slug: 'corporate-events', title: 'Corporate Events', excerpt: 'Boost your brand engagement with our fully customizable corporate photo booths.', content: '<p>From product launches to company parties, a photo booth is a powerful marketing tool. We offer full branding options, from custom backdrops and overlays to data capture and social media integration.</p>', eventCategory: 'Corporate', featuredBooths: [1, 2], heroImage: { url: 'https://picsum.photos/seed/202/800/600', alt: 'Corporate event with branded booth' }, seo: { title: 'Corporate Photo Booth Rental Dubai', metaDescription: 'Engage your audience and promote your brand with a custom photo booth for your corporate event in Dubai.' } },
    { id: 3, slug: 'kids-birthdays', title: 'Kids\' Birthdays', excerpt: 'The ultimate party attraction for kids of all ages. Fun, safe, and endlessly entertaining.', content: '<p>Keep the little ones entertained for hours! Our photo booths are a huge hit at birthday parties, with fun props and easy-to-use interfaces perfect for kids.</p>', eventCategory: 'Kids Birthday', featuredBooths: [3, 4], heroImage: { url: 'https://picsum.photos/seed/203/800/600', alt: 'Kids enjoying a photo booth' }, seo: { title: 'Kids Birthday Party Photo Booth Dubai', metaDescription: 'Add endless fun to your child\'s birthday party in Dubai with a safe and entertaining photo booth.' } },
];

const mockLocations: Location[] = [
    { id: 1, slug: 'dubai', name: 'Dubai', description: 'Serving all areas of Dubai, from the Marina to Downtown.', serviceAreas: ['Dubai Marina', 'JBR', 'Downtown Dubai', 'Palm Jumeirah', 'Business Bay'], seo: { title: 'Photo Booth Rental Service in Dubai', metaDescription: 'We provide top-rated photo booth rental services across all of Dubai for any event.' } },
    { id: 2, slug: 'abu-dhabi', name: 'Abu Dhabi', description: 'Bringing the party to the capital. We serve Abu Dhabi city and surrounding areas.', serviceAreas: ['Yas Island', 'Saadiyat Island', 'Al Reem Island', 'Corniche'], seo: { title: 'Photo Booth Rental Service in Abu Dhabi', metaDescription: 'Professional photo booth rentals for weddings, parties, and corporate events in Abu Dhabi.' } },
];

const mockPosts: Post[] = [
    { id: 1, slug: '5-reasons-your-wedding-needs-a-photo-booth', title: '5 Reasons Your Wedding Needs a Photo Booth', excerpt: 'Thinking about a photo booth for your wedding? Here are 5 compelling reasons why it\'s a fantastic idea.', content: '<h2>1. Entertainment for All Ages</h2><p>From your youngest cousins to your great-aunt, everyone loves a photo booth...</p><h2>2. A Perfect Icebreaker</h2><p>It gets guests mingling and laughing...</p><h2>3. Instant Party Favors</h2><p>Guests leave with a personalized memento...</p><h2>4. Create a Unique Guestbook</h2><p>Have guests stick a copy of their photo strip in a book and write a message...</p><h2>5. Captures Fun, Candid Moments</h2><p>While your photographer captures the formal shots, the booth captures the silly, candid moments...</p>', featuredImage: { url: 'https://picsum.photos/seed/401/1200/630', alt: 'Wedding photo strip' }, publishedAt: '2023-10-26T10:00:00Z', categories: [{ name: 'Weddings', slug: 'weddings' }], tags: [{ name: 'Wedding Planning', slug: 'wedding-planning' }], seo: { title: '5 Reasons Your Wedding Needs a Photo Booth', metaDescription: 'Discover why a photo booth is the perfect addition to any wedding celebration.' } },
    { id: 2, slug: 'how-to-use-a-photo-booth-for-brand-activation', title: 'How to Use a Photo Booth for Brand Activation', excerpt: 'A photo booth is more than just fun; it\'s a powerful tool for marketing. Here\'s how to maximize its potential.', content: '<h2>1. Branded Everything</h2><p>Custom backdrops, branded photo overlays, and a custom-wrapped booth...</p><h2>2. Social Media Integration</h2><p>Encourage sharing with a custom hashtag and instant social uploads...</p><h2>3. Data Capture</h2><p>Collect emails or survey responses in a fun, non-intrusive way...</p>', featuredImage: { url: 'https://picsum.photos/seed/402/1200/630', alt: 'Branded corporate event' }, publishedAt: '2023-10-20T10:00:00Z', categories: [{ name: 'Corporate Events', slug: 'corporate-events' }], tags: [{ name: 'Marketing', slug: 'marketing' }, { name: 'Branding', slug: 'branding' }], seo: { title: 'Using a Photo Booth for Brand Activation', metaDescription: 'Learn how to leverage a photo booth for your next brand activation or corporate event.' } },
];

const mockTestimonials: Testimonial[] = [
  { id: 1, name: 'Sarah & Tom', eventType: 'Wedding', quote: 'The 360 booth was the highlight of our wedding! Our guests are still talking about it. The team was so professional.', avatarUrl: 'https://picsum.photos/seed/avatar1/100/100' },
  { id: 2, name: 'Ahmed K.', eventType: 'Corporate Event', quote: 'Dubai Booths provided a seamless experience. The branded AI photos were a massive hit and generated so much buzz on social media for our launch.', avatarUrl: 'https://picsum.photos/seed/avatar2/100/100' },
  { id: 3, name: 'Fatima A.', eventType: '40th Birthday', quote: 'The Magic Mirror was so much fun! It looked so elegant at the venue and the photos were beautiful. Highly recommend!', avatarUrl: 'https://picsum.photos/seed/avatar3/100/100' }
];

const mockFaqs: FAQ[] = [
  { question: 'What is included in a standard rental package?', answer: 'Our standard package includes 3 hours of service, unlimited prints, a friendly on-site attendant, a box of fun props, and a digital gallery of all photos after the event.' },
  { question: 'Do you serve events outside of Dubai and Abu Dhabi?', answer: 'Yes, we do! We serve all Emirates. A travel fee may apply for events in Sharjah, Ajman, RAK, UAQ, and Fujairah. Please contact us for a custom quote.' },
  { question: 'How much space do you need for a booth?', answer: 'It varies by booth. A classic booth needs about 8x8 feet, while the 360 booth requires at least a 10x10 feet clear area for safety.' },
  { question: 'Can the photo prints be customized?', answer: 'Absolutely! We can add your name, event date, logo, or any custom design to the photo strips or single prints.' },
  { question: 'How do I book?', answer: 'You can book by filling out the contact form on our website, sending us a WhatsApp message, or giving us a call. We require a 50% deposit to secure your date.' }
];

const mockPricing: PricingTier[] = [
    {
        boothType: '360 Video Booth',
        packages: [
            { name: 'Standard', price: 'AED 3000', features: ['2 Hours Service', 'Unlimited Videos', 'On-site Attendant', 'Custom Overlay'], isPopular: true },
            { name: 'Premium', price: 'AED 4500', features: ['4 Hours Service', 'All Standard Features', 'Live Sharing Station', 'Custom Music'], isPopular: false },
        ]
    },
    {
        boothType: 'AI & Mirror Booths',
        packages: [
            { name: 'Standard', price: 'AED 2200', features: ['2 Hours Service', 'Unlimited Prints', 'On-site Attendant', 'Standard Backdrop'], isPopular: false },
            { name: 'Premium', price: 'AED 3500', features: ['4 Hours Service', 'All Standard Features', 'Premium Backdrop', 'Guest Book'], isPopular: true },
        ]
    },
];

// In a real app, you'd have a generic fetcher
// const fetchFromWordPress = async <T>(endpoint: string): Promise<T | null> => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_BASE_URL}${endpoint}`);
//     if (!res.ok) {
//       console.error(`Failed to fetch ${endpoint}: ${res.statusText}`);
//       return null;
//     }
//     return res.json();
//   } catch (error) {
//     console.error(`Error in fetchFromWordPress for ${endpoint}:`, error);
//     return null;
//   }
// };

// Mock API Functions
export const getPageBySlug = cache(async (slug: string): Promise<Page | null> => {
    console.log(`Fetching page: ${slug}`);
    // Simulate network delay
    await new Promise(res => setTimeout(res, 50));
    const pageData: Partial<Page> = { id: 1, slug, title: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()), content: `<p>This is the content for the ${slug} page.</p>`, seo: { title: `${slug} Page`, metaDescription: `Description for ${slug}` }};
    if (slug === 'home') {
        pageData.heroTitle = 'Photo Booth Rental in Dubai & Abu Dhabi';
        pageData.heroSubtitle = 'AI, 360 & Mirror Booths for the most memorable events.';
        pageData.heroImage = { url: 'https://picsum.photos/seed/100/1920/1080', alt: 'Fun party with photo booth' };
    }
    return pageData as Page;
});

export const getAllBooths = cache(async (): Promise<Booth[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockBooths;
});

export const getFeaturedBooths = cache(async (): Promise<Booth[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockBooths.filter(b => b.isFeatured);
});

export const getBoothBySlug = cache(async (slug: string): Promise<Booth | null> => {
    await new Promise(res => setTimeout(res, 50));
    return mockBooths.find(b => b.slug === slug) || null;
});

export const getAllEvents = cache(async (): Promise<EventType[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockEvents;
});

export const getEventBySlug = cache(async (slug: string): Promise<EventType | null> => {
    await new Promise(res => setTimeout(res, 50));
    return mockEvents.find(e => e.slug === slug) || null;
});

export const getAllLocations = cache(async (): Promise<Location[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockLocations;
});

export const getLocationBySlug = cache(async (slug: string): Promise<Location | null> => {
    await new Promise(res => setTimeout(res, 50));
    return mockLocations.find(l => l.slug === slug) || null;
});

export const getAllPosts = cache(async (page = 1, limit = 10): Promise<{posts: Post[], total: number}> => {
    await new Promise(res => setTimeout(res, 50));
    const start = (page - 1) * limit;
    const end = start + limit;
    return { posts: mockPosts.slice(start, end), total: mockPosts.length };
});

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
    await new Promise(res => setTimeout(res, 50));
    return mockPosts.find(p => p.slug === slug) || null;
});

export const getRelatedPosts = cache(async (currentPostId: number): Promise<Post[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockPosts.filter(p => p.id !== currentPostId).slice(0, 3);
});


export const getTestimonials = cache(async (): Promise<Testimonial[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockTestimonials;
});

export const getFaqs = cache(async (): Promise<FAQ[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockFaqs;
});

export const getPricing = cache(async (): Promise<PricingTier[]> => {
    await new Promise(res => setTimeout(res, 50));
    return mockPricing;
});
