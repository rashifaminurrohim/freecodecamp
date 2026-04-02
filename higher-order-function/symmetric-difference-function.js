/*
=========================================
🧠 JAVASCRIPT PROBLEM SOLVING TEMPLATE
=========================================

📝 PROBLEM
Compare two arrays and return a new array with any items only found 
in one of the two given arrays, but not both (symmetric difference).

Input:
- Two arrays (arrA, arrB)

Output:
- New array containing values that exist in only one array

Constraints:
- Must use filter()
- Return [] if no difference
*/




/*
=========================================
🥇 PSEUDOCODE
=========================================
1. Combine both arrays
2. Find duplicated values
3. Store duplicated values
4. Filter combined array removing duplicates
5. Return result
*/




/*
=========================================
🥈 BRUTE FORCE IMPLEMENTATION
=========================================
*/

function diffArray(arrA, arrB) {
  const arrAB = [...arrA, ...arrB];
  const same = arrAB.filter((el, i) => arrAB.indexOf(el) !== i);
  const diffArr = arrAB.filter((el) => !same.includes(el));
  return diffArr;
}

console.log(
  diffArray(
    ["diamond", "stick", "apple"],
    ["stick", "emerald", "bread"]
  )
);




/*
Time Complexity: O(n²)
Space Complexity: O(n)
*/




/*
=========================================
🥉 OPTIMIZATION / REFACTOR
=========================================
*/

function optimizedDiffArray(arrA, arrB) {
  const onlyInA = arrA.filter(el => !arrB.includes(el));
  const onlyInB = arrB.filter(el => !arrA.includes(el));
  return [...onlyInA, ...onlyInB];
}

console.log(
  optimizedDiffArray(
    ["diamond", "stick", "apple"],
    ["stick", "emerald", "bread"]
  )
);




/*
Time Complexity: O(n²)
Space Complexity: O(n)
*/




/*
=========================================
🔁 REFLECTION
=========================================
Bug:
- Bisa lupa symmetric harus dua arah

Why:
- Hanya filter satu array

Lesson:
- symmetric difference = (A - B) + (B - A)

Can I solve again tomorrow?
- Yes, using filter logic
*/