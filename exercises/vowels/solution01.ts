// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str: string): number {
  let count = 0;
  const vowelList = ["a", "e", "i", "o", "u"];

  for (const char of str.split("")) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  console.log(`${str} : ${count}`);
  return count;
}

vowels("Hi There!");
vowels("Why do you ask?");
vowels("Why?");

module.exports = vowels;
