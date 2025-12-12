export const routes = {
  home: '/',
  booths: {
    list: '/photo-booths',
    detail: (slug: string) => `/photo-booths/${slug}`,
  },
  events: {
    list: '/events',
    detail: (slug: string) => `/events/${slug}`,
  },
  locations: {
    list: '/locations',
    detail: (slug: string) => `/locations/${slug}`,
  },
  blog: {
    list: '/blog',
    detail: (slug: string) => `/blog/${slug}`,
  },
  solutions: '/solutions',
  rates: '/rates',
  contact: '/contact',
  liveCustomization: '/live-customization',
  gallery: '/gallery',
  about: '/about',
  privacyPolicy: '/privacy-policy',
  termsOfService: '/terms-of-service',
};
