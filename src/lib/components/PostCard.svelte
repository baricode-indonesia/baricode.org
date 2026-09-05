<script lang="ts">
	import type { Post } from '$lib/data/site';
	import { getPostUrl } from '$lib/data/site';

	let { post, class: className = '' }: { post: Post; class?: string } = $props();

	function formatDate(dateStr: string) {
		try {
			const d = new Date(dateStr);
			return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
		} catch {
			return dateStr;
		}
	}
</script>

<article class={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900/60 shadow-xl backdrop-blur-md transition hover:-translate-y-1 hover:border-zinc-700 ${className}`}>
	<a href={getPostUrl(post.slug)} class="block aspect-video overflow-hidden bg-zinc-950">
		{#if post.featuredImage}
			<img
				src={post.featuredImage}
				alt={post.title}
				class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
				loading="lazy"
			/>
		{:else}
			<div class="flex h-full w-full items-center justify-center bg-zinc-900/80 text-zinc-500">
				<span class="text-xs font-semibold tracking-wider text-rose-400">Baricode Indonesia</span>
			</div>
		{/if}
	</a>

	<div class="flex flex-1 flex-col gap-3 p-5">
		<a
			href={`/blog/kategori/${post.category.slug}`}
			class="w-fit rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-0.5 text-xs font-semibold text-rose-300 transition hover:bg-rose-500/20"
		>
			{post.category.name}
		</a>

		<h3 class="text-lg font-bold leading-snug text-white">
			<a href={getPostUrl(post.slug)} class="transition hover:text-rose-400">
				{post.title}
			</a>
		</h3>

		{#if post.excerpt}
			<p class="line-clamp-3 text-sm leading-relaxed text-zinc-400">{post.excerpt}</p>
		{/if}

		<div class="mt-auto border-t border-zinc-800/60 pt-3 text-xs text-zinc-500">
			{formatDate(post.published_at)}
		</div>
	</div>
</article>
