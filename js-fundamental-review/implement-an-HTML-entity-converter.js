// =========================================
//  PROBLEM
// =========================================

/*
Description (rewrite in your own words):

Create a function that converts special characters in a string
into their corresponding HTML entities to prevent issues such
as HTML injection or rendering errors.

Input:
- A string containing zero or more special characters.

Output:
- A new string where special characters are replaced with
  their HTML entity equivalents.

Constraints / Rules:
• The function must not mutate the original string.
• Only these characters should be converted:
  &, <, >, ", '
• If no special characters exist, return the original string.
*/


// =========================================
//  PSEUDOCODE
// =========================================

/*
1. Create a mapping object containing special characters and their HTML entities.
2. Initialize an empty string variable to store the result.
3. Loop through each character in the input string.
4. If the character exists in the mapping object:
      append the mapped value to result.
  Else:
      append the original character.
5. Return the result string.
*/


// =========================================
//  BRUTE FORCE IMPLEMENTATION
// =========================================

function solution(str) {
  const pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (pairs[str[i]]) {
      result += pairs[str[i]];
    } else {
      result += str[i];
    }
  }

  return result;
}

// Time Complexity: O(n)
// Space Complexity: O(n)


// =========================================
//  OPTIMIZATION / REFACTOR
// =========================================

function optimizedSolution(str) {
  const pairs = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;'
  };

  return str.replace(/[&<>"']/g, (char) => pairs[char]);
}

// Time Complexity: O(n)
// Space Complexity: O(n)


// =========================================
// 🔁 REFLECTION
// =========================================

/*
• Bug / mistake that happened:
  - Tried comparing pairs[str[i]] === str[i]
  - Forgot that strings are immutable.
  - Tried using includes() on an object.

• Why the bug happened:
  - Confused between array and object methods.
  - Misunderstood the difference between reading and mutating strings.
  - Logical condition was checking equality instead of key existence.

• Main lesson today:
  - Objects can be used as lookup tables efficiently.
  - Strings are immutable in JavaScript.
  - Building a new string during iteration is a common pattern.
  - Clean logic > clever logic.

• Can I solve this again tomorrow without looking?
  - Yes — loop string, use lookup table, build new string.
*/
