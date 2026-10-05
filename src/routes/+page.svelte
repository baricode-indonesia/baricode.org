<script lang="ts">
	import PostCard from '$lib/components/PostCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { samplePosts } from '$lib/data/site';
</script>

<svelte:head>
	<title>Baricode Indonesia — Akademi dan Kursus Online IT</title>
	<meta
		name="description"
		content="Akademi dan kursus online IT untuk siapa saja. Belajar koding dari mana saja, meski dari kondisi paling terbatas sekalipun."
	/>
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
	<span
		class="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-semibold text-rose-600 shadow-sm backdrop-blur dark:text-rose-300"
	>
		🚀 Komunitas IT yang Membumi
	</span>

	<h1
		class="mx-auto mt-6 max-w-3xl text-4xl leading-[1.15] font-extrabold tracking-tight text-slate-900 sm:text-6xl dark:text-white"
	>
		Belajar koding tidak butuh
		<span
			class="bg-gradient-to-r from-red-600 via-rose-600 to-amber-600 bg-clip-text text-transparent dark:from-red-400 dark:via-rose-400 dark:to-amber-300"
		>
			kondisi sempurna.
		</span>
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-zinc-300">
		Kami adalah komunitas, akademi, dan kursus online IT yang baru saja memulai langkah pertama.
		Tidak perlu minder kalau kamu belajar dari kamar kecil atau dari kondisi paling terbatas
		sekalipun, karena kami pun memulai semuanya dari sana.
	</p>

	<!-- Hero CTA Buttons -->
	<div class="mt-8 flex flex-wrap justify-center gap-3">
		<a
			href="/kursus"
			class="rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-red-600/30 transition hover:scale-[1.02] hover:from-red-500 hover:to-rose-500"
		>
			Lihat Kursus &amp; Akademi
		</a>
		<a
			href="/bimbingan"
			class="rounded-full border border-slate-300/80 bg-white/90 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:border-rose-500/50 hover:bg-rose-50/50 hover:text-rose-700 dark:border-zinc-800 dark:bg-zinc-900/80 dark:text-zinc-300 dark:hover:border-rose-500/50 dark:hover:bg-rose-950/30 dark:hover:text-rose-400"
		>
			Daftar Bimbingan Gratis
		</a>
	</div>

	<div class="mx-auto mt-16 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-lg"
		>
			<p class="text-2xl font-bold text-slate-900 dark:text-white">⚡</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Gratis &amp; Premium</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-lg"
		>
			<p class="text-2xl font-bold text-slate-900 dark:text-white">🌍</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Indonesia</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-lg"
		>
			<p class="text-2xl font-bold text-slate-900 dark:text-white">❤️</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Community-Driven</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-5 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-lg"
		>
			<p class="text-2xl font-bold text-slate-900 dark:text-white">100%</p>
			<p class="mt-1 text-xs font-medium text-slate-600 dark:text-zinc-300">Transparan</p>
		</div>
	</div>
</section>

