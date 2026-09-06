import { samplePosts } from '$lib/data/site';
import type { RequestHandler } from './$types';

export const prerender = true;

const SITE_URL = 'https://baricode.org';

interface SitemapUrl {
	loc: string;
	lastmod?: string;
	changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
	priority?: number;
}

export const GET: RequestHandler = async () => {
	const today = new Date().toISOString().split('T')[0];

	// Static routes list with priorities and change frequencies
	const staticPages: SitemapUrl[] = [
		{ loc: '/', priority: 1.0, changefreq: 'daily', lastmod: today },
		{ loc: '/artikel', priority: 0.9, changefreq: 'daily', lastmod: today },
		{ loc: '/kursus', priority: 0.9, changefreq: 'weekly', lastmod: today },
		{ loc: '/untuk-pemula', priority: 0.8, changefreq: 'weekly', lastmod: today },
		{ loc: '/tentang', priority: 0.7, changefreq: 'monthly', lastmod: today },
		{ loc: '/faq', priority: 0.7, changefreq: 'monthly', lastmod: today },
		{ loc: '/glosarium', priority: 0.7, changefreq: 'weekly', lastmod: today },
		{ loc: '/testimoni', priority: 0.7, changefreq: 'monthly', lastmod: today },
		{ loc: '/kontak', priority: 0.6, changefreq: 'monthly', lastmod: today },
		{ loc: '/whatsapp', priority: 0.6, changefreq: 'monthly', lastmod: today },
		{ loc: '/cta', priority: 0.9, changefreq: 'weekly', lastmod: today },
		{ loc: '/kebijakan-privasi', priority: 0.3, changefreq: 'yearly', lastmod: today },
		{ loc: '/syarat-dan-ketentuan', priority: 0.3, changefreq: 'yearly', lastmod: today }
	];

	// Article routes generated dynamically from content markdown files
	const articlePages: SitemapUrl[] = samplePosts.map((post) => ({
		loc: `/artikel/${post.slug}`,
		priority: 0.8,
		changefreq: 'monthly',
		lastmod: post.published_at || today
	}));

	const allPages = [...staticPages, ...articlePages];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ''}
    ${page.priority !== undefined ? `<priority>${page.priority.toFixed(1)}</priority>` : ''}
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};
