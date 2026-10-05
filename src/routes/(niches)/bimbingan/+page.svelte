<script lang="ts">
	import { siteConfig } from '$lib/data/site';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	let openFaqIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openFaqIndex = openFaqIndex === index ? null : index;
	}

	const problemsAndSolutions = [
		{
			problem: 'Semangat Menggebu di Awal, Rontok di Tengah Jalan',
			descProblem:
				'Banyak pemula memulai dengan antusias, namun setelah seminggu dua minggu kehilangan arah dan berhenti karena tidak ada yang menagih progres.',
			solution: 'Akuntabilitas & Check-in Rutin',
			descSolution:
				'Di Baricode Bimbingan, mentor dan rekan seperjuangan rutin mengecek sejauh mana belajarmu berjalan agar kamu tetap konsisten menjaga ritme.',
			icon: '🔥'
		},
		{
			problem: 'Bingung Mau Mulai dari Mana dan Apa Step Berikutnya',
			descProblem:
				'Terlalu banyak video YouTube dan artikel yang berserakan, membuat pemula tersesat dalam "tutorial hell" tanpa arah yang jelas.',
			solution: 'Penyelarasan Roadmap Mandiri',
			descSolution:
				'Mentor mendengarkan tujuan belajarmu dan membantu memetakan materi apa yang tepat dipelajari lebih dulu tanpa membuang waktu.',
			icon: '🧭'
		},
		{
			problem: 'Stuck Kena Error Berjam-jam Sampai Mau Menyerah',
			descProblem:
				'Melihat satu baris error merah di layar yang tidak kunjung selesai sering kali menjadi alasan utama orang berhenti belajar koding.',
			solution: 'Panduan Debugging & Pola Pikir Solusi',
			descSolution:
				'Bukan dibuatkan tugasnya, melainkan diarahkan cara membaca pesan error dan mencari solusinya secara mandiri agar insting analisismu terasah.',
			icon: '💡'
		},
		{
			problem: 'Terkendala Biaya Kursus Mahal & Laptop Spek Terbatas',
			descProblem:
				'Banyak program belajar mematok biaya jutaan rupiah dan menuntut laptop spek tinggi serta koneksi internet cepat untuk meeting video.',
			solution: '100% Gratis via WhatsApp Ramah Kuota',
			descSolution:
				'Seluruh pendampingan berlangsung fleksibel lewat teks/tangkapan layar di WhatsApp. Ramah laptop spek standar dan tanpa kuota video berat.',
			icon: '📱'
		}
	];

	const steps = [
		{
			number: '01',
			title: 'Kirim Formulir Pendaftaran',
			desc: 'Isi formulir singkat tentang namamu, asal kota, kesibukan saat ini, dan impian atau tujuan spesifik yang ingin kamu capai dalam koding.'
		},
		{
			number: '02',
			title: 'Onboarding di Grup WhatsApp',
			desc: 'Kamu akan dimasukkan ke grup WhatsApp kelompok kecil (per batch) bersama peserta lain yang sama-sama berjuang dari nol.'
		},
		{
			number: '03',
			title: 'Menyusun Target & Roadmap',
			desc: 'Mentor membantu menyelaraskan target belajarmu dengan materi yang kamu pilih (baik dari roadmap Baricode, tutorial YouTube, atau dokumentasi).'
		},
		{
			number: '04',
			title: 'Lapor Progres & Tanya Jawab',
			desc: 'Lakukan check-in berkala, laporkan hal yang sudah kamu pelajari, dan tanyakan bila menemui jalan buntu saat mempraktikkan kode.'
		}
	];

	const targets = [
		{
			title: 'Santri & Pelajar Daerah',
			desc: 'Ingin punya keahlian digital nyata meski belajar dari lingkungan pesantren atau daerah dengan fasilitas terbatas.',
			badge: 'Generasi Mandiri',
			icon: '🕌'
		},
		{
			title: 'Pembelajar Otodidak Nol',
			desc: 'Belum pernah menulis satu baris kode pun dan butuh teman diskusi yang sabar tanpa merendahkan ketidaktahuan.',
			badge: 'Mulai dari Nol',
			icon: '🌱'
		},
		{
			title: 'Mahasiswa Butuh Arah Praktis',
			desc: 'Merasa teori di kampus terlalu abstrak dan butuh bimbingan membangun portofolio proyek nyata yang berfungsi.',
			badge: 'Proyek Nyata',
			icon: '🎓'
		},
		{
			title: 'Pekerja / Career Switcher',
			desc: 'Belajar di waktu luang malam hari atau akhir pekan tanpa terikat jam kelas kaku yang bertabrakan dengan pekerjaan.',
			badge: 'Waktu Fleksibel',
			icon: '💼'
		}
	];

	const bimbinganFaqs = [
		{
			q: 'Apakah Baricode Bimbingan benar-benar 100% gratis?',
			a: 'Ya, 100% gratis tanpa biaya pendaftaran, tanpa biaya langganan bulanan, dan tanpa pungutan tersembunyi. Program ini adalah inisiatif sosial Baricode Indonesia untuk membuka akses belajar koding bagi siapa saja, khususnya pemuda desa, santri, dan pembelajar dari kondisi terbatas.'
		},
		{
			q: 'Apakah ada jadwal meeting online (Google Meet / Zoom) yang wajib dihadiri?',
			a: 'Tidak ada. Baricode Bimbingan BUKAN kelas live dan BUKAN sesi meeting yang kaku. Seluruh proses komunikasi, laporan progres, dan tanya jawab berlangsung santai serta asinkron di grup WhatsApp, sehingga kamu tidak perlu khawatir kehabisan kuota untuk video call atau bertabrakan dengan jadwal sekolah/kerja.'
		},
		{
			q: 'Materi apa yang diajarkan di program Bimbingan?',
			a: 'Bimbingan berfokus pada pendampingan dan penjagaan arah belajar. Peserta bebas menggunakan materi belajarnya masing-masing—baik roadmap web dari Baricode, video tutorial, maupun buku. Mentor bertindak sebagai penunjuk arah, penilai progres, dan pembimbing logika saat kamu menghadapi jalan buntu.'
		},
		{
			q: 'Apakah laptop kentang (spek rendah / RAM 2GB-4GB) bisa ikut?',
			a: 'Bisa sekali! Kami selalu menekankan bahwa belajar koding tidak butuh kondisi sempurna. Kamu bisa mulai dari HTML, CSS, JavaScript, atau dasar PHP yang sangat ringan dijalankan di laptop sederhana tanpa memberatkan mesin.'
		},
		{
			q: 'Bagaimana jika saya sempat sibuk kerja atau sakit dan tertinggal beberapa hari?',
			a: 'Cukup beri tahu mentor di grup. Ritme belajar Bimbingan bersifat fleksibel dan manusiawi. Yang terpenting adalah komunikasi terbuka dan niat untuk melanjutkan kembali segera setelah urusanmu selesai.'
		},
		{
			q: 'Apa perbedaan mendasar antara Bimbingan, Kursus, dan Akademi?',
			a: 'Bimbingan adalah pendampingan gratis tanpa kelas live via WhatsApp untuk menjaga konsistensi. Kursus adalah katalog kurikulum mandiri berbasis modul dan proyek. Sedangkan Akademi adalah live class intensif terjadwal bersama instruktur dengan kelompok kecil dan code review 1-on-1.'
		}
	];

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://www.baricode.org/bimbingan#webpage',
				url: 'https://www.baricode.org/bimbingan',
				name: 'Baricode Bimbingan — Pendampingan Belajar Koding Gratis via WhatsApp',
				description:
					'Program pendampingan belajar koding mandiri (otodidak) gratis dari Baricode Indonesia. Tanpa kelas kaku, tanpa meeting, mentor memantau progres dan arah belajarmu via WhatsApp.',
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
							name: 'Bimbingan',
							item: 'https://www.baricode.org/bimbingan'
						}
					]
				}
			},
			{
				'@type': 'FAQPage',
				'@id': 'https://www.baricode.org/bimbingan#faq',
				mainEntity: bimbinganFaqs.map((faq) => ({
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

	const waRegisterMessage = encodeURIComponent(
		'Halo Tim Baricode! Saya ingin mendaftar program Baricode Bimbingan gratis. Mohon informasi batch dan formulirnya ya.'
	);
	const waRegisterUrl = `https://wa.me/${siteConfig.contactWhatsapp}?text=${waRegisterMessage}`;
</script>

<svelte:head>
	<title>Baricode Bimbingan — Pendampingan Belajar Koding Gratis via WhatsApp</title>
	<meta
		name="description"
		content="Belajar koding mandiri tanpa harus sendirian. Baricode Bimbingan mendampingi pembelajar otodidak lewat grup WhatsApp — 100% gratis, tanpa kelas, tanpa meeting."
	/>
	<meta
		name="keywords"
		content="bimbingan koding gratis, mentor koding pemula, belajar coding otodidak, bimbingan programming whatsapp, komunitas belajar web pemula, baricode bimbingan"
	/>
	<link rel="canonical" href="https://www.baricode.org/bimbingan" />

	<!-- Open Graph / WhatsApp Sharing -->
	<meta property="og:type" content="website" />
	<meta
		property="og:title"
		content="Baricode Bimbingan — Pendampingan Belajar Koding Gratis via WhatsApp"
	/>
	<meta
		property="og:description"
		content="Belajar koding mandiri tanpa harus sendirian. Baricode Bimbingan mendampingi pembelajar otodidak lewat grup WhatsApp — 100% gratis, tanpa kelas kaku."
	/>
	<meta property="og:url" content="https://www.baricode.org/bimbingan" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta
		name="twitter:title"
		content="Baricode Bimbingan — Pendampingan Belajar Koding Gratis via WhatsApp"
	/>
	<meta
		name="twitter:description"
		content="Program pendampingan koding gratis untuk pembelajar otodidak via WhatsApp. Tanpa meeting panjang, fokus aksi nyata."
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
			class="absolute top-1/3 -right-48 h-[25rem] w-[25rem] rounded-full bg-emerald-500/10 blur-[130px] dark:bg-emerald-600/10"
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
				Baricode Bimbingan
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
			<span>🤝 100% Gratis • Tanpa Pertemuan Kaku • Via WhatsApp</span>
		</div>

		<!-- Main Heading -->
		<h1
			class="mx-auto mt-6 max-w-3xl text-3xl leading-[1.15] font-black tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
		>
			Belajar Koding Sendirian Memang Berat.
			<span
				class="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent dark:from-red-400 dark:via-rose-400 dark:to-amber-300"
			>
				Sekarang Kamu Didampingi.
			</span>
		</h1>

		<!-- Subtitle -->
		<p
			class="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-zinc-300"
		>
			<strong>Baricode Bimbingan</strong> adalah program pendampingan belajar koding gratis dari Baricode
			Indonesia. Bukan kelas mengajar kaku atau video call panjang, melainkan teman perjalanan yang menjaga
			arah, akuntabilitas, dan konsistensi belajarmu lewat grup WhatsApp.
		</p>

		<!-- Action Buttons -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
			<a
				href="#daftar"
				class="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/25 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
			>
				<span>Daftar Bimbingan Sekarang (Gratis)</span>
				<svg
					class="size-4"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="2.5"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
				</svg>
			</a>
			<a
				href="#cara-kerja"
				class="inline-flex items-center gap-2 rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-slate-400 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/80"
			>
				<span>Bagaimana Cara Kerjanya?</span>
			</a>
		</div>

		<!-- Highlights Grid -->
		<div class="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 text-left sm:grid-cols-4 sm:gap-4">
			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-rose-600 dark:text-rose-400">Rp 0</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Sepenuhnya Gratis</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Tanpa biaya pendaftaran, tanpa iuran, dan tanpa biaya tersembunyi apapun.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-emerald-600 dark:text-emerald-400">Via WA</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Fleksibel &amp; Ringan</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Tanpa kewajiban video meeting berjam-jam, hemat kuota dan ramah HP/laptop.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-amber-600 dark:text-amber-400">Personal</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Roadmap Terarah</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Arah belajar disesuaikan dengan latar belakang dan target belajarmu.
				</p>
			</div>

			<div
				class="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
			>
				<p class="text-2xl font-black text-sky-600 dark:text-sky-400">Anti-Stuck</p>
				<h2 class="mt-2 text-sm font-bold text-slate-900 dark:text-white">Bantuan Debugging</h2>
				<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
					Punya mentor dan teman bertanya saat menemui error yang bikin buntu.
				</p>
			</div>
		</div>
	</section>

	<!-- Mengapa Bimbingan Dibutuhkan -->
	<section class="mx-auto max-w-5xl px-6 py-16">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Tantangan Otodidak
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Mengapa Banyak Orang Gagal Belajar Koding Sendirian?
			</h2>
			<p class="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-zinc-400">
				Bukan karena kurang pintar atau tidak berbakat, melainkan karena ketiadaan ekosistem yang
				menjaga konsistensi dan arah belajar saat rintangan pertama muncul.
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2">
			{#each problemsAndSolutions as item}
				<div
					class="relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur transition hover:border-slate-300 hover:shadow-md dark:border-zinc-800/90 dark:bg-zinc-900/70"
				>
					<div>
						<div class="flex items-center gap-3">
							<span
								class="flex size-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-xl dark:bg-zinc-800"
							>
								{item.icon}
							</span>
							<div>
								<span
									class="rounded-md bg-red-500/10 px-2 py-0.5 text-[11px] font-bold text-red-600 dark:bg-red-500/20 dark:text-red-400"
								>
									Masalah Klasik
								</span>
								<h3 class="mt-1 text-base font-bold text-slate-900 dark:text-white">
									{item.problem}
								</h3>
							</div>
						</div>
						<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
							{item.descProblem}
						</p>

						<div
							class="mt-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4 dark:border-emerald-500/20 dark:bg-emerald-950/20"
						>
							<div class="flex items-center gap-2">
								<span class="inline-block size-2 rounded-full bg-emerald-500"></span>
								<h4 class="text-xs font-bold text-emerald-700 dark:text-emerald-400">
									Solusi Baricode Bimbingan: {item.solution}
								</h4>
							</div>
							<p class="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-zinc-300">
								{item.descSolution}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- 3 Prinsip Utama Bimbingan -->
	<section
		class="border-y border-slate-200/80 bg-slate-100/60 py-16 dark:border-zinc-800/80 dark:bg-zinc-900/40"
	>
		<div class="mx-auto max-w-5xl px-6">
			<div class="text-center">
				<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
					Prinsip Pendampingan
				</p>
				<h2
					class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					Bukan Sekadar Belajar, Tapi Membangun Kebiasaan
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
					Pahami apa yang membuat Baricode Bimbingan berbeda dari tempat belajar koding lainnya.
				</p>
			</div>

			<div class="mt-12 grid gap-6 sm:grid-cols-3">
				<div
					class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div
						class="flex size-12 items-center justify-center rounded-2xl bg-rose-500/10 text-2xl text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
					>
						📵
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						Bukan Kelas Meeting Kaku
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Tidak ada kewajiban menyalakan kamera di jam kerja atau jam sekolahmu. Kamu tetap belajar
						dari sumber pilihanmu kapan saja, dan melapor saat kamu siap.
					</p>
				</div>

				<div
					class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div
						class="flex size-12 items-center justify-center rounded-2xl bg-amber-500/10 text-2xl text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
					>
						🧩
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						Bukan Joki / Mengerjakan Tugas
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Mentor tidak menuliskan kode untukmu. Mentor melatih logikamu membaca pesan error,
						mengecek dokumentasi, dan memecahkan puzzle koding secara mandiri.
					</p>
				</div>

				<div
					class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900"
				>
					<div
						class="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
					>
						📈
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">
						Fokus Kemampuan &amp; Portofolio Real
					</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Tolak ukur kelulusan bukan selembar sertifikat tanpa arti, melainkan pemahaman logika yang
						menancap dan karya website nyata yang tersimpan di GitHub-mu.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Cara Kerja (4 Langkah) -->
	<section id="cara-kerja" class="mx-auto max-w-5xl px-6 py-20">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Alur Partisipasi
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Bagaimana Cara Kerjanya?
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Prosesnya sangat sederhana dan bersahabat. Kamu hanya perlu melewati empat tahapan ini:
			</p>
		</div>

		<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step}
				<div
					class="relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
				>
					<div>
						<span
							class="text-3xl font-black text-rose-600/30 select-none dark:text-rose-400/30"
						>
							{step.number}
						</span>
						<h3 class="mt-2 text-base font-bold text-slate-900 dark:text-white">
							{step.title}
						</h3>
						<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
							{step.desc}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<!-- Untuk Siapa Program Ini -->
	<section class="mx-auto max-w-5xl px-6 pb-20">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Sasaran Peserta
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Untuk Siapa Baricode Bimbingan Dibuat?
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Kami membuka pintu seluas-luasnya untuk siapa saja yang memiliki tekad belajar sungguh-sungguh.
			</p>
		</div>

		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each targets as t}
				<div
					class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60"
				>
					<div class="flex items-center justify-between">
						<span class="text-3xl">{t.icon}</span>
						<span
							class="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
						>
							{t.badge}
						</span>
					</div>
					<h3 class="mt-4 text-base font-bold text-slate-900 dark:text-white">{t.title}</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">{t.desc}</p>
				</div>
			{/each}
		</div>
	</section>

	<!-- Cerita Perjalanan & Semangat Membumi -->
	<section class="mx-auto max-w-5xl px-6 pb-20">
		<div
			class="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-gradient-to-br from-white via-rose-50/30 to-amber-50/30 p-8 shadow-sm backdrop-blur sm:p-12 dark:border-zinc-800 dark:from-zinc-900 dark:via-rose-950/10 dark:to-zinc-900"
		>
			<div class="max-w-3xl">
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
				>
					🌿 Semangat Baricode
				</span>
				<h2
					class="mt-4 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
				>
					"Belajar Koding Tidak Butuh Kondisi Sempurna"
				</h2>
				<p class="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300">
					Di hari peluncuran program Bimbingan, kami memulainya dengan kelompok kecil berisi peserta
					yang belajar dari kamar sederhana dan laptop seadanya. Mereka membuktikan bahwa kemauan untuk
					terus mencoba dan tidak menyerah jauh lebih menentukan keberhasilan daripada fasilitas mewah.
				</p>
				<p class="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300">
					Bila kamu punya niat belajar tapi merasa tidak punya teman yang sefrekuensi, pintu Baricode
					Bimbingan selalu terbuka menyambutmu.
				</p>
				<div class="mt-6 flex flex-wrap gap-4">
					<a
						href="/artikel/hari-peluncuran-baricode-bimbingan-langkah-awal-dengan-4-peserta-yang-antusias"
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition hover:underline dark:text-rose-400"
					>
						<span>Baca kisah peluncuran perdana Bimbingan</span>
						<span aria-hidden="true">&rarr;</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Syarat & Komitmen Peserta -->
	<section class="mx-auto max-w-5xl px-6 pb-20">
		<div
			class="rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60"
		>
			<div class="text-center">
				<h2 class="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
					Syarat &amp; Komitmen Peserta
				</h2>
				<p class="mx-auto mt-2 max-w-xl text-xs text-slate-600 sm:text-sm dark:text-zinc-400">
					Karena program ini 100% gratis, yang kami minta hanyalah komitmen moral dari dirimu sendiri:
				</p>
			</div>

			<div class="mt-8 grid gap-4 sm:grid-cols-2">
				<div class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-800/40">
					<span class="text-lg">⏱️</span>
					<div>
						<h3 class="text-sm font-semibold text-slate-900 dark:text-white">
							Komitmen Belajar Mandiri
						</h3>
						<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
							Menyisihkan minimal 3–5 jam setiap minggu untuk benar-benar praktik koding di depan layar.
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-800/40">
					<span class="text-lg">🔎</span>
					<div>
						<h3 class="text-sm font-semibold text-slate-900 dark:text-white">
							Mencoba Sebelum Bertanya
						</h3>
						<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
							Membiasakan diri membaca pesan error dan mencari referensi sebelum melemparkan pertanyaan.
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-800/40">
					<span class="text-lg">🤝</span>
					<div>
						<h3 class="text-sm font-semibold text-slate-900 dark:text-white">
							Saling Mendukung &amp; Beradab
						</h3>
						<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
							Menjaga etika berkomunikasi di grup WhatsApp dan saling menyemangati sesama rekan peserta.
						</p>
					</div>
				</div>

				<div class="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-800/40">
					<span class="text-lg">💬</span>
					<div>
						<h3 class="text-sm font-semibold text-slate-900 dark:text-white">
							Komunikasi &amp; Laporan Jujur
						</h3>
						<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
							Jika sedang buntu atau ada kendala kesibukan, kabari mentor secara terbuka agar dapat
							dicarikan solusinya.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FAQ Section -->
	<section class="mx-auto max-w-4xl px-6 pb-20">
		<div class="text-center">
			<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
				Tanya Jawab
			</p>
			<h2
				class="mt-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
			>
				Pertanyaan Seputar Baricode Bimbingan
			</h2>
			<p class="mx-auto mt-2 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
				Hal-hal yang sering ditanyakan oleh calon peserta sebelum bergabung.
			</p>
		</div>

		<div class="mt-10 divide-y divide-slate-200/80 border-t border-slate-200/80 dark:divide-zinc-800 dark:border-zinc-800">
			{#each bimbinganFaqs as faq, index}
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

	<!-- Registration / CTA Section -->
	<section id="daftar" class="mx-auto max-w-5xl px-6 pb-16">
		<div
			class="relative overflow-hidden rounded-3xl border border-rose-500/30 bg-gradient-to-br from-rose-600 via-red-600 to-rose-700 p-8 text-center text-white shadow-2xl shadow-rose-600/20 sm:p-14"
		>
			<div class="relative z-10 mx-auto max-w-2xl">
				<span
					class="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1 text-xs font-semibold text-white backdrop-blur-md"
				>
					✨ Pendaftaran Batch Terbuka
				</span>
				<h2 class="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
					Mulai Perjalanan Kodingmu Bersama Mentor Hari Ini
				</h2>
				<p class="mt-3 text-sm leading-relaxed text-rose-100 sm:text-base">
					Tidak perlu menunggu kondisi sempurna. Ambil langkah pertamamu sekarang, gabung ke grup
					WhatsApp Bimbingan, dan mari berjuang bersama!
				</p>

				<div class="mt-8 flex flex-wrap justify-center gap-3">
					<a
						href={waRegisterUrl}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-rose-700 shadow-lg shadow-black/10 transition hover:scale-[1.02] hover:bg-rose-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<svg class="size-5 fill-current" viewBox="0 0 24 24">
							<path
								d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
							/>
						</svg>
						<span>Daftar via WhatsApp (Gratis)</span>
					</a>
					<a
						href={siteConfig.whatsappGroup}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
					>
						<span>Gabung Grup Komunitas Umum</span>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Jelajahi Opsi Lain: Kursus & Akademi -->
	<section class="mx-auto max-w-5xl px-6 pb-20">
		<div class="mb-8 text-center">
			<h3 class="text-xl font-bold text-slate-900 dark:text-white">
				Ingin Pilihan Metode Belajar Lainnya?
			</h3>
			<p class="mt-1 text-xs text-slate-600 sm:text-sm dark:text-zinc-400">
				Baricode juga menyediakan format belajar mandiri terstruktur dan kelas live intensif.
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

			<!-- Link to Akademi -->
			<a
				href="/akademi"
				class="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
			>
				<div>
					<span
						class="flex size-12 items-center justify-center rounded-2xl bg-sky-500/10 text-2xl text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
					>
						🎓
					</span>
					<span
						class="mt-3 inline-block text-[11px] font-bold tracking-wider text-sky-600 uppercase dark:text-sky-400"
					>
						Live Class Intensif
					</span>
					<h4 class="mt-1 text-lg font-bold text-slate-900 dark:text-white">
						Baricode Akademi (Small Cohort)
					</h4>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Kelas live online kelompok kecil bersama instruktur praktisi. Dilengkapi code review
						1-on-1, kurikulum mendalam, dan portofolio siap kerja.
					</p>
				</div>
				<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800">
					<span
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition group-hover:gap-2 dark:text-sky-400"
					>
						<span>Lihat Program Akademi</span>
						<span aria-hidden="true">&rarr;</span>
					</span>
				</div>
			</a>
		</div>
	</section>
</div>
