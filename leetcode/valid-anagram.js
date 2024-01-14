//#242. Valid Anagram

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//An Anagram is a word or phrase formed by rearranging the letters of
//a different word or phrase, typically using all the original letters exactly once.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false


//Initial plan:
//two maps, then loop through keys, checking counts
//if we loop through one map's keys, would we still miss? I don't think so
//provided we initially check for length (then there should be no possibility
//of leftovers)

//Space wise, is there any any fanciness? Could store tuples maybe?
//Not sure what it buys us though, and it makes adding to the map more
//complicated

function isAnagram(firstWord, secondWord){
  //check length
  if (firstWord.length !== secondWord.length) return false;

  //loop through both at once, create 2 maps
  const firstMap = {};
  const secondMap = {};
  for (let i = 0; i < firstWord.length; i++){
    firstMap[firstWord[i]] = firstMap[firstWord[i]] + 1 || 1;
    secondMap[secondWord[i]] = secondMap[secondWord[i]] + 1 || 1;
  }

  //loop through keys of one map
  for (let key in firstMap){
    if (firstMap[key] !== secondMap[key]) return false;
  }

  //return boolean
  return true;
}

let s = 'anagram';
let t = 'nagaram';
isAnagram(s, t); //true

isAnagram('rat', 'car'); //false