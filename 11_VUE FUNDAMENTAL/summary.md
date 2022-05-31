<h1>11_VUE FUNDAMENTAL</h1>
<h2>RESUME</h2>
Materi yang dipelajari yaitu :
<li>Pengenalan Vue</li>
<li>Vue Setup dan Resources</li>
<li>Dasar-Dasar Vue</li>
<li>Vue Directive</li>
<li>Events dan Method</li>
<li>Computed Properties dan Watchers</li>
<li>Component</li>

<h2>Vue</li>
Vue adalah framework dari javascript untuk mengembangkan tampilan website yang lebih interaktif dan dinamis. 
<h3>Berikut kelebihan dari Vue</h3>
<li>Mudah membuat aplikasi frontend dan website</li>
<li>Mudah dipelajari dan menyenangkan</li>
<li>Dokumentasi yang lengkap dan rapi</li>
<li>Ramping dan cepat</li>

<h2>Cara Kerja Vue</h2>
<h3>Vue CDN</h3>
Vue dapat digunakan langsung di file HTML dengan menambahkan <script src="https://unpkg.com.vue"></script>
<h3>Vue CLI</h3>
Menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup / pembuatan aplikasi Vue.

<h2>Vue Setup dan Resources</h2>
seperti yang telah dijelaskan, sama dengan html, namun menambahkan script dan inisiasi script. 

<h2>Dasar Dasar Vue</h2>
<h3>Vue Instance</h3>
Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue
<h3>Vue Data Binding</h3>
Vue.js menggunakan sintaks template berbasis HTML yang memungkinkan kita untuk secara deklaratif mengingat DOM yang dirender ke data instance Vue yang mendasarinya. 
<p>Ada 3 jenis data binding pada Vue</p>
<li>Di dalam konten</li>
<li>Di atribut elemen</li>
<li>Elemen HTML</li>
<h3>Vue Reactivity</h3>
Vue Intance memiliki property bernama data, jika value dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang.
<h3>Vue Directive</h3> 
Directive adalah atribut khusus yang diawali dengan v-. Directive berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut.
<h3>Macam Vue Directive</h3>
<li>v-bind</li>
Direktif untuk memberitahu Vue kalau kita ingin melakukan one way data binding.
<li>v-model</li>
Direktif untuk memberitahu Vue kalau kita ingin melakukan two way data binding
<li>v-if, v-else, v-else-if</li>
Direktif yang digunakan untuk melakukan rendering secara kondisional</li>
<li>v-on</li>
Direktif untuk memberitahu Vue kalau kita ingin memanggil fungsi.
<li>v-for</li>
Direktif untuk memberitahu Vue kalau kita ingin melakukan pengulangan.
<li>Shorthand Vue Directive</li>
Khusus untuk v-bind  dan v-on dapat disingkat dengan sintaks seperti yang telah dicontohkan.
<h3>Events dan Metods</h3>
<li>Memantau Evenst</li>
Menggunakan direktif v-on untuk mendengarkan peristiwa DOM dan menjalankan beberapa javascript saat dipicu. 
<li>Menggunakan Methods</li>
Methods adalah fungsi yang dapat diakses secara langsung pada intance VM, atau menggunakan dalam ekspresi direktif.
Semua methods memiliki sintaks "this".
<h3>Computed Properties dan Watchers</h3>
Computed Properties digunakan untuk menangani kalkulasi atau penghitungan informasi yang lebih kompleks atau rumit untuk dapat ditampilkan pada Template.
<h3>Watchers</h3>
Digunakan untuk melakukan suatu hal sebagai reaksi terhadap perubahan data tertentu.
<h3>Components</h3>
Merupakan salah satu fitur penting dalam Framework Vue js bisa dibilang fitur ini mengijinkan programmer untuk memperluaskan elemen HTMLnya dengan membungkus dalam satu kode artinya component ini adalah sistem templating dimana kita membuat satu template tertentu untuk digunakan berkali kali terutama yang teman teman bermain dengan single page application yaitu aplikasinya dalam satu halaman dan kita punya beberapa component untuk digunakan berkali kali nah disitu kita bisa manfaatin yang namanya component ini.