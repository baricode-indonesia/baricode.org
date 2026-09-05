<script lang="ts">
	let { class: className = '' }: { class?: string } = $props();
	let email = $state('');
	let statusMessage = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();
		if (email) {
			statusMessage = 'Terima kasih! Email Anda telah terdaftar untuk menerima newsletter kami.';
			email = '';
		}
	}
</script>

<div class={`flex flex-col gap-3 ${className}`}>
	<p class="text-sm font-semibold text-white">Berlangganan Newsletter</p>
	<p class="text-xs text-zinc-400">Dapatkan artikel dan info kursus terbaru langsung ke email Anda.</p>

	{#if statusMessage}
		<div class="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
			{statusMessage}
		</div>
	{/if}

	<form onsubmit={handleSubmit} class="flex max-w-sm gap-2">
		<label for="newsletter-email" class="sr-only">Alamat email</label>
		<input
			type="email"
			name="email"
			id="newsletter-email"
			bind:value={email}
			required
			placeholder="Alamat email Anda"
			class="w-full min-w-0 rounded-xl border border-zinc-800 bg-zinc-900/90 px-4 py-2 text-sm text-white placeholder:text-zinc-500 focus:border-rose-500 focus:outline-none focus:ring-1 focus:ring-rose-500 transition"
		/>
		<button
			type="submit"
			class="shrink-0 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-red-600/20 hover:from-red-500 hover:to-rose-500 transition cursor-pointer"
		>
			Langganan
		</button>
	</form>
</div>
