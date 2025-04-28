const readline = require('readline-sync');

function kategori(dataUsia){
    if(dataUsia <= 12){
        return 'Anak-anak';
    }
    else if(dataUsia >= 13 && dataUsia <= 17){
        return 'Remaja';
    }
    else if(dataUsia >= 18 && dataUsia <= 59){
        return 'Dewasa';
    }
    else if(dataUsia >59){
        return 'Lansia';
    }
}

var dataUsia = [];
console.log("Kategori Usia");
console.log("=====================================");
let countAnak = 0, countRemaja = 0, countDewasa = 0, countLansia = 0;
let jumlahData = parseInt(readline.question("Masukkan jumlah data yang akan di input: "));
for (let i=0; i<jumlahData; i++){
    let inputData = parseInt(readline.question(`Masukkan data usia ke-${i+1}: `));
    dataUsia.push(inputData);
}
for (let j=0; j<=dataUsia.length; j++){
    let cekUsia = kategori(dataUsia[j]);

    if (cekUsia === 'Anak-anak'){
        countAnak++;
    }
    else if (cekUsia === 'Remaja'){
        countRemaja++;
    }
    else if (cekUsia === 'Dewasa'){
        countDewasa++;
    }
    else if (cekUsia === 'Lansia'){
        countLansia++;
    }
}
console.log("=====================================");
console.log("Data Usia : "+dataUsia);
console.log("Jumlah total data : "+dataUsia.length);
console.log("Anak-anak : "+countAnak+" orang");
console.log("Remaja : "+countRemaja+" orang");
console.log("Dewasa : "+countDewasa+" orang");
console.log("Lansia : "+countLansia+" orang");