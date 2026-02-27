/**
 * =========================================================
 * DNA PAIR GENERATOR
 * =========================================================
 *
 * PROBLEM:
 * In DNA, base pairs are matched as follows:
 *
 * A ↔ T
 * C ↔ G
 *
 * Given a DNA string, return a 2D array where:
 * - Each inner array contains:
 *   [original_base, paired_base]
 *
 * Example:
 * pairElement("ATCG")
 * → [
 *    ["A","T"],
 *    ["T","A"],
 *    ["C","G"],
 *    ["G","C"]
 *   ]
 *
 *
 * ---------------------------------------------------------
 * USER STORIES:
 *
 * 1. The function must be named pairElement.
 * 2. It must take a string argument.
 * 3. It must return a 2D array.
 * 4. A pairs with T.
 * 5. T pairs with A.
 * 6. C pairs with G.
 * 7. G pairs with C.
 *
 */


/**
 * =========================================================
 * PSEUDOCODE
 * =========================================================
 *
 * function pairElement(dna):
 *   initialize empty result array
 *
 *   for each character in dna:
 *     if A → push ["A","T"]
 *     if T → push ["T","A"]
 *     if C → push ["C","G"]
 *     if G → push ["G","C"]
 *
 *   return result
 *
 */


/**
 * =========================================================
 * 1️⃣ BRUTE FORCE IMPLEMENTATION (Switch)
 * =========================================================
 *
 * Approach:
 * - Iterate through each character
 * - Use switch statement
 * - Push corresponding pair
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const pairElement = (dna) => {
  const result = [];

  for (const base of dna) {
    switch (base) {
      case "A":
        result.push(["A", "T"]);
        break;
      case "T":
        result.push(["T", "A"]);
        break;
      case "C":
        result.push(["C", "G"]);
        break;
      case "G":
        result.push(["G", "C"]);
        break;
      default:
        throw new Error("Invalid DNA base");
    }
  }

  return result;
};


// Test Case
console.log(pairElement("ATCGA"));
// Expected:
// [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]]



/**
 * =========================================================
 * 2️⃣ OPTIMIZED VERSION (Using Lookup Object)
 * =========================================================
 *
 * Instead of switch, use a mapping object.
 * This makes the code:
 * - Cleaner
 * - More scalable
 * - Easier to maintain
 */

const pairElementOptimized = (dna) => {
  const pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  return [...dna].map(base => {
    if (!pairs[base]) {
      throw new Error("Invalid DNA base");
    }
    return [base, pairs[base]];
  });
};


// Test Cases
console.log(pairElementOptimized("TTGAG"));
console.log(pairElementOptimized("CTCTA"));



/**
 * =========================================================
 * COMPLEXITY ANALYSIS
 * =========================================================
 *
 * Let n = length of the DNA string.
 *
 * - We iterate through each character once.
 * - Each lookup is O(1).
 *
 * Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 *
 * This is optimal because we must process every character.
 *
 */


/**
 * =========================================================
 * ENGINEERING INSIGHT
 * =========================================================
 *
 * Why is the lookup object better than switch?
 *
 * - More declarative
 * - Easier to extend
 * - Cleaner separation of data and logic
 *
 * Best production-ready version:
 *
 * const pairElement = dna =>
 *   [...dna].map(base => [base, {A:"T",T:"A",C:"G",G:"C"}[base]]);
 *
 */
