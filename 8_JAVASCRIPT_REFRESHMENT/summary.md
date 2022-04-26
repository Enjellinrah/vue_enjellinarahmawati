<h1>8_JAVASCRIPT REFRESHMENT<h1>

<h2>Resume</h2>
<h3>Dalam materi ini, mempelajari:</h3>
1.  JavaScript
2. Pengertian Var, Let dan Cons
3. Method
4. Async-Await
5. Classes
6. Document Object Model 

<h2>Javascript</h2>
JavaScript adalah bahasa pemrograman yang high-level, Scripting, Untyped dan Interpreted.

<h2>Pengertian Var, Let dan Const</h2>

<h3>Apa itu Declaration?</h3>
Declaration adalah proses pembuatan variabel untuk menyimpan data.
- Var : umumnya kita jarang menggunakan ini
- Let : Digunakan saat kita membutuhkan nilai yang dapat diubah
- Cons : Digunakan saat kita membutuhkan nilai yang tidak bisa di "reassign"
*catatan: saat kita mendeklarasikan variabel cons, kita harus memberi nilai pada variabel tersebut!

<h3>Apa itu Scoping?</h3>
Scoping menentukan dimana variabel, fungsi dan objek diatur dan dapat diakses dalam kode kita. ini berarti ruang lingkup variabel dikendalikan oleh lokasi deklarasi variabel. 

<h3>Apa itu Hoisting?</h3>
Hoisting membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam kode sebelum dideklarasikan.
Deklarasi var dan function adalah hoisted, oleh karena itu mereka dapat digunakan bahkan sebelum deklarasi itu sendiri terjadi.
sedangkan Let dan Cons tidak hoisted, oleh karena tu mereka tidak dapat digunakan bahkan sebelum deklarasi terjadi.

<h3>Values & References</h3>
Primitive dalam pemrograman adalah unit pemrosesan terkecil dan elemen paling sederhana yang tersedia dalam bahasa pemrograman.
Objects adalah unit yang menyimpan properti dan fungsi (method).
Objects:
- object
- Array
- Function
- Date
- Set
- Map
- Weak Set
- Weak Map
Aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam JavaScript diteruskan oleh nilai.
Meneruskan references bagaimanapun, akan memberikan references yang sama.

Destructuring adalah ekspresi dari javascript yang memungkinkan untuk menyalin nilai dari Array, atau properti dari objek, ke dalam variabel yang berbeda.
Spread Syntax dapat digunakan ketika semua elemen dari object atau array perlu dimasukkan ke dalam semacam daftar.

<h2>Method pada Array</h2>
Method merupakan sebuah fungsi yang terkait dengan object, membuat programnya se-sederhana mungkin sesuai kegunaan masing-masing.

<h3>Control Flow</h3>
Normal flow adalah pengeksekusian statement dari atas ke bawah atau kiri ke kanan yang dilakukan secara berurutan.
Control flow adalah mengatur alur eksekusi pada statement atau jalannya program sesuai keinginan kita.

<h3>Function</h3> 
Function di dalam JavaScript adalah sebuah objek. karena memiliki properti dan juga method. function digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali.

<h2>Async-Await</h2>
Synchronous mengeksekusi setiap perintah satu persatu sesuai urutan kode yang dituliskan.
Asynchronous adalah hasil eksekusi atau output tidak selalu berdasarkan urutan kode, tetapi berdasarkan waktu proses.

<h3>Callback</h3>
Callback adalah fungsi yang dikirimkan sebagai parameter pada fungsi lain. atau Callback adalah fungsi yang dieksekusi setelah fungsi lain selesai dijalankan.
Promise adalah objek yang mempresentasikan keberhasilan atau kegagalan pada sebuah event yang asynchronous dimasa mendatang.
Asynchronus function adalah sebuah function yang bekerja secara asynchronous yang menghasilkan promise sebagai return value-nya, tetapi cara penulisan code-nyamenggunakan penulisan yang synchronous (standar).
Await adalah sebuah keyword yang terdapat pada asynch function yang tujuannya menghentikan eksekusi sambil menunggu promise-nya selesai.

<h2>Classes</h2>
Class adalah Prototype dari suatu object yang akan kita buat.
Constructor adalah method di dalam class yang akan selalu terpanggil pertama kali ketika membuat object.
Method adalah sebuah fungsi yang berada di dalam class.
Attributes adalah kumpulan variabel yang membentuk object yang dimiliki oleh suatu class.
Extends digunakan untuk membuat kelas anak dari kelas induk. kelas anak mewarisi semua atribut dan metode dari kelas induk.

<h2>Document Object Model</h2>
Document Object Model adalah API untuk HTML yang merepresentasikan halaman web pada suatu dokumen menjadi sebuah object.