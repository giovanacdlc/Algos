/*A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.*/


//Input: string
//Output: boolean 
function validPalindrome(string) {	
	// //take into account punctuations&symbols - get rid of them
	// //recursively : base case - if string length = 1 return true
	// //if first character is not the same as last character return false
	// //decrease length of string (in recursive case)
	// //make string smaller from both front and the back
	
	// const newString = string.toLowerCase().replace(/[^A-Za-z0–9]/g, '')
	// console.log(newString)
	// if (newString.length === 1 || newString.length === 0) return true;
	// if (newString[0] !== newString[newString.length - 1]) return false;
	// console.log(newString.slice(1, string.length - 1))
	// return validPalindrome(newString.slice(1, newString.length - 1));

    //declare a variable and assign it to the string in lower case with non- alphanumeric characters removed
    let newString = string.toLowerCase().replace(/[\W_]/g, '');
    //base case: string length is less than 1
    if (newString.length <= 1) return true;
    //base case: if the first and last characters are not equal 
    if (newString[0] !== newString[newString.length-1]) return false;
    //recursive case: remove the first and last character of the string
    return validPalindrome(newString.slice(1,-1));
}

console.log(validPalindrome("Anne, I vote more cars race Rome-to-Vienna")); //true
console.log(validPalindrome("llama mall")); //true
console.log(validPalindrome("jmoney")); //false

console.log(validPalindrome('hello'));
console.log(validPalindrome('racecar'));

