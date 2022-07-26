<h1>25_Understanding GraphQL Subcribsion</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari : 
<h2>GraphQL Subcribsion</h2>
Seperti query, subcribsion memungkinkan Anda mengambil data. Tidak seperti query, subcribsion adalah operasi jangka panjang yang dapat mengubah hasilnya seiring waktu. Mereka dapat mempertahankan koneksi aktif ke server GraphQL (paling sering melalui WebSocket), memungkinkan server untuk mendorong pembaruan ke hasil subcribsion. Subcribsion berguna untuk memberi tahu klien secara real time tentang perubahan pada data back-end, seperti pembuatan objek baru atau pembaruan pada bidang penting. 
<h3>Kapan harus menggunakan subcribsion</h3>
Harus menggunakan subcribsion untuk hal-hal berikut:
<li>Perubahan kecil dan bertahap pada objek besar . Berulang kali polling untuk objek besar itu mahal, terutama ketika sebagian besar bidang objek jarang berubah. Sebagai gantinya, Anda dapat mengambil status awal objek dengan kueri, dan server Anda dapat secara proaktif mendorong pembaruan ke masing-masing bidang saat terjadi.</li>
<li>Pembaruan waktu nyata dengan latensi rendah . Misalnya, klien aplikasi obrolan ingin menerima pesan baru segera setelah tersedia.</li>
<h3>Library Subcribsion</h3>
Spesifikasi GraphQL tidak menentukan protokol khusus untuk mengirim permintaan subcribsion. Pustaka JavaScript populer pertama yang mengimplementasikan langganan melalui WebSocket disebut subscriptions-transport-ws. Perpustakaan ini tidak lagi dikelola secara aktif. Penggantinya adalah perpustakaan yang disebut graphql-ws. Kedua perpustakaan tidak menggunakan subprotokol WebSocket yang sama , jadi perlu memastikan bahwa server dan klien Anda semua menggunakan perpustakaan yang sama. Apollo Client mendukung keduanya yaitu graphql-wsdan subscriptions-transport-ws.