import 'server-only';
import { cache } from 'react';
import type { Booth, EventType, Location, Post, Page, Testimonial, FAQ, PricingTier } from '@/types';

// Mock Data
// In a real application, this would fetch from process.env.NEXT_PUBLIC_WP_API_BASE_URL

const mockBooths: Booth[] = [
  {
    id: 1,
    slug: 'partybox-retro-photo-booth',
    title: 'Partybox Retro Photo Booth',
    excerpt:
      'Partybox Retro brings timeless photo strips into the modern era with integrated AI, professional lighting, and sleek branding options.',
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
<li>Lifestyle &amp; fashion campaigns</li>
<li>Mall &amp; retail engagements</li>
<li>Heritage or nostalgia-driven brand events</li>
</ul>
<h3>Key Technology</h3>
<p>Built-in AI enhancement that blends retro style with modern precision.</p>
<p>Built for strong brand engagement within a practical budget.</p>`,
    boothType: 'Photo Booth',
    thumbnailImage: {
      url: '/images/retro.jpg',
      alt: 'Partybox Retro Photo Booth',
    },
    galleryImages: [],
    startingPrice: 0,
    isFeatured: true,
    features: [
      { icon: 'Sparkles', text: 'Timeless' },
      { icon: 'Share2', text: 'Shareable' },
      { icon: 'PanelsTopLeft', text: 'Brand-Ready' },
    ],
    faqs: [],
    seo: {
      title: 'Partybox Retro Photo Booth | Partybox',
      metaDescription:
        'Partybox Retro delivers timeless photo strips with modern AI enhancement, professional lighting, and customizable branding for events.',
    },
  },
  {
    id: 3,
    slug: 'partybox-classic-photo-booth',
    title: 'Partybox Classic Photo Booth',
    excerpt:
      'Partybox Classic is the signature photo booth — sleek, versatile, and built for brand impact at high-traffic events.',
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
<li>Corporate events &amp; conferences</li>
<li>Product launches &amp; marketing activations</li>
<li>Weddings &amp; private celebrations</li>
<li>Retail &amp; mall campaigns</li>
</ul>
<h3>Key Technology</h3>
<p>AI-supported features and lighting adjustments ensure consistent, studio-grade results.</p>
<p>Built for strong brand engagement within a practical budget.</p>`,
    boothType: 'Photo Booth',
    thumbnailImage: {
      url: '/images/original.jpg',
      alt: 'Partybox Classic Photo Booth',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: true,
    features: [
      { icon: 'Sparkles', text: 'Sleek' },
      { icon: 'ShieldCheck', text: 'Reliable' },
      { icon: 'PanelsTopLeft', text: 'Versatile' },
    ],
    faqs: [],
    seo: {
      title: 'Partybox Classic Photo Booth | Partybox',
      metaDescription:
        'Partybox Classic is a sleek, versatile, AI-enhanced photo booth built for high-traffic events and strong brand impact.',
    },
  },
  {
    id: 4,
    slug: 'partybox-360-video-booth',
    title: 'Partybox 360 Video Booth',
    excerpt:
      'Partybox 360 captures cinematic spins with AI-powered video effects, smooth rotation, and fully customizable branding.',
    content: `<p>Partybox 360 captures cinematic spins that put your brand in motion. With AI-powered video effects, smooth rotation, and fully customizable branding, it transforms every moment into dynamic, share-ready content.</p>
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
<li>Influencer &amp; lifestyle events</li>
<li>Product showcases</li>
<li>Entertainment &amp; nightlife venues</li>
</ul>
<h3>Customization Options</h3>
<p>Full software and hardware customization available — from branded overlays to event-specific effects and interactive workflows.</p>`,
    boothType: 'Video Booth',
    thumbnailImage: {
      url: '/images/rotating.jpg',
      alt: 'Partybox 360 Video Booth',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: true,
    features: [
      { icon: 'Clapperboard', text: 'Cinematic' },
      { icon: 'Sparkles', text: 'Viral-Ready' },
      { icon: 'RotateCcw', text: 'Immersive' },
    ],
    faqs: [],
    seo: {
      title: 'Partybox 360 Video Booth | Partybox',
      metaDescription:
        'Partybox 360 is a cinematic 360° video booth with AI-powered effects, HD capture, and full branding customization.',
    },
  },
  {
    id: 5,
    slug: 'partybox-mirror-photo-booth',
    title: 'Partybox Mirror Photo Booth',
    excerpt:
      'Partybox Mirror combines sleek design with interactive technology to deliver a glamorous, high-engagement photo experience.',
    content: `<p>Partybox Mirror combines sleek design with interactive technology to deliver a glamorous, high-engagement photo experience. With AI integration, touch-interactive animations, and full branding options, it’s built to impress and designed to perform.</p>
<h3>Key Features</h3>
<ul>
<li>Full-length interactive mirror display</li>
<li>AI-supported beauty enhancement &amp; lighting</li>
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
<li>Fashion &amp; beauty events</li>
<li>Product launches</li>
<li>Corporate brand activations</li>
<li>Weddings &amp; luxury gatherings</li>
</ul>
<h3>Customization Options</h3>
<p>Interactive animations and photo flows fully customizable to match your event theme and brand identity.</p>`,
    boothType: 'Photo Booth',
    thumbnailImage: {
      url: '/images/mirror.jpg',
      alt: 'Partybox Mirror Photo Booth',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: true,
    features: [
      { icon: 'Sparkles', text: 'Interactive' },
      { icon: 'Star', text: 'Glam' },
      { icon: 'Frames', text: 'Stylish' },
    ],
    faqs: [],
    seo: {
      title: 'Partybox Mirror Photo Booth | Partybox',
      metaDescription:
        'Partybox Mirror is a glamorous, interactive mirror photo booth with AI enhancement, touch animations, and full branding options.',
    },
  },
  {
    id: 6,
    slug: 'sketch-arm',
    title: 'Sketch Arm',
    excerpt:
      'Sketch Arm redefines creativity with AI-powered artistry, transforming guests into digital sketches in real time.',
    content: `<p>Sketch Arm redefines creativity with AI-powered artistry. Guests are transformed into digital sketches in real time, combining innovation, engagement, and personalized art — perfect for events seeking something original and visually striking.</p>
<h3>Key Features</h3>
<ul>
<li>AI-supported sketch generation in seconds</li>
<li>Robotic arm draws live on paper or screen</li>
<li>Fully brandable digital templates</li>
<li>Share-ready digital copies and physical takeaways</li>
</ul>
<h3>Technical Specifications</h3>
<ul>
<li>Dimensions: H60cm × W60cm × D60cm (tabletop or freestanding)</li>
<li>Power: 13 Amp, 220V AC</li>
<li>Capacity: 40–60 guests per hour</li>
<li>Technology: AI image-to-sketch processing with robotic rendering</li>
<li>Support: 24/7 online / On-site assistance</li>
<li>Setup: 1 hour (power ready)</li>
</ul>
<h3>Use Cases</h3>
<ul>
<li>Art-driven brand activations</li>
<li>Corporate events &amp; exhibitions</li>
<li>Retail or mall engagements</li>
<li>Premium gifting experiences</li>
</ul>
<h3>Customization Options</h3>
<p>Custom sketch styles, branded paper, and personalized templates available to match your event identity.</p>`,
    boothType: 'Engagement Tech',
    thumbnailImage: {
      url: '/images/sketch.jpg',
      alt: 'Sketch Arm engagement experience',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: false,
    features: [
      { icon: 'Cpu', text: 'AI-Powered' },
      { icon: 'PenTool', text: 'Creative' },
      { icon: 'Share2', text: 'Shareable' },
    ],
    faqs: [],
    seo: {
      title: 'Sketch Arm Engagement Experience | Partybox',
      metaDescription:
        'Sketch Arm uses AI-powered sketching and a robotic arm to create personalized art live at events, perfect for creative brand activations.',
    },
  },
  {
    id: 7,
    slug: 'scribble-booth',
    title: 'Scribble Booth',
    excerpt:
      'The Scribble Booth transforms creativity into branded engagement with live-captured drawings and AI-supported video output.',
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
<li>Mall &amp; retail experiences</li>
<li>Art-inspired campaigns</li>
<li>Experiential marketing events</li>
</ul>
<h3>Customization Options</h3>
<p>Software and hardware customization available. Branding, animation flows, and integrations tailored to your event.</p>`,
    boothType: 'Video Booth',
    thumbnailImage: {
      url: '/images/scribble.jpg',
      alt: 'Scribble Booth drawing experience',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: false,
    features: [
      { icon: 'PenTool', text: 'Interactive' },
      { icon: 'Sparkles', text: 'Artistic' },
      { icon: 'Share2', text: 'Social-Ready' },
    ],
    faqs: [],
    seo: {
      title: 'Scribble Booth | Partybox',
      metaDescription:
        'Scribble Booth lets guests draw and write on a glass screen while AI-powered video capture turns their creativity into branded content.',
    },
  },
  {
    id: 8,
    slug: 'catch-the-baton',
    title: 'Catch The Baton',
    excerpt:
      'Catch The Baton combines gaming and engagement with an interactive reflex challenge and integrated data capture.',
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
<li>Gaming events &amp; tournaments</li>
<li>Youth activations</li>
<li>Interactive marketing campaigns</li>
<li>Entertainment &amp; brand venues</li>
</ul>
<h3>Customization Options</h3>
<p>Software and hardware customization available. Branding, game logic, data flows, and integrations tailored to your event.</p>`,
    boothType: 'Engagement Tech',
    thumbnailImage: {
      url: '/images/catch.jpg',
      alt: 'Catch The Baton interactive game',
    },
    galleryImages: [],
    startingPrice: 2000,
    isFeatured: false,
    features: [
      { icon: 'Zap', text: 'Fast-Paced' },
      { icon: 'Megaphone', text: 'Attention-Grabbing' },
      { icon: 'Gamepad2', text: 'Engagement-Driven' },
    ],
    faqs: [],
    seo: {
      title: 'Catch The Baton | Partybox',
      metaDescription:
        'Catch The Baton is an interactive reflex game with touchscreen gameplay, AI-supported scoring, and integrated data capture for events.',
    },
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
  { id: 2, name: 'Ahmed K.', eventType: 'Corporate Event', quote: 'Party Box provided a seamless experience. The branded AI photos were a massive hit and generated so much buzz on social media for our launch.', avatarUrl: 'https://picsum.photos/seed/avatar2/100/100' },
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

const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_BASE_URL;

// Generic WordPress fetcher with graceful fallback
const fetchFromWordPress = async <T>(endpoint: string): Promise<T | null> => {
  if (!WP_API_BASE) {
    return null;
  }

  try {
    const res = await fetch(`${WP_API_BASE}${endpoint}`, {
      // Allow Next to cache / revalidate if desired
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error(`Failed to fetch ${endpoint}: ${res.status} ${res.statusText}`);
      return null;
    }

    return (await res.json()) as T;
  } catch (error) {
    console.error(`Error in fetchFromWordPress for ${endpoint}:`, error);
    return null;
  }
};

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
  // For now, always use local mock data for stable content and styling.
  // If a real WP API is wired up later, map its shape into `Booth` and
  // replace this implementation.
  await new Promise((res) => setTimeout(res, 50));
  return mockBooths;
});

export const getFeaturedBooths = cache(async (): Promise<Booth[]> => {
  const allBooths = await getAllBooths();
  return allBooths.filter((b) => b.isFeatured);
});

export const getBoothBySlug = cache(async (slug: string): Promise<Booth | null> => {
  await new Promise((res) => setTimeout(res, 50));
  return mockBooths.find((b) => b.slug === slug) || null;
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
