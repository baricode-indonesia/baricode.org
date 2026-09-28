<script lang="ts">
	const todayStr = new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
</script>

<svelte:head>
	<title>Tata Tertib Grup — Baricode Indonesia</title>
	<meta
		name="description"
		content="Tata tertib, aturan, dan etika bergabung di grup WhatsApp dan komunitas Baricode Indonesia."
	/>
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<div class="flex items-center gap-2">
		<span class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
			📋 Komunitas &amp; Etika
		</span>
	</div>

	<h1 class="mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
		Tata Tertib Grup Komunitas
	</h1>
	<p class="mt-2 text-sm text-slate-500 dark:text-zinc-400">Terakhir diperbarui: {todayStr}</p>

	<p class="mt-6 text-base leading-relaxed text-slate-600 dark:text-zinc-300">
		Grup komunitas Baricode Indonesia dibuat sebagai wadah yang aman, ramah, dan kondusif untuk belajar koding bersama, bertanya seputar kendala IT, serta berbagi ilmu. Demi kenyamanan bersama, seluruh anggota grup diharapkan membaca dan mematuhi tata tertib di bawah ini.
	</p>

	<div class="mt-10 flex max-w-none flex-col gap-8 text-base leading-relaxed text-slate-600 dark:text-zinc-300">
		<!-- 1. Saling Menghormati -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-emerald-500/10 text-lg text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400 font-bold">1</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Saling Menghormati &amp; Sopan Santun</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Hargai setiap anggota grup tanpa membedakan usia, latar belakang, jenis kelamin, maupun tingkat keahlian koding.</li>
				<li>Gunakan bahasa yang sopan dan santun saat berinteraksi. Ingat bahwa semua orang pernah menjadi pemula.</li>
				<li>Dilarang keras melakukan perundungan (cyberbullying), celaan, sarkasme berlebihan, atau ujaran yang merendahkan pembelajar lain.</li>
			</ul>
		</div>

		<!-- 2. Larangan SARA & Konten Sensitif -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-rose-500/10 text-lg text-rose-600 dark:bg-rose-500/20 dark:text-rose-400 font-bold">2</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Larangan SARA, Ujaran Kebencian &amp; Hoax</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Dilarang membahas atau menyebarkan isu SARA (Suku, Agama, Ras, Antargolongan), politik praktis, debat keagamaan, atau isu sensitif lainnya.</li>
				<li>Dilarang mengunggah konten bermuatan pornografi, kekerasan, perjudian, judi online, serta tautan berbahaya (phishing/malware).</li>
				<li>Dilarang menyebarkan berita bohong (hoax), rumor tanpa sumber jelas, atau pesan berantai yang menyesatkan.</li>
			</ul>
		</div>

		<!-- 3. Topik & Relevansi Diskusi -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-amber-500/10 text-lg text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 font-bold">3</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Fokus Topik Pembelajaran &amp; IT</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Diskusi grup diutamakan seputar pemrograman, ilmu komputer, perkembangan IT, tutorial, serta program Baricode Indonesia.</li>
				<li>Obrolan santai (off-topic) diperbolehkan secukupnya asalkan tidak mendominasi atau mengganggu diskusi teknis anggota lain.</li>
			</ul>
		</div>

		<!-- 4. Bebas Spam & Promosi Komersial -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-purple-500/10 text-lg text-purple-600 dark:bg-purple-500/20 dark:text-purple-400 font-bold">4</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Dilarang Spam &amp; Iklan Tanpa Izin</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Dilarang promosi produk, jualan, jasa joki tugas, jasa pembuatan aplikasi, link referral/affiliate, atau grup lain tanpa izin tertulis dari Admin.</li>
				<li>Dilarang melakukan spam pesan beruntun (flood chat) atau stiker secara berlebihan.</li>
			</ul>
		</div>

		<!-- 5. Etika Bertanya & Berbagi Kode -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-blue-500/10 text-lg text-blue-600 dark:bg-blue-500/20 dark:text-blue-400 font-bold">5</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Etika Bertanya &amp; Berbagi Kode</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li><strong>Jelaskan masalah dengan spesifik:</strong> Sebutkan bahasa/framework yang digunakan, pesan error lengkap, dan usaha yang sudah dilakukan.</li>
				<li><strong>Gunakan format kode yang rapi:</strong> Kirim teks kode atau tangkapan layar (screenshot) yang jelas dan mudah dibaca (bukan foto layar HP yang kabur).</li>
				<li><strong>Hindari pertanyaan bertipe "Hello Problem":</strong> Jangan bertanya "Ada yang bisa Python?" tanpa langsung menyampaikan pertanyaan/masalahnya. Langsung tuliskan pertanyaanmu agar anggota yang mengerti bisa segera menjawab.</li>
			</ul>
		</div>

		<!-- 6. Privasi & Keamanan Anggota -->
		<div class="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-xs backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-900/60">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-teal-500/10 text-lg text-teal-600 dark:bg-teal-500/20 dark:text-teal-400 font-bold">6</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Privasi &amp; Keamanan</h2>
			</div>
			<ul class="mt-4 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Dilarang menghubungi (Private Chat/DM) anggota lain untuk tujuan mengganggu, modus penipuan, atau meminta bantuan secara berlebihan tanpa persetujuan.</li>
				<li>Dilarang menyebarkan data pribadi (seperti nomor HP, alamat, email, foto) milik anggota lain tanpa izin bersangkutan (doxxing).</li>
			</ul>
		</div>

		<!-- 7. Konsekuensi Pelanggaran -->
		<div class="rounded-2xl border border-red-500/20 bg-red-500/5 p-6 shadow-xs backdrop-blur dark:border-red-500/30 dark:bg-red-950/20">
			<div class="flex items-center gap-3">
				<span class="flex size-9 items-center justify-center rounded-xl bg-red-600 text-white font-bold text-lg">7</span>
				<h2 class="text-xl font-semibold text-slate-900 dark:text-white">Konsekuensi Pelanggaran</h2>
			</div>
			<p class="mt-4 text-sm leading-relaxed text-slate-600 dark:text-zinc-300">
				Admin berhak melakukan tindakan tegas demi kenyamanan ekosistem komunitas, meliputi:
			</p>
			<ul class="mt-2 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-zinc-300 list-disc list-inside">
				<li>Teguran atau pengingat secara terbuka maupun tertutup.</li>
				<li>Penghapusan pesan yang melanggar tata tertib.</li>
				<li>Pengeluaran permanen (Kick / Block) dari grup komunitas tanpa pemberitahuan sebelumnya untuk pelanggaran berat (SARA, penipuan, spam masif, pelecehan).</li>
			</ul>
		</div>
	</div>

	<!-- Action Links -->
	<div class="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-t border-slate-200 dark:border-zinc-800/80 pt-8">
		<a
			href="/whatsapp"
			class="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-600/20 transition hover:bg-emerald-500"
		>
			💬 Kembali ke Halaman Grup WhatsApp
		</a>
		<a
			href="/kontak"
			class="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-750"
		>
			📩 Laporkan Pelanggaran / Hubungi Admin
		</a>
	</div>
</section>
