<02> Version Control And Branch Management (GIT)

RESUME

Dalam materi hariini mempelajari :
  1. Sejarah mengenai version control branch managemen
  2. Setting up and push GIT
  3. Branch and Konflik (revisi kesalahan)
  
Version Control And Branch Management (GIT)

Git adalah version control system yang digunakan para developer untuk mengembangkan software secara bersama-bersama. Fungsi utama git yaitu mengatur versi dari source code program anda dengan mengasih tanda baris dan code mana yang ditambah atau diganti. Git ini sebenernya memudahkan programmer untuk mengetahui perubahan source codenya daripada harus membuat file baru. Selain itu, dengan git kita tak perlu khawatir code yang kita kerjakan bentrok, karena setiap developer bias membuat branch sebagai workspacenya.Fitur yang tak kalah keren lagi, pada git kita bisa memberi komentar pada source code yang telah ditambah/diubah, hal ini mempermudah developer lain untuk tahu  kendala apa yang dialami developer lain. 

Setting up dan push

Untuk mengetahui bagaimana menggunakan git, berikut perintah-perintah dasar git:

1. Git init 	: untuk membuat repository pada file lokal yang nantinya ada folder .git
2. Git status 	: untuk mengetahui status dari repository lokal
3. Git add 		: menambahkan file baru pada repository yang dipilih
4. Git commit	: untuk menyimpan perubahan yang dilakukan, tetapi tidak ada perubahan pada remote repository.
5. Git push		: untuk mengirimkan perubahan file setelah di commit ke remote repository.
6. Git branch	: melihat seluruh branch yang ada pada repository
7. Git checkout	: menukar branch yang aktif dengan branchyang dipilih
8. GIt merge	: untuk menggabungkan branch yang aktif dan branch yang dipilih
9. Git clone	: membuat Salinan repository lokal

Branch and Konflik (revisi kesalahan)

Konflik integrasi antar branch kerap terjadi ketika ada dua perubahan di file yang sama di branch berbeda di saat yang bersamaan.
Kita perlu membuka file tersebut dan membandingkan perubahan dari branch berbeda sebelum akhirnya memutuskan untuk menentukan perubahan mana yang akan diterima.
perintah untuk menyelesaikan konflik yaitu ;
1. Git branch	: melihat seluruh branch yang ada pada repository
2. Git checkout	: menukar branch yang aktif dengan branchyang dipilih
3. GIt merge	: untuk menggabungkan branch yang aktif dan branch yang dipilih
