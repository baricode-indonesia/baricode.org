import { marked } from 'marked';

export interface Category {
	name: string;
	slug: string;
	description?: string;
	posts_count?: number;
}

export interface Tag {
	name: string;
	slug: string;
}

export interface Post {
	id: number;
	title: string;
	slug: string;
	excerpt: string;
	content: string; // Markdown content
	category: Category;
	tags: Tag[];
	published_at: string;
	year: string;
	month: string;
	featuredImage?: string;
	author: {
		name: string;
	};
}

export interface Testimonial {
	id: number;
	name: string;
	role?: string;
	content: string;
	rating?: number;
	avatarUrl?: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export const siteConfig = {
	name: 'Baricode Indonesia',
	contactEmail: 'halo@baricode.org',
	contactWhatsapp: '6281234567890',
	description: 'Akademi dan kursus online IT yang membumi. Kami pun memulai semuanya dari kondisi paling terbatas sekalipun.'
};

export const categories: Category[] = [
	{
		name: 'Pemrograman Dasar',
		slug: 'pemrograman-dasar',
		description: 'Panduan dan konsep dasar pemrograman bagi pemula yang baru memulai.',
		posts_count: 4
	},
	{
		name: 'Web Development',
		slug: 'web-development',
		description: 'Tutorial dan artikel seputar pembuatan website dari HTML, CSS, JavaScript hingga Framework modern.',
		posts_count: 4
	},
	{
		name: 'Tips & Trik',
		slug: 'tips-dan-trik',
		description: 'Kumpulan tips belajar efisien, efisiensi workflow, dan persiapan karier IT.',
		posts_count: 2
	}
];

export const tags: Tag[] = [
	{ name: 'Pemula', slug: 'pemula' },
	{ name: 'JavaScript', slug: 'javascript' },
	{ name: 'Svelte', slug: 'svelte' },
	{ name: 'Laravel', slug: 'laravel' },
	{ name: 'HTML & CSS', slug: 'html-css' },
	{ name: 'Tips Belajar', slug: 'tips-belajar' },
	{ name: 'Santri Coding', slug: 'santri-coding' },
	{ name: 'Roadmap', slug: 'roadmap' }
];

function parseFrontmatter(rawContent: string): { metadata: Record<string, any>; content: string } {
	const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
	const match = rawContent.match(frontmatterRegex);

	if (!match) {
		return { metadata: {}, content: rawContent };
	}

	const yamlBlock = match[1];
	const content = match[2];
	const metadata: Record<string, any> = {};

	for (const line of yamlBlock.split('\n')) {
		const colonIndex = line.indexOf(':');
		if (colonIndex === -1) continue;
		const key = line.slice(0, colonIndex).trim();
		let value = line.slice(colonIndex + 1).trim();

		if (
			(value.startsWith('"') && value.endsWith('"')) ||
			(value.startsWith("'") && value.endsWith("'"))
		) {
			value = value.slice(1, -1);
		}

		if (value.startsWith('[') && value.endsWith(']')) {
			metadata[key] = value
				.slice(1, -1)
				.split(',')
				.map((s) => s.trim().replace(/^['"]|['"]$/g, ''));
		} else if (key === 'tags' && value.includes(',')) {
			metadata[key] = value.split(',').map((s) => s.trim());
		} else {
			metadata[key] = value;
		}
	}

	return { metadata, content };
}

const rawMarkdownFiles = import.meta.glob('/src/content/artikel/*.md', {
	query: '?raw',
	eager: true,
	import: 'default'
}) as Record<string, string>;

export const samplePosts: Post[] = Object.entries(rawMarkdownFiles).map(([filepath, rawContent], index) => {
	const slug = filepath.split('/').pop()?.replace(/\.md$/, '') || '';
	const { metadata, content } = parseFrontmatter(rawContent);

	const categorySlug = metadata.category || 'pemrograman-dasar';
	const matchedCategory = categories.find((c) => c.slug === categorySlug) || categories[0];

	const tagSlugs: string[] = Array.isArray(metadata.tags)
		? metadata.tags
		: metadata.tags
			? [metadata.tags]
			: [];

	const matchedTags = tagSlugs
		.map((tSlug) => tags.find((t) => t.slug === tSlug || t.name.toLowerCase() === tSlug.toLowerCase()))
		.filter((t): t is Tag => t !== undefined);

	const publishedAt = metadata.published_at || '2026-09-05';
	const [year = '2026', month = '09'] = publishedAt.split('-');

	return {
		id: index + 1,
		title: metadata.title || slug,
		slug,
		excerpt: metadata.excerpt || '',
		content: content.trim(),
		category: matchedCategory,
		tags: matchedTags,
		published_at: publishedAt,
		year,
		month,
		featuredImage: metadata.featuredImage,
		author: {
			name: metadata.author || 'Baricode Team'
		}
	};
});

export const sampleTestimonials: Testimonial[] = [
	{
		id: 1,
		name: 'Ahmad Fauzi',
		role: 'Santri & Pembelajar Mandiri',
		content: 'Materi Baricode sangat mudah dipahami. Saya yang awalnya tidak mengerti apa-apa tentang koding kini sudah bisa bikin website sederhana sendiri.',
		rating: 5
	},
	{
		id: 2,
		name: 'Rian Pratama',
		role: 'Siswa SMK',
		content: 'Penjelasannya membumi dan tidak pakai bahasa yang berbelit-belit. Sangat merekomendasikan untuk pemula yang baru mau mulai.',
		rating: 5
	}
];

export const faqs: FaqItem[] = [
	{
		question: 'Apakah belajar di Baricode Indonesia gratis?',
		answer: 'Materi dasar untuk pemula di blog kami sepenuhnya gratis. Untuk yang ingin belajar lebih serius dan terstruktur, tersedia kursus dan akademi berbayar di kursus.baricode.org.'
	},
	{
		question: 'Saya belum punya pengalaman coding sama sekali, apakah boleh ikut?',
		answer: 'Boleh sekali. Baricode Indonesia dibangun untuk pemula, termasuk santri, remaja, dan pemuda desa yang baru pertama kali mengenal dunia IT.'
	},
	{
		question: 'Apakah saya perlu laptop atau perangkat khusus?',
		answer: 'Tidak ada syarat perangkat khusus. Materi kami dirancang agar tetap bisa diikuti meski dengan keterbatasan akses dan fasilitas.'
	},
	{
		question: 'Bagaimana cara mulai belajar?',
		answer: 'Lihat daftar kursus & akademi kami atau baca artikel-artikel di blog kami sebagai pengantar.'
	},
	{
		question: 'Apakah ada kelas tatap muka?',
		answer: 'Saat ini seluruh pembelajaran dilakukan secara online sehingga bisa diikuti dari mana saja.'
	}
];

export const glossaryTerms: Record<string, string> = {
	'API': 'Application Programming Interface — cara agar dua program bisa saling "berbicara" dan bertukar data.',
	'Backend': 'Bagian aplikasi yang berjalan di server, mengurus logika, data, dan proses yang tidak terlihat langsung oleh pengguna.',
	'Frontend': 'Bagian aplikasi yang dilihat dan digunakan langsung oleh pengguna, biasanya berupa tampilan website atau aplikasi.',
	'Framework': 'Kerangka kerja berisi kumpulan alat dan aturan yang memudahkan pembuatan program, misalnya Laravel untuk PHP atau SvelteKit.',
	'Git': 'Sistem untuk melacak setiap perubahan pada kode program, memudahkan kerja tim dan riwayat pengembangan.',
	'HTML': 'HyperText Markup Language — bahasa dasar untuk menyusun struktur halaman web.',
	'IDE': 'Integrated Development Environment — aplikasi tempat programmer menulis dan menguji kode, misalnya VS Code.',
	'JavaScript': 'Bahasa pemrograman yang membuat halaman web menjadi interaktif.',
	'Repository': 'Tempat penyimpanan kode program beserta riwayat perubahannya, biasa disingkat "repo".',
	'Responsive': 'Tampilan website yang menyesuaikan diri secara otomatis di berbagai ukuran layar, dari HP hingga komputer.',
	'Variabel': 'Tempat menyimpan nilai atau data dalam program, seperti wadah yang bisa diisi dan diubah isinya.'
};

export function renderMarkdown(content: string): string {
	return marked.parse(content, { async: false }) as string;
}

export function getPostUrl(slug: string): string {
	return `/artikel/${slug}`;
}
