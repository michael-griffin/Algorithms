// 238. Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is
// equal to the product of all the elements of nums except nums[i].

// You must write an algorithm that runs in O(n) time and without using the
// division operation.

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


//Plan: Want to have a running 'products' array: one for everything to left,
//another with everything to right.

//eg. [1,2,3,4] -> (Left) [1,2,6,24]  and (right) [24,24,12,4]
//Then, we can just take the left neighbor of the left array to get that half's product
//and the right neighbor of the right array's to get the other half.

//When at the start/end, we can ignore one half.
//Working through 1st element = nothing from left, 24 from right = 24
//2nd: 1 from left, 12 from right = 12
//3rd: 2 from left, 4 from right = 8
//4th = 6 from left, nothing from right = 6

function productArray(nums){

  let leftProducts = Array(nums.length).fill(null);
  let rightProducts = Array(nums.length).fill(null);
  let products = Array(nums.length).fill(null);

  for (let i = 0; i < nums.length; i++){
    if (i === 0) {
      leftProducts[i] = nums[i];
    } else {
      leftProducts[i] = leftProducts[i-1] * nums[i];
    }
  }

  for (let i = nums.length - 1; i >= 0; i--){
    if (i === nums.length - 1) {
      rightProducts[i] = nums[i];
    } else {
      rightProducts[i] = rightProducts[i+1] * nums[i];
    }
  }

  console.log(leftProducts);
  console.log(rightProducts);

  products[0] = rightProducts[1];
  products[nums.length - 1] = leftProducts[nums.length - 2];
  for (let i = 1; i < nums.length - 1; i++){
    products[i] = leftProducts[i-1] * rightProducts[i+1];
  }
  return products;
}


//Leetcode gives a more efficient implementation:
//Rather than 3 arrays, we only need one, doing a forward pass then
//a backward pass to achieve the same result.
//Note that the arrays themselves are structured slightly differently
//so that the final product can be calculated as left[i] * right[i]

function productExceptSelf(nums) {
  // Set up an empty array as our result
  const result = []

  // Initialize a prefix tracker at 1
  let prefix = 1

  // Loop through the input array - for each position,
  // the result array should equal the prefix tracker.

  // Then, update the prefix tracker to be the product of itself,
  // multiplied by the input value at the position.
  for (let i=0; i<nums.length; i++) {
      result[i] = prefix
      prefix *= nums[i]
  }

  // Initialize a suffix tracker at 1
  let suffix = 1

  // Loop backwards through the array.
  // For each iteration, set the result array to be
  // the product of itself multiplied by the suffix tracker.

  // Then, update the suffix tracker to be the product of itself,
  // multiplied by the input value at that position.
  for (let i=nums.length - 1; i>=0; i--) {
      result[i] *= suffix
      suffix *= nums[i]
  }

  return result
};