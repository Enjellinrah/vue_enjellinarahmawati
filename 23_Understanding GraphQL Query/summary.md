<h1>23_Understanding GraphQL Query</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>GraphQL Query</h2>
<h3>GraphQL</h3>
GraphQL adalah bahasa yang digunakan untuk query API. Selain itu GraphQL bisa menjadi pengganti REST API, tetapi prakteknya GraphQL sering digunakan bersamaan dengan REST API dan bahkan saling melengkapi. Ada juga yang mengatakan GraphQL adalah bahasa untuk query database, tetapi sebenarnya GraphQL tidak tahu cara query database karena konsepnya sangat berbeda dengan ORM.
<h3>Menjalankan Query</h3>
Kait useQuery React adalah API utama untuk mengeksekusi query dalam aplikasi Apollo. Untuk menjalankan query dalam komponen React, panggil useQuery dan berikan string query GraphQL. Saat komponen dirender, useQuery kembalikan objek dari Apollo Client yang berisi loading, error, dan dataproperti yang dapat digunakan untuk merender UI. Saat query dijalankan dan nilai loading, error, dan data berubah, Dogs komponen dapat secara cerdas merender elemen UI yang berbeda sesuai dengan status query:
<li>Selama (menunjukkan kueri loading masih true dalam penerbangan), komponen menyajikan Loading...pemberitahuan.</li>
<li>Saat memuat adalah falsedan tidak ada error, kueri telah selesai. Komponen membuat menu tarik-turun yang diisi dengan daftar ras anjing yang dikembalikan oleh server.</li>
<li>Saat pengguna memilih jenis anjing dari dropdown yang terisi, pilihan tersebut dikirim ke komponen induk melalui onDogSelectedfungsi yang disediakan.</li>
Pada langkah berikutnya, akan mengaitkan dropdown dengan query yang lebih canggih yang menggunakan variabel GraphQL.
<h3>Caching hasil Query</h3>
Setiap kali Klien Apollo mengambil hasil query dari server, secara otomatis menyimpan hasil tersebut secara lokal. Ini membuat eksekusi selanjutnya dari query yang sama menjadi sangat cepat.