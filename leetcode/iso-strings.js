//205. Isomorphic Strings
//Check whether two strings are isomorphic, eg -> hello + rokki


//Could be done with a series of replace commands?
//ie, extract sets of unique letters for each, then pattern of set value 1 ->
//other set value 1. One nice bit is that set preserves order of insertion.

//Have to be careful: if hello -> rokki, an intermediate string might be 'rollo'
//then replacing o would mess things up.
function isoStrings(letters, otherLetters) {
  if (letters.length !== otherLetters.length) return false;


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