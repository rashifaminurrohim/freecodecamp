/**
 * ============================================================
 *  PROBLEM - IMPLEMENT A SORTED INDEX FINDER
 * ============================================================
 *
 * Objective:
 * Create a function that returns the lowest index at which a value
 * should be inserted into an array once it has been sorted
 * in ascending order.
 *
 * Input:
 * - arr (Array of numbers)
 * - num (Number to insert)
 * 
 * Output:
 * - Number (lowest index where num should be inserted)
 *
 * Example:
 * getIndexToIns([1, 2, 3, 4], 1.5) → 1
 * getIndexToIns([3, 10, 5], 3) → 0
 * getIndexToIns([3, 10, 5], 11) → 3
 *
 * ============================================================
 */


/*  ============================================================
    MY CODE
    ============================================================

    PSEUDO:
    1. Sort the array in ascending order.
    2. Use findIndex to find the first value where num <= value.
    3. If such index exists (>= 0), return it.
    4. If not found (findIndex returns -1), return array length.
*/

const getIndexToIns = (arr, num) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex((value) => num <= value);

  if (index >= 0) {
    return index;
  } else {
    return sortedArr.length;
  }
};



/*  ============================================================
      OPTIMIZED CODE
    ============================================================

    Improvement:
    - Remove unnecessary if-else.
    - Directly handle the -1 case with ternary or logical fallback.
    - Make it more declarative.
*/

const getIndexToInsOptimized = (arr, num) => {
  const sortedArr = arr.sort((a, b) => a - b);
  const index = sortedArr.findIndex(value => num <= value);

  return index === -1 ? sortedArr.length : index;
};

// More Functional
// const getIndexToIns = (arr, num) =>
//   arr
//     .sort((a, b) => a - b)
//     .findIndex(value => num <= value)
//     .let(index => index === -1 ? arr.length : index); // pseudo functional idea




/* ============================================================
    COMPLEXITY ANALYSIS
  ============================================================

  My Code:
  - Sorting: O(n log n)
  - findIndex: O(n)
  - Total: O(n log n)

  Optimized Version:
  - Sorting: O(n log n)
  - findIndex: O(n)
  - Total: O(n log n)

  Note:
  The dominant operation is sorting (O(n log n)).
  findIndex runs linearly, but does not exceed sorting complexity.
*/


/* ============================================================
  REFLECTION
  ============================================================

  - Initial mistake:
    Feeling that using if-else here is "oversimplification"
    due to lack of design confidence. Actually, the logic
    is correct — it's just slightly verbose.

  - Key Insight:
    findIndex returns -1 when not found.
    That case logically means num is greater than
    all elements → insert at the end → return length.

  - Next Level Insight:
    Instead of thinking in terms of "handle error",
    think in terms of "define all possible states".
    There are only two:
      1. Found suitable index
      2. Not found → append at end

    When you model the states clearly, the code becomes simple.

  - JavaScript Concept Reinforced:
    - Array.prototype.sort()
    - Array.prototype.findIndex()
    - Comparator functions
    - Understanding return value of higher-order functions
    - Handling sentinel values (-1)

  ============================================================
*/
