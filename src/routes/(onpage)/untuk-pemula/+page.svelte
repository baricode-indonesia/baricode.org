<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const faqs = [
		{
			q: 'Apakah orang tanpa latar belakang IT atau non-teknik bisa belajar coding?',
			a: 'Bisa sekali! Mayoritas programmer profesional saat ini adalah pembelajar mandiri (otodidak) yang berlatar belakang non-teknik—seperti santri, lulusan IPS, akuntansi, bahasa, hingga para pekerja yang beralih karier (career switcher). Kunci utama belajar koding adalah ketekunan melatih logika pemecahan masalah (problem solving), bukan ijazah formal.'
		},
		{
			q: 'Apakah harus jago matematika dan bahasa Inggris untuk bisa koding?',
			a: 'Tidak perlu jago matematika rumit seperti kalkulus. Kemampuan berhitung dasar (tambah, kurang, kali, bagi, dan logika perbandingan sederhana) sudah lebih dari cukup untuk membuat website dan aplikasi. Untuk bahasa Inggris, kamu cukup memahami kosakata teknis dasar sehari-hari (seperti if, else, loop, function) yang akan terbiasa dengan sendirinya seiring praktik.'
		},
		{
			q: 'Berapa spesifikasi laptop minimum untuk mulai belajar coding?',
			a: 'Untuk mulai belajar dasar pemrograman web (HTML, CSS, JavaScript) atau Python dasar, laptop sederhana dengan prosesor Dual Core, RAM 4GB, dan penyimpanan standar sudah sangat mencukupi. Kamu bahkan bisa menggunakan tools editor gratis yang ringan seperti VS Code atau editor online di browser tanpa perlu membeli laptop mahal.'
		},
		{
			q: 'Bahasa pemrograman apa yang paling cocok dipelajari pertama kali?',
			a: 'Bagi pemula, kombinasi HTML, CSS, dan JavaScript (Pengembangan Web) atau Python adalah pilihan terbaik. Pengembangan web memungkinkan kamu langsung melihat hasil karya secara visual di browser, sementara Python memiliki sintaks yang sangat bersih dan mudah dibaca mirip bahasa Inggris sehari-hari.'
		},
		{
			q: 'Berapa lama waktu yang dibutuhkan seorang pemula sampai bisa membuat aplikasi sendiri?',
			a: 'Dengan komitmen belajar konsisten 30–60 menit per hari secara terarah, dalam kurun waktu 1 hingga 3 bulan kamu sudah bisa membuat website profil interaktif, kalkulator sederhana, atau aplikasi catatan to-do list sendiri. Kuncinya adalah rajin mempraktikkan proyek mini ketimbang hanya menonton video.'
		}
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://www.baricode.org/untuk-pemula#webpage',
				'url': 'https://www.baricode.org/untuk-pemula',
				'name': 'Panduan Belajar Coding & IT dari Nol untuk Pemula — Baricode Indonesia',
				'description': 'Panduan lengkap belajar coding dan IT dari nol untuk pemula & pembelajar otodidak. Temukan tahapan belajar, pilihan bahasa pemrograman, tips anti-stuck, dan roadmap gratis!',
				'inLanguage': 'id-ID',
				'isPartOf': {
					'@type': 'WebSite',
					'@id': 'https://www.baricode.org/#website',
					'name': 'Baricode Indonesia',
					'url': 'https://www.baricode.org'
				},
				'breadcrumb': {
					'@type': 'BreadcrumbList',
					'itemListElement': [
						{
							'@type': 'ListItem',
							'position': 1,
							'name': 'Beranda',
							'item': 'https://www.baricode.org'
						},
						{
							'@type': 'ListItem',
							'position': 2,
							'name': 'Untuk Pemula',
							'item': 'https://www.baricode.org/untuk-pemula'
						}
					]
				}
			},
			{
				'@type': 'FAQPage',
				'@id': 'https://www.baricode.org/untuk-pemula#faq',
				'mainEntity': faqs.map((faq) => ({
					'@type': 'Question',
					'name': faq.q,
					'acceptedAnswer': {
						'@type': 'Answer',
						'text': faq.a
					}
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Panduan Belajar Coding &amp; IT dari Nol untuk Pemula — Baricode Indonesia</title>
	<meta
		name="description"
		content="Panduan lengkap belajar coding &amp; IT dari nol untuk pemula &amp; pembelajar mandiri. Temukan tahapan belajar terstruktur, rekomendasi bahasa pemrograman, tips anti-stuck, dan roadmap gratis!"
	/>
	<meta
		name="keywords"
		content="belajar coding pemula, belajar pemrograman dari nol, panduan IT otodidak, cara belajar coding tanpa laptop mahal, roadmap belajar web developer pemula, baricode indonesia"
	/>
	<link rel="canonical" href="https://www.baricode.org/untuk-pemula" />

	<!-- Open Graph / Social Sharing -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content="Panduan Belajar Coding &amp; IT dari Nol untuk Pemula — Baricode Indonesia" />
	<meta
		property="og:description"
		content="Panduan lengkap belajar coding &amp; IT dari nol untuk pemula. Belajar dari kamar kecil atau kondisi paling terbatas sekalipun bukan penghalang."
	/>
	<meta property="og:url" content="https://www.baricode.org/untuk-pemula" />
	<meta property="og:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Panduan Belajar Coding &amp; IT dari Nol untuk Pemula — Baricode Indonesia" />
	<meta
		name="twitter:description"
		content="Panduan lengkap belajar coding &amp; IT dari nol untuk pemula &amp; pembelajar mandiri. Belajar bertahap, membumi, dan terarah."
	/>
	<meta name="twitter:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- JSON-LD Structured Data for Google Rich Snippets -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
	<!-- Breadcrumb Navigation -->
	<nav aria-label="Breadcrumb" class="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
		<a href="/" class="transition hover:text-rose-600 dark:hover:text-rose-400">Beranda</a>
		<span>/</span>
		<span class="text-slate-800 dark:text-zinc-200">Untuk Pemula</span>
	</nav>

	<!-- Hero Header -->
	<header class="text-left">
		<div class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-600 dark:text-rose-300 backdrop-blur">
			<span>💡</span>
			<span>Panduan Pemula &amp; Pembelajar Mandiri</span>
		</div>

		<h1 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-tight">
			Panduan Belajar Coding &amp; IT <br class="hidden sm:inline" />
			<span class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-400 dark:via-rose-400 dark:to-amber-300 bg-clip-text text-transparent">
				dari Nol untuk Pemula
			</span>
		</h1>

		<p class="mt-5 text-base leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-lg">
			Siapa saja bisa jago coding. Belajar dari kamar kecil, laptop jadul, atau tanpa latar belakang sekolah IT bukan penghalang untuk menguasai keterampilan digital masa depan. Di Baricode Indonesia, kami menyusun panduan ini agar langkah pertamamu terasa ringan, realistis, dan membumi.
		</p>

		<!-- Highlight Pills / Feature Badges -->
		<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
			<div class="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<div class="text-xl">🔰</div>
				<div class="mt-1 text-xs font-bold text-slate-900 dark:text-white">Mulai dari Titik Nol</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Tanpa syarat ijazah IT</div>
			</div>
			<div class="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<div class="text-xl">💻</div>
				<div class="mt-1 text-xs font-bold text-slate-900 dark:text-white">Laptop Sederhana Cukup</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">RAM 4GB sudah bisa</div>
			</div>
			<div class="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<div class="text-xl">🗺️</div>
				<div class="mt-1 text-xs font-bold text-slate-900 dark:text-white">Jalur Terstruktur</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Bebas tutorial hell</div>
			</div>
			<div class="rounded-xl border border-slate-200/80 bg-white/70 p-3.5 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<div class="text-xl">🤝</div>
				<div class="mt-1 text-xs font-bold text-slate-900 dark:text-white">Komunitas Suportif</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Diskusi &amp; tanya jawab</div>
			</div>
		</div>

		<!-- Quick Jump Menu / Table of Contents -->
		<div class="mt-8 rounded-2xl border border-slate-200/80 bg-slate-100/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/40">
			<p class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Daftar Isi Panduan:</p>
			<div class="mt-2.5 flex flex-wrap gap-2 text-xs">
				<a href="#mitos-fakta" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					1. Mitos vs Fakta
				</a>
				<a href="#roadmap-belajar" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					2. Roadmap 4 Langkah
				</a>
				<a href="#pilihan-bahasa" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					3. Pilihan Bahasa
				</a>
				<a href="#tips-otodidak" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					4. Tips Belajar Otodidak
				</a>
				<a href="#rekomendasi-materi" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					5. Rekomendasi Materi
				</a>
				<a href="#faq-pemula" class="rounded-lg bg-white px-3 py-1.5 font-medium text-slate-700 shadow-xs transition hover:text-rose-600 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:text-white">
					6. Tanya Jawab (FAQ)
				</a>
			</div>
		</div>
	</header>

	<div class="mt-14 space-y-16">
		<!-- SECTION 1: Mitos vs Fakta -->
		<section id="mitos-fakta" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>01</span>
				<span>•</span>
				<span>Mitos vs Fakta</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				3 Mitos Keliru yang Sering Menghambat Pemula
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Banyak calon pembelajar yang mundur sebelum mencoba hanya karena mendengar mitos-mitos yang menakutkan. Mari kita luruskan faktanya agar kamu bisa melangkah dengan percaya diri.
			</p>

			<div class="mt-6 grid gap-4 sm:grid-cols-3">
				<!-- Mitos 1 -->
				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div class="inline-flex rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
						Mitos #1
					</div>
					<h3 class="mt-2 text-base font-bold text-slate-900 dark:text-white">Harus Jago Matematika Rumit</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-500 line-through dark:text-zinc-500">
						"Kalau nilai matematika jeblok, nggak bakalan bisa jadi programmer."
					</p>
					<div class="mt-3 border-t border-slate-100 pt-3 dark:border-zinc-800/60">
						<p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">✅ Faktanya:</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Coding 90% adalah <strong>logika pemecahan masalah sehari-hari</strong>. Untuk membangun website dan aplikasi umum, matematika yang dipakai hanyalah aritmatika dasar (tambah, kurang, kali, bagi).
						</p>
					</div>
				</div>

				<!-- Mitos 2 -->
				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div class="inline-flex rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
						Mitos #2
					</div>
					<h3 class="mt-2 text-base font-bold text-slate-900 dark:text-white">Wajib Punya Laptop Spek Dewa</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-500 line-through dark:text-zinc-500">
						"Harus beli laptop gaming belasan juta dulu baru bisa ngoding."
					</p>
					<div class="mt-3 border-t border-slate-100 pt-3 dark:border-zinc-800/60">
						<p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">✅ Faktanya:</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Belajar dasar pemrograman web (HTML, CSS, JS) atau Python hanya butuh <strong>laptop sederhana (RAM 4GB)</strong> dan editor teks ringan. Kami pun memulai dari perangkat yang serba terbatas.
						</p>
					</div>
				</div>

				<!-- Mitos 3 -->
				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div class="inline-flex rounded-md bg-rose-100 px-2 py-0.5 text-[11px] font-bold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">
						Mitos #3
					</div>
					<h3 class="mt-2 text-base font-bold text-slate-900 dark:text-white">Harus Kuliah Jurusan Komputer</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-500 line-through dark:text-zinc-500">
						"Anak pesantren, SMK non-IT, atau jurusan IPS tidak punya peluang."
					</p>
					<div class="mt-3 border-t border-slate-100 pt-3 dark:border-zinc-800/60">
						<p class="text-xs font-semibold text-emerald-600 dark:text-emerald-400">✅ Faktanya:</p>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Industri teknologi mengutamakan <strong>portofolio karya nyata dan bukti kemampuan</strong> dibanding secarik ijazah. Ribuan programmer sukses berasal dari latar belakang otodidak.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 2: Roadmap 4 Langkah -->
		<section id="roadmap-belajar" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>02</span>
				<span>•</span>
				<span>Alur Belajar Ideal</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				Roadmap 4 Langkah: Belajar Coding dari Titik Nol
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Kesalahan nomor satu pemula adalah langsung mempelajari framework atau teknologi canggih tanpa memahami dasar-dasarnya. Ikuti tahapan bertahap ini agar fondasimu kuat dan tidak mudah bingung di tengah jalan:
			</p>

			<div class="mt-8 space-y-6">
				<!-- Step 1 -->
				<div class="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-lg font-bold text-white shadow-md shadow-red-500/20">
							1
						</div>
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">Pahami Pola Pikir Komputer &amp; Algoritma Dasar</h3>
								<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">Pondasi</span>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
								Komputer itu cerdas namun kaku; ia hanya mengeksekusi instruksi langkah demi langkah. Di tahap awal, kenali konsep paling mendasar: apa itu <strong>variabel</strong> (wadah data), <strong>tipe data</strong> (angka, teks, boolean), <strong>kondisi</strong> (if/else), dan <strong>perulangan</strong> (loop).
							</p>
							<div class="mt-3 flex items-center gap-2 text-xs">
								<span class="font-medium text-slate-500 dark:text-zinc-400">Materi terkait:</span>
								<a
									href="/artikel/algoritma-dan-pemrograman-panduan-dasar-cara-mudah-memahaminya-bagi-pemula"
									class="font-semibold text-rose-600 hover:underline dark:text-rose-400"
								>
									Panduan Algoritma &amp; Pemrograman untuk Pemula &rarr;
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Step 2 -->
				<div class="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-lg font-bold text-white shadow-md shadow-red-500/20">
							2
						</div>
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">Kuasai Pondasi Web: HTML, CSS, dan JavaScript</h3>
								<span class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-medium text-rose-700 dark:bg-rose-950/60 dark:text-rose-300">Rekomendasi Utama</span>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
								Web adalah gerbang paling ramah bagi pemula karena kamu bisa langsung melihat hasil kodemu di layar browser secara instan:
							</p>
							<ul class="mt-2.5 grid gap-2 text-xs text-slate-600 dark:text-zinc-300 sm:grid-cols-3">
								<li class="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 dark:border-zinc-800 dark:bg-zinc-800/40">
									<strong class="text-slate-900 dark:text-white">HTML:</strong> Tulang &amp; struktur halaman (judul, paragraf, gambar, tombol).
								</li>
								<li class="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 dark:border-zinc-800 dark:bg-zinc-800/40">
									<strong class="text-slate-900 dark:text-white">CSS:</strong> Pakaian &amp; estetika (warna latar, tata letak, ukuran font, responsif HP).
								</li>
								<li class="rounded-lg border border-slate-100 bg-slate-50/50 p-2.5 dark:border-zinc-800 dark:bg-zinc-800/40">
									<strong class="text-slate-900 dark:text-white">JavaScript:</strong> Otak &amp; interaktivitas (animasi, klik tombol, kalkulasi data dinamis).
								</li>
							</ul>
							<div class="mt-3 flex items-center gap-2 text-xs">
								<span class="font-medium text-slate-500 dark:text-zinc-400">Materi terkait:</span>
								<a
									href="/artikel/panduan-lengkap-memahami-html-dan-css-untuk-pemula"
									class="font-semibold text-rose-600 hover:underline dark:text-rose-400"
								>
									Panduan Lengkap Memahami HTML dan CSS &rarr;
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Step 3 -->
				<div class="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-lg font-bold text-white shadow-md shadow-red-500/20">
							3
						</div>
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">Bangun Proyek Nyata Mini (Keluar dari Tutorial Hell)</h3>
								<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">Praktek Kritis</span>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
								<em>Tutorial Hell</em> adalah kondisi ketika kamu merasa paham saat menonton video tutorial, namun langsung macet saat membuka editor kosong. Cara mengatasinya: segera buat proyek mandiri sederhana tanpa mencontek baris per baris.
							</p>
							<div class="mt-2.5 rounded-lg border border-slate-100 bg-slate-50/50 p-3 text-xs text-slate-600 dark:border-zinc-800 dark:bg-zinc-800/40 dark:text-zinc-300">
								<span class="font-bold text-slate-900 dark:text-white">💡 Ide Proyek Pemula yang Bagus:</span>
								Kalkulator sederhana, kartu biodata interaktif (link-in-bio personal), to-do list tugas sekolah, atau landing page katalog UMKM di desamu.
							</div>
						</div>
					</div>
				</div>

				<!-- Step 4 -->
				<div class="relative rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="flex flex-col gap-4 sm:flex-row sm:items-start">
						<div class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-rose-600 text-lg font-bold text-white shadow-md shadow-red-500/20">
							4
						</div>
						<div class="flex-1">
							<div class="flex flex-wrap items-center gap-2">
								<h3 class="text-lg font-bold text-slate-900 dark:text-white">Kuasai Git, GitHub, &amp; Manfaatkan AI Secara Bijak</h3>
								<span class="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:bg-zinc-800 dark:text-zinc-300">Modern Tools</span>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
								Simpan hasil kodemu di <strong>GitHub</strong> untuk membangun portofolio digital yang bisa dipamerkan ke calon klien atau pemberi kerja. Selain itu, pelajari cara memanfaatkan asisten AI (seperti ChatGPT atau Claude) untuk menjelaskan konsep yang rumit atau mencari penyebab bug—bukan untuk copy-paste membabi buta.
							</p>
							<div class="mt-3 flex items-center gap-2 text-xs">
								<span class="font-medium text-slate-500 dark:text-zinc-400">Materi terkait:</span>
								<a
									href="/artikel/vibe-coding-pemula"
									class="font-semibold text-rose-600 hover:underline dark:text-rose-400"
								>
									Vibe Coding untuk Pemula: Ngoding Santai Berbantuan AI &rarr;
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION 3: Pilihan Bahasa -->
		<section id="pilihan-bahasa" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>03</span>
				<span>•</span>
				<span>Perbandingan Bahasa</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				Pilihan Bahasa Pemrograman: Mana yang Tepat untuk Kamu?
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Setiap bahasa pemrograman memiliki kelebihan dan kasus penggunaannya masing-masing. Jangan bingung, pilih yang paling sesuai dengan tujuanmu saat ini:
			</p>

			<div class="mt-6 grid gap-5 sm:grid-cols-2">
				<!-- Card 1: Web / JavaScript -->
				<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">🌐</span>
							<span class="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
								Paling Populer
							</span>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">JavaScript &amp; Web Development</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Bahasa nomor satu di jagat web. Jika kamu ingin membuat website interaktif, aplikasi SaaS, atau portal berita yang bisa diakses siapa saja lewat browser tanpa instalasi tambahan.
						</p>
						<div class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<div><strong>Tingkat kesulitan:</strong> ⭐⭐ (Mudah–Sedang)</div>
							<div><strong>Fokus:</strong> Frontend (tampilan pengguna), Fullstack (Node.js)</div>
						</div>
					</div>
					<div class="mt-5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
						<a
							href="/roadmap/web-frontend"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Buka Roadmap Web Frontend &rarr;
						</a>
					</div>
				</div>

				<!-- Card 2: Python -->
				<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">🐍</span>
							<span class="rounded-full bg-blue-100 px-2.5 py-0.5 text-[11px] font-semibold text-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
								Sangat Ramah Pemula
							</span>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">Python (Data, Otomasi &amp; AI)</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Memiliki sintaks yang sangat bersih dan mudah dibaca mirip kalimat bahasa Inggris. Sangat cocok bagi pemula yang tertarik dengan analisis data, script otomasi pekerjaan, atau machine learning.
						</p>
						<div class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<div><strong>Tingkat kesulitan:</strong> ⭐ (Sangat Mudah Dipahami)</div>
							<div><strong>Fokus:</strong> Otomasi tugas, Pengolahan Data, Kecerdasan Buatan</div>
						</div>
					</div>
					<div class="mt-5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
						<a
							href="/roadmap/pemrograman-dasar"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Buka Roadmap Pemrograman Dasar &rarr;
						</a>
					</div>
				</div>

				<!-- Card 3: PHP & Laravel -->
				<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">🐘</span>
							<span class="rounded-full bg-indigo-100 px-2.5 py-0.5 text-[11px] font-semibold text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300">
								Peluang Kerja Indonesia
							</span>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">PHP &amp; Framework Laravel</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Pilihan sangat membumi di Indonesia. Ribuan instansi, sekolah, pesantren, dan UMKM memakai PHP. Framework Laravel menawarkan struktur rapi, cepat dipelajari, dan biaya hosting yang sangat murah.
						</p>
						<div class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<div><strong>Tingkat kesulitan:</strong> ⭐⭐ (Praktis &amp; Terstruktur)</div>
							<div><strong>Fokus:</strong> Backend Web, Sistem Informasi, Aplikasi Kasir/Toko</div>
						</div>
					</div>
					<div class="mt-5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
						<a
							href="/roadmap/laravel"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Buka Roadmap Laravel Fullstack &rarr;
						</a>
					</div>
				</div>

				<!-- Card 4: Flutter & Mobile -->
				<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700">
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">📱</span>
							<span class="rounded-full bg-cyan-100 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-800 dark:bg-cyan-950/60 dark:text-cyan-300">
								Aplikasi Smartphone
							</span>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">Flutter &amp; Dart (Mobile App)</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Ingin karyamu langsung bisa dipasang di smartphone teman dan keluarga? Dengan Flutter, kamu menulis satu kode untuk langsung berjalan di Android dan iOS sekaligus dengan tampilan modern.
						</p>
						<div class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<div><strong>Tingkat kesulitan:</strong> ⭐⭐⭐ (Menengah)</div>
							<div><strong>Fokus:</strong> Aplikasi Android &amp; iOS, UI Interaktif</div>
						</div>
					</div>
					<div class="mt-5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
						<a
							href="/roadmap/flutter-mobile"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Buka Roadmap Flutter Mobile &rarr;
						</a>
					</div>
				</div>
			</div>

			<!-- Golden Rule Callout -->
			<div class="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5 text-amber-900 dark:text-amber-200">
				<p class="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">💡 Aturan Emas Baricode untuk Pemula:</p>
				<p class="mt-1 text-sm leading-relaxed">
					<strong>Pilihlah SATU bahasa terlebih dahulu dan tekuni sampai tuntas.</strong> Jangan berganti-ganti bahasa setiap minggu karena FOMO (takut ketinggalan tren). Fondasi pemrograman (variabel, kondisi, loop, fungsi) pada hakikatnya sama di semua bahasa. Saat kamu sudah mahir di satu bahasa, mempelajari bahasa lain akan terasa sangat mudah!
				</p>
			</div>
		</section>

		<!-- SECTION 4: Tips Belajar Otodidak -->
		<section id="tips-otodidak" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>04</span>
				<span>•</span>
				<span>Strategi Sukses</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				Tips Ampuh Belajar Coding Otodidak agar Tidak Cepat Menyerah
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Menjadi pembelajar mandiri tidak butuh bakat magis. Yang kamu butuhkan adalah strategi belajar yang tepat dan konsistensi harian:
			</p>

			<div class="mt-6 grid gap-4 sm:grid-cols-2">
				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="text-2xl">⏱️</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">1. Kebiasaan Kecil (30–60 Menit Rutin Tiap Hari)</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Belajar 45 menit setiap malam jauh lebih efektif dan membekas di otak dibandingkan memaksakan diri ngoding maraton 8 jam di hari Minggu lalu libur selama seminggu penuh. Otak kita butuh jeda istirahat tidur untuk mengendapkan memori baru.
					</p>
				</div>

				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="text-2xl">🧠</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">2. Pahami "Mengapa", Bukan Menghafal Sintaks</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Programmer handal bukan yang menghafal setiap kurung kurawal atau fungsi di luar kepala. Yang penting adalah memahami pola pikir dan logikanya. Bahkan senior engineer pun setiap hari masih membuka dokumentasi dan mencari referensi di Google.
					</p>
				</div>

				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="text-2xl">🚨</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">3. Bertemanlah dengan Pesan Error</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Ketika layarmu dipenuhi tulisan merah pesan error, jangan panik atau merasa tidak berbakat. Pesan error sebenarnya adalah petunjuk ramah dari komputer mengenai baris mana yang perlu diperbaiki. Baca pesannya, terjemahkan, dan selesaikan satu per satu.
					</p>
				</div>

				<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
					<div class="text-2xl">👥</div>
					<h3 class="mt-3 text-base font-bold text-slate-900 dark:text-white">4. Jangan Belajar Sendirian di Pojokan</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Ketika mengalami kendala yang buntu berjam-jam, seringkali hanya butuh satu sudut pandang orang lain untuk menemukan solusinya. Bergabunglah dengan komunitas seperti grup WhatsApp Baricode Indonesia agar bisa berdiskusi dan saling menguatkan.
					</p>
				</div>
			</div>
		</section>

		<!-- SECTION 5: Rekomendasi Sumber Belajar Baricode -->
		<section id="rekomendasi-materi" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>05</span>
				<span>•</span>
				<span>Sumber Belajar Baricode</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				Roadmap &amp; Artikel Rekomendasi untuk Pemula
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Kamu tidak perlu mencari bahan belajar ke mana-mana secara acak. Mulailah dari modul dan panduan yang sudah kami siapkan khusus untuk pemula:
			</p>

			<!-- Roadmaps Quick Grid -->
			<div class="mt-6 grid gap-4 sm:grid-cols-3">
				<a
					href="/roadmap/pemrograman-dasar"
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/40 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/40"
				>
					<span class="text-xs font-bold text-rose-600 dark:text-rose-400">Roadmap #1</span>
					<h3 class="mt-1 text-base font-bold text-slate-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
						Pemrograman Dasar
					</h3>
					<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
						Pelajari logika pemrograman, variabel, loop, fungsi, dan algoritma dari nol.
					</p>
				</a>

				<a
					href="/roadmap/web-frontend"
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/40 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/40"
				>
					<span class="text-xs font-bold text-rose-600 dark:text-rose-400">Roadmap #2</span>
					<h3 class="mt-1 text-base font-bold text-slate-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
						Web Frontend Developer
					</h3>
					<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
						Pelajari HTML, CSS, JavaScript modern, hingga framework tampilan web.
					</p>
				</a>

				<a
					href="/roadmap/backend-nodejs"
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/40 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/40"
				>
					<span class="text-xs font-bold text-rose-600 dark:text-rose-400">Roadmap #3</span>
					<h3 class="mt-1 text-base font-bold text-slate-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
						Backend Node.js &amp; API
					</h3>
					<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
						Membangun server, basis data, dan REST API untuk aplikasi nyata.
					</p>
				</a>
			</div>

			<!-- Articles & Glosarium Grid -->
			<div class="mt-6 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<h3 class="text-base font-bold text-slate-900 dark:text-white">Artikel &amp; Istilah Penting untuk Dibaca:</h3>
				<div class="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
					<a
						href="/artikel/panduan-lengkap-memahami-html-dan-css-untuk-pemula"
						class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-white hover:text-rose-600 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
					>
						<span class="text-base">📄</span>
						<div>
							<div class="font-semibold text-slate-800 dark:text-zinc-200">Panduan Lengkap Memahami HTML &amp; CSS</div>
							<div class="text-slate-500 dark:text-zinc-400">Mengenal struktur tag, selector CSS, dan tips membuat tampilan web.</div>
						</div>
					</a>

					<a
						href="/artikel/algoritma-dan-pemrograman-panduan-dasar-cara-mudah-memahaminya-bagi-pemula"
						class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-white hover:text-rose-600 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
					>
						<span class="text-base">📄</span>
						<div>
							<div class="font-semibold text-slate-800 dark:text-zinc-200">Algoritma &amp; Pemrograman Dasar</div>
							<div class="text-slate-500 dark:text-zinc-400">Cara mudah memahami logika pemrograman tanpa rumus membingungkan.</div>
						</div>
					</a>

					<a
						href="/artikel/vibe-coding-pemula"
						class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-white hover:text-rose-600 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
					>
						<span class="text-base">🤖</span>
						<div>
							<div class="font-semibold text-slate-800 dark:text-zinc-200">Vibe Coding untuk Pemula</div>
							<div class="text-slate-500 dark:text-zinc-400">Strategi ngoding santai dan produktif berbantuan AI masa kini.</div>
						</div>
					</a>

					<a
						href="/glosarium"
						class="flex items-start gap-2.5 rounded-xl border border-slate-100 bg-slate-50/50 p-3 transition hover:bg-white hover:text-rose-600 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800"
					>
						<span class="text-base">📚</span>
						<div>
							<div class="font-semibold text-slate-800 dark:text-zinc-200">Glosarium Istilah IT Baricode</div>
							<div class="text-slate-500 dark:text-zinc-400">Kamus istilah asing pemrograman (API, Bug, Git, Framework) dijelaskan sederhana.</div>
						</div>
					</a>
				</div>
			</div>
		</section>

		<!-- SECTION 6: FAQ (Pertanyaan yang Sering Diajukan) -->
		<section id="faq-pemula" class="scroll-mt-20">
			<div class="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
				<span>06</span>
				<span>•</span>
				<span>Tanya Jawab</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
				Pertanyaan yang Sering Diajukan Pemula (FAQ)
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Jawaban cepat dan lugas untuk pertanyaan yang paling sering mendarat di meja diskusi kami:
			</p>

			<div class="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white/80 px-6 backdrop-blur dark:divide-zinc-800/80 dark:border-zinc-800/80 dark:bg-zinc-900/60">
				{#each faqs as faq, index}
					<div class="py-5">
						<button
							type="button"
							onclick={() => toggleFaq(index)}
							class="flex w-full cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-slate-900 transition hover:text-rose-600 dark:text-white dark:hover:text-rose-400"
							aria-expanded={openFaqIndex === index}
						>
							<span>{faq.q}</span>
							<svg
								class={`size-5 shrink-0 text-slate-400 transition-transform duration-200 dark:text-zinc-400 ${openFaqIndex === index ? 'rotate-45 text-rose-600 dark:text-rose-400' : ''}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</button>
						{#if openFaqIndex === index}
							<div class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
								{faq.a}
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</section>

		<!-- Community Callout Box -->
		<div class="rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-amber-500/10 p-6 sm:p-8 backdrop-blur">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<span class="inline-block rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
						Komunitas Gratis Baricode
					</span>
					<h3 class="mt-2 text-xl font-bold text-slate-900 dark:text-white">
						Macet atau Punya Pertanyaan saat Belajar?
					</h3>
					<p class="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
						Kamu tidak harus memecahkan semuanya sendirian. Bergabunglah dengan ratusan pembelajar lain di grup WhatsApp Baricode Indonesia untuk berdiskusi, bertanya error, dan saling menyemangati.
					</p>
				</div>
				<a
					href="/whatsapp"
					class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-500"
				>
					<svg class="size-4 fill-current" viewBox="0 0 24 24">
						<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
					</svg>
					<span>Gabung Grup WhatsApp</span>
				</a>
			</div>
		</div>

		<!-- Bottom CTA Banner -->
		<div>
			<CtaBanner />
		</div>
	</div>
</div>
