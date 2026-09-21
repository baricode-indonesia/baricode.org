<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { glossaryList, glossaryCategories, type GlossaryCategory } from '$lib/data/glossary';

	let searchQuery = $state('');
	let selectedCategory = $state<string>('all');
	let selectedLetter = $state<string>('all');
	let copiedSlug = $state<string | null>(null);

	const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

	const availableLetters = $derived(
		Array.from(new Set(glossaryList.map((item) => item.term[0].toUpperCase()))).sort()
	);

	const filteredTerms = $derived(
		glossaryList.filter((item) => {
			// Filter kategori
			if (selectedCategory !== 'all' && item.category !== selectedCategory) {
				return false;
			}

			// Filter huruf awal
			if (selectedLetter !== 'all' && !item.term.toUpperCase().startsWith(selectedLetter)) {
				return false;
			}

			// Filter query pencarian
			if (searchQuery.trim() !== '') {
				const q = searchQuery.toLowerCase().trim();
				const matchTerm = item.term.toLowerCase().includes(q);
				const matchAbbr = item.abbreviation?.toLowerCase().includes(q) ?? false;
				const matchDef = item.definition.toLowerCase().includes(q);
				const matchAnalogy = item.analogy.toLowerCase().includes(q);
				const matchEx = item.example?.toLowerCase().includes(q) ?? false;

				return matchTerm || matchAbbr || matchDef || matchAnalogy || matchEx;
			}

			return true;
		})
	);

	function resetFilters() {
		searchQuery = '';
		selectedCategory = 'all';
		selectedLetter = 'all';
	}

	async function copyTermLink(slug: string) {
		const url = `${window.location.origin}/glosarium#${slug}`;
		try {
			await navigator.clipboard.writeText(url);
			copiedSlug = slug;
			setTimeout(() => {
				if (copiedSlug === slug) copiedSlug = null;
			}, 2000);
		} catch (err) {
			console.error('Failed to copy', err);
		}
	}

	function getCategoryBadgeClass(category: GlossaryCategory) {
		switch (category) {
			case 'dasar':
				return 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800/60';
			case 'frontend':
				return 'bg-rose-50 text-rose-700 border-rose-200/80 dark:bg-rose-950/50 dark:text-rose-300 dark:border-rose-800/60';
			case 'backend':
				return 'bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800/60';
			case 'tools':
				return 'bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800/60';
			case 'database':
				return 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/50 dark:text-purple-300 dark:border-purple-800/60';
			default:
				return 'bg-slate-50 text-slate-700 border-slate-200/80 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700';
		}
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': 'https://www.baricode.org/glosarium#webpage',
				'url': 'https://www.baricode.org/glosarium',
				'name': 'Glosarium Istilah Koding & IT untuk Pemula — Baricode Indonesia',
				'description':
					'Kamus istilah koding, pemrograman, dan IT terlengkap untuk pemula dengan penjelasan sederhana & analogi membumi.',
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
							'name': 'Glosarium',
							'item': 'https://www.baricode.org/glosarium'
						}
					]
				}
			},
			{
				'@type': 'DefinedTermSet',
				'@id': 'https://www.baricode.org/glosarium#termset',
				'name': 'Glosarium Istilah Pemrograman & IT Baricode Indonesia',
				'description':
					'Daftar istilah dan konsep kunci dunia pemrograman bagi pemula dengan analogi kehidupan sehari-hari.',
				'hasDefinedTerm': glossaryList.map((item) => ({
					'@type': 'DefinedTerm',
					'name': item.term,
					'termCode': item.slug,
					'description': item.definition,
					'url': `https://www.baricode.org/glosarium#${item.slug}`
				}))
			}
		]
	};
</script>

