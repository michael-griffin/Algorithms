//15. 3Sum

//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
//such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

//The solution set must not contain duplicate triplets.


//Plan:
//For brute force, we could start 3 loops, one for each index essentially.
//Then would still have to filter for duplicates while looping or after the fact.

//If we sort the array, then we can more easily skip duplicates: we can increment
//check neighbor to see if we've 'moved' to a new value, then increment again.
//Sorting might also let us use the two sum approach of choosing which pointer
//to adjust based on whether we over estimated or under estimated.


function threesum(nums){
  let triplets = [];
  let sorted = nums.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++){
    if (sorted[i] > 0) break; //if the smallest number is > target of 0, end.
    if (i > 0 && sorted[i] === sorted[i-1]) continue; //avoid duplicates.

    let target = -sorted[i];
    let left = i+1;
    let right = sorted.length - 1;
    while (left < right){

      let remainder = sorted[left] + sorted[right];
      if (target === remainder){
        triplets.push([sorted[i], sorted[left], sorted[right]]);

        //After a match, how do we avoid duplicates?
        //Messy, but can move once, then move extra if they hit the same value.
        left++;
        right--;
        while (sorted[left] === sorted[left-1] && left < right) left++;
        while (sorted[right] === sorted[right+1] && right > left) right--;

      } else if (remainder < target){
        left++;
      } else if (remainder > target){
        right--;
      }
    }
  }

  return triplets;
}





//(Nonworking) one thing we might be able to take advantage of is that
//given 2 values, we're always going to be looking for a value that lets the
//triplet sum to 0. Searching for the value in an array like this might be slow,
//but if we stored a lookup map with (value) -> index, then that part's fast.

//Anyways, then the base idea would be left + right pointers, then check lookup
//for 0 - (nums[left] + nums[right]). If unsuccessful, keep iterating through.


// //Initial, nonworking idea (doesn't handle duplicates)
// function threesum(nums){
//   let triplets = [];

//   let lookup = {};
//   for (let i = 0; i < nums.length; i++){
//     lookup[nums[i]] = lookup[nums[i]] + 1 || 1; //unsure how to use
//   }
//   //let uniqNums = Object.keys(lookup); //

//   let left = 0;
//   let right = nums.length - 1;
//   let leftNext = true;
//   while (left < right){
//     let needed = -(nums[left] + nums[right]);
//     if (lookup[needed]) {
//       triplets.push([left, right, needed]);
//     }

//     if (leftNext) left++;
//     else right--;
//     leftNext = !leftNext;
//   }
//   return triplets;
// }