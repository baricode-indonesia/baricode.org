<script lang="ts">
	import { siteConfig } from '$lib/data/site';
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	let copied = $state(false);

	async function copyLink() {
		try {
			await navigator.clipboard.writeText(siteConfig.whatsappGroup);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch (err) {
			console.error('Gagal menyalin link:', err);
		}
	}
</script>

<svelte:head>
	<title>Grup WhatsApp Komunitas — Baricode Indonesia</title>
	<meta
		name="description"
		content="Gabung grup WhatsApp General komunitas Baricode Indonesia. Diskusi seputar koding, tempat bertanya bagi pemula dan santri, serta saling berbagi ilmu IT."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<!-- Hero Section -->
	<div class="text-center">
		<span
			class="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 shadow-xs backdrop-blur"
		>
			💬 Komunitas WhatsApp
		</span>

		<h1 class="mt-6 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl leading-tight">
			Grup WhatsApp General
			<span class="block bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
				Baricode Indonesia
			</span>
		</h1>

		<p class="mx-auto mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-zinc-300">
			Wadah untuk santri, pemula, dan pembelajar IT berkumpul, bertanya seputar kendala koding, serta berbagi tips dan pengalaman belajar secara ramah dan membumi.
		</p>
	</div>

	<!-- Main Join Card -->
	<div class="mt-10 overflow-hidden rounded-3xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/5 via-white/80 to-white/40 dark:from-emerald-950/20 dark:via-zinc-900/60 dark:to-zinc-900/40 p-8 shadow-xl backdrop-blur-md text-center">
		<div class="mx-auto flex size-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/30">
			<svg class="size-8 fill-current" viewBox="0 0 24 24">
				<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
			</svg>
		</div>

		<h2 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">
			Sudah Siap Belajar &amp; Berdiskusi Bareng?
		</h2>
		<p class="mt-2 text-sm text-slate-600 dark:text-zinc-400">
			Klik tombol di bawah untuk bergabung ke WhatsApp Group General Komunitas Baricode.
		</p>

		<div class="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
			<a
				href={siteConfig.whatsappGroup}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 transition hover:scale-[1.02] hover:bg-emerald-500 sm:w-auto"
			>
				<svg class="size-5 fill-current" viewBox="0 0 24 24">
					<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
				</svg>
				<span>Gabung Grup WhatsApp</span>
			</a>

			<button
				type="button"
				onclick={copyLink}
				class="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750 sm:w-auto"
			>
				{#if copied}
					<span class="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Tautan Tersalin!</span>
				{:else}
					<span>📋 Salin Tautan Grup</span>
				{/if}
			</button>
		</div>
	</div>

	<!-- Aturan / Etika Komunitas -->
	<div class="mt-12">
		<h2 class="text-xl font-bold text-slate-900 dark:text-white">Etika &amp; Panduan Komunitas</h2>
		<p class="mt-1 text-xs text-slate-500 dark:text-zinc-400">
			Agar grup tetap nyaman dan bermanfaat bagi semua anggota:
		</p>

		<div class="mt-6 grid gap-4 sm:grid-cols-3">
			<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<span class="text-2xl">🤝</span>
				<h3 class="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Saling Menghormati</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Semua anggota belajar dari titik awal yang berbeda. Bertanyalah dengan sopan dan bantu sesama.
				</p>
			</div>

			<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<span class="text-2xl">💻</span>
				<h3 class="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Fokus IT &amp; Koding</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Gunakan grup untuk diskusi materi koding, tips teknologi, tutorial, dan info seputar Baricode.
				</p>
			</div>

			<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
				<span class="text-2xl">🚫</span>
				<h3 class="mt-3 text-sm font-semibold text-slate-900 dark:text-white">Bebas Spam</h3>
				<p class="mt-1 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
					Hindari promosi yang tidak relevan, pesan berantai, rumor, serta isu SARA demi kenyamanan bersama.
				</p>
			</div>
		</div>
	</div>

	<!-- Bottom Banner -->
	<div class="mt-12">
		<CtaBanner />
	</div>
</section>
