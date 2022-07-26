<h1>24_Understanding GraphQL Mutation</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>GraphQL Mutation</h2>
<p>Sebagian besar diskusi GraphQL berfokus pada pengambilan data, tetapi semua platform data lengkap memerlukan cara untuk memodifikasi data sisi server juga. Di REST, permintaan apa pun mungkin akan menyebabkan beberapa efek samping pada server, tetapi menurut konvensi, disarankan agar seseorang tidak menggunakan GETpermintaan untuk mengubah data. GraphQL serupa - secara teknis query apa pun dapat diimplementasikan untuk menyebabkan penulisan data. Namun, berguna untuk menetapkan konvensi bahwa setiap operasi yang menyebabkan penulisan harus dikirim secara eksplisit melalui mutasi. Sama seperti dalam kueri, jika bidang mutasi mengembalikan tipe objek, Anda dapat meminta bidang bersarang. Ini dapat berguna untuk mengambil status baru suatu objek setelah pembaruan.<p>
<h3>Beberapa bidang dalam mutasi </h3>
Mutasi dapat berisi beberapa bidang, sama seperti kueri. Ada satu perbedaan penting antara kueri dan mutasi, selain namanya:
<p>Sementara bidang kueri dijalankan secara paralel, bidang mutasi dijalankan secara seri, satu demi satu. Artinya jika kita mengirim dua incrementCreditsmutasi dalam satu permintaan, yang pertama dijamin selesai sebelum yang kedua dimulai, memastikan bahwa kita tidak berakhir dengan kondisi balapan dengan diri kita sendiri.<p>
<h3>Fragmen Sebaris </h3>
Seperti banyak sistem tipe lainnya, skema GraphQL mencakup kemampuan untuk mendefinisikan antarmuka dan tipe gabungan. Pelajari tentang mereka di panduan skema. Jika menanyakan tentang bidang yang mengembalikan antarmuka atau tipe gabungan, perlu menggunakan fragmen sebaris untuk mengakses data pada tipe konkret yang mendasarinya. 