<svelte:head>
	<title>Glosarium Istilah Koding &amp; IT untuk Pemula — Baricode Indonesia</title>
	<meta
		name="description"
		content="Kamus dan glosarium istilah koding &amp; IT terlengkap untuk pemula. Penjelasan sederhana dengan analogi membumi: API, Git, Frontend, Backend, dan lainnya."
	/>
	<meta
		name="keywords"
		content="glosarium koding, kamus istilah IT, arti kata pemrograman pemula, apa itu API, apa itu backend, apa itu frontend, istilah programmer bahasa indonesia"
	/>
	<link rel="canonical" href="https://www.baricode.org/glosarium" />

	<!-- Open Graph / Social Sharing -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Glosarium Istilah Koding &amp; IT untuk Pemula — Baricode Indonesia" />
	<meta
		property="og:description"
		content="Kamus istilah koding dan IT terlengkap dengan penjelasan bahasa sederhana dan analogi kehidupan sehari-hari."
	/>
	<meta property="og:url" content="https://www.baricode.org/glosarium" />
	<meta property="og:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Glosarium Istilah Koding &amp; IT untuk Pemula — Baricode Indonesia" />
	<meta
		name="twitter:description"
		content="Kumpulan istilah teknis dunia programming dijelaskan secara sederhana dan membumi untuk pemula."
	/>
	<meta name="twitter:image" content="https://www.baricode.org/og-image.jpg" />

	<!-- JSON-LD Structured Data -->
	{@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
	<!-- Breadcrumb Navigation -->
	<nav aria-label="Breadcrumb" class="mb-6 flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-zinc-400">
		<a href="/" class="transition hover:text-rose-600 dark:hover:text-rose-400">Beranda</a>
		<span>/</span>
		<span class="text-slate-800 dark:text-zinc-200">Glosarium</span>
	</nav>

	<!-- Header / Hero -->
	<header class="text-left">
		<div class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3.5 py-1 text-xs font-semibold text-rose-600 dark:text-rose-300 backdrop-blur">
			<span>📚</span>
			<span>Kamus Istilah Koding &amp; IT Membumi</span>
		</div>

		<h1 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl sm:leading-tight">
			Glosarium Istilah <br class="hidden sm:inline" />
			<span class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-400 dark:via-rose-400 dark:to-amber-300 bg-clip-text text-transparent">
				Pemrograman untuk Pemula
			</span>
		</h1>

		<p class="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-lg">
			Sering merasa pusing saat mendengar istilah asing seperti <em>API</em>, <em>Git</em>, <em>Backend</em>, atau <em>Repository</em>? Tenang, kamu tidak sendirian. Halaman ini merangkum istilah-istilah penting dunia IT dengan penjelasan bahasa manusia dan analogi sehari-hari yang membumi.
		</p>
	</header>

	<!-- Search & Filter Controls Panel -->
	<div class="mt-10 rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 sm:p-6">
		<!-- Search Input Bar -->
		<div class="relative">
			<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400 dark:text-zinc-500">
				<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
				</svg>
			</div>
			<input
				type="text"
				bind:value={searchQuery}
				placeholder="Cari istilah, singkatan, analogi (contoh: API, variabel, git, server)..."
				class="w-full rounded-xl border border-slate-200 bg-white/90 py-3.5 pl-11 pr-10 text-sm text-slate-900 placeholder-slate-400 shadow-xs transition focus:border-rose-500 focus:outline-hidden focus:ring-2 focus:ring-rose-500/20 dark:border-zinc-700 dark:bg-zinc-800/90 dark:text-white dark:placeholder-zinc-500"
			/>
			{#if searchQuery}
				<button
					type="button"
					onclick={() => (searchQuery = '')}
					class="absolute inset-y-0 right-0 flex items-center pr-3.5 text-slate-400 hover:text-slate-600 dark:text-zinc-500 dark:hover:text-zinc-300"
					aria-label="Bersihkan pencarian"
				>
					<svg class="size-5" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
					</svg>
				</button>
			{/if}
		</div>

		<!-- Category Filter Pills -->
		<div class="mt-5">
			<span class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">Kategori Topik:</span>
			<div class="mt-2.5 flex flex-wrap gap-2">
				{#each glossaryCategories as cat}
					{@const count = cat.key === 'all' ? glossaryList.length : glossaryList.filter((i) => i.category === cat.key).length}
					<button
						type="button"
						onclick={() => (selectedCategory = cat.key)}
						class={`rounded-lg px-3 py-1.5 text-xs font-medium transition cursor-pointer ${
							selectedCategory === cat.key
								? 'bg-rose-600 text-white shadow-xs'
								: 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
						}`}
					>
						{cat.label} ({count})
					</button>
				{/each}
			</div>
		</div>

		<!-- Alphabet Filter Bar (A-Z) -->
		<div class="mt-5 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
			<div class="flex items-center justify-between">
				<span class="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
					Indeks Huruf:
				</span>
				{#if selectedLetter !== 'all' || selectedCategory !== 'all' || searchQuery}
					<button
						type="button"
						onclick={resetFilters}
						class="text-xs font-medium text-rose-600 hover:underline dark:text-rose-400 cursor-pointer"
					>
						Reset Semua Filter
					</button>
				{/if}
			</div>

			<div class="mt-2.5 flex flex-wrap gap-1.5">
				<button
					type="button"
					onclick={() => (selectedLetter = 'all')}
					class={`size-8 rounded-lg text-xs font-bold transition cursor-pointer flex items-center justify-center ${
						selectedLetter === 'all'
							? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
							: 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700'
					}`}
				>
					Semua
				</button>
				{#each allLetters as letter}
					{@const isAvailable = availableLetters.includes(letter)}
					<button
						type="button"
						disabled={!isAvailable}
						onclick={() => (selectedLetter = letter)}
						class={`size-8 rounded-lg text-xs font-bold transition flex items-center justify-center ${
							selectedLetter === letter
								? 'bg-rose-600 text-white shadow-xs'
								: isAvailable
									? 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 cursor-pointer'
									: 'bg-slate-50 text-slate-300 cursor-not-allowed dark:bg-zinc-900/50 dark:text-zinc-700'
						}`}
					>
						{letter}
					</button>
				{/each}
			</div>
		</div>
	</div>

	<!-- Results Counter & Status -->
	<div class="mt-6 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 px-1">
		<div>
			Menampilkan <strong class="text-slate-800 dark:text-zinc-200">{filteredTerms.length}</strong> istilah
			{#if searchQuery}
				untuk pencarian "<em>{searchQuery}</em>"
			{/if}
			{#if selectedCategory !== 'all'}
				dalam kategori <strong class="text-slate-800 dark:text-zinc-200">{glossaryCategories.find((c) => c.key === selectedCategory)?.label}</strong>
			{/if}
			{#if selectedLetter !== 'all'}
				awalan huruf <strong class="text-slate-800 dark:text-zinc-200">{selectedLetter}</strong>
			{/if}
		</div>

		{#if filteredTerms.length > 0}
			<div class="hidden sm:block">
				Klik ikon 🔗 untuk menyalin tautan istilah
			</div>
		{/if}
	</div>

	<!-- Glossary Terms Cards Grid -->
	{#if filteredTerms.length > 0}
		<div class="mt-6 grid gap-5 sm:grid-cols-2">
			{#each filteredTerms as item (item.slug)}
				<article
					id={item.slug}
					class="group relative flex flex-col justify-between scroll-mt-24 rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
				>
					<div>
						<!-- Top Bar: Category Badge & Anchor Link -->
						<div class="flex items-center justify-between">
							<span
								class={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${getCategoryBadgeClass(item.category)}`}
							>
								{item.categoryLabel}
							</span>

							<!-- Copy Anchor Link Button -->
							<button
								type="button"
								onclick={() => copyTermLink(item.slug)}
								class="inline-flex items-center gap-1 rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-600 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300 cursor-pointer"
								title="Salin tautan ke istilah ini"
								aria-label={`Salin tautan ${item.term}`}
							>
								{#if copiedSlug === item.slug}
									<span class="text-[10px] font-medium text-emerald-600 dark:text-emerald-400">Tersalin!</span>
								{/if}
								<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
								</svg>
							</button>
						</div>

						<!-- Term Title -->
						<h2 class="mt-3 text-xl font-bold tracking-tight text-slate-900 dark:text-white">
							{item.term}
							{#if item.abbreviation}
								<span class="text-xs font-normal text-slate-500 dark:text-zinc-400 block sm:inline sm:ml-1.5">
									({item.abbreviation})
								</span>
							{/if}
						</h2>

						<!-- Definition -->
						<p class="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
							{item.definition}
						</p>

						<!-- Analogy Box (Membumi) -->
						<div class="mt-4 rounded-xl border border-amber-200/60 bg-amber-50/70 p-3.5 text-xs dark:border-amber-900/40 dark:bg-amber-950/20">
							<div class="flex items-center gap-1.5 font-bold text-amber-800 dark:text-amber-300">
								<span>💡</span>
								<span>Analogi Membumi:</span>
							</div>
							<p class="mt-1 leading-relaxed text-amber-900/90 dark:text-amber-200/90">
								{item.analogy}
							</p>
						</div>

						<!-- Example (if any) -->
						{#if item.example}
							<div class="mt-3 text-xs text-slate-500 dark:text-zinc-400">
								<strong class="text-slate-700 dark:text-zinc-300">Contoh Penerapan:</strong>
								<code class="mt-1 block rounded-lg bg-slate-100 p-2 font-mono text-[11px] text-slate-800 dark:bg-zinc-800 dark:text-zinc-200 overflow-x-auto">
									{item.example}
								</code>
							</div>
						{/if}
					</div>

					<!-- Bottom: Related Article Link (if available) -->
					{#if item.relatedArticle}
						<div class="mt-5 border-t border-slate-100 pt-3.5 dark:border-zinc-800/80">
							<a
								href={item.relatedArticle.url}
								class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition hover:text-rose-700 dark:text-rose-400 dark:hover:text-rose-300"
							>
								<span>Baca artikel lengkap:</span>
								<span class="underline">{item.relatedArticle.title}</span>
								<span>&rarr;</span>
							</a>
						</div>
					{/if}
				</article>
			{/each}
		</div>
	{:else}
		<!-- Empty State when nothing found -->
		<div class="mt-8 rounded-2xl border border-slate-200/80 bg-white/80 p-10 text-center shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="text-4xl">🔍</div>
			<h3 class="mt-3 text-lg font-bold text-slate-900 dark:text-white">
				Istilah Tidak Ditemukan
			</h3>
			<p class="mx-auto mt-2 max-w-md text-sm text-slate-600 dark:text-zinc-400">
				Tidak ada istilah yang cocok dengan kriteria filter atau kata kunci "<strong>{searchQuery}</strong>".
			</p>
			<div class="mt-6 flex flex-wrap justify-center gap-3">
				<button
					type="button"
					onclick={resetFilters}
					class="rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-zinc-200 cursor-pointer"
				>
					Reset Pencarian &amp; Filter
				</button>
				<a
					href="/whatsapp"
					class="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-50 px-5 py-2.5 text-xs font-semibold text-emerald-700 transition hover:bg-emerald-100 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/60"
				>
					<span>Tanyakan di Grup WhatsApp</span>
					<span>&rarr;</span>
				</a>
			</div>
		</div>
	{/if}

	<!-- Suggest New Term Banner -->
	<div class="mt-14 rounded-2xl border border-rose-500/20 bg-gradient-to-br from-rose-500/10 via-red-500/5 to-amber-500/10 p-6 sm:p-8 backdrop-blur">
		<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<span class="inline-block rounded-full bg-rose-500/20 px-3 py-1 text-xs font-semibold text-rose-700 dark:text-rose-300">
					Usulkan Istilah Baru
				</span>
				<h3 class="mt-2 text-xl font-bold text-slate-900 dark:text-white">
					Menemukan Istilah Asing yang Belum Ada di Sini?
				</h3>
				<p class="mt-2 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
					Dunia koding terus berkembang dengan ratusan istilah baru setiap tahunnya. Jika ada kata atau singkatan yang membuatmu bingung, sampaikan kepada kami lewat grup WhatsApp Baricode Indonesia agar segera kami buatkan penjelasan membumi di kamus ini!
				</p>
			</div>
			<a
				href="/whatsapp"
				class="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-rose-600/20 transition hover:bg-rose-500"
			>
				<span>Usulkan di WhatsApp</span>
				<span>&rarr;</span>
			</a>
		</div>
	</div>

	<!-- Bottom CTA Banner -->
	<div class="mt-12">
		<CtaBanner />
	</div>
</div>
