<script lang="ts">
	import { page } from '$app/state';
	import { siteConfig } from '$lib/data/site';

	let status = $derived(page.status || 404);
	let errorMessage = $derived(page.error?.message || '');

	let searchQuery = $state('');
	let copiedDetails = $state(false);
	let showDetails = $state(false);

	// Preview mode state for testing different status codes dynamically
	let activePreviewStatus = $state<number | null>(null);
	let currentStatus = $derived(activePreviewStatus ?? status);

	// Error configuration based on HTTP status code
	let errorConfig = $derived.by(() => {
		const code = currentStatus;
		switch (code) {
			case 404:
				return {
					code: '404',
					title: 'Halaman Tidak Ditemukan',
					subtitle: 'Waduh! Jejak kodingan yang kamu cari sepertinya menghilang.',
					description:
						'Halaman yang kamu tuju mungkin telah dipindahkan, dihapus, diubah namanya, atau URL yang dimasukkan kurang tepat.',
					badgeBg: 'bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 border-rose-200 dark:border-rose-800/40',
					glowColor: 'from-rose-500/20 via-red-500/10 to-transparent',
					iconType: '404'
				};
			case 403:
				return {
					code: '403',
					title: 'Akses Ditolak',
					subtitle: 'Maaf, pintu area ini tertutup rapat.',
					description:
						'Kamu tidak memiliki izin atau hak akses untuk membuka halaman ini. Jika menurutmu ini kesalahan, silakan hubungi tim kami.',
					badgeBg: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 border-amber-200 dark:border-amber-800/40',
					glowColor: 'from-amber-500/20 via-orange-500/10 to-transparent',
					iconType: '403'
				};
			case 401:
				return {
					code: '401',
					title: 'Autentikasi Diperlukan',
					subtitle: 'Sesi kamu berakhir atau perlu masuk dulu.',
					description:
						'Kamu harus masuk (login) terlebih dahulu untuk mengakses konten atau fitur ini.',
					badgeBg: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 border-purple-200 dark:border-purple-800/40',
					glowColor: 'from-purple-500/20 via-pink-500/10 to-transparent',
					iconType: '401'
				};
			case 500:
				return {
					code: '500',
					title: 'Kesalahan Server Internal',
					subtitle: 'Ada bug di balik layar server kami.',
					description:
						'Terjadi kesalahan tak terduga pada sistem kami. Tim teknis Baricode telah diberitahu dan sedang memperbaikinya.',
					badgeBg: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 border-red-200 dark:border-red-800/40',
					glowColor: 'from-red-600/25 via-rose-600/15 to-transparent',
					iconType: '500'
				};
			case 503:
				return {
					code: '503',
					title: 'Layanan Sedang Pemeliharaan',
					subtitle: 'Sistem sedang dirawat agar makin kencang.',
					description:
						'Baricode Indonesia sedang menjalani pemeliharaan berkala (maintenance). Kami akan segera kembali dalam beberapa saat lagi.',
					badgeBg: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400 border-sky-200 dark:border-sky-800/40',
					glowColor: 'from-sky-500/20 via-blue-500/10 to-transparent',
					iconType: '503'
				};
			default:
				return {
					code: String(code),
					title: `Kendala Terjadi (${code})`,
					subtitle: 'Terjadi masalah saat memproses permintaanmu.',
					description:
						'Sistem menemukan kendala yang tidak biasa. Cobalah untuk menyegarkan halaman atau kembali ke beranda.',
					badgeBg: 'bg-slate-500/10 text-slate-700 dark:bg-zinc-500/20 dark:text-zinc-300 border-slate-200 dark:border-zinc-700',
					glowColor: 'from-slate-500/20 via-rose-500/10 to-transparent',
					iconType: 'default'
				};
		}
	});

	function handleBack() {
		if (typeof window !== 'undefined' && window.history.length > 1) {
			window.history.back();
		} else {
			window.location.href = '/';
		}
	}

	function handleSearch(e: SubmitEvent) {
		e.preventDefault();
		if (searchQuery.trim()) {
			window.location.href = `/artikel?q=${encodeURIComponent(searchQuery.trim())}`;
		}
	}

	function copyTechnicalDetails() {
		const text = `Status: ${currentStatus}\nMessage: ${errorMessage || 'No specific error trace'}\nURL: ${typeof window !== 'undefined' ? window.location.href : ''}\nTime: ${new Date().toISOString()}`;
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(text).then(() => {
				copiedDetails = true;
				setTimeout(() => (copiedDetails = false), 2500);
			});
		}
	}

	function setPreview(code: number | null) {
		activePreviewStatus = code;
	}
