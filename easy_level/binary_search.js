/* Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order. */


//Input: array of integers - ascending order, integer target
//Output: index of where target is located, or -1 if not found 
//must be in 0(log n)

//Complexity = 0(n)
// function search (nums, target) {
//     //iterate through the array 
//     for (let i = 0; i<nums.length; i++) {
//         //check if the current number is equal to the target 
//         if (nums[i] === target) {
//             //if so then return the index
//             return i;
//         }
//     }
//     //otherwise return -1
//     return -1;
// }

//Complexity = 0(log n) - divide and conquer approach 
function search (nums, target) {
    //declare variable and assign it to the first index
    let lower = 0; 
    //declare a variable and assign it to the last index
    let higher = nums.length - 1;
    //iterate through the array as long as the first pointer does not equal the last pointer
    while (lower <= higher) {
        //each iteration declare a variable that will store the midpoint
        let mid = Math.floor((lower + higher)/2);
        console.log(mid)
        // check if the array at the midpoint is equal to the target
        if (nums[mid] === target) {
            //if so then return the midpoint 
            return mid;
        }  else if (nums[mid] < target) {
            //if not then check if the number at the midpoint is less than the target 
            //if so then discard the lower half
            lower = mid + 1;
        } else {
            //otherwise discard the higher half
            higher = mid - 1;
        }
    }
    //if the target was not found return -1
    return -1;
}

console.log(search([1,2,3], 3));
console.log(search([1,2,3,6], 0));
console.log(search([0,1,2,3], -2));