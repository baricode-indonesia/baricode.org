<script lang="ts">
	import RoadmapMindmap from '$lib/components/RoadmapMindmap.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
	const roadmap = $derived(data.roadmap);

	const totalTopics = $derived(
		roadmap.phases.reduce((acc, phase) => acc + phase.topics.length, 0)
	);

	let copied = $state(false);

	function shareRoadmap() {
		if (typeof navigator !== 'undefined' && navigator.clipboard) {
			navigator.clipboard.writeText(window.location.href);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2500);
		}
	}
</script>

<svelte:head>
	<title>{roadmap.title} — Baricode Indonesia</title>
	<meta name="description" content="{roadmap.description}" />
	<meta property="og:title" content="{roadmap.title} — Baricode Indonesia" />
	<meta property="og:description" content="{roadmap.description}" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://www.baricode.org/roadmap/{roadmap.slug}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{roadmap.title} — Baricode Indonesia" />
	<meta name="twitter:description" content="{roadmap.description}" />
</svelte:head>

<article class="mx-auto max-w-5xl px-6 py-12">
	<!-- Breadcrumbs -->
	<nav class="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400" aria-label="Breadcrumb">
		<a href="/" class="hover:text-slate-900 dark:hover:text-white">Beranda</a>
		<span>/</span>
		<a href="/roadmap" class="hover:text-slate-900 dark:hover:text-white">Roadmap</a>
		<span>/</span>
		<span class="font-medium text-slate-800 dark:text-zinc-200">{roadmap.title}</span>
	</nav>

	<!-- Header Detail -->
	<header class="mt-6 border-b border-slate-200/80 pb-8 dark:border-zinc-800/80">
		<div class="flex flex-wrap items-center gap-2">
			<span class="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
				{roadmap.category}
			</span>
			{#if roadmap.badge}
				<span class="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
					{roadmap.badge}
				</span>
			{/if}
		</div>

		<h1 class="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
			{roadmap.title}
		</h1>

		<p class="mt-2 text-base font-semibold text-rose-600 dark:text-rose-400 sm:text-lg">
			{roadmap.tagline}
		</p>

		<p class="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-base">
			{roadmap.description}
		</p>

		<!-- Meta Stats -->
		<div class="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600 dark:text-zinc-400">
			<div class="flex items-center gap-2">
				<svg class="size-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
				</svg>
				<span>Estimasi Belajar: <strong class="text-slate-900 dark:text-white">{roadmap.estimatedWeeks}</strong></span>
			</div>

			<div class="flex items-center gap-2">
				<svg class="size-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
				</svg>
				<span>Total Kurikulum: <strong class="text-slate-900 dark:text-white">{roadmap.phases.length} Fase, {totalTopics} Topik</strong></span>
			</div>

			<div class="flex items-center gap-2">
				<svg class="size-4 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
				</svg>
				<span>Tingkat: <strong class="text-slate-900 dark:text-white">{roadmap.difficulty}</strong></span>
			</div>

			<!-- Share / Copy Link Button -->
			<button
				type="button"
				onclick={shareRoadmap}
				class="ml-auto inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
			>
				<svg class="size-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
				</svg>
				<span>{copied ? 'Tautan Disalin!' : 'Bagikan Roadmap'}</span>
			</button>
		</div>
	</header>

	<!-- Main Roadmap Mindmap Component -->
	<section class="mt-10">
		<RoadmapMindmap phases={roadmap.phases} />
	</section>

	<!-- Tips Membumi Box -->
	<aside class="mt-16 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/60 sm:p-8">
		<div class="flex items-center gap-3">
			<span class="flex size-8 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
				💡
			</span>
			<h3 class="text-base font-bold text-slate-900 dark:text-white">
				Prinsip Belajar Membumi ala Baricode
			</h3>
		</div>
		<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 sm:text-sm">
			Jangan terburu-buru ingin menguasai semuanya sekaligus dalam satu malam. Fokuslah pada satu fase, pahami logikanya lewat latihan membuat proyek kecil langsung di komputermu, dan jika menemui kendala error, diskusikan di komunitas. Belajar koding adalah maraton ketekunan, bukan lari cepat.
		</p>
		<div class="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-100 pt-4 dark:border-zinc-800">
			<a
				href="/whatsapp"
				class="text-xs font-semibold text-rose-600 hover:text-rose-500 dark:text-rose-400"
			>
				Tanya Mentor &amp; Teman di WhatsApp →
			</a>
			<span class="text-slate-300 dark:text-zinc-700">•</span>
			<a
				href="/kursus"
				class="text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
			>
				Lihat Kursus &amp; Bimbingan Intensif →
			</a>
		</div>
	</aside>
</article>
