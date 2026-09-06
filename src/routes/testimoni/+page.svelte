<script lang="ts">
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';
	import CtaBanner from '$lib/components/CtaBanner.svelte';
	import { sampleTestimonials, type Testimonial } from '$lib/data/site';

	let testimonialsList = $state<Testimonial[]>([...sampleTestimonials]);

	let name = $state('');
	let email = $state('');
	let role = $state('');
	let rating = $state('');
	let content = $state('');
	let successMsg = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (name && content) {
			const newTestimonial: Testimonial = {
				id: Date.now(),
				name,
				role: role || undefined,
				content,
				rating: rating ? parseInt(rating, 10) : undefined
			};
			testimonialsList = [newTestimonial, ...testimonialsList];
			successMsg = 'Testimoni Anda telah dikirim dan akan tampil setelah ditinjau oleh tim kami.';
			name = '';
			email = '';
			role = '';
			rating = '';
			content = '';
		}
	}
</script>

<svelte:head>
	<title>Testimoni — Baricode Indonesia</title>
	<meta name="description" content="Cerita dari mereka yang belajar IT bersama Baricode Indonesia." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-rose-600 dark:text-red-300">Testimoni</p>
	<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Cerita dari mereka yang sudah memulai.
	</h1>

	{#if testimonialsList.length === 0}
		<div class="mt-10 rounded-2xl border border-dashed border-slate-300 dark:border-white/20 bg-white/80 dark:bg-white/5 p-10 text-center backdrop-blur">
			<p class="text-base text-slate-700 dark:text-red-100">
				Kami baru saja memulai langkah pertama, jadi testimoni di halaman ini akan segera hadir seiring
				bertambahnya peserta yang belajar bersama kami.
			</p>
			<p class="mt-2 text-sm text-slate-500 dark:text-red-300">
				Ingin jadi salah satu cerita pertama? Mulai belajar sekarang.
			</p>
		</div>
	{:else}
		<div class="mt-10 grid gap-6 sm:grid-cols-2">
			{#each testimonialsList as item}
				<TestimonialCard testimonial={item} />
			{/each}
		</div>
	{/if}

	<div class="mt-14 rounded-2xl border border-slate-200 bg-white/80 dark:border-white/10 dark:bg-white/5 p-6 shadow-sm dark:shadow-none">
		<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Bagikan Pengalaman Anda</h2>
		<p class="mt-1 text-sm text-slate-500 dark:text-red-300/70">
			Testimoni Anda akan tampil di halaman ini setelah ditinjau oleh tim kami.
		</p>

		{#if successMsg}
			<div class="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-700 dark:text-emerald-300">
				{successMsg}
			</div>
		{/if}

		<form onsubmit={handleSubmit} class="mt-6 grid gap-4 sm:grid-cols-2">
			<div>
				<label for="testimonial-name" class="text-sm font-medium text-slate-700 dark:text-red-100">Nama</label>
				<input
					type="text"
					name="name"
					id="testimonial-name"
					bind:value={name}
					required
					class="mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white placeholder:text-slate-400 dark:placeholder:text-red-300/50 px-3 py-2 text-sm focus:border-rose-500 dark:focus:border-white/30 focus:outline-none"
				/>
			</div>
			<div>
				<label for="testimonial-email" class="text-sm font-medium text-slate-700 dark:text-red-100">Email (opsional)</label>
				<input
					type="email"
					name="email"
					id="testimonial-email"
					bind:value={email}
					class="mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white placeholder:text-slate-400 dark:placeholder:text-red-300/50 px-3 py-2 text-sm focus:border-rose-500 dark:focus:border-white/30 focus:outline-none"
				/>
			</div>
			<div class="sm:col-span-2">
				<label for="testimonial-role" class="text-sm font-medium text-slate-700 dark:text-red-100">Peran / Status (opsional)</label>
				<input
					type="text"
					name="role"
					id="testimonial-role"
					bind:value={role}
					placeholder="Contoh: Pelajar, Alumni Bimbingan"
					class="mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white placeholder:text-slate-400 dark:placeholder:text-red-300/50 px-3 py-2 text-sm focus:border-rose-500 dark:focus:border-white/30 focus:outline-none"
				/>
			</div>
			<div>
				<label for="testimonial-rating" class="text-sm font-medium text-slate-700 dark:text-red-100">Rating (opsional)</label>
				<select
					name="rating"
					id="testimonial-rating"
					bind:value={rating}
					class="mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 dark:border-white/15 dark:bg-zinc-900 dark:text-white px-3 py-2 text-sm focus:border-rose-500 dark:focus:border-white/30 focus:outline-none"
				>
					<option value="">Pilih rating</option>
					<option value="5">5 - Sangat Puas</option>
					<option value="4">4 - Puas</option>
					<option value="3">3 - Cukup</option>
					<option value="2">2 - Kurang</option>
					<option value="1">1 - Buruk</option>
				</select>
			</div>
			<div class="sm:col-span-2">
				<label for="testimonial-content" class="text-sm font-medium text-slate-700 dark:text-red-100">Testimoni</label>
				<textarea
					name="content"
					id="testimonial-content"
					rows="4"
					bind:value={content}
					required
					class="mt-1 w-full rounded-lg border border-slate-300 bg-white text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-white placeholder:text-slate-400 dark:placeholder:text-red-300/50 px-3 py-2 text-sm focus:border-rose-500 dark:focus:border-white/30 focus:outline-none"
				></textarea>
			</div>
			<div class="sm:col-span-2">
				<button
					type="submit"
					class="rounded-full bg-slate-900 text-white dark:bg-white dark:text-red-950 px-5 py-2 text-sm font-semibold hover:bg-slate-800 dark:hover:bg-red-50 cursor-pointer transition"
				>
					Kirim Testimoni
				</button>
			</div>
		</form>
	</div>

	<div class="mt-10">
		<CtaBanner />
	</div>
</section>
