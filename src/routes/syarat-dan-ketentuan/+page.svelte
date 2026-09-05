<script lang="ts">
	const todayStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<svelte:head>
	<title>Syarat dan Ketentuan — Baricode Indonesia</title>
	<meta name="description" content="Syarat dan ketentuan penggunaan layanan Baricode Indonesia." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-red-300">Legal</p>
	<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
		Syarat dan Ketentuan
	</h1>
	<p class="mt-2 text-sm text-red-300">Terakhir diperbarui: {todayStr}</p>

	<div class="mt-8 flex max-w-none flex-col gap-6 text-base leading-relaxed text-red-100">
		<div>
			<h2 class="text-lg font-semibold text-white">1. Penggunaan Layanan</h2>
			<p class="mt-2">
				Dengan mengakses dan menggunakan situs serta layanan Baricode Indonesia (blog, bimbingan
				gratis, dan kursus berbayar), kamu setuju untuk menggunakannya secara wajar dan tidak
				melanggar hukum yang berlaku.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">2. Konten</h2>
			<p class="mt-2">
				Seluruh artikel, materi, dan konten lain yang dipublikasikan di situs ini adalah milik
				Baricode Indonesia, kecuali dinyatakan lain. Konten disediakan untuk tujuan edukasi.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">3. Layanan Berbayar</h2>
			<p class="mt-2">
				Kursus dan akademi berbayar diselenggarakan melalui subdomain terpisah dan tunduk pada
				ketentuan tambahan yang berlaku di layanan tersebut.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">4. Perubahan Ketentuan</h2>
			<p class="mt-2">
				Ketentuan ini dapat berubah sewaktu-waktu. Perubahan akan berlaku sejak dipublikasikan di
				halaman ini.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">5. Kontak</h2>
			<p class="mt-2">
				Pertanyaan seputar ketentuan ini dapat disampaikan melalui
				<a href="/kontak" class="text-red-300 hover:text-white hover:underline">halaman kontak</a>
				kami.
			</p>
		</div>
	</div>
</section>
