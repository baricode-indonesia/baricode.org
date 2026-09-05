<script lang="ts">
	interface Props {
		currentPage: number;
		totalPages: number;
		totalItems: number;
		itemsPerPage: number;
		onPageChange: (page: number) => void;
	}

	let { currentPage, totalPages, totalItems, itemsPerPage, onPageChange }: Props = $props();

	let startItem = $derived(totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1);
	let endItem = $derived(Math.min(currentPage * itemsPerPage, totalItems));

	let pageNumbers = $derived.by(() => {
		const pages: (number | '...')[] = [];
		if (totalPages <= 7) {
			for (let i = 1; i <= totalPages; i++) pages.push(i);
		} else {
			pages.push(1);
			if (currentPage > 3) pages.push('...');
			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);
			for (let i = start; i <= end; i++) pages.push(i);
			if (currentPage < totalPages - 2) pages.push('...');
			pages.push(totalPages);
		}
		return pages;
	});
</script>

{#if totalItems > 0}
	<div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 dark:border-zinc-800/80 pt-6 sm:flex-row">
		<p class="text-xs font-medium text-slate-500 dark:text-zinc-400">
			Menampilkan <span class="font-semibold text-slate-900 dark:text-white">{startItem}-{endItem}</span> dari <span class="font-semibold text-slate-900 dark:text-white">{totalItems}</span> artikel
		</p>

		{#if totalPages > 1}
			<nav class="flex items-center gap-1.5" aria-label="Paginasi">
				<button
					type="button"
					onclick={() => onPageChange(currentPage - 1)}
					disabled={currentPage <= 1}
					class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
				>
					&larr; Sebelumnya
				</button>

				<div class="flex items-center gap-1">
					{#each pageNumbers as page}
						{#if page === '...'}
							<span class="px-2 py-1 text-xs text-slate-400 dark:text-zinc-600">&hellip;</span>
						{:else}
							<button
								type="button"
								onclick={() => onPageChange(page)}
								class={`min-w-8 rounded-lg px-2.5 py-1.5 text-xs font-semibold transition ${
									currentPage === page
										? 'bg-rose-600 text-white dark:bg-rose-600'
										: 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800'
								}`}
								aria-current={currentPage === page ? 'page' : undefined}
							>
								{page}
							</button>
						{/if}
					{/each}
				</div>

				<button
					type="button"
					onclick={() => onPageChange(currentPage + 1)}
					disabled={currentPage >= totalPages}
					class="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
				>
					Selanjutnya &rarr;
				</button>
			</nav>
		{/if}
	</div>
{/if}
