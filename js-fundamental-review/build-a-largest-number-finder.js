/**
 * ============================================================
 * 🧠 PROBLEM - LARGEST NUMBER IN SUB-ARRAY
 * ============================================================
 *
 * Objective:
 * Create a function that returns an array containing
 * the largest number from each sub-array.
 *
 * Input:
 * An array of arrays of numbers.
 *
 * Output:
 * A new array containing the largest number from each sub-array.
 *
 * Example:
 * Input:
 * [
 *   [4, 5, 1, 3],
 *   [13, 27, 18, 26],
 *   [32, 35, 37, 39],
 *   [1000, 1001, 857, 1]
 * ]
 *
 * Output:
 * [5, 27, 39, 1001]
 * ============================================================
 */


/*  ============================================================
    🥇 APPROACH 1 - BRUTE FORCE (Imperative Thinking)
    ============================================================

    PSEUDO:
    1. Initialize result array.
    2. Loop through each sub-array.
    3. Assume first element is the largest.
    4. Compare each element with current largest.
    5. Update largest if bigger value found.
    6. Push largest into result array.
    7. Return result array.
*/

const largestOfAll = (arr) => {
  let largestArr = [];
  let largestValue;

  for (let i = 0; i < arr.length; i++) {
    largestValue = arr[i][0];

    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largestValue) {
        largestValue = arr[i][j];
      }
    }

    largestArr.push(largestValue);
  }

  return largestArr;
};

console.log(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);



/*  ============================================================
    🥉 APPROACH 2 - OPTIMIZED (Declarative Thinking)
    ============================================================

  Core Idea:
  - Use built-in JavaScript methods.
  - Transform each sub-array into its maximum value.
  - Avoid manual index management.
  - Use spread operator with Math.max.
*/

const largestOfAlll = (arr) =>
  arr.map((subArr) => Math.max(...subArr));

console.log(
  largestOfAlll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);



/* ============================================================
  📊 COMPLEXITY ANALYSIS
  ============================================================

  Brute Force:
  - Time Complexity: O(n × m)
    (n = number of sub-arrays,
    m = average length of each sub-array)
  - Space Complexity: O(n)

  Optimized Version:
  - Time Complexity: O(n × m)
  - Space Complexity: O(n)

  Note:
  The time complexity remains the same because
  every element still needs to be visited at least once.
  The optimization improves readability and abstraction,
  not asymptotic complexity.
  ============================================================
*/


/* ============================================================
  🔁 REFLECTION
  ============================================================

  - Initial mistake: 
    initializing largestValue with 0 caused incorrect result for negative numbers.
    comparing neighbors (arr[i][j+1])

  - Key Insight:
    Track "current best" instead of comparing neighbors.

  - Next Level Insight:
    Move from imperative loops to declarative array methods
    (map + Math.max + spread operator).

  - JavaScript Concept Reinforced:
    - Spread operator (...)
    - map()
    - Hoisting difference (function vs const arrow function)

  ============================================================
*/
