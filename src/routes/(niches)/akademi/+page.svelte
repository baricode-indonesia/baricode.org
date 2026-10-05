<script lang="ts">
	import { siteConfig } from '$lib/data/site';

	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	interface CohortProgram {
		id: string;
		title: string;
		badge: string;
		level: string;
		duration: string;
		schedule: string;
		batchInfo: string;
		summary: string;
		highlights: string[];
		finalProjectTitle: string;
		finalProjectDesc: string;
		techStack: string[];
		badgeColor: 'red' | 'indigo' | 'sky';
	}

	const cohorts: CohortProgram[] = [
		{
			id: 'fullstack-laravel-intensive',
			title: 'Fullstack Web Developer Intensive (PHP & Laravel 11)',
			badge: 'Paling Diminati',
			level: 'Pemula ke Menengah',
			duration: '8 Minggu Intensif',
			schedule: '2x Pertemuan Live / Minggu (Malam Hari)',
			batchInfo: 'Batch Baru Segera Dibuka (Maks. 12 Kursi)',
			summary:
				'Kuasai keahlian backend & fullstack web paling dibutuhkan di industri Indonesia. Dari dasar OOP, database relasional kompleks, REST API, sistem multi-role, hingga deployment VPS live.',
			highlights: [
				'Arsitektur MVC, Eloquent ORM Lanjutan, & Migrasi Database',
				'Autentikasi Aman, Multi-Auth, Role & Permission (Spatie)',
				'RESTful API Berstandar Industri & Dokumentasi Postman',
				'Integrasi Payment Gateway, Background Jobs, & Email Notification',
				'Deploy Server VPS Linux (Nginx, SSL, Domain Kustom, CI/CD)'
			],
			finalProjectTitle: 'SaaS Multi-Tenant Point of Sale (POS) & Manajemen Inventaris Toko',
			finalProjectDesc:
				'Aplikasi kasir multi-cabang lengkap dengan manajemen stok realtime, cetak struk, pelaporan PDF/Excel, dan API siap integrasi mobile.',
			techStack: ['PHP 8.3', 'Laravel 11', 'MySQL', 'Tailwind CSS', 'REST API', 'Ubuntu VPS'],
			badgeColor: 'red'
		},
		{
			id: 'frontend-modern-engineering',
			title: 'Modern Frontend Engineering (React / Svelte & Tailwind)',
			badge: 'Fast Track UI',
			level: 'Pemula yang Paham Dasar Web',
			duration: '6 Minggu Intensif',
			schedule: '2x Pertemuan Live / Minggu (Malam Hari)',
			batchInfo: 'Batch Baru Segera Dibuka (Maks. 12 Kursi)',
			summary:
				'Bangun antarmuka web modern yang cepat, reaktif, dan ramah pengguna. Kuasai component-driven architecture, global state management, data fetching asinkron, dan styling Tailwind CSS tingkat lanjut.',
			highlights: [
				'Komponen Modular, Reaktivitas Modern (Hooks / Runes), & State Flow',
				'Konsumsi REST API Asinkron, Caching, & Penanganan Error Halus',
				'Client-Side Routing, Protected Routes, & Autentikasi Frontend',
				'Performa Web, Code Splitting, SEO, & Aksesibilitas (a11y)',
				'Deploy Otomatis ke Edge Network (Vercel / Cloudflare Pages)'
			],
			finalProjectTitle: 'Enterprise Analytics Dashboard & Content Management Portal',
			finalProjectDesc:
				'Dashboard manajemen analitik interaktif dengan filter instan realtime, visualisasi grafik data kompleks, tema gelap-terang, dan data caching.',
			techStack: ['TypeScript', 'React / Svelte', 'Tailwind CSS v4', 'Vite', 'Chart.js', 'Vercel'],
			badgeColor: 'indigo'
		},
		{
			id: 'wordpress-agency-mastery',
			title: 'WordPress Custom & Freelance Agency Mastery',
			badge: 'Praktis Cuan',
			level: 'Pemula ke Menengah',
			duration: '4 Minggu Praktis',
			schedule: '2x Pertemuan Live / Minggu (Malam Hari)',
			batchInfo: 'Batch Baru Segera Dibuka (Maks. 12 Kursi)',
			summary:
				'Jalur tercepat untuk mulai menerima pesanan website klien (UMKM, sekolah, instansi, hingga toko online). Pelajari kustomisasi tema dari nol tanpa bloated page builder berat.',
			highlights: [
				'Arsitektur Tema Kustom WordPress & Template Hierarchy',
				'Custom Post Types (CPT) & Advanced Custom Fields (ACF)',
				'Toko Online WooCommerce, Payment Gateway Lokal, & Ongkir Otomatis',
				'Keamanan WordPress, Optimasi Kecepatan (PageSpeed 90+), & Backup',
				'SOP Negosiasi Klien, Pembuatan Proposal, & Penentuan Harga Layanan'
			],
			finalProjectTitle: 'Website Profil Perusahaan Korporat & Toko Online Lengkap',
			finalProjectDesc:
				'Dua proyek nyata: website company profile elegan yang mudah diedit klien dari dashboard admin, dan toko online WooCommerce siap transaksi.',
			techStack: ['WordPress Core', 'PHP Dasar', 'Custom Post Types', 'ACF Pro', 'WooCommerce', 'SEO'],
			badgeColor: 'sky'
		}
	];

	const academyFeatures = [
		{
			icon: '👥',
			title: 'Kelompok Kecil (Maks. 12 Peserta)',
			desc: 'Bukan webinar massal ratusan orang. Setiap peserta dikenal instruktur, disimak pertanyaannya, dan dipantau progres kodingnya secara langsung.'
		},
		{
			icon: '💻',
			title: 'Live Coding & Diskusi Dua Arah',
			desc: 'Sesi tatap muka online interaktif. Instruktur mempraktikkan koding di layar dan peserta langsung mencoba bersama, bertanya kapan pun ada yang belum jelas.'
		},
		{
			icon: '🔍',
			title: 'Personal Code Review Baris demi Baris',
			desc: 'Setiap tugas proyek direview layaknya di tim software engineer industri: penataan folder, clean code, efisiensi database, dan keamanan aplikasi.'
		},
		{
			icon: '🎥',
			title: 'Rekaman HD & Akses Selamanya',
			desc: 'Setiap pertemuan direkam dengan kualitas tinggi. Jika kamu berhalangan hadir atau ingin mengulang materi beberapa bulan ke depan, rekaman selalu tersedia.'
		},
		{
			icon: '🚀',
			title: 'Portofolio Produksi Siap Pamer',
			desc: 'Kamu tidak membangun proyek mainan tutorial. Semua proyek dirancang fungsional, terhubung ke internet dengan custom domain, dan siap diunggah ke CV.'
		},
		{
			icon: '🤝',
			title: 'Jejaring Alumni & Konsultasi Karier',
			desc: 'Bergabung dalam circle eksklusif pembelajar serius. Dapatkan arahan pembuatan profil GitHub, resume developer, dan tips freelance/interview kerja.'
		}
	];

	const comparisonRows = [
		{
			aspect: 'Biaya',
			kursus: 'Gratis & Terjangkau',
			bimbingan: '100% Gratis Selamanya',
			akademi: 'Investasi Terjangkau (Live Intensif)'
		},
		{
			aspect: 'Format Belajar',
			kursus: 'Mandiri (Self-paced) lewat artikel, roadmap, & modul',
			bimbingan: 'Pendampingan fleksibel via grup WhatsApp',
			akademi: 'Live class online terjadwal kelompok kecil (Google Meet)'
		},
		{
			aspect: 'Interaksi & Bimbingan',
			kursus: 'Tanya jawab komunitas umum',
			bimbingan: 'Chat harian di grup WhatsApp & panduan arah',
			akademi: 'Tatap muka live dua arah + Code Review 1-on-1'
		},
		{
			aspect: 'Jumlah Peserta',
			kursus: 'Tidak terbatas',
			bimbingan: 'Kelompok WhatsApp batch',
			akademi: 'Eksklusif (Maksimal 12 orang per batch)'
		},
		{
			aspect: 'Tujuan Akhir',
			kursus: 'Pemahaman konsep dasar & portofolio mandiri',
			bimbingan: 'Membangun kebiasaan koding & anti-stuck',
			akademi: 'Portofolio siap kerja berstandar industri & percepatan karier'
		}
	];

	const academyFaqs = [
		{
			q: 'Berapa jumlah peserta dalam satu kelas live di Baricode Akademi?',
			a: 'Kami membatasi secara ketat maksimal 8 hingga 12 orang per kelas. Hal ini bertujuan agar instruktur dapat memantau kode setiap peserta secara personal, memberi masukan langsung, dan memastikan tidak ada peserta yang tertinggal.'
		},
		{
			q: 'Bagaimana jika saya berhalangan hadir pada salah satu sesi live?',
			a: 'Tidak perlu khawatir. Seluruh sesi live direkam dengan kualitas HD dan diunggah ke portal peserta dalam waktu maksimal 24 jam. Kamu juga tetap bisa mengajukan pertanyaan terkait rekaman tersebut di grup diskusi privat peserta.'
		},
		{
			q: 'Apakah materi Akademi bisa diikuti oleh pemula?',
			a: 'Bisa! Kami memiliki jalur kelas yang dirancang bertahap. Namun, peserta disarankan sudah memahami dasar logika komputer atau telah membaca panduan pemula Baricode agar proses belajar live berlangsung lebih lancar dan optimal.'
		},
		{
			q: 'Kapan jadwal sesi pertemuan live biasanya diadakan?',
			a: 'Mayoritas pertemuan live dijadwalkan pada malam hari (pukul 19.30 - 21.30 WIB) atau akhir pekan, sehingga ramah bagi peserta yang berstatus pelajar, santri, mahasiswa, maupun karyawan yang sedang bekerja.'
		},
		{
			q: 'Apakah peserta akan mendapatkan sertifikat kelulusan?',
			a: 'Ya, setiap peserta yang menyelesaikan seluruh modul dan berhasil mengumpulkan proyek portofolio akhir yang memenuhi standar verifikasi instruktur akan mendapatkan Sertifikat Kelulusan Terverifikasi Baricode Indonesia.'
		},
		{
			q: 'Bagaimana cara mendaftar dan berapa investasinya?',
			a: 'Pendaftaran dibuka secara berkala per batch. Karena kuota kursi sangat terbatas (hanya 12 kursi), kamu bisa menghubungi kami melalui tombol WhatsApp untuk menanyakan jadwal batch terdekat, silabus lengkap, serta informasi biaya investasi yang sangat terjangkau.'
		}
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://www.baricode.org/akademi#webpage',
				url: 'https://www.baricode.org/akademi',
				name: 'Baricode Akademi — Live Class Intensif & Bootcamp Koding Kelompok Kecil',
				description:
					'Program live class online intensif kelompok kecil bersama instruktur praktisi Baricode Indonesia. Live coding, code review 1-on-1, portofolio nyata berstandar industri, dan rekaman kelas selamanya.',
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
							name: 'Akademi',
							item: 'https://www.baricode.org/akademi'
						}
					]
				}
			},
			{
				'@type': 'ItemList',
				name: 'Daftar Kelas Baricode Akademi',
				itemListElement: cohorts.map((c, idx) => ({
					'@type': 'Course',
					position: idx + 1,
					name: c.title,
					description: c.summary,
					provider: {
						'@type': 'Organization',
						name: 'Baricode Indonesia',
						sameAs: 'https://www.baricode.org'
					}
				}))
			},
			{
				'@type': 'FAQPage',
				'@id': 'https://www.baricode.org/akademi#faq',
				mainEntity: academyFaqs.map((faq) => ({
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

	function getWaInquiryUrl(courseTitle: string) {
		const message = encodeURIComponent(
			`Halo Tim Baricode! Saya tertarik untuk mendaftar kelas "${courseTitle}" di Baricode Akademi. Boleh info jadwal batch terbaru, silabus, dan ketersediaan kursinya?`
		);
		return `https://wa.me/${siteConfig.contactWhatsapp}?text=${message}`;
	}

	const waGeneralAcademyUrl = `https://wa.me/${siteConfig.contactWhatsapp}?text=${encodeURIComponent(
		'Halo Tim Baricode! Saya ingin bertanya dan konsultasi mengenai program live class Baricode Akademi.'
	)}`;
</script>

<svelte:head>
	<title>Baricode Akademi — Live Class Intensif &amp; Bootcamp Koding Kelompok Kecil</title>
	<meta
		name="description"
		content="Program live class online intensif kelompok kecil bersama instruktur praktisi Baricode Indonesia. Live coding, code review 1-on-1, portofolio standar industri, dan rekaman kelas seumur hidup."
	/>
	<meta
		name="keywords"
		content="akademi koding, live class web developer, bootcamp laravel kelompok kecil, kursus svelte react live, belajar koding intensif instruktur, baricode akademi"
	/>
	<link rel="canonical" href="https://www.baricode.org/akademi" />

	<!-- Open Graph / WhatsApp Sharing -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Baricode Akademi — Live Class Intensif &amp; Bootcamp Koding Kelompok Kecil"
	/>
	<meta
		property="og:description"
		content="Belajar koding tatap muka langsung bersama instruktur. Kelompok kecil maks 12 orang, code review 1-on-1, dan portofolio nyata."
	/>
	<meta property="og:url" content="https://www.baricode.org/akademi" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Baricode Akademi — Live Class Intensif &amp; Bootcamp Koding Kelompok Kecil"
	/>
	<meta
		name="twitter:description"
		content="Program live class online intensif kelompok kecil bersama instruktur praktisi Baricode Indonesia."
	/>

	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="relative overflow-hidden pb-16">
	<!-- Ambient Background Light -->
	<div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
		<div
			class="absolute -top-32 left-1/2 h-[35rem] w-[50rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-500/10 via-rose-500/5 to-transparent blur-[140px] dark:from-sky-600/15 dark:via-rose-600/5"
		></div>
		<div
			class="absolute top-1/2 -right-48 h-[25rem] w-[25rem] rounded-full bg-red-500/10 blur-[130px] dark:bg-red-600/10"
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
				Baricode Akademi
			</li>
		</ol>
	</nav>

	<!-- Hero Section -->
	<section class="mx-auto max-w-5xl px-6 pt-6 pb-16 text-center">
		<!-- Pill Badge -->
		<div
			class="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-600 shadow-xs backdrop-blur-md dark:border-sky-500/30 dark:bg-sky-500/15 dark:text-sky-300"
		>
			<span class="inline-block size-2 animate-pulse rounded-full bg-sky-500"></span>
			<span>🎓 Live Class Interaktif • Kelompok Kecil (Maks. 12 Peserta) • Code Review 1-on-1</span>
		</div>

		<!-- Main Heading -->
		<h1
			class="mx-auto mt-6 max-w-3xl text-3xl leading-[1.15] font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
		>
			Akselerasi Karier Kodingmu Lewat
			<span
				class="bg-gradient-to-r from-red-600 via-rose-500 to-sky-500 bg-clip-text text-transparent dark:from-red-400 dark:via-rose-400 dark:to-sky-300"
			>
				Live Class Intensif Bersama Praktisi
			</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300"
		>
			Bukan sekadar menonton rekaman video pasif. Di <strong>Baricode Akademi</strong>, kamu belajar
			langsung tatap muka secara online dalam kelompok kecil, mendapatkan review kode baris demi baris,
			dan membangun proyek berstandar industri hingga online ke internet.
		</p>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="#daftar-kelas"
				class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/25 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
			>
				<span>Lihat Pilihan Kelas Akademi</span>
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
				href={waGeneralAcademyUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-emerald-500/50 hover:bg-emerald-50/50 hover:text-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-emerald-500/50 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-400"
			>
				<span class="inline-block size-2 rounded-full bg-emerald-500"></span>
				<span>Konsultasi Batch di WhatsApp</span>
			</a>
		</div>

		<!-- Highlights Grid -->
		<div class="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-rose-600 dark:text-rose-400">12 Kursi</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Kelompok Kecil</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Eksklusif dan personal, instruktur memantau kemajuan setiap peserta.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-sky-600 dark:text-sky-400">100% Live</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Interaktif 2 Arah</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Live coding, diskusi interaktif, dan tanya jawab langsung tanpa ragu.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-amber-600 dark:text-amber-400">1-on-1</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Code Review</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Koreksi arsitektur kode dan best practices standar industri software.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-emerald-600 dark:text-emerald-400">Lifetime</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Akses Rekaman HD</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Rekaman setiap sesi bisa ditonton ulang kapan saja tanpa batasan waktu.
				</p>
			</div>
		</div>
	</section>

	<!-- Keunggulan Akademi -->
	<section class="mx-auto max-w-5xl px-6 py-16">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Keunggulan Program
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Mengapa Belajar di Baricode Akademi?
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Kami merancang Akademi untuk memberikan lompatan kemampuan nyata dalam waktu yang terukur.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each academyFeatures as feat}
				<div
					class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
				>
					<span
						class="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
					>
						{feat.icon}
					</span>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">{feat.title}</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">{feat.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Daftar Kelas Akademi -->
	<section id="daftar-kelas" class="mx-auto max-w-5xl px-6 py-16">
		<div class="text-center">
			<span
				class="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
			>
				🔥 Upcoming Cohorts
			</span>
			<h2
				class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Pilihan Program Kelas Baricode Akademi
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Pilih bidang keahlian yang ingin kamu kuasai secara mendalam bersama instruktur praktisi.
			</p>
		</div>

		<div class="mt-12 space-y-8">
			{#each cohorts as cohort}
				<article
					class="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white/90 p-7 shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:border-zinc-800/90 dark:bg-zinc-900/70"
				>
					<div class="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-5 dark:border-zinc-800">
						<div class="flex flex-wrap items-center gap-2">
							<span
								class="rounded-full px-3 py-1 text-xs font-bold
								{cohort.badgeColor === 'red'
									? 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400'
									: ''}
								{cohort.badgeColor === 'indigo'
									? 'bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400'
									: ''}
								{cohort.badgeColor === 'sky'
									? 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400'
									: ''}"
							>
								{cohort.badge}
							</span>
							<span class="text-xs text-slate-500 dark:text-zinc-400">
								Tingkat: <strong class="text-slate-800 dark:text-zinc-200">{cohort.level}</strong>
							</span>
						</div>

						<div class="flex items-center gap-3 text-xs font-medium text-slate-600 dark:text-zinc-300">
							<span class="inline-flex items-center gap-1">
								<svg class="size-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								{cohort.duration}
							</span>
							<span class="text-slate-300 dark:text-zinc-700">•</span>
							<span>{cohort.schedule}</span>
						</div>
					</div>

					<div class="mt-6 grid gap-8 lg:grid-cols-12">
						<div class="lg:col-span-7">
							<h3 class="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl dark:text-white">
								{cohort.title}
							</h3>
							<p class="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-300">
								{cohort.summary}
							</p>

							<div class="mt-5 space-y-2">
								<p class="text-[11px] font-semibold tracking-wider text-slate-500 uppercase dark:text-zinc-400">
									Materi Kurikulum Utama:
								</p>
								<ul class="space-y-1.5 text-xs text-slate-600 dark:text-zinc-300">
									{#each cohort.highlights as h}
										<li class="flex items-start gap-2">
											<svg
												class="mt-0.5 size-3.5 shrink-0 text-rose-500 dark:text-rose-400"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="2.5"
												stroke="currentColor"
											>
												<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
											</svg>
											<span>{h}</span>
										</li>
									{/each}
								</ul>
							</div>
						</div>

						<div class="flex flex-col justify-between rounded-2xl border border-slate-100 bg-slate-50/80 p-5 lg:col-span-5 dark:border-zinc-800/80 dark:bg-zinc-800/30">
							<div>
								<span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 uppercase dark:text-zinc-400">
									🎯 Proyek Portofolio Akhir
								</span>
								<h4 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">
									{cohort.finalProjectTitle}
								</h4>
								<p class="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
									{cohort.finalProjectDesc}
								</p>

								<div class="mt-4 flex flex-wrap gap-1.5">
									{#each cohort.techStack as tech}
										<span
											class="rounded-md border border-slate-200 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
										>
											{tech}
										</span>
									{/each}
								</div>
							</div>

							<div class="mt-6 border-t border-slate-200/80 pt-4 dark:border-zinc-700/80">
								<div class="mb-3 flex items-center justify-between text-xs">
									<span class="font-medium text-emerald-600 dark:text-emerald-400">
										● {cohort.batchInfo}
									</span>
								</div>
								<a
									href={getWaInquiryUrl(cohort.title)}
									target="_blank"
									rel="noopener noreferrer"
									class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
								>
									<span>Daftar / Konsultasi Silabus</span>
									<span aria-hidden="true">&rarr;</span>
								</a>
							</div>
						</div>
					</div>
				</article>
			{/each}
		</div>
	</section>

	<!-- Perbandingan 3 Format Belajar -->
	<section class="border-y border-slate-200/80 bg-slate-100/60 py-16 dark:border-zinc-800/80 dark:bg-zinc-900/40">
		<div class="mx-auto max-w-5xl px-6">
			<div class="text-center">
				<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
					Komparasi Program
				</p>
				<h2
					class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Pilih Format yang Paling Tepat Bagimu
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
					Bandingkan fitur antara Kursus Mandiri, Bimbingan Komunitas, dan Akademi Intensif.
				</p>
			</div>

			<div class="mt-10 overflow-x-auto rounded-3xl border border-slate-200/90 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
				<table class="w-full text-left text-xs sm:text-sm">
					<thead>
						<tr class="border-b border-slate-200 bg-slate-50 dark:border-zinc-800 dark:bg-zinc-800/50">
							<th class="p-4 font-bold text-slate-900 dark:text-white">Aspek</th>
							<th class="p-4 font-bold text-slate-900 dark:text-white">
								<a href="/kursus" class="hover:underline">Kursus Mandiri</a>
							</th>
							<th class="p-4 font-bold text-slate-900 dark:text-white">
								<a href="/bimbingan" class="hover:underline">Baricode Bimbingan</a>
							</th>
							<th class="p-4 font-bold text-rose-600 dark:text-rose-400">
								Baricode Akademi
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-slate-100 dark:divide-zinc-800/80">
						{#each comparisonRows as row}
							<tr class="transition hover:bg-slate-50/50 dark:hover:bg-zinc-800/30">
								<td class="p-4 font-semibold text-slate-900 dark:text-white">{row.aspect}</td>
								<td class="p-4 text-slate-600 dark:text-zinc-300">{row.kursus}</td>
								<td class="p-4 text-slate-600 dark:text-zinc-300">{row.bimbingan}</td>
								<td class="p-4 font-medium text-slate-900 dark:text-zinc-100">{row.akademi}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="mx-auto max-w-4xl px-6 py-20">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Tanya Jawab
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Pertanyaan Seputar Baricode Akademi
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Informasi penting seputar pelaksanaan kelas live, rekaman, dan sertifikat.
			</p>
		</div>

		<div class="mt-10 divide-y divide-slate-200/80 border-t border-slate-200/80 dark:divide-zinc-800 dark:border-zinc-800">
			{#each academyFaqs as faq, index}
				<details class="group py-5" open={openFaqIndex === index}>
					<summary
						onclick={(e) => {
							e.preventDefault();
							toggleFaq(index);
						}}
						class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-slate-900 transition hover:text-rose-600 focus:outline-none sm:text-base dark:text-white dark:hover:text-rose-400"
					>
						<span>{faq.q}</span>
						<span
							class="flex size-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-xs transition-transform duration-200 group-hover:bg-rose-500/10 group-hover:text-rose-600 dark:bg-zinc-800 dark:group-hover:bg-rose-500/20 dark:group-hover:text-rose-400 {openFaqIndex ===
							index
								? 'rotate-45 bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'
								: ''}"
						>
							<svg
								class="size-3.5"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2.5"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</span>
					</summary>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm dark:text-zinc-400">
						{faq.a}
					</p>
				</details>
			{/each}
		</div>
	</section>

	<!-- CTA Section -->
	<section class="mx-auto max-w-5xl px-6 pb-16">
		<div
			class="relative overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-slate-900 via-[#0B0F17] to-slate-950 p-8 text-center text-white shadow-2xl sm:p-14 dark:border-sky-500/20"
		>
			<div class="relative z-10 mx-auto max-w-2xl">
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-sky-500/20 px-3.5 py-1 text-xs font-semibold text-sky-300 backdrop-blur-md"
				>
					⚡ Kuota Terbatas Maksimal 12 Kursi per Batch
				</span>
				<h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
					Siap Melakukan Lompatan Karier Kodingmu?
				</h2>
				<p class="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
					Konsultasikan tujuan belajarmu dengan tim instruktur kami di WhatsApp. Kami siap membantumu
					memilih kelas yang paling tepat untuk mempercepat portofoliomu.
				</p>

				<div class="mt-8 flex flex-wrap justify-center gap-3">
					<a
						href={waGeneralAcademyUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
					>
						<svg class="size-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
						<span>Tanya Jadwal &amp; Reservasi Kursi</span>
					</a>
					<a
						href="/bimbingan"
						class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<span>Lihat Opsi Bimbingan Gratis</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Jelajahi Opsi Lain: Kursus & Bimbingan -->
	<section class="mx-auto max-w-5xl px-6 pb-20">
		<div class="mb-8 text-center">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white">
				Jelajahi Pilihan Program Lainnya
			</h3>
			<p class="mt-1 text-xs text-slate-600 sm:text-sm dark:text-zinc-400">
				Temukan ekosistem belajar yang paling pas dengan kesibukan dan ritmemu.
			</p>
		</div>

		<div class="grid gap-6 sm:grid-cols-2">
			<!-- Link to Kursus -->
			<a
				href="/kursus"
				class="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
			>
				<div>
					<span
						class="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
					>
						📚
					</span>
					<span
						class="mt-3 inline-block text-[11px] font-bold tracking-wider text-amber-600 uppercase dark:text-amber-400"
					>
						Belajar Mandiri
					</span>
					<h4 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
						Katalog Kursus &amp; Jalur Belajar
					</h4>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Pelajari kurikulum terstruktur langkah demi langkah: Dasar Logika, Web Modern, Fullstack
						Laravel, hingga WordPress Freelance.
					</p>
				</div>
				<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
					<span
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 transition group-hover:gap-2 dark:text-amber-400"
					>
						<span>Eksplorasi Katalog Kursus</span>
						<span aria-hidden="true">&rarr;</span>
					</span>
				</div>
			</a>

			<!-- Link to Bimbingan -->
			<a
				href="/bimbingan"
				class="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
			>
				<div>
					<span
						class="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
					>
						🤝
					</span>
					<span
						class="mt-3 inline-block text-[11px] font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400"
					>
						100% Gratis
					</span>
					<h4 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
						Baricode Bimbingan (WhatsApp)
					</h4>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Pendampingan belajar koding mandiri gratis via grup WhatsApp. Menjaga arah dan
						akuntabilitas belajarmu tanpa kelas kaku.
					</p>
				</div>
				<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
					<span
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition group-hover:gap-2 dark:text-rose-400"
					>
						<span>Pelajari Program Bimbingan</span>
						<span aria-hidden="true">&rarr;</span>
					</span>
				</div>
			</a>
		</div>
	</section>
</div>
