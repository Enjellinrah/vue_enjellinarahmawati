<h1>10_Frontend Fundamental<h1>
<h2>Resume</h2>
<h3>Materi yang di pelajari yaitu : </h3>
<li>HTML</li>
<li>CSS</li>
<li>Javascript</li>
<li>Node.js</li>
<li>NPM</li>
<li>Git</li>
 

 <h2>HTML</h2>
   Adalah kependekan dari Hypertext Markup Language. Secara umum, fungsi HTML adalah untuk mengelola serangkaian data dan informasi sehingga suatu dokumen dapat diakses dan ditampilkan di Internet melalui layanan web.
  <h3>1. HTML Tag.</h3></p>

Tags adalah sebuah syntax dan tanda spesial yang memberikan awalan dan akhiran dalam perintah HTML. Tag terdiri dari dua tanda kurung <..> yang memiliki fungsi yang berbeda.
Ada dua jenis tag yang digunakan secara berpasangan pada sebuah perintah HTML: tag pembuka atau opening tag <..> dan tag penutup atau closing tag yang terlihat seperti: </…>.
Setiap tag akan memberikan hasil yang berbeda, tergantung pada perintah di dalamnya. Mulai dari membuat paragraf <p> </p>, cetak tebal <bold> </bold> dan lain sebagainya.
Sampai saat ini HTML mempunyai lebih dari seratus tags lho Golden friends! Namun, jangan khawatir! Anda tidak perlu menghafal semuanya karena ada banyak referensi online untuk itu.

<h3>2. Opening tag.</h3>

<h3>3. Closing tag.</h3>

<h3>4. Content.</h3>
          
Seperti namanya, content adalah isi dari sebuah elemen. Pada contoh kali ini, konten yang digunakan berbentuk teks “GoldenFast Network Blog.”
          
<h3>5. Jenis Elemen & Kode Warna HTML.</h3>
Pada HTML, ada dua jenis penulisan elemen yang akan menentukan bagaimana konten Anda terlihat pada sebuah browser. Berikut adalah penjelasan singkatnya:

Block-level element adalah setiap elemen yang memulai baris baru dan menggunakan seluruh lebar halaman website. Elemen ini bisa mengisi beberapa baris dan memiliki jeda baris sebelum dan sesudah elemen. Contohnya adalah heading dan paragraf.
          
Inline element tidak memulai baris baru dalam dokumen dan hanya menggunakan ruang yang dibutuhkan. Elemen ini biasanya digunakan untuk memformat konten block-level element. Contohnya adalah hyperlinks dan tag format teks.


<h2>Pengertian CSS</h2>
CSS merupakan singkatan dari Cascading Style Sheets. CSS merupakan sebuah temuan untuk membantu pengembangan web yang tadinya hanya bergantung pada HTML sebagai bahasa markup.

<h2>Fungsi CSS</h2>
fungsi dari CSS yaitu dapat menghias halaman web. (color, size, font, background, width, height, dll). selain itu CSS juga dapat mengatur posisi pada halaman web.(float, aligan, display, position,dll).

<h2>Cara Menambahkan File CSS</h2>
3 cara menambahkan file CSS ke dalam HTML:
<li>External CSS</li>
<li>Inline CSS</li>
<li>Internal CSS</li>

