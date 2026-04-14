/*
=========================================
🧠 JAVASCRIPT PROBLEM SOLVING TEMPLATE
=========================================
*/


/*
=========================================
📝 PROBLEM
=========================================
Deskripsi :
Diberikan sebuah array berisi object dan sebuah object sumber (src).
Kita harus mengembalikan array baru yang hanya berisi object-object
yang memiliki SEMUA pasangan key-value yang ada di src.

Artinya:
- Setiap key di src harus ada di object
- Value-nya juga harus sama

Input:
- Array of objects (arr)
- Object source (src)

Output:
- Array baru berisi object yang match semua key-value

Constraints / Rules:
• Harus match SEMUA key di src
• Jika tidak ada yang cocok → return []
• Tidak boleh mengubah array asli
*/


/*
=========================================
🥇 PSEUDOCODE
=========================================
1. Loop setiap object dalam array
2. Untuk setiap object, cek semua key di src
3. Jika ada key yang tidak cocok → skip object
4. Jika semua cocok → masukkan ke hasil
5. Return hasil
*/


/*
=========================================
🥈 BRUTE FORCE IMPLEMENTATION
=========================================
*/

function solution(arr, src) {
  const result = arr.filter(obj => {
    for (let key in src) {
      if (obj[key] !== src[key]) {
        return false;
      }
    }
    return true;
  });

  return result;
}


/*
Time Complexity: O(n * m)
n = jumlah object
m = jumlah key di src

Space Complexity: O(n)
*/


/*
=========================================
🥉 OPTIMIZATION / REFACTOR
=========================================
*/

function optimizedSolution(arr, src) {
  const keys = Object.keys(src);

  return arr.filter(obj =>
    keys.every(key => obj[key] === src[key])
  );
}


/*
Time Complexity: O(n * m)
Space Complexity: O(n)

Catatan:
- Lebih readable
- Menggunakan every() → lebih deklaratif
*/


/*
=========================================
TEST CASES
=========================================
*/

console.log(
  solution(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" }
    ],
    { last: "Capulet" }
  )
);
// [{ first: "Tybalt", last: "Capulet" }]

console.log(
  solution(
    [{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }],
    { apple: 1 }
  )
);

console.log(
  solution(
    [
      { apple: 1, bat: 2 },
      { bat: 2 },
      { apple: 1, bat: 2, cookie: 2 }
    ],
    { apple: 1, bat: 2 }
  )
);

console.log(
  solution(
    [
      { apple: 1, bat: 2 },
      { apple: 1 },
      { apple: 1, bat: 2, cookie: 2 }
    ],
    { apple: 1, cookie: 2 }
  )
);

console.log(
  solution(
    [{ a: 1, b: 2, c: 3 }],
    { a: 1, b: 9999, c: 3 }
  )
);
// []



/*
=========================================
🔁 REFLECTION
=========================================
Bug / kesalahan yang sempat terjadi:
- Lupa bahwa harus match SEMUA key (bukan salah satu)

Kenapa bug itu terjadi:
- Salah memahami requirement (anggapnya OR, padahal AND)

Pelajaran utama hari ini:
- Pattern penting:
  "check all keys" → gunakan loop atau every()
- Object comparison harus per-key, bukan langsung compare object

*/