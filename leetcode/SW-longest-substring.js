// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest
// substring without repeating characters.


// Example 1:
// Input: s = "abcabcbb" Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Input: s = "bbbbb" Output: 1
// Explanation: The answer is "b", with the length of 1.

// Input: s = "pwwkew" Output: 3
// Explanation: The answer is "wke", with the length of 3.


//Plan:
//basic logic is:
//Sliding window to keep track of substr ->
//Increment right until repetition is found.
//Then increment left until repetition is removed.
//Then repeat. Update max length at each step rightward
//Some question of best way to keep track of unique characters
//Could be a hashmap, but set seems like a more natural fit?


//A cleaner implementation via sets

function findLongestWithSet(str){

  let charSet = new Set();
  let left = 0;
  let maxSize = 0;
  for (let right = 0; right < str.length; right++) {

    while (charSet.has(str[right])) {
      charSet.delete(str[left]);
      left++;
    }
    charSet.add(str[right]);
    maxSize = Math.max(maxSize, right - left + 1);
  }

  return maxSize;
}


// //Original (messy) implementation

// function findLongestSubstring(str){
//   let left = 0;
//   let right = 0;

//   let subChars = {};
//   let repeated = '';
//   let maxSize = 0;
//   while (right < str.length){

//     if (!repeated){
//       let char = str[right];
//       if (!subChars[char]){
//         subChars[char] = 1;
//         maxSize = Math.max(maxSize, right - left + 1);
//       } else {
//         repeated = char;
//       }
//       right++;
//     } else { //move left until no repeat.
//       let char = str[left];
//       if (char === repeated){
//         repeated = '';
//       } else {
//         subChars[char] = undefined;
//       }
//       left++;
//     }
//   }
//   return maxSize;
// }

// findLongestSubstring("pwwkew");




