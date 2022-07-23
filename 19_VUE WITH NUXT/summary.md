<h1>019_VUE WITH NUXT</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>NUXT</h2>
<h3>HTML</h3>
Kerangka kerja yang dibangun di atas Vue  yang membuat pengembangan web menjadi sederhana dan ampuh. 
<h3>Cara kerja Nuxt</h3>
<li>Inisiasi aplikasi</li>
<li>Jalankan aplikasi</li>
<h3>Struktur direktori Nuxt</h3>
<h4> Pages</h4>
Router di nuxt secara otomatis membaca direktori ini, sehingga file yang ada di direktori langsung terhubung menjadi path halaman.
<h4>Layout</h4>
Setiap file di direktori akan membuat tata letak khusus yang dapat diakses dengan properti layout di komponen halaman.
<h4>Static</h4>
Semua file yang disertakan akan secara otomatis diekspos oleh nuxt dan dapat diakses melalui URL root proyek.  
<h3>Nuxt SSG danSSR</h3>
<h3>SSG</h3>
Kepanjangan dari  Static Site Generation, metode pengembangan ini lebih cocok untuk  situs web yang tidak memiliki halaman dinamis.
<h3>Cara kerja SSG</h3>
Ketika sebuah proyek dibangun untuk produksi, html siap pakai akan dibuat di folder dist, kemudian bukan oleh server dan dapat diakses per masing-masing file html.
<h3>SSR</h3>
Kepanjangan dari  Server Side Rendering. Metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara Real Time, yaitu melalui panel admin, misalnya: halaman blog dan e-commerce.
<h3>Cara kerja SSR</h3>
Server yang dibangun ke dalam nuxt akan berjalan dalam produksi, yang akan memastikan bahwa file html baru dihasilkan secara Real Time ketika data baru diterima, misalnya melalui API. 
<h3>SEO</h3>
Kepanjangan dari Search Engine Optimization, yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau web dari mesin pencari. Sedangkan SEO Meta tag adalah tag tak terlihat di dalam head yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web.
<h3>Cara kerja SEO Meta</h3>
Dapat diterapkan dari nuxt config untuk pengaturan global, yaitu konten head akan sama di setiap halaman aplikasi. 
<h3>PWA</h3>
Kepanjangan dari Progessive Web Apps. Dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, di mana saja, di perangkat apapun dengan basis kode tunggal. 