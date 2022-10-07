// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str: string): string {
  let charCountMap = new Map<String, number>();

  for (const char of str) {
    if (charCountMap.has(char)) {
      charCountMap.set(char, charCountMap.get(char)! + 1);
    } else {
      charCountMap.set(char, 1);
    }
  }

  let max = 0;
  let maxchar = "";
  for (const pair of charCountMap) {
    if (pair[1] > max) {
      max = pair[1];
      maxchar = pair[0].toString();
    }
  }

  console.log(maxchar);

  return maxchar;
}

maxChar("abcccccccd");
maxChar("apple 1231111");

module.exports = maxChar;
