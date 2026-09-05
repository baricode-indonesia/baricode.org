<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import BaricodeLogo from '$lib/components/BaricodeLogo.svelte';
	import { siteConfig } from '$lib/data/site';

	let { children } = $props();

	let mobileMenuOpen = $state(false);

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" href="/favicon.svg" />
	<title>Baricode Indonesia — Akademi dan Kursus Online IT</title>
	<meta name="description" content="Akademi dan kursus online IT untuk siapa saja. Belajar koding dari mana saja, meski dari kondisi paling terbatas sekalipun." />

	<!-- Open Graph / WhatsApp Sharing Meta Tags -->
	<meta property="og:site_name" content="Baricode Indonesia" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Baricode Indonesia — Akademi & Kursus Online IT Membumi" />
	<meta property="og:description" content="Akademi dan kursus online IT untuk siapa saja. Belajar koding dari mana saja, meski dari kondisi paling terbatas sekalipun." />
	<meta property="og:image" content="https://baricode.org/og-image.jpg" />
	<meta property="og:image:secure_url" content="https://baricode.org/og-image.jpg" />
	<meta property="og:image:type" content="image/jpeg" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content="Baricode Indonesia - Akademi & Kursus Online IT Membumi" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Baricode Indonesia — Akademi & Kursus Online IT Membumi" />
	<meta name="twitter:description" content="Akademi dan kursus online IT untuk siapa saja. Belajar koding dari mana saja, meski dari kondisi paling terbatas sekalipun." />
	<meta name="twitter:image" content="https://baricode.org/og-image.jpg" />
</svelte:head>

