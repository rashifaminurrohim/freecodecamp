/**
 * ============================================================
 *  PROBLEM - Odd Fibonacci Sum Calculator
 * ============================================================
 *
 * Objective:
 *   Build a function that returns the sum of all odd Fibonacci
 *   numbers that are less than or equal to a given positive integer.
 *
 * Input:
 *   A positive integer (num)
 * 
 * Output:
 *   A number representing the sum of all odd Fibonacci numbers
 *   less than or equal to num
 *
 * Example:
 *   sumFibs(10)
 *   Fibonacci sequence ≤ 10 → 0,1,1,2,3,5,8
 *   Odd Fibonacci numbers → 1,1,3,5
 *   Output → 10
 *
 * ============================================================
 */


/*  ============================================================
    BRUTE FORCE (Using Array Storage)
    ============================================================

    PSEUDO:
    1. Initialize empty array to store Fibonacci sequence
    2. Generate Fibonacci numbers up to num
    3. Filter odd numbers
    4. Sum the odd Fibonacci numbers
*/

const sumFibsBrute = (num) => {
  const fibs = [];
  let result = 0;

  for (let i = 0; i <= num; i++) {
    if (fibs.length < 2) {
      fibs.push(i);
    } else {
      const next = fibs[i - 2] + fibs[i - 1];
      if (next <= num) {
        fibs.push(next);
      }
    }
  }

  fibs.forEach((n) => {
    if (n % 2 !== 0) {
      result += n;
    }
  });

  return result;
};



/*  ============================================================
      OPTIMIZED CODE (Space Optimized - Rolling Variables)
    ============================================================

    Idea:
    - No array needed
    - Only store last two Fibonacci numbers
    - Add odd values directly during generation
*/

const sumFibs = (num) => {
  let prev = 0;
  let curr = 1;
  let result = 0;

  while (curr <= num) {
    if (curr % 2 !== 0) {
      result += curr;
    }

    const next = prev + curr;
    prev = curr;
    curr = next;
  }

  return result;
};



/*  ============================================================
      FURTHER OPTIMIZED (Generate Only Odd Fibonacci)
    ============================================================

    Insight:
    - Every 3rd Fibonacci number is even
    - Odd Fibonacci follows pattern:
      nextOdd = 4 * curr + prev
    - So we can skip generating even numbers entirely
*/

const sumFibsOptimized = (num) => {
  if (num < 1) return 0;

  let prev = 1;   // first odd Fibonacci
  let curr = 1;   // second odd Fibonacci
  let result = 0;

  while (prev <= num) {
    result += prev;

    const next = 4 * curr + prev;
    prev = curr;
    curr = next;
  }

  return result;
};



/* ============================================================
    COMPLEXITY ANALYSIS
  ============================================================

  Brute Force:
    Time Complexity: O(n)
    Space Complexity: O(n)

  Optimized (Rolling Variables):
    Time Complexity: O(n)
    Space Complexity: O(1)

  Further Optimized (Skip Even):
    Time Complexity: O(n/3) ≈ O(n)
    Space Complexity: O(1)

  Note:
    Last version reduces number of iterations significantly
    by leveraging Fibonacci parity pattern.

  ============================================================
*/


/* ============================================================
  REFLECTION
  ============================================================

  - Initial mistake:
    Confused which variable (prev, curr, next) represents
    the active Fibonacci number.

  - Key Insight:
    curr always represents the current Fibonacci state.

  - Next Level Insight:
    Pattern recognition can reduce computation
    without changing Big-O complexity.

  - JavaScript Concept Reinforced:
    - While loops
    - State transition logic
    - Modulo operator
    - Memory optimization
    - Mathematical pattern optimization

  ============================================================
*/


// Test Cases
console.log(sumFibs(1));        // 1
console.log(sumFibs(10));       // 10
console.log(sumFibs(1000));     // 1785
console.log(sumFibs(4000000));  // 4613732
console.log(sumFibs(75024));    // 60696
console.log(sumFibs(75025));    // 135721

// Further optimized test
console.log(sumFibsOptimized(1000));     // 1785
console.log(sumFibsOptimized(4000000));  // 4613732
