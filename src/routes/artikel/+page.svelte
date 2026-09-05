<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { samplePosts } from '$lib/data/site';

	const ITEMS_PER_PAGE = 20;

	let searchQuery = $state('');
	let currentPage = $state(1);

	$effect(() => {
		searchQuery;
		currentPage = 1;
	});

	let sortedPosts = $derived(
		(searchQuery.trim() === ''
			? samplePosts
			: samplePosts.filter(
					(post) =>
						post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
						post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
				)
		)
			.slice()
			.sort((a, b) => {
				const timeA = new Date(a.published_at).getTime();
				const timeB = new Date(b.published_at).getTime();
				if (timeB !== timeA) return timeB - timeA;
				return b.id - a.id;
			})
	);

	let totalPages = $derived(Math.ceil(sortedPosts.length / ITEMS_PER_PAGE) || 1);
	let validPage = $derived(Math.min(Math.max(1, currentPage), totalPages));

	let paginatedPosts = $derived(
		sortedPosts.slice((validPage - 1) * ITEMS_PER_PAGE, validPage * ITEMS_PER_PAGE)
	);

	function handlePageChange(newPage: number) {
		if (newPage >= 1 && newPage <= totalPages) {
			currentPage = newPage;
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	}
</script>

<svelte:head>
	<title>Artikel — Baricode Indonesia</title>
	<meta name="description" content="Artikel edukasi seputar dunia IT dan belajar koding dari Baricode Indonesia." />
</svelte:head>

<section class="mx-auto max-w-5xl px-6 py-16">
	<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<h1 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Artikel Baricode Indonesia</h1>
			<p class="mt-2 text-slate-600 dark:text-red-100">Tips belajar, tutorial, dan cerita seputar dunia IT.</p>
		</div>

		<div class="flex w-full max-w-xs gap-2">
			<input
				type="search"
				bind:value={searchQuery}
				placeholder="Cari artikel..."
				class="w-full rounded-full border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-red-300 px-4 py-2 text-sm backdrop-blur focus:border-rose-500 dark:focus:border-red-400 focus:outline-none transition"
			/>
		</div>
	</div>

	{#if sortedPosts.length === 0}
		<p class="mt-16 text-center text-slate-500 dark:text-red-300">
			{#if searchQuery}
				Tidak ada artikel yang cocok dengan pencarian "{searchQuery}".
			{:else}
				Belum ada artikel yang diterbitkan.
			{/if}
		</p>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each paginatedPosts as post}
				<PostCard {post} />
			{/each}
		</div>

		<Pagination
			currentPage={validPage}
			{totalPages}
			totalItems={sortedPosts.length}
			itemsPerPage={ITEMS_PER_PAGE}
			onPageChange={handlePageChange}
		/>
	{/if}
</section>
