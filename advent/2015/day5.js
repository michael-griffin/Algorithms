// Santa needs help figuring out which strings in his text file are naughty or nice.

// A nice string is one with all of the following properties:

//     It contains at least three vowels (aeiou only), like aei, xazegov, or aeiouaeiouaeiou.
//     It contains at least one letter that appears twice in a row, like xx, abcdde (dd), or aabbccdd (aa, bb, cc, or dd).
//     It does not contain the strings ab, cd, pq, or xy, even if they are part of one of the other requirements.

// How many strings are nice?

let fsP = require("fs/promises");

async function readFile(){
  const input = await fsP.readFile('inputs/day5-input.txt', "utf8");
  return input;
}

//helper function to check each condition of a nice string.

//Repetition is the complicated one. Defines a 'group' of any char,
//then checks whether it's directly followed by itself
//1 or more times.
function checkString(str){
  let failCheck = /ab|cd|pq|xy/;
  if (failCheck.test(str)) return false;

  let repCheck = /([^])\1+/g;
  let vowelCheck = /[aeiou]/g;

  return (str.match(vowelCheck)?.length >= 3 && repCheck.test(str));
}


async function countNiceStrings(){
  let input = await readFile();

  //split inputs by newline.
  let regSpace = /\s/;
  let questionableStrings = input.split(regSpace);
  // console.log(questionableStrings);

  let count = 0;
  for (current of questionableStrings){
    if (checkString(current)) count++;
  }
  console.log(count);
}

countNiceStrings();

let testStr = 'ugknbfddgicrmopn';

console.log('test string result: ', checkString(testStr));



//Part 2:
// Now, a nice string is one with all of the following properties:

// It contains a pair of any two letters that appears at least twice in the
// string without overlapping, like xyxy (xy) or aabcdefgaa (aa),
// but not like aaa (aa, but it overlaps).

// It contains at least one letter which repeats with exactly one letter
// between them, like xyx, abcdefeghi (efe), or even aaa.

function checkStringTwo(str){
  //avoiding Regex since these seem more complicated.
  let prev = str.slice(0,2); //one back and two back;

  let noOverlapCount = 0;
  let oneBetween = false;
  for (let i = 0; i < str.length - 2; i++){

    //For Rule 1, could compare index of? Ie, check if at least 2, but diff > X

    //For Rule 2, just compare
    if (str[i] === str[i+2]){
      oneBetween = true;
    }
  }
}

async function countNiceAgain(){

}

countNiceAgain();