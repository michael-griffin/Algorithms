//167. Two Sum II - Input Array Is Sorted


//Given a 1-indexed array of integers numbers that is already sorted in
//non-decreasing order, find two numbers such that they add up to a specific
//target number. Let these two numbers be numbers[index1] and numbers[index2]
//where 1 <= index1 < index2 <= numbers.length.

//Return the indices of the two numbers, index1 and index2, added by one as
//an integer array [index1, index2] of length 2.

//The tests are generated such that there is exactly one solution. You may
//not use the same element twice.

//Your solution must use only constant extra space.


//Plan:
//Sorted makes things pretty straightforward, have left + right pointers at
//start/end of numbers.
//Then, can make a simple judgment -> if sum of indices > target, decrement right
//pointer. If sum indices < target, increment left pointer.
//If left = right, couldn't find.

function twoSum(numbers, target){
  let left = 0;
  let right = numbers.length - 1;

  //Problem states there will always be a solution, otherwise could use 'found'
  //let found = false;
  while (left < right){ //&& !found
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else if (numbers[left] + numbers[right] === target) { //correct
      //found = true;
      break;
    }
  }

  return [left+1, right+1];
}
