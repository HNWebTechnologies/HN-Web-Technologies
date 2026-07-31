import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.hnwebtechnologies.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/',
    },
    // Include Host header for canonical domain and sitemap pointing to www
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
