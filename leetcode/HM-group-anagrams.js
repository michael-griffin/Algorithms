// 49. Group Anagrams

// Given an array of strings strs, group the anagrams together.
// You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once.



// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Input: strs = [""]  Output: [[""]]

// Input: strs = ["a"]  Output: [["a"]]


//Brute force would be character comparison for each.
//JavaScript objects follow insertion order for strings (as opposed to alphabetical)
//So the quick and dirty comparisons of things like Object.keys or JSON.stringify
//won't work for anagrams.

//I think the more straightforward way is to just take the time complexity hit
//and sort each anagram. This also makes the group construction a lot easier:
//we can use the sorted anagram as a key, and have the value be the groups:
//for each new word, we push it into that key's list.


function groupAnagram(words){
  const groups = {}; //key = sort(word), value = [word1, word2...]
  for (let word of words){
    const sorted = word.split('').sort((a, b) => a > b ? 1 : -1).join(''); //convert to array to sort

    if (!groups[sorted]) groups[sorted] = [];
    groups[sorted].push(word);
  }

  return Object.values(groups);
}



/*
//Solution from leetcode:
//Makes their own makeshift map (count), so that 'keys' follow alphabetical order
// ahead of time.

var getSignature = function(s) {
  const count = Array(26).fill(0);
  for (const c of s) {
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
          result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
      }
  }

  return result.join('');
};

var groupAnagrams = function(strs) {
  const result = [];
  const groups = new Map();

  for (const s of strs) {
      const signature = getSignature(s);
      if (!groups.has(signature)) {
          groups.set(signature, []);
      }
      groups.get(signature).push(s);
  }

  groups.forEach(value => result.push(value));

  return result;
};

*/