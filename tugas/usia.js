// CEK TIPE USIA
var tipeUmur = function (umur) {
    if (umur < 0) {
        console.log("Usia tidak valid");
    }
    else if (umur <= 12) {
        console.log("Anak-anak");
    }
    else if (umur <= 17) {
        console.log("Remaja");
    }
    else if (umur <= 64) {
        console.log("Dewasa");
    }
    else {
        console.log("Lansia");
    }
};
tipeUmur(5);
// CEK HASIL MINUMAN
var getMinum = function (angka) {
    var minuman;
    switch (angka) {
        case 1:
            minuman = "teh";
            break;
        case 2:
            minuman = "kopi";
            break;
        case 3:
            minuman = "jus";
            break;
        case 4:
            minuman = "air mineral";
            break;
        default:
            minuman = "Pilihan tidak valid";
            break;
    }
    return minuman;
};
console.log(getMinum(2));
var deretFibo = function (jumlah) {
    var deret = [];
    var a = 0;
    var b = 1;
    var awal = 0;
    while (awal < jumlah) {
        deret.push(a);
        var temp = a;
        a = b;
        b = temp + b;
        awal++;
    }
    return deret;
};
console.log(deretFibo(10));
