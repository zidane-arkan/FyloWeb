// let h2 = document.querySelectorAll('h2')
// h2.forEach((e) => {
//   e.innerHTML = 'Hello';
// });

//Function
// const FungsiPangkat = (nilai,pangkat) => {
//   let hasil = 1;
//   for (let p = 0; p < pangkat; p++) {
//     hasil *= nilai;
//   }
//   return hasil;
// };

// console.log(FungsiPangkat(8,7));


// let bigNumber = 0e9;
// let floatNumber = 3.45;
// let floatBig = 3.45e3;

let a = 0.7;
let b = parseInt(a);
console.log(a);

let nama = "18";
let cek = isNaN(nama);
let ubahNama;
if (cek === false) {
    ubahNama = Number(nama);
    let kalimat = `Halo nama saya ${nama} saya berumur ${ubahNama}`;
    console.log(kalimat);
} else {
    console.log(` ${nama} Bukan angka`);
}

