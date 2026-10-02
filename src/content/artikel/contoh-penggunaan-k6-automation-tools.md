---
title: 'Contoh Penggunaan k6 Automation Tools: Panduan Performance & Load Testing Modern'
excerpt: 'Pelajari contoh penggunaan k6 automation tools untuk load testing dan performance testing API. Mulai dari skrip dasar, konfigurasi VUs, thresholds SLA, hingga integrasi CI/CD.'
category: 'web-development'
tags: ['k6', 'automation', 'testing', 'javascript', 'pemula']
author: 'Baricode Team'
published_at: '2026-09-06'
---

Dalam dunia pengujian dan pengembangan perangkat lunak modern (_software engineering_), memastikan aplikasi mampu menangani ribuan hingga jutaan pengguna secara bersamaan adalah hal yang krusial. Sebuah aplikasi web mungkin berjalan lancar ketika diuji oleh satu pengembang (_developer_), namun apa yang terjadi jika 1.000 pengguna mengaksesnya secara simultan?

Di sinilah **k6** hadir sebagai solusi _load testing_ dan _performance automation tool_ yang sangat populer di kalangan pengembang dan tim _Quality Assurance_ (QA).

Di artikel ini, kita akan membahas secara mendalam **apa itu k6**, fitur utamanya, **contoh penggunaan k6 automation tools** dengan berbagai skenario (dari pengujian API sederhana hingga integrasi otomatis di CI/CD), serta _best practices_ dalam menggunakannya. 🚀

---

## Apa Itu k6 Automation Tool?

**Grafana k6** (sebelumnya dikenal sebagai LoadImpact k6) adalah alat _open-source load testing_ berkinerja tinggi yang ditulis menggunakan bahasa **Go**, tetapi skrip pengujiannya ditulis menggunakan **JavaScript (ES6)**.

k6 dirancang khusus untuk memenuhi kebutuhan developer dan tim _DevOps_ modern (_developer-centric performance testing_). Tidak seperti alat _load testing_ tradisional GUI seperti Apache JMeter yang menggunakan XML kompleks, k6 memungkinkan kamu menulis skrip pengujian berbasis kode (_code-as-test_) yang fleksibel dan mudah disimpan di dalam repositori Git.

### Keunggulan Utama k6

1. **Ringan & Bebas Overhead**: Mesin k6 ditulis dalam bahasa Go yang sangat efisien dalam penggunaan memori dan CPU saat mensimulasikan ribuan pengguna virtual (_Virtual Users_).
2. **Scripting dengan JavaScript**: Pengembang tidak perlu mempelajari bahasa khusus. Kamu cukup menggunakan sintaksis JavaScript modern.
3. **Thresholds & Assertions (SLA)**: Kamu bisa menentukan kriteria lulus/gagal (_pass/fail_) berdasarkan _Service Level Agreement_ (SLA) performa sistem.
4. **DevOps & CI/CD Native**: Mudah diintegrasikan ke dalam _pipeline_ otomatisasi seperti GitHub Actions, GitLab CI, Jenkins, atau Azure DevOps.
5. **Dukungan Protokol Luas**: Mendukung HTTP/1.1, HTTP/2, WebSockets, gRPC, dan Redis.

---

## Konsep Penting dalam k6

Sebelum masuk ke contoh skrip kode, ada beberapa istilah penting dalam k6 yang perlu kamu pahami:

- **Virtual Users (VUs)**: Pengguna virtual yang mensimulasikan sesi pengguna nyata yang menjalankan skrip secara bersamaan.
- **Iterations**: Berapa kali skrip pengujian dieksekusi oleh VUs.
- **Thresholds**: Aturan atau ambang batas performa (misalnya: _95% request harus direspon di bawah 200ms_). Jika ambang batas tidak terpenuhi, pengujian dianggap gagal (_fail status exit code_).
- **Checks**: Pengujian kondisi seperti status respons HTTP (`200 OK`) atau isi dari _body response_ (mirip seperti `assert` dalam unit test).

```text
  [ Terminal / CI CD Pipeline ]
               |
               v
     +-------------------+
     |   Grafana k6 CLI  |
     +-------------------+
        /        |        \
  ( VU 1 )    ( VU 2 )    ( VU 3 ... N )
     |           |           |
     +-----------+-----------+
                 |
         ( HTTP Requests )
                 v
   +---------------------------+
   |   Target Server / API     |
   +---------------------------+
```

---

## Cara Instalasi k6

