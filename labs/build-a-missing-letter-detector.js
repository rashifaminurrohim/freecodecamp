/**
 * ============================================================
 * 🧠 PROBLEM - MISSING LETTER DETECTOR
 * ============================================================
 *
 * Objective:
 * Find the missing letter in a given alphabetical range.
 *
 * Input:
 * A string representing a range of letters in alphabetical order.
 * One letter may be missing.
 *
 * Output:
 * Return the missing letter.
 *
 * Constraint:
 * If no letter is missing, return undefined.
 *
 * Example:
 * fearNotLetter("ace") -> "b"
 * fearNotLetter("abc") -> undefined
 * ============================================================
 */


/* ============================================================
   🥇 APPROACH 1 - BRUTE FORCE (Dictionary Comparison)
   ============================================================

   PSEUDO:
   1. Create a dictionary containing a-z.
   2. Get first and last letter from input.
   3. Find their index in dictionary.
   4. Slice dictionary to get the expected full range.
   5. Compare expected range with input.
   6. If length same -> return undefined.
   7. Otherwise detect the missing letter.
*/

const dictionary = "abcdefghijklmnopqrstuvwxyz";

const fearNotLetter = (alphabet) => {
  let missingLetter = "";

  const firstLetter = alphabet[0];
  const lastLetter = alphabet[alphabet.length - 1];

  const firstLetterIndex = dictionary.indexOf(firstLetter);
  const lastLetterIndex = dictionary.indexOf(lastLetter);

  const truthAlphabet = dictionary.slice(
    firstLetterIndex,
    lastLetterIndex + 1
  );

  // If no missing letter
  if (truthAlphabet.length === alphabet.length) {
    return undefined;
  }

  let j = 0;

  for (let i = 0; i < truthAlphabet.length; i++) {
    if (truthAlphabet[i] === alphabet[j]) {
      j++;
    } else {
      missingLetter += truthAlphabet[i];
    }
  }

  return missingLetter;
};

console.log(fearNotLetter("abcg")); // expected: d e f (multiple gap case)



/* ============================================================
   🥉 APPROACH 2 - OPTIMIZED (Char Code Comparison)
   ============================================================

   Core Idea:
   Alphabet is a numeric sequence increasing by 1.

   PSEUDO:
   1. Loop from index 0 to length - 2.
   2. Convert current and next letter to char code.
   3. If difference > 1:
        missing letter = currentCharCode + 1
        return that letter.
   4. If loop ends with no gap -> return undefined.
*/

// const fearNotLetter = (alphabet) => {
//   for (let i = 0; i < alphabet.length - 1; i++) {
//     const currentCharCode = alphabet.charCodeAt(i);
//     const nextCharCode = alphabet.charCodeAt(i + 1);

//     if (nextCharCode - currentCharCode > 1) {
//       return String.fromCharCode(currentCharCode + 1);
//     }
//   }

//   return undefined;
// };

// console.log(fearNotLetter("ace")); // b



/* ============================================================
   📊 COMPLEXITY ANALYSIS
   ============================================================

   Brute Force:
   - Time Complexity: O(n)
   - Space Complexity: O(n)

   Optimized:
   - Time Complexity: O(n)
   - Space Complexity: O(1)

   Key Insight:
   Do not recreate the expected sequence.
   Detect anomaly in the existing sequence.
   ============================================================
*/
