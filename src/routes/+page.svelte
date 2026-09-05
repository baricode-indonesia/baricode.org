<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { samplePosts } from '$lib/data/site';
</script>

<svelte:head>
	<title>Baricode Indonesia — Akademi dan Kursus Online IT</title>
	<meta name="description" content="Akademi dan kursus online IT untuk siapa saja. Belajar koding dari mana saja, meski dari kondisi paling terbatas sekalipun." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
	<span class="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-600 dark:text-rose-300 shadow-sm backdrop-blur">
		🚀 Komunitas IT yang Membumi
	</span>

	<h1 class="mx-auto mt-6 max-w-3xl text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-900 dark:text-white sm:text-6xl">
		Belajar koding tidak butuh
		<span class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 dark:from-red-400 dark:via-rose-400 dark:to-amber-300 bg-clip-text text-transparent">
			kondisi sempurna.
		</span>
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
		Kami adalah akademi dan kursus online IT yang baru saja memulai langkah pertama. Tidak perlu minder
		kalau kamu belajar dari kamar kecil atau dari kondisi paling terbatas sekalipun, karena kami pun
		memulai semuanya dari sana.
	</p>

	<!-- Hero CTA Buttons -->
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/kursus"
			class="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/30 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500"
		>
			Lihat Kursus &amp; Akademi
		</a>
	</div>

	<div class="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-4 py-5 shadow-sm dark:shadow-lg backdrop-blur">
			<p class="text-2xl font-bold text-slate-900 dark:text-white">⚡</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Gratis &amp; Premium</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-4 py-5 shadow-sm dark:shadow-lg backdrop-blur">
			<p class="text-2xl font-bold text-slate-900 dark:text-white">🌍</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Indonesia</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-4 py-5 shadow-sm dark:shadow-lg backdrop-blur">
			<p class="text-2xl font-bold text-slate-900 dark:text-white">❤️</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Community-Driven</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 px-4 py-5 shadow-sm dark:shadow-lg backdrop-blur">
			<p class="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Transparan</p>
		</div>
	</div>
</section>

<!-- Program -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<div class="mb-10 text-center">
		<h2 class="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Pilih Jalur Belajarmu</h2>
		<p class="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
			Ada banyak jalan untuk berkembang bersama kami. Yuk, eksplorasi dan manfaatkan semua fiturnya!
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-3">
		<div class="group rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">📚</span>
			<h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">Kursus</h3>
			<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
				Belajar mandiri dengan materi terstruktur, dari pemula hingga mahir. Tersedia jalur gratis dan
				kelas premium untuk hasil belajar terbaik.
			</p>
		</div>
		<div class="group rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-rose-500/40 dark:hover:border-rose-500/40 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">🤝</span>
			<h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">Bimbingan</h3>
			<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
				Pendampingan belajar koding gratis dari Baricode. Mentor memantau progresmu dan mengarahkan agar kamu tetap konsisten sampai tujuan tercapai.
			</p>
		</div>
		<div class="group rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">🎓</span>
			<h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">Akademi</h3>
			<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
				Live class online kelompok kecil bersama instruktur. Lebih intensif, terjadwal, dan ada
				rekaman untuk peserta.
			</p>
		</div>
	</div>
</section>

<!-- Kenapa Harus Baricode -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<div class="mb-10 text-center">
		<p class="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">Keunggulan</p>
		<h2 class="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Kenapa Harus Baricode?</h2>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 text-center shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">💎</span>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Gratis &amp; Premium</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Mulai dari materi dasar yang gratis untuk semua, sampai kelas premium berbayar untuk kamu
				yang ingin belajar lebih intensif dengan layanan terbaik.
			</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 text-center shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">🤝</span>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Proyek Kolaborasi</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Kerja bareng dalam tim, belajar Git workflow, dan bangun portfolio bersama.
			</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 text-center shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">🗺️</span>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Roadmap Belajar</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Path yang jelas dari pemula sampai mahir. Tinggal ikuti langkah demi langkah.
			</p>
		</div>
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 dark:border-zinc-800/80 dark:bg-zinc-900/60 p-6 text-center shadow-md dark:shadow-xl backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900/90">
			<span class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400">💬</span>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Komunitas Aktif</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Tanya jawab kapan saja. Ada yang siap bantu kamu saat waktu luang.
			</p>
		</div>
	</div>
</section>

<!-- Artikel Terbaru -->
{#if samplePosts.length > 0}
	<section class="mx-auto max-w-5xl px-6 pb-24">
		<div class="mb-6 flex items-center justify-between">
			<h2 class="text-xl font-bold text-slate-900 dark:text-white">Artikel Terbaru</h2>
			<a href="/artikel" class="text-sm font-medium text-rose-600 hover:text-rose-700 dark:text-rose-400 dark:hover:text-white transition hover:underline">
				Lihat semua &rarr;
			</a>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each samplePosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
{/if}

<!-- CTA Banner -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<CtaBanner />
</section>
