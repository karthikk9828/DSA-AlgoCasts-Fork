// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels02(str: string): number {
  let count = 0;
  const vowelRegex = /[aeiou]/gi;
  const matches = str.match(vowelRegex);

  count = matches === null ? 0 : matches!.length;
  console.log(`${str} : ${count}`);
  return count;
}

vowels02("Hi There!");
vowels02("Why do you ask?");
vowels02("Why?");

module.exports = vowels02;
