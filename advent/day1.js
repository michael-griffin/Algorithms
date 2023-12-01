let { parens } = require("./day1_input");

//Day 1, Part 1: If each left paren increments count, and each right paren decrements
//What is the final count?
console.log('first slice: ', parens.slice(0,10));

let count = 0;
for (let val of parens){
  if (val === "("){
    count++;
  }
}

// console.log('left parentheses count is: ', count);
// console.log('right parentheses count is: ', parens.length - count);
console.log('diff is: ', (count - (parens.length - count)));


//Day 1, Part 2: What is the first instance where count hits -1?
//essentially, loop through, check count as before. If count hits -1, log + break
//from loop.
floorCount = 0;
for (let i = 0; i < parens.length; i++){
  if (parens[i] === "(") floorCount++;
  else floorCount--;

  if (floorCount === -1){
    console.log('hit basement at index: ', i);
    break;
  }
}

//Note, advent problem explicitly starts at index 1 rather than index 0. So
//must submit 1 higher.
