<script lang="ts">
	import { categories } from '$lib/data/site';
</script>

<svelte:head>
	<title>Kategori Blog — Baricode Indonesia</title>
	<meta name="description" content="Jelajahi artikel Blog Baricode Indonesia berdasarkan kategori." />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-red-300">Blog</p>
	<h1 class="mt-2 text-3xl font-bold tracking-tight text-white">Kategori</h1>

	{#if categories.length === 0}
		<p class="mt-16 text-center text-red-300">Belum ada kategori.</p>
	{:else}
		<div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each categories as category}
				<a
					href={`/blog/kategori/${category.slug}`}
					class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-red-400/40 hover:bg-white/10"
				>
					<h2 class="text-lg font-semibold text-white">{category.name}</h2>
					{#if category.description}
						<p class="mt-2 line-clamp-2 text-sm text-red-100">{category.description}</p>
					{/if}
					<p class="mt-3 text-xs font-medium text-red-300">{category.posts_count || 0} artikel</p>
				</a>
			{/each}
		</div>
	{/if}
</section>
