let fsP = require("fs/promises");

async function readFile(){
  let input = await fsP.readFile("day1-input.txt", "utf8");
  return input;
}



async function sumValues(){
  let input = await readFile();
  let regSpace = /\s/;
  let regNums = /\d/g;
  let inputArr = input.split(regSpace);
  //Part 1
  // let total = inputArr.reduce((acc, item) => {
  //   let numMatch = item.match(regNums);

  //   numMatch = [numMatch[0], numMatch[numMatch.length - 1]];
  //   acc = acc + Number(numMatch[0] + numMatch[1]);
  //   return acc;
  // }, 0);
  // console.log('total is: ', total);


  //Part 2
  // let regAllNums = /\d|one|two|three|four|five|six|seven|eight|nine/g;

  let replacements = {
    one: 'one1one',
    two: 'two2two',
    three: 'three3three',
    four: 'four4four',
    five: 'five5five',
    six: 'six6six',
    seven: 'seven7seven',
    eight: 'eight8eight',
    nine: 'nine9nine'
  }
  // let newArr = ['oneight', '2']; //to test

  let totalTwo = inputArr.reduce((acc, item) => {
    for (let key in replacements){
      item = item.replace(key, replacements[key]);
    }

    let matches = item.match(regNums);
    matches = [matches[0], matches[matches.length - 1]];

    acc = acc + Number(matches[0] + matches[1]);
    return acc;
  }, 0)
  console.log(totalTwo);
}

sumValues();
