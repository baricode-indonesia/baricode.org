---
title: "Function Artinya Apa? Penjelasan Konsep Function dalam Koding (Versi Bahasa Bayi)"
excerpt: "Bingung apa itu function dalam koding? Pelajari pengertian function (fungsi), parameter, dan return value dengan analogi super sederhana bahasa bayi) yang mudah dipahami!"
category: "pemrograman-dasar"
tags: ["pemula", "javascript", "python", "tips-belajar"]
author: "Baricode Team"
published_at: "2026-09-13"
---

Saat pertama kali belajar koding—baik itu bahasa JavaScript, Python, PHP, atau Java—kata **`function`** (atau *fungsi*) adalah salah satu istilah yang paling sering kamu temui.

Bagi pemula, melihat tulisan seperti `function hitungTotal(a, b) { return a + b; }` sering kali terasa membingungkan. Apalagi jika buku teks menjelaskannya dengan istilah tebal seperti *"Subprogram yang mengenkapsulasi blok kode untuk mengeksekusi tugas spesifik secara modular."* 😵‍💫

Tenang! Di artikel ini, kita akan membongkar **arti function dalam koding dengan "bahasa bayi"** (versi *Explain Like I'm 5* / ELI5)—menggunakan analogi benda nyata yang biasa kamu temui sehari-hari.

---

## 1. Apa Itu Function dalam "Bahasa Bayi"?

Mari kita bayangkan *function* menggunakan 2 analogi yang sangat simpel:

### Analogi 1: Mesin Pembuat Jus Ajaib 🍹

Bayangkan kamu punya **Mesin Blender Ajaib** di dapur.

- Jika kamu ingin minum jus mangga, kamu tidak perlu merakit mesin dari nol atau memotong buah satu per satu dengan tangan. 
- Kamu hanya perlu **memasukkan buah mangga** ke dalam blender, lalu **memencet tombol `buatJus()`**.
- Blender akan bekerja secara otomatis di dalam, lalu **mengeluarkan secangkir jus mangga segar**.

Dalam koding:
- **Mesin Blender** itu adalah **`function`**.
- **Buah Mangga** yang kamu masukkan adalah **`Parameter` / `Input`**.
- **Secangkir Jus** yang keluar adalah **`Return Value` / `Output`**.

---

### Analogi 2: Tombol Remote TV / Robot Asisten 🤖

Bayangkan kamu punya robot asisten pribadi bernama **Bobi**. 

Kamu mengajari Bobi satu jurus khusus: *"Bobi, kalau saya bilang `sapuLantai()`, kamu harus mengambil sapu, menyapu dari pojok kiri ke kanan, lalu membuang sampahnya ke tong sampah."*

Setelah Bobi paham jurus tersebut, setiap kali rumah kotor kamu tidak perlu menjelaskan panjang lebar lagi. Kamu cukup berteriak:  
👉 *"Bobi, `sapuLantai()`!"*

Bobi akan langsung menjalankan semua perintah itu secara otomatis! **`sapuLantai()` itulah yang disebut dengan `function`.**

---

## 2. Tiga Elemen Penting Function (Versi Bahasa Bayi)

Setiap *function* dalam koding umumnya terdiri dari 3 bagian utama:

```text
[ Parameter / Input ] ──> ( Mesin Function ) ──> [ Return Value / Output ]
   (Buah & Es Batu)        (Proses Pembuatan)          (Secangkir Jus)
```

### 1. Nama Function (Tombol Jurus)
Nama panggilan untuk menjalankan perintah tersebut.  
*Contoh*: `buatJus`, `hitungDiskon`, `kirimPesan`.

### 2. Parameter / Argument (Bahan-Bahan yang Dimasukkan)
Bahan atau data yang kamu titipkan ke dalam *function* agar bisa diproses.  
*Contoh*: Jika nama fungsinya `buatJus(buah)`, bahan yang kamu masukkan bisa `"mangga"`, `"alpukat"`, atau `"melon"`.

### 3. Return Value (Hasil yang Dikembalikan)
Hasil akhir atau barang yang diberikan oleh *function* setelah selesai bekerja.  
*Contoh*: Setelah fungsi `hitungDiskon(100000)` selesai menghitung, ia mengembalikan angka `20000`.

---

## 3. Kenapa Koding Harus Pakai Function?

Mengapa para *developer* sangat suka membuat *function*? Ini 3 alasan utamanya:

1. **Biar Gak Capek Ketik Ulang (*Reusability*)**  
   Bayangkan kalau kamu harus menulis 50 baris kode yang sama setiap kali ingin menghitung diskon belanjaan. Dengan *function*, kamu tulis 50 baris itu **sekali saja**, lalu cukup panggil namanya berulang kali kapan pun dibutuhkan!

2. **Kode Jadi Rapi & Teratur (*Clean Code*)**  
   Seperti kotak mainan yang dikelompokkan (kotak mobil-mobilan, kotak lego), *function* membuat kodinganmu terbagi rapi berdasarkan tugasnya masing-masing.

3. **Gampang Diperbaiki (*Easy Maintenance*)**  
   Jika resep jusmu kurang manis, kamu hanya perlu mengubah resep di dalam mesin *function* jus tersebut satu kali. Kamu tidak perlu membongkar seluruh isi dapur!

---

## 4. Melihat Contoh Kode Nyata (Jangan Takut, Ini Mudah!)

Mari kita lihat contoh *function* dalam bahasa pemrograman **JavaScript**:

```javascript
// 1. Kita buat mesin function-nya dulu
function buatJus(buah) {
    return "Secangkir Jus " + buah + " yang lezat! 🍹";
}

// 2. Sekarang kita panggil mesinnya!
let pesanan1 = buatJus("Mangga");
console.log(pesanan1); // Hasil: Secangkir Jus Mangga yang lezat! 🍹

let pesanan2 = buatJus("Alpukat");
console.log(pesanan2); // Hasil: Secangkir Jus Alpukat yang lezat! 🍹
```

**Penjelasan Bahasa Bayinya:**
- Pada baris 2: Kita menciptakan tombol bernama `buatJus`. Tombol ini minta bahan bernama `buah`.
- Pada baris 3: Resep di dalamnya bilang *"Kembalikan tulisan 'Secangkir Jus [buah] yang lezat!'"*.
- Pada baris 7 & 10: Kita tinggal memanggil `buatJus("Mangga")` dan `buatJus("Alpukat")` tanpa perlu membuat ulang resepnya dari nol!

---

## Kesimpulan

**Function artinya** sebuah wadah atau resep otomatis yang menyimpan kumpulan instruksi koding. Kita memberinya nama agar bisa dipanggil kapan saja saat kita membutuhkan bantuan untuk menyelesaikan tugas tertentu.

Ingat analoginya:
- **Function** = Mesin Blender / Jurus Robot
- **Parameter** = Buah / Bahan Masukan
- **Return Value** = Jus Segar / Hasil Akhir

Sekarang, setiap kali kamu melihat kata `function` saat belajar koding, jangan bingung lagi ya! Anggap saja kamu sedang menyiapkan tombol robot ajaib yang siap membantumu. 💡
