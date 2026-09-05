<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import { samplePosts } from '$lib/data/site';

	let searchQuery = $state('');

	let filteredPosts = $derived(
		searchQuery.trim() === ''
			? samplePosts
			: samplePosts.filter(
					(post) =>
						post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
				)
	);
</script>

<svelte:head>
	<title>Artikel — Baricode Indonesia</title>
	<meta name="description" content="Artikel edukasi seputar dunia IT dan belajar koding dari Baricode Indonesia." />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight text-white">Artikel Baricode Indonesia</h1>
			<p class="mt-2 text-red-100">Tips belajar, tutorial, dan cerita seputar dunia IT.</p>
		</div>

		<div class="flex w-full max-w-xs gap-2">
			<input
				type="search"
				bind:value={searchQuery}
				placeholder="Cari artikel..."
				class="w-full rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-red-300 backdrop-blur focus:border-red-400 focus:outline-none"
			/>
		</div>
	</div>

	{#if filteredPosts.length === 0}
		<p class="mt-16 text-center text-red-300">
			{#if searchQuery}
				Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".
			{:else}
				Belum ada artikel yang diterbitkan.
			{/if}
		</p>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each filteredPosts as post}
				<PostCard {post} />
			{/each}
		</div>
	{/if}
</section>
