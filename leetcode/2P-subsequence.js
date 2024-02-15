// 392. Is Subsequence

// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise.

// A subsequence of a string is a new string that is formed from the original
// string by deleting some (can be none) of the characters without disturbing
// the relative positions of the remaining characters. (i.e., "ace" is a
// subsequence of "abcde" while "aec" is not).

// Example 1:

// Input: s = "abc", t = "ahbgdc"  Output: true

// Example 2:

// Input: s = "axc", t = "ahbgdc"  Output: false


//Plan:
//Set up one pointer for the current character in the original string,
//a second for the candidate string to check for matches.
//Then compare -> if a match, increment both, else increment candidate.

function isSub(str, cand){

  let indStr = 0;
  let indCand = 0;

  while (indStr < str.length && indCand < cand.length){
    if (str[indStr] === cand[indCand]){
      indStr++;
      indCand++;
    } else {
      indCand++;
    }
  }

  //Alternately, could simply loop over one explicitly, with a pointer for the other
  for (let i = 0; i < cand.length; i++){
    if (str[indStr] === cand[i]){
      indStr++;
    }
  }
  return indStr === str.length; //if true, reached end and found matches for all
}

//Slightly cleaner: could simply loop over one explicitly, with a pointer for the other

function isSubseq(str, cand){
  let indStr = 0;
  for (let i = 0; i < cand.length; i++){
    if (str[indStr] === cand[i]){
      indStr++;
    }
  }

  return indStr === str.length;
}