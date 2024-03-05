// 202. Happy Number

// Determine if a number n is happy.

// A happy number is a number defined by the following process:

//     Starting with any positive integer, replace the number by the sum of
//     the squares of its digits.
//     Repeat the process until the number equals 1 (where it will stay),
//     or it loops endlessly in a cycle which does not include 1.
//     Those numbers for which this process ends in 1 are happy.

// Return true if n is a happy number, and false if not.



//General plan. If it loops in a cycle, we can check to see whether it's
//stuck in a cycle by comparing against past solutions.

//Ie, record each sum of squares as digit -> sum.
//If we reach a digit (key) with a value that is not undefined, we are in a loop.
//If so, we exit and return false. If at any time before that we find a sum of 1, we
//return true.

function happyNumber(num){

  const calcSumSquares = num => {
    let digitString = '' + num;
    let total = 0;
    for (let digit of digitString){
      total += (+digit) ** 2;
    }
    return total;
  }

  let currentNum = num;
  const sumMap = {};
  while (sumMap[currentNum] === undefined){
    let newSum = calcSumSquares(currentNum);

    if (newSum === 1) return true;
    sumMap[currentNum] = newSum;
    currentNum = newSum;
  }
  return false;
}