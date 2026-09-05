<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';

	const errorTypes = [
		{
			code: 404,
			title: '404 — Halaman Tidak Ditemukan',
			desc: 'Ditampilkan ketika pengguna membuka URL yang tidak valid atau dihapus.',
			path: '/404',
			badge: 'bg-rose-500/10 text-rose-600 dark:bg-rose-500/20 dark:text-rose-400'
		},
		{
			code: 403,
			title: '403 — Akses Ditolak (Forbidden)',
			desc: 'Ditampilkan ketika pengguna mencoba mengakses halaman yang dibatasi.',
			path: '/403',
			badge: 'bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400'
		},
		{
			code: 401,
			title: '401 — Perlu Autentikasi',
			desc: 'Ditampilkan saat pengguna belum login atau sesi telah kadaluarsa.',
			path: '/401',
			badge: 'bg-purple-500/10 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400'
		},
		{
			code: 500,
			title: '500 — Kesalahan Server Internal',
			desc: 'Ditampilkan saat terjadi bug backend atau error server tak terduga.',
			path: '/500',
			badge: 'bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400'
		},
		{
			code: 503,
			title: '503 — Layanan Sedang Pemeliharaan',
			desc: 'Ditampilkan saat aplikasi sedang dalam mode perbaikan / maintenance.',
			path: '/503',
			badge: 'bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400'
		}
	];
</script>

<svelte:head>
	<title>Pusat Penanganan Error — Baricode Indonesia</title>
	<meta name="description" content="Dokumentasi dan simulasi halaman penanganan error di Baricode Indonesia." />
</svelte:head>

<section class="mx-auto max-w-4xl px-6 py-16">
	<p class="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">Error Handling Hub</p>
	<h1 class="mt-2 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Halaman Handling Error
	</h1>
	<p class="mt-4 text-base text-slate-600 dark:text-zinc-300">
		Baricode Indonesia dilengkapi dengan halaman error universal (<code class="rounded bg-slate-200 dark:bg-zinc-800 px-1.5 py-0.5 text-xs text-rose-500">+error.svelte</code>) yang menangani berbagai kode HTTP status secara dinamis, intuitif, dan ramah pengguna.
	</p>

	<div class="mt-10 grid gap-6 sm:grid-cols-2">
		{#each errorTypes as err}
			<div class="flex flex-col justify-between rounded-2xl border border-slate-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-rose-400/40 shadow-sm">
				<div>
					<div class="flex items-center justify-between">
						<span class="inline-flex items-center rounded-lg px-2.5 py-1 text-xs font-bold {err.badge}">
							HTTP {err.code}
						</span>
						<span class="text-xs text-slate-400 dark:text-zinc-500 font-mono">{err.path}</span>
					</div>
					<h2 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">{err.title}</h2>
					<p class="mt-2 text-sm text-slate-600 dark:text-zinc-400">{err.desc}</p>
				</div>
				<div class="mt-6 border-t border-slate-100 dark:border-zinc-800/60 pt-4 flex items-center justify-between">
					<a
						href={err.path}
						class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition"
					>
						Buka Halaman
						<svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
							<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
						</svg>
					</a>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-12">
		<CtaBanner />
	</div>
</section>
