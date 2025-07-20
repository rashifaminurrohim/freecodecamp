// https://youtu.be/a37wgCcBI4A?si=s6dLxI-azPOGjw9W

const angka = [-1, 9, 8, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3
const angka3 = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    angka3.push(angka[i]); 
  } 
}
console.log(angka3);

// filter
const filterAngka = angka.filter(a => a >= 3)
console.log(filterAngka);

// map
// mengalikan elemen array dnegan 2
const mapAngka = angka.map(a => { 
 return a * 2 
});
console.log(mapAngka);

// reduce
// menjumlahkan seluruh elemen array
const reduceAngka = angka.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
});
console.log(reduceAngka);

// method chaining
// Cari angka > 5, kalikan 3, jumlahkan
const chainingAngka = angka.filter(a => a > 5)
  .map(a => a * 3)
  .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(chainingAngka);