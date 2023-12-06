//Find the first number, which if added on to the puzzle key, produces
//a hashed result with at least 5 (or 6) leading 0s.

//First with at least 5 0s: 254575
//First with at least 6 0s: 1038736

let md5 = require('md5');

const PUZZLE_KEY = 'bgvyzdsv';
let addOn = 0;

// let toHash = PUZZLE_KEY + addOn;
// let result = md5(toHash);
// console.log(result);

while (addOn < 2000000){
  let toHash = PUZZLE_KEY + addOn;
  let result = md5(toHash);
  if (result.slice(0,6) === '000000'){
    console.log('found!, hashed result is: ', result);
    console.log('smallest number is: ', addOn);
    break;
  }
  addOn++;
}
// console.log('addOn is: ', addOn);
// console.log('result is: ', result.slice(0,5));