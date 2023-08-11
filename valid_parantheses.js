/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false
*/

//TIME COMPLEXITY & SPACE COMPLEXITY 0(n)

function valid_parantheses (s) {
  //declare an empty array 
  const stack = [];
  //declare an object containing possible characters 
  const matches = {
    ")": "(",
    "]": "[",
    "}": "{"
  }
  //iterate through the string
  for (let i =0; i< s.length; i++) {
    //check if the current character can be found in the obj - closing 
    if (Object.hasOwn(matches, s[i])) {
        //if so the push into stack 
        stack.push(s[i])
        //otherwise check if the current character is a closing char
    } else if (s[i] === ")" || s[i] === "]" || s[i] === "}") {
        //if closing then check if the object does not match with the last element from the stack then return false
        if (matches[stack.pop()] !== s[i]) return false;
    }
  }
  //check if the stack is empty - if so then return true
  return !stack.length;
}