<div class="relative flex min-h-screen flex-col overflow-x-hidden bg-slate-50 dark:bg-[#0B0F17] font-sans text-slate-900 dark:text-zinc-100 antialiased transition-colors duration-200">
	<!-- Ambient Background Glow -->
	<div class="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
		<div class="absolute -top-40 left-1/2 h-[40rem] w-[45rem] -translate-x-1/2 rounded-full bg-gradient-to-b from-rose-500/10 via-red-500/5 dark:from-red-600/15 dark:via-rose-600/5 to-transparent blur-[140px]"></div>
		<div class="absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-rose-500/10 dark:bg-rose-600/10 blur-[130px]"></div>
		<div class="absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-red-500/10 dark:bg-red-600/10 blur-[130px]"></div>
		<div class="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.03)_1px,transparent_0)] dark:bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.04)_1px,transparent_0)] bg-[length:32px_32px]"></div>
	</div>

	<!-- Top Accent Bar -->
	<div class="h-0.5 w-full bg-gradient-to-r from-red-600 via-rose-500 to-amber-500"></div>

	<!-- Header -->
	<header class="sticky top-0 z-30 border-b border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-[#0B0F17]/85 backdrop-blur-xl transition-colors">
		<div class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
			<div class="flex items-center gap-3">
				<a href="/" class="transition hover:opacity-90">
					<BaricodeLogo class="size-8" />
				</a>
			</div>

			<nav class="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-zinc-300 md:flex">
				<a href="/" class="transition hover:text-slate-900 dark:hover:text-white">Beranda</a>
				<a href="/artikel" class="transition hover:text-slate-900 dark:hover:text-white">Artikel</a>
				<a href="/kursus" class="transition hover:text-slate-900 dark:hover:text-white">Kursus &amp; Akademi</a>
				<a href="/tentang" class="transition hover:text-slate-900 dark:hover:text-white">Tentang</a>
				<a href="/faq" class="transition hover:text-slate-900 dark:hover:text-white">FAQ</a>
				<a href="/kontak" class="transition hover:text-slate-900 dark:hover:text-white">Kontak</a>
				<a
					href="/kursus"
					class="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/25 transition hover:from-red-500 hover:to-rose-500"
				>
					Mulai Belajar
				</a>
			</nav>

			<button
				type="button"
				onclick={toggleMobileMenu}
				class="text-slate-700 hover:text-slate-900 dark:text-zinc-300 dark:hover:text-white md:hidden"
				aria-label="Buka menu"
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

		{#if mobileMenuOpen}
			<nav class="border-t border-slate-200/80 bg-white/95 dark:border-zinc-800/80 dark:bg-[#0B0F17]/95 px-6 py-4 md:hidden">
				<div class="flex flex-col gap-4 text-sm font-medium text-slate-700 dark:text-zinc-300">
					<a href="/" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">Beranda</a>
					<a href="/artikel" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">Artikel</a>
					<a href="/kursus" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">Kursus &amp; Akademi</a>
					<a href="/tentang" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">Tentang</a>
					<a href="/faq" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">FAQ</a>
					<a href="/kontak" onclick={closeMobileMenu} class="hover:text-slate-900 dark:hover:text-white">Kontak</a>
					<a
						href="/kursus"
						onclick={closeMobileMenu}
						class="w-fit rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2 text-xs font-semibold text-white shadow-md"
					>
						Mulai Belajar
					</a>
				</div>
			</nav>
		{/if}
	</header>

	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="border-t border-slate-200/80 bg-slate-100/90 dark:border-zinc-800/80 dark:bg-zinc-950/90 text-slate-600 dark:text-zinc-400">
		<div class="mx-auto max-w-5xl px-6 py-12 text-sm">
			<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
				<div class="max-w-md">
					<a href="/" class="block transition hover:opacity-90">
						<BaricodeLogo class="size-7" />
					</a>
					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
						Akademi dan kursus online IT yang membumi. Kami pun memulai semuanya dari kondisi paling terbatas sekalipun.
					</p>
				</div>
				<div class="flex items-center gap-3">
					<a
						href={siteConfig.socials.youtube}
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition hover:border-red-500/40 hover:bg-red-50/50 hover:text-red-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-red-500/40 dark:hover:bg-red-950/40 dark:hover:text-red-400"
						aria-label="YouTube Baricode Indonesia"
					>
						<svg class="size-4 fill-current text-red-600 dark:text-red-500" viewBox="0 0 24 24" aria-hidden="true">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
						</svg>
						<span>YouTube</span>
					</a>
				</div>
			</div>

			<div class="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-slate-200 dark:border-zinc-800/60 pt-6 text-xs text-slate-600 dark:text-zinc-300">
				<a href="/artikel" class="transition hover:text-slate-900 dark:hover:text-white">Artikel</a>
				<a href="/kursus" class="transition hover:text-slate-900 dark:hover:text-white">Kursus &amp; Akademi</a>
				<a href="/tentang" class="transition hover:text-slate-900 dark:hover:text-white">Tentang Baricode</a>
				<a href="/untuk-santri" class="transition hover:text-slate-900 dark:hover:text-white">Untuk Santri</a>
				<a href="/testimoni" class="transition hover:text-slate-900 dark:hover:text-white">Testimoni</a>
				<a href="/glosarium" class="transition hover:text-slate-900 dark:hover:text-white">Glosarium</a>
				<a href="/faq" class="transition hover:text-slate-900 dark:hover:text-white">FAQ</a>
				<a href="/kontak" class="transition hover:text-slate-900 dark:hover:text-white">Kontak</a>
			</div>

			<div class="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500 dark:text-zinc-500">
				<a href="/syarat-dan-ketentuan" class="transition hover:text-slate-800 dark:hover:text-zinc-300">Syarat &amp; Ketentuan</a>
				<a href="/kebijakan-privasi" class="transition hover:text-slate-800 dark:hover:text-zinc-300">Kebijakan Privasi</a>
			</div>

			<p class="mt-6 text-xs text-slate-500 dark:text-zinc-600">&copy; {new Date().getFullYear()} Baricode Indonesia. Seluruh hak cipta dilindungi.</p>
		</div>
	</footer>
</div>
