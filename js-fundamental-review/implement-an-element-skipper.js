/**
 * ============================================================
 *  PROBLEM - Implement an Element Skipper
 * ============================================================
 *
 * Objective:
 * Create a function that removes elements from the beginning
 * of an array until a given test function returns true.
 *
 * Input:
 * - arr (Array)
 * - func (Function) -> returns boolean
 * 
 * Output:
 * - A new array containing remaining elements starting from
 *   the first element that satisfies func.
 * - If no element satisfies the condition, return [].
 *
 * Example:
 * dropElements([1, 1, 1, 2, 1, 1, 1], n => n === 2)
 * → [2, 1, 1, 1]
 *
 * ============================================================
 */


/*  ============================================================
    BRUTE FORCE 
    ============================================================

    PSEUDO:
    1. While array is not empty AND first element does NOT pass test
    2. Remove first element using shift()
    3. Repeat until condition satisfied
    4. Return remaining array
*/

const dropElementsBruteForce = (arr, func) => {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
};


/*  ============================================================
      OPTIMIZED CODE
    ============================================================

    Approach:
    - Find first index where func returns true
    - Use slice to return remaining elements
    - If no index found, return []
*/

const dropElementsOptimized = (arr, func) => {
  const index = arr.findIndex(func);
  return index === -1 ? [] : arr.slice(index);
};


/* ============================================================
    COMPLEXITY ANALYSIS
  ============================================================

  Brute Force:
  - Time Complexity: O(n^2) worst case
    (Because shift() reindexes the array every time)
  - Space Complexity: O(1)

  Optimized Version:
  - Time Complexity: O(n)
    (findIndex runs once)
  - Space Complexity: O(n)
    (slice creates new array)

  Note:
  Optimized version is more efficient and does not mutate
  the original array.

  ============================================================
*/


/* ============================================================
  REFLECTION
  ============================================================

  - Initial mistake:
    Using shift() without checking array length first,
    which could cause infinite loop or undefined access.

  - Key Insight:
    Instead of repeatedly mutating the array,
    it is better to locate the starting index first.

  - Next Level Insight:
    Prefer non-mutating solutions (slice + findIndex)
    to maintain functional programming style.

  - JavaScript Concept Reinforced:
    - Higher-order functions
    - Array.findIndex()
    - Array.slice()
    - Mutation vs immutability trade-off

  ============================================================
*/


// Example Test
console.log(dropElementsBruteForce([1, 2, 3, 4], n => n > 5)); // []
console.log(dropElementsOptimized([1, 2, 3, 9, 2], n => n > 2)); // [3, 9, 2]
