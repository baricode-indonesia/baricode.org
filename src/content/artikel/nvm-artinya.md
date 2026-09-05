---
title: "NVM Artinya Apa? Ini Penjelasan Lengkap untuk Pemula"
excerpt: "NVM artinya Node Version Manager, tool untuk mengelola banyak versi Node.js di satu komputer. Simak penjelasan lengkap, fungsi, dan cara pakainya."
category: "pemrograman-dasar"
tags: ["pemula", "javascript", "nodejs", "nvm"]
author: "Baricode Team"
published_at: "2026-08-03"
---

Kalau kamu baru belajar JavaScript atau Node.js, kemungkinan besar kamu pernah menemukan istilah **NVM** di tutorial, dokumentasi, atau saat instalasi project. Lalu, **nvm artinya apa** sebenarnya? Yuk, kita bahas tuntas di artikel ini. 🚀

---

## Apa Itu NVM?

**NVM** adalah singkatan dari **Node Version Manager**. Sesuai namanya, NVM merupakan sebuah tool (*command-line*) yang berfungsi untuk **mengelola berbagai versi Node.js** dalam satu komputer secara bersamaan.

Jadi, NVM bukanlah bahasa pemrograman atau framework, melainkan sebuah *utility* (alat bantu) yang memudahkan developer untuk berpindah-pindah versi Node.js tanpa harus menginstal ulang atau menghapus (*uninstall*) versi sebelumnya.

---

## Kenapa NVM Dibutuhkan?

Dalam dunia pengembangan JavaScript / Node.js, setiap project bisa saja membutuhkan versi Node.js yang berbeda-beda. Sebagai contoh:

- **Project A**: Dibuat menggunakan Node.js versi 18 (LTS lama).
- **Project B**: Menggunakan Node.js versi 20 (LTS terbaru).
- **Project C**: Sedang menguji fitur eksperimental di Node.js versi 22.

Tanpa NVM, kamu harus menginstal ulang Node.js setiap kali berpindah project — sangat merepotkan dan berisiko merusak konfigurasi *environment* yang sudah berjalan. Dengan NVM, kamu cukup menjalankan satu baris perintah terminal untuk berpindah versi sesuai kebutuhan project.

---

## Fungsi Utama NVM

Berikut beberapa fungsi utama NVM yang membuatnya sangat penting bagi developer:

1. **Instalasi Banyak Versi Node.js**: Menginstal beberapa versi Node.js di satu sistem operasi tanpa ada bentrok.
2. **Perpindahan Versi yang Cepat**: Berpindah dari satu versi ke versi lain secara instan lewat terminal.
3. **Menetapkan Versi Default**: Menentukan versi Node.js default yang otomatis dipakai saat membuka terminal baru.
4. **Konfigurasi Versi per Project**: Mendukung file `.nvmrc` di dalam folder project agar versi Node.js menyesuaikan secara otomatis.
5. **Kemudahan Uninstall**: Menghapus versi Node.js yang sudah tidak digunakan dengan mudah.

---

## Cara Install NVM

Instalasi NVM berbeda tergantung sistem operasi yang kamu gunakan:

### Di Linux / macOS
Jalankan perintah berikut di terminal:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Setelah proses instalasi selesai, muat ulang konfigurasi terminal dengan menjalankan:

```bash
source ~/.bashrc
# atau jika menggunakan Zsh:
source ~/.zshrc
```

### Di Windows
Untuk pengguna Windows, disarankan menggunakan **nvm-windows** (dikembangkan oleh Corey Butler). Proyek ini dirancang khusus untuk sistem operasi Windows karena skrip NVM asli berbasis shell script POSIX.

---

## Perintah Dasar Menggunakan NVM

Setelah NVM berhasil terinstal, berikut beberapa perintah dasar yang sering digunakan sehari-hari:

- **Mengecek versi NVM yang terinstal:**
  ```bash
  nvm --version
  ```

- **Melihat daftar versi Node.js yang tersedia untuk diinstal:**
  ```bash
  nvm list-remote
  ```

- **Menginstal versi Node.js tertentu (misal versi 20):**
  ```bash
  nvm install 20
  ```

- **Menggunakan versi Node.js yang sudah terinstal:**
  ```bash
  nvm use 20
  ```

- **Melihat versi Node.js yang sedang aktif:**
  ```bash
  nvm current
  ```

- **Melihat semua versi Node.js yang terinstal di komputer:**
  ```bash
  nvm list
  ```

---

## Tabel Perbandingan: NVM vs Install Node.js Langsung

| Aspek | Install Langsung | Pakai NVM |
| :--- | :--- | :--- |
| **Jumlah versi Node.js** | Hanya satu versi | Banyak versi sekaligus |
| **Berpindah versi** | Harus uninstall & install ulang | Cukup satu baris perintah (`nvm use`) |
| **Fleksibilitas multi-project** | ❌ Kurang fleksibel | ✅ Sangat fleksibel |
| **Setup awal** | Sangat simpel | Perlu instalasi NVM di awal |

---

## Kesimpulan

Jadi, **NVM artinya Node Version Manager** — sebuah tool yang sangat penting bagi pembelajar maupun praktisi JavaScript/Node.js untuk mengelola dan memindahkan versi Node.js dengan cepat dan rapi.

Bagi pemula yang sedang mulai belajar koding, membiasakan diri menggunakan NVM sejak awal akan sangat mempermudah workflow kamu di masa mendatang. Selamat mencoba! 💡
