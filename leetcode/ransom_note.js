//Basic idea: loop through magazine once, add each letter
//to freqCounter object
//Then loop through ransomNote, check each for presence
function canConstruct(ransomNote, magazine) {

  let letters = {};
  for (let letter of magazine){
      letters[letter] = letters[letter] + 1 || 1;
  }

  for (let letter of ransomNote){
      if (letters[letter] > 0) letters[letter] = letters[letter] - 1;
      else return false;
  }
  return true;
};