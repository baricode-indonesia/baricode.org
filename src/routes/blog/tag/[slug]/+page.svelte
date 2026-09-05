<script lang="ts">
	import { page } from '$app/state';
	import PostCard from '$lib/components/PostCard.svelte';
	import { tags, samplePosts } from '$lib/data/site';

	let tagSlug = $derived(page.params.slug);
	let currentTag = $derived(tags.find((t) => t.slug === tagSlug));
	let tagPosts = $derived(samplePosts.filter((p) => p.tags.some((t) => t.slug === tagSlug)));
</script>

<svelte:head>
	<title>{currentTag ? `Tag: #${currentTag.name}` : 'Tag'} — Baricode Indonesia</title>
	<meta name="description" content={`Artikel bertag ${currentTag?.name || tagSlug} di Blog Baricode Indonesia.`} />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-red-300">Tag</p>
	<h1 class="mt-2 text-3xl font-bold tracking-tight text-white">
		#{currentTag ? currentTag.name : tagSlug}
	</h1>

	{#if tagPosts.length === 0}
		<p class="mt-16 text-center text-red-300">Belum ada artikel dengan tag ini.</p>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each tagPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</section>
