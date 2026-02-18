/**
 * ==========================================
 * PROBLEM
 * ==========================================
 *
 * Create a function that:
 * - Receives an array and a callback function
 * - Returns the FIRST element in the array
 *   that makes the callback return a truthy value
 *
 * If no element satisfies the condition,
 * the function should return undefined.
 *
 * This behavior is similar to Array.prototype.find()
 */


/**
 * ==========================================
 * PSEUDOCODE
 * ==========================================
 *
 * function findElement(arr, func):
 *   for each element in arr:
 *     if func(element) is truthy:
 *       return element
 *   return undefined
 */


/**
 * ==========================================
 * BRUTE FORCE IMPLEMENTATION
 * ==========================================
 *
 * Approach:
 * - Iterate manually using for...of
 * - Check each element using the callback
 * - Stop immediately when condition is met (early return)
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const findElement = (arr, func) => {
  for (let element of arr) {
    if (func(element)) {
      return element; // early exit when condition is true
    }
  }
  return undefined; // explicitly return if nothing found
};

console.log(
  findElement(
    [1, 3, 5, 8, 9, 10],
    function (num) {
      return num % 2 === 0;
    }
  )
);
// Expected Output: 8


/**
 * ==========================================
 * OPTIMIZED VERSION (BUILT-IN METHOD)
 * ==========================================
 *
 * Approach:
 * - Use Array.prototype.find()
 * - find internally does the same iteration logic
 * - Returns the first element that satisfies the condition
 *
 * Cleaner, more readable, and idiomatic JavaScript
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(1)
 */

const findElementos = (arr, func) =>
  arr.find((element) => func(element));

console.log(
  findElementos(
    [1, 3, 5, 8, 9, 10],
    function (num) {
      return num % 2 === 0;
    }
  )
);
// Expected Output: 8


/**
 * ==========================================
 * KEY CONCEPT
 * ==========================================
 *
 * - The callback must return a truthy or falsy value.
 * - find() does NOT return true/false.
 * - It returns the actual element that passes the test.
 *
 * Internally, find behaves conceptually like:
 *
 * for (let element of arr) {
 *   if (callback(element)) {
 *     return element;
 *   }
 * }
 * return undefined;
 *
 */
