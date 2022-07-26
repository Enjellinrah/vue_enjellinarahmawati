<h1>21_Understanding GraphQL Basic</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>Vue JS dan GraphQL</h2>
<h2>GraphQL Mutation</h2>
<p>Sebagian besar diskusi GraphQL berfokus pada pengambilan data, tetapi semua platform data lengkap memerlukan cara untuk memodifikasi data sisi server juga. Di REST, permintaan apa pun mungkin akan menyebabkan beberapa efek samping pada server, tetapi menurut konvensi, disarankan agar seseorang tidak menggunakan GETpermintaan untuk mengubah data. GraphQL serupa - secara teknis query apa pun dapat diimplementasikan untuk menyebabkan penulisan data. Namun, berguna untuk menetapkan konvensi bahwa setiap operasi yang menyebabkan penulisan harus dikirim secara eksplisit melalui mutasi. Sama seperti dalam kueri, jika bidang mutasi mengembalikan tipe objek, Anda dapat meminta bidang bersarang. Ini dapat berguna untuk mengambil status baru suatu objek setelah pembaruan.
<h3>Beberapa bidang dalam mutasi </h3>
Mutasi dapat berisi beberapa bidang, sama seperti kueri. Ada satu perbedaan penting antara kueri dan mutasi, selain namanya:
<p>Sementara bidang kueri dijalankan secara paralel, bidang mutasi dijalankan secara seri, satu demi satu. Artinya jika kita mengirim dua incrementCreditsmutasi dalam satu permintaan, yang pertama dijamin selesai sebelum yang kedua dimulai, memastikan bahwa kita tidak berakhir dengan kondisi balapan dengan diri kita sendiri.<p>
<h3>Fragmen Sebaris </h3>
Seperti banyak sistem tipe lainnya, skema GraphQL mencakup kemampuan untuk mendefinisikan antarmuka dan tipe gabungan. Pelajari tentang mereka di panduan skema. Jika menanyakan tentang bidang yang mengembalikan antarmuka atau tipe gabungan, perlu menggunakan fragmen sebaris untuk mengakses data pada tipe konkret yang mendasarinya.
<h2>GraphQL Subcribsion</h2>
Seperti query, subcribsion memungkinkan Anda mengambil data. Tidak seperti query, subcribsion adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. Mereka dapat mempertahankan koneksi aktif ke server GraphQL (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil subcribsion. Subcribsion berguna untuk memberi tahu klien secara real time tentang perubahan pada data back-end, seperti pembuatan objek baru atau pembaruan pada bidang penting. 
<h3>Kapan harus menggunakan subcribsion</h3>
Harus menggunakan subcribsion untuk hal-hal berikut:
<li>Perubahan kecil dan bertahap pada objek besar . Berulang kali polling untuk objek besar itu mahal, terutama ketika sebagian besar bidang objek jarang berubah. Sebagai gantinya, Anda dapat mengambil status awal objek dengan kueri, dan server Anda dapat secara proaktif mendorong pembaruan ke masing-masing bidang saat terjadi.</li>
<li>Pembaruan waktu nyata dengan latensi rendah . Misalnya, klien aplikasi obrolan ingin menerima pesan baru segera setelah tersedia.</li>
<h3>Library Subcribsion</h3>
Spesifikasi GraphQL tidak menentukan protokol khusus untuk mengirim permintaan subcribsion. Pustaka JavaScript populer pertama yang mengimplementasikan langganan melalui WebSocket disebut subscriptions-transport-ws. Perpustakaan ini tidak lagi dikelola secara aktif. Penggantinya adalah perpustakaan yang disebut graphql-ws. Kedua perpustakaan tidak menggunakan subprotokol WebSocket yang sama , jadi perlu memastikan bahwa server dan klien Anda semua menggunakan perpustakaan yang sama. Apollo Client mendukung keduanya yaitu graphql-wsdan subscriptions-transport-ws.
