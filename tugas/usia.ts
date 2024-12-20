// CEK TIPE USIA
const tipeUmur = (umur: number): void => {
  if (umur < 0) {
    console.log("Usia tidak valid");
  } else if (umur <= 12) {
    console.log("Anak-anak");
  } else if (umur <= 17) {
    console.log("Remaja");
  } else if (umur <= 64) {
    console.log("Dewasa");
  } else {
    console.log("Lansia");
  }
};

tipeUmur(5);

// CEK HASIL MINUMAN
const getMinum = (angka: number): string => {
  let minuman: string;

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

const deretFibo = (jumlah: number): number[] => {
  const deret: number[] = [];
  let a = 0;
  let b = 1;
  let awal = 0;

  while (awal < jumlah) {
      deret.push(a); 
      const temp = a; 
      a = b;
      b = temp + b;
      awal++;
  }

  return deret;
}
console.log(deretFibo(10));