<!-- Yang Akan Kamu Pelajari -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<div class="mb-10 text-center">
		<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
			Teknologi &amp; Kurikulum
		</p>
		<h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
			Yang Akan Kamu Pelajari
		</h2>
		<p class="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
			Kuasai keahlian dan ekosistem teknologi modern yang paling diminati di dunia industri digital,
			dipandu secara bertahap dari dasar hingga proyek nyata.
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-3">
		<!-- Laravel Card -->
		<div
			class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-red-500/40 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:bg-zinc-900/90"
		>
			<div>
				<div class="flex items-center justify-between">
					<div
						class="flex size-12 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-600 dark:bg-red-500/20 dark:text-red-400"
					>
						<svg class="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"
							/></svg
						>
					</div>
					<span
						class="rounded-full border border-red-500/20 bg-red-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-red-600 dark:text-red-400"
					>
						Fullstack Web
					</span>
				</div>

				<h3 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">Laravel</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					Framework PHP modern dan terpopuler untuk membuat aplikasi web yang tangguh, aman, dan
					REST API berstandar industri dengan arsitektur elegan.
				</p>

				<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-400">
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-red-500"></span>
						<span>Arsitektur MVC &amp; Eloquent ORM</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-red-500"></span>
						<span>REST API &amp; Autentikasi Modern</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-red-500"></span>
						<span>Database Migration &amp; Blade Engine</span>
					</li>
				</ul>
			</div>

			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<a
					href="/roadmap/laravel"
					class="inline-flex items-center gap-1.5 text-xs font-semibold text-red-600 transition group-hover:gap-2 dark:text-red-400"
				>
					<span>Pelajari Roadmap Laravel</span>
					<span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</div>

		<!-- WordPress Card -->
		<div
			class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-sky-500/40 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:bg-zinc-900/90"
		>
			<div>
				<div class="flex items-center justify-between">
					<div
						class="flex size-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
					>
						<svg class="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"
							/></svg
						>
					</div>
					<span
						class="rounded-full border border-sky-500/20 bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-600 dark:text-sky-400"
					>
						CMS Web
					</span>
				</div>

				<h3 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">WordPress</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					CMS nomor satu yang menggerakkan lebih dari 40% website dunia. Pelajari kustomisasi tema,
					plugin, Custom Post Types, hingga toko online.
				</p>

				<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-400">
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						<span>Custom Theme &amp; Template Hierarchy</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						<span>Custom Post Types &amp; ACF</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-sky-500"></span>
						<span>Toko Online &amp; WooCommerce</span>
					</li>
				</ul>
			</div>

			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<a
					href="/roadmap/wordpress"
					class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition group-hover:gap-2 dark:text-sky-400"
				>
					<span>Pelajari Roadmap WordPress</span>
					<span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</div>

		<!-- ReactJS Card -->
		<div
			class="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:bg-zinc-900/90"
		>
			<div>
				<div class="flex items-center justify-between">
					<div
						class="flex size-12 items-center justify-center rounded-xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400"
					>
						<svg class="size-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
							<path
								d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
							/></svg
						>
					</div>
					<span
						class="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400"
					>
						Frontend UI
					</span>
				</div>

				<h3 class="mt-4 text-xl font-bold text-slate-900 dark:text-white">ReactJS</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					Library frontend terpopuler di industri untuk membangun antarmuka web interaktif, reaktif,
					dan modular berbasis komponen modern.
				</p>

				<ul class="mt-4 space-y-2 text-xs text-slate-600 dark:text-zinc-400">
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-cyan-500"></span>
						<span>Komponen Reaktif &amp; JSX Modern</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-cyan-500"></span>
						<span>State Management &amp; React Hooks</span>
					</li>
					<li class="flex items-center gap-2">
						<span class="size-1.5 rounded-full bg-cyan-500"></span>
						<span>Single Page App &amp; Konsumsi API</span>
					</li>
				</ul>
			</div>

			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<a
					href="/kursus"
					class="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 transition group-hover:gap-2 dark:text-cyan-400"
				>
					<span>Eksplorasi Kelas Frontend</span>
					<span aria-hidden="true">&rarr;</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Program -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<div class="mb-10 text-center">
		<h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
			Pilih Jalur Belajarmu
		</h2>
		<p class="mx-auto mt-3 max-w-xl text-sm text-slate-600 dark:text-zinc-400">
			Ada banyak jalan untuk berkembang bersama kami. Yuk, eksplorasi dan manfaatkan semua fiturnya!
		</p>
	</div>

	<div class="grid gap-6 sm:grid-cols-3">
		<!-- Kursus Card -->
		<a
			href="/kursus"
			class="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-amber-500/40 hover:bg-white hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-amber-500/40 dark:hover:bg-zinc-900/90"
		>
			<div>
				<div class="flex items-center justify-between">
					<span
						class="flex size-12 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-2xl text-amber-600 dark:text-amber-400"
					>
						📚
					</span>
					<span
						class="rounded-full bg-amber-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-amber-600 dark:bg-amber-500/20 dark:text-amber-400"
					>
						Belajar Mandiri
					</span>
				</div>
				<h3 class="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-amber-600 dark:text-white dark:group-hover:text-amber-400">
					Kursus
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					Belajar mandiri dengan kurikulum terstruktur langkah demi langkah, dari dasar hingga proyek portofolio nyata. Tersedia modul gratis dan panduan komprehensif.
				</p>
			</div>
			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 transition group-hover:gap-2 dark:text-amber-400">
					<span>Pelajari Kursus</span>
					<span aria-hidden="true">&rarr;</span>
				</span>
			</div>
		</a>

		<!-- Bimbingan Card -->
		<a
			href="/bimbingan"
			class="group relative flex flex-col justify-between rounded-2xl border border-rose-500/40 bg-gradient-to-b from-rose-500/5 via-white/90 to-white/90 p-6 shadow-lg shadow-rose-500/5 backdrop-blur transition hover:-translate-y-1 hover:border-rose-500 hover:shadow-xl dark:border-rose-500/40 dark:from-rose-950/20 dark:via-zinc-900/80 dark:to-zinc-900/80 dark:shadow-xl dark:hover:border-rose-500"
		>
			<span
				class="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-red-600 to-rose-600 px-3 py-0.5 text-[10px] font-bold tracking-wider text-white uppercase shadow-xs"
			>
				Favorit Komunitas
			</span>
			<div>
				<div class="flex items-center justify-between">
					<span
						class="flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400"
					>
						🤝
					</span>
					<span
						class="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-rose-600 dark:bg-rose-500/20 dark:text-rose-400"
					>
						100% Gratis
					</span>
				</div>
				<h3 class="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-rose-600 dark:text-white dark:group-hover:text-rose-400">
					Bimbingan
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					Pendampingan belajar koding gratis via WhatsApp. Mentor memantau progresmu dan mengarahkan agar kamu tetap konsisten sampai tujuan tercapai tanpa meeting kaku.
				</p>
			</div>
			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 transition group-hover:gap-2 dark:text-rose-400">
					<span>Daftar Bimbingan Gratis</span>
					<span aria-hidden="true">&rarr;</span>
				</span>
			</div>
		</a>

		<!-- Akademi Card -->
		<a
			href="/akademi"
			class="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-sky-500/40 hover:bg-white hover:shadow-xl dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-sky-500/40 dark:hover:bg-zinc-900/90"
		>
			<div>
				<div class="flex items-center justify-between">
					<span
						class="flex size-12 items-center justify-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-2xl text-sky-600 dark:text-sky-400"
					>
						🎓
					</span>
					<span
						class="rounded-full bg-sky-500/10 px-2.5 py-0.5 text-[11px] font-semibold text-sky-600 dark:bg-sky-500/20 dark:text-sky-400"
					>
						Live Class Intensif
					</span>
				</div>
				<h3 class="mt-4 text-xl font-bold text-slate-900 transition group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400">
					Akademi
				</h3>
				<p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-400">
					Live class online kelompok kecil bersama instruktur praktisi. Lebih intensif, live coding, code review 1-on-1, dan rekaman seumur hidup untuk peserta.
				</p>
			</div>
			<div class="mt-6 border-t border-slate-100 pt-4 dark:border-zinc-800/80">
				<span class="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 transition group-hover:gap-2 dark:text-sky-400">
					<span>Lihat Program Akademi</span>
					<span aria-hidden="true">&rarr;</span>
				</span>
			</div>
		</a>
	</div>
