// 11. Container With Most Water

// You are given an integer array height of length n. There are n vertical
// lines drawn such that the two endpoints of the ith line are (i, 0) and
// (i, height[i]).

// Find two lines that together with the x-axis form a container, such
// that the container contains the most water.

// Return the maximum amount of water a container can store.

//Example:

// [1,3,1,2]

//   |
//   |   |
// | | | |

//3 and 2 would form a container with an area 4.

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49


//Idea:
//2 pointers at left/right. we keep track of MAX area, and continue test candidates
//as long as left/right haven't converged.
// We do this by moving the smaller of the two heights at each step:
// eg: [50,80,200,10,1].
//At the start, our area is 1*4, and 50 > 1, so we move our right pointer to 10
//Then our max is 10*3, which is > 4, and 50 > 10, so we move our right pointer again.
//again our area increases, but not our right pointer height > left, so we move left.
//We'd keep moving left and comparing to our previously found max, until the pointers
//converge.



function maxHeld(heights){
  let left = 0;
  let right = heights.length - 1;
  const calcArea = () => Math.min(heights[left], heights[right]) * (right - left);

  let maxFound = calcArea();
  while (left < right){
    maxFound = Math.max(maxFound, calcArea());
    if (heights[left] < heights[right]){
      left++;
    } else {
      right--;
    }
  }
  return maxFound;
}