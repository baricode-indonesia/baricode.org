<script lang="ts">
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { faqs } from '$lib/data/site';

	let openIndex = $state<number | null>(null);

	function toggleFaq(index: number) {
		openIndex = openIndex === index ? null : index;
	}
</script>

<svelte:head>
	<title>Pertanyaan yang Sering Diajukan — Baricode Indonesia</title>
	<meta name="description" content="Jawaban atas pertanyaan yang sering diajukan tentang belajar IT di Baricode Indonesia — biaya, syarat, dan cara memulai." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-xs font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">FAQ</p>
	<h1 class="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Pertanyaan yang Sering Diajukan
	</h1>

	<div class="mt-10 divide-y divide-slate-200 dark:divide-zinc-800/80 border-t border-slate-200 dark:border-zinc-800/80">
		{#each faqs as faq, index}
			<details class="group py-5" open={openIndex === index}>
				<summary
					onclick={(e) => { e.preventDefault(); toggleFaq(index); }}
					class="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-slate-900 dark:text-white transition hover:text-rose-600 dark:hover:text-rose-400"
				>
					{faq.question}
					<svg
						class={`size-5 shrink-0 text-slate-400 dark:text-zinc-400 transition ${openIndex === index ? 'rotate-45 text-rose-600 dark:text-rose-400' : ''}`}
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
					</svg>
				</summary>
				<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">{faq.answer}</p>
			</details>
		{/each}
	</div>

	<div class="mt-10">
		<CtaBanner />
	</div>
</section>
