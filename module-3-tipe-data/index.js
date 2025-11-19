// Belajar Tipe Data pada JavaScript

/* TIpe data primitif pada JavaScript
*/
// String

let namaLengkap = `Aji Hadinata Nugraha`;
let domisili = "Jakart";
let pekerjaan = 'Programmer';

// Number
const umur = 30;
const tinggiBadan = 180;

// boolean
const isGraduated = true;


// undefined
let pacar;


// Null
const alamat = null;

// symbol
let garuda = Symbol('Garuda Indonesia');

// bigInt
const uangSaya = 234456435643564365n;


/* Tipe data Refrence Start */
// tipe data Object
const motorIndonesia = {
    merk : 'Suzuki',
    type : 'matic',
    tahun : 2025
};
// const output = motorIndonesia.merk + ' ' + motorIndonesia.type + ' ' + motorIndonesia.tahun;

// tipe data array
const sayuran = ['bayam', 'toge', 'tomat', 23];
// const output = sayuran[0][3]; // ambil karakter ke 3 dari array index ke 0


// tipe data function
function sayGoodbye() {
    return "Selamat tinggal Kekasih";
}

// const output = sayGoodbye
// console.log(output, typeof output);


/* Tipe data Refrence End */

/* Latihan */

let namaPengguna = "Joko";
let usiaPengguna = 25;
let isLulus = true;


tahunLahir = 2025 - usiaPengguna;
let pesanPerkenalan = `Halo, nama saya ${namaPengguna}. Saya berusia ${usiaPengguna} tahun. Tahun lahir saya adalah ${tahunLahir}. Apakah saya sudah lulus? ${isLulus}`;
console.log("Nama Pengguna : ", namaPengguna, typeof namaPengguna);
console.log("Usia Pengguna : ", usiaPengguna, typeof usiaPengguna);
console.log("Apakah sudah lulus : ", isLulus, typeof isLulus);
console.log("Tahun Lahir Pengguna : ", tahunLahir);
console.log(pesanPerkenalan);