/**
 * =========================================================
 * TITLE CASE CONVERTER
 * =========================================================
 *
 * PROBLEM:
 * Build a function that converts a string into Title Case.
 *
 * Title Case means:
 * - The first letter of each word is capitalized.
 * - The remaining letters are lowercase.
 *
 * Example:
 * "web development is awesome"
 * → "Web Development Is Awesome"
 *
 * ---------------------------------------------------------
 * USER STORIES:
 *
 * 1. The function must be named titleCase.
 * 2. It must take a string as an argument.
 * 3. It must return a new string in title case format.
 *
 * Example:
 * titleCase("I like to code")
 * → "I Like To Code"
 *
 * titleCase("javaScript is fun")
 * → "Javascript Is Fun"
 *
 */


/**
 * =========================================================
 * PSEUDOCODE
 * =========================================================
 *
 * 1. Convert the string into an array of words.
 * 2. Loop through each word.
 * 3. For each word:
 *    - Take the first character.
 *    - Take the remaining characters.
 *    - Capitalize the first character.
 *    - Lowercase the rest.
 * 4. Store each transformed word in a new array.
 * 5. Join the array back into a string.
 * 6. Return the final string.
 *
 */


/**
 * =========================================================
 * BRUTE FORCE IMPLEMENTATION
 * =========================================================
 *
 * Approach:
 * - Split the string by spaces.
 * - Manually iterate using for...of.
 * - Transform each word.
 * - Join the result.
 *
 * Time Complexity  : O(n)
 * Space Complexity : O(n)
 */

const titleCase = (str) => {
  const arr = str.split(" ");
  const result = [];

  for (const word of arr) {
    let first = word[0];
    let rest = word.slice(1);

    let capitalizedWord =
      first.toUpperCase() + rest.toLowerCase();

    result.push(capitalizedWord);
  }

  return result.join(" ");
};


// Test Cases
console.log(titleCase("I like to code"));
// Expected: "I Like To Code"

console.log(titleCase("javaScript is fun"));
// Expected: "Javascript Is Fun"



/**
 * =========================================================
 * OPTIMIZED / IDIOMATIC VERSION
 * =========================================================
 *
 * Uses built-in array methods for cleaner syntax.
 */

const titleCaseOptimized = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");


// Test Cases
console.log(titleCaseOptimized("I like to code"));
console.log(titleCaseOptimized("javaScript is fun"));

/**
 * =========================================================
 *  REGEX SPLIT VERSION (HANDLE MULTIPLE SPACES)
 * =========================================================
 *
 * Using /\s+/ to handle:
 * - Multiple spaces
 * - Tabs
 * - New lines
 */

const titleCaseRegexSplit = (str) =>
  str
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");



/**
 * =========================================================
 * COMPLEXITY ANALYSIS
 * =========================================================
 *
 * Let n = total number of characters in the string.
 *
 * Operations:
 * - split()        → O(n)
 * - loop/map()     → O(n)
 * - join()         → O(n)
 *
 * Total Time Complexity:
 * O(n)
 *
 * Space Complexity:
 * O(n)
 * (because we create new arrays and a new string)
 *
 */


/**
 * =========================================================
 * IMPORTANT NOTES
 * =========================================================
 *
 * - This algorithm is already optimal in terms of time complexity.
 * - We must read every character at least once → cannot do better than O(n).
 * - Improvements focus on readability and robustness, not performance.
 *
 * Possible Improvement:
 * - Handle multiple spaces using split(/\s+/)
 * - Add guard clause for empty string
 *
 */
