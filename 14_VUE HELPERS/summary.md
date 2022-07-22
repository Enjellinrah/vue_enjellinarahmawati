<h1>014_VUE HELPERS</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>Perkakas pendukung vue</h2>

<h3>Navigasi pada vue</h3>
Navigasi adalah kegiatan berpindah dari satu halaman ke halaman lain. Pada dasarnya,  vue single page application  yang berarti hanya ada 1 entri halaman html saja namun konten dari halaman html tersebut dirender ulang sehingga seolah-olah berganti halaman.  
<h3>Cara instalasi :</h3>
Ketikan vue add router.
<h3>Cara vue melakukan navigasi</h3>
Untuk dapat berpindah ke halaman yang diinginkan pertama yang perlu dipastikan adalah halaman tersebut ada. Katakanlah kita ingin berpindah halaman dari halaman home ke halaman about.
bisa membuka halaman about dengan mengetik manual di address bar:/about. Opsi controller pengguna untuk mengakses halaman tersebut dengan link atau tombol.
<h3>Navigasi beranak</h3>
Navigasi beranak adalah sub-path  dari path
<li>User : Induk dari setting</li>
<li>Setting :  anak dari user dan induk dari privasi</li>
<li>Privasi : anak dari setting</li>
<h3>Navigasi dinamis</h3>
Navigasi Dinamis adalah Wah dimana bagian tersebut memiliki nilai sembarang dan tidak perlu mendefinisikan nilainya satu persatu.
<h3>Layout Template Vue</h3>
Layout adalah susunan tata letak, sedangkan layout template pada vue adalah komponen yang dapat dipakai sebagai susunan tata letak dasar yang membungkus masing-masing halaman.  juga dapat diterapkan untuk mengisolasi logika tampilan viewpord supaya kode di setiap halaman tetap bersih dan efisien. 
<h3>Cara kerja</h3>
Pada dasarnya layout hanyalah komponen biasa yang membedakan adalah layout dapat meneruskan konten dari anak komponennya. 
<h3>Penyimpanan global</h3>
Penyimpanan global adalah sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh bagian aplikasi.
<h3>Penyimpanan Global dengan Vuex</h3>
Vuex adalah pola manejemen penyimpanan atau store yang berbentuk pustaka untuk aplikasi vue.js.
<h3>Vuex  dan cara kerjanya</h3>
Adalah penyimpanan terpusat untuk semua komponen dalam aplikasi, dengan aturan yang memastikan bahwa variabel yang tersimpan hanya dapat dimutasi dengan cara yang terstruktur dan terprediksi.
<h3>Membuat dan menggunakan</h3>
Untuk membuat store dengan vuex  dapat menggunakan sintaks sebagai berikut, kemudian sisipkan store  kedalam inisiasi vue  yang ada di main.js.
<h3>Vuex Mutations </h3>
Untuk memodifikasi nilai dari state yang tersimpan di dalam store Menggunakan sintaks mutation, kemudian dari komponen dapat memanggil fungsi mutations yang telah dibuat. Berdasarkan praktek terbaik penggunaan mutations, hanya bertujuan untuk mengubah nilai variabel yang ada di dalam store Tanpa ada logika pengolahan muatan di dalam fungsi mutation tersebut. Jadi dari komponen vue  disarankan untuk terhubung ke actions  sedangkan action akan berhubungan langsung dengan mutations.
<h3>Vuex actions</h3>
Bertugas sebagai pintu masuk perintah yang menghubungkan komponen dengan Store. action perlu memanggil fungsi di mutations untuk memodifikasi nilai state yang ada di Store. Selain itu, action juga tempat untuk melakukan komunikasi dengan API
<h3>Memecah Store sebagai modul</h3>
Salah praktek terbaik penggunaan vuex store adalah  memisah atau mengisolasi State,  mutations, dan actions  ke dalam modul-modul terpisah.
<h3>Penyimpanan Global permanen</h3>
Nilai yang ada di dalam vuex store  akan dihapus atau disetel ulang sesuai dengan nilai awal jika halaman dimuat ulang karena nilai step yang ada di store disimpan di dalam memory instance.

