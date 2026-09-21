<script lang="ts">
	import { getAllRoadmaps } from '$lib/data/roadmaps';

	const roadmaps = getAllRoadmaps();
</script>

<svelte:head>
	<title>Roadmap &amp; Peta Jalan Belajar IT — Baricode Indonesia</title>
	<meta
		name="description"
		content="Panduan langkah demi langkah belajar koding dan IT secara membumi. Pelajari Laravel, Frontend Web, Backend Node.js, hingga Pemrograman Dasar secara terstruktur."
	/>
	<meta property="og:title" content="Roadmap & Peta Jalan Belajar IT — Baricode Indonesia" />
	<meta
		property="og:description"
		content="Panduan langkah demi langkah belajar koding dan IT secara membumi. Pelajari Laravel, Frontend Web, Backend Node.js, hingga Pemrograman Dasar secara terstruktur."
	/>
	<meta property="og:url" content="https://www.baricode.org/roadmap" />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<!-- Hero Section -->
	<div class="text-center">
		<div class="inline-flex items-center gap-2 rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-semibold text-rose-600 dark:text-rose-400">
			<span class="size-1.5 rounded-full bg-rose-500 animate-pulse"></span>
			<span>Peta Jalan Belajar Membumi</span>
		</div>

		<h1 class="mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
			Roadmap Belajar Koding &amp; IT
		</h1>

		<p class="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-zinc-300 sm:text-lg">
			Bingung harus mulai belajar dari mana dan apa langkah berikutnya? Ikuti kurikulum visual yang kami rancang terstruktur, bertahap, dan tidak bikin kewalahan.
		</p>
	</div>

	<!-- Roadmaps Grid -->
	<div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
		{#each roadmaps as roadmap}
			{@const totalTopics = roadmap.phases.reduce((acc, p) => acc + p.topics.length, 0)}

			<div
				class="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-rose-500/40 hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/70 dark:hover:border-rose-500/30 sm:p-8"
			>
				<div>
					<!-- Top Badges -->
					<div class="flex items-center justify-between gap-3">
						<span class="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-0.5 text-[11px] font-medium text-slate-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
							{roadmap.category}
						</span>

						{#if roadmap.badge}
							<span class="rounded-full border border-rose-500/20 bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:text-rose-400">
								{roadmap.badge}
							</span>
						{/if}
					</div>

					<!-- Title & Tagline -->
					<h2 class="mt-4 text-xl font-extrabold text-slate-900 group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400 transition-colors sm:text-2xl">
						<a href="/roadmap/{roadmap.slug}" class="focus:outline-none">
							<span class="absolute inset-0" aria-hidden="true"></span>
							{roadmap.title}
						</a>
					</h2>

					<p class="mt-1.5 text-xs font-medium text-rose-600 dark:text-rose-400">
						{roadmap.tagline}
					</p>

					<p class="mt-3 text-xs leading-relaxed text-slate-600 dark:text-zinc-400 line-clamp-3">
						{roadmap.description}
					</p>
				</div>

				<!-- Footer Info -->
				<div class="mt-8 border-t border-slate-100 pt-5 dark:border-zinc-800/80">
					<div class="flex flex-wrap items-center justify-between gap-4 text-xs">
						<div class="flex items-center gap-4 text-slate-500 dark:text-zinc-400">
							<div class="flex items-center gap-1">
								<svg class="size-4 text-slate-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
								</svg>
								<span>{roadmap.estimatedWeeks}</span>
							</div>
							<div class="flex items-center gap-1">
								<svg class="size-4 text-slate-400 dark:text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
								</svg>
								<span>{roadmap.difficulty}</span>
							</div>
						</div>

						<span class="inline-flex items-center gap-1 font-semibold text-rose-600 group-hover:translate-x-1 dark:text-rose-400 transition-transform">
							Buka Roadmap{#if totalTopics > 0} ({roadmap.phases.length} Fase, {totalTopics} Topik){/if} →
						</span>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<!-- Bottom Suggestion Box -->
	<div class="mt-16 rounded-3xl border border-slate-200/80 bg-gradient-to-r from-red-500/10 via-rose-500/5 to-amber-500/10 p-8 text-center backdrop-blur dark:border-zinc-800 sm:p-10">
		<h3 class="text-xl font-bold text-slate-900 dark:text-white sm:text-2xl">
			Ingin Usul Roadmap atau Butuh Bimbingan?
		</h3>
		<p class="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
			Keluarga besar Baricode saling bantu belajar dari nol. Bergabunglah dengan grup diskusi WhatsApp kami untuk berdiskusi, bertanya error, atau mengajukan topik roadmap baru!
		</p>
		<div class="mt-6 flex flex-wrap items-center justify-center gap-4">
			<a
				href="/whatsapp"
				class="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-red-600/25 transition hover:from-red-500 hover:to-rose-500"
			>
				Gabung Grup WhatsApp
			</a>
			<a
				href="/artikel"
				class="rounded-full border border-slate-300 bg-white px-6 py-2.5 text-xs font-bold text-slate-700 shadow-xs transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
			>
				Baca Kumpulan Artikel
			</a>
		</div>
	</div>
</section>
