const readline = require('readline-sync');

function penambahan(a,b){
    let c=a+b;
    return c;
}

function pengurangan(a,b){
    let c=a-b;
    return c;
}

function perkalian(a,b){
    let c=a*b;
    return c;
}

function pembagian(a,b){
    let c=a/b;
    return c;
}

let hasil;

console.log("Kalkulator Konsol");
console.log("=================================");
console.log("1. Penambahan");
console.log("2. Pengurangan");
console.log("3. Perkalian");
console.log("4. Pembagian");
console.log("=================================");
let pilihan = parseInt(readline.question("Masukkan pilihan: "));
let a = parseFloat(readline.question("Masukkan angka pertama: "));
let b = parseFloat(readline.question("Masukkan angka kedua: "));
console.log("=================================");

switch (pilihan) {
    case 1:
        hasil = penambahan(a, b);
        console.log(`${a}+${b} = ${hasil}`);
        break;
    case 2:
        hasil = pengurangan(a, b);
        console.log(`${a}-${b} = ${hasil}`);
        break;
    case 3:
        hasil = perkalian(a, b);
        console.log(`${a}*${b} = ${hasil}`);
        break;
    case 4:
        hasil = pembagian(a, b);
        console.log(`${a}/${b} = ${hasil}`);
        break;
  }