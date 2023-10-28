console.log("Vendi Homework")

// Variable
const suhu = 35;

// Hitung Suhu Kondisi Air
const condition = suhu <= 0 ? "beku" : suhu >= 1 && suhu <= 100 ? "cair" : suhu >=101 && suhu <=500 ? "uap" : "tidak terdefinisi";

//Tampilkan Kondisi
console.log(condition);