k6 dapat diinstal dengan sangat mudah di berbagai sistem operasi:

### 1. Linux (Ubuntu / Debian)

```bash
sudo gpg -k
sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69
echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list
sudo apt-get update
sudo apt-get install k6
```

### 2. macOS (via Homebrew)

```bash
brew install k6
```

### 3. Windows (via Winget atau Chocolatey)

```powershell
winget install k6 --source winget
# Atau via Chocolatey:
choco install k6
```

### 4. Docker

```bash
docker run --rm -i grafana/k6 run - <script.js
```

---

## Contoh 1: Pengujian HTTP Request Sederhana (Basic Test)

Mari buat skrip pengujian pertama bernama `basic-test.js`. Skrip ini akan melakukan _GET request_ ke API publik k6 (`https://test-api.k6.io/public/crocodiles/`) dan mengecek apakah status responsnya adalah `200 OK`.

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

// Konfigurasi opsi pengujian
export const options = {
	vus: 10, // 10 Virtual Users
	duration: '10s' // Berjalan selama 10 detik
};

export default function () {
	// Mengirim HTTP GET request
	const response = http.get('https://test-api.k6.io/public/crocodiles/');

	// Memeriksa (check) apakah status HTTP bernilai 200
	check(response, {
		'status HTTP adalah 200': (r) => r.status === 200,
		'waktu respon < 500ms': (r) => r.timings.duration < 500
	});

	// Memberi jeda (think time) 1 detik antar pengulangan
	sleep(1);
}
```

### Cara Menjalankan:

Jalankan perintah berikut di terminal kamu:

```bash
k6 run basic-test.js
```

### Penjelasan Output k6:

Setelah eksekusi selesai, k6 akan menampilkan metrik lengkap seperti:

- `http_req_duration`: Total waktu respons HTTP (_avg, min, med, max, p90, p95_).
- `http_req_failed`: Persentase _request_ yang gagal.
- `checks`: Persentase validasi _check_ yang berhasil (misal: `100.00%`).
- `iterations`: Jumlah total eksekusi fungsi `default`.

---

## Contoh 2: Load Testing Bertahap (Ramping VUs) & Thresholds SLA

Dalam pengujian beban nyata, traffic pengguna tidak datang secara instan. Kita perlu melakukan _ramp-up_ (meningkatkan trafik secara bertahap), menjaga beban puncak (_steady state_), lalu _ramp-down_ (menurunkan trafik).

Selain itu, kita tambahkan **Thresholds** agar k6 secara otomatis memberikan error code jika respon server terlalu lambat.

Buat file `load-test-stages.js`:

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
	// Skenario bertahap (Stages)
	stages: [
		{ duration: '30s', target: 20 }, // Naikkkan dari 0 ke 20 VUs dalam 30 detik
		{ duration: '1m', target: 20 }, // Pertahankan 20 VUs selama 1 menit
		{ duration: '20s', target: 0 } // Turunkan beban ke 0 VUs dalam 20 detik
	],

	// Menentukan kriteria SLA (Ambang Batas)
	thresholds: {
		// 95% dari total request harus selesai di bawah 400ms
		http_req_duration: ['p(95)<400'],

		// Tingkat kegagalan request harus kurang dari 1%
		http_req_failed: ['rate<0.01'],

		// Tingkat keberhasilan check harus di atas 99%
		checks: ['rate>0.99']
	}
};

export default function () {
	const res = http.get('https://test-api.k6.io/public/crocodiles/1/');

	check(res, {
		'status is 200': (r) => r.status === 200,
		'has crocodile id 1': (r) => r.json().id === 1
	});

	sleep(1);
}
```

Jalankan skrip:

```bash
k6 run load-test-stages.js
```

Jika server gagal memenuhi `thresholds` (misal 95% request lebih lambat dari 400ms), k6 akan menandai metrik tersebut dengan warna merah dan menghasilkan _exit status 99_, yang akan membatalkan _build pipeline_ jika dijalankan secara otomatis.

---

## Contoh 3: Automated POST Request dengan Header JSON & Authenticated Payload

Pengujian otomasi sering kali membutuhkan simulasi pengiriman data (POST / PUT) dan autentikasi token JWT.

Berikut contoh skrip `api-post-test.js` untuk melakukan autentikasi login dan mengirim data payload:

