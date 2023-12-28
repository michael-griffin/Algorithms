//205. Isomorphic Strings
//Check whether two strings are isomorphic, eg -> hello + rokki


//Initial Thought:
//Could be done with a series of replace commands
//would extract sets of unique letters for each,
//then use str.replaceAll(letterSet[i], otherSet[i])
//One nice bit is that set preserves order of insertion.

//Have to be careful: if hello -> rokki, an intermediate string might be 'rollo'
//then replacing o would mess things up.


//Follow up:
//More in line with frequency counters, could use a 'map'
//pass through letters, map char from string1 to char from string2
//each char should have a consistent mapping (if a is mapped to b, it should not
//later be mapped to c)

//May have to do twice, 1 map for string1 -> string2, one for string2 -> string1
//eg 'bar' -> 'foo' mapping shows no problems {b: 'f', a: 'o', r: 'o'}
//but 'foo' -> 'bar' mapping would reveal the issue (o is not consistent)


//Solution 3: clean shortcut
function isoStrings(letters, otherLetters){
  for (let i = 0; i < letters.length; i++) {
    if (letters.indexOf(letters[i], i + 1) !==
      otherLetters.indexOf(otherLetters[i], i + 1)) {
      return false;
    }
  }
  return true;
}


//Attempt 2:
function isoStrings(letters, otherLetters){
  if (letters.length !== otherLetters.length) return false;

  const lettersMap = {};
  const otherMap = {};
  for (let i = 0; i < letters.length; i++){
    //check letters -> otherLetters map
    if (!lettersMap[letters[i]]) {
      lettersMap[letters[i]] = otherLetters[i];
    } else if (lettersMap[letters[i]] !== otherLetters[i]){
      return false;
    }

    //check otherLetters -> letters map
    if (!otherMap[otherLetters[i]]) {
      otherMap[otherLetters[i]] = letters[i];
    } else if (otherMap[otherLetters[i]] !== letters[i]){
      return false;
    }
  }

  return true;
}


//Attempt 1: via replacement
function isoStrings(letters, otherLetters) {
  if (letters.length !== otherLetters.length) return false;

  const letterSet = Array.from(new Set(letters).values());
  const otherSet = Array.from(new Set(otherLetters).values());

  let updated = letters;
  for (let i = 0; i < letterSet.length; i++){
    updated = updated.replaceAll(letterSet[i], otherSet[i].toUpperCase());
  }

  return updated.toLowerCase() === otherLetters;
}





//Originally thought that order didn't matter. eg 'hello' and 'kkasd' should
//evaluate to true. Here's that worked out.

// function isoStrings(letters, otherLetters) {

//   function getCounts(str){
//     let freqCounter = {};
//     for (let char of str){
//       freqCounter[char] = freqCounter[char] + 1 || 1;
//     }
//     return freqCounter;
//   }

//   //Prep comparison -> convert to an array of counts, then sort, then
//   //stringify and compare. Regular equality check won't work since references
//   //will be different.
//   const letterCountValues = Object.values(getCounts(letters));
//   const otherCountValues = Object.values(getCounts(otherLetters));

//   console.log('letterCount Values', letterCountValues);
//   console.log('otherCount Values', otherCountValues);

//   const letterCountString = letterCountValues.sort((a, b) => a - b).join('');
//   const otherCountString = otherCountValues.sort((a, b) => a - b).join('');

//   return letterCountString === otherCountString;
// }