<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<div class={`rounded-2xl border border-slate-200 bg-white/80 dark:border-zinc-800 dark:bg-zinc-900/80 p-8 text-center shadow-lg dark:shadow-xl backdrop-blur-md ${className}`}>
	<h2 class="text-xl font-bold text-slate-900 dark:text-white">Siap melangkah lebih jauh?</h2>
	<p class="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
		Tidak perlu minder kalau kamu belajar dari kamar kecil atau dari kondisi paling terbatas sekalipun —
		kami pun memulai semuanya dari sana.
	</p>
	<div class="mt-6 flex flex-wrap justify-center gap-3">
		<a
			href="/kursus"
			class="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-red-600/30 transition hover:from-red-500 hover:to-rose-500"
		>
			Lihat Kursus &amp; Akademi
		</a>
	</div>
</div>