```javascript
import http from 'k6/http';
import { check, group, sleep } from 'k6';

export const options = {
	vus: 5,
	duration: '15s'
};

const BASE_URL = 'https://test-api.k6.io';

export default function () {
	// Menggunakan 'group' untuk mengelompokkan langkah-langkah pengujian
	group('1. User Login & Token Retrieval', function () {
		const loginPayload = JSON.stringify({
			username: 'test_user',
			password: 'test_password'
		});

		const params = {
			headers: {
				'Content-Type': 'application/json'
			}
		};

		const loginRes = http.post(`${BASE_URL}/auth/token/login/`, loginPayload, params);

		check(loginRes, {
			'login status 200 or 400 (handled)': (r) => r.status === 200 || r.status === 400
		});
	});

	group('2. Fetch Public Data', function () {
		const listRes = http.get(`${BASE_URL}/public/crocodiles/`);

		check(listRes, {
			'get list success': (r) => r.status === 200,
			'response format array': (r) => Array.isArray(r.json())
		});
	});

	sleep(1);
}
```

---

## Integrasi k6 Otomatis dalam CI/CD (GitHub Actions)

Salah satu kekuatan utama k6 adalah kemudahannya diintegrasikan ke dalam otomatisasi _Continuous Integration_ (CI/CD). Kita dapat menjalankan _performance regression test_ setiap kali ada _Pull Request_ baru!

Berikut contoh file konfigurasi GitHub Actions (`.github/workflows/k6-performance.yml`):

```yaml
name: k6 Automated Performance Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  k6_test:
    name: Run k6 Load Test
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run k6 Local Test
        uses: grafana/k6-action@v0.3.1
        with:
          filename: load-test-stages.js
          flags: --statsd-enable
```

Dengan alur ini, jika pengembang membuat perubahan kode yang menyebabkan _latency_ API melonjak melebihi `thresholds`, GitHub Actions akan otomatis menggagalkan _pull request_ tersebut sebelum masuk ke _production_!

---

## Perbandingan: k6 vs JMeter vs Postman

| Fitur / Parameter                   | Grafana k6                  | Apache JMeter                    | Postman Runner                   |
| :---------------------------------- | :-------------------------- | :------------------------------- | :------------------------------- |
| **Pendekatan Pengujian**            | Code-as-Test (JavaScript)   | GUI / Drag-and-Drop (XML)        | GUI Collection Runner            |
| **Konsumsi Memori / CPU**           | Sangat Rendah (Go Engine)   | Tinggi (Java GUI Overhead)       | Sedang                           |
| **Dukungan CI/CD**                  | Sangat Mudah & Native CLI   | Membutuhkan Plugin / CLI Non-GUI | Menggunakan Newman CLI           |
| **Simulasi VUs Tinggi**             | Sangat Efisien (Ribuan VUs) | Membutuhkan Distributed Nodes    | Kurang Cocok untuk High Load     |
| **Kemudahan Version Control (Git)** | Sangat Mudah (`.js` biasa)  | Sulit (`.jmx` XML raksasa)       | Cukup Mudah (`.json` collection) |

---

## Best Practices Menggunakan k6 Automation

1. **Gunakan `sleep()` secara bijak**: Tambahkan jeda waktu (_think time_) antar pengulangan untuk mensimulasikan perilaku manusia secara realistis.
2. **Jangan Lakukan Load Testing dari Jaringan Lokal Terbatas**: Pastikan pengujian skala besar dilakukan dari server cloud atau lingkungan yang mendekati produksi.
3. **Selalu Tentukan `thresholds`**: Tanpa thresholds, pengujian kamu hanya mengumpulkan angka tanpa ada status kelulusan otomatis (_automated pass/fail gate_).
4. **Gunakan Parameter Lingkungan (`__ENV`)**: Jangan lakukan _hardcode_ URL server atau kredensial. Gunakan variabel lingkungan seperti `__ENV.MY_URL`.

---

## Kesimpulan

**k6 adalah** _automation tool_ modern yang sangat tangguh untuk _load testing_ dan _performance automation_. Dengan berbasis JavaScript dan arsitektur Go yang efisien, k6 menjembatani kebutuhan developer, QA engineer, dan DevOps untuk menjaga kualitas performa aplikasi secara berkelanjutan.

Memahami cara menggunakan k6 akan meningkatkan standar kualitas software yang kamu kembangkan dan menjadi nilai tambah penting dalam karier rekayasa perangkat lunak modern.

Ingin mempelajari lebih banyak mengenai pengujian software, otomatisasi, dan dunia koding dari dasar? Simak artikel edukasi dan panduan menarik lainnya di **Baricode Indonesia**! 💡
