export type GlossaryCategory = 'dasar' | 'frontend' | 'backend' | 'tools' | 'database';

export interface GlossaryItem {
	term: string;
	slug: string;
	abbreviation?: string;
	category: GlossaryCategory;
	categoryLabel: string;
	definition: string;
	analogy: string;
	example?: string;
	relatedArticle?: {
		title: string;
		url: string;
	};
}

export const glossaryCategories: { key: string; label: string }[] = [
	{ key: 'all', label: 'Semua Istilah' },
	{ key: 'dasar', label: 'Dasar Pemrograman' },
	{ key: 'frontend', label: 'Web & Frontend' },
	{ key: 'backend', label: 'Backend & Server' },
	{ key: 'tools', label: 'Tools & Git' },
	{ key: 'database', label: 'Database & Data' }
];

export const glossaryList: GlossaryItem[] = [
	{
		term: 'Algoritma',
		slug: 'algoritma',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Urutan langkah-langkah logis, terencana, dan terstruktur yang disusun secara sistematis untuk menyelesaikan masalah atau mencapai tujuan tertentu di komputer.',
		analogy:
			'Sama seperti resep memasak mie instan: Langkah 1 rebus air, langkah 2 masukkan mie saat mendidih, langkah 3 campur bumbu di piring, langkah 4 tiriskan dan aduk. Urutan tidak boleh terbalik agar hasilnya matang sempurna.',
		example:
			'Algoritma pencarian nomor kontak di buku telepon secara alfabetis (A sampai Z).',
		relatedArticle: {
			title: 'Panduan Algoritma dan Pemrograman untuk Pemula',
			url: '/artikel/algoritma-dan-pemrograman-panduan-dasar-cara-mudah-memahaminya-bagi-pemula'
		}
	},
	{
		term: 'API',
		slug: 'api',
		abbreviation: 'Application Programming Interface',
		category: 'backend',
		categoryLabel: 'Backend & Server',
		definition:
			'Jembatan atau antarmuka perantara yang memungkinkan dua aplikasi perangkat lunak berbeda untuk saling "berbicara", meminta layanan, dan bertukar data secara aman.',
		analogy:
			'Pelayan di sebuah restoran. Kamu (aplikasi pengguna) memesan makanan melalui pelayan, pelayan menyampaikan pesanan ke dapur (server), lalu membawakan kembali makanan yang sudah jadi ke mejamu.',
		example:
			'Website e-commerce menggunakan API RajaOngkir untuk mengecek tarif ongkos kirim ekspedisi secara otomatis.'
	},
	{
		term: 'Array',
		slug: 'array',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Struktur data berurutan yang digunakan untuk menampung sekumpulan nilai atau data bertipe sama/beragam di dalam satu variabel tunggal.',
		analogy:
			'Rak sepatu bertingkat dengan nomor urut kotak 0, 1, 2, dst. Setiap kotak bisa diisi sepatu yang berbeda, dan kita bisa mengambil sepatu tertentu hanya dengan menyebut nomor kotaknya.',
		example:
			'Daftar nama siswa: const santri = ["Ahmad", "Zaid", "Fatimah"];'
	},
	{
		term: 'Backend',
		slug: 'backend',
		category: 'backend',
		categoryLabel: 'Backend & Server',
		definition:
			'Bagian aplikasi yang beroperasi di balik layar (sisi server) yang menangani pengolahan logika bisnis, autentikasi pengguna, perhitungan rumit, serta komunikasi dengan basis data.',
		analogy:
			'Dapur restoran tertutup tempat para koki meracik resep, memasak bahan, dan mengatur persediaan makanan di lemari pendingin. Pelanggan di ruang makan tidak melihat proses ini secara langsung.',
		example:
			'Kode yang mengecek apakah kata sandi login cocok dengan data di database sebelum mengizinkan pengguna masuk.'
	},
	{
		term: 'Backlog',
		slug: 'backlog',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Daftar prioritas seluruh fitur baru, perubahan, tugas perbaikan, maupun pekerjaan teknis yang belum dikerjakan dan menunggu giliran giliran eksekusi oleh tim pengembang.',
		analogy:
			'Daftar belanjaan atau to-do list harian di lemari es. Barang-barang dicatat terlebih dahulu, kemudian diambil satu per satu sesuai tingkat kebutuhan mendesak.',
		example:
			'Daftar tugas di Trello atau Jira: "Perbaiki tombol checkout", "Tambahkan fitur dark mode".',
		relatedArticle: {
			title: 'Mengenal Arti Backlog dalam Bahasa Bayi',
			url: '/artikel/backlog-artinya-dalam-bahasa-bayi'
		}
	},
	{
		term: 'Bug',
		slug: 'bug',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Cacat, kegagalan, atau kesalahan di dalam baris kode program komputer yang menyebabkan aplikasi berperilaku aneh, salah kalkulasi, atau berhenti berjalan (crash).',
		analogy:
			'Kerikil kecil yang terselip di rantai sepeda sehingga kayuhan tiba-tiba macet atau rantainya melompat keluar dari gir.',
		example:
			'Tombol submit formulir tidak bisa diklik saat pengguna memakai nomor HP berawalan +62.'
	},
	{
		term: 'CSS',
		slug: 'css',
		abbreviation: 'Cascading Style Sheets',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Bahasa penata gaya yang dipakai untuk mengatur tampilan visual, estetika, warna, tipografi, dan tata letak halaman web yang dibangun dengan HTML.',
		analogy:
			'Pakaian, cat warna dinding, lampu hias, dan perabotan yang membuat sebuah rumah kosong menjadi indah, nyaman dipandang, dan rapi.',
		example:
			'Mengubah warna tombol menjadi merah dengan kode: button { background-color: red; }',
		relatedArticle: {
			title: 'Panduan Lengkap Memahami HTML dan CSS untuk Pemula',
			url: '/artikel/panduan-lengkap-memahami-html-dan-css-untuk-pemula'
		}
	},
	{
		term: 'Database',
		slug: 'database',
		abbreviation: 'Basis Data',
		category: 'database',
		categoryLabel: 'Database & Data',
		definition:
			'Sistem penyimpanan data elektronik yang terstruktur rapi, aman, dan dapat diakses, dikelola, disaring, serta diperbarui dengan cepat oleh sistem komputer.',
		analogy:
			'Lemari arsip digital raksasa dengan laci dan map berlabel rapi, sehingga kamu bisa menemukan berkas formulir salah satu santri hanya dalam hitungan milidetik.',
		example:
			'MySQL, PostgreSQL, atau SQLite yang menyimpan nama akun, password terenkripsi, dan riwayat transaksi.'
	},
	{
		term: 'Debugging',
		slug: 'debugging',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Proses mengidentifikasi, menganalisis akar masalah, dan memperbaiki bug atau kesalahan kode di dalam suatu aplikasi hingga program kembali bekerja normal.',
		analogy:
			'Dokter atau montir handal yang memeriksa gejala mogok pada mesin motor, mencari kabel yang putus, dan menyambungkannya kembali dengan teliti.',
		example:
			'Menggunakan perintah console.log() untuk mencari tahu di mana nilai variabel tiba-tiba bernilai kosong.'
	},
	{
		term: 'Deployment',
		slug: 'deployment',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Serangkaian proses untuk memindahkan dan mengaktifkan kode aplikasi dari komputer pengembang lokal ke server publik agar bisa diakses pengguna di internet.',
		analogy:
			'Hari peresmian toko offline: semua barang dagangan sudah ditata rapi di rak, pintu dibuka, dan papan nama dipasang di depan jalan agar pembeli dari luar bisa berkunjung.',
		example:
			'Mengunggah website Baricode ke Vercel atau hosting cPanel sehingga memiliki domain www.baricode.org.'
	},
	{
		term: 'DOM',
		slug: 'dom',
		abbreviation: 'Document Object Model',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Representasi pohon hierarki dari seluruh elemen HTML di halaman web yang memungkinkan JavaScript membaca, mengubah teks, memodifikasi style, dan menghapus elemen secara dinamis.',
		analogy:
			'Papan denah perabot interaktif di ruangan. Lewat papan kendali tersebut, kamu bisa menyalakan lampu, menggeser kursi, atau mengganti warna gorden tanpa harus merobohkan tembok rumah.',
		example:
			'document.getElementById("judul").innerText = "Selamat Datang!";'
	},
	{
		term: 'Framework',
		slug: 'framework',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Kerangka kerja siap pakai berisikan sekumpulan aturan, alat, dan pustaka kode baku yang membantu programmer membangun aplikasi lebih cepat dan terstandarisasi.',
		analogy:
			'Rangka cetakan atau cetakan kue siap pakai. Kamu tidak perlu membuat loyang atau menakar logam dari nol, cukup masukkan adonan sesuai aturan yang disediakan.',
		example:
			'Laravel untuk PHP, SvelteKit untuk JavaScript, atau Django untuk Python.'
	},
	{
		term: 'Frontend',
		slug: 'frontend',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Bagian antarmuka dari sebuah website atau aplikasi yang dilihat, diklik, dan berinteraksi langsung dengan panca indra pengguna di layar monitor atau smartphone.',
		analogy:
			'Ruang pameran dan kasir di toko: dekorasi etalase, lampu toko yang hangat, daftar menu makanan yang menarik, dan kursi yang nyaman diduduki pembeli.',
		example:
			'Halaman beranda Baricode dengan tombol pendaftaran, formulir pencarian, dan animasi navigasi.'
	},
	{
		term: 'Function',
		slug: 'function',
		abbreviation: 'Fungsi / Method',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Blok instruksi kode mandiri yang dirancang khusus untuk menjalankan satu tugas tertentu, dapat menerima masukan (parameter/argumen), dan mengembalikan hasil olahan (return value).',
		analogy:
			'Mesin blender di dapur. Kamu masukkan potongan buah dan es batu (input/parameter), tekan tombol, blender berputar memproses, lalu menyajikan segelas jus segar (output).',
		example:
			'function hitungDiskon(harga, persen) { return harga * (persen / 100); }',
		relatedArticle: {
			title: 'Function Artinya dalam Bahasa Bayi',
			url: '/artikel/function-artinya-dalam-bahasa-bayi'
		}
	},
	{
		term: 'Git',
		slug: 'git',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Sistem pengontrol versi (Version Control System / VCS) terdistribusi untuk mencatat setiap riwayat revisi kode, berkolaborasi dengan programmer lain, dan mengembalikan file ke kondisi sebelumnya.',
		analogy:
			'Mesin waktu atau tombol "Undo / Save Point" di dalam game petualangan. Sebelum menghadapi bos tantangan baru, kamu menyimpan status permainan agar bila kalah bisa kembali ke titik aman tanpa mengulang dari awal.',
		example:
			'Mengetik git commit -m "Memperbaiki tampilan tombol login" di terminal terminal komputer.'
	},
	{
		term: 'GitHub',
		slug: 'github',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Platform layanan berbasis web dan cloud untuk menyimpan repositori Git, berkolaborasi antar developer di seluruh dunia, mereview kode, dan memamerkan portofolio karya perangkat lunak.',
		analogy:
			'Media sosial sekaligus brankas portofolio karya bagi para programmer. Tempat memamerkan proyek buatanmu kepada publik atau calon klien dan perekrut kerja.',
		example:
			'Membuka repositori kode terbuka Baricode di github.com/baricode-indonesia.'
	},
	{
		term: 'HTML',
		slug: 'html',
		abbreviation: 'HyperText Markup Language',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Bahasa markup standar universal yang digunakan untuk mendefinisikan kerangka, tulang punggung, dan struktur isi dari sebuah dokumen halaman web.',
		analogy:
			'Tiang beton, dinding batu bata, dan lantai dasar sebuah bangunan rumah sebelum dipasangi cat atau perabotan.',
		example:
			'Menuliskan <h1>Ini Judul Halaman</h1> dan <p>Ini paragraf penjelasan.</p>',
		relatedArticle: {
			title: 'Panduan Lengkap Memahami HTML dan CSS untuk Pemula',
			url: '/artikel/panduan-lengkap-memahami-html-dan-css-untuk-pemula'
		}
	},
	{
		term: 'IDE',
		slug: 'ide',
		abbreviation: 'Integrated Development Environment',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Aplikasi perangkat lunak terintegrasi yang menyediakan fasilitas lengkap bagi programmer untuk menulis kode, melihat rekomendasi otomatis, menjalankan kode, dan melacak bug.',
		analogy:
			'Meja bengkel profesional yang lengkap dengan penerangan, laci perkakas otomatis, kaca pembesar, dan peralatan multimeter dalam satu jangkauan tangan.',
		example:
			'Visual Studio Code (VS Code), Android Studio, atau PhpStorm.'
	},
	{
		term: 'Internet',
		slug: 'internet',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Sistem jaringan komunikasi komputer global yang saling terhubung menggunakan protokol standar internet (TCP/IP) untuk melayani miliaran pengguna di seluruh penjuru dunia.',
		analogy:
			'Jalan tol antarprovinsi dan jembatan antarpulau raksasa tanpa henti yang memungkinkan mobil-mobil pengantar surat (paket data) mengantarkan surat dari desa ke luar negeri dalam sekejap.',
		example:
			'Dua komputer yang berada di Jakarta dan Kairo dapat saling bertukar teks dalam waktu sepersekian detik.',
		relatedArticle: {
			title: 'Pengertian Internet dengan Bahasa Bayi',
			url: '/artikel/pengertian-internet-dengan-bahasa-bayi'
		}
	},
	{
		term: 'JavaScript',
		slug: 'javascript',
		abbreviation: 'JS',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Bahasa pemrograman paling populer di dunia yang digunakan untuk menambahkan logika dinamis, animasi interaktif, dan fungsionalitas kompleks di halaman web maupun server.',
		analogy:
			'Sistem kelistrikan dan motor penggerak rumah. Tanpa listrik, saklar lampu hanyalah pajangan dinding. Dengan listrik, saat tombol ditekan lampu langsung menyala.',
		example:
			'Menampilkan pop-up peringatan atau memuat data komentar baru tanpa perlu memuat ulang (reload) halaman website.'
	},
	{
		term: 'JSON',
		slug: 'json',
		abbreviation: 'JavaScript Object Notation',
		category: 'backend',
		categoryLabel: 'Backend & Server',
		definition:
			'Format pertukaran data berbasis teks ringan yang mudah dibaca dan ditulis oleh manusia serta sangat efisien untuk diurai (parsed) dan dihasilkan oleh mesin komputer.',
		analogy:
			'Kertas formulir pendaftaran resmi yang memiliki kolom nama dan isian data yang disepakati bersama oleh semua kantor cabang.',
		example:
			'{ "nama": "Ahmad", "kota": "Jombang", "status": "Santri Belajar Coding" }'
	},
	{
		term: 'Loop',
		slug: 'loop',
		abbreviation: 'Perulangan',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Instruksi pemrograman yang mengulangi eksekusi satu blok kode berkali-kali secara otomatis selama kondisi syarat tertentu masih bernilai benar (true).',
		analogy:
			'Fitur tombol "Repeat" pada pemutar musik favoritmu, yang akan terus memutar lagu yang sama sampai kamu menekan tombol stop atau baterai habis.',
		example:
			'Mencetak angka 1 sampai 100 ke layar tanpa perlu mengetik angka satu per satu secara manual.'
	},
	{
		term: 'NVM',
		slug: 'nvm',
		abbreviation: 'Node Version Manager',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Alat bantu command-line untuk memasang, mengelola, dan berpindah antar berbagai versi runtime Node.js di satu perangkat komputer dengan sangat mudah.',
		analogy:
			'Kacamata dengan beberapa lapis lensa berbeda yang bisa kamu pasang-copot seketika tergantung ukuran font buku yang sedang kamu baca.',
		example:
			'Mengetik perintah nvm use 20 untuk berganti ke Node.js versi 20 saat mengerjakan proyek baru.',
		relatedArticle: {
			title: 'Mengenal Arti NVM dan Fungsinya',
			url: '/artikel/nvm-artinya'
		}
	},
	{
		term: 'Open Source',
		slug: 'open-source',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Perangkat lunak yang kode sumbernya (source code) disediakan secara terbuka untuk umum sehingga siapa saja boleh mempelajari, memodifikasi, meningkatkan, dan membagikannya kembali.',
		analogy:
			'Resep rahasia kuliner lezat yang dibagikan secara ikhlas di media sosial agar ibu-ibu di seluruh pelosok desa bisa ikut memasak dan memodifikasinya.',
		example:
			'Sistem operasi Linux, framework Svelte, dan basis data PostgreSQL.'
	},
	{
		term: 'Repository',
		slug: 'repository',
		abbreviation: 'Repo',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Folder penyimpanan digital tempat seluruh berkas kode proyek disimpan, lengkap dengan seluruh catatan riwayat perubahan (history) dari awal hingga versi terbaru.',
		analogy:
			'Brankas map proyek lengkap berstempel tanggal. Di dalamnya tersimpan draft lembaran pertama rancangan hingga buku final yang sudah dicetak rapi.',
		example:
			'Folder proyek di komputer yang sudah diinisiasi dengan perintah git init.'
	},
	{
		term: 'Responsive',
		slug: 'responsive',
		category: 'frontend',
		categoryLabel: 'Web & Frontend',
		definition:
			'Teknik perancangan web di mana tata letak antarmuka otomatis menyesuaikan ukuran, orientasi, dan proporsi layar perangkat pengguna (dari HP kecil, tablet, hingga monitor lebar).',
		analogy:
			'Air putih di dalam wadah: bila dituangkan ke cangkir kecil ia berbentuk cangkir, bila dipindah ke mangkuk ia menyesuaikan bentuk mangkuk tanpa tumpah keluar.',
		example:
			'Menu navigasi yang tadinya berderet ke samping di laptop otomatis berubah menjadi tombol burger ☰ saat dibuka di layar HP.'
	},
	{
		term: 'Server',
		slug: 'server',
		category: 'backend',
		categoryLabel: 'Backend & Server',
		definition:
			'Komputer berdaya tahan tinggi yang terhubung ke jaringan tanpa henti dan bertugas menyediakan data, layanan, atau sumber daya kepada komputer pengguna (client) yang memintanya.',
		analogy:
			'Toko kelontong 24 jam dengan petugas yang selalu terjaga di kasir dan siap melayani setiap kali ada pelanggan yang datang mengetuk pintu.',
		example:
			'Server web Nginx atau Apache yang mengirimkan file HTML ke browser saat kamu mengetikkan alamat www.baricode.org.'
	},
	{
		term: 'SQL',
		slug: 'sql',
		abbreviation: 'Structured Query Language',
		category: 'database',
		categoryLabel: 'Database & Data',
		definition:
			'Bahasa terstandarisasi yang dirancang khusus untuk mengelola, mengambil, menyaring, memperbarui, dan memanipulasi relasi data di dalam basis data (database).',
		analogy:
			'Pustakawan ahli yang hafal letak seluruh buku di perpustakaan besar. Saat kamu bertanya: "Tolong carikan buku terbitan tahun 2024 yang ditulis penulis bernama Ahmad", pustakawan langsung membawakan bukunya.',
		example:
			'SELECT * FROM santri WHERE nilai > 80;'
	},
	{
		term: 'Syntax',
		slug: 'syntax',
		abbreviation: 'Sintaks',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Aturan penulisan tata bahasa resmi, tanda baca, dan susunan kata yang wajib dipatuhi agar perintah dalam bahasa pemrograman dapat dipahami dan dijalankan oleh komputer.',
		analogy:
			'Aturan ejaan tata bahasa Indonesia (PUEBI). Jika ada huruf atau tanda baca yang salah letak, maknanya bisa kacau atau tidak dimengerti oleh pembaca.',
		example:
			'Lupa menutup kurung kurawal } atau tanda kutip " akan memicu SyntaxError saat kode dijalankan.'
	},
	{
		term: 'Tutorial Hell',
		slug: 'tutorial-hell',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Kondisi mental di mana seorang pembelajar merasa paham saat menonton video tutorial, tetapi langsung merasa bingung, macet, dan tak tahu harus mengetik apa ketika mencoba ngoding sendiri dari layar kosong.',
		analogy:
			'Merasa sudah jago berenang karena setiap hari menonton video atlet renang di YouTube, tetapi begitu terjun sendiri ke dalam kolam air langsung panik dan gelagapan.',
		example:
			'Sudah menyelesaikan puluhan playlist video web development tapi belum pernah membuat satu pun website portofolio mandiri.'
	},
	{
		term: 'Variabel',
		slug: 'variabel',
		category: 'dasar',
		categoryLabel: 'Dasar Pemrograman',
		definition:
			'Nama penampung atau wadah di dalam memori komputer yang digunakan untuk menyimpan suatu nilai atau data yang nilainya dapat dibaca atau diubah selama program berjalan.',
		analogy:
			'Kotak kardus berlabel nama spidol, misalnya label "Skor Permainan". Isinya bisa kamu masukkan angka 0, lalu saat pemain mendapat poin, angkanya kamu ganti menjadi 10.',
		example:
			'let namaSiswa = "Budi"; namaSiswa = "Santoso";'
	},
	{
		term: 'Vibe Coding',
		slug: 'vibe-coding',
		category: 'tools',
		categoryLabel: 'Tools & Git',
		definition:
			'Gaya pemrograman modern di mana pengembang menulis kode secara lebih santai dan produktif dengan memandu asisten AI (seperti Claude atau ChatGPT) menggunakan instruksi bahasa manusia terarah.',
		analogy:
			'Menjadi seorang sutradara film yang menjelaskan jalan cerita, karakter, dan emosi adegan kepada juru kamera dan kru ahli yang bertugas mengeksekusi rekamannya secara teknis.',
		example:
			'Meminta AI: "Buatkan komponen kartu testimonial responsif dengan tema gelap menggunakan Tailwind CSS."',
		relatedArticle: {
			title: 'Vibe Coding untuk Pemula: Cara Ngoding Santai Berbantuan AI',
			url: '/artikel/vibe-coding-pemula'
		}
	}
];
