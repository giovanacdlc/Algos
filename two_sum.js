/*Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/


function twoSum (nums, target) {
  //declare an object to store iterated elements
  const obj = {};
  //iterate through the array of integers
  for (let i = 0; i< nums.length; i++) {
    // declare a variable to store difference between target and element
    const complement = target - nums[i];
    console.log(complement)
    //check if the complement exists in the object 
    if (complement in obj) {
      //if it does exist then push the index of the element and the current index
      return [obj[complement], i]; 
    } //otherwise add the current element to the object with the current index as the value
    obj[nums[i]] = i;
  }
  return;
}

//commit 
console.log(twoSum([2,7,11,15], 9))