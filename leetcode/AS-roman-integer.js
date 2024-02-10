// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = "III" // Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = "LVIII" // Output: 58

// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = "MCMXCIV" // Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.



//Basic plan:
//Iterate through chars of roman string
//Keep previous character in mind.
//If prevChar > current (normal) Add prevChar, then update (now contains just newChar)
//if prevChar < current (eg IV) subtract currChar - prevChar, then clear prevChar
//if prevChar is empty -> prevChar becomes currChar (wait for more info).

let romanKey = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
}
function romanToInteger(romanStr){
  let finalNum = 0;

  let prevChar = '';
  for (let char of romanStr){

  }
  return finalNum;
}