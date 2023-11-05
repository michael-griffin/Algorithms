// Given an array nums of size n, return the majority element.

//The majority element is the element that appears more than ⌊n / 2⌋ times.
//You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3

// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2


//Naive solution:

const majorityElement = function(nums) {

  let freqCounter = {};
  for (let i = 0; i < nums.length; i++){
    freqCounter[nums[i]] = freqCounter[nums[i]] + 1 || 1;
    if (freqCounter[nums[i]] > nums.length/2) return nums[i];
  }
};


//Initial idea was simply a frequency counter: keys are each unique num,
//value is the count of that num so far.

//Past that, my main worry would be ending early. After each item you could
//check to see if it's reached threshold.

//Problem statement mentions that there is always a majority element.
// So at some point, the frontrunner becomes the only possible winner,
// but that would involve a pretty costly repeat checking of alternatives.


//Better Solution:

//It looks like there's an algorithm can accomplish the same as above, but with
//less space, simply by keeping track of the current 'winner' and their counts
//vs the others. It relies on the fact that there is always a majority element.
//So in a valid array the winning element will eventually remain (with a count
//of at least 1) if you add to the count for the current winner, and subtract
//the count for all other numbers (switching when another number would force
//the count negative)

const improvedMajorityElement = function(nums) {
  let winner = nums[0];
  let count = 1;
  for (let i = 1; i < nums.length; i++){
    if (count === 0){
      winner = nums[i];
      count += 1;
    } else {
      count += (nums[i] === winner) ? 1 : -1;
    }
  }
  return winner;
}