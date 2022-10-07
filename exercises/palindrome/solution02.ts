// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome02(str: string): boolean {
  const array = str.split("");
  for (let i = 0, j = array.length - 1; i < j; i++, j--) {
    if (array[i] !== array[j]) {
      console.log(`${str} : no`);
      return false;
    }
  }

  console.log(`${str} : yes`);

  return true;
}

palindrome02("abba");
palindrome02("abbas");

module.exports = palindrome02;
