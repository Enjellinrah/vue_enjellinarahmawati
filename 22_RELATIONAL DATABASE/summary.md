<h1>22_Relational Database</h1>
<h2>Resume</h2>
Dalam materi ini mempelajari :
<h2>Database</h2>
<h3>Pengertian Database</h3>
Database adalah sekumpulan data yang terorganisir.
<h3>Account model :</h3>
<li>Display Name</li>
<li>Username</li>
<li>Bio</li>
<li>Location</li>
<li>Join Date</li>
<h3>Database Relationship</h3>
<li>One to one</li>
<li>One to many</li>
<li>Many to many</li>
<h3>Relational Database Management Systems</h3>
Software yang menggunakan Relational Database Model sebagai dasarnya contoh :MySQL.
<h3>Jenis perintah SQL</h3>
DDL, DML, DCL.
<h3>Tipe Data</h3>
Num, Huruf, Date.
<h4>DML</h4>
Perintah yang digunakan untuk memanipulasi data dalam tabel dari suatu database.
<h5>Statement Operation</h5>
<li>INSERT</li>
<li>SELECT</li>
<li>UPDATE/li>
<li>DELETE</li>
<h4>DML Statement</h4>
<li>Like/between</li>
<li>And/or</li>
<li>Order by</li>
<li>Limit</li>
<h3>Join</h3>
Sebuah klausa untuk mengkombinasikan record dari dua atau lebih tabel.
<h3>Join Standar SQL Ansi</h3>
Inner, Left, Right.
<h4>Inner Join</h4>
Inner join akan mengembalikan baris-baris dari dua tabel atau lnebih yang memenuhi syarat.
<h4>Left Join</h4>
Left join akan mengembalikan seluruh baris dari tabel disebelah kiri yang dikenai kondisi ON dan hanya baris dari tabel disebelah kanan yang memenuhi kondisi join.
<h4>Right Join</h4>
Right join akan mengembalikan semua baris dari tabel sebelah kanan yang dikenai kondisi ON dengan data dari tabel sebelah kiri yang memenuhi kondisi join. Teknik ini merupakan kebalikan dari left join. 
<h3>UNION</h3>
Ada hal yang perlu diperhatikan dari union adalah jumlah field yang dikeluarkan atau dipanggil harus sama. 
<h3>AGGREGATE</h3>
<li>Fungsi Agregasi</li>
Fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal. 
<h4> Fungsi Agregasi SQL</h4>
<li>MIN : fungsi dimana nilai beberapa baris dikelompokkan bersama untuk membentuk nilai ringkasan tunggal</li>
<li>MAX : digunakan untuk mendapatkan nilai maksimal atau terbesar dari sebuah data atau record di tabel</li>
<li>SUM : digunakan untuk mendapatkan jumlah total nilai dari sebuah data atau record di tabel </li>
<li>AVG : digunakan untuk mencari nilai rata – rata dari sebuah data atau record di tabel</li>
<li>COUNT : digunakan untuk mencari jumlah dari sebuah data atau record di tabel</li>
<li>HAVING : digunakan untuk menyeleksi data berdasarkan kriteria berupa fungsi aggregat</li>
<h3>SUBQUERY</h3>
Adalah query di dalam query SQL lain. Biasanya digunakan mengembalikan data yang akan digunakan dalam query utama sebagai syarat untuk lebih membatasi data yang akan diambil.
<h3>Peraturan</h3>
<li>Harus tertutup dalam tanda kurung</li>
<li>Sebuah subquery hanya dapat memiliki satu kolom pada klausa SELECT kecuali beberapa kolom yang di query utama untuk subquery untuk membandingkan kolom yang dipilih</li>
<li>Subqueries yang kembali lebih dari satu baris hanya dapat digunakan dengan beberapa value operator, seperti operator IN</li>
<li>Daftar SELECT tidak bisa menyertakan referensi ke nilai – nilai yang mengevaluasi ke BLOB, ARRAY, CLOB, atau NCLOB</li>
<li>Sebuah subquery tidak dapat segera tertutup dalam fungsi set</li>
<h3>FUNCTION</h3>
Sebuah kumpulan statement yang akan mengembalikan sebuah nilai balik pada pemanggilnya.