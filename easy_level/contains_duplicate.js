//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

/*Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true*/

function contains_duplicate(arr) {
  //declare a variable to store boolean - false
  let duplicate = false;
  //declare an empty object to store elements
  const obj = {};
  //iterate through the array
  arr.forEach(element => {
    //check if the current element can be found in the object - if so then add 1 to the value
    if (obj[element]) {
        obj[element] += 1;
    } else {
        //if not then add the current element in the object
        obj[element] = 1;
    }
  });
  //check if the object contains a value grater than 2 - return true
  for (const value of Object.values(obj)) {
    if (value >= 2) {
        duplicate = true;
    }
  }
  return duplicate;
}

console.log(contains_duplicate([1,2,3,4]));
console.log(contains_duplicate([1,2,3,3]));
console.log(contains_duplicate([1,2,3,6,1]));
