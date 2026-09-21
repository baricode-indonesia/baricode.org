<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import { siteConfig } from '$lib/data/site';
	import BaricodeLogo from '$lib/components/BaricodeLogo.svelte';

	let mobileMenuOpen = $state(false);
	let activeDropdown = $state<string | null>(null);
	let mobileExpanded = $state<Record<string, boolean>>({
		belajar: true,
		komunitas: false,
		tentang: false
	});

	let closeTimer: ReturnType<typeof setTimeout> | null = null;

	function openDropdown(name: string) {
		if (closeTimer) {
			clearTimeout(closeTimer);
			closeTimer = null;
		}
		activeDropdown = name;
	}

	function closeDropdownWithDelay() {
		if (closeTimer) clearTimeout(closeTimer);
		closeTimer = setTimeout(() => {
			activeDropdown = null;
		}, 160);
	}

	function toggleDropdown(name: string) {
		if (activeDropdown === name) {
			activeDropdown = null;
		} else {
			activeDropdown = name;
		}
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function toggleMobileSection(name: string) {
		mobileExpanded[name] = !mobileExpanded[name];
	}

	function closeAll() {
		activeDropdown = null;
		mobileMenuOpen = false;
	}

	afterNavigate(() => {
		closeAll();
	});

	let currentPath = $derived(page.url.pathname);

	let isHomeActive = $derived(currentPath === '/');
	let isBelajarActive = $derived(
		currentPath.startsWith('/roadmap') ||
		currentPath.startsWith('/kursus') ||
		currentPath.startsWith('/untuk-pemula') ||
		currentPath.startsWith('/glosarium')
	);
	let isArtikelActive = $derived(currentPath.startsWith('/artikel'));
	let isKomunitasActive = $derived(
		currentPath.startsWith('/whatsapp') ||
		currentPath.startsWith('/tata-tertib-grub')
	);
	let isTentangActive = $derived(
		currentPath.startsWith('/tentang') ||
		currentPath.startsWith('/faq') ||
		currentPath.startsWith('/kontak')
	);

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeAll();
		}
	}

	function handleWindowClick(event: MouseEvent) {
		const target = event.target as HTMLElement | null;
		if (target && !target.closest('.navbar-container')) {
			activeDropdown = null;
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} onclick={handleWindowClick} />

<header class="sticky top-0 z-40 border-b border-slate-200/80 bg-white/85 dark:border-zinc-800/80 dark:bg-[#0B0F17]/90 backdrop-blur-xl transition-colors navbar-container">
	<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
		<!-- Brand Logo -->
		<div class="flex items-center gap-3">
			<a href="/" onclick={closeAll} class="transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded-lg">
				<BaricodeLogo class="size-8" />
			</a>
		</div>

		<!-- Desktop Navigation Menu -->
		<nav class="hidden items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-zinc-300 md:flex" aria-label="Navigasi Utama">
			<!-- Beranda -->
			<a
				href="/"
				class="rounded-lg px-3 py-2 transition hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-zinc-800/60 dark:hover:text-white {isHomeActive ? 'text-red-600 dark:text-red-400 font-semibold' : ''}"
			>
				Beranda
			</a>

			<!-- Belajar Dropdown -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative"
				onmouseenter={() => openDropdown('belajar')}
				onmouseleave={closeDropdownWithDelay}
			>
				<button
					type="button"
					onclick={() => toggleDropdown('belajar')}
					aria-expanded={activeDropdown === 'belajar'}
					aria-haspopup="true"
					class="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-zinc-800/60 dark:hover:text-white {isBelajarActive || activeDropdown === 'belajar' ? 'text-red-600 dark:text-red-400 font-semibold' : ''}"
				>
					<span>Belajar</span>
					<svg
						class="size-3.5 transition-transform duration-200 {activeDropdown === 'belajar' ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400 dark:text-zinc-500'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
					</svg>
				</button>

				{#if activeDropdown === 'belajar'}
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="absolute top-full left-0 z-50 pt-2 animate-in fade-in slide-in-from-top-1 duration-150"
						onmouseenter={() => openDropdown('belajar')}
						onmouseleave={closeDropdownWithDelay}
					>
						<div class="w-[25rem] rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-[#0E1420]/95 dark:shadow-black/50">
							<div class="space-y-1">
								<!-- Roadmap Belajar -->
								<a
									href="/roadmap"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/roadmap') ? 'bg-red-50/80 dark:bg-red-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503-14.772a.75.75 0 0 0-.503-.478l-6-1.5a.75.75 0 0 0-.4 0l-6 1.5a.75.75 0 0 0-.6.75v13.5a.75.75 0 0 0 .937.728l5.663-1.416 5.663 1.416a.75.75 0 0 0 .937-.728V3.75a.75.75 0 0 0-.6-.75l-.097-.022Z" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition">
												Roadmap Belajar
											</span>
											<span class="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-600 dark:bg-red-500/20 dark:text-red-400">
												Populer
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Panduan alur belajar terstruktur dari nol hingga mahir
										</p>
									</div>
								</a>

								<!-- Kursus & Akademi -->
								<a
									href="/kursus"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/kursus') ? 'bg-red-50/80 dark:bg-red-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.5 2.35 2.75 5.25 2.75s5.25-1.25 5.25-2.75" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-rose-600 dark:text-zinc-100 dark:group-hover:text-rose-400 transition">
												Kursus &amp; Akademi
											</span>
											<span class="rounded-full bg-rose-500/10 px-2 py-0.5 text-[10px] font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
												Mentoring
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Program bimbingan intensif &amp; kurikulum terarah
										</p>
									</div>
								</a>

								<!-- Panduan Pemula -->
								<a
									href="/untuk-pemula"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/untuk-pemula') ? 'bg-amber-50/80 dark:bg-amber-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-amber-600 dark:text-zinc-100 dark:group-hover:text-amber-400 transition">
												Panduan Pemula
											</span>
											<span class="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
												Dari Nol
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Mulai koding dari nol walau fasilitas serba terbatas
										</p>
									</div>
								</a>

								<!-- Glosarium IT -->
								<a
									href="/glosarium"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/glosarium') ? 'bg-emerald-50/80 dark:bg-emerald-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400 transition">
												Glosarium IT
											</span>
											<span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
												Kamus
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Kamus istilah pemrograman dengan bahasa santai
										</p>
									</div>
								</a>
							</div>

							<!-- Subtle footer link -->
							<div class="mt-2 border-t border-slate-100 dark:border-zinc-800/80 pt-2 px-2 pb-1">
								<a
									href="/untuk-pemula"
									onclick={closeAll}
									class="flex items-center justify-between text-xs text-slate-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-400 transition"
								>
									<span>Baru pertama kali kenal koding?</span>
									<span class="font-medium text-red-600 dark:text-red-400">Mulai dari sini &rarr;</span>
								</a>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Artikel -->
			<a
				href="/artikel"
				class="rounded-lg px-3 py-2 transition hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-zinc-800/60 dark:hover:text-white {isArtikelActive ? 'text-red-600 dark:text-red-400 font-semibold' : ''}"
			>
				Artikel
			</a>

			<!-- Komunitas Dropdown -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative"
				onmouseenter={() => openDropdown('komunitas')}
				onmouseleave={closeDropdownWithDelay}
			>
				<button
					type="button"
					onclick={() => toggleDropdown('komunitas')}
					aria-expanded={activeDropdown === 'komunitas'}
					aria-haspopup="true"
					class="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-zinc-800/60 dark:hover:text-white {isKomunitasActive || activeDropdown === 'komunitas' ? 'text-red-600 dark:text-red-400 font-semibold' : ''}"
				>
					<span>Komunitas</span>
					<svg
						class="size-3.5 transition-transform duration-200 {activeDropdown === 'komunitas' ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400 dark:text-zinc-500'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
					</svg>
				</button>

				{#if activeDropdown === 'komunitas'}
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="absolute top-full left-1/2 -translate-x-1/2 z-50 pt-2 animate-in fade-in slide-in-from-top-1 duration-150"
						onmouseenter={() => openDropdown('komunitas')}
						onmouseleave={closeDropdownWithDelay}
					>
						<div class="w-[21rem] rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-[#0E1420]/95 dark:shadow-black/50">
							<div class="space-y-1">
								<!-- Grup WhatsApp -->
								<a
									href="/whatsapp"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/whatsapp') ? 'bg-emerald-50/80 dark:bg-emerald-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition">
										<svg class="size-5 fill-current" viewBox="0 0 24 24">
											<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400 transition">
												Grup WhatsApp
											</span>
											<span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
												Aktif
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Ruang tanya jawab koding &amp; diskusi ramah pemula
										</p>
									</div>
								</a>

								<!-- Tata Tertib Komunitas -->
								<a
									href="/tata-tertib-grub"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/tata-tertib-grub') ? 'bg-teal-50/80 dark:bg-teal-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-400 transition">
												Tata Tertib Grup
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Etika &amp; panduan berdiskusi agar nyaman bersama
										</p>
									</div>
								</a>
							</div>

							<!-- Subtle footer link -->
							<div class="mt-2 border-t border-slate-100 dark:border-zinc-800/80 pt-2 px-2 pb-1">
								<a
									href={siteConfig.whatsappGroup}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center justify-between text-xs text-emerald-600 dark:text-emerald-400 hover:underline transition"
								>
									<span>Gabung langsung ke grup WA</span>
									<span class="font-medium">&rarr;</span>
								</a>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- Tentang Dropdown -->
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="relative"
				onmouseenter={() => openDropdown('tentang')}
				onmouseleave={closeDropdownWithDelay}
			>
				<button
					type="button"
					onclick={() => toggleDropdown('tentang')}
					aria-expanded={activeDropdown === 'tentang'}
					aria-haspopup="true"
					class="inline-flex items-center gap-1.5 rounded-lg px-3 py-2 transition hover:bg-slate-100/80 hover:text-slate-900 dark:hover:bg-zinc-800/60 dark:hover:text-white {isTentangActive || activeDropdown === 'tentang' ? 'text-red-600 dark:text-red-400 font-semibold' : ''}"
				>
					<span>Tentang</span>
					<svg
						class="size-3.5 transition-transform duration-200 {activeDropdown === 'tentang' ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400 dark:text-zinc-500'}"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
					</svg>
				</button>

				{#if activeDropdown === 'tentang'}
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="absolute top-full right-0 z-50 pt-2 animate-in fade-in slide-in-from-top-1 duration-150"
						onmouseenter={() => openDropdown('tentang')}
						onmouseleave={closeDropdownWithDelay}
					>
						<div class="w-[20rem] rounded-2xl border border-slate-200/90 bg-white/95 p-2.5 shadow-xl shadow-slate-900/10 backdrop-blur-xl dark:border-zinc-800/90 dark:bg-[#0E1420]/95 dark:shadow-black/50">
							<div class="space-y-1">
								<!-- Tentang Baricode -->
								<a
									href="/tentang"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/tentang') ? 'bg-rose-50/80 dark:bg-rose-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 group-hover:bg-rose-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.198A5.97 5.97 0 0 0 6 18.72m0 0v.032c0 .225.012.447.037.666M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-rose-600 dark:text-zinc-100 dark:group-hover:text-rose-400 transition">
												Profil Baricode
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Visi, misi &amp; cerita di balik Baricode
										</p>
									</div>
								</a>

								<!-- FAQ -->
								<a
									href="/faq"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/faq') ? 'bg-indigo-50/80 dark:bg-indigo-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-indigo-600 dark:text-zinc-100 dark:group-hover:text-indigo-400 transition">
												FAQ (Tanya Jawab)
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Pertanyaan umum seputar pembelajaran
										</p>
									</div>
								</a>

								<!-- Kontak -->
								<a
									href="/kontak"
									onclick={closeAll}
									class="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/kontak') ? 'bg-red-50/80 dark:bg-red-950/30' : ''}"
								>
									<div class="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400 group-hover:bg-red-600 group-hover:text-white transition">
										<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
											<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
										</svg>
									</div>
									<div class="min-w-0 flex-1">
										<div class="flex items-center gap-2">
											<span class="text-sm font-semibold text-slate-800 group-hover:text-red-600 dark:text-zinc-100 dark:group-hover:text-red-400 transition">
												Hubungi Kami
											</span>
										</div>
										<p class="mt-0.5 text-xs text-slate-500 dark:text-zinc-400">
											Kirim pesan, saran, atau kolaborasi
										</p>
									</div>
								</a>
							</div>
						</div>
					</div>
				{/if}
			</div>

			<!-- CTA Button: Mulai Belajar -->
			<a
				href="/kursus"
				onclick={closeAll}
				class="ml-1.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/25 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500"
			>
				Mulai Belajar
			</a>
		</nav>

		<!-- Mobile Menu Hamburger Button -->
		<button
			type="button"
			onclick={toggleMobileMenu}
			class="rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
			aria-label="Buka menu navigasi"
			aria-expanded={mobileMenuOpen}
		>
			{#if !mobileMenuOpen}
				<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
				</svg>
			{:else}
				<svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu Panel -->
	{#if mobileMenuOpen}
		<nav class="border-t border-slate-200/80 bg-white/95 dark:border-zinc-800/80 dark:bg-[#0B0F17]/95 px-5 py-5 md:hidden max-h-[calc(100vh-5rem)] overflow-y-auto">
			<div class="flex flex-col gap-2">
				<!-- Beranda -->
				<a
					href="/"
					onclick={closeAll}
					class="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {isHomeActive ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/20' : 'text-slate-800 dark:text-zinc-200'}"
				>
					<span>Beranda</span>
				</a>

				<!-- Belajar Accordion -->
				<div class="rounded-xl border border-slate-200/60 dark:border-zinc-800/60 overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
					<button
						type="button"
						onclick={() => toggleMobileSection('belajar')}
						class="flex w-full items-center justify-between px-3.5 py-2.5 text-sm font-medium transition {isBelajarActive ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-slate-800 dark:text-zinc-200'}"
					>
						<span class="flex items-center gap-2">
							<span>Belajar</span>
							<span class="rounded-full bg-red-500/10 px-2 py-0.5 text-[10px] font-semibold text-red-600 dark:bg-red-500/20 dark:text-red-400">4 Menu</span>
						</span>
						<svg
							class="size-4 transition-transform duration-200 {mobileExpanded.belajar ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400'}"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
						</svg>
					</button>

					{#if mobileExpanded.belajar}
						<div class="border-t border-slate-200/60 dark:border-zinc-800/60 px-2 py-2 space-y-1 bg-white/70 dark:bg-zinc-950/40">
							<a
								href="/roadmap"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/roadmap') ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50 dark:bg-red-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503-14.772a.75.75 0 0 0-.503-.478l-6-1.5a.75.75 0 0 0-.4 0l-6 1.5a.75.75 0 0 0-.6.75v13.5a.75.75 0 0 0 .937.728l5.663-1.416 5.663 1.416a.75.75 0 0 0 .937-.728V3.75a.75.75 0 0 0-.6-.75l-.097-.022Z" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Roadmap Belajar</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Alur belajar terstruktur</div>
								</div>
							</a>

							<a
								href="/kursus"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/kursus') ? 'text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-5.25 6.557c0 1.5 2.35 2.75 5.25 2.75s5.25-1.25 5.25-2.75" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Kursus &amp; Akademi</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Kelas &amp; bimbingan terarah</div>
								</div>
							</a>

							<a
								href="/untuk-pemula"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/untuk-pemula') ? 'text-amber-600 dark:text-amber-400 font-semibold bg-amber-50 dark:bg-amber-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Panduan Pemula</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Mulai dari kondisi terbatas</div>
								</div>
							</a>

							<a
								href="/glosarium"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/glosarium') ? 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Glosarium IT</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Kamus istilah ramah pemula</div>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<!-- Artikel -->
				<a
					href="/artikel"
					onclick={closeAll}
					class="flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition hover:bg-slate-100/80 dark:hover:bg-zinc-800/60 {isArtikelActive ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50/60 dark:bg-red-950/20' : 'text-slate-800 dark:text-zinc-200'}"
				>
					<span>Artikel</span>
				</a>

				<!-- Komunitas Accordion -->
				<div class="rounded-xl border border-slate-200/60 dark:border-zinc-800/60 overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
					<button
						type="button"
						onclick={() => toggleMobileSection('komunitas')}
						class="flex w-full items-center justify-between px-3.5 py-2.5 text-sm font-medium transition {isKomunitasActive ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-slate-800 dark:text-zinc-200'}"
					>
						<span class="flex items-center gap-2">
							<span>Komunitas</span>
							<span class="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">Grup WA</span>
						</span>
						<svg
							class="size-4 transition-transform duration-200 {mobileExpanded.komunitas ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400'}"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
						</svg>
					</button>

					{#if mobileExpanded.komunitas}
						<div class="border-t border-slate-200/60 dark:border-zinc-800/60 px-2 py-2 space-y-1 bg-white/70 dark:bg-zinc-950/40">
							<a
								href="/whatsapp"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/whatsapp') ? 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
									<svg class="size-4 fill-current" viewBox="0 0 24 24">
										<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
									</svg>
								</div>
								<div>
									<div class="font-semibold">Grup WhatsApp General</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Komunitas tanya jawab santai</div>
								</div>
							</a>

							<a
								href="/tata-tertib-grub"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/tata-tertib-grub') ? 'text-teal-600 dark:text-teal-400 font-semibold bg-teal-50 dark:bg-teal-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-teal-500/10 text-teal-600 dark:bg-teal-500/20 dark:text-teal-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Tata Tertib Grup</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Etika &amp; panduan diskusi</div>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<!-- Tentang Accordion -->
				<div class="rounded-xl border border-slate-200/60 dark:border-zinc-800/60 overflow-hidden bg-slate-50/50 dark:bg-zinc-900/30">
					<button
						type="button"
						onclick={() => toggleMobileSection('tentang')}
						class="flex w-full items-center justify-between px-3.5 py-2.5 text-sm font-medium transition {isTentangActive ? 'text-red-600 dark:text-red-400 font-semibold' : 'text-slate-800 dark:text-zinc-200'}"
					>
						<span>Tentang Kami</span>
						<svg
							class="size-4 transition-transform duration-200 {mobileExpanded.tentang ? 'rotate-180 text-red-600 dark:text-red-400' : 'text-slate-400'}"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="2"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
						</svg>
					</button>

					{#if mobileExpanded.tentang}
						<div class="border-t border-slate-200/60 dark:border-zinc-800/60 px-2 py-2 space-y-1 bg-white/70 dark:bg-zinc-950/40">
							<a
								href="/tentang"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/tentang') ? 'text-rose-600 dark:text-rose-400 font-semibold bg-rose-50 dark:bg-rose-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.999-3.198A5.97 5.97 0 0 0 6 18.72m0 0v.032c0 .225.012.447.037.666M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Profil Baricode</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Visi, misi &amp; cerita kami</div>
								</div>
							</a>

							<a
								href="/faq"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/faq') ? 'text-indigo-600 dark:text-indigo-400 font-semibold bg-indigo-50 dark:bg-indigo-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">FAQ (Tanya Jawab)</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Pertanyaan umum</div>
								</div>
							</a>

							<a
								href="/kontak"
								onclick={closeAll}
								class="flex items-center gap-3 rounded-lg px-3 py-2 text-xs font-medium transition hover:bg-slate-100 dark:hover:bg-zinc-800/60 {currentPath.startsWith('/kontak') ? 'text-red-600 dark:text-red-400 font-semibold bg-red-50 dark:bg-red-950/30' : 'text-slate-700 dark:text-zinc-300'}"
							>
								<div class="flex size-7 shrink-0 items-center justify-center rounded-md bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400">
									<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
										<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
									</svg>
								</div>
								<div>
									<div class="font-semibold">Hubungi Kami</div>
									<div class="text-[11px] text-slate-500 dark:text-zinc-400">Kontak resmi tim Baricode</div>
								</div>
							</a>
						</div>
					{/if}
				</div>

				<!-- Mobile CTA Button -->
				<div class="pt-3">
					<a
						href="/kursus"
						onclick={closeAll}
						class="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-red-600/25"
					>
						<span>Mulai Belajar Sekarang</span>
						<span>&rarr;</span>
					</a>
				</div>
			</div>
		</nav>
	{/if}
</header>
