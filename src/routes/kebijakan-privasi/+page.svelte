<script lang="ts">
	const todayStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<svelte:head>
	<title>Kebijakan Privasi — Baricode Indonesia</title>
	<meta name="description" content="Kebijakan privasi Baricode Indonesia mengenai pengumpulan dan penggunaan data pengunjung." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="text-sm font-medium uppercase tracking-wide text-red-300">Legal</p>
	<h1 class="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
		Kebijakan Privasi
	</h1>
	<p class="mt-2 text-sm text-red-300">Terakhir diperbarui: {todayStr}</p>

	<div class="mt-8 flex max-w-none flex-col gap-6 text-base leading-relaxed text-red-100">
		<div>
			<h2 class="text-lg font-semibold text-white">1. Data yang Kami Kumpulkan</h2>
			<p class="mt-2">
				Kami dapat mengumpulkan data dasar seperti nama dan alamat email saat kamu mendaftar akun
				atau menghubungi kami, serta data teknis umum (seperti jenis perangkat dan halaman yang
				dikunjungi) untuk keperluan analitik situs.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">2. Penggunaan Data</h2>
			<p class="mt-2">
				Data yang dikumpulkan digunakan untuk memberikan dan meningkatkan layanan kami, termasuk
				komunikasi terkait bimbingan dan kursus yang kamu ikuti.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">3. Berbagi Data</h2>
			<p class="mt-2">
				Kami tidak menjual data pribadi kamu kepada pihak ketiga. Data hanya dibagikan bila
				diperlukan untuk menjalankan layanan (misalnya penyedia infrastruktur teknis) atau bila
				diwajibkan oleh hukum.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">4. Keamanan</h2>
			<p class="mt-2">
				Kami berupaya menjaga keamanan data yang kamu percayakan kepada kami dengan langkah-langkah
				teknis yang wajar.
			</p>
		</div>
		<div>
			<h2 class="text-lg font-semibold text-white">5. Hak Kamu</h2>
			<p class="mt-2">
				Kamu berhak meminta akses, koreksi, atau penghapusan data pribadimu dengan menghubungi kami
				melalui <a href="/kontak" class="text-red-300 hover:text-white hover:underline">halaman kontak</a>.
			</p>
		</div>
	</div>
</section>
