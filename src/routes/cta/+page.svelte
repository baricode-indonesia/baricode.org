<script lang="ts">
	import { siteConfig } from '$lib/data/site';

	let selectedTrack = $state<'pemula' | 'otodidak' | 'karier'>('pemula');
</script>

<svelte:head>
	<title>Mulai Belajar Koding — Baricode Indonesia</title>
	<meta
		name="description"
		content="Ambil langkah pertamamu dalam dunia teknologi bersama Baricode Indonesia. Kursus online IT membumi untuk pemula, pelajar, otodidak, dan siapapun yang ingin belajar koding."
	/>
</svelte:head>

<div class="relative overflow-hidden">
	<!-- Hero Section -->
	<section class="relative mx-auto max-w-5xl px-6 pt-12 pb-16 text-center">
		<!-- Badge -->
		<div class="inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-1.5 text-xs font-semibold text-red-600 dark:text-red-400 shadow-xs backdrop-blur-md">
			<span class="inline-block size-2 rounded-full bg-red-500 animate-pulse"></span>
			Mulai Perjalanan Kodingmu
		</div>

		<!-- Title -->
		<h1 class="mt-6 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl leading-[1.15]">
			Ubah Niat Jadi Karya. <br />
			<span class="bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 bg-clip-text text-transparent">
				Belajar Koding Dari Nol
			</span>
		</h1>

		<!-- Description -->
		<p class="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
			Tak perlu ragu meski belum punya latar belakang IT atau menggunakan spesifikasi laptop seadanya. 
			Baricode menyajikan pembelajaran koding yang membumi, jelas, dan siap mendampingi langkahmu.
		</p>

		<!-- Primary Action Cards Grid -->
		<div class="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
			<!-- Option 1: Kursus & Akademi -->
			<div class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-b from-red-500/10 via-white/90 to-white dark:from-red-950/30 dark:via-zinc-900/80 dark:to-zinc-900 p-7 shadow-xl shadow-red-500/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-red-500/50 hover:shadow-red-500/15">
				<div>
					<div class="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-red-600 to-rose-500 text-white shadow-lg shadow-red-500/30">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 1 10.49-3.04 60.368 60.368 0 0 1 5.25 5.867M3 12a9 9 0 0 1 9-9 9 9 0 0 1 9 9m-9 9a9 9 0 0 1-9-9" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
							<path stroke-linecap="round" stroke-linejoin="round" d="M12 14v7" />
						</svg>
					</div>
					<span class="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-red-600 dark:text-red-400">
						Rekomendasi Utama
					</span>
					<h2 class="mt-1 text-xl font-bold text-slate-900 dark:text-white">
						Kursus &amp; Akademi Online
					</h2>
					<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
						Ikuti modul terstruktur dari dasar pemrograman hingga pembuatan produk web siap pakai.
					</p>
				</div>
				<div class="mt-8 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
					<a
						href="/kursus"
						class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/25 transition hover:from-red-500 hover:to-rose-500"
					>
						<span>Jelajahi Kursus</span>
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Option 2: Komunitas WhatsApp -->
			<div class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 via-white/90 to-white dark:from-emerald-950/30 dark:via-zinc-900/80 dark:to-zinc-900 p-7 shadow-xl shadow-emerald-500/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-emerald-500/15">
				<div>
					<div class="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-500/30">
						<svg class="size-6 fill-current" viewBox="0 0 24 24">
							<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
						</svg>
					</div>
					<span class="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
						Grup Diskusi &amp; Tanya Jawab
					</span>
					<h2 class="mt-1 text-xl font-bold text-slate-900 dark:text-white">
						Komunitas WhatsApp
					</h2>
					<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
						Gabung bersama teman-teman sesama pemula dan pembelajar otodidak untuk bertanya dan diskusi koding.
					</p>
				</div>
				<div class="mt-8 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
					<a
						href="/whatsapp"
						class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/25 transition hover:bg-emerald-500"
					>
						<span>Gabung Grup WA</span>
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			</div>

			<!-- Option 3: Konsultasi Bimbingan -->
			<div class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-b from-sky-500/10 via-white/90 to-white dark:from-sky-950/30 dark:via-zinc-900/80 dark:to-zinc-900 p-7 shadow-xl shadow-sky-500/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-sky-500/15 sm:col-span-2 lg:col-span-1">
				<div>
					<div class="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-500 text-white shadow-lg shadow-sky-500/30">
						<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12.375m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a.75.75 0 01-1.006-.723c0-.12.012-.238.036-.353l.344-1.65A8.204 8.204 0 013 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
						</svg>
					</div>
					<span class="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400">
						Konsultasi Langsung
					</span>
					<h2 class="mt-1 text-xl font-bold text-slate-900 dark:text-white">
						Tanya Tim Baricode
					</h2>
					<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
						Bingung mau mulai dari mana? Diskusi langsung mengenai jalur belajar yang paling pas buat kamu.
					</p>
				</div>
				<div class="mt-8 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
					<a
						href="/kontak"
						class="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
					>
						<span>Hubungi Kami</span>
						<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
						</svg>
					</a>
				</div>
			</div>
		</div>
	</section>

	<!-- Why Baricode Section -->
	<section class="border-y border-slate-200/80 bg-slate-100/60 dark:border-zinc-800/80 dark:bg-zinc-900/40 py-16">
		<div class="mx-auto max-w-5xl px-6">
			<div class="text-center">
				<h2 class="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
					Mengapa Belajar di Baricode Indonesia?
				</h2>
				<p class="mt-2 text-sm text-slate-600 dark:text-zinc-400">
					Prinsip kami adalah menghadirkan pembelajaran yang inklusif, relevan, dan tidak muluk-muluk.
				</p>
			</div>

			<div class="mt-12 grid gap-6 sm:grid-cols-3">
				<div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
					<div class="text-3xl">🌱</div>
					<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Bahasa Membumi</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Tidak menggunakan istilah asing yang membingungkan tanpa penjelasan. Semua konsep dijelaskan dengan analogi sehari-hari.
					</p>
				</div>

				<div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
					<div class="text-3xl">💻</div>
					<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Ramah Spesifikasi Rendah</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Materi disusun agar tetap dapat dipraktikkan dengan laptop standar atau fasilitas terbatas sekalipun.
					</p>
				</div>

				<div class="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-xs dark:border-zinc-800 dark:bg-zinc-900">
					<div class="text-3xl">🎯</div>
					<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Fokus Pemula &amp; Pembelajar Mandiri</h3>
					<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Paham dengan kesibukan harian dan keterbatasan perangkat. Kurikulum disesuaikan agar mudah diimbangi.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Interactive Track Selector -->
	<section class="mx-auto max-w-4xl px-6 py-16">
		<div class="text-center">
			<h2 class="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
				Pilih Jalur Belajar yang Sesuai Buat Kamu
			</h2>
			<p class="mt-2 text-sm text-slate-600 dark:text-zinc-400">
				Klik opsi di bawah untuk melihat rekomendasi langkah pertamamu:
			</p>
		</div>

		<!-- Track Tabs -->
		<div class="mt-8 flex justify-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1.5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
			<button
				type="button"
				onclick={() => (selectedTrack = 'pemula')}
				class={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition ${
					selectedTrack === 'pemula'
						? 'bg-red-600 text-white shadow-md shadow-red-600/25'
						: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
				}`}
			>
				Pemula Nol Pengalaman
			</button>

			<button
				type="button"
				onclick={() => (selectedTrack = 'otodidak')}
				class={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition ${
					selectedTrack === 'otodidak'
						? 'bg-red-600 text-white shadow-md shadow-red-600/25'
						: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
				}`}
			>
				Pelajar &amp; Otodidak
			</button>

			<button
				type="button"
				onclick={() => (selectedTrack = 'karier')}
				class={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition ${
					selectedTrack === 'karier'
						? 'bg-red-600 text-white shadow-md shadow-red-600/25'
						: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
				}`}
			>
				Siap Bikin Karya
			</button>
		</div>

		<!-- Track Detail Card -->
		<div class="mt-6 rounded-3xl border border-slate-200/80 bg-white p-8 shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
			{#if selectedTrack === 'pemula'}
				<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
					<div>
						<span class="rounded-full bg-red-100 dark:bg-red-950/60 px-3 py-1 text-xs font-medium text-red-600 dark:text-red-400">
							Jalur 1 — Pemula Total
						</span>
						<h3 class="mt-3 text-xl font-bold text-slate-900 dark:text-white">
							Pengenalan Logika &amp; Fondasi Koding
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400 max-w-xl">
							Mulai dari artikel penjelasan dasar tentang logika pemrograman, statement vs expression, hingga cara kerja komputer. Tanpa hafalan rumit!
						</p>
					</div>
					<a
						href="/artikel"
						class="shrink-0 rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold text-white shadow transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
					>
						Baca Artikel Gratis &rarr;
					</a>
				</div>
			{:else if selectedTrack === 'otodidak'}
				<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
					<div>
						<span class="rounded-full bg-emerald-100 dark:bg-emerald-950/60 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
							Jalur 2 — Pembelajar Mandiri (Otodidak)
						</span>
						<h3 class="mt-3 text-xl font-bold text-slate-900 dark:text-white">
							Panduan Belajar Terarah &amp; Praktis
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400 max-w-xl">
							Pelajari bagaimana pembelajar otodidak bisa menguasai koding dari nol hingga mampu membuat proyek nyata atau membangun karier IT.
						</p>
					</div>
					<a
						href="/untuk-pemula"
						class="shrink-0 rounded-full bg-emerald-600 px-6 py-3 text-xs font-semibold text-white shadow transition hover:bg-emerald-500"
					>
						Lihat Panduan Pemula &rarr;
					</a>
				</div>
			{:else}
				<div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
					<div>
						<span class="rounded-full bg-rose-100 dark:bg-rose-950/60 px-3 py-1 text-xs font-medium text-rose-600 dark:text-rose-400">
							Jalur 3 — Bimbingan Intensif
						</span>
						<h3 class="mt-3 text-xl font-bold text-slate-900 dark:text-white">
							Kursus Full-Stack &amp; Project Real
						</h3>
						<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400 max-w-xl">
							Belajar Web Development modern (HTML, CSS, JavaScript, Svelte / Laravel) secara bertahap hingga mempublikasikan websitemu ke internet.
						</p>
					</div>
					<a
						href="/kursus"
						class="shrink-0 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-xs font-semibold text-white shadow transition hover:from-red-500 hover:to-rose-500"
					>
						Lihat Program Kursus &rarr;
					</a>
				</div>
			{/if}
		</div>
	</section>

	<!-- Quick FAQ -->
	<section class="border-t border-slate-200/80 bg-slate-50/50 dark:border-zinc-800/80 dark:bg-zinc-950/30 py-16">
		<div class="mx-auto max-w-3xl px-6">
			<h2 class="text-center text-2xl font-bold text-slate-900 dark:text-white">
				Masih Punya Pertanyaan?
			</h2>
			<div class="mt-8 space-y-4">
				<div class="rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
					<h3 class="text-sm font-semibold text-slate-900 dark:text-white">Apakah materi dasar di Baricode gratis?</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Ya! Semua artikel panduan di blog kami 100% gratis untuk dibaca dan dipelajari kapan saja.
					</p>
				</div>
				<div class="rounded-2xl border border-slate-200/80 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
					<h3 class="text-sm font-semibold text-slate-900 dark:text-white">Bagaimana jika saya bingung di tengah jalan?</h3>
					<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Kamu bisa langsung bertanya di Grup WhatsApp Komunitas Baricode. Teman-teman dan mentor siap memberikan saran.
					</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Bottom Action CTA Banner -->
	<section class="mx-auto max-w-4xl px-6 py-16 text-center">
		<div class="relative overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 p-10 text-white shadow-2xl shadow-red-600/20">
			<div class="relative z-10">
				<h2 class="text-2xl font-black sm:text-4xl">
					Tunggu Apa Lagi? Mulai Hari Ini!
				</h2>
				<p class="mx-auto mt-3 max-w-xl text-sm sm:text-base text-red-100 leading-relaxed">
					Langkah pertama selalu terasa paling sulit, tapi kamu tidak berjalan sendirian. Mari tumbuh dan berkembang bersama Baricode Indonesia.
				</p>
				<div class="mt-8 flex flex-wrap justify-center gap-4">
					<a
						href="/kursus"
						class="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-red-600 shadow-xl transition hover:bg-slate-100 hover:scale-105"
					>
						Mulai Belajar Sekarang
					</a>
					<a
						href="/whatsapp"
						class="rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
					>
						Gabung Komunitas WhatsApp
					</a>
				</div>
			</div>
			<!-- Background Glow Accent -->
			<div class="absolute -right-20 -bottom-20 size-64 rounded-full bg-white/10 blur-2xl"></div>
		</div>
	</section>
</div>