<h2>CSS Selector</h2>
CSS selektor merupakan pola yang digunakan untuk memilih elemen, yang ingin di styling.
dalam CSS selektor, penanda HTML kedalam CSS. dapat menggunakan selector ID dan Class.
Ciri-ciri ID (#) :
<li>setia</i>
<li>penamaan elemen hanya dapat memiliki satu tag id</li>
<li>dalam satu halaman tidak boleh ada dua penamaan id yang berbeda</li>
Ciri-Ciri Class (.) :
<li>tag class dengan nama yang sama dapat dipakai berulang-ulang pada satu halaman.</li>
<li>satu elemen boleh memiliki lebih dari satu class yang berbeda-beda</li>

<h2>CSS grouping</h2>
beberapa selector dapat dikelompokkan dalam satu deklarasi style.

<h2>CSS font</h2>
beberapa style font di CSS yaitu:
<li>font netapkan semua properti font dalam satu deklarasi</li>
<li>font-weight : menentukan ketebalan untuk font teks</li>
<li>font-style : menentukan font teks menjadi miring</li>
<li>family : menentukan kelompok font text</li>
<li>font-zize : menentukan ukuran font teks</li

<h2>CSS Margin dan Padding</h2>
Margin dan padding bertujuan untuk membuat ruang disekitar element.

<h2>CSS Background</h2>
Beberapa style background di CSS yaitu:
<li>Background-image : menentukan gambar background pada suatu elemen</li>
<li>Background-color: menetapkan satu warna pada suatu elemen</li>
<li>Background-repeat : menentukan gambar untuk diulang</li>
<li>Background-position : mengatur posisi awal gambar background</li>
<li>Background-size : menentukan ukuran gambar untuk background</li>

<h2>CSS link Event</h2>
beberapa link event pada CSS yaitu:
<li>Hover : kondisi style ketika mouse berada diatas elemen</li>
<li>Visited : style dimana elemen link "a" telah dikunjungi / di klik </li>
<li>Active : style ketika link "a" ditekan</li>

<h2>CSS Display</h2>
CSS display yaitu menentukan tampilan pada elemen.
macam-macam CSS display yaitu:
<li>Inline-block : Elemen inline-block membutuhkan lebar sesuai yang diperlukan.</li>
<li>Block : Elemen block selalu dimulai pada baris baru (dimulai dari kiri ke kanan).</li>
<li>None : Menyembunyikan elemen untuk tidak ditampilkan.</li>

<h2>CSS Table</h2>
Membuat style pada elemen table HTML.
  <li>Border : menambah border pada table, th dan td</li>
  <li>nth-child (even) : membuat background stripe.</li>
  <li>Border-collapse : membuat border menjadi single border</li>


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


<h2>Node.Js</h2>
Runtime environment untuk JavaScript. Dengen node.js pengguna dapat menjalankan kode javascript dimana pun, tidak hanya terbatas pada lingkungan browser. 
<h3>Cara Kerja</h3>
Node.js akan melakukan eksekusi atau menjalankan file yang memiliki ekstensi js. 


<h2>NPM</h2>
NPM singkatan dari Node Package Manager.
Tool ini merupakan command line yang dapat menginstal dan meng-uninstal package, mengelola versi, dan dependensi yang diperlukan untuk menjalankan proyek. 
<h3>Cara Kerja NPM</h3>
NPM bekerja untuk mengatur package pada proyek yang berjalan dengan node.js

Package pada node.js memuat semua file yang dibutuhkan sebagai module. 

Module adalah library, JavaScript yang dapat kita masukkan ke dalam proyek.
<h3>Struktur Proyek NPM</h3>
Untuk membuat proyek aplikasi, jalankan perintah $ npm init kemudian tekan enter. Sebuah file bernama package.json akan muncul pada direktory proyek.
<li>name adalah nama proyek</li>
<li>script adalah daftar perintah yang bisa dijalankan didalam proyek. 
Contoh :
npm run test</li>
<li>dependencies adalah daftar library yang dipakai di proyek ketika production</li>
<li>devDependencies adalah daftar library yang dipakai di proyek ketika tahap pengembangan.</li>


<h2>GIT</h2>
<h2>Version Control And Branch Management (GIT)</h2>

Git adalah version control system yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Fungsi utama git yaitu mengatur versi dari source code program anda dengan mengasih tanda baris dan code mana yang ditambah atau diganti. Git ini sebenernya memudahkan programmer untuk mengetahui perubahan source codenya daripada harus membuat file baru. Selain itu, dengan git kita tak perlu khawatir code yang kita kerjakan bentrok, karena setiap developer bias membuat branch sebagai workspacenya.Fitur yang tak kalah keren lagi, pada git kita bisa memberi komentar pada source code yang telah ditambah/diubah, hal ini mempermudah developer lain untuk tahu  kendala apa yang dialami developer lain. 

  <h2>Setting Up dan Push</h2>

Untuk mengetahui bagaimana menggunakan git, berikut perintah-perintah dasar git :

1. Git init 	: untuk membuat repository pada file lokal yang nantinya ada folder .git
2. Git status 	: untuk mengetahui status dari repository lokal
3. Git add 		: menambahkan file baru pada repository yang dipilih
4. Git commit	: untuk menyimpan perubahan yang dilakukan, tetapi tidak ada perubahan pada remote repository.
5. Git push		: untuk mengirimkan perubahan file setelah di commit ke remote repository.
6. Git branch	: melihat seluruh branch yang ada pada repository
7. Git checkout	: menukar branch yang aktif dengan branchyang dipilih
8. GIt merge	: untuk menggabungkan branch yang aktif dan branch yang dipilih
9. Git clone	: membuat Salinan repository lokal

  <h2>Branch and Konflik (revisi kesalahan)</h2>

Konflik integrasi antar branch kerap terjadi ketika ada dua perubahan di file yang sama di branch berbeda di saat yang bersamaan.
Kita perlu membuka file tersebut dan membandingkan perubahan dari branch berbeda sebelum akhirnya memutuskan untuk menentukan perubahan mana yang akan diterima.
perintah untuk menyelesaikan konflik yaitu ;
1. Git branch	: melihat seluruh branch yang ada pada repository
2. Git checkout	: menukar branch yang aktif dengan branchyang dipilih
3. GIt merge	: untuk menggabungkan branch yang aktif dan branch yang dipilih
