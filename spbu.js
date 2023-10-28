console.log("Vendi Homework")

// Variable
const plat = ("hitam");
const cc = ("2000");

// Hitung jenis BBM
const jenisBBM = (plat === "kuning" || plat === "motor") ? "BBM subsidi" :
    (cc < 1500 ? "Pertamax" : "pertamax turbo");

// Tampilkan jenis BBM
console.log(jenisBBM);
