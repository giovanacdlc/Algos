// Given two strings s and t, return true if t is an anagram of s, and false otherwise. Everything is assumed lower case

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/*Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
*/

//THIS USES HASH MAP

function valid_anagram(s, t) {
  //remove any non-letters
  // const letters = s.replace(/[^a-zA-Z]/g, '');
  //check if the length of s and t are the same
  if (s.length !== t.length) return false;

  return reorder(s) === reorder(t);
}

const reorder = (str) =>
  str
    .split('')
    .sort((a, b) => a.localeCompare(b))
    .join('');

console.log(valid_anagram('rat', 'car'));
