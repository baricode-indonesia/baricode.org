---
title: "Mengenal Perbedaan Statement dan Expression dalam Pemrograman"
excerpt: "Secara umum, program komputer dapat dipahami sebagai kumpulan instruksi yang disusun untuk menyelesaikan tugas tertentu. Instruksi-instruksi tersebut dibentuk melalui kombinasi statement dan expression. Artikel ini akan mengupas perbedaan keduanya secara sistematis, lengkap dengan contoh penerapan pada beberapa bahasa pemrograman."
category: "pemrograman-dasar"
tags: ["pemula", "javascript", "python", "php", "tips-belajar"]
author: "Baricode Team"
published_at: "2026-08-03"
---

Bagi siapa pun yang baru memulai perjalanan belajar koding, ada dua istilah dasar yang sering membingungkan pada tahap awal, yaitu **statement** dan **expression** (dalam Bahasa Indonesia: pernyataan dan ekspresi). Kedua konsep ini merupakan fondasi penting karena keduanya menyusun setiap instruksi yang dijalankan oleh komputer.

Secara umum, program komputer dapat dipahami sebagai kumpulan instruksi yang disusun untuk menyelesaikan tugas tertentu. Instruksi-instruksi tersebut dibentuk melalui kombinasi statement dan expression. Artikel ini akan mengupas perbedaan keduanya secara sistematis, lengkap dengan contoh penerapan pada beberapa bahasa pemrograman.

---

## Definisi Statement dan Expression

**Statement** adalah unit sintaks dalam bahasa pemrograman yang berfungsi untuk **menjalankan suatu aksi atau tugas tertentu**. Contohnya:

```javascript
var x = 1;              // statement pembuatan variabel
print("Hello World");   // statement menampilkan teks
```

**Expression**, di sisi lain, adalah unit sintaks yang **selalu menghasilkan sebuah nilai**. Expression umumnya tersusun dari konstanta, variabel, fungsi, atau operator. Contohnya:

```javascript
x + 1;      // menghasilkan nilai penjumlahan
3 * 3;      // menghasilkan nilai 9
sqrt(25);   // menghasilkan nilai akar kuadrat
```

Sebagai patokan sederhana:

| Konsep | Fungsi Utama |
| :--- | :--- |
| **Statement** | Menjalankan suatu tugas / aksi |
| **Expression** | Menghasilkan suatu nilai |

---

## Ketika Statement dan Expression Muncul Bersamaan

Perhatikan contoh kode berikut:

```javascript
var x = 4 + 2;
```

Kode ini sebenarnya mengandung **keduanya sekaligus**. Secara keseluruhan, baris ini adalah sebuah *statement* karena tugasnya adalah membuat dan mengisi variabel `x`. Namun, bagian `4 + 2` di dalamnya adalah *expression* karena menghasilkan nilai `6` yang kemudian disimpan ke dalam variabel tersebut.

---

## Cara Praktis Membedakan Keduanya

Cara termudah untuk membedakan statement dan expression adalah dengan menguji apakah suatu kode dapat disimpan ke dalam variabel menggunakan operator `=`.

- Jika **bisa** disimpan ke dalam variabel → tergolong **expression**.
- Jika **tidak bisa** disimpan ke dalam variabel → tergolong **statement**.

Contoh:

```javascript
var x = 4 * 2;                  // 4 * 2 adalah expression (valid)
var y = sqrt(25);               // sqrt(25) adalah expression (valid)
var z = if (x > 10) { z = 10 }; // ERROR, 'if' adalah statement!
```

Blok `if (x > 10) { z = 10 }` tidak dapat disimpan ke dalam variabel sehingga tergolong statement, bukan expression.

---

## Studi Kasus: Perintah print()

Status perintah `print()` sebagai statement atau expression sebenarnya bergantung pada bahasa pemrograman yang digunakan.

### Pada Python
`print()` dapat disimpan ke dalam variabel meskipun nilainya kosong (`None`):

```python
>>> x = print("Hello World!")
Hello World!
>>> x
>>> 
```

Karena tetap dapat disimpan ke variabel, `print()` pada Python dikategorikan sebagai expression, walau tidak menghasilkan nilai yang berarti.

Python juga menyediakan fungsi `eval()` untuk menguji apakah suatu kode termasuk expression:

```python
>>> eval("1 + 1")
2
>>> eval("x = 1 + 1")
SyntaxError: invalid syntax
```

### Pada PHP
`print()` justru menghasilkan nilai `1` sehingga secara jelas tergolong expression:

