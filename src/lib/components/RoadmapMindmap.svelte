<script lang="ts">
	import type { RoadmapPhase, RoadmapTopic, TopicPriority } from '$lib/data/roadmaps';

	let { phases = [] }: { phases: RoadmapPhase[] } = $props();

	// State
	let viewMode = $state<'mindmap' | 'timeline'>('mindmap');
	let activeFilter = $state<TopicPriority | 'semua'>('semua');
	let selectedTopic = $state<RoadmapTopic | null>(null);

	function openTopicModal(topic: RoadmapTopic) {
		selectedTopic = topic;
	}

	function closeTopicModal() {
		selectedTopic = null;
	}

	function getPriorityBadge(priority: TopicPriority) {
		switch (priority) {
			case 'wajib':
				return {
					text: 'Wajib',
					bg: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
				};
			case 'direkomendasikan':
				return {
					text: 'Direkomendasikan',
					bg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30'
				};
			case 'opsional':
				return {
					text: 'Opsional',
					bg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30'
				};
		}
	}
</script>

<div class="space-y-8">
	<!-- Control Bar & Filter -->
	<div
		class="flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/90 sm:flex-row sm:items-center sm:justify-between"
	>
		<!-- View Mode Switcher -->
		<div class="flex items-center gap-1 rounded-xl bg-slate-100 p-1 dark:bg-zinc-800">
			<button
				type="button"
				onclick={() => (viewMode = 'mindmap')}
				class="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition {viewMode ===
				'mindmap'
					? 'bg-white text-slate-900 shadow-xs dark:bg-zinc-700 dark:text-white'
					: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'}"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
					/>
				</svg>
				<span>Mindmap Visual</span>
			</button>
			<button
				type="button"
				onclick={() => (viewMode = 'timeline')}
				class="flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-semibold transition {viewMode ===
				'timeline'
					? 'bg-white text-slate-900 shadow-xs dark:bg-zinc-700 dark:text-white'
					: 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'}"
			>
				<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
					/>
				</svg>
				<span>Step-by-Step</span>
			</button>
		</div>

		<!-- Priority Filter -->
		<div class="flex flex-wrap items-center gap-1.5 text-xs">
			<span class="mr-1 text-slate-500 dark:text-zinc-400">Filter Prioritas:</span>
			{#each ['semua', 'wajib', 'direkomendasikan', 'opsional'] as const as f}
				<button
					type="button"
					onclick={() => (activeFilter = f)}
					class="rounded-lg px-2.5 py-1 font-medium capitalize transition {activeFilter === f
						? 'bg-rose-600 text-white shadow-xs'
						: 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700'}"
				>
					{f === 'semua' ? 'Semua Topik' : f}
				</button>
			{/each}
		</div>
	</div>

	<!-- VIEW MODE 1: MINDMAP VISUAL BRANCHING -->
	{#if viewMode === 'mindmap'}
		<div class="space-y-12">
			{#each phases as phase}
				<div
					class="relative rounded-3xl border border-slate-200/80 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 lg:p-8"
				>
					<!-- Phase Header Node -->
					<div
						class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/70 pb-5 dark:border-zinc-800/70"
					>
						<div class="flex items-center gap-3">
							<span
								class="flex size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-600 text-sm font-bold text-white shadow-md shadow-rose-600/20"
							>
								{phase.phaseNumber}
							</span>
							<div>
								<div class="flex items-center gap-2">
									<span class="text-[11px] font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400">
										Fase {phase.phaseNumber}
									</span>
								</div>
								<h2 class="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
									{phase.title}
								</h2>
							</div>
						</div>
						<p class="text-xs text-slate-500 dark:text-zinc-400 sm:max-w-xs sm:text-right">
							{phase.subtitle}
						</p>
					</div>

					<!-- Mindmap Branches Grid -->
					<div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
						{#each phase.topics as topic}
							{@const isMatchFilter = activeFilter === 'semua' || topic.priority === activeFilter}
							{@const badge = getPriorityBadge(topic.priority)}

							{#if isMatchFilter}
								<div
									role="button"
									tabindex="0"
									onclick={() => openTopicModal(topic)}
									onkeydown={(e) => {
										if (e.key === 'Enter' || e.key === ' ') {
											e.preventDefault();
											openTopicModal(topic);
										}
									}}
									class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-rose-500/50 hover:shadow-md cursor-pointer dark:border-zinc-800 dark:bg-zinc-800/60 dark:hover:border-rose-500/40"
								>
									<div>
										<!-- Top item meta -->
										<div class="flex items-center justify-between gap-2">
											<span
												class="inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-medium {badge.bg}"
											>
												{badge.text}
											</span>

											<span class="text-[11px] text-slate-400 group-hover:text-rose-500 dark:text-zinc-500 transition-colors">
												<svg class="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
													<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
												</svg>
											</span>
										</div>

										<h3
											class="mt-3 text-sm font-semibold leading-snug text-slate-900 group-hover:text-rose-600 dark:text-zinc-100 dark:group-hover:text-rose-400 transition-colors"
										>
											{topic.title}
										</h3>

										<p class="mt-1.5 text-xs text-slate-600 dark:text-zinc-400 line-clamp-2">
											{topic.description}
										</p>
									</div>

									<!-- Bottom Hint -->
									<div class="mt-4 flex items-center justify-between border-t border-slate-100 pt-2.5 text-[11px] text-slate-500 dark:border-zinc-800 dark:text-zinc-500">
										<span class="inline-flex items-center gap-1 font-medium group-hover:text-rose-600 dark:group-hover:text-rose-400">
											Lihat materi
											<svg class="size-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
												<path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
											</svg>
										</span>

										{#if topic.resources && topic.resources.length > 0}
											<span class="rounded bg-rose-50 px-1.5 py-0.5 text-[10px] text-rose-600 dark:bg-rose-950/50 dark:text-rose-400">
												{topic.resources.length} Bacaan
											</span>
										{/if}
									</div>
								</div>
							{/if}
						{/each}
					</div>
				</div>
			{/each}
		</div>

	<!-- VIEW MODE 2: STEP-BY-STEP TIMELINE -->
	{:else}
		<div class="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-red-500 before:via-rose-500/50 before:to-amber-500 sm:before:left-4">
			{#each phases as phase}
				<div class="relative">
					<!-- Timeline Marker -->
					<div
						class="absolute -left-[30px] sm:-left-[34px] top-0 flex size-8 sm:size-9 items-center justify-center rounded-full border-4 border-slate-50 bg-gradient-to-tr from-red-600 to-rose-600 text-xs font-bold text-white shadow-md dark:border-[#0B0F17]"
					>
						{phase.phaseNumber}
					</div>

					<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-800/80 dark:bg-zinc-900/70">
						<span class="text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
							Langkah {phase.phaseNumber}
						</span>
						<h2 class="mt-1 text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
							{phase.title}
						</h2>
						<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
							{phase.description}
						</p>

						<!-- Topic list -->
						<div class="mt-6 space-y-3">
							{#each phase.topics as topic}
								{@const isMatchFilter = activeFilter === 'semua' || topic.priority === activeFilter}
								{@const badge = getPriorityBadge(topic.priority)}

								{#if isMatchFilter}
									<div
										class="flex items-start justify-between gap-4 rounded-xl border border-slate-200/70 bg-slate-50/50 p-3.5 transition-all hover:bg-slate-50 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:bg-zinc-800/70"
									>
										<div>
											<div class="flex flex-wrap items-center gap-2">
												<button
													type="button"
													onclick={() => openTopicModal(topic)}
													class="text-left text-sm font-semibold text-slate-900 hover:text-rose-600 dark:text-zinc-100 dark:hover:text-rose-400 transition-colors"
												>
													{topic.title}
												</button>
												<span class="rounded border px-1.5 py-0.2 text-[9px] font-medium {badge.bg}">
													{badge.text}
												</span>
											</div>
											<p class="mt-1 text-xs text-slate-600 dark:text-zinc-400">
												{topic.description}
											</p>
										</div>

										<button
											type="button"
											onclick={() => openTopicModal(topic)}
											class="shrink-0 rounded-lg border border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-xs hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
										>
											Detail
										</button>
									</div>
								{/if}
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<!-- TOPIC DETAIL MODAL / DRAWER -->
{#if selectedTopic}
	{@const badge = getPriorityBadge(selectedTopic.priority)}

	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-xs"
		role="dialog"
		aria-modal="true"
	>
		<!-- Backdrop click -->
		<button
			type="button"
			onclick={closeTopicModal}
			class="absolute inset-0 size-full cursor-default bg-transparent"
			aria-label="Tutup modal"
		></button>

		<div
			class="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
		>
			<!-- Close button -->
			<button
				type="button"
				onclick={closeTopicModal}
				class="absolute right-5 top-5 rounded-full p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-300"
				aria-label="Tutup"
			>
				<svg class="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>

			<div class="flex items-center gap-2">
				<span class="rounded border px-2 py-0.5 text-xs font-semibold {badge.bg}">
					{badge.text}
				</span>
			</div>

			<h3 class="mt-3 text-xl font-extrabold text-slate-900 dark:text-white">
				{selectedTopic.title}
			</h3>

			<p class="mt-3 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				{selectedTopic.description}
			</p>

			{#if selectedTopic.keyPoints && selectedTopic.keyPoints.length > 0}
				<div class="mt-5 rounded-2xl bg-slate-50 p-4 dark:bg-zinc-800/50">
					<h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
						Poin Kunci yang Perlu Dikuasai:
					</h4>
					<ul class="mt-2.5 space-y-2 text-xs text-slate-600 dark:text-zinc-400">
						{#each selectedTopic.keyPoints as point}
							<li class="flex items-start gap-2">
								<span class="text-rose-500 font-bold">•</span>
								<span>{point}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/if}

			{#if selectedTopic.resources && selectedTopic.resources.length > 0}
				<div class="mt-5">
					<h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300">
						Bacaan Terkait di Baricode:
					</h4>
					<div class="mt-2 space-y-2">
						{#each selectedTopic.resources as res}
							<a
								href={res.url}
								class="flex items-center justify-between rounded-xl border border-rose-200/80 bg-rose-50/50 p-3 text-xs font-medium text-rose-700 transition hover:bg-rose-100/70 dark:border-rose-900/40 dark:bg-rose-950/30 dark:text-rose-300 dark:hover:bg-rose-950/50"
							>
								<div class="flex items-center gap-2">
									<svg class="size-4 shrink-0 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
										/>
									</svg>
									<span>{res.title}</span>
								</div>
								<span class="text-[11px] text-rose-600 dark:text-rose-400">Buka →</span>
							</a>
						{/each}
					</div>
				</div>
			{/if}

			<div class="mt-6 flex justify-end border-t border-slate-200 pt-4 dark:border-zinc-800">
				<button
					type="button"
					onclick={closeTopicModal}
					class="rounded-xl border border-slate-200 bg-white px-5 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
				>
					Tutup
				</button>
			</div>
		</div>
	</div>
{/if}
