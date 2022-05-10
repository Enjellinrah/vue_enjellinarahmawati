//jawaban no 1
console.log(lengkap_arr[2]); //jawaban nomor 1 bagian a menghasilkan jawaban budi
// nomor 1 bagian b yaitu mengganti if (terdaftar === true) menjadi if (terdaftar === false)
// nomor 1 bagian c yaitu menambahkan perkenalan();


//jawaban no 2
//a. karena pada fariabel terdaftar pada line ke 4, yang didefinisikan atau dideklarasikan mempunyai value false sedangkan pada line 21 value pada variabel terdaftar dibandingkan dengan true sehingga hasil dari perbandingan tersebut tidak kenampilkan output.
//b. karena tipe data antara variabel nama dan b tidaklah sama dan cons tidak dapat reasigment
//c. tidak dapat karena pada baris 28 variabel asal hanya ada pada function perkenalan ().


//jawaban no 3
const foo = ['Budi', 'Sita', 'Ayu'];

const [a, b, c] = foo;

console.log("variabel a adalah " + a);
console.log("variabel b adalah " + b);
console.log("variabel c adalah " + c);

//jawaban no 4
let bdays = ['10-17', '05-19', '20-19'];
let bDaysSwap = bdays.map((x) => x.receplace('-', '/'));
console.log(bDaysSwap);

//jawaban no 5
let value = [1, 2, 3, 4, 5, 6];

let multiplied = value.map(x => x * 2);

console.log(multiplied);

//jawaban no 6
let arr = [1.5, 2.56, 5.1, 12.33];

let toInteger = arr.map(x => Math.round(x));

console.log(toInteger);