```php
$x = print("Hello World");
echo $x; // -> 1
```

Sebaliknya, `echo` pada PHP tidak dapat disimpan ke variabel sehingga tergolong statement:

```php
$y = echo "Hello"; // Syntax Error!
```

---

## Expression dalam String Interpolation

*String interpolation* adalah teknik memformat teks dengan menyisipkan ekspresi di dalamnya. Karena hanya expression yang dapat menghasilkan nilai, hanya expression pula yang dapat disisipkan pada teknik ini.

```javascript
console.log(`Sebuah string ${1 + 2}`);   // JavaScript
```

```python
print(f"sebuah string {1 + 2}")          # Python
```

Sebaliknya, penyisipan statement seperti `if(true){ alert("hi") }` ke dalam string interpolation akan menghasilkan error, karena statement tidak menghasilkan nilai yang dapat disisipkan ke dalam teks.

---

## Statement dan Expression pada Percabangan (If/Else)

Bentuk konvensional `if/else` merupakan statement:

```javascript
if (answer == 3) {
   // benar
} else {
   // salah
}
```

Namun terdapat bentuk lain yang tergolong expression, yaitu melalui **operator ternary**:

```javascript
var result = (answer == 3) ? 'benar' : 'salah';
```

Python memiliki pendekatan serupa melalui *conditional expression*:

```python
result = 'benar' if answer == 3 else 'salah'
```

---

## Statement dan Expression pada Perulangan

Perulangan konvensional seperti `for`, `while`, dan `do/while` tergolong statement karena tidak menghasilkan nilai:

```javascript
for (i = 0; i < 10; i++) {
    // do something
}
```

Untuk melakukan perulangan dalam bentuk expression, diperlukan fungsi tertentu, misalnya `map()` pada JavaScript:

```javascript
var arr = [2, 4, 1, 4, 5, 3];
console.log(`isi array * 2: ${arr.map((item) => item * 2)}`);
```

Pola ini juga umum dijumpai pada JSX di React, di mana perulangan hanya diperbolehkan dalam bentuk expression, bukan statement:

```javascript
function Hello() {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {data.map((value, index) => (
        <a key={index}>{value}</a>
      ))}
    </>
  );
}
```

---

## Statement dan Expression pada Fungsi

Fungsi dapat berperan sebagai statement maupun expression, tergantung cara pendefinisiannya.

### Contoh pada Python:

```python
# fungsi sebagai statement
def add(a, b):
    return a + b

# fungsi lambda sebagai expression
jumlahkan = lambda a, b: a + b

# pemanggilan fungsi adalah expression
add(1, 2)
```

### Contoh pada JavaScript:

```javascript
// fungsi statement
function add(a, b) {
  return a + b;
}

// fungsi expression
const jumlahkan = function (a, b) {
  return a + b;
};

// arrow function, juga tergolong expression
const kali = (a, b) => a * b;
```

Hal ini dimungkinkan karena pada JavaScript, fungsi diperlakukan sebagai *first-class citizen*, artinya fungsi dapat disimpan ke variabel, dijadikan parameter, maupun dioperasikan layaknya expression pada umumnya.

---

## Latihan Mandiri

Untuk menguji pemahaman, coba identifikasi statement dan expression pada kode berikut:

**Soal 1 (C)**
```c
int x = 4 + 1;
while (x < 10) {
    printf("x = %d\n", x * 5 + 2);
    x++;
}
```

**Soal 2 (JavaScript)**
```javascript
var score = 0;
const jawab = input.answer == "4" ? "benar" : "salah";
if (jawab == "benar") {
    console.log("Jawaban benar");
    score = score + 10;
}
```

**Soal 3 (JavaScript)**
```javascript
const handleClick = function (event) {
  console.log("Button diklik");
};
```

---

## Penutup

Memahami perbedaan statement dan expression adalah salah satu langkah dasar yang membantu proses belajar koding menjadi lebih terstruktur, terutama bagi pembelajar otodidak. Konsep ini menjadi salah satu materi yang relevan dengan semangat program **Koding dan Kecerdasan Artifisial (KA)** dari Kementerian Pendidikan Dasar dan Menengah, yang mendorong penguatan berpikir komputasional sejak dini.

Bagi Anda yang ingin belajar koding secara mandiri namun tetap terarah, **Baricode Bimbingan** hadir sebagai pendamping belajar gratis melalui grup WhatsApp — bukan kelas, bukan meeting, melainkan pendampingan progres agar Anda tetap konsisten hingga mencapai tujuan belajar.
