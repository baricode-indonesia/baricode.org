<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { siteConfig } from '$lib/data/site';
</script>

<svelte:head>
	<title>Kontak — Baricode Indonesia</title>
	<meta name="description" content="Hubungi Baricode Indonesia lewat email atau WhatsApp untuk pertanyaan seputar bimbingan dan kursus IT." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-rose-600 dark:text-red-300">Kontak</p>
	<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Ada pertanyaan? Hubungi kami.
	</h1>
	<p class="mt-6 text-base leading-relaxed text-slate-600 dark:text-red-100">
		Kami senang membantu, terutama kalau kamu masih ragu harus mulai dari mana.
	</p>

	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		<a
			href={`mailto:${siteConfig.contactEmail}`}
			class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-white/10 shadow-sm dark:shadow-none"
		>
			<h2 class="text-lg font-semibold text-slate-900 dark:text-white">Email</h2>
			<p class="mt-2 text-sm text-slate-600 dark:text-red-100">{siteConfig.contactEmail}</p>
		</a>

		{#if siteConfig.contactWhatsapp}
			<a
				href={`https://baricode.org/whatsapp`}
				target="_blank"
				rel="noopener"
				class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-rose-400/40 hover:bg-white dark:hover:bg-white/10 shadow-sm dark:shadow-none"
			>
				<h2 class="text-lg font-semibold text-slate-900 dark:text-white">WhatsApp</h2>
				<p class="mt-2 text-sm text-slate-600 dark:text-red-100">Chat langsung dengan tim kami</p>
			</a>
		{/if}
	</div>

	<div class="mt-10">
		<CtaBanner />
	</div>
</section>
