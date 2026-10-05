<script lang="ts">
	import { siteConfig } from '$lib/data/site';

	type TrackCategory = 'semua' | 'pemula' | 'frontend' | 'fullstack' | 'cms';

	interface TrackItem {
		id: string;
		title: string;
		category: TrackCategory;
		categoryLabel: string;
		level: 'Pemula' | 'Pemula ke Menengah' | 'Menengah' | 'Siap Portofolio';
		duration: string;
		badgeColor: 'rose' | 'red' | 'sky' | 'emerald' | 'amber' | 'indigo';
		summary: string;
		keyPoints: string[];
		projectTitle: string;
		projectDescription: string;
		techStack: string[];
		actionUrl: string;
		actionLabel: string;
		isRoadmap?: boolean;
	}

	let activeFilter = $state<TrackCategory>('semua');
	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const tracks: TrackItem[] = [
		{
			id: 'dasar-pemrograman',
			title: 'Dasar Pemrograman & Logika Komputasi',
			category: 'pemula',
			categoryLabel: 'Pemula Nol',
			level: 'Pemula',
			duration: '2 - 4 Minggu',
			badgeColor: 'amber',
			summary:
				'Untuk kamu yang belum pernah menulis satu baris kode pun. Belajar membedah masalah, memahami alur logika komputer, variabel, percabangan, hingga loop tanpa terjebak kerumitan rumus matematika.',
			keyPoints: [
				'Fondasi logika pemecahan masalah (Computational Thinking)',
				'Variabel, tipe data, pengkondisian (if/else), dan perulangan',
				'Mengenal terminal dasar dan cara kerja file komputer',
				'Menulis kode bersih pertama tanpa merasa terintimidasi'
			],
			projectTitle: 'Mini Game Tebak Angka & Aplikasi Kasir Sederhana di Terminal',
			projectDescription:
				'Program interaktif pertama untuk menguji logika perhitungan, input pengguna, dan alur percabangan.',
			techStack: ['Logika Algoritma', 'Pseudocode', 'Dasar Terminal', 'Python / JS Dasar'],
			actionUrl: '/untuk-pemula',
			actionLabel: 'Baca Panduan Pemula'
		},
		{
			id: 'web-modern',
			title: 'Pengembangan Web Modern (HTML, CSS & JavaScript)',
			category: 'frontend',
			categoryLabel: 'Frontend Web',
			level: 'Pemula ke Menengah',
			duration: '4 - 6 Minggu',
			badgeColor: 'rose',
			summary:
				'Bangun website dari nol yang tampak rapi, modern, dan nyaman diakses dari smartphone maupun laptop. Pahami bagaimana struktur HTML, estetika CSS, dan kedinamisan JavaScript bekerja bersama.',
			keyPoints: [
				'Struktur HTML5 semantik yang ramah mesin pencari (SEO)',
				'Styling modern dengan CSS Flexbox, Grid, dan Tailwind CSS',
				'Manipulasi DOM dan interaksi dinamis menggunakan JavaScript',
				'Mengambil data eksternal secara asinkron menggunakan Fetch API'
			],
			projectTitle: 'Website Portofolio Responsif & Dashboard To-Do List Interaktif',
			projectDescription:
				'Website portofolio pribadi lengkap dengan tema gelap-terang dan aplikasi pencatat aktivitas harian.',
			techStack: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript Modern', 'Fetch API'],
			actionUrl: '/roadmap',
			actionLabel: 'Lihat Roadmap Web'
		},
		{
			id: 'fullstack-laravel',
			title: 'Fullstack Web Developer (PHP Modern & Laravel 11)',
			category: 'fullstack',
			categoryLabel: 'Fullstack & Backend',
			level: 'Menengah',
			duration: '8 - 12 Minggu',
			badgeColor: 'red',
			summary:
				'Kuasai framework PHP paling populer di industri. Bangun aplikasi web yang memiliki sistem login aman, pengelolaan database relasional, validasi data, hingga penyediaan REST API berstandar industri.',
			keyPoints: [
				'Pemrograman berorientasi objek (PHP OOP) & arsitektur MVC',
				'Desain database MySQL, migration, relasi, dan Eloquent ORM',
				'Autentikasi aman, validasi formulir, serta manajemen hak akses',
				'Pembuatan RESTful API untuk dikonsumsi frontend atau mobile'
			],
			projectTitle: 'Sistem Kasir Web (Point of Sale) & Portal Manajemen Konten',
			projectDescription:
				'Aplikasi web fungsional dengan multi-user login, pencatatan transaksi, export laporan, dan dashboard admin.',
			techStack: ['PHP 8+', 'Laravel 11', 'MySQL', 'Eloquent ORM', 'Blade Engine', 'REST API'],
			actionUrl: '/roadmap/laravel',
			actionLabel: 'Pelajari Roadmap Laravel',
			isRoadmap: true
		},
		{
			id: 'wordpress-freelance',
			title: 'WordPress & Freelance Web Specialist',
			category: 'cms',
			categoryLabel: 'CMS & Praktis',
			level: 'Pemula ke Menengah',
			duration: '4 - 6 Minggu',
			badgeColor: 'sky',
			summary:
				'Jalur tercepat untuk mulai menerima proyek website klien (UMKM, profil perusahaan, hingga toko online). Pelajari kustomisasi tema, Custom Post Types, Advanced Custom Fields, dan optimasi performa.',
			keyPoints: [
				'Instalasi, konfigurasi, dan arsitektur tema WordPress',
				'Membuat struktur data kustom dengan CPT & Advanced Custom Fields (ACF)',
				'Membangun toko online fungsional dengan WooCommerce & payment gateway',
				'Optimasi kecepatan website, backup berkala, dan keamanan WordPress'
			],
			projectTitle: 'Website Company Profile Profesional & Toko Online Siap Pakai',
			projectDescription:
				'Website bisnis nyata yang mudah diedit oleh pemilik usaha dengan form kontak dan integrasi WhatsApp.',
			techStack: ['WordPress', 'PHP Dasar', 'Custom Post Types', 'ACF', 'WooCommerce', 'SEO Web'],
			actionUrl: '/roadmap/wordpress',
			actionLabel: 'Pelajari Roadmap WordPress',
			isRoadmap: true
		},
		{
			id: 'frontend-modern',
			title: 'Frontend Reaktif & Single Page App (React / Svelte)',
			category: 'frontend',
			categoryLabel: 'Frontend Lanjutan',
			level: 'Menengah',
			duration: '6 - 8 Minggu',
			badgeColor: 'indigo',
			summary:
				'Tingkatkan kemampuan frontend-mu ke level berikutnya dengan library modern. Pelajari cara merancang antarmuka berbasis komponen yang reaktif, cepat, dan terhubung mulus dengan server backend.',
			keyPoints: [
				'Konsep UI berbasis komponen modular (Component-Driven)',
				'Manajemen status aplikasi (State Management & Reactivity)',
				'Client-side routing untuk Single Page Application tanpa refresh layar',
				'Integrasi data asinkron dan error handling ramah pengguna'
			],
			projectTitle: 'Aplikasi Web Dashboard Analytics & Pencarian Data Realtime',
			projectDescription:
				'Aplikasi interaktif dengan filtering instan, visualisasi data grafik, dan responsivitas tinggi.',
			techStack: ['JavaScript ES6+', 'React / Svelte', 'Tailwind CSS', 'Vite', 'REST API Client'],
			actionUrl: '/artikel',
			actionLabel: 'Eksplorasi Artikel Frontend'
		},
		{
			id: 'git-deploy-career',
			title: 'Git, GitHub, Deploy & Bekal Portofolio',
			category: 'fullstack',
			categoryLabel: 'Bekal Karier',
			level: 'Siap Portofolio',
			duration: '2 - 3 Minggu',
			badgeColor: 'emerald',
			summary:
				'Bekal penting yang sering dilupakan pemula: cara menyimpan versi kode secara profesional dengan Git, kolaborasi di GitHub, serta menerbitkan karyamu ke internet nyata agar bisa dinikmati orang lain.',
			keyPoints: [
				'Dasar Git: commit, branch, checkout, merge, dan penyelesaian konflik',
				'Membuat profil GitHub yang rapi, informatif, dan profesional',
				'Deploy website otomatis gratis via Vercel, Netlify, atau GitHub Pages',
				'Dasar domain kustom, sertifikat SSL, dan persiapan melamar kerja/klien'
			],
			projectTitle: 'Portofolio Online Live dengan Custom Domain & Repository GitHub Publik',
			projectDescription:
				'Kumpulan proyek nyata yang sudah dipublikasikan online dan siap dicantumkan dalam CV atau portofolio.',
			techStack: ['Git', 'GitHub', 'CI/CD Dasar', 'Vercel / Netlify', 'DNS & Domain'],
			actionUrl: '/glosarium',
			actionLabel: 'Cek Glosarium IT'
		}
	];

	let filteredTracks = $derived(
		activeFilter === 'semua' ? tracks : tracks.filter((track) => track.category === activeFilter)
	);

	const filterCounts = $derived({
		semua: tracks.length,
		pemula: tracks.filter((t) => t.category === 'pemula').length,
		frontend: tracks.filter((t) => t.category === 'frontend').length,
		fullstack: tracks.filter((t) => t.category === 'fullstack').length,
		cms: tracks.filter((t) => t.category === 'cms').length
	});

	const courseFaqs = [
		{
			q: 'Apakah saya harus punya laptop canggih atau mahal untuk ikut kursus ini?',
			a: 'Sama sekali tidak. Kurikulum Baricode dirancang khusus agar ramah perangkat standar. Laptop dengan prosesor dual-core sederhana dan RAM 4GB sudah lebih dari cukup untuk menjalankan editor VS Code, browser, dan lingkungan PHP/Node dasar. Kami pun memulai semuanya dari perangkat yang sangat terbatas.'
		},
		{
			q: 'Saya belum pernah koding sama sekali dan bukan lulusan IT, apakah bisa mengikuti?',
			a: 'Tentu bisa. Jalur Dasar Pemrograman dan Web Modern kami susun dengan bahasa sehari-hari tanpa asumsi latar belakang teknis. Kami menghindari jargon asing rumit tanpa analogi, sehingga teman-teman santri, siswa sekolah, maupun pekerja yang beralih karier dapat memahami alur logika dengan nyaman.'
		},
		{
			q: 'Bagaimana sistem belajarnya, apakah berjadwal kaku atau mandiri?',
			a: 'Belajar di Baricode memprioritaskan fleksibilitas. Kamu bisa mempelajari materi dan roadmap secara mandiri kapan saja sesuai waktu luangmu. Jika menemui kebuntuan atau error koding, kamu bisa berdiskusi langsung di grup komunitas WhatsApp Baricode.'
		},
		{
			q: 'Apa perbedaan antara artikel gratis di blog, bimbingan, dan kursus terstruktur?',
			a: 'Artikel di blog adalah materi bacaan mandiri untuk memahami konsep secara ringkas. Baricode Bimbingan adalah inisiatif gratis pendampingan dan penjagaan komitmen belajar lewat WhatsApp. Sedangkan kursus/jalur terstruktur merangkum seluruh tahapan langkah demi langkah dengan proyek akhir yang utuh.'
		},
		{
			q: 'Apa yang harus saya lakukan jika mengalami error yang tidak bisa saya selesaikan sendiri?',
			a: 'Jangan dipendam atau berkecil hati. Error adalah bagian paling wajar dari keseharian programmer. Kamu bisa mengambil tangkapan layar (screenshot) kode dan pesan error-nya, lalu tanyakan di grup WhatsApp Baricode Indonesia. Teman-teman komunitas dan mentor akan membantu menguraikan masalahnya secara ramah.'
		},
		{
			q: 'Apakah saya akan menghasilkan portofolio nyata setelah selesai belajar?',
			a: 'Ya, itulah fokus utama kurikulum kami: Project-First. Di setiap jalur, kamu tidak sekadar menghafal sintaks kode, tetapi diajak membangun proyek aplikasi nyata yang fungsional dan bisa dipamerkan di internet untuk meyakinkan calon klien atau rekruter.'
		}
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://www.baricode.org/kursus#webpage',
				url: 'https://www.baricode.org/kursus',
				name: 'Kursus & Jalur Belajar IT — Baricode Indonesia',
				description:
					'Pilihan jalur belajar IT terstruktur dari Baricode Indonesia: dasar pemrograman, pengembangan web modern, fullstack Laravel, hingga WordPress freelance. Belajar koding membumi dari nol.',
				inLanguage: 'id-ID',
				isPartOf: {
					'@type': 'WebSite',
					'@id': 'https://www.baricode.org/#website',
					name: 'Baricode Indonesia',
					url: 'https://www.baricode.org'
				},
				breadcrumb: {
					'@type': 'BreadcrumbList',
					itemListElement: [
						{
							'@type': 'ListItem',
							position: 1,
							name: 'Beranda',
							item: 'https://www.baricode.org'
						},
						{
							'@type': 'ListItem',
							position: 2,
							name: 'Kursus & Jalur Belajar',
							item: 'https://www.baricode.org/kursus'
						}
					]
				}
			},
			{
				'@type': 'ItemList',
				name: 'Daftar Jalur Belajar Baricode Indonesia',
				itemListElement: tracks.map((track, idx) => ({
					'@type': 'Course',
					position: idx + 1,
					name: track.title,
					description: track.summary,
					provider: {
						'@type': 'Organization',
						name: 'Baricode Indonesia',
						sameAs: 'https://www.baricode.org'
					}
				}))
			},
			{
				'@type': 'FAQPage',
				'@id': 'https://www.baricode.org/kursus#faq',
				mainEntity: courseFaqs.map((faq) => ({
					'@type': 'Question',
					name: faq.q,
					acceptedAnswer: {
						'@type': 'Answer',
						text: faq.a
					}
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Kursus &amp; Jalur Belajar IT Membumi — Baricode Indonesia</title>
	<meta
		name="description"
		content="Pilihan jalur belajar koding &amp; IT terstruktur dari nol: Dasar Logika, Web Modern HTML/CSS/JS, Fullstack Laravel, hingga WordPress Freelance. Praktik langsung proyek nyata."
	/>
	<meta
		name="keywords"
		content="kursus koding pemula, jalur belajar programmer, belajar web development dari nol, kursus laravel indonesia, kursus wordpress pemula, bimbingan koding santri, baricode indonesia"
	/>
	<link rel="canonical" href="https://www.baricode.org/kursus" />

	<!-- Open Graph / WhatsApp Sharing -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Kursus &amp; Jalur Belajar IT Membumi — Baricode Indonesia" />
	<meta
		property="og:description"
		content="Pilih jalur belajar koding terstruktur dari dasar. Ramah pemula, laptop spek standar, dan fokus portofolio proyek nyata."
	/>
	<meta property="og:url" content="https://www.baricode.org/kursus" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Kursus &amp; Jalur Belajar IT Membumi — Baricode Indonesia" />
	<meta
		name="twitter:description"
		content="Pilih jalur belajar koding terstruktur dari dasar. Ramah pemula, laptop spek standar, dan fokus portofolio proyek nyata."
	/>

	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="relative overflow-hidden pb-16">
	<!-- Ambient Background Light -->
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div
			class="absolute -top-32 left-1/2 h-[35rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/10 via-red-500/5 to-transparent blur-[140px] dark:from-red-600/15 dark:via-rose-600/5"
		></div>
		<div
			class="absolute top-1/2 -right-48 h-[25rem] w-[25rem] rounded-full bg-amber-500/10 blur-[130px] dark:bg-amber-600/10"
		></div>
	</div>

	<!-- Breadcrumb Navigation -->
	<nav class="mx-auto max-w-5xl px-6 pt-8 pb-4" aria-label="Breadcrumb">
		<ol class="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
			<li>
				<a
					href="/"
					class="transition hover:text-red-600 focus:outline-none focus-visible:underline dark:hover:text-red-400"
				>
					Beranda
				</a>
			</li>
			<li class="text-slate-400 select-none dark:text-zinc-600">/</li>
			<li class="font-medium text-slate-800 dark:text-zinc-200" aria-current="page">
				Kursus &amp; Jalur Belajar
			</li>
		</ol>
	</nav>

	<!-- Hero Section -->
	<section class="mx-auto max-w-5xl px-6 pt-6 pb-16 text-center">
		<!-- Pill Badge -->
		<div
			class="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-600 shadow-xs backdrop-blur-md dark:border-rose-500/30 dark:bg-rose-500/15 dark:text-rose-300"
		>
			<span class="inline-block size-2 animate-pulse rounded-full bg-rose-500"></span>
			<span>🎓 Kurikulum Terarah &amp; Ramah Pemula</span>
		</div>

		<!-- Main Heading -->
		<h1
			class="mx-auto mt-6 max-w-3xl text-3xl leading-[1.15] font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
		>
			Pilih Jalur Belajar yang Sesuai dengan
			<span
				class="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent dark:from-red-400 dark:via-rose-400 dark:to-amber-300"
			>
				Titik Awal &amp; Mimpimu
			</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300"
		>
			Kami menyusun perjalanan belajar koding menjadi langkah-langkah yang membumi. Tanpa istilah
			rumit yang membingungkan, ramah spesifikasi laptop standar, dan berfokus pada hasil karya
			nyata untuk portofoliomu.
		</p>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="#daftar-jalur"
				class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/25 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
			>
				<span>Eksplorasi Jalur Belajar</span>
				<svg
					class="size-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
				</svg>
			</a>
			<a
				href="/whatsapp"
				class="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
			>
				<span class="inline-block size-2 rounded-full bg-emerald-500"></span>
				<span>Tanya Rekomendasi di WhatsApp</span>
			</a>
		</div>

		<!-- Highlights Grid -->
		<div class="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div
					class="flex size-9 items-center justify-center rounded-xl bg-red-500/10 text-lg text-red-600 dark:bg-red-500/20 dark:text-red-400"
				>
					🪜
				</div>
				<h2 class="mt-3 text-sm font-bold text-slate-900 dark:text-white">Alur Bertahap</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Disusun dari konsep paling mendasar, tidak langsung meloncat ke materi sulit.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div
					class="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
				>
					💻
				</div>
				<h2 class="mt-3 text-sm font-bold text-slate-900 dark:text-white">Ramah Spek Standar</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Laptop RAM 4GB dan prosesor biasa sudah cukup untuk mulai berkreasi.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div
					class="flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-lg text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
				>
					🛠️
				</div>
				<h2 class="mt-3 text-sm font-bold text-slate-900 dark:text-white">Fokus Proyek Nyata</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Bukan hanya menghafal kode, tapi menghasilkan website &amp; aplikasi hidup.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div
					class="flex size-9 items-center justify-center rounded-xl bg-sky-500/10 text-lg text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
				>
					🤝
				</div>
				<h2 class="mt-3 text-sm font-bold text-slate-900 dark:text-white">Dukungan Komunitas</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Ada ruang tanya jawab ramah saat kamu mengalami error atau buntu.
				</p>
			</div>
		</div>
	</section>

	<!-- Interactive Track Selector & Catalog -->
	<section id="daftar-jalur" class="mx-auto max-w-5xl scroll-mt-20 px-6 pt-8 pb-20">
		<div
			class="flex flex-col items-start justify-between gap-4 border-b border-slate-200/80 pb-6 sm:flex-row sm:items-end dark:border-zinc-800/80"
		>
			<div>
				<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
					Katalog Program
				</p>
				<h2
					class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Pilihan Kurikulum &amp; Spesialisasi
				</h2>
				<p class="mt-1 text-sm text-slate-600 dark:text-zinc-400">
					Pilih filter di bawah untuk menemukan kurikulum yang pas dengan tujuan belajarmu saat ini.
				</p>
			</div>

			<!-- Filter Tabs -->
			<div
				class="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-200 bg-white/90 p-1.5 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80"
				role="tablist"
				aria-label="Filter kategori kursus"
			>
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === 'semua'}
					onclick={() => (activeFilter = 'semua')}
					class={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
						activeFilter === 'semua'
							? 'bg-rose-600 text-white shadow-xs'
							: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
					}`}
				>
					Semua ({filterCounts.semua})
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === 'pemula'}
					onclick={() => (activeFilter = 'pemula')}
					class={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
						activeFilter === 'pemula'
							? 'bg-rose-600 text-white shadow-xs'
							: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
					}`}
				>
					Pemula Nol ({filterCounts.pemula})
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === 'frontend'}
					onclick={() => (activeFilter = 'frontend')}
					class={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
						activeFilter === 'frontend'
							? 'bg-rose-600 text-white shadow-xs'
							: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
					}`}
				>
					Frontend Web ({filterCounts.frontend})
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === 'fullstack'}
					onclick={() => (activeFilter = 'fullstack')}
					class={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
						activeFilter === 'fullstack'
							? 'bg-rose-600 text-white shadow-xs'
							: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
					}`}
				>
					Fullstack &amp; Backend ({filterCounts.fullstack})
				</button>
				<button
					type="button"
					role="tab"
					aria-selected={activeFilter === 'cms'}
					onclick={() => (activeFilter = 'cms')}
					class={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition ${
						activeFilter === 'cms'
							? 'bg-rose-600 text-white shadow-xs'
							: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
					}`}
				>
					WordPress ({filterCounts.cms})
				</button>
			</div>
		</div>

		<!-- Track Cards Grid -->
		<div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredTracks as track (track.id)}
				<article
					class="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-md backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70 dark:hover:border-zinc-700 dark:hover:shadow-2xl dark:hover:shadow-black/40"
				>
					<div>
						<!-- Top Badges -->
						<div class="flex items-center justify-between gap-2">
							<span
								class="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold
								{track.badgeColor === 'amber'
									? 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
									: ''}
								{track.badgeColor === 'rose'
									? 'bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'
									: ''}
								{track.badgeColor === 'red'
									? 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400'
									: ''}
								{track.badgeColor === 'sky'
									? 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400'
									: ''}
								{track.badgeColor === 'indigo'
									? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'
									: ''}
								{track.badgeColor === 'emerald'
									? 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400'
									: ''}"
							>
								{track.categoryLabel}
							</span>

							<div
								class="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 dark:text-zinc-400"
							>
								<svg
									class="size-3.5"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="2"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
								<span>{track.duration}</span>
							</div>
						</div>

						<!-- Track Title -->
						<h3
							class="mt-4 text-xl font-bold tracking-tight text-slate-900 transition group-hover:text-red-600 dark:text-white dark:group-hover:text-rose-400"
						>
							{track.title}
						</h3>

						<!-- Level Indicator -->
						<div class="mt-2 flex items-center gap-2">
							<span class="inline-flex size-2 rounded-full bg-emerald-500"></span>
							<span class="text-xs font-medium text-slate-600 dark:text-zinc-400">
								Tingkat: <strong class="text-slate-800 dark:text-zinc-200">{track.level}</strong>
							</span>
						</div>

						<!-- Description -->
						<p class="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-300">
							{track.summary}
						</p>

						<!-- Key Points -->
						<div class="mt-4 space-y-2 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
							<p
								class="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-zinc-400"
							>
								Materi Inti:
							</p>
							<ul class="space-y-1.5 text-xs text-slate-600 dark:text-zinc-300">
								{#each track.keyPoints as point}
									<li class="flex items-start gap-2">
										<svg
											class="mt-0.5 size-3.5 shrink-0 text-rose-500 dark:text-rose-400"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="2.5"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m4.5 12.75 6 6 9-13.5"
											/>
										</svg>
										<span>{point}</span>
									</li>
								{/each}
							</ul>
						</div>

						<!-- Project Preview Box -->
						<div
							class="mt-5 rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-zinc-800/60 dark:bg-zinc-800/40"
						>
							<div
								class="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 dark:text-zinc-200"
							>
								<span>🚀 Proyek Akhir:</span>
							</div>
							<p class="mt-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
								{track.projectTitle}
							</p>
							<p class="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-zinc-400">
								{track.projectDescription}
							</p>
						</div>

						<!-- Tech Stack Pills -->
						<div class="mt-4 flex flex-wrap gap-1.5">
							{#each track.techStack as tech}
								<span
									class="rounded-lg bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300"
								>
									{tech}
								</span>
							{/each}
						</div>
					</div>

					<!-- Bottom Action Link -->
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
						<a
							href={track.actionUrl}
							class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 dark:bg-zinc-800 dark:hover:bg-red-600"
						>
							<span>{track.actionLabel}</span>
							<svg
								class="size-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
								/>
							</svg>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- 3 Format Belajar Section -->
	<section
		class="border-y border-slate-200/80 bg-slate-100/60 py-16 dark:border-zinc-800/80 dark:bg-zinc-900/40"
	>
		<div class="mx-auto max-w-5xl px-6">
			<div class="text-center">
				<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
					Metode Pembelajaran
				</p>
				<h2
					class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Tiga Cara Berkembang Bersama Baricode
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
					Setiap orang memiliki waktu, ritme, dan kondisi perangkat yang berbeda. Pilih ekosistem
					belajar yang paling nyaman bagimu.
				</p>
			</div>

			<div class="mt-12 grid gap-6 sm:grid-cols-3">
				<!-- Format 1: Belajar Mandiri -->
				<div
					class="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div>
						<div
							class="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
						>
							📖
						</div>
						<span
							class="mt-4 inline-block text-[11px] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400"
						>
							Akses Bebas 100%
						</span>
						<h3 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
							Artikel &amp; Roadmap Mandiri
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
							Ratusan artikel panduan, kurikulum roadmap interaktif, dan glosarium istilah yang bisa
							kamu baca kapan saja tanpa dipungut biaya.
						</p>
						<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-300">
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-amber-500"></span>
								<span>Sepenuhnya gratis dan terbuka untuk publik</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-amber-500"></span>
								<span>Bisa dibaca sesuai kecepatan belajarmu</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-amber-500"></span>
								<span>Contoh kode bersih dan penjelasan analogis</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/artikel"
							class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 transition hover:gap-2 dark:text-amber-400"
						>
							<span>Mulai Baca Artikel</span>
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>

				<!-- Format 2: Baricode Bimbingan (Komunitas) -->
				<div
					class="relative flex flex-col justify-between rounded-3xl border border-rose-500/30 bg-gradient-to-b from-rose-500/5 via-white to-white p-7 shadow-lg shadow-rose-500/5 backdrop-blur dark:border-rose-500/30 dark:from-rose-950/20 dark:via-zinc-900 dark:to-zinc-900"
				>
					<span
						class="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-xs"
					>
						Program Favorit
					</span>
					<div>
						<div
							class="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
						>
							🤝
						</div>
						<span
							class="mt-4 inline-block text-[11px] font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400"
						>
							Pendampingan Komunitas
						</span>
						<h3 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
							Baricode Bimbingan
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
							Belajar mandiri dengan akuntabilitas grup WhatsApp. Mentor dan kawan sebaya menjaga
							ritme belajarmu agar tetap konsisten dan tidak berhenti di tengah jalan.
						</p>
						<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-300">
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-rose-500"></span>
								<span>Grup WhatsApp diskusi &amp; problem solving</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-rose-500"></span>
								<span>Bukan kelas kaku, belajar dari materi pilihanmu</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-rose-500"></span>
								<span>Saling memotivasi sesama pembelajar otodidak</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/bimbingan"
							class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition hover:gap-2 dark:text-rose-400"
						>
							<span>Pelajari Program Bimbingan</span>
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>

				<!-- Format 3: Kursus & Akademi Intensif -->
				<div
					class="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div>
						<div
							class="flex size-12 items-center justify-center rounded-2xl bg-sky-500/10 text-2xl text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
						>
							🎓
						</div>
						<span
							class="mt-4 inline-block text-[11px] font-bold tracking-wider text-sky-600 uppercase dark:text-sky-400"
						>
							Live Class Intensif
						</span>
						<h3 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
							Baricode Akademi (Small Cohort)
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
							Live class online kelompok kecil bersama praktisi. Dilengkapi code review 1-on-1,
							kurikulum terarah, dan portofolio siap kerja.
						</p>
						<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-300">
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-sky-500"></span>
								<span>Maksimal 12 peserta per kelas (eksklusif &amp; terpantau)</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-sky-500"></span>
								<span>Live coding dua arah &amp; personal code review</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="size-1.5 rounded-full bg-sky-500"></span>
								<span>Akses rekaman seumur hidup &amp; portofolio produksi</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/akademi"
							class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition hover:gap-2 dark:text-sky-400"
						>
							<span>Lihat Baricode Akademi</span>
							<span aria-hidden="true">&rarr;</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Alur Perjalanan Siswa (4 Steps) -->
	<section class="mx-auto max-w-5xl px-6 py-20">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Langkah demi Langkah
			</p>
			<h2 class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Bagaimana Kamu Belajar dari Nol Sampai Mahir?
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Kami tidak mengharapkan kamu langsung jago dalam semalam. Ikuti siklus belajar yang
				realistis dan terbukti:
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			<!-- Step 1 -->
			<div
				class="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
			>
				<span
					class="inline-flex size-8 items-center justify-center rounded-xl bg-red-600 text-xs font-black text-white"
				>
					01
				</span>
				<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
					Pilih Jalur &amp; Fondasi
				</h3>
				<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Tentukan tujuanmu (apakah ingin web frontend, backend Laravel, atau freelance WordPress)
					dan pahami cara kerja logika dasarnya.
				</p>
			</div>

			<!-- Step 2 -->
			<div
				class="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
			>
				<span
					class="inline-flex size-8 items-center justify-center rounded-xl bg-rose-600 text-xs font-black text-white"
				>
					02
				</span>
				<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">Praktik Proyek Mini</h3>
				<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Jangan hanya membaca atau menonton pasif. Ketikkan kodenya langsung di komputermu, mulai
					dari potongan kecil yang langsung terlihat hasilnya.
				</p>
			</div>

			<!-- Step 3 -->
			<div
				class="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
			>
				<span
					class="inline-flex size-8 items-center justify-center rounded-xl bg-amber-600 text-xs font-black text-white"
				>
					03
				</span>
				<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">Urai Error Bersama</h3>
				<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Ketika kode tidak berjalan sesuai harapan, bawa ke grup komunitas. Belajar membaca pesan
					error dan mencari jalan keluarnya tanpa panik.
				</p>
			</div>

			<!-- Step 4 -->
			<div
				class="relative rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60"
			>
				<span
					class="inline-flex size-8 items-center justify-center rounded-xl bg-emerald-600 text-xs font-black text-white"
				>
					04
				</span>
				<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
					Deploy &amp; Pamerkan
				</h3>
				<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Unggah hasil karyamu ke internet nyata (live hosting &amp; GitHub). Bagikan tautannya
					kepada teman, mentor, calon klien, atau calon pemberi kerja.
				</p>
			</div>
		</div>
	</section>

	<!-- FAQ Accordion Section -->
	<section
		class="border-t border-slate-200/80 bg-slate-100/50 py-16 dark:border-zinc-800/80 dark:bg-zinc-900/30"
	>
		<div class="mx-auto max-w-3xl px-6">
			<div class="text-center">
				<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
					Tanya Jawab
				</p>
				<h2
					class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Pertanyaan Seputar Kursus &amp; Belajar di Baricode
				</h2>
				<p class="mt-2 text-sm text-slate-600 dark:text-zinc-400">
					Berikut beberapa hal yang paling sering ditanyakan oleh teman-teman yang baru pertama kali
					bergabung:
				</p>
			</div>

			<div class="mt-10 space-y-3">
				{#each courseFaqs as faq, index}
					<div
						class="rounded-2xl border border-slate-200/80 bg-white transition dark:border-zinc-800/80 dark:bg-zinc-900/80"
					>
						<button
							type="button"
							class="flex w-full items-center justify-between rounded-2xl p-5 text-left text-sm font-bold text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:text-base dark:text-white"
							onclick={() => toggleFaq(index)}
							aria-expanded={openFaqIndex === index}
						>
							<span class="pr-4">{faq.q}</span>
							<svg
								class="size-5 shrink-0 text-slate-400 transition-transform duration-200 dark:text-zinc-500 {openFaqIndex ===
								index
									? 'rotate-180 text-red-600 dark:text-red-400'
									: ''}"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="m19.5 8.25-7.5 7.5-7.5-7.5"
								/>
							</svg>
						</button>
						{#if openFaqIndex === index}
							<div
								class="border-t border-slate-100 px-5 pt-1 pb-5 text-xs leading-relaxed text-slate-600 sm:text-sm dark:border-zinc-800/60 dark:text-zinc-300"
							>
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- Bottom Consultation / CTA Banner -->
	<section class="mx-auto max-w-5xl px-6 pt-16">
		<div
			class="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-600/10 via-white to-white p-8 text-center shadow-xl shadow-red-500/5 backdrop-blur sm:p-12 dark:border-red-500/30 dark:from-red-950/30 dark:via-zinc-900/90 dark:to-zinc-900"
		>
			<span
				class="inline-flex items-center gap-1.5 rounded-full border border-red-500/30 bg-red-500/10 px-3.5 py-1 text-xs font-semibold text-red-600 dark:text-red-400"
			>
				✨ Butuh Panduan Awal?
			</span>

			<h2
				class="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-4xl dark:text-white"
			>
				Masih Bingung Menentukan Jalur yang Cocok?
			</h2>

			<p
				class="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300"
			>
				Ceritakan latar belakangmu, waktu luang yang kamu miliki, dan apa tujuan yang ingin kamu
				capai. Kami bantu rekomendasikan materi yang paling pas untuk situasi spesifikmu.
			</p>

			<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
				<a
					href="/whatsapp"
					class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/30 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
				>
					<span>Konsultasi Gratis via WhatsApp</span>
					<svg
						class="size-4"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2.5"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
						/>
					</svg>
				</a>

				<a
					href="/kontak"
					class="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
				>
					<span>Hubungi Tim Baricode</span>
				</a>
			</div>
		</div>
	</section>
</div>
