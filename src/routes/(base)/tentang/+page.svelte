<script lang="ts">
	import BaricodeLogo from '$lib/components/BaricodeLogo.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { siteConfig } from '$lib/data/site';

	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const aboutFaqs = [
		{
			q: 'Mengapa Baricode mengusung konsep "belajar koding yang membumi"?',
			a: 'Banyak platform edukasi IT menggunakan istilah bahasa Inggris yang rumit, menuntut perangkat spesifikasi tinggi, atau memasang tarif bootcamp jutaan rupiah yang tidak terjangkau bagi sebagian besar anak muda. Baricode hadir untuk meruntuhkan stigma tersebut: kami menjelaskan materi dengan bahasa yang akrab, analogi dunia nyata yang sederhana, dan ramah untuk mereka yang memulai dengan fasilitas seadanya.'
		},
		{
			q: 'Apakah pemula dari desa, santri pesantren, atau lulusan non-IT bisa bergabung?',
			a: 'Sangat bisa dan justru itulah fokus kami. Baricode dibangun agar siapa pun—tanpa memandang latar belakang pendidikan formal, daerah asal, ataupun usia—dapat belajar teknologi secara percaya diri tanpa merasa minder.'
		},
		{
			q: 'Apa bedanya materi gratis, program Bimbingan, dan Akademi berbayar?',
			a: 'Artikel, glosarium, dan panduan roadmap di website kami 100% gratis untuk semua orang. Program Bimbingan adalah pendampingan belajar mandiri gratis via grup WhatsApp untuk menjaga konsistensi. Sedangkan Kursus & Akademi berbayar dirancang khusus bagi mereka yang membutuhkan kurikulum terstruktur intensif, live coding terjadwal, dan bimbingan mendalam untuk persiapan karier profesional.'
		},
		{
			q: 'Bagaimana cara mulai bergabung dengan ekosistem Baricode?',
			a: 'Kamu bisa memulainya sekarang juga: baca artikel dasar dan roadmap belajar di website ini, bergabung dengan komunitas di grup WhatsApp kami, atau mendaftarkan diri saat gelombang program Bimbingan dan kelas dibuka.'
		}
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'AboutPage',
				'@id': 'https://www.baricode.org/tentang#webpage',
				url: 'https://www.baricode.org/tentang',
				name: 'Tentang Baricode Indonesia — Akademi dan Komunitas IT yang Membumi',
				description:
					'Baricode Indonesia adalah akademi, kursus online, dan komunitas IT yang membumi — dibangun oleh dan untuk mereka yang belajar dari kondisi paling terbatas sekalipun.',
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
							name: 'Tentang Kami',
							item: 'https://www.baricode.org/tentang'
						}
					]
				}
			},
			{
				'@type': 'Organization',
				'@id': 'https://www.baricode.org/#organization',
				name: 'Baricode Indonesia',
				url: 'https://www.baricode.org',
				logo: 'https://www.baricode.org/og-image.jpg',
				email: siteConfig.contactEmail,
				sameAs: [siteConfig.socials.youtube],
				description:
					'Akademi dan kursus online IT yang membumi. Kami pun memulai semuanya dari kondisi paling terbatas sekalipun.'
			}
		]
	};
</script>

