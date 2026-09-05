<script lang="ts">
	import { page } from '$app/state';
	import PostCard from '$lib/components/PostCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { samplePosts, renderMarkdown, DEFAULT_POST_IMAGE } from '$lib/data/site';

	let postSlug = $derived(page.params.slug);
	let post = $derived(samplePosts.find((p) => p.slug === postSlug) || samplePosts[0]);
	let relatedPosts = $derived(samplePosts.filter((p) => p.id !== post.id));

	let htmlContent = $derived(renderMarkdown(post.content));

	let copiedLink = $state(false);

	function formatDate(dateStr: string) {
		try {
			const d = new Date(dateStr);
			return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
		} catch {
			return dateStr;
		}
	}

	function copyLink() {
		if (typeof window !== 'undefined') {
			navigator.clipboard.writeText(window.location.href).then(() => {
				copiedLink = true;
				setTimeout(() => {
					copiedLink = false;
				}, 2000);
			});
		}
	}
</script>

<svelte:head>
	<title>{post.title} — Baricode Indonesia</title>
	<meta name="description" content={post.excerpt} />

	<!-- Open Graph / WhatsApp Preview Meta Tags -->
	<meta property="og:site_name" content="Baricode Indonesia" />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={post.title} />
	<meta property="og:description" content={post.excerpt} />
	<meta property="og:image" content={post.featuredImage ? post.featuredImage : 'https://baricode.org/og-image.jpg'} />
	<meta property="og:image:secure_url" content={post.featuredImage ? post.featuredImage : 'https://baricode.org/og-image.jpg'} />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.excerpt} />
	<meta name="twitter:image" content={post.featuredImage ? post.featuredImage : 'https://baricode.org/og-image.jpg'} />
</svelte:head>

<article class="mx-auto w-full max-w-3xl px-6 py-16 lg:max-w-[95%]">
	<span
		class="w-fit rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs font-medium text-rose-600 dark:text-red-100"
	>
		{post.category.name}
	</span>

	<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		{post.title}
	</h1>

	<img
		src={post.featuredImage || DEFAULT_POST_IMAGE}
		alt={post.title}
		class="mt-8 aspect-video w-full rounded-2xl object-cover shadow-md"
	/>

	<div
		class="mt-8 max-w-none space-y-5 text-base leading-relaxed text-slate-800 dark:text-red-50 [&_a:hover]:text-rose-700 dark:[&_a:hover]:text-white [&_a]:text-rose-600 dark:[&_a]:text-red-300 [&_a]:underline [&_blockquote]:border-l-4 [&_blockquote]:border-rose-500/50 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-slate-600 dark:[&_blockquote]:text-zinc-400 [&_code]:font-mono [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-slate-900 dark:[&_h2]:text-white [&_h3]:mt-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-slate-900 dark:[&_h3]:text-white [&_img]:rounded-xl [&_ol]:list-decimal [&_ol]:pl-6 [&_pre]:my-4 [&_pre]:max-w-full [&_pre]:overflow-x-auto [&_pre]:rounded-lg [&_pre]:bg-slate-900 [&_pre]:text-slate-100 dark:[&_pre]:bg-zinc-900/90 dark:[&_pre]:text-zinc-100 [&_pre]:p-4 [&_pre]:text-sm [&_tbody_tr:nth-child(even)]:bg-slate-100/50 dark:[&_tbody_tr:nth-child(even)]:bg-white/5 [&_td]:border [&_td]:border-slate-300 dark:[&_td]:border-white/15 [&_td]:px-3 [&_td]:py-2 [&_td]:align-top [&_th]:border [&_th]:border-slate-300 dark:[&_th]:border-white/15 [&_th]:bg-slate-100 dark:[&_th]:bg-white/10 [&_th]:px-3 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-slate-900 dark:[&_th]:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_:not(pre)>code]:rounded [&_:not(pre)>code]:bg-slate-200 [&_:not(pre)>code]:text-slate-900 dark:[&_:not(pre)>code]:bg-white/10 dark:[&_:not(pre)>code]:text-white [&_:not(pre)>code]:px-1.5 [&_:not(pre)>code]:py-0.5"
	>
		{@html htmlContent}
	</div>

	{#if post.tags && post.tags.length > 0}
		<div class="mt-10 flex flex-wrap gap-2">
			{#each post.tags as tag}
				<span
					class="rounded-full bg-slate-200 text-slate-800 dark:bg-white/10 dark:text-red-100 px-3 py-1 text-xs font-medium"
				>
					#{tag.name}
				</span>
			{/each}
		</div>
	{/if}

	<div class="mt-8 flex items-center gap-3 border-y border-slate-200 dark:border-white/10 py-4 text-sm text-slate-600 dark:text-red-300">
		<span>Bagikan:</span>
		<a
			href={`https://wa.me/?text=${encodeURIComponent(post.title + ' - ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
			target="_blank"
			rel="noopener"
			class="hover:text-slate-900 dark:hover:text-white"
		>WhatsApp</a>
		<a
			href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
			target="_blank"
			rel="noopener"
			class="hover:text-slate-900 dark:hover:text-white"
		>X</a>
		<a
			href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
			target="_blank"
			rel="noopener"
			class="hover:text-slate-900 dark:hover:text-white"
		>Facebook</a>
		<button type="button" onclick={copyLink} class="cursor-pointer hover:text-slate-900 dark:hover:text-white">
			{#if !copiedLink}
				<span>Salin Tautan</span>
			{:else}
				<span class="text-emerald-600 dark:text-green-400">Tautan tersalin!</span>
			{/if}
		</button>
	</div>

	{#if relatedPosts.length > 0}
		<div class="mt-14">
			<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Artikel Terkait</h2>
			<div class="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each relatedPosts as relatedPost}
					<PostCard post={relatedPost} />
				{/each}
			</div>
		</div>
	{/if}

	<div class="mt-10">
		<CtaBanner />
	</div>
</article>
