import { getAllEvents, getAllLocations } from '@/lib/wordpress';
import { getAllBooths, getAllPosts } from '@/lib/payload';
import { routes } from '@/lib/routes';

export const revalidate = 3600;

const URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://partybox.ae';

function generateSitemap(pages: string[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
      .map((page) => {
        return `
           <url>
               <loc>${`${URL}${page}`}</loc>
               <lastmod>${new Date().toISOString()}</lastmod>
               <changefreq>monthly</changefreq>
               <priority>0.8</priority>
           </url>
         `;
      })
      .join('')}
   </urlset>
 `;
}

export async function GET() {
  const staticPages = [
    routes.home,
    routes.booths.list,
    routes.events.list,
    routes.locations.list,
    routes.blog.list,
    routes.rates,
    routes.contact,
    routes.privacyPolicy,
    routes.termsOfService,
  ];

  const booths = await getAllBooths();
  const boothPages = booths.map(booth => routes.booths.detail(booth.slug));

  const events = await getAllEvents();
  const eventPages = events.map(event => routes.events.detail(event.slug));

  const locations = await getAllLocations();
  const locationPages = locations.map(location => routes.locations.detail(location.slug));

  const { posts } = await getAllPosts(1, 1000); // get all posts
  const postPages = posts.map(post => routes.blog.detail(post.slug));

  const allPages = [...staticPages, ...boothPages, ...eventPages, ...locationPages, ...postPages];
  const sitemap = generateSitemap(allPages);

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
