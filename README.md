# Baricode Indonesia (baricode.org)

Website resmi [Baricode Indonesia](https://baricode.org) — platform komunitas, bimbingan, kursus, dan akademi online IT yang membumi bagi siapa saja, termasuk yang memulai dari kondisi paling terbatas sekalipun.

---

## 🌟 Tentang Proyek

Proyek ini dibangun menggunakan **SvelteKit 2** dengan **Svelte 5** (Runes mode) dan **Tailwind CSS v4**. Website ini berfungsi sebagai media informasi utama, pusat artikel edukasi pemrograman, glosarium IT, pengumuman program, serta gerbang komunitas Baricode Indonesia.

### Fitur Utama

- 📚 **Artikel & Blog Terintegrasi**: Sistem publikasi artikel berbasis Markdown (`src/content/artikel/`) dengan dukungan frontmatter metadata (kategori, tag, tanggal rilis, dan ringkasan).
- 🤝 **Informasi Program Belajar**:
  - **Bimbingan**: Pendampingan belajar koding gratis berbasis akuntabilitas komunitas.
  - **Kursus**: Materi belajar mandiri terstruktur (gratis & berbayar).
  - **Akademi**: Live class intensif online bersama instruktur.
- 📖 **Glosarium Istilah IT & FAQ**: Kamus konsep pemrograman ramah pemula dan panduan tanya jawab seputar program.
- 🌓 **Desain Responsif & Dark Mode**: Tampilan adaptif untuk smartphone, tablet, maupun desktop dengan dukungan tema terang dan gelap.
- ⚡ **SEO & Performa Optimal**: Dukungan dynamic sitemap (`/sitemap.xml`), Open Graph metadata, dan adapter siap-pakai untuk deployment di Vercel.

---

## 🛠️ Tech Stack

- **Framework**: [SvelteKit](https://svelte.dev/) (v2) & [Svelte](https://svelte.dev/) (v5 dengan Runes)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) dengan plugin `@tailwindcss/typography` & `@tailwindcss/forms`
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vite.dev/)
- **Package Manager / Runtime**: [Bun](https://bun.sh/)
- **Markdown Engine**: [marked](https://marked.js.org/)
- **Deployment Adapter**: `@sveltejs/adapter-vercel`
- **Linting & Formatting**: ESLint, Prettier (dengan plugin Prettier untuk Svelte & Tailwind CSS)

---

## 📁 Struktur Direktori

```text
baricode.org/
├── src/
│   ├── app.d.ts                 # Type definitions global
│   ├── app.html                 # HTML template root
│   ├── content/
│   │   └── artikel/             # Konten artikel dalam format Markdown (.md)
│   ├── lib/
│   │   ├── assets/              # Aset statis internal (favicon, ikon)
│   │   ├── components/          # Komponen Svelte (Navbar, Footer, PostCard, dll.)
│   │   └── data/
│   │       └── site.ts          # Konfigurasi situs, parsing markdown, kategori, & tag
│   └── routes/                  # Halaman & endpoints SvelteKit
│       ├── +layout.svelte       # Shell aplikasi utama (Header, Footer, Theme toggle)
│       ├── +page.svelte         # Beranda
│       ├── artikel/             # Halaman daftar artikel & detail ([slug])
│       ├── kursus/              # Halaman kursus & akademi
│       ├── tentang/             # Halaman tentang Baricode Indonesia
│       ├── glosarium/           # Kamus istilah IT
│       ├── faq/                 # Halaman FAQ
│       └── sitemap.xml/         # Dynamic sitemap generator
├── static/                      # File statis publik (gambar, robots.txt, dll.)
├── package.json
├── svelte.config.js / vite.config.ts
└── tailwind / eslint / prettier config
```

---

## 🚀 Memulai Pengembangan

### Prasyarat

Pastikan kamu telah menginstal [Bun](https://bun.sh/) (disarankan) atau Node.js (v18+).

### 1. Klon Repositori

```bash
git clone https://github.com/baricode-indonesia/baricode.org.git
cd baricode.org
```

### 2. Instal Dependensi

```bash
bun install
```

_(atau `npm install` jika menggunakan npm)_

### 3. Jalankan Server Pengembangan

```bash
bun run dev
```

Buka [http://localhost:5173](http://localhost:5173) di browsermu. Server akan otomatis melakukan hot-reload setiap ada perubahan kode.

---

## 📝 Pengelolaan Konten Artikel

Artikel disimpan dalam direktori `src/content/artikel/` sebagai file Markdown (`.md`). Setiap artikel wajib menyertakan YAML Frontmatter di bagian paling atas:

```markdown
---
title: 'Judul Artikel Anda'
slug: 'judul-artikel-anda'
excerpt: 'Ringkasan singkat isi artikel untuk pratinjau kartu dan SEO.'
category: 'pemrograman-dasar'
tags: ['pemula', 'tips-belajar']
author: 'Baricode Team'
published_at: '2026-09-21'
---

Tulis isi konten artikel di sini menggunakan Markdown...
```

Daftar kategori dan tag yang tersedia dapat dilihat dan dikelola melalui [`src/lib/data/site.ts`](src/lib/data/site.ts).

---

## 📜 Skrip yang Tersedia

| Perintah          | Deskripsi                                                         |
| :---------------- | :---------------------------------------------------------------- |
| `bun run dev`     | Menjalankan development server lokal                              |
| `bun run build`   | Melakukan build aplikasi untuk produksi                           |
| `bun run preview` | Menjalankan preview lokal dari hasil build                        |
| `bun run check`   | Menjalankan sinkronisasi SvelteKit dan verifikasi type TypeScript |
| `bun run lint`    | Memeriksa format kode (Prettier) dan linting (ESLint)             |
| `bun run format`  | Memformat kode secara otomatis sesuai standar proyek              |

---

## 🌐 Komunitas & Tautan Resmi

- 🌐 **Situs Web**: [baricode.org](https://baricode.org)
- 💬 **Grup Komunitas WhatsApp**: [Gabung Baricode di WhatsApp](https://chat.whatsapp.com/CQj0TKasRia7c2vw6MHgjs)
- 📺 **YouTube**: [@baricode_org](https://www.youtube.com/@baricode_org)
- ✉️ **Email Kontak**: [halo@baricode.org](mailto:halo@baricode.org)

---

## 📄 Lisensi

Hak Cipta &copy; 2026 [Baricode Indonesia](https://baricode.org). Seluruh hak cipta dilindungi undang-undang.
