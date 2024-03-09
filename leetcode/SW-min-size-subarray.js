// 209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, return
// the minimal length of a subarray whose sum is greater than or equal to target.
// If there is no such subarray, return 0 instead.


// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

//[1,1,1,2,3]
//Plan:
//First sliding window problem. From the name, it suggests a left/right pointer,
//then check the resulting subArray. Could do left, right, and a running target.
//Then, increment right until target is reached/exceeded. Once that happens,
//increment left, reset right to equal left, then start over? I think this
//would find the solution, but the 'regrowing' of the subArray after a reset
//sounds inefficient. Could instead have two separate rules: increment right
//if we're short of target, increment left if we overshoot, record length when
//equal.

function findMinSubArray(nums, target){

  let left = 0;
  let right = 0;
  let subTotal = nums[0];
  let minLength = Infinity;

  while (left < nums.length && right < nums.length){
    if (subTotal >= target) {
      minLength = Math.min(minLength, right-left+1);

      subTotal -= nums[left];
      left++;
    } else if (subTotal < target){
      right++;
      subTotal += nums[right];
    }
  }

  if (minLength === Infinity) minLength = 0;
  return minLength;
}

let nums = [2,3,1,2,4,3];
let target = 7;
