/*
=========================================
🧠 JAVASCRIPT PROBLEM SOLVING TEMPLATE
=========================================
*/


/*
=========================================
📝 PROBLEM
=========================================
Deskripsi (tulis ulang dengan bahasamu sendiri):
Buat fungsi yang menerima satu array dan beberapa nilai tambahan.
Fungsi harus menghapus semua elemen dalam array yang cocok dengan
nilai tambahan tersebut, lalu mengembalikan array baru.

Input:
- Array pertama (arr)
- Satu atau lebih nilai untuk dihapus (...values)

Output:
- Array baru tanpa nilai yang harus dihapus

Constraints / Rules:
• Harus menerima jumlah argumen yang tidak terbatas
• Tidak boleh mengubah array asli
• Harus mengembalikan array baru
*/


/*
=========================================
🥇 PSEUDOCODE
=========================================
1. Ambil array pertama
2. Ambil semua nilai yang ingin dihapus (...values)
3. Loop array pertama menggunakan filter
4. Ambil elemen yang TIDAK termasuk dalam values
5. Return hasil filter
*/


/*
=========================================
🥈 MY IMPLEMENTATION
=========================================
*/

function destroyer(arr, ...values) {
  const result = arr.filter(el => !values.includes(el))
  return result;
}


/*
Time Complexity: O(n²)
Space Complexity: O(n)
*/


/*
=========================================
🥉 OPTIMIZATION / REFACTOR
=========================================
*/

function optimizedDestroyer(arr, ...values) {
  const removeSet = new Set(values);
  return arr.filter(el => !removeSet.has(el));
}


/*
Time Complexity: O(n)
Space Complexity: O(n)
*/


/*
=========================================
TEST CASES
=========================================
*/

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// [1, 1]

console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// [1, 5, 1]

console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5));
// [1]

console.log(destroyer([2, 3, 2, 3], 2, 3));
// []

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
// ["hamburger"]


/*
=========================================
🔁 REFLECTION
=========================================
Bug / kesalahan yang sempat terjadi:
- Memfilter array yang salah (values bukan arr)

Kenapa bug itu terjadi:
- Salah memahami arah filtering

Pelajaran utama hari ini:
- Untuk menghapus nilai → filter array utama
- Gunakan rest parameter (...values)