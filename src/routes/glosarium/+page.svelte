<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { glossaryTerms } from '$lib/data/site';

	function slugify(text: string) {
		return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
	}
</script>

<svelte:head>
	<title>Glosarium Istilah IT — Baricode Indonesia</title>
	<meta name="description" content="Kumpulan istilah dasar dunia coding dan IT, dijelaskan dengan bahasa yang sederhana untuk pemula." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-rose-600 dark:text-red-300">Glosarium</p>
	<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Istilah IT untuk Pemula
	</h1>
	<p class="mt-6 text-base leading-relaxed text-slate-600 dark:text-red-100">
		Sering bingung dengan istilah-istilah di dunia coding? Berikut penjelasan singkatnya.
	</p>

	<dl class="mt-10 divide-y divide-slate-200 dark:divide-white/10 border-t border-slate-200 dark:border-white/10">
		{#each Object.entries(glossaryTerms) as [term, definition]}
			<div id={slugify(term)} class="py-5">
				<dt class="text-base font-semibold text-slate-900 dark:text-white">{term}</dt>
				<dd class="mt-1 text-sm leading-relaxed text-slate-600 dark:text-red-100">{definition}</dd>
			</div>
		{/each}
	</dl>

	<div class="mt-10">
		<CtaBanner />
	</div>
</section>
