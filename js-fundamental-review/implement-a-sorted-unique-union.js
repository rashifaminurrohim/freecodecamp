/**
 * =========================================================
 * UNIQUE SORTED UNION
 * =========================================================
 *
 * PROBLEM:
 * Implement a function that returns a new array containing
 * unique values from two or more arrays.
 *
 * The values must:
 * - Be unique (no duplicates)
 * - Preserve the order in which they first appear
 *
 * Example:
 * uniteUnique([1, 2, 4], [2, 3, 5])
 * → [1, 2, 4, 3, 5]
 *
 *
 * ---------------------------------------------------------
 * USER STORIES:
 *
 * 1. Function name must be uniteUnique.
 * 2. It must accept two or more arrays.
 * 3. It must return a NEW array.
 * 4. It must preserve insertion order.
 *
 */


/**
 * =========================================================
 * PSEUDOCODE
 * =========================================================
 *
 * function uniteUnique(...arrays):
 *   create empty result array
 *
 *   for each array in arrays:
 *     for each element in array:
 *       if element not in result:
 *         push element into result
 *
 *   return result
 *
 */


/**
 * =========================================================
 * 1️⃣ BRUTE FORCE IMPLEMENTATION
 * =========================================================
 *
 * Approach:
 * - Use rest parameter to collect arrays
 * - Nested loops
 * - Use includes() to prevent duplicates
 *
 * Time Complexity:
 * O(n²) in worst case
 * (because includes() is O(n) inside a loop)
 *
 * Space Complexity:
 * O(n)
 */

const uniteUnique = (...args) => {
  const result = [];

  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }

  return result;
};


// Test Case
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// Expected: [1, 3, 2, 5, 4]



/**
 * =========================================================
 * 2️⃣ OPTIMIZED VERSION (USING Set)
 * =========================================================
 *
 * Set automatically removes duplicates
 * and preserves insertion order.
 *
 * Steps:
 * - Flatten arrays
 * - Pass into Set
 * - Convert back to array
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 */

const uniteUniqueSet = (...arrays) => {
  return [...new Set(arrays.flat())];
};


// Test Cases
console.log(uniteUniqueSet([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUniqueSet([1, 2, 3], [5, 2, 1]));
console.log(uniteUniqueSet([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUniqueSet([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));



/**
 * =========================================================
 * 3️⃣ FUNCTIONAL VERSION (REDUCE)
 * =========================================================
 *
 * More functional style.
 */

const uniteUniqueReduce = (...arrays) =>
  arrays
    .flat()
    .reduce((acc, value) => {
      if (!acc.includes(value)) acc.push(value);
      return acc;
    }, []);


/**
 * =========================================================
 * COMPLEXITY ANALYSIS
 * =========================================================
 *
 * Let n = total number of elements across all arrays.
 *
 * Brute Force:
 * - Nested iteration
 * - includes() inside loop
 * → Worst case O(n²)
 *
 * Set Version:
 * - flat() → O(n)
 * - Set construction → O(n)
 * → Overall O(n)
 *
 * Therefore:
 * The Set version is more efficient and cleaner.
 *
 */


/**
 * =========================================================
 * ENGINEERING INSIGHT
 * =========================================================
 *
 * Best Production Version:
 *
 * const uniteUnique = (...arrays) =>
 *   [...new Set(arrays.flat())];
 *
 * Why?
 * - Clean
 * - Declarative
 * - Preserves order
 * - Linear time complexity
 *
 */
