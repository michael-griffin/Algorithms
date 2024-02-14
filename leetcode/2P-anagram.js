// 125. Valid Palindrome

// A phrase is a palindrome if, after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters, it reads
// the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


//How I would actually solve:
function checkPal(str){
  let validChars = /[A-Za-z0-9]/g;
  let validStr = str.toLowerCase().match(validChars)?.join('');

  if (!validStr) return true; //empty strings are palindromes apparently.
  let reversed = validStr.split('').reverse().join('');
  return validStr === reversed;
}


//2 pointer method:
//Left pointer starts at index 0, right at index length-1
//When setting pointers, check if valid first. When both are valid, check if match
//Then update both pointers, continue until left index >= right index.

function checkPalindrome(str){
  str = str.toLowerCase();

  let left = 0;
  let right = str.length - 1;
  let validChars = /[A-Za-z0-9]/
  while (left < right){
    if (!validChars.test(str[left])) {
      left++;
      continue;
    }
    if (!validChars.test(str[right])) {
      right--;
      continue;
    }

    if (str[left] !== str[right]){
      return false;
    }
    else {
      left++;
      right--;
    }
  }

  return true;
}


