/* Given an array of strings strs, group the anagrams together. You can return the answer in any order.
An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 

Constraints:
1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.*/

//input: array of strings
//output: array of arrays (inner arrays made up of each word and other words rearranged)

//Time Complexity: O(m * n) where m = input strings, n = avg length of string

function groupAnagrams (str) {
    //declare a variable and assign it to an empty object
    const result = {};
    //iterate through the array 
    for (const word of str) {
        //each iteration make the current word into an array and assign it to key 
        const key = word.split('').sort().join('');
        //check if the current key exists 
        if (result[key]) {
            //if so then push the value of the current word to the object
            result[key].push(word);
        } else {
            //otherwise assign the current word to the key 
            result[key] = [word];
        }
    }
    //return the values of the object
    return Object.values(result);

}


console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));