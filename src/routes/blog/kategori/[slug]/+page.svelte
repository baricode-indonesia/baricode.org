<script lang="ts">
	import { page } from '$app/state';
	import PostCard from '$lib/components/PostCard.svelte';
	import { categories, samplePosts } from '$lib/data/site';

	let categorySlug = $derived(page.params.slug);
	let currentCategory = $derived(categories.find((c) => c.slug === categorySlug));
	let categoryPosts = $derived(samplePosts.filter((p) => p.category.slug === categorySlug));
</script>

<svelte:head>
	<title>{currentCategory ? `Kategori: ${currentCategory.name}` : 'Kategori'} — Baricode Indonesia</title>
	<meta name="description" content={currentCategory?.description || 'Artikel dalam kategori ini.'} />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-red-300">Kategori</p>
	<h1 class="mt-2 text-3xl font-bold tracking-tight text-white">
		{currentCategory ? currentCategory.name : categorySlug}
	</h1>
	{#if currentCategory?.description}
		<p class="mt-2 max-w-2xl text-red-100">{currentCategory.description}</p>
	{/if}

	{#if categoryPosts.length === 0}
		<p class="mt-16 text-center text-red-300">Belum ada artikel dalam kategori ini.</p>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each categoryPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</section>
