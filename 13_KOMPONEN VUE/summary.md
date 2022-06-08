<h1>13 Komponen Vue</h1>

<h2>Resume</h2>
Dalam materi ini mempelajari:
<li> Module Export dan Import</li>
<li> Paradigma Fungsi Pembantu</li>
<li> Instance Lifecycle Hooks</li>

<h2>Module Export dan Import</h2>
Modul bisa berisi kelas atau pustaka fungsi untuk tujuan tertentu. modul hanya sebuah file. satu kode skript adalah satu modul.

Eksport digunakan untuk menyediakan fungsi, objek, atau nilai primitif dari modul sehingga dapat digunakan oleh modul lain dengan pernyataan import.
ada 2 tipe export yaitu :
1. Named Exports (eksport nol atau lebih per modul)
2. Default Exports (satu per modul)

Import digunakan untuk mengambil variabel, obyek atau fungsi yang disediakan oleh modul lain.
ada 4 tipe import yaitu:
1. Importing defaults (import target)
2. Import multiple exports (import {target})
3. Rename multiple exports (import {target as t})
4. Import defaults + multiple (import targetDefault, {target as t})


<h2>Paradigma Fungsi Pembantu</h2>
Paradigma fungsi pembantu adalah sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda.

tips
fungsi pembantu bisa diberi nama yang berbeda-beda namun harus mudah dimengerti, jamak dan self-descripting seperti:
1. Utilities
2. Utils
3. Helpers
4. Tools
Beberapa contoh fungsi pembantu yang sering dipakai:
1. Operator (penambahan, rata-rata, median, min-max, hitung umur dll.)
2. Formatter (tangga, waktu, mata uang dll.)
3. Validator (email, nomor telfon, nomor kartu kredit dll.)
4. Generator (angka random, text random, warna, format text dll.)


<h2>Instance Lifecycle Hooks</h2>
Setiap Vue Instance melewati beberapa serangkaian tahapan pada saat dibuat, tahapan ini disebut sebagai Lifecycle atau siklus hidup.
Siklus hidup sebuah vue instance berawal ketika inisiasi dan berakhir ketika penghancuran.
setiap siklus memiliki hook-nya masing-masing yang berbentuk fungsi.

3 Lifecycle Utama:
1. Created
berlangsung setelah instance terbentuk dan sebelum DOM dirender.
contoh penggunaan:
a. menambahkan SEO meta
b. Memasang event listener scroll
2. Mouted
berlangsung setelah DOM dirender
contoh penggunaan:
a. Handling loader
3. Destroyed
berlangsung sebelum instance dihancurkan
contoh penggunaan:
a. Mencopot event listener scroll