</section>

<!-- Kenapa Harus Baricode -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<div class="mb-10 text-center">
		<p class="text-xs font-semibold tracking-wider text-rose-600 uppercase dark:text-rose-400">
			Keunggulan
		</p>
		<h2 class="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">
			Kenapa Harus Baricode?
		</h2>
	</div>

	<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
		>
			<span
				class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400"
				>💎</span
			>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">
				Gratis &amp; Premium
			</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Mulai dari materi dasar yang gratis untuk semua, sampai kelas premium berbayar untuk kamu
				yang ingin belajar lebih intensif dengan layanan terbaik.
			</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
		>
			<span
				class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400"
				>🤝</span
			>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Proyek Kolaborasi</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Kerja bareng dalam tim, belajar Git workflow, dan bangun portfolio bersama.
			</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
		>
			<span
				class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400"
				>🗺️</span
			>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Roadmap Belajar</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Path yang jelas dari pemula sampai mahir. Tinggal ikuti langkah demi langkah.
			</p>
		</div>
		<div
			class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 text-center shadow-md backdrop-blur transition hover:-translate-y-1 hover:border-slate-300 hover:bg-white dark:border-zinc-800/80 dark:bg-zinc-900/60 dark:shadow-xl dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
		>
			<span
				class="mx-auto flex size-12 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-500/10 text-2xl text-rose-600 dark:text-rose-400"
				>💬</span
			>
			<h3 class="mt-4 text-base font-semibold text-slate-900 dark:text-white">Komunitas Aktif</h3>
			<p class="mt-2 text-xs leading-relaxed text-slate-600 dark:text-zinc-400">
				Tanya jawab kapan saja. Ada yang siap bantu kamu saat waktu luang.
			</p>
		</div>
	</div>
</section>

<!-- Artikel Terbaru -->
{#if samplePosts.length > 0}
	<section class="mx-auto max-w-5xl px-6 pb-24">
		<div class="mb-6 flex items-center justify-between">
			<h2 class="text-xl font-bold text-slate-900 dark:text-white">Artikel Terbaru</h2>
			<a
				href="/artikel"
				class="text-sm font-medium text-rose-600 transition hover:text-rose-700 hover:underline dark:text-rose-400 dark:hover:text-white"
			>
				Lihat semua &rarr;
			</a>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each samplePosts as post}
				<PostCard {post} />
			{/each}
		</div>
	</section>
{/if}

<!-- CTA Banner -->
<section class="mx-auto max-w-5xl px-6 pb-24">
	<CtaBanner />
</section>
