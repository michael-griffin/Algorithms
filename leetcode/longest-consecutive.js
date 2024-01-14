//128. Longest Consecutive Sequence

// Given an unsorted array of integers nums, return the length of the longest
// consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// Example 1:

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4].
// Therefore its length is 4.

// Example 2:

// Input: nums = [0,3,7,2,5,8,4,6,0,1]
// Output: 9


//Initial idea:
//Could one do something like a linked list? Each key points to the 'next'
//element, follow them until termination, and keep a count of the longest linked
//sequence?

//Second idea, maybe we don't need to travel all the way up/down? If each
//spot checks its neighbors and updates its count based on the neighbors' values
//then by the end we should have an accurate max?

//After reviewing, looks like there's a kind of hybrid approach:
//we should travel, but only when we can confirm something is the start of a sequence
//Ie, is there a left neighbor?
  //If not: travel down and record length of sequence
  //Otherwise skip (that key is not the start, and its sequence will be counted later)

function longestConsecutive(nums){
  //Build initial map, will populate values later.
  const sequenceMap = {};
  for (let val of nums){
    sequenceMap[val] = 1;
  }

  //once map is built, can check for sequence start
  //travel down, and keep a running max.
  let longest = 0;
  for (let key in sequenceMap){
    //if start of sequence, travel length and record

    if (!sequenceMap[+key-1]){
      //[0, 1, 3]
      let dist = 1;
      while (sequenceMap[+key+dist]){
        dist++;
      }
      longest = Math.max(longest, dist);
    }
    // let seqLength = 1 + (sequenceMap[key-1] || 0) + (sequenceMap[key+1] || 0);
    // longest = Math.max(longest, seqLength);
    // sequenceMap[key] = seqLength;
  }

  return longest;
}


/*Slightly improved implementation that uses sets -- from leetcode

function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;

  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;  //only travel once at beginning

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
}

*/