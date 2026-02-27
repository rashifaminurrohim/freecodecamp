/**
 * =========================================================
 * FALSY REMOVER (BOUNCER FUNCTION)
 * =========================================================
 *
 * PROBLEM:
 * Implement a function that removes all falsy values
 * from an array.
 *
 * Falsy values in JavaScript:
 * - false
 * - null
 * - 0
 * - ""
 * - undefined
 * - NaN
 *
 * Example:
 * bouncer([7, "ate", "", false, 9])
 * → [7, "ate", 9]
 *
 *
 * ---------------------------------------------------------
 * USER STORIES:
 *
 * 1. The function must be named `bouncer`.
 * 2. It must take an array as argument.
 * 3. It must return a NEW array.
 * 4. It must NOT mutate the original array.
 *
 */


/**
 * =========================================================
 * PSEUDOCODE
 * =========================================================
 *
 * function bouncer(arr):
 *   create empty result array
 *
 *   for each element in arr:
 *     if element is truthy:
 *       push element into result
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
 * - Iterate manually using for loop
 * - Check truthiness directly
 * - Push only truthy values
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const bouncer = (arr) => {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      result.push(arr[i]);
    }
  }

  return result;
};


// Test Case
console.log(bouncer(["a", "b", "c", false, ""]));
// Expected: ["a", "b", "c"]



/**
 * =========================================================
 * 2️⃣ OPTIMIZED VERSION (FILTER + Boolean)
 * =========================================================
 *
 * Using Array.prototype.filter()
 *
 * Boolean(value) converts each element to true/false.
 * Only truthy values will pass.
 */

const bouncerFilter = (arr) =>
  arr.filter(value => Boolean(value));


// Even shorter version:
const bouncerShort = (arr) =>
  arr.filter(Boolean);


// Test Cases
console.log(bouncerFilter([7, "ate", "", false, 9]));
console.log(bouncerShort([false, null, 0, NaN, undefined, ""]));
console.log(bouncerShort([null, NaN, 1, 2, undefined]));
console.log(bouncerShort([]));



/**
 * =========================================================
 * COMPLEXITY ANALYSIS
 * =========================================================
 *
 * Let n = array length.
 *
 * - Loop / filter must inspect every element.
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 * (because we create a new array)
 *
 *
 * Why can't it be faster?
 * Because we must check every element at least once.
 *
 */


/**
 * =========================================================
 * IMPORTANT NOTES
 * =========================================================
 *
 * 1. The original array is NOT mutated.
 *    filter() always returns a new array.
 *
 * 2. Boolean(value) works because:
 *    Boolean(false)      → false
 *    Boolean(0)          → false
 *    Boolean("")         → false
 *    Boolean(null)       → false
 *    Boolean(undefined)  → false
 *    Boolean(NaN)        → false
 *
 * 3. This is a clean and idiomatic JavaScript solution.
 *
 */


/**
 * =========================================================
 * ENGINEERING INSIGHT
 * =========================================================
 *
 * Best Production Version:
 *
 * const bouncer = arr => arr.filter(Boolean);
 *
 * Why?
 * - Clean
 * - Readable
 * - Functional
 * - No mutation
 *
 */
