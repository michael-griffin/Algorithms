//290 - Word Pattern
//Note: quite similar to 205 - Iso Strings.

//Given a pattern and a string s, find if s follows the same pattern.
//Here follow means a full match, such that there is a bijection between a
//letter in pattern and a non-empty word in s.

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true


//Initial idea: Do the same as previous, make a mapping from pattern's letters
//to string's words, then check if mapping remains consistent.
//Eg.,  a -> dog, b -> cat, then check if mapping remains consistent.

//Will need a small amount of preprocessing -> split s by spaces.
//Will have to check both ways:
//'abcd' -> 'dog dog dog dog' would look valid if only
//going from letters to words.

function wordPattern(pattern, s) {
  const patternMap = {};
  const wordMap = {};
  let words = s.split(' ');

  if (pattern.length !== words.length) return false;

  for (let i = 0; i < pattern.length; i++){

    //Check both mappings, pattern then word
    if (patternMap[pattern[i]] === undefined){
      patternMap[pattern[i]] = words[i];
    } else if (patternMap[pattern[i]] !== words[i]){
      return false;
    }

    //In a cruel test case, 'constructor' would break the below
    //check, as it's part of the prototype chain. hasOwnProperty
    //gives the expected result.
    //if (wordMap[words[i]] === undefined){
    if (!wordMap.hasOwnProperty(words[i])){
      wordMap[words[i]] = pattern[i];
    } else if (wordMap[words[i]] !== pattern[i]){
      return false;
    }
  }

  return true;
};



// //From leetcode, a similar implementation that uses map
var wordPattern = function(pattern, str) {
  const words = str.split(/\s+/);
  const map = new Map();

  if(words.length !== pattern.length) return false;
  if(new Set(words).size !== new Set(pattern).size) return false;

  for(let i = 0; i < pattern.length; i++) {
      if(map.has(pattern[i]) &&
         map.get(pattern[i]) !== words[i]) return false;
      map.set(pattern[i], words[i]);
  }
  return true;
};