<svelte:head>
	<title>Tentang Baricode Indonesia — Akademi &amp; Komunitas IT Membumi</title>
	<meta
		name="description"
		content="Baricode Indonesia adalah akademi, kursus online, dan komunitas IT yang membumi — dibangun oleh dan untuk mereka yang belajar dari kondisi paling terbatas sekalipun."
	/>
	<meta
		name="keywords"
		content="tentang baricode indonesia, visi misi baricode, komunitas coding santri, belajar coding pemula desa, kursus IT membumi, bimbingan coding gratis"
	/>
	<link rel="canonical" href="https://www.baricode.org/tentang" />

	<!-- Open Graph / WhatsApp Sharing -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Tentang Baricode Indonesia — Akademi &amp; Komunitas IT Membumi"
	/>
	<meta
		property="og:description"
		content="Belajar koding tidak butuh kondisi sempurna. Baricode Indonesia hadir mendampingi pembelajar dari mana saja, meski dari kondisi paling terbatas sekalipun."
	/>
	<meta property="og:url" content="https://www.baricode.org/tentang" />
	<meta property="og:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Tentang Baricode Indonesia — Akademi &amp; Komunitas IT Membumi"
	/>
	<meta
		name="twitter:description"
		content="Belajar koding tidak butuh kondisi sempurna. Kami pun memulai semuanya dari sana."
	/>
	<meta name="twitter:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<!-- Breadcrumb Navigation -->
	<nav
		aria-label="Breadcrumb"
		class="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400"
	>
		<a href="/" class="transition hover:text-rose-600 dark:hover:text-rose-400">Beranda</a>
		<span>/</span>
		<span class="text-slate-800 dark:text-zinc-200">Tentang Kami</span>
	</nav>

	<!-- Hero Header -->
	<header class="text-left">
		<div
			class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-600 backdrop-blur dark:text-rose-300"
		>
			<span>🌱</span>
			<span>Manifesto &amp; Cerita Kami</span>
		</div>

		<h1
			class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl sm:leading-tight dark:text-white"
		>
			Belajar koding tidak butuh <br class="hidden sm:inline" />
			<span
				class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent dark:from-red-400 dark:via-rose-400 dark:to-amber-300"
			>
				kondisi sempurna.
			</span>
		</h1>

		<p
			class="mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300"
		>
			Baricode Indonesia adalah ruang belajar, akademi, dan komunitas IT yang membumi. Kami lahir
			dari kesadaran sederhana: banyak anak muda—pelajar, santri, pemuda desa, dan pembelajar
			otodidak—yang memiliki potensi besar namun minder karena keterbatasan akses, perangkat, atau
			latar belakang.
		</p>

		<!-- Highlight Badges -->
		<div class="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div class="text-2xl">🌱</div>
				<div class="mt-1.5 text-xs font-bold text-slate-900 dark:text-white">
					Membumi &amp; Humanis
				</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Tanpa istilah elitis</div>
			</div>
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div class="text-2xl">💻</div>
				<div class="mt-1.5 text-xs font-bold text-slate-900 dark:text-white">
					Fasilitas Seadanya
				</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Tak perlu laptop dewa</div>
			</div>
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div class="text-2xl">🤝</div>
				<div class="mt-1.5 text-xs font-bold text-slate-900 dark:text-white">Teman Bertumbuh</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Bukan sok menggurui</div>
			</div>
			<div
				class="rounded-xl border border-slate-200/80 bg-white/70 p-4 text-center shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<div class="text-2xl">🚀</div>
				<div class="mt-1.5 text-xs font-bold text-slate-900 dark:text-white">
					Arah &amp; Karya Nyata
				</div>
				<div class="text-[11px] text-slate-500 dark:text-zinc-400">Bebas tutorial hell</div>
			</div>
		</div>
	</header>

	<div class="mt-16 space-y-16">
		<!-- SECTION: Cerita & Latar Belakang -->
		<section
			class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-10 dark:border-zinc-800/80 dark:bg-zinc-900/60"
		>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>01</span>
				<span>•</span>
				<span>Latar Belakang &amp; Manifesto</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Kami Pun Memulai Semuanya dari Sana
			</h2>

			<div
				class="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300"
			>
				<p>
					Dunia teknologi sering kali dicitrakan dengan kemewahan: laptop keluaran terbaru bernilai
					puluhan juta, meja kerja minimalis serba modern, dan istilah-istilah bahasa asing tingkat
					tinggi yang terdengar rumit. Bagi sebagian besar anak muda di pelosok negeri, gambaran itu
					justru menciptakan dinding tebal yang menakutkan sebelum sempat mencoba baris kode
					pertama.
				</p>
				<p>
					Di Baricode, kami percaya sebaliknya. Pemrograman pada intinya adalah tentang <strong
						>menyelesaikan masalah</strong
					>
					dan <strong>menciptakan manfaat</strong>. Komputer tidak pernah peduli apakah kodemu
					diketik di atas meja mewah atau di atas tikar kamar kos berukuran 2x3 meter. Yang
					diperhitungkan adalah ketekunan logika, niat tulus, dan kemauan untuk bangkit setiap kali
					menjumpai pesan error.
				</p>
				<p>
					Kami tidak menggurui. Kami tidak berpura-pura sudah "sampai" di puncak kesempurnaan. Kami
					adalah sesama pembelajar yang juga pernah merasakan rasanya bingung tanpa arah, tidak tahu
					harus bertanya ke mana, dan belajar dengan keterbatasan sarana. Baricode hadir untuk
					memastikan: <em>kamu tidak harus berjalan sendirian lagi.</em>
				</p>
			</div>

			<!-- Manifesto Callout Quote -->
			<div
				class="relative mt-8 overflow-hidden rounded-2xl border border-rose-500/30 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-amber-500/10 p-6 sm:p-8 dark:border-rose-500/20"
			>
				<div class="flex items-start gap-4">
					<span class="text-3xl text-rose-500 select-none">“</span>
					<div>
						<p class="text-base font-semibold text-slate-800 italic sm:text-lg dark:text-zinc-100">
							Tidak perlu minder kalau kamu belajar dari kamar kecil, laptop lawas, atau dari
							kondisi paling terbatas sekalipun. Jangan menunggu kondisi sempurna untuk melangkah,
							karena langkah pertamamulah yang akan menciptakan jalanmu sendiri.
						</p>
						<p
							class="mt-3 text-xs font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400"
						>
							— Komitmen Baricode Indonesia
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION: Visi & Misi -->
		<section>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>02</span>
				<span>•</span>
				<span>Arah &amp; Tujuan</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Visi &amp; Misi Baricode Indonesia
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Kompas utama yang memandu seluruh konten, kurikulum, dan inisiatif komunitas yang kami
				jalankan:
			</p>

			<div class="mt-8 grid gap-6 md:grid-cols-12">
				<!-- Visi Card (Full width or prominent) -->
				<div
					class="flex flex-col justify-between rounded-3xl border border-rose-500/30 bg-gradient-to-br from-white via-white to-rose-50/50 p-6 shadow-sm backdrop-blur md:col-span-5 dark:border-rose-500/20 dark:bg-gradient-to-br dark:from-zinc-900/80 dark:via-zinc-900/60 dark:to-rose-950/20"
				>
					<div>
						<div
							class="inline-flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
						>
							🎯
						</div>
						<p
							class="mt-4 text-xs font-bold tracking-wider text-rose-600 uppercase dark:text-rose-400"
						>
							Visi Kami
						</p>
						<h3 class="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
							Membuka Akses IT yang Inklusif &amp; Membumi
						</h3>
						<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
							Menjadi wadah pembelajaran teknologi yang paling bersahabat dan terjangkau di
							Indonesia—mencetak generasi talenta digital yang berdaya, berkarakter, dan solutif
							dari seluruh lapisan masyarakat.
						</p>
					</div>

					<div
						class="mt-6 border-t border-rose-100 pt-4 text-xs text-slate-500 dark:border-zinc-800/80 dark:text-zinc-400"
					>
						🌍 Dari desa hingga kota, setiap orang berhak belajar teknologi.
					</div>
				</div>

				<!-- Misi Cards (List of pillars) -->
				<div class="space-y-4 md:col-span-7">
					<div
						class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
					>
						<div class="flex items-start gap-3.5">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
								>1</span
							>
							<div>
								<h4 class="text-sm font-bold text-slate-900 dark:text-white">
									Mendemokratisasi Pengetahuan Koding
								</h4>
								<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
									Menyediakan panduan, artikel, glosarium, dan roadmap terstruktur yang dapat
									diakses cuma-cuma tanpa dipungut biaya.
								</p>
							</div>
						</div>
					</div>

					<div
						class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
					>
						<div class="flex items-start gap-3.5">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
								>2</span
							>
							<div>
								<h4 class="text-sm font-bold text-slate-900 dark:text-white">
									Pendampingan Humanis &amp; Akuntabilitas
								</h4>
								<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
									Mendampingi pembelajar mandiri lewat program Bimbingan via WhatsApp agar tidak
									tersesat atau menyerah di tengah jalan.
								</p>
							</div>
						</div>
					</div>

					<div
						class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
					>
						<div class="flex items-start gap-3.5">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
								>3</span
							>
							<div>
								<h4 class="text-sm font-bold text-slate-900 dark:text-white">
									Membudayakan Pembuatan Karya Nyata
								</h4>
								<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
									Mengarahkan pembelajar keluar dari <em>tutorial hell</em> dengan membiasakan praktik
									membuat proyek riil yang bermanfaat untuk portofolio.
								</p>
							</div>
						</div>
					</div>

					<div
						class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
					>
						<div class="flex items-start gap-3.5">
							<span
								class="flex size-8 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-sm font-bold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
								>4</span
							>
							<div>
								<h4 class="text-sm font-bold text-slate-900 dark:text-white">
									Membangun Komunitas Tanpa Senioritas Semu
								</h4>
								<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
									Menciptakan ruang diskusi yang aman, ramah, dan saling mendukung tanpa celaan saat
									seseorang bertanya hal paling mendasar sekalipun.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION: 4 Nilai Utama Kami (Values) -->
		<section>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>03</span>
				<span>•</span>
				<span>Prinsip Belajar</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				4 Nilai Inti yang Kami Pegang Teguh
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Nilai-nilai ini yang membedakan Baricode dari tempat kursus pada umumnya:
			</p>

			<div class="mt-8 grid gap-5 sm:grid-cols-2">
				<!-- Value 1 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/30 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/30"
				>
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-amber-500/10 text-2xl text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
					>
						🌾
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						1. Membumi (Grounded)
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Kami menghindari pemakaian istilah asing tanpa penjelasan. Konsep rumit seperti API,
						basis data, atau arsitektur sistem kami sampaikan dengan analogi sederhana yang masuk
						akal di dunia sehari-hari.
					</p>
				</div>

				<!-- Value 2 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/30 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/30"
				>
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
					>
						🚪
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						2. Terbuka &amp; Inklusif
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Tidak ada kasta perangkat keras atau prasyarat gelar formal. Baik kamu santri di pondok
						pesantren, remaja putus sekolah, maupun karyawan yang ingin beralih profesi, kamu punya
						tempat di Baricode.
					</p>
				</div>

				<!-- Value 3 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/30 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/30"
				>
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
					>
						🔨
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						3. Berorientasi Proyek &amp; Masalah Riil
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Menghafal sintaksis bukan tolok ukur keahlian. Kami mendorong peserta untuk segera
						membangun website mini, aplikasi kasir sederhana, atau sistem pencatatan yang
						benar-benar bisa dipakai orang lain.
					</p>
				</div>

				<!-- Value 4 -->
				<div
					class="group rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/30 dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-rose-500/30"
				>
					<div
						class="flex size-12 items-center justify-center rounded-xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
					>
						🤝
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						4. Gotong Royong Tanpa Senioritas
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
						Yang sudah bisa membantu yang belum bisa. Yang baru mulai tidak perlu takut dicibir.
						Kami menanamkan budaya saling menghormati dan kerendahan hati dalam setiap ruang
						interaksi.
					</p>
				</div>
			</div>
		</section>

		<!-- SECTION: Tiga Jalur Belajar di Baricode -->
		<section
			class="rounded-3xl border border-slate-200/80 bg-slate-100/70 p-6 sm:p-10 dark:border-zinc-800/80 dark:bg-zinc-900/40"
		>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>04</span>
				<span>•</span>
				<span>Ekosistem Program</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Tiga Jalur Belajar di Baricode Indonesia
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Setiap orang punya ritme, kebutuhan, dan kesiapan yang berbeda. Pilih jalur yang paling
				sesuai dengan kondisimu:
			</p>

			<div class="mt-8 grid gap-6 sm:grid-cols-3">
				<!-- Jalur 1 -->
				<div
					class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">📚</span>
							<span
								class="rounded-full bg-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300"
								>Gratis Selamanya</span
							>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">
							Artikel &amp; Roadmap
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Akses terbuka materi pengantar, penjelasan istilah teknis dengan bahasa bayi, dan
							kurikulum belajar mandiri bertahap.
						</p>
						<ul class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Bebas diakses tanpa login</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Glosarium istilah pemrograman</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Peta jalan web, Laravel &amp; WordPress</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/roadmap"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Lihat Semua Roadmap &rarr;
						</a>
					</div>
				</div>

				<!-- Jalur 2 -->
				<div
					class="flex flex-col justify-between rounded-2xl border-2 border-rose-500/40 bg-white p-6 shadow-md dark:border-rose-500/40 dark:bg-zinc-900"
				>
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">💬</span>
							<span
								class="rounded-full bg-rose-100 px-2.5 py-0.5 text-[11px] font-semibold text-rose-700 dark:bg-rose-950/60 dark:text-rose-300"
								>Program Unggulan</span
							>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">
							Baricode Bimbingan
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Pendampingan belajar koding mandiri via grup WhatsApp. Menjaga arah dan akuntabilitas
							belajarmu agar tidak mandek.
						</p>
						<ul class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Gratis tanpa pungutan biaya</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Tanpa beban meeting / video call</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Check-in progres rutin bersama mentor</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/artikel/memperkenalkan-baricode-bimbingan"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Pelajari Baricode Bimbingan &rarr;
						</a>
					</div>
				</div>

				<!-- Jalur 3 -->
				<div
					class="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div>
						<div class="flex items-center justify-between">
							<span class="text-2xl">🎓</span>
							<span
								class="rounded-full bg-amber-100 px-2.5 py-0.5 text-[11px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300"
								>Kelas Intensif</span
							>
						</div>
						<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">
							Kursus &amp; Akademi
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Bagi kamu yang siap melangkah lebih jauh. Kelas intensif online kelompok kecil bersama
							instruktur dengan kurikulum profesional.
						</p>
						<ul class="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Live class &amp; rekaman materi</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Studi kasus proyek industri</span>
							</li>
							<li class="flex items-center gap-2">
								<span class="text-rose-500">✓</span>
								<span>Review kode &amp; bimbingan portofolio</span>
							</li>
						</ul>
					</div>
					<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
						<a
							href="/kursus"
							class="inline-flex items-center text-xs font-semibold text-rose-600 hover:underline dark:text-rose-400"
						>
							Katalog Kursus &amp; Akademi &rarr;
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION: Garis Perjalanan / Milestone -->
		<section
			class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur sm:p-10 dark:border-zinc-800/80 dark:bg-zinc-900/60"
		>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>05</span>
				<span>•</span>
				<span>Langkah &amp; Perjalanan</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Baru Memulai, Terus Bertumbuh
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Kami tidak malu mengatakan bahwa Baricode Indonesia baru saja menorehkan langkah pertamanya.
				Kami menghargai setiap langkah kecil yang jujur:
			</p>

			<div
				class="relative mt-8 space-y-8 before:absolute before:inset-0 before:left-3 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-zinc-800"
			>
				<!-- Item 1 -->
				<div class="relative flex items-start gap-4">
					<div
						class="flex size-6.5 shrink-0 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-[11px] font-bold text-rose-600 dark:bg-zinc-900"
					>
						•
					</div>
					<div>
						<span class="text-xs font-semibold text-rose-600 dark:text-rose-400"
							>Awal Inisiatif</span
						>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Membangun Fondasi Materi Terbuka
						</h3>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Merilis portal Baricode.org dengan kumpulan artikel dasar, penjelasan konsep
							beranalogi ramah pemula, dan glosarium istilah pemrograman.
						</p>
					</div>
				</div>

				<!-- Item 2 -->
				<div class="relative flex items-start gap-4">
					<div
						class="flex size-6.5 shrink-0 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-[11px] font-bold text-rose-600 dark:bg-zinc-900"
					>
						•
					</div>
					<div>
						<span class="text-xs font-semibold text-rose-600 dark:text-rose-400"
							>Peluncuran Bimbingan</span
						>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Langkah Perdana Baricode Bimbingan
						</h3>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Membuka pendampingan gratis perdana dengan 4 peserta pertama yang penuh semangat.
							Membuktikan bahwa pendampingan berbasis WhatsApp efektif menjaga disiplin belajar
							otodidak.
						</p>
					</div>
				</div>

				<!-- Item 3 -->
				<div class="relative flex items-start gap-4">
					<div
						class="flex size-6.5 shrink-0 items-center justify-center rounded-full border-2 border-rose-500 bg-white text-[11px] font-bold text-rose-600 dark:bg-zinc-900"
					>
						•
					</div>
					<div>
						<span class="text-xs font-semibold text-rose-600 dark:text-rose-400"
							>Peta Belajar Terstruktur</span
						>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Rilis Roadmap Web, Laravel &amp; WordPress
						</h3>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Menyusun silabus visual interaktif yang memandu pemula dari konsep paling dasar hingga
							kesiapan merakit aplikasi fungsional.
						</p>
					</div>
				</div>

				<!-- Item 4 -->
				<div class="relative flex items-start gap-4">
					<div
						class="flex size-6.5 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-rose-400 bg-rose-50 text-[11px] font-bold text-rose-600 dark:bg-zinc-900 dark:text-rose-400"
					>
						🚀
					</div>
					<div>
						<span class="text-xs font-semibold text-amber-600 dark:text-amber-400"
							>Langkah ke Depan</span
						>
						<h3 class="text-sm font-bold text-slate-900 dark:text-white">
							Menjangkau Ribuan Pembelajar di Pelosok Negeri
						</h3>
						<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
							Memperluas kolaborasi dengan pesantren, sekolah, komunitas desa, dan menghadirkan
							kelas intensif yang terjangkau untuk semua.
						</p>
					</div>
				</div>
			</div>
		</section>

		<!-- SECTION: FAQ Ringkas Tentang Baricode -->
		<section>
			<div
				class="flex items-center gap-2 text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400"
			>
				<span>06</span>
				<span>•</span>
				<span>Tanya Jawab</span>
			</div>
			<h2 class="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
				Pertanyaan Umum Seputar Baricode
			</h2>
			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Hal-hal yang sering ditanyakan mengenai komunitas dan program belajar kami:
			</p>

			<div
				class="mt-6 divide-y divide-slate-200 border-t border-slate-200 dark:divide-zinc-800/80 dark:border-zinc-800/80"
			>
				{#each aboutFaqs as item, index}
					<details class="group py-5" open={openFaqIndex === index}>
						<summary
							onclick={(e) => {
								e.preventDefault();
								toggleFaq(index);
							}}
							class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 transition hover:text-rose-600 dark:text-white dark:hover:text-rose-400"
						>
							{item.q}
							<svg
								class={`size-5 shrink-0 text-slate-400 transition dark:text-zinc-400 ${openFaqIndex === index ? 'rotate-45 text-rose-600 dark:text-rose-400' : ''}`}
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
							</svg>
						</summary>
						<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
							{item.a}
						</p>
					</details>
				{/each}
			</div>

			<div class="mt-4 text-xs text-slate-500 dark:text-zinc-400">
				Punya pertanyaan lain? Kunjungi <a
					href="/faq"
					class="font-semibold text-rose-600 hover:underline dark:text-rose-400"
					>Halaman FAQ Lengkap</a
				>
				atau
				<a href="/kontak" class="font-semibold text-rose-600 hover:underline dark:text-rose-400"
					>Hubungi Kami</a
				>.
			</div>
		</section>

		<!-- SECTION: CTA Banner & Quick Links -->
		<section class="mt-12">
			<div
				class="rounded-3xl border border-slate-200/80 bg-white/80 p-8 text-center shadow-lg backdrop-blur-md sm:p-12 dark:border-zinc-800/80 dark:bg-zinc-900/80 dark:shadow-xl"
			>
				<div
					class="mx-auto flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-600/20 text-3xl"
				>
					<BaricodeLogo class="size-8" />
				</div>
				<h2
					class="mt-5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Mari Bertumbuh dan Berjalan Bersama
				</h2>
				<p
					class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300"
				>
					Jangan biarkan keraguan menahan potensimu. Mulai dari satu baris kode hari ini, diskusikan
					di grup komunitas, dan bangun masa depan digitalmu bersama Baricode Indonesia.
				</p>

				<div class="mt-8 flex flex-wrap justify-center gap-3">
					<a
						href={siteConfig.whatsappGroup}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:scale-[1.02] hover:bg-emerald-500"
					>
						<span>💬</span>
						<span>Gabung Grup WhatsApp</span>
					</a>
					<a
						href="/kursus"
						class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500"
					>
						<span>🎓</span>
						<span>Lihat Kursus &amp; Akademi</span>
					</a>
					<a
						href="/untuk-pemula"
						class="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-xs transition hover:border-slate-400 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:border-zinc-600 dark:hover:bg-zinc-700"
					>
						<span>🔰</span>
						<span>Panduan Pemula</span>
					</a>
				</div>
			</div>
		</section>
	</div>
</div>
