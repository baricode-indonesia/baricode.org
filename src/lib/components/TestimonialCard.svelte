<script lang="ts">
	import type { Testimonial } from '$lib/data/site';

	let { testimonial, class: className = '' }: { testimonial: Testimonial; class?: string } = $props();
</script>

<article class={`flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 ${className}`}>
	{#if testimonial.rating}
		<div class="flex gap-0.5 text-amber-400" aria-label={`Rating ${testimonial.rating} dari 5`}>
			{#each Array(5) as _, i}
				<svg class={`h-4 w-4 ${i < testimonial.rating ? '' : 'text-white/15'}`} fill="currentColor" viewBox="0 0 20 20">
					<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.959c.299.921-.755 1.688-1.54 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.784.57-1.838-.197-1.539-1.118l1.286-3.959a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
				</svg>
			{/each}
		</div>
	{/if}

	<p class="text-sm text-red-50">&ldquo;{testimonial.content}&rdquo;</p>

	<div class="mt-auto flex items-center gap-3 pt-2">
		{#if testimonial.avatarUrl}
			<img
				src={testimonial.avatarUrl}
				alt={testimonial.name}
				class="h-10 w-10 rounded-full object-cover"
				loading="lazy"
			/>
		{:else}
			<div class="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20 text-sm font-semibold text-red-100">
				{testimonial.name.charAt(0).toUpperCase()}
			</div>
		{/if}

		<div>
			<p class="text-sm font-semibold text-white">{testimonial.name}</p>
			{#if testimonial.role}
				<p class="text-xs text-red-300/70">{testimonial.role}</p>
			{/if}
		</div>
	</div>
</article>
