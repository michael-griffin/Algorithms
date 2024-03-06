// 219. Contains Duplicate II

// Given an integer array nums and an integer k, return true if there are
// two distinct indices i and j in the array such that nums[i] == nums[j]
// and abs(i - j) <= k.

// Input: nums = [1,2,3,1], k = 3     Output: true
// Input: nums = [1,0,1,1], k = 1     Output: true
// Input: nums = [1,2,3,1,2,3], k = 2 Output: false


//Plan: Hashmap can store the most recent index where a value was found
//(that is, value in nums is key in map, index of nums' value is stored)
function nearDuplicate(nums, k){
  const indexMap = {};

  for (let i = 0; i < nums.length; i++){
    if (indexMap[nums[i]] !== undefined) {
      let distance = i - indexMap[nums[i]];
      if (distance <= k) return true;
    }
    indexMap[nums[i]] = i;
  }
  return false;
}

//A more efficient solution (from site) is to use a map, and build
//the distance calculation into the if statement.
var containsNearbyDuplicate = function(nums, k) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (i - map.get(nums[i]) <= k) {
      return true;
    }
    map.set(nums[i], i);
  }
  return false;
};