</script>

<svelte:head>
	<title>{errorConfig.code} — {errorConfig.title} | Baricode Indonesia</title>
	<meta name="robots" content="noindex, follow" />
</svelte:head>

<section class="relative min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
	<!-- Background glow per error status -->
	<div class="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
		<div class="h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr {errorConfig.glowColor} blur-[120px] opacity-70"></div>
	</div>

	<div class="w-full max-w-3xl text-center">
		<!-- Error Status Badge & Visual Illustration -->
		<div class="inline-flex flex-col items-center">
			<!-- Large Visual Graphic / Code Badge -->
			<div class="relative flex items-center justify-center">
				<span class="text-8xl sm:text-9xl font-extrabold tracking-tighter text-slate-200 dark:text-zinc-800/80 select-none">
					{errorConfig.code}
				</span>

				<!-- Floating Animated Icon Box -->
				<div class="absolute inset-0 flex items-center justify-center">
					<div class="flex h-20 w-20 items-center justify-center rounded-2xl border backdrop-blur-xl shadow-xl transition-all duration-300 transform hover:scale-105 {errorConfig.badgeBg}">
						{#if errorConfig.iconType === '404'}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m-3-3h6" />
							</svg>
						{:else if errorConfig.iconType === '403'}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0112 2.714zm0 10.607a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
							</svg>
						{:else if errorConfig.iconType === '401'}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
							</svg>
						{:else if errorConfig.iconType === '500'}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
							</svg>
						{:else if errorConfig.iconType === '53'}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-2.31c.605-.138 1.15-.46 1.545-.92l3.415-3.98a2.548 2.548 0 00-3.586-3.586l-3.98 3.415a2.548 2.548 0 00-.92 1.545l-.47 2.052" />
							</svg>
						{:else}
							<svg class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.75">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.002A11.959 11.959 0 0112 2.714zm0 10.607a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
							</svg>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Main Error Titles & Description -->
		<h1 class="mt-6 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
			{errorConfig.title}
		</h1>

		<p class="mt-2 text-base font-medium text-rose-600 dark:text-rose-400 sm:text-lg">
			{errorConfig.subtitle}
		</p>

		<p class="mx-auto mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-slate-600 dark:text-zinc-300">
			{errorConfig.description}
		</p>

		<!-- Direct Action Buttons -->
		<div class="mt-8 flex flex-wrap items-center justify-center gap-4">
			<a
				href="/"
				class="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition hover:from-red-500 hover:to-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/50"
			>
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
				</svg>
				Kembali ke Beranda
			</a>

			<button
				type="button"
				onclick={handleBack}
				class="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/80 px-6 py-3 text-sm font-semibold text-slate-700 dark:text-zinc-200 transition hover:bg-slate-50 dark:hover:bg-zinc-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
			>
				<svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
				</svg>
				Halaman Sebelumnya
			</button>

			<a
				href="/kontak"
				class="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-100/80 dark:bg-zinc-800/40 px-5 py-3 text-sm font-medium text-slate-600 dark:text-zinc-400 transition hover:text-slate-900 dark:hover:text-white"
			>
				Hubungi Tim Kami
			</a>
		</div>

		<!-- Quick Search Box (Helpful for 404 & general errors) -->
		<div class="mx-auto mt-10 max-w-lg">
			<form onsubmit={handleSearch} class="relative flex items-center">
				<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-zinc-500">
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
					</svg>
				</div>
				<input
					type="search"
					bind:value={searchQuery}
					placeholder="Cari materi, artikel, atau tutorial..."
					class="w-full rounded-2xl border border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 pl-11 pr-24 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-zinc-500 backdrop-blur transition focus:border-rose-500 focus:outline-none focus:ring-2 focus:ring-rose-500/20 shadow-sm"
				/>
				<button
					type="submit"
					class="absolute right-2 rounded-xl bg-slate-900 dark:bg-zinc-700 px-4 py-1.5 text-xs font-medium text-white transition hover:bg-slate-800 dark:hover:bg-zinc-600"
				>
					Cari
				</button>
			</form>
		</div>

		<!-- Quick Navigation Cards -->
		<div class="mt-12 text-left">
			<p class="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
				Mungkin kamu mencari salah satu dari halaman ini:
			</p>

			<div class="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<a
					href="/kursus"
					class="group rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-4 transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-zinc-900 shadow-sm"
				>
					<div class="flex items-center gap-3">
						<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18c-2.305 0-4.408.867-6 2.292m0-14.25v14.25" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">Kursus &amp; Akademi</h3>
							<p class="text-xs text-slate-500 dark:text-zinc-400">Program belajar koding</p>
						</div>
					</div>
				</a>

				<a
					href="/artikel"
					class="group rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-4 transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-zinc-900 shadow-sm"
				>
					<div class="flex items-center gap-3">
						<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">Artikel &amp; Tutorial</h3>
							<p class="text-xs text-slate-500 dark:text-zinc-400">Baca wawasan IT gratis</p>
						</div>
					</div>
				</a>

				<a
					href="/faq"
					class="group rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-4 transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-zinc-900 shadow-sm"
				>
					<div class="flex items-center gap-3">
						<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M12 18h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">Pertanyaan FAQ</h3>
							<p class="text-xs text-slate-500 dark:text-zinc-400">Jawaban cepat seputar kami</p>
						</div>
					</div>
				</a>

				<a
					href="/glosarium"
					class="group rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-4 transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-zinc-900 shadow-sm"
				>
					<div class="flex items-center gap-3">
						<div class="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
							<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
								<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
							</svg>
						</div>
						<div>
							<h3 class="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-rose-600 dark:group-hover:text-rose-400">Glosarium IT</h3>
							<p class="text-xs text-slate-500 dark:text-zinc-400">Istilah umum dunia koding</p>
						</div>
					</div>
				</a>
			</div>
		</div>

		<!-- Developer & Technical Details Section (Collapsible) -->
		<div class="mt-12 border-t border-slate-200 dark:border-zinc-800/80 pt-6">
			<div class="flex items-center justify-between">
				<button
					type="button"
					onclick={() => (showDetails = !showDetails)}
					class="text-xs font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 transition inline-flex items-center gap-1.5"
				>
					<svg class="h-3.5 w-3.5 transition-transform duration-200 {showDetails ? 'rotate-180' : ''}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
					</svg>
					{showDetails ? 'Sembunyikan Detail Teknis' : 'Tampilkan Detail Teknis (Developer Info)'}
				</button>

				<!-- Error Switcher Preview Tabs for Testing -->
				<div class="hidden sm:flex items-center gap-1.5 text-xs text-slate-400 dark:text-zinc-500">
					<span>Simulasi Preview:</span>
					<button
						type="button"
						onclick={() => setPreview(null)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === null ? 'bg-slate-200 dark:bg-zinc-800 font-semibold text-slate-800 dark:text-white' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						Asli ({status})
					</button>
					<button
						type="button"
						onclick={() => setPreview(404)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === 404 ? 'bg-rose-500/20 text-rose-600 font-semibold' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						404
					</button>
					<button
						type="button"
						onclick={() => setPreview(403)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === 403 ? 'bg-amber-500/20 text-amber-600 font-semibold' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						403
					</button>
					<button
						type="button"
						onclick={() => setPreview(401)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === 401 ? 'bg-purple-500/20 text-purple-600 font-semibold' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						401
					</button>
					<button
						type="button"
						onclick={() => setPreview(500)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === 500 ? 'bg-red-500/20 text-red-600 font-semibold' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						500
					</button>
					<button
						type="button"
						onclick={() => setPreview(503)}
						class="px-2 py-0.5 rounded transition {activePreviewStatus === 503 ? 'bg-sky-500/20 text-sky-600 font-semibold' : 'hover:text-slate-700 dark:hover:text-zinc-300'}"
					>
						503
					</button>
				</div>
			</div>

			{#if showDetails}
				<div class="mt-4 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-900 text-zinc-100 p-4 text-left font-mono text-xs shadow-inner transition-all">
					<div class="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
						<span class="text-zinc-400 font-semibold">Error Diagnostics</span>
						<button
							type="button"
							onclick={copyTechnicalDetails}
							class="text-xs text-rose-400 hover:text-rose-300 transition flex items-center gap-1"
						>
							{#if copiedDetails}
								<span>✓ Tersalin!</span>
							{:else}
								<span>Salin rincian</span>
							{/if}
						</button>
					</div>

					<p><span class="text-zinc-500">Status Code:</span> <span class="text-rose-400 font-bold">{currentStatus}</span></p>
					<p><span class="text-zinc-500">Error Message:</span> <span class="text-amber-300">{errorMessage || 'None provided'}</span></p>
					<p><span class="text-zinc-500">Platform:</span> SvelteKit / Baricode Indonesia</p>
				</div>
			{/if}
		</div>
	</div>
</section>
