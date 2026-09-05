<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
</script>

<div class={`rounded-2xl border border-zinc-800 bg-zinc-900/80 p-8 text-center shadow-xl backdrop-blur-md ${className}`}>
	<h2 class="text-xl font-bold text-white">Siap melangkah lebih jauh?</h2>
	<p class="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-zinc-400">
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
		<a
			href="/blog"
			class="rounded-full border border-zinc-700/80 bg-zinc-900/80 px-5 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
		>
			Baca Blog
		</a>
	</div>
</div>
